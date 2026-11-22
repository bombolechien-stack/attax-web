"use client";

import { useRef } from "react";
import { useScrollProgress, seg, easeOut, easeInOut } from "@/hooks/useScrollProgress";

// Chapitre 06 (22/11, demande du coordinateur) : deux VRAIS moments de l'app, reproduits dans le téléphone et pilotés par
// le défilement (réversibles ; mouvements réduits : état final). Unité u = 1 pt d'un écran de 393 pt (100cqw / 393),
// hauteur 807 pt (cadre 522 × 1072), encoche haute 59 pt, basse 34 pt.

const OUT = (t: number) => 1 - Math.pow(1 - t, 4);              // ≈ Easing.bezier(0.16, 1, 0.3, 1)
const SIN_IO = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;  // Easing.inOut(Easing.sin)
/** Le ressort du recul (withSpring damping 16, stiffness 120, mass 0.9) : léger dépassement puis repos. */
const SPRING = (t: number) => 1 - Math.exp(-6 * t) * Math.cos(5.2 * t);

/* ───────────── Le trophée gagné : components/motion/moments/TrophyReveal.tsx (champion_3, « PRO CHAMPION ») ─────────────
 * Fond papier #F4F5F8, un seul objet. LE SCEAU : sa silhouette grise (#D9DEE5) que le vrai trophée remplit par le bas, un
 * tiers par coup (les 3 tirets de « BOXE 3 FOIS ») ; LE PLAN : la caméra plonge sur le socle (zoom 1,75, son nom gravé),
 * remonte la colonne jusqu'à la couronne ; LE RECUL : l'objet entier (ressort), le titre claque, puis « À CONQUÉRIR » et
 * les boutons ; un reflet le traverse. Ici le défilement joue les trois coups et la suite. Mêmes mesures que l'app :
 * H = 53 % de l'écran, W = 0,62 H, haut = encoche + 7,5 %, CENTER = 46 %, focus socle 0,875 → couronne 0,2. */
const SH = 807, SW = 393, TOP_IN = 59, BOT_IN = 34;
const H = Math.round(SH * 0.53), W = Math.round(H * 0.62), TOP = TOP_IN + Math.round(SH * 0.075), LEFT = (SW - W) / 2;
const MACRO = 1.75, F_BASE = 0.875, F_CROWN = 0.2, CENTER = SH * 0.46;
const TR = {
  en: { name: "PRO CHAMPION", sub: "Pro league won", next: "ELITE CHAMPION", nextK: "NEXT TO WIN", hintT: "PUNCH 3 TIMES", hintS: "with your phone, held firmly, or tap the screen", share: "Share", cont: "Tap to continue" },
  fr: { name: "PRO CHAMPION", sub: "Ligue Pro gagnée", next: "ELITE CHAMPION", nextK: "À CONQUÉRIR", hintT: "BOXE 3 FOIS", hintS: "avec ton téléphone, bien en main, ou touche l'écran", share: "Partager", cont: "Touche pour continuer" },
};

export function TrophyMomentLive({ lang }: { lang: "en" | "fr" }) {
  const t = TR[lang];
  const obj = useRef<HTMLDivElement>(null), sil = useRef<HTMLDivElement>(null), fill = useRef<HTMLDivElement>(null);
  const shine = useRef<HTMLDivElement>(null), hint = useRef<HTMLDivElement>(null), info = useRef<HTMLDivElement>(null), foot = useRef<HTMLDivElement>(null);
  const pips = useRef<(HTMLElement | null)[]>([]);
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    // 1. Le sceau arrive (opacité, +40 pt → 0).
    const inV = OUT(seg(p, 0, 0.1));
    // 2. Trois coups : chaque tiers se remplit vite (240 ms, ease-out) ; le 3e remplit tout et ouvre.
    const hits = [0.14, 0.24, 0.34];
    let f = 0, n = 0;
    hits.forEach((h, i) => { const k = easeOut(seg(p, h, h + 0.04)); if (k > 0) { f = Math.max(f, (i + k) / 3); if (k > 0.5) n = i + 1; } });
    const pop = 1 - 0.04 * hits.reduce((a, h) => a + Math.sin(Math.PI * seg(p, h, h + 0.03)), 0);
    // 3. Le plan : la silhouette s'efface, plongée sur le socle, remontée jusqu'à la couronne, recul.
    const silO = 1 - seg(p, 0.38, 0.39);
    const dive = OUT(seg(p, 0.39, 0.47)), climb = SIN_IO(seg(p, 0.53, 0.72)), back = seg(p, 0.76, 0.88);
    const z = back > 0 ? MACRO + (1 - MACRO) * SPRING(back * 2.2) : 1 + (MACRO - 1) * dive;
    const focus = F_BASE + (F_CROWN - F_BASE) * climb;
    const u = (z - 1) / (MACRO - 1);
    const ty = u * (CENTER - (TOP + H / 2) - (focus - 0.5) * H * z);
    if (obj.current) {
      obj.current.style.opacity = inV.toFixed(3);
      obj.current.style.transform = `translate3d(0, calc(${(ty + (1 - inV) * 40).toFixed(2)} * var(--u)), 0) scale(${(z * pop).toFixed(4)})`;
    }
    if (sil.current) sil.current.style.opacity = silO.toFixed(3);
    if (fill.current) fill.current.style.clipPath = `inset(${((1 - f) * 100).toFixed(3)}% 0 0 0)`;
    pips.current.forEach((el, i) => el?.classList.toggle("is-on", i < n));
    if (hint.current) hint.current.style.opacity = (Math.min(OUT(seg(p, 0.04, 0.12)), 1 - seg(p, 0.35, 0.38))).toFixed(3);
    // 4. Le titre (après 480 ms du recul, 520 ms), puis la suite (après 800 ms, 480 ms) ; le reflet traverse.
    const ti = OUT(seg(p, 0.84, 0.93)), re = OUT(seg(p, 0.89, 0.97));
    if (info.current) { info.current.style.opacity = ti.toFixed(3); info.current.style.transform = `translate3d(0, calc(${((1 - ti) * 22).toFixed(2)} * var(--u)), 0)`; }
    if (foot.current) { foot.current.style.opacity = re.toFixed(3); foot.current.style.transform = `translate3d(0, calc(${((1 - re) * 14).toFixed(2)} * var(--u)), 0)`; }
    if (shine.current) shine.current.style.transform = `translate3d(${(-100 + 200 * easeInOut(seg(p, 0.9, 1))).toFixed(2)}%, 0, 0)`;
  }, { start: 0.6, end: 0.1 });           // le téléphone est entier à l'écran (sous la navigation) pendant toute la séquence
  const box = { left: `calc(${LEFT} * var(--u))`, top: `calc(${TOP} * var(--u))`, width: `calc(${W} * var(--u))`, height: `calc(${H} * var(--u))` };
  return (
    <div ref={ref} className="mo-tr" aria-hidden="true">
      <div ref={obj} className="mo-tr-obj" style={box}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/trophies/champion_hd.webp" alt="" />
        <div ref={shine} className="mo-tr-shine" />
        <div ref={sil} className="mo-tr-sil">
          <i className="mo-tr-paper" />
          <i className="mo-tr-tint" />
          <div ref={fill} className="mo-tr-fill">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/trophies/champion_hd.webp" alt="" />
          </div>
        </div>
      </div>
      <div ref={hint} className="mo-tr-hint" style={{ bottom: `calc(${BOT_IN + SH * 0.08} * var(--u))` }}>
        <div className="mo-tr-pips">{[0, 1, 2].map((i) => <i key={i} ref={(el) => { pips.current[i] = el; }} />)}</div>
        <b>{t.hintT}</b>
        <span>{t.hintS}</span>
      </div>
      <div ref={info} className="mo-tr-info" style={{ top: `calc(${TOP + H + 10} * var(--u))` }}>
        <b>{t.name}</b>
        <span>{t.sub}</span>
      </div>
      <div ref={foot} className="mo-tr-foot" style={{ paddingBottom: `calc(${BOT_IN + 16} * var(--u))` }}>
        <div className="mo-tr-next">
          <i className="mo-tr-next-img" />
          <div><span>{t.nextK}</span><b>{t.next}</b></div>
        </div>
        <div className="mo-tr-btns"><em className="is-light">{t.share}</em><em>{t.cont}</em></div>
      </div>
    </div>
  );
}

