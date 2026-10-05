// Builds the static site into public/. Run: node build.js
const fs = require("fs");
const path = require("path");
const SERVICES = require("./src/services.js");

const SITE = "https://ruffquote.com";
const EMAIL = "hello@ruffquote.com";
const OUT = path.join(__dirname, "public");

const LOGO = `<svg viewBox="10 4 180 236" width="34" height="44" aria-hidden="true"><path stroke="#1b2428" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M60 162 C34 150 26 128 34 104"/><ellipse fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" cx="96" cy="118" rx="29" ry="58" transform="rotate(22 96 118)"/><ellipse fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" cx="74" cy="168" rx="30" ry="30"/><path stroke="#1b2428" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M66 180 L58 206 L66 226"/><path stroke="#1b2428" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M92 182 L104 206 L104 226"/><path fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" d="M58 222 h24 a6 6 0 0 1 0 10 h-26 a5 5 0 0 1 2-10z"/><path fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" d="M98 222 h22 a6 6 0 0 1 0 10 h-24 a5 5 0 0 1 2-10z"/><path stroke="#1b2428" stroke-width="39" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M104 84 L120 52"/><path stroke="#1b2428" stroke-width="23" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M122 94 C136 100 150 100 160 92"/><ellipse fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" cx="166" cy="89" rx="10" ry="7" transform="rotate(-25 166 89)"/><path stroke="#1b2428" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M118 108 C124 122 128 132 140 134"/><ellipse fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" cx="142" cy="133" rx="9" ry="6"/><circle fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" cx="124" cy="40" r="22"/><path fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" d="M128 26 C142 18 160 20 166 30 C171 38 168 50 158 56 C148 61 136 60 128 54z"/><ellipse fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" cx="138" cy="50" rx="17" ry="12"/><path fill="#1b2428" stroke="#1b2428" stroke-width="9" stroke-linejoin="round" d="M104 30 C102 16 112 8 124 12 C120 16 117 22 116 30z"/><path stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M60 162 C34 150 26 128 34 104"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="96" cy="118" rx="29" ry="58" transform="rotate(22 96 118)"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="74" cy="168" rx="30" ry="30"/><path stroke="#fff" stroke-width="17" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M66 180 L58 206 L66 226"/><path stroke="#fff" stroke-width="17" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M92 182 L104 206 L104 226"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M58 222 h24 a6 6 0 0 1 0 10 h-26 a5 5 0 0 1 2-10z"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M98 222 h22 a6 6 0 0 1 0 10 h-24 a5 5 0 0 1 2-10z"/><path stroke="#fff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M104 84 L120 52"/><path stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M122 94 C136 100 150 100 160 92"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="166" cy="89" rx="10" ry="7" transform="rotate(-25 166 89)"/><path stroke="#fff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M118 108 C124 122 128 132 140 134"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="142" cy="133" rx="9" ry="6"/><circle fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="124" cy="40" r="22"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M128 26 C142 18 160 20 166 30 C171 38 168 50 158 56 C148 61 136 60 128 54z"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="138" cy="50" rx="17" ry="12"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M104 30 C102 16 112 8 124 12 C120 16 117 22 116 30z"/><path d="M88 150 C80 160 78 172 84 184 M120 112 C112 104 108 96 112 88" stroke="#1b2428" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M98 68 L126 82" stroke="#0b6e8a" stroke-width="9" stroke-linecap="round"/><circle cx="114" cy="88" r="5" fill="#f2b632" stroke="#1b2428" stroke-width="1.5"/><path d="M120 36 q5 -5 10 0" stroke="#1b2428" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M138 46 C146 54 156 54 162 47" stroke="#1b2428" stroke-width="3.2" fill="none" stroke-linecap="round"/><ellipse cx="164" cy="31" rx="5.5" ry="4.2" fill="#1b2428" /></svg>`;
const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -6 220 220"><circle cx="100" cy="104" r="108" fill="#0b6e8a"/><g transform="translate(14 0) scale(.86)"><path stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M60 162 C34 150 26 128 34 104"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="96" cy="118" rx="29" ry="58" transform="rotate(22 96 118)"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="74" cy="168" rx="30" ry="30"/><path stroke="#fff" stroke-width="17" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M66 180 L58 206 L66 226"/><path stroke="#fff" stroke-width="17" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M92 182 L104 206 L104 226"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M58 222 h24 a6 6 0 0 1 0 10 h-26 a5 5 0 0 1 2-10z"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M98 222 h22 a6 6 0 0 1 0 10 h-24 a5 5 0 0 1 2-10z"/><path stroke="#fff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M104 84 L120 52"/><path stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M122 94 C136 100 150 100 160 92"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="166" cy="89" rx="10" ry="7" transform="rotate(-25 166 89)"/><path stroke="#fff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M118 108 C124 122 128 132 140 134"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="142" cy="133" rx="9" ry="6"/><circle fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="124" cy="40" r="22"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M128 26 C142 18 160 20 166 30 C171 38 168 50 158 56 C148 61 136 60 128 54z"/><ellipse fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" cx="138" cy="50" rx="17" ry="12"/><path fill="#fff" stroke="#fff" stroke-width="0" stroke-linejoin="round" d="M104 30 C102 16 112 8 124 12 C120 16 117 22 116 30z"/><path d="M98 68 L126 82" stroke="#f2b632" stroke-width="9" stroke-linecap="round"/><path d="M120 36 q5 -5 10 0 M138 46 C146 54 156 54 162 47" stroke="#0b6e8a" stroke-width="3.6" fill="none" stroke-linecap="round"/><ellipse cx="164" cy="31" rx="5.5" ry="4.2" fill="#1b2428"/></g></svg>`;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const PHOTOS = require("./src/photos.js");
const up5 = x => Math.ceil(x / 5) * 5;
const plural = w => w.endsWith("man") ? w.slice(0, -3) + "men" : w + "s";
const bySlug = Object.fromEntries(SERVICES.map(s => [s.slug, s]));
// Top-level categories, each split into groups of service slugs
const CATS = [
  { key: "home", name: "Home services", path: "/home-services/", blurb: "Cleaning, yard work, repairs and more around the house.", groups: [
    ["Outside the house", ["pressure-washing", "window-cleaning", "gutter-cleaning", "lawn-mowing", "tree-trimming", "trash-can-cleaning", "christmas-light-installation"]],
    ["Inside and repairs", ["house-cleaning", "carpet-cleaning", "interior-painting", "junk-removal", "drain-cleaning", "handyman"]]
  ] },
  { key: "car", name: "Car services", path: "/car-services/", blurb: "Detailing, oil changes, brakes and other car care.", groups: [
    ["Car care", ["car-detailing", "mobile-mechanic"]]
  ] }
];
CATS.forEach(c => { c.groups = c.groups.map(([g, slugs]) => [g, slugs.filter(x => bySlug[x])]); c.slugs = c.groups.flatMap(([, x]) => x); });
const ungrouped = SERVICES.map(s => s.slug).filter(x => !CATS.some(c => c.slugs.includes(x)));
if (ungrouped.length) { CATS[0].groups[1][1].push(...ungrouped); CATS[0].slugs.push(...ungrouped); }
const GROUPS = CATS.flatMap(c => c.groups);
const catOf = slug => CATS.find(c => c.slugs.includes(slug));

