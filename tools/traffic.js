// Weekly Google Search Console report for ruffquote.com.
// Needs GSC_SERVICE_ACCOUNT_JSON: a read-only service account key (raw JSON or base64)
// whose email was added as a Restricted user in Search Console.
// Usage: node tools/traffic.js [days]   (default 7)

const crypto = require("crypto");

const SITE = process.env.GSC_SITE || "sc-domain:ruffquote.com";
const days = Number(process.argv[2]) || 7;

function readKey() {
  let raw = (process.env.GSC_SERVICE_ACCOUNT_JSON || "").trim();
  if (!raw) {
    console.error("GSC_SERVICE_ACCOUNT_JSON is not set, so no traffic report.");
    process.exit(2);
  }
  if (!raw.startsWith("{")) raw = Buffer.from(raw, "base64").toString("utf8");
  return JSON.parse(raw);
}

async function accessToken(key) {
  const b64 = o => Buffer.from(JSON.stringify(o)).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const head = b64({ alg: "RS256", typ: "JWT" });
  const claims = b64({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  });
  const sig = crypto.createSign("RSA-SHA256").update(`${head}.${claims}`).sign(key.private_key, "base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${head}.${claims}.${sig}` })
  });
  if (!res.ok) throw new Error(`token request failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

const ymd = d => d.toISOString().slice(0, 10);

async function query(token, start, end, dimensions, rowLimit = 25) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ startDate: ymd(start), endDate: ymd(end), dimensions, rowLimit })
  });
  if (!res.ok) throw new Error(`Search Console query failed: ${res.status} ${await res.text()}`);
  return (await res.json()).rows || [];
}

function totals(rows) {
  const t = rows.reduce((a, r) => ({ clicks: a.clicks + r.clicks, impressions: a.impressions + r.impressions }), { clicks: 0, impressions: 0 });
  return t;
}

(async () => {
  const token = await accessToken(readKey());
  // Search Console data lags about 2 days.
  const end = new Date(Date.now() - 2 * 864e5);
  const start = new Date(end - (days - 1) * 864e5);
  const prevEnd = new Date(start - 864e5);
  const prevStart = new Date(prevEnd - (days - 1) * 864e5);

  const [now, prev, queries, pages] = await Promise.all([
    query(token, start, end, ["date"], 1000),
    query(token, prevStart, prevEnd, ["date"], 1000),
    query(token, start, end, ["query"], 25),
    query(token, start, end, ["page"], 15)
  ]);
  const a = totals(now), b = totals(prev);

  const out = [];
  out.push(`# RuffQuote search traffic, ${ymd(start)} to ${ymd(end)}`);
  out.push("");
  out.push(`Clicks: ${a.clicks} (previous ${days} days: ${b.clicks})`);
  out.push(`Impressions: ${a.impressions} (previous ${days} days: ${b.impressions})`);
  out.push("");
  out.push("## Top searches");
  out.push("| Search | Clicks | Impressions | Avg position |");
  out.push("|---|---|---|---|");
  for (const r of queries) out.push(`| ${r.keys[0]} | ${r.clicks} | ${r.impressions} | ${r.position.toFixed(1)} |`);
  out.push("");
  out.push("## Top pages");
  out.push("| Page | Clicks | Impressions |");
  out.push("|---|---|---|");
  for (const r of pages) out.push(`| ${r.keys[0].replace("https://ruffquote.com", "")} | ${r.clicks} | ${r.impressions} |`);
  console.log(out.join("\n"));
})().catch(e => {
  console.error(e.message);
  process.exit(1);
});
