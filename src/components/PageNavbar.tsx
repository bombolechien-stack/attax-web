"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LangSwitcher from "@/components/LangSwitcher";
import { useT, useLang } from "@/lib/i18n";

const AppleIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);
const GooglePlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/>
  </svg>
);

export default function PageNavbar() {
  const t = useT();
  const { lang } = useLang();
  const nav = t.nav;
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { href: "/", label: nav.home },
    { href: "/discover", label: nav.discover },
    { href: "/adventure", label: nav.adventure },
    { href: "/contact", label: nav.contact },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const closeAndNavigate = () => {
    document.body.style.overflow = "";
    document.documentElement.classList.remove("menu-open");
    setOpen(false);
  };

  return (
    <>
      <div className="nav-page-root" style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2.5rem", height: "68px", flexShrink: 0,
      }}>
        {/* Left: desktop nav links / mobile lang switcher */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <nav className="nav-page-links" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            {NAV_LINKS.filter(l => l.href !== "/").map(l => (
              <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l.label}</Link>
            ))}
          </nav>
          <div className="nav-page-lang-mobile" style={{ display: "none" }}>
            <LangSwitcher />
          </div>
        </div>

        {/* Logo centered */}
        <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image src="/images/logo-attax-wh.svg" alt="Attax" width={88} height={33} style={{ display: "block" }} priority />
        </Link>

        {/* Right: desktop lang + CTAs / mobile burger */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.75rem" }}>
          <div className="nav-page-right" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <LangSwitcher />
            <div className="nav-page-ctas" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.75rem", padding: "7px 14px", borderRadius: "999px", textDecoration: "none", whiteSpace: "nowrap" }}>
                <AppleIcon /> iOS
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", fontWeight: 700, fontSize: "0.75rem", padding: "7px 14px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", whiteSpace: "nowrap" }}>
                <GooglePlayIcon /> Android
              </a>
            </div>
          </div>
          <button
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "6px", flexDirection: "column", gap: "5px" }}
          >
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#ffffff", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#ffffff", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "15px", height: "2px", backgroundColor: "#ffffff", borderRadius: "2px" }} />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 200000,
        backgroundColor: "#0a0a0a",
        display: "flex", flexDirection: "column",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.38s cubic-bezier(0.16,1,0.3,1)",
        pointerEvents: open ? "auto" : "none",
      }}>
        {/* Menu header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", height: "64px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
          <Link href="/" onClick={closeAndNavigate} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-attax-wh.svg" alt="Attax" width={76} height={28} style={{ display: "block" }} />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", padding: "2rem 1.5rem", overflowY: "auto" }}>
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeAndNavigate}
              style={{
                fontSize: "2rem", fontWeight: 800, color: "#ffffff", textDecoration: "none",
                letterSpacing: "-0.04em", lineHeight: 1.15,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div style={{
          padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "0.75rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "14px", borderRadius: "999px", textDecoration: "none" }}>
            <AppleIcon /> {lang === "fr" ? "Télécharger sur iOS" : "Download on iOS"}
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", fontWeight: 700, fontSize: "0.9375rem", padding: "14px", borderRadius: "999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}>
            <GooglePlayIcon /> {lang === "fr" ? "Disponible sur Android" : "Get it on Android"}
          </a>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.5rem" }}>
            <LangSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
