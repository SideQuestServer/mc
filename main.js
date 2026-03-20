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