// Compact service row: small photo, name, typical price
function svcTile(s) {
  const [lo, hi] = typicalRange(s);
  return `<a class="tile" href="/${s.slug}/">${photo(pic(s.slug, 0), { sizes: "72px" })}<span><b>${s.name}</b><small>Typical job $${lo}–$${hi}</small></span><i aria-hidden="true">›</i></a>`;
}

const GEAR = require("./src/gear.js");
const AMAZON_TAG = "ruffquote-20";
let GUIDES = [];
try { GUIDES = require("./src/guides.js"); } catch (e) { if (e.code !== "MODULE_NOT_FOUND") throw e; }

// Price range for a job (default inputs if no v), same formula as the browser calculator
function typicalRange(s, v) {
  if (!v) { v = {}; s.fields.forEach(f => { v[f.id] = f.default; }); }
  const est = s.estimate(v);
  const p = (rate, over, travel) => up5(Math.max(s.minCharge || 0, (est.hours * rate + est.supplies + travel) * (1 + over / 100)));
  return [p(s.lowRate, 10, 0), p(s.highRate, 25, 14)];
}

// Unsplash image with responsive sizes
function photo(p, { cls = "", sizes = "100vw", eager = false } = {}) {
  if (!p) return "";
  const u = w => p.url.includes("pexels.com") ? `${p.url}?auto=compress&cs=tinysrgb&w=${w}` : `${p.url}?auto=format&fit=crop&w=${w}&q=70`;
  return `<img class="${cls}" src="${u(800)}" srcset="${[400, 800, 1200, 1600].map(w => `${u(w)} ${w}w`).join(", ")}" sizes="${sizes}" alt="${esc(p.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}
const pic = (slug, i) => (PHOTOS[slug] || [])[i] || (PHOTOS[slug] || [])[0];

function svcCard(s) {
  const [lo, hi] = typicalRange(s);
  return `<a class="svc" href="/${s.slug}/">${photo(pic(s.slug, 0), { sizes: "(min-width:860px) 320px, (min-width:560px) 50vw, 100vw" })}<div class="svc-body"><h3>${s.name}</h3><span class="from">Typical job $${lo}–$${hi}</span><span class="go">Check a price →</span></div></a>`;
}

// Amazon search links with our Associates tag; disclosure shown with every block
const amazonUrl = q => `https://www.amazon.com/s?k=${encodeURIComponent(q).replace(/%20/g, "+")}&tag=${AMAZON_TAG}`;
function gearBlock(slug, heading) {
  const items = GEAR[slug];
  if (!items) return "";
  return `<section class="gear" id="gear">
  <h2>${heading}</h2>
  <div class="gear-grid">${items.map(([name, why, q]) => `<a class="gear-item" href="${amazonUrl(q)}" target="_blank" rel="sponsored nofollow noopener"><b>${esc(name)}</b><span>${esc(why)}</span><em>See options on Amazon →</em></a>`).join("")}</div>
  <p class="disclose">As an Amazon Associate, RuffQuote earns from qualifying purchases. It doesn't change your price.</p>
</section>`;
}

// Small row of top Amazon picks for the price cards
function gearQuick(slug) {
  const items = (GEAR[slug] || []).slice(0, 3);
  if (!items.length) return "";
  return `<div class="quickshop"><b>Doing it yourself?</b> Top picks on Amazon: ${items.map(([name, , q]) => `<a href="${amazonUrl(q)}" target="_blank" rel="sponsored nofollow noopener">${esc(name)}</a>`).join("")}<a class="more" href="#gear">See all gear ↓</a><small>As an Amazon Associate we earn from qualifying purchases.</small></div>`;
}

function layout({ title, description, urlPath, body, service, jsonld, image }) {
  const og = !image ? "" : image.url.includes("pexels.com") ? `${image.url}?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop` : `${image.url}?auto=format&fit=crop&w=1200&h=630&q=70`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${SITE}${urlPath}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${SITE}${urlPath}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RuffQuote">
${og ? `<meta property="og:image" content="${og}">\n<meta name="twitter:card" content="summary_large_image">` : ""}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="preconnect" href="https://images.pexels.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Public+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/style.css">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head>
<body${service ? ` data-service="${service}"` : ""}>
<header class="site-top">
  <div class="wrap top">
    <a class="brand" href="/" aria-label="RuffQuote home">${LOGO}<span>Ruff<b>Quote</b></span></a>
    <nav aria-label="Main"><a href="/home-services/">Home services</a><a href="/car-services/">Car services</a><a href="/cost-guides/">Cost guides</a><a class="btn btn-sm" href="mailto:${EMAIL}?subject=${encodeURIComponent("Get my business listed")}">Get listed</a></nav>
  </div>
</header>
<main class="page">
${body}
</main>
<footer class="site-foot">
  <div class="wrap foot">
    <div class="foot-brand"><a class="brand" href="/">${LOGO}<span>Ruff<b>Quote</b></span></a><p>Fair prices for home and car services. Free for homeowners and pros.</p></div>
    ${CATS.map(c => `<div><h4><a href="${c.path}">${c.name}</a></h4><ul>${c.slugs.map(x => `<li><a href="/${x}/">${bySlug[x].name}</a></li>`).join("")}</ul></div>`).join("\n    ")}
  </div>
  <div class="wrap fine">
    <span>© ${new Date().getFullYear()} RuffQuote. Prices are estimates, not quotes. Photos from Unsplash and Pexels. As an Amazon Associate, RuffQuote earns from qualifying purchases.</span>
    <span><a href="/about/">About</a> · <a href="/privacy/">Privacy</a> · <a href="mailto:${EMAIL}">${EMAIL}</a></span>
  </div>
</footer>
${service ? `<script src="/assets/services.js"></script><script src="/assets/app.js"></script>` : ""}
</body>
</html>
`;
}

function servicePage(s) {
  const work = s.work || s.noun;
  const proPlural = plural(s.pro);
  const [tlo, thi] = typicalRange(s);
  const group = GROUPS.find(([, slugs]) => slugs.includes(s.slug));
  const related = [...group[1], ...SERVICES.map(x => x.slug)].filter((x, i, a) => x !== s.slug && a.indexOf(x) === i).slice(0, 3);
  const body = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="${catOf(s.slug).path}">${catOf(s.slug).name}</a> / <span>${s.name}</span></nav>
<div class="banner">
  ${photo(pic(s.slug, 0), { cls: "banner-img", sizes: "(min-width:1072px) 1040px, 100vw", eager: true })}
  <div class="banner-text"><span class="pill">${s.name}</span><p>A typical job runs <b>$${tlo}–$${thi}</b>. Adjust the details below for your own price.</p></div>
</div>
<div class="tabs" role="tablist">
  <button type="button" class="tab" role="tab" id="t-cust" aria-controls="p-cust" aria-selected="true">I need ${s.noun}</button>
  <button type="button" class="tab" role="tab" id="t-pro" aria-controls="p-pro" aria-selected="false">I'm a ${s.pro}</button>
</div>

<section id="p-cust" class="panel" role="tabpanel" aria-labelledby="t-cust">
  <div>
    <div class="eyebrow">${s.name} cost calculator</div>
    <h1>How much should ${s.noun} cost?</h1>
    <p class="lede">Answer a few questions to see a fair price range and what most people pay. Use it to check a quote before you book.</p>
  </div>
  <div class="grid">
    <form id="cust-form" autocomplete="off"></form>
    <div class="card" aria-live="polite">
      <div>
        <div class="eyebrow">Fair price</div>
        <div class="big" id="range"></div>
        <div class="muted" id="typical"></div>
        <div class="rangebar" aria-hidden="true"><span></span></div>
        <div class="rangelabels" aria-hidden="true"><span>Newer pro</span><span>Typical</span><span>Experienced pro</span></div>
      </div>
      <div class="note" id="includes"></div>
      <div class="cta">
        <p><b>Local ${proPlural} near you</b></p>
        <p class="muted">We're adding trusted local ${proPlural} soon. Are you one? Get listed so customers here can find you.</p>
        <a class="linkbtn" href="#pros" data-go="pros">See the ${s.pro} price tool</a>
      </div>
      ${gearQuick(s.slug)}
    </div>
  </div>
  ${gearBlock(s.slug, `Doing some of it yourself? Handy gear for ${esc(work)}`)}
  <div class="split">
  <div class="prose">
    <h2>What affects the price of ${work}</h2>
    <ul class="checks">${s.factors.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
    <p>The low end of the range is a newer ${s.pro} at about $${s.lowRate} an hour. The high end is an experienced pro at about $${s.highRate} an hour who travels to you.${s.minCharge ? ` Many ${proPlural} have a minimum charge of around $${s.minCharge}.` : ""} Prices are higher in big cities.</p>
  </div>
  ${photo(pic(s.slug, 1), { cls: "side-img", sizes: "(min-width:860px) 420px, 100vw" })}
  </div>
  <div class="prose faq">
    <h2>Common questions</h2>
    ${s.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
  </div>
  ${GUIDES.some(g => g.service === s.slug) ? `<div><h2>${s.name} cost guides</h2><ul class="guidelist">${GUIDES.filter(g => g.service === s.slug).map(g => `<li><a href="/${s.slug}/${g.slug}/">${esc(g.job[0].toUpperCase() + g.job.slice(1))} cost</a></li>`).join("")}</ul></div>` : ""}
  <div>
    <h2>Other services people price</h2>
    <div class="services">${related.map(x => svcCard(bySlug[x])).join("")}</div>
  </div>
</section>

<section id="p-pro" class="panel" role="tabpanel" aria-labelledby="t-pro" hidden>
  <div>
    <div class="eyebrow">Free pricing tool for ${proPlural}</div>
    <h2 style="font-size:clamp(32px,6vw,48px);line-height:1.05">How much should I charge for ${work}?</h2>
    <p class="lede">Enter what your time is worth and your costs. You get a price list you can paste into a flyer, Facebook post or booking page.</p>
  </div>
  <div class="grid">
    <form id="pro-form" autocomplete="off">
      <div class="field"><label class="label" for="rate">What you want to earn per hour</label>
        <div class="inrow"><span>$</span><input id="rate" type="number" inputmode="decimal" min="0" step="1"></div>
        <small>Your pay for time on the job. Supplies are added separately.</small></div>
      <div class="field"><label class="label" for="miles">Round-trip miles to a typical job</label>
        <div class="inrow"><input id="miles" type="number" inputmode="decimal" min="0" step="1" value="16"><span>miles</span></div></div>
      <div class="field"><label class="label" for="permile">Driving cost per mile</label>
        <div class="inrow"><span>$</span><input id="permile" type="number" inputmode="decimal" min="0" step="0.05" value="0.70"></div>
        <small>Gas, wear and insurance. The IRS business mileage rate is a common benchmark.</small></div>
      <div class="field"><label class="label" for="over">Overhead and profit</label>
        <div class="inrow"><input id="over" type="number" inputmode="decimal" min="0" step="1" value="15"><span>%</span></div>
        <small>Covers equipment, card fees, slow weeks and no-shows.</small></div>
    </form>
    <div class="card">
      <h2>Your price list</h2>
      <div class="tablebox"><table>
        <thead><tr><th>Job</th><th class="num">Time</th><th class="num">Price</th></tr></thead>
        <tbody id="rows"></tbody>
      </table></div>
      <div class="actions"><button type="button" class="btn" id="copy">Copy price list</button><span id="copied" class="muted" role="status"></span></div>
      <textarea id="out" readonly aria-label="Price list text"></textarea>
      <div class="cta">
        <p><b>Get customers from RuffQuote.</b> Homeowners use this site to check ${work} prices. Get listed and show up next to their results.</p>
        <a class="linkbtn" href="mailto:${EMAIL}?subject=${encodeURIComponent("List my " + s.name.toLowerCase() + " business")}">Email us to get listed: ${EMAIL}</a>
      </div>
    </div>
  </div>
  <div class="prose">
    <h2>How the prices are worked out</h2>
    <p>Each price is your hourly rate times the typical time for that job, plus supplies and driving, plus your overhead and profit, rounded up to the nearest $5.${s.minCharge ? ` Small jobs use a $${s.minCharge} minimum.` : ""} If you work faster or slower than the times shown, adjust your hourly rate.</p>
    <p>Before you post prices, check two or three local ${proPlural} on Google or Facebook. If you're well below them, you can probably charge more.</p>
    <p><a href="#" data-go="cust">See what customers expect to pay</a></p>
  </div>
</section>`;
  const title = `${s.name} Cost Calculator: What Should You Pay? | RuffQuote`;
  const description = `Free ${s.name.toLowerCase()} cost calculator. See a fair price range for your job, what most people pay, and what affects the price. ${s.name} pros can build a price list too.`;
  const jsonld = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: s.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
  };
  return layout({ title, description, urlPath: `/${s.slug}/`, body, service: s.slug, jsonld, image: pic(s.slug, 0) });
}

