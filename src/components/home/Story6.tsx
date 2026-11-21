"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

// Un écran de l'histoire (accueil, structure validée le 21/11) : une grande phrase + une ligne d'un côté, UN visuel de
// l'app de l'autre ; côtés alternés (reverse). Environ un écran de haut, sans vide.
export default function Story6({ id, kicker, title, line, children, reverse = false, extra }: {
  id: string; kicker?: string; title: [ReactNode, ReactNode]; line: ReactNode; children: ReactNode; reverse?: boolean; extra?: ReactNode;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  return (
    <section id={id} className={`st6${reverse ? " is-rev" : ""}`}>
      <div className="p5-wrap st6-grid">
        <div ref={ref} className={`st6-txt${visible ? " is-in" : ""}`}>
          {kicker && <p className="p5-label">{kicker}</p>}
          <h2 className="st6-h2"><span>{title[0]}</span> <span>{title[1]}</span></h2>
          <p className="st6-line">{line}</p>
          {extra}
        </div>
        <div className="st6-vis">{children}</div>
      </div>
    </section>
  );
}
