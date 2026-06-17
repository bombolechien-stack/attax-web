"use client";

import Link from "next/link";
import Image from "next/image";
import LangSwitcher from "@/components/LangSwitcher";
import { useT } from "@/lib/i18n";

const AppleIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);
const GooglePlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/>
  </svg>
);

export default function PageNavbar() {
  const t = useT();
  const nav = t.nav;
  const NAV_LINKS = [
    { href: "/discover", label: nav.discover },
    { href: "/adventure", label: nav.adventure },
    { href: "/contact", label: nav.contact },
  ];

  return (
    <div className="nav-page-root" style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: "68px", flexShrink: 0 }}>
      <nav className="nav-page-links" style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
        {NAV_LINKS.map(l => (
          <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l.label}</Link>
        ))}
      </nav>
      <Link href="/" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none", display: "flex", alignItems: "center" }}>
        <Image src="/images/logo-attax-wh.svg" alt="Attax" width={88} height={33} style={{ display: "block" }} priority />
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1, justifyContent: "flex-end" }}>
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
    </div>
  );
}
