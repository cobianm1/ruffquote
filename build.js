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
