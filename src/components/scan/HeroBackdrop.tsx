"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Portage exact de l'app (budyfit/components/HeroScanlines.tsx + HeroBackdrop.tsx) :
 * le fond des héros de l'app — surface gris-bleu clair, léger dégradé, scanlines « crayon » sombres
 * presque invisibles (opacité 0,17, #34464F), lignes régulières tous les ~7 px, plus épaisses au centre,
 * fines sur les côtés.
 */
export function HeroScanlines({ w, h, color = "#FFFFFF", thickness = 1 }: { w: number; h: number; color?: string; thickness?: number }) {
  const lines = useMemo(() => {
    if (w <= 0 || h <= 0) return [];
    const SPACING = 7;
    const STEP = 10;
    const N = Math.max(2, Math.round(h / SPACING) - 1);
    const stepY = h / (N + 1);
    const xs: number[] = [];
    for (let x = 0; x < w; x += STEP) xs.push(x);
    xs.push(w);
    const out: { d: string; op: number }[] = [];
    for (let i = 0; i < N; i++) {
      const baseY = stepY * (i + 1);
      const t = baseY / h;
      const seed = i * 1.37;
      const vEnv = 0.5 + 0.5 * Math.exp(-Math.pow((t - 0.5) / 0.34, 2));
      const lineOp = 0.85 * (0.78 + 0.22 * vEnv);
      const top: number[][] = [];
      const bot: number[][] = [];
      for (const x of xs) {
        const n = Math.sin(x * 0.045 + seed * 1.7) * 0.5 + Math.sin(x * 0.015 + seed * 3.1) * 0.5;
        const hEnv = Math.sin(Math.PI * Math.min(1, Math.max(0, x / w)));
        const half = (0.45 + (n + 1) * 0.05) * (0.55 + 2.6 * hEnv) * (0.72 + 0.5 * vEnv) * thickness;
        top.push([x, baseY - half]);
        bot.push([x, baseY + half]);
      }
      let d = `M${top[0][0].toFixed(1)} ${top[0][1].toFixed(1)}`;
      for (let k = 1; k < top.length; k++) d += `L${top[k][0].toFixed(1)} ${top[k][1].toFixed(1)}`;
      for (let k = bot.length - 1; k >= 0; k--) d += `L${bot[k][0].toFixed(1)} ${bot[k][1].toFixed(1)}`;
      d += "Z";
      out.push({ d, op: lineOp });
    }
    return out;
  }, [w, h, thickness]);

  if (w <= 0 || h <= 0) return null;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
      {lines.map((l, i) => <path key={i} d={l.d} fill={color} opacity={l.op} />)}
    </svg>
  );
}

export const HERO_BG = "#EBEFF3";

/** Fond du hero de l'app. `fadeTo` : se fond vers cette couleur dans sa moitié basse. */
export default function HeroBackdrop({ fadeTo, lineOpacity = 0.17 }: { fadeTo?: string; lineOpacity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const w = Math.round(e.contentRect.width), h = Math.round(e.contentRect.height);
      setSize((o) => (o.w === w && o.h === h ? o : { w, h }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #EDF1F5 0%, #E3E9EF 55%, #D8DFE8 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(120,138,158,0) 72%, rgba(120,138,158,0.12) 100%)" }} />
      {size.w > 0 && <div style={{ position: "absolute", inset: 0, opacity: lineOpacity }}><HeroScanlines w={size.w} h={size.h} color="#34464F" /></div>}
      {!!fadeTo && <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${fadeTo}00 30%, ${fadeTo} 85%, ${fadeTo} 100%)` }} />}
    </div>
  );
}
