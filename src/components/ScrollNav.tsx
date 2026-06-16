"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function ScrollNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10000,
      padding: "0.75rem 1.5rem",
      pointerEvents: visible ? "auto" : "none",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(-8px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    }}>
      <div style={{
        maxWidth: "960px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "52px",
        padding: "0 1.5rem",
        backgroundColor: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
      }}>
        <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" style={{
              fontSize: "0.875rem", fontWeight: 500,
              color: "rgba(255,255,255,0.7)", textDecoration: "none",
            }}>{l.label}</Link>
          ))}
        </nav>
        <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none" }}>
          <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>attax</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, justifyContent: "flex-end" }}>
          <a href="#" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Log in</a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center",
            backgroundColor: "#ffffff", color: "#0d0d0d",
            fontWeight: 700, fontSize: "0.8125rem",
            padding: "8px 18px", borderRadius: "999px",
            textDecoration: "none",
          }}>Download App</a>
        </div>
      </div>
    </header>
  );
}
