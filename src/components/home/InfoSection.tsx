"use client";

import { useT } from "@/lib/i18n";
import { useInView, fadeUp } from "@/hooks/useInView";

function InfoStep({ step, index }: { step: { title: string; body: string }; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={index > 0 ? "info-step-border" : ""} style={{
      borderTop: "1px solid #e8e8e8",
      borderLeft: index > 0 ? "1px solid #e8e8e8" : "none",
      padding: "2.5rem 2.5rem 2.5rem 0",
      paddingLeft: index > 0 ? "2.5rem" : 0,
    }}>
      <span style={{ ...fadeUp(visible, 0), display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#c0c0c0", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 style={{ ...fadeUp(visible, 100), fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", letterSpacing: "-0.025em", lineHeight: 1.3, margin: "0 0 0.875rem" }}>
        {step.title}
      </h3>
      <p style={{ ...fadeUp(visible, 220), fontSize: "0.9rem", color: "#888", lineHeight: 1.75, margin: 0 }}>{step.body}</p>
    </div>
  );
}

export default function InfoSection() {
  const t = useT();
  const inf = t.info;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div ref={headerRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", marginBottom: "5rem" }}>
          <div>
            <p style={{ ...fadeUp(headerVisible, 0) }} className="section-label">{inf.label}</p>
            <h2 style={{ ...fadeUp(headerVisible, 120), fontSize: "clamp(2rem, 3.5vw, 2.875rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.06, margin: 0 }}>
              {inf.h2}
            </h2>
          </div>
          <p style={{ ...fadeUp(headerVisible, 260), fontSize: "1rem", color: "#888", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px", whiteSpace: "pre-line" }}>{inf.sub}</p>
        </div>
        <div className="info-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
          {inf.steps.map((step, i) => (
            <InfoStep key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
