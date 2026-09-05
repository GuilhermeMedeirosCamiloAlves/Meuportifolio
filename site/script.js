// Atualiza o ano no rodapé automaticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Destaca o link de navegação da seção visível no momento (scroll spy simples)
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');

function marcarLinkAtivo() {
  let atual = '';

  sections.forEach((section) => {
    const topo = section.offsetTop - 120;
    if (window.scrollY >= topo) {
      atual = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${atual}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', marcarLinkAtivo);
marcarLinkAtivo();
