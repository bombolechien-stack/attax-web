"use client";

import { useT } from "@/lib/i18n";

export default function InfoSection() {
  const t = useT();
  const inf = t.info;

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem", maxWidth: "640px" }}>
          <p className="section-label" style={{ margin: "0 0 1.25rem" }}>{inf.label}</p>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.875rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.06, margin: 0 }}>
            {inf.h2}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
          {inf.steps.map((step, i) => (
            <div key={i} style={{
              borderTop: "1px solid #e8e8e8",
              borderLeft: i > 0 ? "1px solid #e8e8e8" : "none",
              padding: "2.5rem 2.5rem 2.5rem 0",
              paddingLeft: i > 0 ? "2.5rem" : 0,
            }}>
              <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#c0c0c0", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", letterSpacing: "-0.025em", lineHeight: 1.3, margin: "0 0 0.875rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.75, margin: 0 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