function homePage() {
  const body = `
<section class="hero">
  ${photo(pic("home", 0), { cls: "hero-img", sizes: "(min-width:1072px) 1040px, 100vw", eager: true })}
  <div class="hero-text">
    <div class="eyebrow">Free price checks for home and car services</div>
    <h1>Know the fair price before you book or bid.</h1>
    <p>See what gutter cleaning, oil changes, drain snaking, house cleaning and more should cost near you. No sign-up, no sales calls.</p>
    <form class="pick" action="/" onsubmit="event.preventDefault();var v=this.svc.value;if(v)location.href='/'+v+'/';">
      <label class="sr" for="svc">What do you need done?</label>
      <select id="svc" name="svc" required><option value="">What do you need done?</option>${CATS.map(c => `<optgroup label="${c.name}">${c.slugs.map(x => `<option value="${x}">${bySlug[x].name}</option>`).join("")}</optgroup>`).join("")}</select>
      <button class="btn btn-lg" type="submit">See prices</button>
    </form>
    <a class="hero-pro" href="#pros">Run a service business? Build your price list →</a>
  </div>
</section>
<section class="perks">
  <div><b>${SERVICES.length} services</b><span>From junk removal to oil changes</span></div>
  <div><b>Price in seconds</b><span>Answer a few questions, get a fair range</span></div>
  <div><b>100% free</b><span>No account, no phone number, no spam</span></div>
</section>
<section id="services" class="groups">
  <div><div class="eyebrow">Pick a service</div><h2 class="h2-lg">What are you pricing?</h2></div>
  <div class="cattabs">
    ${CATS.map((c, i) => `<input type="radio" name="cat" id="cat-${c.key}"${i === 0 ? " checked" : ""}><label for="cat-${c.key}">${c.name} <small>${c.slugs.length}</small></label>`).join("")}
    ${CATS.map(c => `<div class="catpanel" id="panel-${c.key}">${c.groups.map(([g, slugs]) => `<div class="group">${c.groups.length > 1 ? `<h3 class="group-h">${g}</h3>` : ""}<div class="tiles">${slugs.map(x => svcTile(bySlug[x])).join("")}</div></div>`).join("")}<a class="seeall" href="${c.path}">See all ${c.name.toLowerCase()} with photos →</a></div>`).join("")}
  </div>
</section>
<section class="steps">
  <div><div class="eyebrow">How it works</div><h2 class="h2-lg">Check a quote in three steps</h2></div>
  <ol>
    <li><b>Pick your service</b><span>Choose the job, like gutter cleaning or an oil change.</span></li>
    <li><b>Add the details</b><span>Home size, how dirty, how many windows. Whatever changes the price.</span></li>
    <li><b>See the fair range</b><span>Compare it with the quote you got, or use it to set your budget.</span></li>
  </ol>
</section>
<section id="pros" class="proband">
  ${photo(pic("handyman", 1), { cls: "proband-img", sizes: "(min-width:860px) 480px, 100vw" })}
  <div class="proband-text">
    <div class="eyebrow">For pros</div>
    <h2 class="h2-lg">Not sure what to charge?</h2>
    <p>Every calculator has a free tool for detailers, cleaners, mechanics and handymen. Enter your hourly rate and costs, and get a ready-to-post price list.</p>
    <p>Want homeowners here to find you? Featured listings are coming to each service page.</p>
    <div class="actions"><a class="btn btn-light" href="/car-detailing/#pros">Try the pro price tool</a><a class="btn btn-ghost" href="mailto:${EMAIL}?subject=${encodeURIComponent("Get my business listed")}">Get listed</a></div>
  </div>
</section>
${GUIDES.length ? `<section id="guides"><div class="eyebrow">Cost guides</div><h2 class="h2-lg">Popular price questions</h2><ul class="guidelist">${["tv-mounting-cost", "oil-change-cost", "junk-removal-cost", "cost-to-paint-a-room", "main-sewer-line-cleaning-cost", "christmas-light-installation-cost", "deep-cleaning-cost", "brake-pad-replacement-cost"].map(x => GUIDES.find(g => g.slug === x)).filter(Boolean).map(g => `<li><a href="/${g.service}/${g.slug}/">How much does ${esc(g.job.replace(/^(a|an) /, ""))} cost?</a></li>`).join("")}</ul><p><a class="seeall" href="/cost-guides/">See all ${GUIDES.length} cost guides →</a></p></section>` : ""}
<section class="prose">
  <h2>Where the numbers come from</h2>
  <p>Each calculator uses the typical time a job takes, the cost of supplies, and the hourly rates local pros charge. The low end of each range is a newer pro. The high end is an experienced pro who travels to you.</p>
  <p>These are estimates to help you check a quote, not quotes themselves. Prices vary by city and by the details of each job.</p>
</section>`;
  return layout({
    title: "RuffQuote: Fair Prices for Home and Car Services",
    description: "Free calculators that show what home, car and handyman services should cost, from gutter cleaning and oil changes to drain cleaning and TV mounting.",
    urlPath: "/", body, image: pic("home", 0)
  });
}