/* ───────────── Le palier de la saison : components/season/SeasonMoment.tsx (« Tu entres dans le Top 10 % ») ─────────────
 * Plein écran, fond #EEF1F7 (palette.bg) : le signe de la saison (seasonArt(...).mark, Saison Beta) qui remplit la place
 * libre, le titre (Manrope 800, 26/35, −0,6, #09090B), la ligne (Manrope 600, 14,5/21, #6B7280), « Touche pour
 * continuer » (13, #8A93A0). Dans l'app, l'écran entre en fondu (320 ms). Ici : fondu au défilement, puis le palier
 * franchi défile comme les paliers de l'app (TIERS 50 → 25 → 10 %), le dernier reste. */
const SE = {
  en: { pre: "You're in the Top ", post: " %", sub: "Keep the pace: places are won every day.", cont: "Tap to continue" },
  fr: { pre: "Tu entres dans le Top ", post: " %", sub: "Reste dans le rythme : les places se jouent chaque jour.", cont: "Touche pour continuer" },
};
const TIERS = [50, 25, 10];
export function SeasonMomentLive({ lang }: { lang: "en" | "fr" }) {
  const t = SE[lang];
  const body = useRef<HTMLDivElement>(null), mark = useRef<HTMLDivElement>(null), nums = useRef<(HTMLElement | null)[]>([]);
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    const fi = seg(p, 0, 0.22);
    if (body.current) body.current.style.opacity = fi.toFixed(3);
    if (mark.current) mark.current.style.transform = `scale(${(0.94 + 0.06 * OUT(seg(p, 0, 0.4))).toFixed(4)})`;
    // Le palier : 50 → 25 (à 45 %) → 10 (à 70 %) ; l'ancien monte et s'efface, le nouveau arrive par en dessous.
    const steps = [0.45, 0.7];
    nums.current.forEach((el, i) => {
      if (!el) return;
      const inK = i === 0 ? 1 : OUT(seg(p, steps[i - 1], steps[i - 1] + 0.07));
      const outK = i === TIERS.length - 1 ? 0 : OUT(seg(p, steps[i], steps[i] + 0.07));
      el.style.opacity = (inK * (1 - outK)).toFixed(3);
      el.style.transform = `translate3d(0, ${((1 - inK) * 0.5 - outK * 0.5).toFixed(3)}em, 0)`;
    });
  }, { start: 0.6, end: 0.1 });
  return (
    <div ref={ref} className="mo-se" aria-hidden="true">
      <div ref={body} className="mo-se-body">
        <div ref={mark} className="mo-se-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/season/beta_mark.webp" alt="" />
        </div>
        <p className="mo-se-title">{t.pre}<span className="mo-se-num">{TIERS.map((n, i) => <b key={n} ref={(el) => { nums.current[i] = el; }} style={{ opacity: i === 0 ? 1 : 0 }}>{n}</b>)}</span>{t.post}</p>
        <p className="mo-se-sub">{t.sub}</p>
      </div>
      <p className="mo-se-btn">{t.cont}</p>
    </div>
  );
}
