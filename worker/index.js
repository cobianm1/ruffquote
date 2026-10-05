// Handles provider signups and the "pros near you" lookup. Everything else is served from public/ by the assets binding.
// Data lives in the SIGNUPS KV namespace (Cloudflare dashboard > Storage > Workers KV):
//   signup:<time>:<id>          every form submission, as sent
//   pro:<service>:<id>          the public listing shown to customers (delete the key to remove a listing)
import { lookupZip } from "./zips.js";

// true: listings show right away. false: they're saved with "approved": false until edited to true.
const AUTO_PUBLISH = true;
const FIELDS = { business: 120, name: 80, service: 80, zip: 10, radius: 4, phone: 40, email: 120, website: 200, plan: 20, notes: 1000 };
const MAX_JOBS = 12;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/listing") {
      if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
      return saveListing(request, env);
    }
    if (url.pathname === "/api/pros") return findPros(request, env, url);
    return env.ASSETS.fetch(request);
  }
};

const redirect = (request, path) => Response.redirect(new URL(path, request.url).toString(), 303);

async function saveListing(request, env) {
  const form = await request.formData();
  const back = msg => redirect(request, `/get-listed/?error=${encodeURIComponent(msg)}`);
  // Bots fill the hidden "company" field or submit instantly
  if (form.get("company") || Date.now() - Number(form.get("t") || 0) < 3000) return redirect(request, "/get-listed/thanks/");

  const data = {};
  for (const [k, max] of Object.entries(FIELDS)) data[k] = String(form.get(k) || "").trim().slice(0, max);
  const names = form.getAll("job_name"), prices = form.getAll("job_price");
  const jobs = [];
  for (let i = 0; i < names.length && jobs.length < MAX_JOBS; i++) {
    const name = String(names[i] || "").trim().slice(0, 80);
    const price = Math.round(Number(String(prices[i] || "").replace(/[$,\s]/g, "")));
    if (name && price > 0 && price < 100000) jobs.push({ name, price });
  }
  if (!data.business || !data.service || !data.zip) return back("Please fill in your business name, service and ZIP code.");
  if (!data.email && !data.phone) return back("Please add an email or phone number so customers can reach you.");
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return back("That email address doesn't look right.");
  const place = lookupZip(data.zip.slice(0, 5));
  if (!place) return back("Please enter a valid 5-digit US ZIP code.");

  const now = new Date().toISOString();
  const id = crypto.randomUUID().slice(0, 8);
  await env.SIGNUPS.put(`signup:${now}:${id}`, JSON.stringify({ ...data, jobs, received: now, country: request.cf?.country || "" }));

  if (/^[a-z-]{2,40}$/.test(data.service) && data.service !== "other") {
    const website = /^https?:\/\//i.test(data.website) ? data.website : data.website ? `https://${data.website}` : "";
    const listing = {
      business: data.business, phone: data.phone, email: data.email, website,
      zip: data.zip.slice(0, 5), city: place.city, state: place.state, lat: place.lat, lon: place.lon,
      radius: [10, 25, 50].includes(Number(data.radius)) ? Number(data.radius) : 25,
      jobs, featured: false, approved: AUTO_PUBLISH, created: now
    };
    await env.SIGNUPS.put(`pro:${data.service}:${id}`, JSON.stringify(listing));
  }
  return redirect(request, "/get-listed/thanks/");
}

function miles(a, b) {
  const r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLon = (b.lon - a.lon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLon / 2) ** 2;
  return 3959 * 2 * Math.asin(Math.sqrt(h));
}

async function findPros(request, env, url) {
  const service = url.searchParams.get("service") || "";
  if (!/^[a-z-]{2,40}$/.test(service)) return Response.json({ error: "bad service" }, { status: 400 });
  const zip = (url.searchParams.get("zip") || "").slice(0, 5);
  let here = zip ? lookupZip(zip) : null;
  if (here) here = { ...here, zip };
  else if (request.cf?.latitude) here = { lat: Number(request.cf.latitude), lon: Number(request.cf.longitude), city: request.cf.city || "", state: request.cf.regionCode || "", zip: request.cf.postalCode || "" };

  const keys = await env.SIGNUPS.list({ prefix: `pro:${service}:`, limit: 200 });
  const all = await Promise.all(keys.keys.map(k => env.SIGNUPS.get(k.name, { type: "json", cacheTtl: 60 })));
  const pros = all
    .filter(p => p && p.approved)
    .map(p => ({ p, d: here ? miles(here, p) : null }))
    .filter(({ p, d }) => d === null || d <= p.radius + 5)
    .sort((a, b) => (b.p.featured - a.p.featured) || ((a.d ?? 0) - (b.d ?? 0)))
    .slice(0, 10)
    .map(({ p, d }) => ({ business: p.business, phone: p.phone, email: p.email, website: p.website, city: p.city, state: p.state, miles: d === null ? null : Math.round(d), jobs: p.jobs, featured: p.featured }));
  return Response.json({ near: here ? { city: here.city, state: here.state, zip: here.zip } : null, pros }, { headers: { "Cache-Control": "private, max-age=60" } });
}
