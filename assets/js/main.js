(() => {
  const LANG_KEY = "portfolio-lang";
  const CAT_LABEL = { ai: "proj.filter.ai", fullstack: "proj.filter.fullstack", mobile: "proj.filter.mobile" };

  let lang = "en";
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "tr") lang = saved;
  } catch (_) {}

  let filter = "all";
  let openId = null;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // Resolve a { en, tr } value (or a plain string) for the current language.
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v);
  const ui = (key) => t(UI[key]) ?? key;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const tagList = (items) => `<ul class="tags">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

  /* ---------- static strings ---------- */
  function renderStatic() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = ui(el.dataset.i18n)));
    $$("[data-i18n-html]").forEach((el) => (el.innerHTML = ui(el.dataset.i18nHtml)));
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    const mailto = `mailto:${PROFILE.email}`;
    $("#mail-link").href = mailto;
    $("#contact-mail").href = mailto;
    $("#contact-mail").textContent = PROFILE.email;
    $("#li-link").href = PROFILE.linkedin;
    $("#contact-li").href = PROFILE.linkedin;
    $("#gh-link").href = PROFILE.github;
    $("#contact-gh").href = PROFILE.github;
    $("#cv-link").href = PROFILE.cv;
    $("#loc").textContent = t(PROFILE.location);
    $("#contact-loc").textContent = t(PROFILE.location);
    $("#stat-projects").textContent = PROJECTS.length;
  }

  /* ---------- experience ---------- */
  function renderExperience() {
    $("#timeline").innerHTML = EXPERIENCE.map(
      (job) => `
      <li class="job reveal${job.current ? " is-current" : ""}">
        <article class="job__card">
          <div class="job__top">
            <h3 class="job__role">${esc(t(job.role))} <span class="job__org">@ ${esc(job.org)}</span></h3>
            <span class="job__date">${esc(t(job.date))}</span>
          </div>
          <div class="job__meta">
            <span>${esc(t(job.location))}</span>
            <span class="badge${job.current ? " badge--live" : ""}">${esc(ui("exp.type." + job.type))}</span>
          </div>
          <ul class="bullets">${job.bullets.map((b) => `<li>${esc(t(b))}</li>`).join("")}</ul>
          ${tagList(job.tags)}
        </article>
      </li>`
    ).join("");
  }

  /* ---------- projects ---------- */
  function renderFilters() {
    const cats = ["all", "ai", "fullstack", "mobile"];
    const count = (c) => (c === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cats.includes(c)).length);
    $("#filters").innerHTML = cats
      .map(
        (c) => `<button type="button" data-filter="${c}" aria-pressed="${c === filter}">
          ${esc(ui(c === "all" ? "proj.filter.all" : CAT_LABEL[c]))}<span class="count">${count(c)}</span>
        </button>`
      )
      .join("");
  }

  function projectDetail(p) {
    const side = [];
    if (p.metrics) {
      side.push(`<div><h4>${esc(ui("proj.results"))}</h4><div class="metrics">${p.metrics
        .map((m) => `<div class="metric"><strong>${esc(m.value)}</strong><span>${esc(t(m.label))}</span></div>`)
        .join("")}</div></div>`);
      if (p.results) side.push(`<p class="result">${esc(t(p.results))}</p>`);
    } else if (p.results) {
      side.push(`<div><h4>${esc(ui("proj.results"))}</h4><p class="result">${esc(t(p.results))}</p></div>`);
    }
    side.push(`<div><h4>${esc(ui("proj.stack"))}</h4>${tagList(p.stack)}</div>`);
    if (p.links && p.links.length) {
      side.push(`<div class="links">${p.links
        .map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(t(l.label))} ↗</a>`)
        .join("")}</div>`);
    }

    return `
      <div class="detail">
        <div>
          <h4>${esc(ui("proj.overview"))}</h4>
          <p>${esc(t(p.overview))}</p>
          <h4>${esc(ui("proj.did"))}</h4>
          <ul class="bullets">${p.did.map((d) => `<li>${esc(t(d))}</li>`).join("")}</ul>
        </div>
        <div class="detail__side">${side.join("")}</div>
      </div>`;
  }

  function renderProjects() {
    $("#project-grid").innerHTML = PROJECTS.map((p) => {
      const open = p.id === openId;
      const visible = filter === "all" || p.cats.includes(filter);
      return `
      <article class="proj${open ? " is-open" : ""}" id="p-${p.id}" ${visible ? "" : "hidden"}>
        <div class="proj__head">
          <div class="proj__top">
            <span class="proj__cats">${p.cats
              .map((c) => `<span class="cat cat--${c}">#${esc(ui(CAT_LABEL[c]).toLowerCase().replace(/\s/g, ""))}</span>`)
              .join("")}</span>
            <span>${esc(t(p.date))}</span>
          </div>
          <h3 class="proj__title">${esc(t(p.title))}</h3>
          <p class="proj__subtitle">${esc(t(p.subtitle))}</p>
          <p class="proj__summary">${esc(t(p.summary))}</p>
          <div class="proj__foot">
            <span class="proj__context">${esc(t(p.context))}</span>
            <button type="button" class="proj__toggle" data-toggle="${p.id}"
              aria-expanded="${open}" aria-controls="pb-${p.id}">
              <span>${esc(ui(open ? "proj.less" : "proj.more"))}</span><span class="chev" aria-hidden="true">›</span>
            </button>
          </div>
        </div>
        <div class="proj__body" id="pb-${p.id}">${open ? projectDetail(p) : ""}</div>
      </article>`;
    }).join("");
  }

  function setOpen(id, { scroll = false } = {}) {
    openId = openId === id ? null : id;
    renderProjects();
    if (openId) {
      history.replaceState(null, "", `#p-${openId}`);
      if (scroll) $(`#p-${openId}`).scrollIntoView({ block: "start" });
    } else {
      history.replaceState(null, "", "#projects");
    }
  }

  /* ---------- skills ---------- */
  function renderSkills() {
    const groups = SKILLS.map(
      (g) => `<div class="skill reveal"><h3><span>›</span> ${esc(t(g.group))}</h3>${tagList(g.items)}</div>`
    ).join("");
    const spoken = `
      <div class="skill skill--spoken reveal">
        <h3><span>›</span> ${lang === "tr" ? "Konuşulan Diller" : "Spoken Languages"}</h3>
        <div class="spoken">${SPOKEN.map(
          (s) => `<div class="spoken__row"><div><strong>${esc(t(s.lang))}</strong><span>${esc(t(s.level))}</span></div>
            <div class="bar"><i style="width:${s.pct}%"></i></div></div>`
        ).join("")}</div>
      </div>`;
    $("#skills-grid").innerHTML = groups + spoken;
  }

  /* ---------- education, certs, volunteering ---------- */
  function renderEducation() {
    $("#edu-card").innerHTML = `
      <div class="edu__icon" aria-hidden="true">SU</div>
      <div>
        <h3>${esc(t(EDUCATION.school))}</h3>
        <p class="edu__degree">${esc(t(EDUCATION.degree))}</p>
        <span class="edu__date">${esc(t(EDUCATION.date))}</span>
        <dl class="facts">${EDUCATION.facts
          .map((f) => `<div><dt>${esc(t(f.k))}</dt><dd>${esc(t(f.v))}</dd></div>`)
          .join("")}</dl>
      </div>`;

    $("#cert-list").innerHTML = CERTS.map(
      (c) => `<li><time>${esc(t(c.date))}</time><div><strong>${esc(t(c.name))}</strong><span>${esc(t(c.org))}</span></div></li>`
    ).join("");

    $("#vol-list").innerHTML = VOLUNTEER.map(
      (v) => `<li><time>${esc(t(v.date))}</time><div><strong>${esc(t(v.org))}</strong><span>${esc(t(v.role))}</span>
        <p>${esc(t(v.desc))}</p></div></li>`
    ).join("");
  }

  /* ---------- typing effect ---------- */
  let typeTimer = null;
  function startTyping() {
    clearTimeout(typeTimer);
    const el = $("#typed");
    const roles = ui("hero.roles");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = roles[0];
      return;
    }
    let r = 0, i = 0, deleting = false;
    const tick = () => {
      const word = roles[r];
      i += deleting ? -1 : 1;
      el.textContent = word.slice(0, i);
      let delay = deleting ? 28 : 55;
      if (!deleting && i === word.length) { deleting = true; delay = 1800; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
      typeTimer = setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- scroll reveal + active nav ---------- */
  let revealObs;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    revealObs ??= new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); revealObs.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    $$(".reveal:not(.is-in)").forEach((el) => revealObs.observe(el));
  }

  function observeNav() {
    if (!("IntersectionObserver" in window)) return;
    const links = $$(".nav__links a");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${e.target.id}`));
      }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $$("main section[id]").forEach((s) => obs.observe(s));
  }

  /* ---------- render all ---------- */
  function renderAll() {
    renderStatic();
    renderExperience();
    renderFilters();
    renderProjects();
    renderSkills();
    renderEducation();
    startTyping();
    observeReveals();
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
    renderAll();
    $$(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- events ---------- */
  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) return setLang(langBtn.dataset.lang);

    const filterBtn = e.target.closest("[data-filter]");
    if (filterBtn) {
      filter = filterBtn.dataset.filter;
      const current = PROJECTS.find((p) => p.id === openId);
      if (current && filter !== "all" && !current.cats.includes(filter)) openId = null;
      renderFilters();
      renderProjects();
      return;
    }

    const toggle = e.target.closest("[data-toggle]");
    if (toggle) return setOpen(toggle.dataset.toggle, { scroll: true });

    const navLink = e.target.closest(".nav__links a");
    if (navLink) closeMenu();
  });

  const menuBtn = $(".nav__toggle");
  const menu = $("#nav-links");
  function closeMenu() {
    menu.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  $("#copy-mail").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      btn.textContent = ui("contact.copied");
      setTimeout(() => (btn.textContent = ui("contact.copy")), 1600);
    } catch (_) {
      location.href = `mailto:${PROFILE.email}`;
    }
  });

  $("#year").textContent = new Date().getFullYear();

  // Deep link: /#p-<id> opens that project on load.
  const hash = location.hash.replace(/^#p-/, "");
  if (hash && PROJECTS.some((p) => p.id === hash)) openId = hash;

  renderAll();
  observeNav();
  // Content is rendered by JS, so the browser's own jump to the hash lands too early — redo it.
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "instant" }));
})();
