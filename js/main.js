function revealOnScroll() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  targets.forEach((node) => observer.observe(node));
}

function mobileNav() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

function setYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

mobileNav();
revealOnScroll();
setYear();


// Shrink header on scroll

let lastScroll = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  lastScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const header = document.querySelector(".site-header");

      if (lastScroll > 40) {  // soglia leggermente più alta = meno oscillazioni
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }

      ticking = false;
    });

    ticking = true;
  }
});



