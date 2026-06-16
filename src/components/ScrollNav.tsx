"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const lerp  = (a: number, b: number, t: number)    => a + (b - a) * t;
// ease-in-out quad
const ease  = (t: number) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;

export default function ScrollNav() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const pillRef  = useRef<HTMLDivElement>(null);
  const logoRef  = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const btnRef   = useRef<HTMLAnchorElement>(null);
  const loginRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const update = () => {
      const raw = clamp(window.scrollY / 220, 0, 1);
      const t   = ease(raw);

      const wrap = wrapRef.current;
      const pill = pillRef.current;
      if (!wrap || !pill) return;

      // outer wrapper — padding shrinks the pill from both sides
      wrap.style.paddingLeft   = `${lerp(0, 20, t)}px`;
      wrap.style.paddingRight  = `${lerp(0, 20, t)}px`;
      wrap.style.paddingTop    = `${lerp(0, 14, t)}px`;
      wrap.style.pointerEvents = raw > 0.05 ? "auto" : "none";

      // pill shape
      pill.style.height       = `${lerp(68, 50, t)}px`;
      pill.style.borderRadius = `${lerp(0, 999, t)}px`;
      pill.style.paddingLeft  = `${lerp(36, 18, t)}px`;
      pill.style.paddingRight = `${lerp(36, 18, t)}px`;
      pill.style.backgroundColor
        = `rgba(8,8,8,${lerp(0, 0.87, t)})`;
      pill.style.backdropFilter
        = `blur(${lerp(0, 28, t)}px) saturate(${lerp(100, 180, t)}%)`;
      (pill.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter
        = pill.style.backdropFilter;
      pill.style.borderColor  = `rgba(255,255,255,${lerp(0, 0.08, t)})`;
      pill.style.boxShadow    = t > 0.1
        ? `0 ${lerp(0,6,t)}px ${lerp(0,40,t)}px rgba(0,0,0,${lerp(0,0.45,t)})`
        : "none";

      // logo fade-in
      if (logoRef.current) {
        logoRef.current.style.opacity = String(lerp(0, 1, t));
        logoRef.current.style.fontSize = `${lerp(0.6, 1.125, t)}rem`;
      }

      // links fade-in
      if (linksRef.current) {
        linksRef.current.style.opacity = String(lerp(0, 1, t));
      }

      // login
      if (loginRef.current) {
        loginRef.current.style.opacity = String(lerp(0, 1, t));
      }

      // download button
      if (btnRef.current) {
        btnRef.current.style.opacity = String(lerp(0, 1, t));
        btnRef.current.style.transform = `scale(${lerp(0.8, 1, t)})`;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update(); // run once on mount
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        // no CSS transition — scroll drives everything
      }}
    >
      <div
        ref={pillRef}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
          paddingLeft: "36px",
          paddingRight: "36px",
          backgroundColor: "rgba(8,8,8,0)",
          borderRadius: "0px",
          border: "1px solid rgba(255,255,255,0)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left nav links */}
        <div ref={linksRef} style={{ display: "flex", gap: "24px", alignItems: "center", flex: 1, opacity: 0 }}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Centered logo */}
        <Link
          ref={logoRef}
          href="/"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            textDecoration: "none",
            fontSize: "0.6rem",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            opacity: 0,
          }}
        >
          attax
        </Link>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1, justifyContent: "flex-end" }}>
          <a
            ref={loginRef}
            href="#"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              padding: "0 12px",
              whiteSpace: "nowrap",
              opacity: 0,
            }}
          >
            Log in
          </a>
          <a
            ref={btnRef}
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              backgroundColor: "#ffffff",
              color: "#0d0d0d",
              fontWeight: 700,
              fontSize: "0.8125rem",
              padding: "9px 16px",
              borderRadius: "999px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              opacity: 0,
              transformOrigin: "right center",
            }}
          >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}
