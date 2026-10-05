# RuffQuote

Free price calculators for home and car services at ruffquote.com. Each service page has two sides: what a customer should pay, and what a pro should charge.

## Editing

- `src/services.js`: the services, their questions, time estimates and FAQ text
- `src/app.js`: the calculator logic in the browser
- `src/style.css`: the look
- `build.js`: turns these into the finished pages

Run `node build.js` after any change. It rewrites `public/`, which is what gets published.

## Hosting

Cloudflare Pages, connected to this repo. Build command: none. Output directory: `public`.
