/* =========================
   LOAD SHARED NAVBAR
========================= */
document.addEventListener("DOMContentLoaded", () => {
  fetch("./nav.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);
      highlightActiveNav();
    })
    .catch(err => console.error("Nav load error:", err));
});

/* =========================
   LOAD SHARED FOOTER
========================= */
document.addEventListener("DOMContentLoaded", () => {
  fetch("./footer.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch(err => console.error("Footer load error:", err));
});

/* =========================
   MOBILE NAV (DYNAMIC SAFE)
========================= */
document.addEventListener("click", e => {
  if (e.target.id === "navToggle") {
    const navMenu = document.getElementById("navMenu");
    if (navMenu) navMenu.classList.toggle("active");
  }

  if (e.target.closest(".nav-right a")) {
    const navMenu = document.getElementById("navMenu");
    if (navMenu) navMenu.classList.remove("active");
  }
});

/* =========================
   ACTIVE NAV LINK
========================= */
function highlightActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-right a").forEach(link => {
    const href = link.getAttribute("href");
    if (
      href === current ||
      (current === "index.html" && href.startsWith("index.html#"))
    ) {
      link.classList.add("active");
    }
  });
}

/* =========================
   SCROLL REVEAL (GLOBAL)
========================= */
const revealElements = document.querySelectorAll(
  "section, .stat-card, .pillar, .card, .step"
);

if (revealElements.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
/* =========================
   AUTO BREADCRUMBS
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const breadcrumb = document.getElementById("breadcrumb");
  if (!breadcrumb) return;

  const path = window.location.pathname.split("/").pop();

  // Hide breadcrumbs on home
  if (!path || path === "index.html") {
    breadcrumb.style.display = "none";
    return;
  }

  const pageMap = {
    "offerings.html": "Offerings",
    "infrastructure.html": "Infrastructure",
    "revenue.html": "Revenue",
    "coverage.html": "Coverage",
    "faq.html": "FAQ",
    "policy.html": "Policy"
  };

  const pageTitle = pageMap[path] || "Page";

  breadcrumb.innerHTML = `
    <div class="container">
      <a href="index.html">Home</a>
      <span>›</span>
      <span class="current">${pageTitle}</span>
    </div>
  `;
});
/* =========================
   FAQ ACCORDION (POLISHED)
========================= */
document.addEventListener("click", e => {
  const btn = e.target.closest(".faq-question");
  if (!btn) return;

  const item = btn.closest(".faq-item");
  const isOpen = item.classList.contains("active");

  document.querySelectorAll(".faq-item").forEach(i => {
    i.classList.remove("active");
    const q = i.querySelector(".faq-question");
    if (q) q.setAttribute("aria-expanded", "false");
  });

  if (!isOpen) {
    item.classList.add("active");
    btn.setAttribute("aria-expanded", "true");
  }
});
