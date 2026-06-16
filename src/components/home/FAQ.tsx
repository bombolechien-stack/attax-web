"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const t = useT();
  const f = t.faq;

  return (
    <section id="faq" className="faq-section" style={{ backgroundColor: "#ffffff", padding: "9rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="faq-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "6rem", alignItems: "start" }}>
          <div className="faq-sticky" style={{ position: "sticky", top: "6rem" }}>
            <p className="section-label" style={{ margin: "0 0 1.5rem" }}>{f.label}</p>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.05, margin: "0 0 1.25rem" }}>
              {f.h2}
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "#888", lineHeight: 1.7, margin: 0 }}>
              {f.contact_text}{" "}
              <a href="/contact" style={{ color: "#0d0d0d", fontWeight: 600, textDecoration: "underline" }}>{f.contact_link}</a>.
            </p>
          </div>
          <div>
            {f.items.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "#0d0d0d", lineHeight: 1.4, paddingRight: "1rem" }}>{faq.q}</span>
                  <span style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", border: "1.5px solid #d0d0d0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", color: "#666", transition: "transform 0.25s ease", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
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
