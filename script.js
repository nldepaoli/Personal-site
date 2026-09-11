// Mobile menu open/close
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.mobile-menu .close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => mobileMenu.classList.add('active'));
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
  }

  // Mobile category expand/collapse (residential./commercial.)
  document.querySelectorAll('.mm-cat').forEach(cat => {
    cat.addEventListener('click', () => cat.classList.toggle('open'));
  });

  // Desktop nav — tap-to-open on touch devices (hover handles desktop mouse)
  document.querySelectorAll('nav.primary-nav .nav-item').forEach(item => {
    const label = item.querySelector('.label');
    if (!label) return;
    label.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('nav.primary-nav .nav-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('nav.primary-nav .nav-item').forEach(i => i.classList.remove('open'));
  });
});
