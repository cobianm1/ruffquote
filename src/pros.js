// "Pros near you": lists real providers who signed up, with the job prices they set.
(function () {
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  document.querySelectorAll(".pros[data-service]").forEach(box => {
    const svc = box.dataset.service, pros = box.dataset.pros, pro = box.dataset.pro;
    const list = box.querySelector(".pros-list");
    const where = box.querySelector(".pros-where");
    const form = box.querySelector("form");
    function load(zip) {
      list.setAttribute("aria-busy", "true");
      fetch(`/api/pros?service=${encodeURIComponent(svc)}${zip ? `&zip=${encodeURIComponent(zip)}` : ""}`)
        .then(r => r.ok ? r.json() : Promise.reject(r.status))
        .then(render)
        .catch(() => { list.innerHTML = empty(); })
        .finally(() => list.removeAttribute("aria-busy"));
    }
    function empty() {
      return `<p class="muted">No ${esc(pros)} have listed near you yet. Are you one? <a href="/get-listed/?service=${esc(svc)}">Get listed free</a> and show up here with your prices.</p>`;
    }
    function render(data) {
      if (data.near && (data.near.city || data.near.zip)) where.textContent = `near ${[data.near.city, data.near.state].filter(Boolean).join(", ") || data.near.zip}`;
      if (!data.pros || !data.pros.length) { list.innerHTML = empty(); return; }
      list.innerHTML = `<div class="pros-tip"><b>Quick check before you hire</b><span>These are prices pros post themselves, so treat them as a starting quote. Take two minutes to:</span><ul><li>Look them up on Google or Facebook for reviews</li><li>Ask if they're licensed and insured for the job</li><li>Get the final price in writing before work starts</li></ul></div>` + data.pros.map(p => `<div class="pro-card${p.featured ? " featured" : ""}">
        <div class="pro-head"><b>${esc(p.business)}</b><small>${esc([p.city, p.state].filter(Boolean).join(", "))}${p.miles != null ? ` · ${p.miles} mi` : ""}</small><span class="pro-badge">Not verified by RuffQuote</span></div>
        ${p.jobs && p.jobs.length ? `<ul class="pro-jobs">${p.jobs.slice(0, 6).map(j => `<li><span>${esc(j.name)}</span><b>$${Number(j.price).toLocaleString("en-US")}</b></li>`).join("")}</ul>` : ""}
        <div class="pro-actions">${p.phone ? `<a class="btn btn-sm" href="tel:${esc(p.phone.replace(/[^\d+]/g, ""))}">Call ${esc(p.phone)}</a>` : ""}${p.email ? `<a href="mailto:${esc(p.email)}">Email</a>` : ""}${p.website ? `<a href="${esc(p.website)}" target="_blank" rel="nofollow noopener">Website</a>` : ""}<button type="button" class="pro-report" data-id="${esc(p.id)}">Report</button></div>
      </div>`).join("") + `<p class="pros-note">RuffQuote lists local pros so you can get quotes fast. We don't verify businesses or guarantee their prices or work, so the hiring choice is yours. <a href="/get-listed/?service=${esc(svc)}">Are you a ${esc(pro)}? Get listed</a></p>`;
    }
    list.addEventListener("click", e => {
      const b = e.target.closest(".pro-report");
      if (!b || !confirm("Report this listing as fake, spam or a scam?")) return;
      fetch("/api/report", { method: "POST", body: new URLSearchParams({ service: svc, id: b.dataset.id }) }).finally(() => { b.textContent = "Reported. Thanks"; b.disabled = true; });
    });
    form.addEventListener("submit", e => { e.preventDefault(); const z = form.zip.value.trim(); if (/^\d{5}$/.test(z)) load(z); });
    load("");
  });
})();
