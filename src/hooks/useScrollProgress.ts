"use client";

import { useEffect, useRef } from "react";

/**
 * Progression liée au défilement (22/11, revue le 22/11 après le retour du propriétaire : « l'anneau se remplit à 50 %
 * puis à 100 % », trop saccadé). p est CONTINU :
 * - mode « enter » : p = 0 quand le haut de l'élément arrive à `start` × hauteur de l'écran (par défaut 85 %), p = 1
 *   quand il atteint `end` × hauteur (par défaut 35 %) ;
 * - mode « pin » (bloc sticky) : p = 0 quand le haut du conteneur touche le haut de l'écran, 1 quand son bas atteint le bas.
 * La position mesurée est une CIBLE : la valeur affichée la rejoint en douceur à chaque image (lissage exponentiel
 * indépendant de la cadence, ≈ 15 % de l'écart par image à 60 i/s, vitesse plafonnée), donc un cran de molette ne fait
 * jamais sauter l'animation ; elle s'arrête quand l'écart devient invisible. L'IntersectionObserver ne sert QU'À
 * brancher / débrancher l'écoute près de l'écran, jamais à décider de la progression.
 * Écrit la variable CSS --p sur l'élément et appelle onProgress(p) (mises à jour directes du DOM, aucun rendu React).
 * Mouvements réduits : état final (p = 1) tout de suite.
 */
export function useScrollProgress<T extends HTMLElement>(
  onProgress?: (p: number) => void,
  opts: { start?: number; end?: number; mode?: "enter" | "pin"; maxStep?: number } = {},
) {
  const ref = useRef<T>(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;
  const { start = 0.85, end = 0.35, mode = "enter", maxStep = 0.06 } = opts;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let last = -1;
    const apply = (p: number) => {
      if (Math.abs(p - last) < 0.00005) return;
      last = p;
      el.style.setProperty("--p", p.toFixed(4));
      cb.current?.(p);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { apply(1); return; }
    const target = () => {
      const r = el.getBoundingClientRect(), vh = window.innerHeight || 1;
      let p: number;
      if (mode === "pin") {
        const span = r.height - vh;
        p = span > 0 ? -r.top / span : (r.top <= 0 ? 1 : 0);
      } else {
        p = (start * vh - r.top) / ((start - end) * vh);
      }
      return Math.min(1, Math.max(0, p));
    };
    let cur = target(), raf = 0, prevT = 0, reqAt = 0, active = false;
    const tick = (now: number) => {
      const goal = target();
      const dt = prevT ? Math.min(64, now - prevT) : 16.67;
      prevT = now;
      const k = 1 - Math.pow(0.85, dt / 16.67);                  // 15 % de l'écart par image à 60 i/s
      let step = (goal - cur) * k;
      const cap = maxStep * Math.min(1.3, dt / 16.67);            // plafond par image, même si une image a pris du retard
      if (step > cap) step = cap; else if (step < -cap) step = -cap;
      cur += step;
      if (Math.abs(goal - cur) < 0.0004) cur = goal;
      apply(cur);
      if (cur !== goal) { reqAt = now; raf = requestAnimationFrame(tick); }
      else { raf = 0; prevT = 0; }
    };
    // Une image demandée qui n'arrive jamais (onglet masqué, capture d'écran…) ne doit pas bloquer la suite.
    const kick = () => {
      if (raf && performance.now() - reqAt > 250) { cancelAnimationFrame(raf); raf = 0; }
      if (!raf) { prevT = 0; reqAt = performance.now(); raf = requestAnimationFrame(tick); }
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !active) { active = true; window.addEventListener("scroll", kick, { passive: true }); window.addEventListener("resize", kick); }
      else if (!e.isIntersecting && active) { active = false; window.removeEventListener("scroll", kick); window.removeEventListener("resize", kick); }
      // Hors de l'écran : on se cale sans animation (personne ne regarde), prêt pour le retour.
      if (!e.isIntersecting) { if (raf) cancelAnimationFrame(raf); raf = 0; cur = target(); apply(cur); }
      else kick();
    }, { rootMargin: "25% 0px 25% 0px" });
    io.observe(el);
    apply(cur);
    return () => { io.disconnect(); window.removeEventListener("scroll", kick); window.removeEventListener("resize", kick); if (raf) cancelAnimationFrame(raf); };
  }, [start, end, mode, maxStep]);
  return ref;
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** Sous-progression : la part de p comprise entre a et b, ramenée à 0 → 1. */
export const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const smooth = (t: number) => t * t * (3 - 2 * t);
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
