(function () {
  const svc = SERVICES.find(s => s.slug === document.body.dataset.service);
  if (!svc) return;
  const $ = id => document.getElementById(id);
  const up5 = x => Math.ceil(x / 5) * 5;
  const money = n => "$" + n.toLocaleString("en-US");

  function price(est, o) {
    const raw = (est.hours * o.rate + est.supplies + o.travel) * (1 + o.over / 100);
    return up5(Math.max(svc.minCharge, raw));
  }
  const LOW = { rate: svc.lowRate, over: 10, travel: 0 };
  const HIGH = { rate: svc.highRate, over: 25, travel: 14 };
  const hrs = h => { const n = Math.round(h * 4) / 4; return n + (n === 1 ? " hr" : " hrs"); };

  /* Customer side */
  const form = $("cust-form");
  svc.fields.forEach(f => {
    const wrap = document.createElement("div");
    wrap.className = "field";
    if (f.type === "chips") {
      wrap.innerHTML = `<span class="label" id="l-${f.id}">${f.label}</span><div class="chips" role="radiogroup" aria-labelledby="l-${f.id}">` +
        f.options.map((o, i) => `<input type="radio" name="${f.id}" id="${f.id}${i}" value="${i}"${i === f.default ? " checked" : ""}><label for="${f.id}${i}">${o}</label>`).join("") +
        `</div>`;
    } else {
      wrap.innerHTML = `<label class="label" for="${f.id}">${f.label}</label><div class="inrow"><input id="${f.id}" type="number" inputmode="decimal" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.default}"><span>${f.unit}</span></div>` +
        (f.help ? `<small>${f.help}</small>` : "");
    }
    form.appendChild(wrap);
  });

  function readCust() {
    const v = {};
    svc.fields.forEach(f => {
      if (f.type === "chips") v[f.id] = +form.querySelector(`input[name="${f.id}"]:checked`).value;
      else {
        let n = parseFloat($(f.id).value);
        if (!isFinite(n)) n = f.default;
        v[f.id] = Math.min(f.max, Math.max(f.min, n));
      }
    });
    return v;
  }

  function renderCust() {
    const v = readCust(), est = svc.estimate(v);
    const lo = price(est, LOW), hi = price(est, HIGH), mid = up5((lo + hi) / 2);
    $("range").textContent = `${money(lo)} – ${money(hi)}`;
    $("typical").textContent = `Most people pay around ${money(mid)}.`;
    $("includes").textContent = `${svc.includes(v)}. Takes about ${hrs(est.hours).replace("hrs","hours").replace(" hr"," hour")}.`;
  }
  form.addEventListener("input", renderCust);
  form.addEventListener("submit", e => e.preventDefault());
  renderCust();

  /* Pro side */
  const pf = $("pro-form");
  const num = id => { const n = parseFloat($(id).value); return isFinite(n) && n >= 0 ? n : 0; };
  $("rate").value = Math.round((svc.lowRate + svc.highRate) / 2);

  function renderPro() {
    const o = { rate: num("rate"), over: num("over"), travel: num("miles") * num("permile") };
    let rows = "", lines = [`${svc.name.toUpperCase()} PRICES`, ""];
    svc.presets.forEach(([a, b, v]) => {
      const est = svc.estimate(v), p = price(est, o);
      rows += `<tr><td><b>${a}</b><small>${b}</small></td><td class="num">${hrs(est.hours)}</td><td class="num price">${money(p)}</td></tr>`;
      lines.push(`${a}, ${b}: ${money(p)}`);
    });
    if (svc.minCharge) lines.push("", `Minimum charge: ${money(svc.minCharge)}`);
    $("rows").innerHTML = rows;
    $("out").value = lines.join("\n");
  }
  pf.addEventListener("input", renderPro);
  pf.addEventListener("submit", e => e.preventDefault());
  renderPro();

  $("copy").addEventListener("click", () => {
    const done = msg => { $("copied").textContent = msg; };
    const fallback = () => { $("out").select(); done("Press Ctrl+C or Cmd+C to copy"); };
    if (navigator.clipboard) navigator.clipboard.writeText($("out").value).then(() => done("Copied"), fallback);
    else fallback();
  });

  /* Tabs */
  function show(which) {
    const pro = which === "pros";
    $("p-cust").hidden = pro; $("p-pro").hidden = !pro;
    $("t-cust").setAttribute("aria-selected", !pro); $("t-pro").setAttribute("aria-selected", pro);
  }
  $("t-cust").addEventListener("click", () => { show("cust"); history.replaceState(null, "", location.pathname); });
  $("t-pro").addEventListener("click", () => { show("pros"); history.replaceState(null, "", "#pros"); });
  document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", e => {
    e.preventDefault(); const g = b.dataset.go; show(g);
    history.replaceState(null, "", g === "pros" ? "#pros" : location.pathname); window.scrollTo(0, 0);
  }));
  if (location.hash === "#pros") show("pros");
})();