function guidePage(g) {
  const s = bySlug[g.service];
  const [lo, hi] = typicalRange(s, g.calc);
  const mid = up5((lo + hi) / 2);
  const est = s.estimate(g.calc);
  const others = GUIDES.filter(x => x.service === g.service && x.slug !== g.slug);
  const body = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="${catOf(s.slug).path}">${catOf(s.slug).name}</a> / <a href="/${s.slug}/">${s.name}</a> / <span>${esc(g.job[0].toUpperCase() + g.job.slice(1))} cost</span></nav>
<section class="guide-top">
  <div>
    <div class="eyebrow">${s.name} cost guide</div>
    <h1>How much does ${esc(g.job.replace(/^(a|an) /, ""))} cost?</h1>
    <p class="lede">${esc(g.intro)}</p>
  </div>
  <div class="card answer">
    <div class="eyebrow">Typical price</div>
    <div class="big">$${lo} – $${hi}</div>
    <div class="muted">Most people pay around $${mid}. About ${Math.round(est.hours * 4) / 4} hours of work.</div>
    <a class="btn" href="/${s.slug}/">Get a price for your job</a>
    ${gearQuick(s.slug)}
  </div>
</section>
${photo(pic(s.slug, 1), { cls: "guide-img", sizes: "(min-width:1072px) 1040px, 100vw", eager: true })}
<section class="prose wide">
  <h2>${esc(g.job[0].toUpperCase() + g.job.slice(1))} prices at a glance</h2>
  <div class="tablebox"><table>
    <thead><tr><th>Job</th><th class="num">Newer pro</th><th class="num">Experienced pro</th></tr></thead>
    <tbody>${g.rows.map(r => { const [a, b] = typicalRange(s, r.v); return `<tr><td><b>${esc(r.label)}</b></td><td class="num price">$${a}</td><td class="num price">$${b}</td></tr>`; }).join("")}</tbody>
  </table></div>
  <p class="muted">Labor and basic supplies. Big parts or appliances you buy yourself are extra. Prices run higher in big cities.</p>
</section>
${gearBlock(s.slug, "Gear that helps")}
<div class="split">
  <section class="prose">
    <h2>What's usually included</h2>
    <ul class="checks">${g.included.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
    <h2>What changes the price</h2>
    <ul class="checks">${g.factors.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
  </section>
  <aside class="card tipcard">
    <h3>Ways to save</h3>
    <ul>${g.tips.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
  </aside>
</div>
<section class="prose">
  <h2>Do it yourself or hire a pro?</h2>
  <p>${esc(g.diy)}</p>
</section>

<section class="prose faq">
  <h2>Common questions</h2>
  ${g.faq.map(([q, a]) => `<details open><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}
</section>
<section class="proband slim">
  <div class="proband-text">
    <h2 class="h2-lg">Got a quote for ${esc(g.job)}?</h2>
    <p>Enter your job details and see if the price is fair. ${plural(s.pro)[0].toUpperCase() + plural(s.pro).slice(1)} can build a price list too.</p>
    <div class="actions"><a class="btn btn-light" href="/${s.slug}/">Open the ${s.name.toLowerCase()} calculator</a><a class="btn btn-ghost" href="/${s.slug}/#pros">I'm a ${s.pro}</a></div>
  </div>
</section>
${others.length ? `<section><h2>More ${s.name.toLowerCase()} cost guides</h2><ul class="guidelist">${others.map(x => `<li><a href="/${x.service}/${x.slug}/">${esc(x.job[0].toUpperCase() + x.job.slice(1))} cost</a></li>`).join("")}</ul></section>` : ""}`;
  const jsonld = { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: g.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return layout({ title: `${g.title} | RuffQuote`, description: g.description, urlPath: `/${s.slug}/${g.slug}/`, body, jsonld, image: pic(s.slug, 1) });
}

function categoryPage(c) {
  const guides = GUIDES.filter(g => c.slugs.includes(g.service));
  const other = CATS.find(x => x !== c);
  const body = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span>${c.name}</span></nav>
<section>
  <div class="eyebrow">${c.slugs.length} calculators</div>
  <h1>${c.name}: what should it cost?</h1>
  <p class="lede">${c.blurb} Pick a service to see a fair price range for your job. Pros can build a price list on the same page.</p>
</section>
${c.groups.map(([g, slugs]) => `<section class="group">${c.groups.length > 1 ? `<h2 class="group-h">${g}</h2>` : ""}<div class="services">${slugs.map(x => svcCard(bySlug[x])).join("")}</div></section>`).join("\n")}
${guides.length ? `<section><h2>${c.name.replace(" services", "")} cost guides</h2><ul class="guidelist">${guides.map(g => `<li><a href="/${g.service}/${g.slug}/">How much does ${esc(g.job.replace(/^(a|an) /, ""))} cost?</a></li>`).join("")}</ul></section>` : ""}
<p><a class="seeall" href="${other.path}">Looking for ${other.name.toLowerCase()}? →</a></p>`;
  return layout({ title: `${c.name} Cost Calculators | RuffQuote`, description: `Free cost calculators for ${c.name.toLowerCase()}: ${c.slugs.map(x => bySlug[x].name.toLowerCase()).join(", ")}. See fair prices before you book.`.slice(0, 158), urlPath: c.path, body, image: pic(c.slugs[0], 0) });
}

function guidesIndexPage() {
  const body = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span>Cost guides</span></nav>
<section>
  <div class="eyebrow">${GUIDES.length} guides</div>
  <h1>Cost guides</h1>
  <p class="lede">Plain answers to "how much does it cost?" for common home and car jobs, with price tables and tips to save.</p>
</section>
${CATS.map(c => `<section class="group"><h2 class="group-h">${c.name}</h2>${c.slugs.filter(x => GUIDES.some(g => g.service === x)).map(x => `<div><h3>${bySlug[x].name}</h3><ul class="guidelist">${GUIDES.filter(g => g.service === x).map(g => `<li><a href="/${g.service}/${g.slug}/">How much does ${esc(g.job.replace(/^(a|an) /, ""))} cost?</a></li>`).join("")}</ul></div>`).join("")}</section>`).join("\n")}`;
  return layout({ title: "Cost Guides for Home and Car Services | RuffQuote", description: "How much do common home and car jobs cost? Price tables, what's included and ways to save for junk removal, painting, oil changes, TV mounting and more.", urlPath: "/cost-guides/", body });
}

function simplePage(urlPath, title, description, html) {
  return layout({ title, description, urlPath, body: `<section class="prose">${html}</section>` });
}

const pages = {
  "index.html": homePage(),
  "about/index.html": simplePage("/about/", "About RuffQuote", "What RuffQuote is and how its price estimates work.", `
<h1>About RuffQuote</h1>
<p>RuffQuote helps homeowners check whether a quote is fair, and helps small service businesses set prices with confidence.</p>
<p>Our estimates come from the typical time each job takes, the cost of supplies, and the hourly rates that newer and experienced pros charge. They're a starting point, not a quote. Your local prices may be higher or lower.</p>
<p>Questions, corrections or want your business listed? Email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>`),
  "privacy/index.html": simplePage("/privacy/", "Privacy Policy | RuffQuote", "How RuffQuote handles your information.", `
<h1>Privacy policy</h1>
<p>Last updated ${new Date().toISOString().slice(0, 10)}.</p>
<p>RuffQuote's calculators run in your browser. We don't ask for your name, address or payment details, and the numbers you enter aren't sent to us.</p>
<p>We may use privacy-friendly analytics to count visits, and may show ads from third parties such as Google. Those providers may use cookies to show relevant ads. You can manage ad personalization at <a href="https://adssettings.google.com">adssettings.google.com</a>.</p>
<p>Some links go to Amazon. As an Amazon Associate, RuffQuote earns from qualifying purchases. Amazon may set cookies when you click those links.</p>
<p>If you email us, we use your email only to reply. Contact: <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>`),
  "404.html": simplePage("/404", "Page not found | RuffQuote", "This page doesn't exist.", `
<h1>Page not found</h1><p>That page doesn't exist. <a href="/">Go to the home page</a> to pick a service.</p>`)
};
SERVICES.forEach(s => { pages[`${s.slug}/index.html`] = servicePage(s); });
GUIDES.forEach(g => { pages[`${g.service}/${g.slug}/index.html`] = guidePage(g); });
CATS.forEach(c => { pages[`${c.path.slice(1)}index.html`] = categoryPage(c); });
if (GUIDES.length) pages["cost-guides/index.html"] = guidesIndexPage();

fs.rmSync(OUT, { recursive: true, force: true });
for (const [file, html] of Object.entries(pages)) {
  const p = path.join(OUT, file);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html);
}
fs.mkdirSync(path.join(OUT, "assets"), { recursive: true });
for (const f of ["services.js", "app.js", "style.css"]) fs.copyFileSync(path.join(__dirname, "src", f), path.join(OUT, "assets", f));
fs.writeFileSync(path.join(OUT, "favicon.svg"), FAVICON);
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
const urls = ["/", ...CATS.map(c => c.path), "/cost-guides/", ...SERVICES.map(s => `/${s.slug}/`), ...GUIDES.map(g => `/${g.service}/${g.slug}/`), "/about/", "/privacy/"];
fs.writeFileSync(path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join("\n")}\n</urlset>\n`);
console.log(`Built ${Object.keys(pages).length} pages into public/`);
