"use client";

import Link from "next/link";
import Image from "next/image";
import LangSwitcher from "@/components/LangSwitcher";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function PageNavbar() {
  return (
    <div style={{
      position: "relative", zIndex: 10,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2.5rem", height: "68px", flexShrink: 0,
    }}>
      <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", flex: 1 }}>
        {NAV_LINKS.map(l => (
          <Link key={l.href} href={l.href} className="nav-link" style={{
            fontSize: "0.875rem", fontWeight: 500,
            color: "rgba(255,255,255,0.65)", textDecoration: "none",
          }}>{l.label}</Link>
        ))}
      </nav>

      <Link href="/" style={{
        position: "absolute", left: "50%", transform: "translateX(-50%)",
        textDecoration: "none", display: "flex", alignItems: "center",
      }}>
        <Image
          src="/images/logo-attax-wh.svg"
          alt="Attax"
          width={140}
          height={52}
          style={{ display: "block" }}
          priority
        />
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flex: 1, justifyContent: "flex-end" }}>
        <LangSwitcher />
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-white" style={{
          display: "inline-flex", alignItems: "center",
          backgroundColor: "#ffffff", color: "#0d0d0d",
          fontWeight: 700, fontSize: "0.8125rem",
          padding: "8px 18px", borderRadius: "999px", textDecoration: "none",
        }}>Download</a>
      </div>
    </div>
  );
}
