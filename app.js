(() => {
  'use strict';
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if(menuToggle) menuToggle.textContent = '☰';
  }));

  const filters = document.querySelectorAll('[data-filter]');
  const resources = document.querySelectorAll('[data-level]');
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(btn => {
      const active = btn === button;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    resources.forEach(card => {card.hidden = filter !== 'all' && card.dataset.level !== filter;});
  }));

  const toast = document.querySelector('#site-toast');
  let toastTimer;
  function showToast(message) {
    if(!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 5700);
  }
  document.querySelectorAll('[data-private-link]').forEach(button => {
    button.addEventListener('click', () => {
      const url = window.OUR_ENGLISH_HUB_PRIVATE_URL;
      if(typeof url === 'string' && /^https:\/\//i.test(url.trim())) {
        const newWindow = window.open(url.trim(), '_blank', 'noopener,noreferrer');
        if(!newWindow) showToast('Please allow pop-ups for the approved student space, or ask your teacher for its link.');
      } else {
        showToast('Student space is not connected yet. Ask your teacher for the school-approved Éléa link. / Espace élèves à configurer.');
      }
    });
  });
})();
