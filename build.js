// Builds the static site into public/. Run: node build.js
const fs = require("fs");
const path = require("path");
const SERVICES = require("./src/services.js");

const SITE = "https://ruffquote.com";
const EMAIL = "hello@ruffquote.com";
const OUT = path.join(__dirname, "public");

const LOGO = `<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><path fill="#7a4a2a" d="M16 12c-6.5-.5-11.5 4.5-12 12.5-.4 7 1.6 13.5 5.6 15.2 3.2 1.3 6-1.6 7-5.6l3.2-14.3c.6-4.2-.6-7.5-3.8-7.8z"/><path fill="#7a4a2a" d="M48 12c6.5-.5 11.5 4.5 12 12.5.4 7-1.6 13.5-5.6 15.2-3.2 1.3-6-1.6-7-5.6l-3.2-14.3c-.6-4.2.6-7.5 3.8-7.8z"/><path fill="#d9a066" d="M32 13c10.5 0 17.5 7.6 17.5 17.3 0 7-3 12.2-7.6 15.2H22.1c-4.6-3-7.6-8.2-7.6-15.2C14.5 20.6 21.5 13 32 13z"/><path fill="#7a4a2a" d="M37 21c4-2.4 9-.4 9.8 4.2.6 3.6-1.6 6.8-5 7-3.6.2-6.4-2.6-6.6-6.2-.1-2 .6-3.8 1.8-5z"/><ellipse cx="32" cy="40" rx="11" ry="8.2" fill="#fff6ec"/><circle cx="24.6" cy="28.5" r="2.9" fill="#1b2428"/><circle cx="25.6" cy="27.5" r="1" fill="#fff"/><circle cx="39.6" cy="28.5" r="2.9" fill="#1b2428"/><circle cx="40.6" cy="27.5" r="1" fill="#fff"/><path fill="#f28b9b" d="M29.6 42.2h4.8v3a2.4 2.4 0 0 1-4.8 0z"/><path fill="#1b2428" d="M28.4 35.4c0-1.4 1.6-2.2 3.6-2.2s3.6.8 3.6 2.2c0 1.6-1.8 3-3.6 3s-3.6-1.4-3.6-3z"/><path d="M32 38.2v2.6M32 40.8c-1 1.3-3 1.5-4 .3M32 40.8c1 1.3 3 1.5 4 .3" stroke="#1b2428" stroke-width="1.2" fill="none" stroke-linecap="round"/><path fill="#0b6e8a" d="M20.5 45.5h23c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-23c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5z"/><circle cx="32" cy="55" r="5.6" fill="#f2b632"/><circle cx="32" cy="50" r="1.2" fill="#c98f12"/><text x="32" y="57.6" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="7.5" text-anchor="middle" fill="#7a4a12">$</text></svg>`;
const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#7a4a2a" d="M16 12c-6.5-.5-11.5 4.5-12 12.5-.4 7 1.6 13.5 5.6 15.2 3.2 1.3 6-1.6 7-5.6l3.2-14.3c.6-4.2-.6-7.5-3.8-7.8z"/><path fill="#7a4a2a" d="M48 12c6.5-.5 11.5 4.5 12 12.5.4 7-1.6 13.5-5.6 15.2-3.2 1.3-6-1.6-7-5.6l-3.2-14.3c-.6-4.2.6-7.5 3.8-7.8z"/><path fill="#d9a066" d="M32 13c10.5 0 17.5 7.6 17.5 17.3 0 7-3 12.2-7.6 15.2H22.1c-4.6-3-7.6-8.2-7.6-15.2C14.5 20.6 21.5 13 32 13z"/><path fill="#7a4a2a" d="M37 21c4-2.4 9-.4 9.8 4.2.6 3.6-1.6 6.8-5 7-3.6.2-6.4-2.6-6.6-6.2-.1-2 .6-3.8 1.8-5z"/><ellipse cx="32" cy="40" rx="11" ry="8.2" fill="#fff6ec"/><circle cx="24.6" cy="28.5" r="2.9" fill="#1b2428"/><circle cx="25.6" cy="27.5" r="1" fill="#fff"/><circle cx="39.6" cy="28.5" r="2.9" fill="#1b2428"/><circle cx="40.6" cy="27.5" r="1" fill="#fff"/><path fill="#f28b9b" d="M29.6 42.2h4.8v3a2.4 2.4 0 0 1-4.8 0z"/><path fill="#1b2428" d="M28.4 35.4c0-1.4 1.6-2.2 3.6-2.2s3.6.8 3.6 2.2c0 1.6-1.8 3-3.6 3s-3.6-1.4-3.6-3z"/><path d="M32 38.2v2.6M32 40.8c-1 1.3-3 1.5-4 .3M32 40.8c1 1.3 3 1.5 4 .3" stroke="#1b2428" stroke-width="1.2" fill="none" stroke-linecap="round"/><path fill="#0b6e8a" d="M20.5 45.5h23c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-23c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5z"/><circle cx="32" cy="55" r="5.6" fill="#f2b632"/><circle cx="32" cy="50" r="1.2" fill="#c98f12"/><text x="32" y="57.6" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="7.5" text-anchor="middle" fill="#7a4a12">$</text></svg>`;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function layout({ title, description, urlPath, body, service, jsonld }) {
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
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Public+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/style.css">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head>
<body${service ? ` data-service="${service}"` : ""}>
<div class="page">
<header class="top">
  <a class="brand" href="/" aria-label="RuffQuote home">${LOGO}<span>Ruff<b>Quote</b></span></a>
  <nav aria-label="Main"><a href="/#services">Services</a><a href="/about/">About</a></nav>
