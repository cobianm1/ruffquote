# RuffQuote

Free price calculators for home and car services at ruffquote.com. Each service page has two sides: what a customer should pay, and what a pro should charge.

## Editing

- `src/services.js`: the services, their questions, time estimates and FAQ text
- `src/app.js`: the calculator logic in the browser
- `src/style.css`: the look
- `build.js`: turns these into the finished pages

Run `node build.js` after any change. It rewrites `public/`, which is what gets published.

## Hosting

Cloudflare Workers (static assets), connected to this repo. `wrangler.jsonc` tells Cloudflare to serve the `public` folder. Build command: none. Deploy command: `npx wrangler deploy`.

## Weekly routine

A scheduled Claude session runs every Monday. It adds a few new cost guides (in a new `src/guides-<date>.js` file), runs `node build.js`, and pushes to `main`, which deploys. It never adds providers, reviews or made-up businesses.

If `GSC_SERVICE_ACCOUNT_JSON` is set in the cloud environment, it also runs `node tools/traffic.js` for a Google Search Console report (clicks, impressions, top searches and pages) and uses searches that show up without a matching guide as ideas for new ones. The key belongs to a service account added as a Restricted (read-only) user in Search Console.
