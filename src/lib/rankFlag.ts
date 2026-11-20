// Le badge de rang de l'app, à l'identique : copie de budyfit/components/RankBadgeIcon.tsx (flagSvg), seuls les
// identifiants SVG sont rendus déterministes (préfixés par le rang) pour le rendu serveur du site.
// Drapeau Attax en 3 blocs de scanlines qui montent d'un cran ; sous-palier I = bloc 1 vif, II = 1+2, III = les 3.
// 5 divisions : Rookie · Challenger · Pro · Elite · Legend.

const FB_RIGHT = ["M506.13,0,491.68,57Q482,95.21,472.29,133.45L606.88,305.6,413,306.2q-51.29-139-103.22-277.69C307.53,22.57,301.3,5.93,299.07,0Z"];
const FB_LEFT = ["M114,420.11,0,114H170.89q57,153.09,113.92,306.17Z", "M172.86,579.47q-25.62-68.7-51.24-137.41l61,31.47,38.1,103.24Z"];
const FB_MIDDLE = ["M434.34,363.16H263.45Q206.48,210.07,149.53,57H320.41Z"];
const VB = 606.88, VH = 579.47, CY = 290, SP = 40, STEP = 32, T_ON = 0.34, T_OFF = 0.085;
const BLK_C: [number, number][] = [[140, 360], [292, 210], [458, 150]];

const DIVC: Record<number, string> = { 1: "#E0792A", 2: "#AEB9C6", 3: "#FFB300", 4: "#2E6BFF", 5: "#16191F" };
export const DIV_NAMES: Record<number, string> = { 1: "Rookie", 2: "Challenger", 3: "Pro", 4: "Elite", 5: "Legend" };
const GREY = "#9AA7B5";

const mix = (a: string, b: string, t: number) => { const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); const x = p(a), y = p(b); return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join(""); };
const li = (c: string, t: number) => mix(c, "#FFFFFF", t), dk = (c: string, t: number) => mix(c, "#000000", t);
const fPaths = (cl: string[], attr: string) => cl.map((p) => `<path d="${p}" ${attr}/>`).join("");

function flagBand(id: string, fill: string, clipPaths: string[], yOff: number, thickMul: number) {
  let lines = "";
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
export function flagSvg(division: number, sub: number) {
  const key = `${division}-${sub}`;
  if (cache[key]) return cache[key];
  let n = 0;
  const uid = (p: string) => `rk${division}${sub}${p}${n++}`;
  const C = DIVC[division] ?? DIVC[1];
  const s = sub || 1;
  const inten = s === 1 ? [1.0, 0.34, 0.13] : s === 2 ? [1.0, 1.0, 0.34] : [1.0, 1.0, 1.0];
  const blk: [string[], number][] = [[FB_LEFT, 0], [FB_MIDDLE, -STEP], [FB_RIGHT, -2 * STEP]];
  const active = s - 1;
  let defs = "";
  let body = fPaths([...FB_LEFT, ...FB_MIDDLE, ...FB_RIGHT], `fill="none" stroke="#B8C0CC" stroke-width="5" stroke-opacity="0.45" stroke-linejoin="round"`);
  const [gx, gy] = BLK_C[active], rg = uid("g");
  defs += `<radialGradient id="${rg}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${C}" stop-opacity="0.40"/><stop offset="58%" stop-color="${C}" stop-opacity="0.13"/><stop offset="100%" stop-color="${C}" stop-opacity="0"/></radialGradient>`;
  body += `<ellipse cx="${gx}" cy="${gy}" rx="180" ry="155" fill="url(#${rg})"/>`;
  blk.forEach(([cl, off], i) => {
    const v = inten[i], base = mix(C, "#FFFFFF", (1 - v) * 0.66), gid = uid("f");
    defs += `<linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${li(base, 0.14)}"/><stop offset="55%" stop-color="${base}"/><stop offset="100%" stop-color="${dk(base, 0.16)}"/></linearGradient>`;
    body += flagBand(uid("c"), `url(#${gid})`, cl, off, T_OFF + (T_ON - T_OFF) * v);
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VB} ${VH}" width="100%" height="100%"><defs>${defs}</defs>${body}</svg>`;
  cache[key] = svg;
  return svg;
}
