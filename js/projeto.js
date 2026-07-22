/* =========================================================
   PROJETO.JS
   Lê "?p=chave" da URL, procura a chave em window.PROJECTS
   (definido em js/projects-data.js) e preenche a página.
   Também cuida da troca PT/EN e da galeria de fotos.
   ========================================================= */

(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("p") || "gamecube";
  const project = (window.PROJECTS || {})[slug];

  let currentLang = "pt";

  function applyLang(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-pt][data-en]").forEach((el) => {
      el.textContent = el.dataset[lang];
    });
    document.querySelectorAll(".lang-switch .pill-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function renderRole() {
    const section = document.getElementById("role-section");
    if (!project.myRole_pt && !project.myRole_en) {
      section.style.display = "none";
      return;
    }
    const roleEl = document.getElementById("proj-role");
    roleEl.dataset.pt = project.myRole_pt || "";
    roleEl.dataset.en = project.myRole_en || project.myRole_pt || "";
  }

  function renderList(key, sectionId, listId) {
    const ptList = project[key + "_pt"];
    const enList = project[key + "_en"];
    const section = document.getElementById(sectionId);

    if (!ptList || !ptList.length) {
      section.style.display = "none";
      return;
    }

    const listEl = document.getElementById(listId);
    listEl.innerHTML = "";
    ptList.forEach((text, i) => {
      const li = document.createElement("li");
      li.dataset.pt = text;
      li.dataset.en = (enList && enList[i]) || text;
      listEl.appendChild(li);
    });
  }

  function renderNotFound() {
    document.getElementById("proj-title").textContent = "Projeto não encontrado";
    document.getElementById("proj-desc").textContent =
      "Verifique se o link está correto ou volte para a lista de projetos.";
    document.getElementById("proj-stack").innerHTML = "";
    document.querySelector(".project-gallery").style.display = "none";
  }

  function renderProject() {
    if (!project) {
      renderNotFound();
      return;
    }

    document.title = project.title + " — João Eduardo";
    document.getElementById("proj-title").textContent = project.title;

    const descEl = document.getElementById("proj-desc");
    descEl.dataset.pt = project.desc_pt || "";
    descEl.dataset.en = project.desc_en || "";

    const stackEl = document.getElementById("proj-stack");
    stackEl.innerHTML = "";
    (project.stack || []).forEach((item) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = item;
      stackEl.appendChild(span);
    });

    renderRole();
    renderList("features", "features-section", "proj-features");
    renderList("results", "results-section", "proj-results");

    const images =
      project.images && project.images.length
        ? project.images
        : ["img/projects/placeholder.png"];

    const mainImg = document.getElementById("gallery-main-img");
    mainImg.src = images[0];
    mainImg.alt = project.title;

    const thumbsEl = document.getElementById("gallery-thumbs");
    thumbsEl.innerHTML = "";

    if (images.length > 1) {
      images.forEach((src, i) => {
        const thumb = document.createElement("img");
        thumb.src = src;
        thumb.alt = project.title + " - foto " + (i + 1);
        thumb.className = "gallery-thumb" + (i === 0 ? " active" : "");
        thumb.addEventListener("click", () => {
          mainImg.src = src;
          thumbsEl
            .querySelectorAll(".gallery-thumb")
            .forEach((el) => el.classList.remove("active"));
          thumb.classList.add("active");
        });
        thumbsEl.appendChild(thumb);
      });
    } else {
      thumbsEl.style.display = "none";
    }

    applyLang(currentLang);
  }

  document.querySelectorAll(".lang-switch .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  renderProject();
})();