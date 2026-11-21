// Textes repris tels quels du site en ligne (branche master, 21/11), dans src/lib/liveCopy.ts. Mise en forme : passe 7
// (21/11), système des chapitres (classes .h7-* de src/app/home-p5.css) : même titre, grille calme à filets.
"use client";

import { useLang, useT } from "@/lib/i18n";
import { LIVE } from "@/lib/liveCopy";
import { useInView } from "@/hooks/useInView";

export default function FeaturesGrid() {
  const t = { ...useT(), ...LIVE[useLang().lang] };
  const f = t.features;
  const { ref: headRef, visible: headIn } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref: gridRef, visible: gridIn } = useInView<HTMLDivElement>(0.1, { oneShot: true });

  return (
    <section id="features" className="h7 h7-features">
      <div className="p5-wrap">
        <div ref={headRef} className={`h7-head${headIn ? " is-in" : ""}`}>
          <p className="st6-kick">{f.label}</p>
          <h2 className="h7-h2"><span>{f.h2[0]}</span> <span>{f.h2[1]}</span></h2>
        </div>
        <div ref={gridRef} className={`h7-grid${gridIn ? " is-in" : ""}`}>
          {f.items.map((item, i) => (
            <div key={i} className="h7-cell">
              <h3 className="h7-h3">{item.title}</h3>
              <p className="h7-p">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
