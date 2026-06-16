"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/adventure", label: "The Adventure" },
  { href: "/contact", label: "Contact" },
];

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function ScrollNav() {
  const [p, setP] = useState(0); // 0 = top, 1 = fully scrolled

  useEffect(() => {
    const onScroll = () => {
      // 0→1 over the first 200px of scroll
      setP(clamp(window.scrollY / 200, 0, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ease the progress for a more spring-like feel
  const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

  const height     = lerp(68, 50, e);
  const padX       = lerp(0, 24, e);       // outer horizontal padding (shrinks pill from sides)
  const padTop     = lerp(0, 12, e);       // outer top padding (lifts pill away from edge)
  const bgAlpha    = lerp(0, 0.86, e);
  const borderAlpha= lerp(0, 0.09, e);
  const radius     = lerp(0, 999, e);
  const blur       = lerp(0, 28, e);
  const shadowAlpha= lerp(0, 0.45, e);
  const innerPadX  = lerp(36, 20, e);

  return (
    <div
      aria-hidden={p < 0.05}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: `${padTop}px ${padX}px 0`,
        pointerEvents: p > 0.05 ? "auto" : "none",
        // No CSS transition — scroll drives the values directly
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: `${height}px`,
        padding: `0 ${innerPadX}px`,
        backgroundColor: `rgba(8,8,8,${bgAlpha})`,
        backdropFilter: blur > 1 ? `blur(${blur}px) saturate(180%)` : "none",
        WebkitBackdropFilter: blur > 1 ? `blur(${blur}px) saturate(180%)` : "none",
        borderRadius: `${radius}px`,
        border: `1px solid rgba(255,255,255,${borderAlpha})`,
        boxShadow: shadowAlpha > 0.05
          ? `0 4px ${lerp(0, 40, e)}px rgba(0,0,0,${shadowAlpha}), inset 0 1px 0 rgba(255,255,255,${lerp(0, 0.04, e)})`
          : "none",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Left links */}
        <nav style={{ display: "flex", gap: `${lerp(28, 20, e)}px`, alignItems: "center", flex: 1 }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: `rgba(255,255,255,${lerp(0, 0.65, e)})`,
              textDecoration: "none",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
            }}>{l.label}</Link>
          ))}
        </nav>

        {/* Logo — centered absolute */}
        <Link href="/" style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
          fontSize: `${lerp(0, 1.125, e)}rem`,
          fontWeight: 800,
          color: `rgba(255,255,255,${lerp(0, 1, e)})`,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}>attax</Link>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, justifyContent: "flex-end" }}>
          <a href="#" style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: `rgba(255,255,255,${lerp(0, 0.5, e)})`,
            textDecoration: "none",
            padding: "0 10px",
            whiteSpace: "nowrap",
          }}>Log in</a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              backgroundColor: `rgba(255,255,255,${lerp(0, 1, e)})`,
              color: `rgba(13,13,13,${lerp(0, 1, e)})`,
              fontWeight: 700,
              fontSize: "0.8125rem",
              padding: "8px 16px",
              borderRadius: "999px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" style={{ opacity: e }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}
