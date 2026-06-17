"use client";

import { useT } from "@/lib/i18n";
import { useInView, clipReveal, scaleIn, fadeUp, fadeIn } from "@/hooks/useInView";

function TestimonialCard({ item, index }: { item: { quote: string; name: string; role: string; initials: string }; index: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  const isCenter = index === 1;
  return (
    <div ref={ref} style={{
      ...scaleIn(visible, index * 80, 0.95),
      backgroundColor: isCenter ? "#1a1a1a" : "rgba(255,255,255,0.04)",
      border: isCenter ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.06)",
      borderRadius: "24px",
      padding: "2.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "2rem",
      transform: isCenter ? `${scaleIn(visible, index * 80, 0.95).transform} translateY(-16px)` : scaleIn(visible, index * 80, 0.95).transform,
    }}>
      {/* Quote mark */}
      <div style={{ fontSize: "4rem", lineHeight: 0.8, color: "rgba(255,255,255,0.1)", fontWeight: 800, letterSpacing: "-0.05em", fontStyle: "normal", marginBottom: "-0.5rem" }}>"</div>

      {/* Quote text */}
      <p style={{ fontSize: "1.0625rem", color: isCenter ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0, flex: 1, fontWeight: 400 }}>
        {item.quote}
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem" }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          backgroundColor: isCenter ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.75rem", fontWeight: 800, color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.05em", flexShrink: 0,
        }}>
          {item.initials}
        </div>
        <div>
          <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff", marginBottom: "2px" }}>{item.name}</div>
          <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const t = useT();
  const tm = t.testimonials;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section style={{ backgroundColor: "#0d0d0d", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div ref={headerRef} style={{ marginBottom: "4rem" }}>
          <p style={{ ...fadeUp(headerVisible, 0), fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>{tm.label}</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: 0 }}>
            <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 80)}>{tm.h2[0]}</span></div>
            <div style={{ overflow: "hidden" }}><span style={clipReveal(headerVisible, 200)}>{tm.h2[1]}</span></div>
          </h2>
        </div>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", alignItems: "end" }}>
          {tm.items.map((item: { quote: string; name: string; role: string; initials: string }, i: number) => (
            <TestimonialCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
