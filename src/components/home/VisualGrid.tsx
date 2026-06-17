"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useInView, fadeUp, scaleIn, clipReveal } from "@/hooks/useInView";

const SRCS = [
  "/screens/screenactivity.png",
  "/screens/screenmatch.png",
  "/screens/screencards.png",
];
const SCALES = [0.82, 1, 0.82];

export default function VisualGrid() {
  const t = useT();
  const v = t.visualGrid;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: phonesRef, visible: phonesVisible } = useInView<HTMLDivElement>(0.08);

  return (
    <section className="vg-section" style={{ backgroundColor: "#e8ecf0", padding: "9rem 0 10rem", position: "relative", overflow: "hidden" }}>
      <div ref={headerRef}>
        <p style={{ ...fadeUp(headerVisible, 0), textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", margin: "0 0 1.25rem" }}>
          {v.label}
        </p>
        <div style={{ overflow: "hidden" }}>
          <h2 style={{ ...clipReveal(headerVisible, 100), textAlign: "center", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.05em", lineHeight: 1.0, margin: "0 0 5rem" }}>
            {v.h2}
          </h2>
        </div>
      </div>

      <div ref={phonesRef} className="vg-container" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "0", marginBottom: "2.5rem" }}>
        {v.phones.map((p, i) => {
          const W = 500 * SCALES[i];
          const H = W * (873 / 760);
          const isSide = i !== 1;
          const delay = i === 1 ? 0 : i === 0 ? 150 : 300;
          return (
            <div
              key={i}
              className={isSide ? "vg-phone-side" : "vg-phone-center"}
              style={{ ...scaleIn(phonesVisible, delay, 0.92), width: W, height: H, position: "relative", flexShrink: 0, filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))" }}
            >
              <Image src={SRCS[i]} alt={p.label} fill style={{ objectFit: "contain" }} />
            </div>
          );
        })}
      </div>

      <div className="vg-container" style={{ display: "flex", justifyContent: "center", gap: "0", margin: "0 auto" }}>
        {v.phones.map((p, i) => {
          const isSide = i !== 1;
          return (
            <div
              key={i}
              className={isSide ? "vg-label-side" : ""}
              style={{ width: 500 * SCALES[i], flexShrink: 0, textAlign: "center", padding: "0 1.5rem" }}
            >
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, letterSpacing: "-0.025em", color: "#0d0d0d", margin: "0 0 0.5rem" }}>{p.label}</h3>
              <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.7, margin: 0 }}>{p.caption}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
