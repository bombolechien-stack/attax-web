// L'ÉCRAN DE SALLE ANIMÉ (26/11/2026) : attax.app/club-screen?code=ABC123 sur la télé d'une salle.
// Un boxeur en lignes (les poses de l'app) fait du shadow-boxing à droite ; à gauche le classement du mois ; en bas, des
// panneaux qui tournent : les duels d'hier, l'objectif du mois, « rejoins le club » avec le QR. Les données sont relues
// toutes les 5 minutes (sans recharger la page). ?code=DEMO : données d'exemple, pour tester. Aucune donnée de santé.
export function tvHtml(code: string) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Attax · Club</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;overflow:hidden}
body{background:#07090C;color:#fff;font-family:Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
#stage{position:fixed;inset:0}
#boxer{position:absolute;right:-4vw;top:0;height:100vh;width:62vw}
.glow{position:absolute;right:-10vw;top:10vh;width:80vw;height:90vh;background:radial-gradient(ellipse at 60% 55%,rgba(4,67,253,.38),rgba(4,67,253,0) 62%)}
.scan{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 2px,transparent 2px 14px);pointer-events:none}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(7,9,12,.97) 0%,rgba(7,9,12,.92) 44%,rgba(7,9,12,0) 70%)}
.left{position:absolute;left:4.4vw;top:5.5vh;width:min(56vw,calc(100vw - 8.8vw - 30vh));bottom:5vh;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:1vw;font-weight:800;font-size:2.6vh;letter-spacing:.02em;font-style:italic}
.brand svg{height:2.6vh}
.head{display:flex;align-items:center;gap:1.4vw;margin-top:3.2vh}
.logo{width:9vh;height:9vh;border-radius:50%;object-fit:cover;background:#fff;flex:none}
.logo.t{display:grid;place-items:center;color:#07090C;font-weight:800;font-size:4.4vh}
h1{font-size:6.6vh;font-weight:800;letter-spacing:-.035em;line-height:1}
.sub{font-size:1.9vh;font-weight:700;color:rgba(255,255,255,.55);letter-spacing:.18em;text-transform:uppercase;margin-top:1.1vh}
.list{margin-top:3.4vh;position:relative;flex:1;min-height:0}
.r{display:flex;align-items:center;gap:1.2vw;height:5.6vh;border-bottom:1px solid rgba(255,255,255,.09);font-size:2.9vh;opacity:0;transform:translateX(-2vw);transition:opacity .5s,transform .5s}
.r.on{opacity:1;transform:none}
.r .p{width:4.4vh;font-weight:800;color:rgba(255,255,255,.5);font-variant-numeric:tabular-nums}
.r .a{width:4.2vh;height:4.2vh;border-radius:50%;object-fit:cover;background:#2A323C;flex:none}
.r .a.t{display:grid;place-items:center;font-size:2vh;font-weight:800;color:#fff}
.r .n{flex:1;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.r .s{font-weight:800;font-variant-numeric:tabular-nums}
.r .s small{font-size:1.7vh;font-weight:700;color:rgba(255,255,255,.5);margin-left:.4vw}
.r.first{background:#0443FD;border-bottom:0;border-radius:1.2vh;padding:0 1vw;margin:0 -1vw .4vh}
.r.first .p{color:#fff}
.page{position:absolute;right:0;top:-3vh;font-size:1.6vh;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:.14em}
.bottom{position:relative;flex:none;height:16vh;margin-top:2.4vh}
.panel{position:absolute;left:0;bottom:0;right:0;opacity:0;transform:translateY(2vh);transition:opacity .7s,transform .7s}
.panel.on{opacity:1;transform:none}
.k{font-size:1.8vh;font-weight:800;letter-spacing:.22em;color:rgba(255,255,255,.55);text-transform:uppercase}
.duels{display:flex;gap:1.4vw;margin-top:1.6vh;flex-wrap:nowrap;overflow:hidden}
.duel{background:rgba(7,9,12,.7);border:1px solid rgba(255,255,255,.12);border-radius:1.4vh;padding:1.4vh 1.4vw;flex:1;min-width:0}
.duel b{display:block;font-size:2.6vh;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.duel span{display:block;font-size:1.8vh;font-weight:700;color:rgba(255,255,255,.55);margin-top:.5vh;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.duel em{font-style:normal;color:#7EA2FF}
.big{font-size:min(6vh,3.4vw);font-weight:800;letter-spacing:-.03em;margin-top:1vh}
.track{height:1.6vh;border-radius:1vh;background:rgba(255,255,255,.12);margin-top:1.6vh;overflow:hidden;width:100%}
.fill{height:100%;background:#0443FD;border-radius:1vh;transition:width 1.6s cubic-bezier(.2,.8,.2,1)}
.join{position:absolute;right:4.4vw;bottom:5vh;display:flex;align-items:center;gap:1.4vw;text-align:right}
.join .code{font-size:5vh;font-weight:800;letter-spacing:.14em;line-height:1}
.join .lbl{font-size:1.7vh;font-weight:800;letter-spacing:.2em;color:rgba(255,255,255,.6);margin-bottom:1vh}
.join .url{font-size:1.7vh;font-weight:700;color:rgba(255,255,255,.5);margin-top:1vh}
#qr{width:15vh;height:15vh;background:#fff;border-radius:1.4vh;padding:1vh}
#qr canvas{width:100%;height:100%;display:block}
.clock{position:absolute;right:4.4vw;top:5.5vh;font-size:2.4vh;font-weight:800;font-variant-numeric:tabular-nums;color:rgba(255,255,255,.75)}
#fs{position:absolute;right:4.4vw;top:10.5vh;display:flex;align-items:center;gap:.6vw;padding:1vh 1.2vw;border-radius:1vh;border:1px solid rgba(255,255,255,.3);background:rgba(7,9,12,.6);color:#fff;font:700 1.7vh Manrope,system-ui,sans-serif;cursor:pointer;opacity:0;transition:opacity .4s}
body.ui #fs{opacity:1}
body:not(.ui){cursor:none}
/* Écran en hauteur (tablette, fenêtre étroite) : le bloc « rejoins le club » prend sa propre ligne en bas. */
@media (max-aspect-ratio:4/3){.left{width:auto;right:4.4vw;bottom:23vh}.join{left:4.4vw;right:4.4vw;justify-content:space-between;text-align:left}#boxer{width:90vw;right:-25vw;opacity:.55}}
.legend{font-size:1.6vh;font-weight:700;color:rgba(255,255,255,.42);margin-top:.7vh}
.empty{font-size:3vh;font-weight:700;color:rgba(255,255,255,.7);line-height:1.5;margin-top:4vh}
</style></head><body>
<div id="stage">
  <div class="glow"></div><canvas id="boxer"></canvas><div class="shade"></div><div class="scan"></div>
  <div class="clock" id="clock"></div>
  <button id="fs" type="button">⛶ Plein écran</button>
  <div class="left">
    <div class="brand"><img src="/images/logo-attax-wh.svg" alt="Attax" style="height:4vh"></div>
    <div class="head" id="head"></div>
    <div class="list" id="list"></div>
    <div class="bottom"><div class="panel" id="p0"></div><div class="panel" id="p1"></div></div>
  </div>
  <div>
    <div class="join"><div><div class="lbl">REJOINS LE CLUB</div><div class="code" id="code"></div><div class="url">attax.app · code du club</div></div><div id="qr"></div></div>
  </div>
</div>
<script>
const CODE = ${JSON.stringify(code)};
const MONTHS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const nf = (n) => Number(n ?? 0).toLocaleString("fr-FR").replace(/[\\u202F\\u00A0]/g, " ");
const ini = (s) => esc(String(s ?? "?").trim().charAt(0).toUpperCase());
let D = null, page = 0, panel = 0;
// Autant de lignes que l'écran en contient (télé, tablette, fenêtre) : jamais de ligne sous les panneaux.
const per = () => { const el = document.getElementById("list"), h = el.clientHeight, row = window.innerHeight * 0.056; return Math.max(3, Math.min(10, Math.floor((h - window.innerHeight * 0.01) / row))); };
// Plein écran (bouton visible quand la souris bouge) ; le curseur disparaît sur la télé.
let uiT = 0; const ui = () => { document.body.classList.add("ui"); clearTimeout(uiT); uiT = setTimeout(() => document.body.classList.remove("ui"), 3000); };
addEventListener("mousemove", ui); addEventListener("touchstart", ui); ui();
document.getElementById("fs").onclick = () => { const d = document; if (d.fullscreenElement) d.exitFullscreen?.(); else d.documentElement.requestFullscreen?.().catch(() => {}); };
document.addEventListener("fullscreenchange", () => { document.getElementById("fs").textContent = document.fullscreenElement ? "✕ Quitter le plein écran" : "⛶ Plein écran"; });
let rzT = 0; addEventListener("resize", () => { clearTimeout(rzT); rzT = setTimeout(() => { if (D) renderList(); }, 300); });

// ── Le boxeur : les poses de l'app, redessinées en lignes au canvas ──
const cv = document.getElementById("boxer"), cx = cv.getContext("2d");
let B = null, t0 = performance.now();
fetch("/club-screen/boxer.json").then((r) => r.json()).then((j) => { B = j; }).catch(() => {});
function draw(now) {
  const dpr = Math.min(2, window.devicePixelRatio || 1), W = cv.clientWidth, H = cv.clientHeight;
  if (cv.width !== W * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
  cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, W, H);
  if (B) {
    const f = B.frames[Math.floor(((now - t0) / 1000) * B.fps) % B.frames.length], n = B.n;
    const size = H * 0.9, ox = (W - size) / 2 + W * 0.06, oy = H * 0.07;
    const g = cx.createLinearGradient(0, oy, 0, oy + size); g.addColorStop(0, "#FFFFFF"); g.addColorStop(0.55, "#7EA2FF"); g.addColorStop(1, "#0443FD");
    cx.fillStyle = g; cx.beginPath();
    for (const l of f) {
      const y = oy + (l[0] / 1000) * size, x1 = l[1] / 1000, x2 = l[2] / 1000, P = 16;
      const X = (i) => ox + (1 - (x1 + (i / (P - 1)) * (x2 - x1))) * size; // de face au classement (miroir)
      const T = (i) => { const u = (i / (P - 1)) * (n - 1), a = Math.floor(u), b = Math.min(n - 1, a + 1); return ((l[3 + a] + (l[3 + b] - l[3 + a]) * (u - a)) / 1000) * size / 2; };
      cx.moveTo(X(0), y - T(0)); for (let i = 1; i < P; i++) cx.lineTo(X(i), y - T(i));
      for (let i = P - 1; i >= 0; i--) cx.lineTo(X(i), y + T(i)); cx.closePath();
    }
    cx.fill();
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

// ── Le classement, par pages de 10 ──
function renderHead() {
  const month = MONTHS[Number(String(D.season_key ?? "").slice(5, 7)) - 1] ?? "";
  document.getElementById("head").innerHTML = (D.logo_url ? '<img class="logo" src="' + esc(D.logo_url) + '" alt="">' : '<div class="logo t">' + ini(D.name) + '</div>')
    + '<div><h1>' + esc(D.name) + '</h1><div class="sub">Classement de ' + esc(month) + ' · ' + nf(D.members) + ' membres</div><div class="legend">Points : 1 par duel du jour gagné, 2 en duel à trois</div></div>';
  document.getElementById("code").textContent = D.code ?? CODE;
  const q = document.getElementById("qr");
  if (window.qrcode && !q.dataset.done) {
    const qr = qrcode(0, "M"); qr.addData("https://attax.app/join?club=" + (D.code ?? CODE)); qr.make();
    const c = document.createElement("canvas"), m = qr.getModuleCount(), s = 8; c.width = c.height = m * s; const x = c.getContext("2d"); x.fillStyle = "#07090C";
    for (let r = 0; r < m; r++) for (let k = 0; k < m; k++) if (qr.isDark(r, k)) x.fillRect(k * s, r * s, s, s);
    q.appendChild(c); q.dataset.done = "1";
  }
}
function renderList() {
  const rows = D.rows ?? [], el = document.getElementById("list");
  if (!rows.length) { el.innerHTML = '<div class="empty">Le classement se remplit dès les premiers duels.<br>Rejoins le club avec le code <b>' + esc(D.code) + '</b>.</div>'; return; }
  const pages = Math.ceil(rows.length / per()); page = page % pages;
  const part = rows.slice(page * per(), page * per() + per());
  el.innerHTML = (pages > 1 ? '<div class="page">' + (page + 1) + ' / ' + pages + '</div>' : '') + part.map((r) =>
    '<div class="r' + (Number(r.rank) === 1 ? ' first' : '') + '"><span class="p">' + esc(r.rank) + '</span>'
    + (r.avatar_url ? '<img class="a" src="' + esc(r.avatar_url) + '" alt="">' : '<div class="a t">' + ini(r.username) + '</div>')
    + '<span class="n">' + esc(r.username) + '</span><span class="s">' + nf(r.points) + '<small>' + (Number(r.points) > 1 ? 'points' : 'point') + '</small></span></div>').join("");
  [...el.querySelectorAll(".r")].forEach((r, i) => setTimeout(() => r.classList.add("on"), 60 + i * 70));
}

// ── Les panneaux du bas : les duels d'hier, l'objectif du mois ──
function panels() {
  const out = [];
  const y = D.yesterday ?? [];
  if (y.length) out.push('<div class="k">Les duels d\\'hier</div><div class="duels">' + y.slice(0, 3).map((d) =>
    '<div class="duel"><b>' + esc(d.winner) + '</b><span>bat ' + esc(d.losers.join(" et ")) + ' · <em>+' + esc(d.points) + ' point' + (d.points > 1 ? 's' : '') + '</em></span></div>').join("") + '</div>');
  const g = D.goal;
  if (g && Number(g.target) > 0) { const pct = Math.max(0, Math.min(100, Math.round((Number(g.total) / Number(g.target)) * 100)));
    out.push('<div class="k">Objectif du mois, tous ensemble</div><div class="big">' + nf(g.total) + ' <span style="opacity:.45">/ ' + nf(g.target) + ' pts d\\'activité</span></div><div class="track"><div class="fill" data-w="' + pct + '" style="width:0"></div></div>'); }
  out.push('<div class="k">Chaque jour</div><div class="big">Un rival du club. Le plus de pts d\\'activité gagne le duel.</div>');
  return out;
}
function rotatePanel() {
  const list = panels(), a = document.getElementById("p" + (panel % 2)), b = document.getElementById("p" + ((panel + 1) % 2));
  b.innerHTML = list[Math.floor(panel / 1) % list.length]; a.classList.remove("on"); b.classList.add("on");
  const f = b.querySelector(".fill"); if (f) setTimeout(() => { f.style.width = f.dataset.w + "%"; }, 300);
  panel++;
}

// ── Données ──
async function load() {
  try { const r = await fetch("/club-screen/data?code=" + encodeURIComponent(CODE), { cache: "no-store" }); const j = await r.json(); if (!j.error) { D = j; renderHead(); renderList(); return; } } catch (e) {}
  if (!D) document.getElementById("list").innerHTML = '<div class="empty">Aucun club avec ce code.</div>';
}
setInterval(() => { const d = new Date(); document.getElementById("clock").textContent = d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }); }, 1000);
load().then(() => { if (D) rotatePanel(); });
setInterval(load, 5 * 60 * 1000);
setInterval(() => { if (D) { page++; renderList(); } }, 15000);
setInterval(() => { if (D) rotatePanel(); }, 10000);
</script></body></html>`;
}
