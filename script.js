// =========================================================
// Portfolio interactions (vanilla JavaScript, no libraries)
// 1. Dark / light theme toggle (saved in localStorage)
// 2. Mobile menu open / close
// 3. Highlight the nav link of the section on screen
// 4. Reveal sections on scroll
// 5. Current year in the footer
// =========================================================

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

// ---------- 1. Theme toggle ----------
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  // Tell screen-reader users what the button will do next.
  const next = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${next} mode`);
}

// Set the correct label on page load (theme itself was set in <head>).
applyTheme(root.getAttribute("data-theme") || "light");

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ---------- 2. Mobile menu ----------
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuToggle.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// Close the menu after a link is clicked, or when Escape is pressed.
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => setMenu(false))
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

// ---------- 3. Active nav link ----------
// IntersectionObserver tells us when a section enters the screen.
const sections = document.querySelectorAll("main section[id]");
const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = linkFor(entry.target.id);
      if (!link) return; // the hero has no nav link
      if (entry.isIntersecting) {
        navLinks.querySelectorAll("a").forEach((a) => {
          a.classList.remove("active");
          a.removeAttribute("aria-current");
        });
        link.classList.add("active");
        link.setAttribute("aria-current", "true");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" } // "active" = section is in the middle of the screen
);
sections.forEach((section) => sectionObserver.observe(section));

// ---------- 4. Reveal on scroll ----------
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---------- 5. Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
