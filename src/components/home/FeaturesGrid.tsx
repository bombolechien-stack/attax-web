"use client";

import { useT } from "@/lib/i18n";
import { useInView, fadeUp } from "@/hooks/useInView";

function FeatureItem({ item, index }: { item: { title: string; desc: string }; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className="feature-item" style={{ padding: "3.5rem 2.5rem", borderBottom: "1px solid #ebebeb", borderLeft: index % 3 > 0 ? "1px solid #ebebeb" : "none" }}>
      <div style={{ ...fadeUp(visible, 0), fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "1rem", letterSpacing: "-0.025em" }}>
        {item.title}
      </div>
      <p style={{ ...fadeUp(visible, 140), fontSize: "0.9375rem", color: "#999", lineHeight: 1.75, margin: 0 }}>
        {item.desc}
      </p>
    </div>
  );
}

export default function FeaturesGrid() {
  const t = useT();
  const f = t.features;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="features" className="features-section" style={{ backgroundColor: "#ffffff", padding: "10rem 2rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div ref={headerRef} style={{ marginBottom: "7rem" }}>
          <span style={{ ...fadeUp(headerVisible, 0), display: "block", marginBottom: "2rem" }} className="section-label">{f.label}</span>
          <h2 className="features-h2" style={{ fontSize: "clamp(3.5rem, 7.5vw, 8rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.06em", lineHeight: 0.88, margin: 0 }}>
            <span style={fadeUp(headerVisible, 80)}>{f.h2[0]}</span>
            <span style={fadeUp(headerVisible, 230)}>{f.h2[1]}</span>
          </h2>
        </div>
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #ebebeb" }}>
          {f.items.map((item, i) => (
            <FeatureItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
