// Badge de rang de l'app, copié tel quel de budyfit components/RankBadgeIcon.tsx (flagSvg) : drapeau Attax en 3 blocs de
// scanlines, couleur de la division (Rookie, Challenger, Pro, Elite, Legend), sous-palier I à III. Ne pas retoucher ici :
// recopier depuis l'app si le badge change.
// 3 blocs du drapeau (rankflag.svg, viewBox 606.88 × 579.47).
const FB_RIGHT = ["M506.13,0,491.68,57Q482,95.21,472.29,133.45L606.88,305.6,413,306.2q-51.29-139-103.22-277.69C307.53,22.57,301.3,5.93,299.07,0Z"];
const FB_LEFT = ["M114,420.11,0,114H170.89q57,153.09,113.92,306.17Z", "M172.86,579.47q-25.62-68.7-51.24-137.41l61,31.47,38.1,103.24Z"];
const FB_MIDDLE = ["M434.34,363.16H263.45Q206.48,210.07,149.53,57H320.41Z"];
const VB = 606.88, VH = 579.47, CY = 290, SP = 40, STEP = 32, T_ON = 0.34, T_OFF = 0.085;
const BLK_C: [number, number][] = [[140, 360], [292, 210], [458, 150]]; // centroïdes blocs (pour le glow)

const DIVC: Record<number, string> = {
  1: "#E0792A", // Rookie      (bronze vif)
  2: "#AEB9C6", // Challenger  (silver clair)
  3: "#FFB300", // Pro         (or vif)
  4: "#2E6BFF", // Elite       (bleu vif)
  5: "#16191F", // Legend      (quasi-noir graphite)
};
const GREY = "#9AA7B5";

const mix = (a: string, b: string, t: number) => { const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); const x = p(a), y = p(b); return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join(""); };
const li = (c: string, t: number) => mix(c, "#FFFFFF", t), dk = (c: string, t: number) => mix(c, "#000000", t);
const fPaths = (cl: string[], attr: string) => cl.map((p) => `<path d="${p}" ${attr}/>`).join("");

let uid = 0;
function flagBand(fill: string, clipPaths: string[], yOff: number, thickMul: number) {
  const id = `fb${uid++}`; let lines = "";
  for (let y = -60; y <= VH + 60; y += SP) {
    const ly = y + yOff;
    const vt = 1 - Math.min(1, Math.abs(ly - CY) / 330);
    const baseTh = SP * thickMul * (0.55 + 0.5 * vt);
    const tp: number[][] = [], bt: number[][] = [];
    for (let x = -20; x <= VB + 20; x += 14) { const u = (x + 20) / (VB + 40); const hEnv = Math.sin(Math.PI * u); const hh = baseTh * (0.4 + 1.0 * hEnv); tp.push([x, ly - hh]); bt.push([x, ly + hh]); }
    let d = `M${tp[0][0]} ${tp[0][1].toFixed(0)}`;
    for (let k = 1; k < tp.length; k++) d += `L${tp[k][0]} ${tp[k][1].toFixed(0)}`;
    for (let k = bt.length - 1; k >= 0; k--) d += `L${bt[k][0]} ${bt[k][1].toFixed(0)}`;
    lines += `<path d="${d}Z" fill="${fill}"/>`;
  }
  return `<defs><clipPath id="${id}">${clipPaths.map((p) => `<path d="${p}"/>`).join("")}</clipPath></defs><g clip-path="url(#${id})">${lines}</g>`;
}

const cache: Record<string, string> = {};
export function flagSvg(division: number | null | undefined, sub: number | null | undefined, calibrating: boolean) {
  const cal = calibrating || division == null;
  const key = cal ? "cal" : `${division}-${sub}`;
  if (cache[key]) return cache[key];

  const C = cal ? GREY : (DIVC[division as number] ?? DIVC[1]);
  const s = cal ? 0 : (((sub as number) || 1));
  const inten = cal ? [0.20, 0.20, 0.20] : (s === 1 ? [1.0, 0.34, 0.13] : s === 2 ? [1.0, 1.0, 0.34] : [1.0, 1.0, 1.0]);
  const blk: [string[], number][] = [[FB_LEFT, 0], [FB_MIDDLE, -STEP], [FB_RIGHT, -2 * STEP]];
  const active = cal ? -1 : s - 1;

  let defs = "";
  let body = fPaths([...FB_LEFT, ...FB_MIDDLE, ...FB_RIGHT], `fill="none" stroke="${cal ? "#C6D0DC" : "#B8C0CC"}" stroke-width="5" stroke-opacity="0.45" stroke-linejoin="round"`); // contour fantôme
  if (active >= 0) {                                                        // glow bloc actif (dégradé radial, compatible RN)
    const [gx, gy] = BLK_C[active], rg = `rg${uid++}`;
    defs += `<radialGradient id="${rg}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${C}" stop-opacity="0.40"/><stop offset="58%" stop-color="${C}" stop-opacity="0.13"/><stop offset="100%" stop-color="${C}" stop-opacity="0"/></radialGradient>`;
    body += `<ellipse cx="${gx}" cy="${gy}" rx="180" ry="155" fill="url(#${rg})"/>`;
  }
  blk.forEach(([cl, off], i) => {
    const v = inten[i], base = mix(C, "#FFFFFF", (1 - v) * 0.66), gid = `fg${uid++}`;
    defs += `<linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${li(base, .14)}"/><stop offset="55%" stop-color="${base}"/><stop offset="100%" stop-color="${dk(base, .16)}"/></linearGradient>`;
    body += flagBand(`url(#${gid})`, cl, off, T_OFF + (T_ON - T_OFF) * v);
  });
  if (cal) body += `<text x="303" y="330" font-family="Manrope_800ExtraBold, system-ui, sans-serif" font-size="200" font-weight="800" fill="#8A93A0" text-anchor="middle">?</text>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VB} ${VH}"><defs>${defs}</defs>${body}</svg>`;
  cache[key] = svg;
  return svg;
}


/** Le badge en image (data URI), pour une balise <img>. */
export const flagUri = (division: number, sub: number) => `data:image/svg+xml;utf8,${encodeURIComponent(flagSvg(division, sub, false))}`;
