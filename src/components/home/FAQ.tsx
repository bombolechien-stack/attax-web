"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const t = useT();
  const f = t.faq;

  return (
    <section id="faq" className="faq-section p5-sec faq5">
      <div className="p5-wrap">
        <div className="faq-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }}>
          <div className="faq-sticky" style={{ position: "sticky", top: "6rem" }}>
            <p className="p5-label">{f.label}</p>
            <h2 className="p5-h2">{f.h2}</h2>
            <p className="p5-lead" style={{ marginTop: "1.25rem" }}>
              {f.contact_text}{" "}
              <a href="/contact" style={{ color: "#0d0d0d", fontWeight: 600, textDecoration: "underline" }}>{f.contact_link}</a>.
            </p>
            <a href="/faq" style={{ display: "inline-flex", marginTop: "1.75rem", backgroundColor: "#0d0d0d", color: "#ffffff", fontWeight: 700, fontSize: "0.875rem", padding: "12px 22px", borderRadius: "999px", textDecoration: "none" }}>
              {f.all_link} →
            </a>
          </div>
          <div>
            {f.items.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(11,11,12,0.1)" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.15rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "1.1875rem", fontWeight: 500, color: "#0B0B0C", lineHeight: 1.4, paddingRight: "1rem" }}>{faq.q}</span>
                  <span style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", border: "1.5px solid #d0d0d0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", color: "#666", transition: "transform 0.25s ease", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: "1.5rem" }}>
                    <p style={{ fontSize: "1.0625rem", color: "#33373D", lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
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
