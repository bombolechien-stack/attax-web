"use client";

import { useT } from "@/lib/i18n";

export default function FeaturesGrid() {
  const t = useT();
  const f = t.features;

  return (
    <section id="features" style={{ backgroundColor: "#ffffff", padding: "10rem 2rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "7rem" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "2rem" }}>{f.label}</span>
          <h2 style={{ fontSize: "clamp(3.5rem, 7.5vw, 8rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.06em", lineHeight: 0.88, margin: 0 }}>
            {f.h2[0]}<br />{f.h2[1]}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #ebebeb" }}>
          {f.items.map((item, i) => (
            <div key={i} style={{ padding: "3.5rem 2.5rem", borderBottom: "1px solid #ebebeb", borderLeft: i % 3 > 0 ? "1px solid #ebebeb" : "none" }}>
              <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "1rem", letterSpacing: "-0.025em" }}>{item.title}</div>
              <p style={{ fontSize: "0.9375rem", color: "#999", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
