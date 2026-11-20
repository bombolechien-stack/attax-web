"use client";

import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";

// Fonctionnalités (version premium, 20/11) : un tableau sobre, une ligne par fonctionnalité (titre à gauche, détail à
// droite), filets fins.
export default function FeaturesGrid() {
  const t = useT();
  const f = t.features;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: listRef, visible: listVisible } = useInView<HTMLDivElement>(0.1, { oneShot: true });

  return (
    <section id="features" className="p-section" style={{ background: "#FAFAFA" }}>
      <div className="p-wrap p-narrow">
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="p-label" style={fadeUp(headerVisible, 0)}>{f.label}</p>
          <h2 className="p-h2">
            <div><span style={clipReveal(headerVisible, 0)}>{f.h2[0]}</span></div>
            <div><span style={clipReveal(headerVisible, 120)}>{f.h2[1]}</span></div>
          </h2>
        </div>
        <div ref={listRef} className="ft-table">
          {f.items.map((item, i) => (
            <div key={i} className="ft-row" style={fadeUp(listVisible, 60 * i)}>
              <div className="ft-title">{item.title}</div>
              <div className="p-body">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
