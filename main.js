/* ════════════════════════════════════════════
   SideQuestCommunity – main.js
   Navbar-Toggle, IP-Copy, allgemeine Helfer
   ════════════════════════════════════════════ */

// ── Navbar mobile toggle ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('sqc-mob');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sqc-nav') && !e.target.closest('#sqc-mob')) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // ── Active nav link highlight ───────────────
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sqc-nav a, .nav-mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.classList.add('nav-active');
      a.classList.add('dd2-active');
    }
  });
});

// ── IP copy helper ────────────────────────────
function copyIP(ip = 'SideQuest.serv.cx', btnId = 'ip-btn') {
  navigator.clipboard.writeText(ip).then(() => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = '✔ Kopiert!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = orig;
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ── Utility: pad number ───────────────────────
function pad(n) { return String(n).padStart(2, '0'); }

// ── Timestamp ─────────────────────────────────
function nowStr() {
  const n = new Date();
  return `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())} Uhr`;
}

// ── Scroll progress bar ────────────────────────
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  }, { passive: true });
})();

// ── Parallax hero background ───────────────────
(function initParallax() {
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero, .page-hero');
    if (!hero) return;
    const y = window.scrollY;
    const pseudo = hero.style;
    // Move the grid background at half scroll speed
    hero.style.setProperty('--parallax-y', (y * 0.3).toFixed(1) + 'px');
  }, { passive: true });
})();

// ── Scroll reveal (Intersection Observer) ──────
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.sq-card, .part-card, .mcard, .cle, .faqitem, .schip, .build-card, .req-cell, .offer-row, .apply-step, .stat-box'
  );
  if (!targets.length) return;
  targets.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  targets.forEach(el => observer.observe(el));
});
