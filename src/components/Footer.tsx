"use client";

import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    title: "Attax",
    links: [
      { label: "How it works", href: "/discover" },
      { label: "The Adventure", href: "/adventure" },
      { label: "Rankings", href: "/ranking" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/adventure" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Legal Notices", href: "/legal" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/attax.app" },
      { label: "TikTok", href: "https://tiktok.com/@attax.app" },
      { label: "X / Twitter", href: "https://x.com/attax_app" },
      { label: "YouTube", href: "https://youtube.com/@attax" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f7f7f7", borderTop: "1px solid #ebebeb" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "5rem 3rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: "4rem", paddingBottom: "4rem" }}>

          {/* Left column */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", marginBottom: "0.75rem" }}>attax</div>
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.65, maxWidth: "300px", marginBottom: "2rem" }}>
              Not sure where to start?{" "}
              <Link href="/discover" style={{ color: "#0d0d0d", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Discover attax
              </Link>{" "}
              — the fitness app where every workout fuels your rank.
            </p>

            {/* App Store button */}
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#0d0d0d", color: "#fff",
              padding: "10px 20px", borderRadius: "10px",
              textDecoration: "none", marginBottom: "2rem",
            }}>
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.06em", opacity: 0.7, lineHeight: 1 }}>DOWNLOAD ON THE</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, lineHeight: 1.2 }}>App Store</div>
              </div>
            </a>

            <div>
              <p style={{ fontSize: "0.8125rem", color: "#999", marginBottom: "0.5rem" }}>Also available on</p>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0d0d0d", textDecoration: "underline", textUnderlineOffset: "3px" }}>Google Play →</a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#aaa", margin: "0 0 1.25rem",
              }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} style={{ fontSize: "0.9375rem", color: "#444", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#0d0d0d")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#444")}
                    >{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #e8e8e8", padding: "1.5rem 0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "#aaa", margin: 0 }}>
            © 2025 Attax. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[{ label: "Terms", href: "/terms" }, { label: "Privacy policy", href: "/privacy" }, { label: "Legal", href: "/legal" }].map(l => (
              <Link key={l.label} href={l.href} style={{ fontSize: "0.8125rem", color: "#aaa", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#444")}
                onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
