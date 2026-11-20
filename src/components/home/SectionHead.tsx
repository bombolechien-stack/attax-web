"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

// En-tête commun de l'accueil (passe 5) : toujours aligné à gauche sur la grille du site. Étiquette, titre sur deux
// lignes (56 à 72 px sur ordinateur, 36 à 44 px sur téléphone), phrase d'appui à droite (18 à 20 px, encre).
export default function SectionHead({ label, title, lead, side }: { label: string; title: [ReactNode, ReactNode]; lead?: ReactNode; side?: ReactNode }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  return (
    <div ref={ref} className={`p5-head${visible ? " is-in" : ""}`}>
      <div className="p5-head-l">
        <p className="p5-label">{label}</p>
        <h2 className="p5-h2"><span>{title[0]}</span> <span>{title[1]}</span></h2>
      </div>
      {(lead || side) && <div className="p5-head-r">{lead && <p className="p5-lead">{lead}</p>}{side}</div>}
    </div>
  );
}
