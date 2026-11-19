"use client";

import { useT } from "@/lib/i18n";
import { useInView, fadeUp, slideLeft } from "@/hooks/useInView";

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export default function PrivacyStrip() {
  const t = useT();
  const p = t.privacy;
  const { ref, visible } = useInView<HTMLDivElement>(0.1);

  return (
    <section ref={ref} style={{ backgroundColor: "#f7f7f7", padding: "5rem 2rem" }}>
      <div className="privacy-inner" style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", alignItems: "center", gap: "5rem", justifyContent: "space-between" }}>

        {/* Left: icon + title */}
        <div className="privacy-left" style={{ ...slideLeft(visible, 0), display: "flex", alignItems: "flex-start", gap: "1.25rem", flex: "0 0 auto", maxWidth: "340px" }}>
          <div style={{ color: "#0d0d0d", flexShrink: 0, paddingTop: "3px" }}><ShieldIcon /></div>
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 0.5rem" }}>{p.label}</p>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em", lineHeight: 1.2, margin: 0 }}>{p.title}</h3>
          </div>
        </div>

        {/* Middle: body text */}
        <p style={{ ...fadeUp(visible, 100), fontSize: "0.9375rem", color: "#777", lineHeight: 1.8, margin: 0, flex: 1, maxWidth: "400px" }}>{p.body}</p>

        {/* Right: checklist */}
        <div style={{ ...fadeUp(visible, 180), display: "flex", flexDirection: "column", gap: "0.625rem", flex: "0 0 auto" }}>
          {p.points.map((point: string, i: number) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#444" }}>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
