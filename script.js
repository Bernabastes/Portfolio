// Theme persistence
(function() {
  const storageKey = 'bt-theme';
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem(storageKey);
  const isLight = saved ? saved === 'light' : prefersLight;
  if (isLight) document.documentElement.classList.add('light');

  window.toggleTheme = function() {
    const root = document.documentElement;
    const nowLight = !root.classList.contains('light');
    root.classList.toggle('light');
    localStorage.setItem(storageKey, nowLight ? 'light' : 'dark');
  };
})();

// DOM ready
window.addEventListener('DOMContentLoaded', () => {
  // Theme toggle button
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', () => window.toggleTheme());

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Smooth scroll with minor offset for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const header = document.querySelector('.site-header');
        const offset = header ? header.getBoundingClientRect().height + 8 : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        history.pushState(null, '', id);
      }
    });
  });

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

