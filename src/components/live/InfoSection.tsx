// Textes repris tels quels du site en ligne (branche master, 21/11), dans src/lib/liveCopy.ts. Mise en forme : passe 7
// (21/11), système des chapitres (repère mono bleu, titre Manrope 500, grille de 1 120 px, filets ; classes .h7-* de
// src/app/home-p5.css).
"use client";

import { useLang, useT } from "@/lib/i18n";
import { LIVE } from "@/lib/liveCopy";
import { useInView } from "@/hooks/useInView";

export default function InfoSection() {
  const t = { ...useT(), ...LIVE[useLang().lang] };
  const inf = t.info;
  const { ref: headRef, visible: headIn } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref: gridRef, visible: gridIn } = useInView<HTMLDivElement>(0.15, { oneShot: true });

  return (
    <section id="idea" className="h7 h7-idea">
      {/* Passe 7 : une grande phrase + 3 mots-clés courts (accord du propriétaire, 21/11). */}
      <div className="p5-wrap">
        <div ref={headRef} className={`h7-head${headIn ? " is-in" : ""}`}>
          <p className="st6-kick">{inf.label}</p>
          <h2 className="h7-h2">{inf.h2}</h2>
        </div>
        <div ref={gridRef} className={`h7-grid${gridIn ? " is-in" : ""}`}>
          {inf.steps.map((step, i) => (
            <div key={i} className="h7-cell">
              <span className="h7-n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="h7-h3">{step.title}</h3>
              <p className="h7-p">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
