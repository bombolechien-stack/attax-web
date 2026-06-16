"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement banner */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          color: "#1a1a1a",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "0.875rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <span>🎉 Attax is now in beta — Download for free</span>
        <span style={{ color: "#FC5F2B", fontWeight: 600, cursor: "pointer" }}>
          Learn more &rsaquo;
        </span>
      </div>

      {/* Main navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: "#0d0d0d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          height: "64px",
        }}
      >
        {/* Left links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", flex: 1 }}>
          {[
            { href: "/discover", label: "Discover" },
            { href: "/adventure", label: "The Adventure" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Logo centered */}
        <Link
          href="/"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.375rem",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            attax
          </span>
        </Link>

        {/* Right actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              whiteSpace: "nowrap",
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
              backgroundColor: "#ffffff",
              color: "#0d0d0d",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "8px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              letterSpacing: "-0.01em",
            }}
          >
            Download App
          </a>
          {/* 9-dot grid icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 6px)",
              gap: "3px",
            }}
            aria-label="Menu"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}
              />
            ))}
          </button>
        </div>
      </nav>
    </>
  );
}
