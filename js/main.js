const images = [
  { src: "assets/hero.jpg", alt: "Paesaggio con luce cinematica", tag: "Hero Mood" },
  { src: "assets/profilo.jpg", alt: "Ritratto creativo per profilo", tag: "Artist Portrait" },
  { src: "assets/progetto-1.jpg", alt: "Concept urbano per progetto", tag: "Urban Vision" },
  { src: "assets/progetto-2.jpg", alt: "Concept organico e astratto", tag: "Organic Future" },
  { src: "assets/contatti.jpg", alt: "Atmosfera per contatti", tag: "Contact Scene" },
  { src: "assets/bg.jpg", alt: "Sfondo evocativo", tag: "Backdrop" },
  { src: "assets/hero.jpg", alt: "Variante paesaggio artistico", tag: "Luminous Peak" },
  { src: "assets/progetto-2.jpg", alt: "Dettaglio texture cinematiche", tag: "Cinematic Texture" },
  { src: "assets/profilo.jpg", alt: "Dettaglio ritratto neon", tag: "Neon Face" },
  { src: "assets/progetto-1.jpg", alt: "Strutture architettoniche immaginifiche", tag: "Future Grid" }
];

function buildGallery() {
  const gallery = document.getElementById("galleryGrid");
  if (!gallery) return;

  const html = images.map((item) => `
    <figure class="gallery-item reveal">
      <img loading="lazy" src="${item.src}" alt="${item.alt}">
      <figcaption class="tag">${item.tag}</figcaption>
    </figure>
  `).join("");

  gallery.innerHTML = html;
}

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

buildGallery();
mobileNav();
revealOnScroll();
setYear();
