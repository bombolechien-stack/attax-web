"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Banner */}
      <div style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #f0f0f0",
        textAlign: "center",
        padding: "9px 16px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: "#333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        zIndex: 10001,
        position: "relative",
      }}>
        🎉 Attax beta is live — free to download on iOS &amp; Android
        <span style={{ color: "#FC5F2B", fontWeight: 600, cursor: "pointer" }}>Learn more →</span>
      </div>

      {/* Navbar wrapper */}
      <header style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        padding: scrolled ? "0.75rem 1.5rem" : "0",
        transition: "padding 0.35s cubic-bezier(0.16,1,0.3,1)",
        pointerEvents: "none",
        backgroundColor: scrolled ? "transparent" : "#0d0d0d",
      }}>
        <div style={{
          maxWidth: scrolled ? "960px" : "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "52px" : "60px",
          padding: scrolled ? "0 1.5rem" : "0 2rem",
          backgroundColor: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderRadius: scrolled ? "999px" : "0",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: "auto",
        }}>

          {/* Left links */}
          <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="nav-link" style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
              }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Logo centered */}
          <Link href="/" style={{
            position: "absolute",
            left: "50%",
            transform: `translateX(-50%) scale(${scrolled ? 0.9 : 1})`,
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
            textDecoration: "none",
          }}>
            <span style={{
              fontSize: "1.375rem",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}>
              attax
            </span>
          </Link>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, justifyContent: "flex-end" }}>
            <a href="#" style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}>
              Log in
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              color: "#0d0d0d",
              fontWeight: 700,
              fontSize: "0.8125rem",
              padding: "8px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}>
              Download App
            </a>
            {/* 9-dot grid */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: "3px" }}
              aria-label="Menu"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.7)" }} />
              ))}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
