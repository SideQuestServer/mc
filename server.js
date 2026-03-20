/* ════════════════════════════════════════════
   SideQuestCommunity – server.js
   Minecraft Server Status + Discord Widget
   ════════════════════════════════════════════ */

const MC_IP = 'SideQuest.serv.cx';

// ── Helper: set stat value ────────────────────
function sv(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = val;
  el.className = 'sc-val';
}
function dim(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = val;
  el.className = 'sc-val dim';
}

// ── Uptime formatter ─────────────────────────
function formatUptime(seconds) {
  if (!seconds || seconds <= 0) return '–';
  var d = Math.floor(seconds / 86400);
  var h = Math.floor((seconds % 86400) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return d + 'd ' + h + 'h';
  if (h > 0) return h + 'h ' + m + 'm';
  return m + 'm';
}

// ── TPS color ────────────────────────────────
function tpsColor(tps) {
  if (tps >= 19) return 'var(--cc-green)';
  if (tps >= 15) return 'var(--cc-yellow)';
  return 'var(--cc-red)';
}

// ── Fetch Minecraft Status ────────────────────
async function fetchMCStatus() {
  const dot = document.getElementById('si-dot');
  const txt = document.getElementById('si-txt');

  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${MC_IP}`);
    const d = await res.json();

    if (d.online) {
      dot.className = 'si-dot online';
      txt.textContent = 'ONLINE';
      txt.className = 'si-txt online';

      const on   = d.players?.online ?? 0;
      const mx   = d.players?.max ?? '?';
      const ver  = (d.version || '?').replace(/NeoForge\s*/i, '').substring(0, 10);
      const ping = d.debug?.ping ?? '–';
      const motd = d.motd?.clean?.[0] || 'SideQuestCommunity – ATM10';

      sv('s-players', on);
      sv('s-max',     mx);
      sv('s-ver',     ver);
      sv('s-ping',    ping);

      document.getElementById('motd-row').textContent = '▶ ' + motd;
      document.getElementById('ps-count').textContent = `${on} / ${mx}`;

      renderPlayers(d.players?.list ?? [], on);

    } else {
      dot.className = 'si-dot offline';
      txt.textContent = 'OFFLINE';
      txt.className = 'si-txt offline';

      ['s-players', 's-max', 's-ver', 's-ping', 's-uptime', 's-tps', 's-mspt', 's-cpu'].forEach(id => dim(id, '–'));
      document.getElementById('motd-row').textContent = '■ Server nicht erreichbar';
      document.getElementById('ps-count').textContent = '0 / –';
      renderPlayers([], 0);
    }
  } catch (e) {
    console.error('MC Status Error:', e);
    if (txt) { txt.textContent = 'FEHLER'; txt.className = 'si-txt offline'; }
  }
}

// ── Render player list ────────────────────────
function renderPlayers(list, online) {
  const body = document.getElementById('ps-body');
  if (!body) return;

  if (online > 0) {
    body.className = 'players-grid';
    body.innerHTML = list.length > 0
      ? list.map(p => `
          <div class="player-chip">
            <img src="https://mc-heads.net/avatar/${p.name}/22"
                 alt="${p.name}"
                 onerror="this.style.display='none'">
            ${p.name}
          </div>`).join('')
      : `<span class="player-chip">${online} Spieler online</span>`;
  } else {
    body.className = 'empty-state';
    body.textContent = 'Gerade niemand online – sei der Erste!';
  }
}

// ── Fetch Discord Widget ──────────────────────
async function fetchDiscord() {
  try {
    // Server widget muss in Discord-Einstellungen aktiviert sein
    const res = await fetch('https://discord.com/api/guilds/1382764127048810668/widget.json');
    if (!res.ok) return;
    const d = await res.json();

    const onlineEl = document.getElementById('dc-online');
    const totalEl  = document.getElementById('dc-total');
    if (onlineEl && d.presence_count != null)        onlineEl.textContent = d.presence_count;
    if (totalEl  && d.approximate_member_count != null) totalEl.textContent = d.approximate_member_count;
  } catch (e) {
    // Widget nicht aktiviert oder Netzwerkfehler – still fail
  }
}

// ── Main fetch (called on load + interval) ────
async function fetchAll() {
  const upd = document.getElementById('last-upd');
  if (upd) upd.textContent = 'Aktualisiert...';

  await Promise.all([fetchMCStatus(), fetchDiscord()]);

  if (upd) upd.textContent = `Zuletzt: ${nowStr()}`;
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  fetchAll();
  setInterval(fetchAll, 60_000); // auto-refresh every 60s
});
