"use client";

import Link from "next/link";

const links = [
  { label: "Discover", href: "/discover" },
  { label: "The Adventure", href: "/adventure" },
  { label: "Contact", href: "/contact" },
  { label: "Rankings", href: "/ranking" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Legal", href: "/legal" },
];

const social = [
  { label: "Instagram", href: "https://instagram.com/attax.app" },
  { label: "TikTok", href: "https://tiktok.com/@attax.app" },
  { label: "X", href: "https://x.com/attax_app" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "7rem 3rem 3rem" }}>

        {/* Big wordmark */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{
            fontSize: "clamp(5rem, 15vw, 12rem)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.05em",
            lineHeight: 0.88,
            margin: 0,
          }}>
            attax
          </p>
        </div>

        {/* Tagline + nav row */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "3rem",
          marginBottom: "5rem",
          flexWrap: "wrap",
        }}>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.6, maxWidth: "360px" }}>
            The fitness app where every workout fuels your rank. Move, progress, and stay motivated every day.
          </p>
          <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center", flexWrap: "wrap" }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontSize: "0.9375rem", fontWeight: 500,
                color: "rgba(255,255,255,0.45)", textDecoration: "none",
                transition: "color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >{l.label}</Link>
            ))}
          </nav>
        </div>

        {/* Rule */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "2rem" }} />

        {/* Bottom row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.2)", margin: 0 }}>
            © 2025 Attax. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {legal.map(l => (
              <Link key={l.label} href={l.href} style={{
                fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)",
                textDecoration: "none", transition: "color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >{l.label}</Link>
            ))}
            {social.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)",
                textDecoration: "none", transition: "color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >{s.label}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
