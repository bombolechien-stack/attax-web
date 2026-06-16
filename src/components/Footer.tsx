import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d0d" }}>
      {/* Top — ATTAX géant */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "6rem 2rem 5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: "clamp(4rem, 12vw, 12rem)",
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.07em",
          lineHeight: 0.85,
          marginBottom: "1.5rem",
          fontFamily: "var(--font-jakarta), sans-serif",
        }}>
          ATTAX
        </div>
        <p style={{
          fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
          color: "rgba(255,255,255,0.28)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          margin: "0 0 3rem",
        }}>
          Train. Fight. Dominate.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.875rem",
            padding: "12px 24px", borderRadius: "999px", textDecoration: "none",
          }}>
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "0.875rem",
            padding: "12px 24px", borderRadius: "999px", textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
            Google Play
          </a>
        </div>
      </div>

      {/* Bottom — links */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 2rem",
        maxWidth: "80rem",
        margin: "0 auto",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.18)" }}>© 2025 Attax. All rights reserved.</span>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { label: "How It Works", href: "/#how-it-works" },
            { label: "FAQ", href: "/#faq" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Contact", href: "/contact" },
            { label: "Discord", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "Instagram", href: "#" },
          ].map(l => (
            <Link key={l.label} href={l.href} style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.32)", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
