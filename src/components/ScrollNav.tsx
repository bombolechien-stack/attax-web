"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

export default function ScrollNav() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pillRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const pill  = pillRef.current;
    if (!outer || !pill) return;

    const SCROLL_END = 240;

    const update = () => {
      const raw = Math.min(window.scrollY / SCROLL_END, 1);
      // ease-in-out
      const t = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
      const vw = window.innerWidth;
      const PILL_W = Math.min(880, vw - 32);

      // width: full vw → PILL_W
      pill.style.width        = `${vw - (vw - PILL_W) * t}px`;
      pill.style.marginTop    = `${t * 14}px`;
      pill.style.height       = `${68 - t * 16}px`;
      pill.style.borderRadius = `${t * 999}px`;
      pill.style.paddingLeft  = `${36 - t * 12}px`;
      pill.style.paddingRight = `${36 - t * 12}px`;

      const bg = `rgba(8,8,8,${t * 0.88})`;
      pill.style.backgroundColor = bg;

      const bf = `blur(${t * 28}px) saturate(${100 + t * 80}%)`;
      pill.style.backdropFilter = bf;
      (pill.style as any).webkitBackdropFilter = bf;

      pill.style.borderColor = `rgba(255,255,255,${t * 0.09})`;
      pill.style.boxShadow   = `0 ${t * 6}px ${t * 40}px rgba(0,0,0,${t * 0.4})`;

      // fade contents in
      const alpha = t;
      outer.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
        el.style.opacity = String(alpha);
      });

      outer.style.pointerEvents = raw > 0.05 ? "auto" : "none";
    };

    window.addEventListener("scroll", update, { passive: true });
    update(); // initial state
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        ref={pillRef}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "68px",
          paddingLeft: "36px",
          paddingRight: "36px",
          backgroundColor: "rgba(8,8,8,0)",
          border: "1px solid rgba(255,255,255,0)",
          borderRadius: "0",
          position: "relative",
        }}
      >
        {/* Left links */}
        <div style={{ display: "flex", gap: "24px", flex: 1, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-fade="1"
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

        {/* Centered logo */}
        <Link
          href="/"
          data-fade="1"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            textDecoration: "none",
            opacity: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/logo-attax-wh.svg"
            alt="Attax"
            width={100}
            height={37}
            style={{ display: "block" }}
          />
        </Link>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, justifyContent: "flex-end" }}>
          <a
            href="#"
            data-fade="1"
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
            data-fade="1"
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
