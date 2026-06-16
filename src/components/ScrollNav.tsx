"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function ScrollNav() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const items = inner.querySelectorAll<HTMLElement>("[data-nav]");

    const update = () => {
      const raw = Math.min(window.scrollY / 220, 1);
      // ease-in-out
      const t = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      outer.style.paddingTop    = `${t * 14}px`;
      outer.style.paddingLeft   = `${t * 20}px`;
      outer.style.paddingRight  = `${t * 20}px`;
      outer.style.pointerEvents = raw > 0.05 ? "auto" : "none";

      inner.style.height          = `${68 - t * 18}px`;
      inner.style.borderRadius    = `${t * 999}px`;
      inner.style.paddingLeft     = `${36 - t * 16}px`;
      inner.style.paddingRight    = `${36 - t * 16}px`;
      inner.style.backgroundColor = `rgba(8,8,8,${t * 0.87})`;
      inner.style.borderColor     = `rgba(255,255,255,${t * 0.09})`;
      inner.style.boxShadow       = `0 ${t * 6}px ${t * 40}px rgba(0,0,0,${t * 0.45})`;

      const bf = `blur(${t * 28}px) saturate(${100 + t * 80}%)`;
      inner.style.backdropFilter = bf;
      (inner.style as any).webkitBackdropFilter = bf;

      items.forEach((el) => {
        el.style.opacity = String(t);
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        ref={innerRef}
        style={{
          display: "flex",
          alignItems: "center",
          height: "68px",
          paddingLeft: "36px",
          paddingRight: "36px",
          backgroundColor: "rgba(8,8,8,0)",
          border: "1px solid rgba(255,255,255,0)",
          borderRadius: "0px",
          position: "relative",
        }}
      >
        {/* Left links */}
        <div style={{ display: "flex", gap: "24px", flex: 1 }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-nav
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                opacity: 0,
                whiteSpace: "nowrap",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          data-nav
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "1.125rem",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.04em",
            textDecoration: "none",
            opacity: 0,
            whiteSpace: "nowrap",
          }}
        >
          attax
        </Link>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, justifyContent: "flex-end" }}>
          <a
            href="#"
            data-nav
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              padding: "0 10px",
              opacity: 0,
              whiteSpace: "nowrap",
            }}
          >
            Log in
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            data-nav
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              backgroundColor: "#fff",
              color: "#0d0d0d",
              fontWeight: 700,
              fontSize: "0.8125rem",
              padding: "9px 16px",
              borderRadius: "999px",
              textDecoration: "none",
              opacity: 0,
              whiteSpace: "nowrap",
            }}
          >
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}
