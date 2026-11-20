"use client";

import { useMemo } from "react";

/**
 * Les scanlines « crayon » de l'app (components/HeroScanlines.tsx), au pixel près : lignes régulières tous les 7 px,
 * plus épaisses au centre, effilées sur les côtés. Sert de trame aux cartes de round (gagné, perdu, nul, round final).
 */
export default function AppScanlines({ w, h, color = "#FFFFFF", opacity = 1, thickness = 0.7 }: {
  w: number; h: number; color?: string; opacity?: number; thickness?: number;
}) {
  const paths = useMemo(() => {
    const SPACING = 7, STEP = 10;
    const N = Math.max(2, Math.round(h / SPACING) - 1);
    const stepY = h / (N + 1);
    const xs: number[] = [];
    for (let x = 0; x < w; x += STEP) xs.push(x);
    xs.push(w);
    const out: { d: string; op: number }[] = [];
    for (let i = 0; i < N; i++) {
      const baseY = stepY * (i + 1), t = baseY / h, seed = i * 1.37;
      const vEnv = 0.5 + 0.5 * Math.exp(-Math.pow((t - 0.5) / 0.34, 2));
      const top: string[] = [], bot: string[] = [];
      for (const x of xs) {
        const n = Math.sin(x * 0.045 + seed * 1.7) * 0.5 + Math.sin(x * 0.015 + seed * 3.1) * 0.5;
        const hEnv = Math.sin(Math.PI * Math.min(1, Math.max(0, x / w)));
        const half = (0.45 + (n + 1) * 0.05) * (0.55 + 2.6 * hEnv) * (0.72 + 0.5 * vEnv) * thickness;
        top.push(`${x.toFixed(1)} ${(baseY - half).toFixed(1)}`);
        bot.unshift(`${x.toFixed(1)} ${(baseY + half).toFixed(1)}`);
      }
      out.push({ d: `M${top.join("L")}L${bot.join("L")}Z`, op: 0.85 * (0.78 + 0.22 * vEnv) });
    }
    return out;
  }, [w, h, thickness]);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }}>
      {paths.map((p, i) => <path key={i} d={p.d} fill={color} opacity={p.op} />)}
    </svg>
  );
}
