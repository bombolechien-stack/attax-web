"use client";

import { useState } from "react";

const FAQS = [
  { q: "Do I need a smartwatch?", a: "Yes. Attax requires a connected wearable to track your activity accurately. iPhone users need an Apple Watch; Android users need a Wear OS, Garmin, or Fitbit device. Data syncs automatically via Apple Health or Health Connect." },
  { q: "Does walking count?", a: "Yes. Any activity tracked by Apple Health or Health Connect contributes to your power — walking, running, cycling, swimming, gym sessions, and more." },
  { q: "Can I use Attax without running?", a: "Absolutely. Attax values all forms of movement. Whether you lift weights, cycle, swim or walk, your effort translates into combat power." },
  { q: "How are battles calculated?", a: "Your battle score is based on a 7-day rolling activity score. Each session earns Activity Points based on effort, heart rate zones, and duration. The player with the highest score at 21:30 wins the day." },
  { q: "Can I play with friends?", a: "Yes. You can create or join a private league with friends and compete over 7 days. Public matchmaking is also available for competitive play." },
  { q: "Is Attax free?", a: "Yes, Attax is free to download and play. Core features are available for free, with optional in-app content available later." },
  { q: "Does Attax work on iPhone and Android?", a: "Yes. Attax is available on both the App Store (iOS) and Google Play (Android). Activity syncs via Apple Health on iPhone and Health Connect on Android." },
  { q: "How is my data used?", a: "Your health data is used exclusively to calculate your in-game power score. We do not sell your personal data to third parties. See our Privacy Policy for full details." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ backgroundColor: "#ffffff", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "6rem", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "6rem" }}>
            <p className="section-label" style={{ margin: "0 0 1.5rem" }}>FAQ</p>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800,
              color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 1.25rem",
            }}>
              Frequently asked questions.
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "#888", lineHeight: 1.7, margin: 0 }}>
              Can&apos;t find your answer? <a href="/contact" style={{ color: "#0d0d0d", fontWeight: 600, textDecoration: "underline" }}>Get in touch</a>.
            </p>
          </div>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "#0d0d0d", lineHeight: 1.4, paddingRight: "1rem" }}>{faq.q}</span>
                  <span style={{
                    flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%",
                    border: "1.5px solid #d0d0d0", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.875rem", color: "#666", transition: "transform 0.25s ease",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}>+</span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: "1.5rem" }}>
                    <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
