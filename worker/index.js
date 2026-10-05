// Handles the "Get listed" form. Everything else is served from public/ by the assets binding.
// Signups are stored in the SIGNUPS KV namespace (view them in the Cloudflare dashboard under Storage > KV).

const FIELDS = { business: 120, name: 80, service: 80, area: 80, phone: 40, email: 120, website: 200, plan: 20, notes: 1000 };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/listing") {
      if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
      return saveListing(request, env);
    }
    return env.ASSETS.fetch(request);
  }
};

async function saveListing(request, env) {
  const form = await request.formData();
  const back = msg => Response.redirect(new URL(`/get-listed/?error=${encodeURIComponent(msg)}`, request.url).toString(), 303);
  // Bots fill the hidden "company" field or submit instantly
  if (form.get("company") || Date.now() - Number(form.get("t") || 0) < 3000) return Response.redirect(new URL("/get-listed/thanks/", request.url).toString(), 303);

  const data = {};
  for (const [k, max] of Object.entries(FIELDS)) data[k] = String(form.get(k) || "").trim().slice(0, max);
  if (!data.business || !data.service || !data.area) return back("Please fill in your business name, service and area.");
  if (!data.email && !data.phone) return back("Please add an email or phone number so customers can reach you.");
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return back("That email address doesn't look right.");

  const now = new Date().toISOString();
  const key = `listing:${now}:${crypto.randomUUID().slice(0, 8)}`;
  await env.SIGNUPS.put(key, JSON.stringify({ ...data, received: now, country: request.cf?.country || "" }));
  return Response.redirect(new URL("/get-listed/thanks/", request.url).toString(), 303);
}