</header>
${body}
<footer>
  <span>© ${new Date().getFullYear()} RuffQuote. Prices are estimates, not quotes.</span>
  <span><a href="/about/">About</a> · <a href="/privacy/">Privacy</a> · <a href="mailto:${EMAIL}">${EMAIL}</a></span>
</footer>
</div>
${service ? `<script src="/assets/services.js"></script><script src="/assets/app.js"></script>` : ""}
</body>
</html>
`;
}

function servicePage(s) {
  const work = s.work || s.noun;
  const proPlural = s.pro + "s";
  const body = `
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
      </div>
      <div class="note" id="includes"></div>
      <div class="cta">
        <p><b>Local ${proPlural} near you</b></p>
        <p class="muted">We're adding trusted local ${proPlural} soon. Are you one? Get listed so customers here can find you.</p>
        <a class="linkbtn" href="#pros" data-go="pros">See the ${s.pro} price tool</a>
      </div>
    </div>
  </div>
  <div class="prose">
    <h2>What affects the price of ${work}</h2>
    <ul>${s.factors.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
    <p>The low end of the range is a newer ${s.pro} at about $${s.lowRate} an hour. The high end is an experienced pro at about $${s.highRate} an hour who travels to you.${s.minCharge ? ` Many ${proPlural} have a minimum charge of around $${s.minCharge}.` : ""} Prices are higher in big cities.</p>
  </div>
  <div class="prose faq">
    <h2>Common questions</h2>
    ${s.faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join("")}
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
  return layout({ title, description, urlPath: `/${s.slug}/`, body, service: s.slug, jsonld });
}

function homePage() {
  const body = `
<section>
  <div class="eyebrow">Fair prices for home and car services</div>
  <h1>Know the going rate before you book or bid.</h1>
  <p class="lede">Free calculators that show what jobs like gutter cleaning, oil changes, drain snaking and TV mounting should cost. Homeowners get a fair price range. Pros get a price list they can use today.</p>
</section>
<section id="services">
  <h2>Pick a service</h2>
  <div class="services">
    ${SERVICES.map(s => `<a class="svc" href="/${s.slug}/"><h3>${s.name}</h3><span>What to pay, and what to charge</span></a>`).join("\n    ")}
  </div>
</section>
<section class="prose">
  <h2>How RuffQuote works</h2>
  <p>Each calculator uses the typical time a job takes, the cost of supplies, and the hourly rates local pros charge. The low end of each range is a newer pro. The high end is an experienced pro who travels to you.</p>
  <p>These are estimates to help you check a quote, not quotes themselves. Prices vary by city and by the details of each job.</p>
</section>`;
  return layout({
    title: "RuffQuote: Fair Prices for Home and Car Services",
    description: "Free calculators that show what home, car and handyman services should cost, from gutter cleaning and oil changes to drain cleaning and TV mounting.",
    urlPath: "/", body
  });
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
<p>If you email us, we use your email only to reply. Contact: <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>`),
  "404.html": simplePage("/404", "Page not found | RuffQuote", "This page doesn't exist.", `
<h1>Page not found</h1><p>That page doesn't exist. <a href="/">Go to the home page</a> to pick a service.</p>`)
};
SERVICES.forEach(s => { pages[`${s.slug}/index.html`] = servicePage(s); });

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
const urls = ["/", ...SERVICES.map(s => `/${s.slug}/`), "/about/", "/privacy/"];
fs.writeFileSync(path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join("\n")}\n</urlset>\n`);
console.log(`Built ${Object.keys(pages).length} pages into public/`);
