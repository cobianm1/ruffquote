// Builds the static site into public/. Run: node build.js
const fs = require("fs");
const path = require("path");
const SERVICES = require("./src/services.js");

const SITE = "https://ruffquote.com";
const EMAIL = "hello@ruffquote.com";
const OUT = path.join(__dirname, "public");

const LOGO = `<svg viewBox="0 0 128 128" width="44" height="44" aria-hidden="true"><path fill="#ffeac8" d="M110.161 52.346c-.802-9.173-7.105-32.792-46.161-32.792S18.641 43.173 17.839 52.346c-.625 7.133-1.7 33.22 13.574 50.742c7.827 8.98 22.102 13.245 32.587 13.245s24.76-4.265 32.587-13.245c15.273-17.522 14.199-43.61 13.574-50.742"/><path fill="#d27856" d="M97.669 68.24c.957 8.2-2.48 15.985-11.371 16.468c-8.134.447-13.104-5.06-13.435-13.107c-.34-8.247 4.002-15.878 10.805-16.609c7.18-.769 13.054 5.048 14.001 13.248"/><path fill="#2f2f2f" d="M47.86 71.683c-.454 3.876-2.448 7.004-6.777 6.55c-3.071-.328-5.133-3.989-4.68-7.875c.453-3.876 1.802-6.664 5.428-6.596c5.632.102 6.482 4.035 6.029 7.921m43.785-1.087c.182 3.898-1.36 7.23-5.858 7.558c-3.91.283-5.916-3.105-6.086-7.003c-.18-3.898 1.757-7.026 5.485-7.49c4.839-.624 6.278 3.036 6.46 6.935M74.849 90.245c.181 3.899-2.448 7.548-10.641 7.446c-7.978-.102-10.879-3.332-11.06-7.23s4.351-7.4 10.845-7.547c8.94-.227 10.674 3.422 10.856 7.331"/><path fill="#e94b8c" d="M56.677 105.986s.963 9.258 1.915 12.023c2.017 5.847 10.517 4.873 12.024-.635c1.28-4.68.43-12.76.43-12.76L63.5 103.55z"/><path fill="#ef87b2" d="M64.383 109.068c-1.326.057-1.28 1.28-1.28 4.09c0 2.823.158 4.522 1.439 4.466c1.28-.057 1.122-2.233 1.122-4.25s.102-4.363-1.281-4.306"/><path fill="#2f2f30" d="M46.077 97.203c-1.53 2.255 1.44 4.25 3.887 5.904c2.448 1.643 5.417 4.148 8.93 4.091c3.932-.057 4.997-2.708 4.997-2.708s1.28 3.139 6.856 2.55c2.98-.318 6.652-3.66 7.763-4.409c2.13-1.439 4.68-3.24 3.558-4.736c-1.28-1.712-3.989.589-6.754 2.017c-2.765 1.439-3.717 2.13-5.79 2.13s-3.514-.85-3.616-4.306c-.09-2.822-.056-3.354-.056-3.354h-4.737s.159 2.98.159 3.83c0 2.232-1.168 3.195-3.4 3.297s-4.624-1.756-5.802-2.447c-1.156-.68-4.77-3.66-5.995-1.859"/><path fill="#d27856" d="M96.826 23.799s26.84 29.054 26.84 30.959c0 5.606-1.533 10.72-4.806 15.128c-2.166 2.917-7.903 4.916-11.888 3.599c-4.096-1.355-7.975-3.804-11.398-19.62c-2.636-12.181-6.156-19.362-9.59-24.044c-3.79-5.17-9.237-9.074-9.237-9.074z"/><path fill="#865b51" d="M101.857 17.351c13.207 3.814 18.53 10.51 20.582 17.427c2.053 6.918 1.979 18.415.376 23.593s-3.205 11.197-10.432 11.515c-6.34.279-9.728-5.313-11.95-14.158C97.316 43.32 92.755 31.31 87.13 26.364c-4.6-4.043-10.382-5.617-10.382-5.617s10.08-7.736 25.11-3.396"/><path fill="#d27856" d="M31.174 23.799S4.334 52.853 4.334 54.758c0 5.606 1.533 10.72 4.806 15.128c2.166 2.917 7.903 4.916 11.888 3.599c4.096-1.355 7.975-3.804 11.398-19.62c2.636-12.181 6.156-19.362 9.59-24.044c3.79-5.17 9.237-9.074 9.237-9.074z"/><path fill="#865b51" d="M26.143 17.351c-13.207 3.814-18.53 10.51-20.582 17.427s-1.979 18.415-.376 23.593S8.39 69.568 15.617 69.886c6.34.279 9.728-5.313 11.95-14.158C30.684 43.32 35.245 31.31 40.87 26.364c4.6-4.043 10.382-5.617 10.382-5.617s-10.08-7.736-25.11-3.396"/></svg>`;
const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#ffeac8" d="M110.161 52.346c-.802-9.173-7.105-32.792-46.161-32.792S18.641 43.173 17.839 52.346c-.625 7.133-1.7 33.22 13.574 50.742c7.827 8.98 22.102 13.245 32.587 13.245s24.76-4.265 32.587-13.245c15.273-17.522 14.199-43.61 13.574-50.742"/><path fill="#d27856" d="M97.669 68.24c.957 8.2-2.48 15.985-11.371 16.468c-8.134.447-13.104-5.06-13.435-13.107c-.34-8.247 4.002-15.878 10.805-16.609c7.18-.769 13.054 5.048 14.001 13.248"/><path fill="#2f2f2f" d="M47.86 71.683c-.454 3.876-2.448 7.004-6.777 6.55c-3.071-.328-5.133-3.989-4.68-7.875c.453-3.876 1.802-6.664 5.428-6.596c5.632.102 6.482 4.035 6.029 7.921m43.785-1.087c.182 3.898-1.36 7.23-5.858 7.558c-3.91.283-5.916-3.105-6.086-7.003c-.18-3.898 1.757-7.026 5.485-7.49c4.839-.624 6.278 3.036 6.46 6.935M74.849 90.245c.181 3.899-2.448 7.548-10.641 7.446c-7.978-.102-10.879-3.332-11.06-7.23s4.351-7.4 10.845-7.547c8.94-.227 10.674 3.422 10.856 7.331"/><path fill="#e94b8c" d="M56.677 105.986s.963 9.258 1.915 12.023c2.017 5.847 10.517 4.873 12.024-.635c1.28-4.68.43-12.76.43-12.76L63.5 103.55z"/><path fill="#ef87b2" d="M64.383 109.068c-1.326.057-1.28 1.28-1.28 4.09c0 2.823.158 4.522 1.439 4.466c1.28-.057 1.122-2.233 1.122-4.25s.102-4.363-1.281-4.306"/><path fill="#2f2f30" d="M46.077 97.203c-1.53 2.255 1.44 4.25 3.887 5.904c2.448 1.643 5.417 4.148 8.93 4.091c3.932-.057 4.997-2.708 4.997-2.708s1.28 3.139 6.856 2.55c2.98-.318 6.652-3.66 7.763-4.409c2.13-1.439 4.68-3.24 3.558-4.736c-1.28-1.712-3.989.589-6.754 2.017c-2.765 1.439-3.717 2.13-5.79 2.13s-3.514-.85-3.616-4.306c-.09-2.822-.056-3.354-.056-3.354h-4.737s.159 2.98.159 3.83c0 2.232-1.168 3.195-3.4 3.297s-4.624-1.756-5.802-2.447c-1.156-.68-4.77-3.66-5.995-1.859"/><path fill="#d27856" d="M96.826 23.799s26.84 29.054 26.84 30.959c0 5.606-1.533 10.72-4.806 15.128c-2.166 2.917-7.903 4.916-11.888 3.599c-4.096-1.355-7.975-3.804-11.398-19.62c-2.636-12.181-6.156-19.362-9.59-24.044c-3.79-5.17-9.237-9.074-9.237-9.074z"/><path fill="#865b51" d="M101.857 17.351c13.207 3.814 18.53 10.51 20.582 17.427c2.053 6.918 1.979 18.415.376 23.593s-3.205 11.197-10.432 11.515c-6.34.279-9.728-5.313-11.95-14.158C97.316 43.32 92.755 31.31 87.13 26.364c-4.6-4.043-10.382-5.617-10.382-5.617s10.08-7.736 25.11-3.396"/><path fill="#d27856" d="M31.174 23.799S4.334 52.853 4.334 54.758c0 5.606 1.533 10.72 4.806 15.128c2.166 2.917 7.903 4.916 11.888 3.599c4.096-1.355 7.975-3.804 11.398-19.62c2.636-12.181 6.156-19.362 9.59-24.044c3.79-5.17 9.237-9.074 9.237-9.074z"/><path fill="#865b51" d="M26.143 17.351c-13.207 3.814-18.53 10.51-20.582 17.427s-1.979 18.415-.376 23.593S8.39 69.568 15.617 69.886c6.34.279 9.728-5.313 11.95-14.158C30.684 43.32 35.245 31.31 40.87 26.364c4.6-4.043 10.382-5.617 10.382-5.617s-10.08-7.736-25.11-3.396"/></svg>`;

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
<p>Questions, corrections or want your business listed? Email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
<p><small>Dog logo from <a href="https://github.com/googlefonts/noto-emoji">Noto Emoji</a> by Google, used under the Apache 2.0 license.</small></p>`),
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
