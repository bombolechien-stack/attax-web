"use client";

import React from "react";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideLeft, fadeIn } from "@/hooks/useInView";

const ICONS: Record<string, React.ReactElement> = {
  run: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
      <path d="M7.5 17.5L10 13l3 2 2-5"/>
      <path d="M16 17.5h-4l-1.5-3"/>
    </svg>
  ),
  sync: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
      <path d="M16 16h5v5"/>
    </svg>
  ),
  card: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="3"/>
      <path d="M8 12h8M8 8h8M8 16h4"/>
    </svg>
  ),
  battle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

function LoopStep({ step, index }: { step: { n: string; time: string; title: string; body: string; icon: string }; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const isLast = index === 3;
  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "0 2rem", position: "relative" }}>
      {/* Left: number + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ ...fadeIn(visible, 0), width: 48, height: 48, borderRadius: "50%", border: "1.5px solid #e8e8e8", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#0d0d0d", flexShrink: 0, zIndex: 1 }}>
          {ICONS[step.icon]}
        </div>
        {!isLast && <div style={{ width: 1, flex: 1, backgroundColor: "#e8e8e8", marginTop: "0.75rem", marginBottom: "0.75rem", minHeight: "3rem" }} />}
      </div>
      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? 0 : "3.5rem" }}>
        <div style={{ ...fadeIn(visible, 60), display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "#ccc", letterSpacing: "0.18em" }}>{step.n}</span>
          <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#bbb", letterSpacing: "0.08em" }}>{step.time}</span>
        </div>
        <h3 style={{ ...clipReveal(visible, 80), fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.0, margin: "0 0 0.875rem" }}>
          {step.title}
        </h3>
        <p style={{ ...fadeUp(visible, 160), fontSize: "1rem", color: "#777", lineHeight: 1.8, margin: 0, maxWidth: "460px" }}>
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function DailyLoop() {
  const t = useT();
  const d = t.dailyLoop;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="dl-loop-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>

          {/* Left: sticky header */}
          <div ref={headerRef} className="dl-loop-header" style={{ position: "sticky", top: "8rem" }}>
            <p className="section-label" style={{ ...fadeUp(headerVisible, 0), margin: "0 0 1.5rem" }}>{d.label}</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 1.5rem" }}>
              <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 80)}>{d.h2[0]}</span></div>
              <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 200)}>{d.h2[1]}</span></div>
            </h2>
            <p style={{ ...slideLeft(headerVisible, 280), fontSize: "1.0625rem", color: "#aaa", lineHeight: 1.75, margin: 0 }}>{d.sub}</p>
          </div>

          {/* Right: steps */}
          <div style={{ paddingTop: "0.5rem" }}>
            {d.steps.map((step: { n: string; time: string; title: string; body: string; icon: string }, i: number) => (
              <LoopStep key={step.n} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
