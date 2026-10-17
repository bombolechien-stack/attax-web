"use client";

import { useMemo } from "react";
import type { CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * Bande de scanlines (lignes plus épaisses au centre, effilées aux bords) :
 * la même que sur les carrousels et l'écran d'accueil de l'app.
 */
export default function ScanBand({
  color = "#0d0d0d",
  lines = 9,
  height = 90,
  opacity = 1,
  thickness = 1,
  style,
}: {
  color?: string;
  lines?: number;
  height?: number;
  opacity?: number;
  thickness?: number;
  style?: CSSProperties;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const W = 1200;
  const paths = useMemo(() => {
    const out: { d: string; a: number }[] = [];
    const st = height / (lines + 1);
    for (let i = 0; i < lines; i++) {
      const by = st * (i + 1), t = by / height, seed = i * 1.37;
      const vEnv = 0.5 + 0.5 * Math.exp(-Math.pow((t - 0.5) / 0.34, 2));
      const top: string[] = [], bot: string[] = [];
      for (let x = 0; x <= W; x += 8) {
        const n = Math.sin(x * 0.045 + seed * 1.7) * 0.5 + Math.sin(x * 0.015 + seed * 3.1) * 0.5;
        const hEnv = Math.sin(Math.PI * Math.min(1, Math.max(0, x / W)));
        const half = (0.45 + (n + 1) * 0.05) * (0.55 + 2.6 * hEnv) * (0.72 + 0.5 * vEnv) * thickness;
        top.push(`${x},${(by - half).toFixed(2)}`);
        bot.unshift(`${x},${(by + half).toFixed(2)}`);
      }
      out.push({ d: `M${top.join("L")}L${bot.join("L")}Z`, a: 0.85 * (0.78 + 0.22 * vEnv) });
    }
    return out;
  }, [lines, height, thickness]);

  return (
    <div ref={ref} aria-hidden="true" style={{ width: "100%", height, opacity, ...style }}>
      <svg
        viewBox={`0 0 ${W} ${height}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{
          display: "block",
          clipPath: visible ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)",
          transition: "clip-path 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {paths.map((p, i) => (
          <path key={i} d={p.d} fill={color} opacity={p.a} />
        ))}
      </svg>
    </div>
  );
}
