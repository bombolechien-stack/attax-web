"use client";

import { useState } from "react";
import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";
import { FAQ_CONTENT, type FaqItem } from "./content";

function Answer({ item }: { item: FaqItem }) {
  return (
    <div style={{ paddingBottom: "1.5rem" }}>
      <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
      {item.list && (
        <ul style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.75, margin: "0.75rem 0 0", paddingLeft: "1.25rem" }}>
          {item.list.map((li, i) => <li key={i} style={{ marginBottom: "0.35rem" }}>{li}</li>)}
        </ul>
      )}
      {item.after && <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.75, margin: "0.75rem 0 0" }}>{item.after}</p>}
    </div>
  );
}

export default function FaqPage() {
  const { lang } = useLang();
  const c = FAQ_CONTENT[lang];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px" }}>
        <div style={{ backgroundColor: "#0d0d0d", borderRadius: "0 0 24px 24px", overflow: "hidden" }}>
          <PageNavbar />
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem 6rem" }}>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
              {c.heroLabel}
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 1.5rem", whiteSpace: "pre-line" }}>
              {c.heroTitle}
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 2.5rem", maxWidth: "540px" }}>
              {c.heroSub}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {c.categories.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.14)", textDecoration: "none" }}>
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Catégories */}
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "6rem 2rem 4rem" }}>
        {c.categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="faq-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start", padding: "3.5rem 0", borderTop: "1px solid #f0f0f0", scrollMarginTop: "6rem" }}>
            <div>
              <p className="section-label" style={{ margin: "0 0 1rem" }}>{cat.label}</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: 0 }}>
                {cat.title}
              </h2>
            </div>
            <div>
              {cat.items.map((item, i) => {
                const key = `${cat.id}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={key} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <button onClick={() => setOpen(isOpen ? null : key)} aria-expanded={isOpen} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                      <span style={{ fontSize: "1rem", fontWeight: 600, color: "#0d0d0d", lineHeight: 1.4, paddingRight: "1rem" }}>{item.q}</span>
                      <span style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", border: "1.5px solid #d0d0d0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.875rem", color: "#666", transition: "transform 0.25s ease", transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
                    </button>
                    {isOpen && <Answer item={item} />}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Contact */}
        <div style={{ borderTop: "1px solid #f0f0f0", padding: "4rem 0 2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em", margin: "0 0 0.75rem" }}>{c.contactTitle}</h2>
          <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.7, margin: "0 0 1.75rem" }}>{c.contactBody}</p>
          <Link href="/contact" style={{ display: "inline-flex", backgroundColor: "#0d0d0d", color: "#ffffff", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none" }}>
            {c.contactCta}
          </Link>
        </div>
      </div>
    </div>
  );
}
