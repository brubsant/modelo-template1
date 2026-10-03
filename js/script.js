// Navbar com fundo ao rolar

const nav = document.querySelector('.site-nav'); //chamando o navbar
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40); // famoso se rolar para baixo acontece x coisa
onScroll();

window.addEventListener('scroll', onScroll, { passive: true });

// Animação de entrada dos elementos ao aparecerem na tela
const items = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 120);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}


// Rolagem suave e fechamento do menu no mobile
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    const menu = document.getElementById('nav');
    if (menu && menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
