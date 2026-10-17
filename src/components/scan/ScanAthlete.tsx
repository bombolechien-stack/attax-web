"use client";

import type { CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";
import { ATHLETES, type AthleteName } from "./athletes";

/**
 * Athlète en scanlines, la signature visuelle des carrousels Attax.
 * L'image (lignes blanches sur transparent) sert de masque : la couleur se règle avec `color`.
 * À l'apparition, les lignes se tracent de gauche à droite.
 */
export default function ScanAthlete({
  name,
  color = "#C9D5F0",
  height,
  width,
  flip = false,
  reveal = true,
  delay = 0,
  label,
  style,
  className,
}: {
  name: AthleteName;
  color?: string;
  /** hauteur CSS (ex. "70vh", "420px") ; sinon `width` */
  height?: string;
  width?: string;
  flip?: boolean;
  reveal?: boolean;
  delay?: number;
  /** texte alternatif (sinon décoratif) */
  label?: string;
  style?: CSSProperties;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15, { oneShot: true });
  const a = ATHLETES[name];
  const src = `/scan/${name}.webp`;
  const shown = !reveal || visible;
  // L'observateur regarde le conteneur : un élément entièrement masqué par clip-path
  // n'est jamais « visible » pour IntersectionObserver.
  return (
    <div
      ref={ref}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      style={{
        aspectRatio: `${a.w} / ${a.h}`,
        height: height ?? "auto",
        width: width ?? (height ? "auto" : "100%"),
        transform: flip ? "scaleX(-1)" : undefined,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          clipPath: shown ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: `clip-path 1.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      />
    </div>
  );
}
