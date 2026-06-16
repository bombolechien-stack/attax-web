"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const leftLinks = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement banner */}
      <div
        style={{
          backgroundColor: "#FC5F2B",
          color: "#fff",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
        }}
      >
        🎉 Attax is now in beta — Download for free on iOS and Android
      </div>

      {/* Navbar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: scrolled ? "1rem 4.5rem" : "1.25rem 2rem",
          transition: "padding 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Logo — absolutely centered */}
        <Link
          href="/"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: scrolled
              ? "translate(-50%, -50%) scale(0.85)"
              : "translate(-50%, -50%)",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 1,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            ATTAX
          </span>
        </Link>

        {/* Inner pill — morphs on scroll */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: scrolled ? "56rem" : "100%",
            backgroundColor: scrolled ? "rgba(0,0,0,0.6)" : "transparent",
            backdropFilter: scrolled ? "blur(24px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
            borderRadius: scrolled ? "999px" : "0",
            padding: scrolled ? "6px 6px 6px 24px" : "0",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Left links */}
          <nav
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {leftLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#ffffff",
                  textDecoration: "none",
                  opacity: 0.85,
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#ffffff",
                textDecoration: "none",
                opacity: 0.85,
              }}
            >
              Log in
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#FC5F2B",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: scrolled ? "8px 16px" : "10px 20px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                whiteSpace: "nowrap",
              }}
            >
              Download App
            </a>
          </div>
        </div>
      </header>

      {/* Spacer for banner height (only when not scrolled) */}
      <div style={{ height: "36px" }} />
    </>
  );
}
