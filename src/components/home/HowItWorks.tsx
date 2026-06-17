"use client";

import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideLeft, slideRight } from "@/hooks/useInView";

function HiwStep({ step, index }: { step: { title: string; body: string }; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className="hiw-step" style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "0", padding: "4rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", alignItems: "start" }}>
      <div className="hiw-step-num" style={{ ...slideLeft(visible, 0), fontSize: "clamp(3.5rem, 5vw, 5rem)", fontWeight: 900, color: "rgba(255,255,255,0.06)", letterSpacing: "-0.05em", lineHeight: 1, paddingTop: "0.1em" }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="hiw-step-body" style={{ paddingLeft: "3rem" }}>
        <div className="hiw-step-title" style={{ ...clipReveal(visible, 80), fontSize: "clamp(2.5rem, 4.5vw, 5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.05em", lineHeight: 0.95, marginBottom: "1.5rem" }}>
          {step.title}
        </div>
        <p style={{ ...fadeUp(visible, 200), fontSize: "1.0625rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0, maxWidth: "560px" }}>
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const t = useT();
  const h = t.howItWorks;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="how-it-works" className="hiw-section" style={{ backgroundColor: "#070707", padding: "10rem 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
        <div ref={headerRef} className="hiw-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "6rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(255,255,255,0.06)", gap: "3rem" }}>
          <div>
            <span style={{ ...fadeUp(headerVisible, 0), display: "block", marginBottom: "1.5rem", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
              {h.label}
            </span>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.055em", lineHeight: 0.9, margin: 0 }}>
              <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 0)}>{h.h2[0]}</span></div>
              <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 120)}>{h.h2[1]}</span></div>
            </h2>
          </div>
          <p className="hiw-sub" style={{ ...slideRight(headerVisible, 280), fontSize: "1rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: "280px", margin: 0, flex: "0 0 280px" }}>
            {h.subtitle}
          </p>
        </div>
        <div>
          {h.steps.map((s, i) => (
            <HiwStep key={i} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
