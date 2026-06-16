"use client";

import { useT } from "@/lib/i18n";

export default function HowItWorks() {
  const t = useT();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="hiw-section" style={{ backgroundColor: "#ffffff", padding: "10rem 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
        <div className="hiw-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "6rem", paddingBottom: "4rem", borderBottom: "1px solid #ebebeb", gap: "3rem" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>{h.label}</span>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.9, margin: 0 }}>
              {h.h2[0]}<br />{h.h2[1]}
            </h2>
          </div>
          <p className="hiw-sub" style={{ fontSize: "1rem", color: "#aaa", lineHeight: 1.75, maxWidth: "280px", margin: 0, flex: "0 0 280px" }}>
            {h.subtitle}
          </p>
        </div>
        <div>
          {h.steps.map((s, i) => (
            <div key={i} className="hiw-step" style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "0", padding: "4rem 0", borderBottom: "1px solid #ebebeb", alignItems: "start" }}>
              <div className="hiw-step-num" style={{ fontSize: "clamp(3.5rem, 5vw, 5rem)", fontWeight: 900, color: "#ebebeb", letterSpacing: "-0.05em", lineHeight: 1, paddingTop: "0.1em" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="hiw-step-body" style={{ paddingLeft: "3rem" }}>
                <div className="hiw-step-title" style={{ fontSize: "clamp(2.5rem, 4.5vw, 5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.05em", lineHeight: 0.95, marginBottom: "1.5rem" }}>{s.title}</div>
                <p style={{ fontSize: "1.0625rem", color: "#888", lineHeight: 1.75, margin: 0, maxWidth: "560px" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
