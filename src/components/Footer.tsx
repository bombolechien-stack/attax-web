"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/lib/i18n";

const LINK_STYLE = { fontSize: "0.875rem", color: "#555", textDecoration: "none", lineHeight: 1 };
const LABEL_STYLE: React.CSSProperties = { fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: "1.25rem", display: "block" };

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/gowithattax", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: "X / Twitter", href: "https://x.com/gowithattax", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "TikTok", href: "https://tiktok.com/@gowithattax", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg> },
  { label: "YouTube", href: "https://youtube.com/@gowithattax", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function Footer() {
  const t = useT();
  const f = t.footer;

  return (
    <footer>
      <div style={{ position: "relative", overflow: "hidden", padding: "0 12px" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/sport-running-group.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center 40%", filter: "grayscale(25%) contrast(1.1) brightness(0.58)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,7,7,0.65) 0%, rgba(7,7,7,0.38) 60%, rgba(7,7,7,0) 100%)" }} />
        </div>

        <div className="footer-cta-section" style={{ position: "relative", zIndex: 2, padding: "9rem 2rem 7rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 1.25rem" }}>{f.cta_label}</p>
          <h2 style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.05em", lineHeight: 0.95, margin: "0 0 1.5rem" }}>
            {f.cta_h2[0]}<br />{f.cta_h2[1]}
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: "0 auto 2.75rem", maxWidth: "340px" }}>{f.cta_sub}</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#fff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none" }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {f.cta_ios}
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.82)", fontWeight: 600, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.16)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/></svg>
              {f.cta_android}
            </a>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2, backgroundColor: "#ffffff", borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
          <div className="footer-attax" style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", fontSize: "clamp(5rem, 13vw, 14rem)", fontWeight: 900, color: "#f0f0f0", letterSpacing: "-0.06em", lineHeight: 1, whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none", fontFamily: "var(--font-jakarta), sans-serif", zIndex: 0 }}>
            ATTAX
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="footer-top-bar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2.75rem 4rem", borderBottom: "1px solid #f0f0f0", flexWrap: "wrap", gap: "1.5rem" }}>
              <Image src="/images/logo-attax-wh.svg" alt="Attax" width={130} height={49} style={{ display: "block", filter: "brightness(0)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "#f4f4f4", color: "#333", textDecoration: "none" }}>
                    {s.icon}
                  </a>
                ))}
                <span style={{ marginLeft: "12px", fontSize: "0.8125rem", fontWeight: 700, color: "#999", letterSpacing: "0.01em" }}>@gowithattax</span>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.8125rem", padding: "9px 18px", borderRadius: "999px", textDecoration: "none" }}>
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  iOS
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#f2f2f2", color: "#333", fontWeight: 600, fontSize: "0.8125rem", padding: "9px 18px", borderRadius: "999px", textDecoration: "none", border: "1px solid #e4e4e4" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/></svg>
                  Android
                </a>
              </div>
            </div>
            <div className="footer-link-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", padding: "2.5rem 4rem 3.5rem" }}>
              <div>
                <span style={LABEL_STYLE}>{f.col_product}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {f.links_product.map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
                </div>
              </div>
              <div>
                <span style={LABEL_STYLE}>{f.col_community}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {f.links_community.map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
                </div>
              </div>
              <div>
                <span style={LABEL_STYLE}>{f.col_legal}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {f.links_legal.map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
                </div>
              </div>
              <div>
                <span style={LABEL_STYLE}>{f.col_resources}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {f.links_resources.map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
                </div>
              </div>
            </div>
            <div className="footer-btm-bar" style={{ borderTop: "1px solid #f0f0f0", padding: "1.25rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
              <span style={{ fontSize: "0.8rem", color: "#bbb" }}>{f.copyright}</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#d0d0d0", letterSpacing: "0.05em" }}>#gowithattax</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

