﻿﻿﻿function revealOnScroll() {
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


// HEADER FIX: Metodo "Sentinel" (più robusto dello scrollY)
// Creiamo un elemento invisibile in cima alla pagina.
// Quando questo elemento esce dallo schermo, rimpiccioliamo l'header.

const sentinel = document.createElement("div");
sentinel.style.position = "absolute";
sentinel.style.top = "0";
sentinel.style.left = "0";
sentinel.style.width = "100%";
sentinel.style.height = "1px"; // Soglia minima: appena scrolli (1px), si rimpicciolisce.
sentinel.style.pointerEvents = "none";
sentinel.style.opacity = "0"; // Più compatibile di visibility: hidden per gli Observer su Safari
document.body.prepend(sentinel);

const headerObserver = new IntersectionObserver((entries) => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  
  // Se la sentinella NON è visibile (isIntersecting = false), significa che abbiamo scrollato giù.
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
}, { threshold: 0 });

headerObserver.observe(sentinel);
