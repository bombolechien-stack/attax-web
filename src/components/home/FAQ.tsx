"use client";

import { useState } from "react";

const FAQS = [
  { q: "Do I need a smartwatch?", a: "No. Attax works with your phone's built-in health data via Apple Health (iPhone) or Health Connect (Android). A smartwatch improves accuracy but is not required." },
  { q: "Does walking count?", a: "Yes. Any activity tracked by Apple Health or Health Connect contributes to your power — walking, running, cycling, swimming, gym sessions, and more." },
  { q: "How are battles calculated?", a: "Your battle score is based on a 7-day rolling activity window. Each session earns points based on effort, heart rate zones, and duration. The player with the highest score at 21:30 wins the duel." },
  { q: "Can I play with friends?", a: "Yes. Create or join a private league and compete over 7 days. Public matchmaking is also available for competitive play." },
  { q: "Is Attax free?", a: "Yes. Attax is free to download and play on iOS and Android." },
  { q: "How is my data used?", a: "Your health data is used exclusively to calculate your in-game power score. We never sell your personal data. See our Privacy Policy for details." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ backgroundColor: "#ffffff", padding: "clamp(8rem, 14vh, 12rem) 2rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }}>
        <div style={{ position: "sticky", top: "6rem" }}>
          <h2 style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: 800,
            color: "#0d0d0d",
            letterSpacing: "-0.055em",
            lineHeight: 0.95,
            margin: 0,
          }}>
            Questions.
          </h2>
        </div>
        <div>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderTop: "1px solid #ebebeb" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "1.75rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                }}
              >
                <span style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#0d0d0d", lineHeight: 1.4, paddingRight: "2rem" }}>{faq.q}</span>
                <span style={{
                  flexShrink: 0, width: "24px", height: "24px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem", color: "#ccc", lineHeight: 1,
                  transition: "transform 0.2s ease",
                  transform: open === i ? "rotate(45deg)" : "none",
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: "1.75rem" }}>
                  <p style={{ fontSize: "0.9375rem", color: "#888", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid #ebebeb" }} />
        </div>
      </div>
    </section>
  );
}
