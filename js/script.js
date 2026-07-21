// =========================================================
// NAVEGAÇÃO
// =========================================================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  closeMobileNav();
}

function toggleMobileNav() {
  const nav = document.getElementById("main-nav");
  if (nav) nav.classList.toggle("open");
}

function closeMobileNav() {
  const nav = document.getElementById("main-nav");
  if (nav) nav.classList.remove("open");
}

// destaca o link da seção visível
function setActiveNav() {
  const sections = document.querySelectorAll("main section[id]");
  const buttons = document.querySelectorAll("nav button[data-section]");
  let current = "";

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.4) {
      current = section.id;
    }
  });

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === current);
  });
}

// =========================================================
// REVELAÇÃO DE SEÇÕES AO ROLAR
// (progressive enhancement: se falhar, o conteúdo continua visível)
// =========================================================

function initScrollReveal() {
  const sections = document.querySelectorAll("main section");

  if (typeof IntersectionObserver === "undefined") {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("reveal-init");
    observer.observe(section);
  });
}

// =========================================================
// EFEITO DE DIGITAÇÃO NO HERO (bilíngue)
// =========================================================

const ROLE_WORDS = {
  pt: ["Programador", "Dev Front-end", "Estudante de Eng. da Computação"],
  en: ["Developer", "Front-end Dev", "Computer Engineering Student"],
};

let typedTimeoutId = null;

function initTypedRole(lang) {
  const el = document.getElementById("typed-role");
  if (!el) return;

  if (typedTimeoutId) {
    clearTimeout(typedTimeoutId);
    typedTimeoutId = null;
  }

  const words = ROLE_WORDS[lang] || ROLE_WORDS.pt;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        typedTimeoutId = setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    typedTimeoutId = setTimeout(tick, deleting ? 45 : 90);
  }

  tick();
}

// =========================================================
// E-MAIL (proteção simples contra bots de spam)
// endereço fica dividido no HTML (data-user / data-domain)
// e só é montado em texto/link aqui, via JS
// =========================================================

function initEmailLink() {
  const el = document.getElementById("email-link");
  if (!el) return;

  const user = el.dataset.user;
  const domain = el.dataset.domain;
  if (!user || !domain) return;

  const address = `${user}@${domain}`;
  el.textContent = address;
  el.href = `mailto:${address}`;
}

// =========================================================
// IDIOMA (PT / EN)
// =========================================================

let currentLang = "pt";

function setLang(lang) {
  currentLang = lang === "en" ? "en" : "pt";

  document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-pt]").forEach((el) => {
    const text = currentLang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-pt");
    if (text !== null) el.textContent = text;
  });

  document.querySelectorAll(".lang-switch .pill-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  safeRun(() => initTypedRole(currentLang));
}

// =========================================================
// INIT
// =========================================================

function safeRun(fn) {
  try {
    fn();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  safeRun(initScrollReveal);
  safeRun(() => initTypedRole(currentLang));
  safeRun(setActiveNav);
  safeRun(initEmailLink);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

window.addEventListener("scroll", setActiveNav);