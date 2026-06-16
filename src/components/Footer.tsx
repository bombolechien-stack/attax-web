"use client";

import Link from "next/link";

const cols = [
  {
    title: "Attax",
    links: [
      { label: "Home", href: "/" },
      { label: "Discover", href: "/discover" },
      { label: "The Adventure", href: "/adventure" },
      { label: "Rankings", href: "/ranking" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Legal Notices", href: "/legal" },
    ],
  },
  {
    title: "Follow us",
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
    <footer style={{ backgroundColor: "#111111", color: "#ffffff" }}>
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              ATTAX
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: "260px",
                margin: "0 0 1.5rem",
              }}
            >
              The competitive fitness app where every workout fuels your rank. Move, progress, compete.
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#FC5F2B",
                fontWeight: 600,
              }}
            >
              #gowithattax
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  margin: "0 0 1.25rem",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © {new Date().getFullYear()} Attax. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            Made with 🧡 for athletes everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
