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
    const onScroll = () => setVisible(window.scrollY > 68);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: "16px",
      left: 0,
      right: 0,
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      padding: "0 1.5rem",
      pointerEvents: visible ? "auto" : "none",
    }}>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "900px",
        height: "52px",
        padding: "0 8px 0 20px",
        backgroundColor: "rgba(8,8,8,0.88)",
        backdropFilter: "blur(32px) saturate(200%)",
        WebkitBackdropFilter: "blur(32px) saturate(200%)",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(-12px) scale(0.98)",
        transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        position: "relative",
      }}>
        {/* Left links */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flex: 1 }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >{l.label}</Link>
          ))}
        </div>

        {/* Centered logo */}
        <Link href="/" style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
          letterSpacing: "-0.04em",
          fontSize: "1.125rem",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1,
        }}>attax</Link>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, justifyContent: "flex-end" }}>
          <a href="#" style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            padding: "0 12px",
          }}>Log in</a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "#ffffff",
            color: "#0d0d0d",
            fontWeight: 700,
            fontSize: "0.8125rem",
            padding: "9px 18px",
            borderRadius: "999px",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}>
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download App
          </a>
        </div>
      </nav>
    </div>
  );
}
