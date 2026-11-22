"use client";

import { useScrollProgress, easeOut } from "@/hooks/useScrollProgress";

// 06 · Ton binôme (22/11, accord du propriétaire) : le moment du binôme de l'app (budyfit components/league/BinomeMoment.tsx :
// les deux boxeurs en scanlines, toi en bleu, ton binôme à l'encre, tendent les bras et se touchent les poings au centre).
// On reprend la VRAIE image de l'app (la capture story/<langue>/duo.webp, 524 × 1072) : la scène est coupée en deux au
// point de contact (x = 262) et chaque moitié glisse vers le centre avec le défilement ; à la fin, la capture exacte
// (poings qui se touchent). En remontant, ils se séparent. Mouvements réduits : poings joints.
const TOP = 170, H = 377, W = 524, X0 = 262, D = 0.2;
const pct = (v: number, of: number) => `${((v * 100) / of).toFixed(3)}%`;

export default function DuoFistsLive({ src }: { src: string }) {
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    const el = ref.current; if (!el) return;
    el.style.setProperty("--gap", (1 - easeOut(p)).toFixed(4));
  }, { start: 0.8, end: 0.3 });
  const half = (side: "l" | "r") => (
    <div className={`dfl-half is-${side}`} style={{ left: side === "l" ? 0 : pct(X0, W), width: side === "l" ? pct(X0, W) : pct(W - X0, W) }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" style={{ width: `${(W * 100) / (side === "l" ? X0 : W - X0)}%`, left: side === "l" ? 0 : `-${(X0 * 100) / (W - X0)}%`, top: `-${(TOP * 100) / H}%` }} />
    </div>
  );
  return (
    <div ref={ref} className="dfl" aria-hidden="true" style={{ top: pct(TOP, 1072), height: pct(H, 1072), ["--d" as string]: `${D * 100}cqw` }}>
      {half("l")}{half("r")}
    </div>
  );
}
