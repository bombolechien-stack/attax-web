"use client";

import { useEffect, useRef } from "react";

/**
 * Progression liée au défilement (22/11, demande du propriétaire : animations « scrubbées », qui reviennent en arrière
 * quand on remonte). p = 0 quand le haut de l'élément arrive à `start` × hauteur de l'écran (par défaut 85 %), p = 1
 * quand il atteint `end` × hauteur (par défaut 35 %). Pour un bloc épinglé (sticky), `mode: "pin"` : p va de 0 quand le
 * haut du conteneur touche le haut de l'écran à 1 quand son bas atteint le bas de l'écran.
 * Léger : un IntersectionObserver n'active l'écoute que près de l'écran ; un seul calcul par image (rAF) ; écrit la
 * variable CSS --p sur l'élément et appelle onProgress (mises à jour directes du DOM, pas de rendu React).
 * Mouvements réduits : état final (p = 1) tout de suite.
 */
export function useScrollProgress<T extends HTMLElement>(
  onProgress?: (p: number) => void,
  opts: { start?: number; end?: number; mode?: "enter" | "pin" } = {},
) {
  const ref = useRef<T>(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;
  const { start = 0.85, end = 0.35, mode = "enter" } = opts;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let last = -1;
    const apply = (p: number) => {
      if (Math.abs(p - last) < 0.0005) return;
      last = p;
      el.style.setProperty("--p", p.toFixed(4));
      cb.current?.(p);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { apply(1); return; }
    let raf = 0, active = false;
    const measure = () => {
      raf = 0;
      const r = el.getBoundingClientRect(), vh = window.innerHeight || 1;
      let p: number;
      if (mode === "pin") {
        const span = r.height - vh;
        p = span > 0 ? -r.top / span : (r.top <= 0 ? 1 : 0);
      } else {
        p = (start * vh - r.top) / ((start - end) * vh);
      }
      apply(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure); };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !active) { active = true; window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll); }
      else if (!e.isIntersecting && active) { active = false; window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); }
      onScroll();
    }, { rootMargin: "25% 0px 25% 0px" });
    io.observe(el);
    measure();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [start, end, mode]);
  return ref;
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** Sous-progression : la part de p comprise entre a et b, ramenée à 0 → 1. */
export const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
