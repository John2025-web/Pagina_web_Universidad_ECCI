// ============================================
// SCRIPT — Conferencia Teoría del Color, ECCI
// Proyecto SENA · Ficha 3288046
// ============================================

// Barra de progreso de lectura
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('progress').style.width = progress + '%';
});

// Animación: las secciones aparecen al hacer scroll
const sections = document.querySelectorAll('.item, .intro, .block-title, .conclusion');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));
