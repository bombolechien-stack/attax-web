"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const rev = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "none" : "translateY(16px)",
  transition: `opacity 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
});

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [email2, setEmail2] = useState("");
  const [submitted2, setSubmitted2] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const s2 = useReveal(0.3);
  const s3 = useReveal(0.2);
  const s4 = useReveal(0.2);

  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(t); }, []);

  const submit = (e: React.FormEvent, which: 1 | 2) => {
    e.preventDefault();
    which === 1 ? setSubmitted(true) : setSubmitted2(true);
  };

  return (
    <div style={{ backgroundColor: "#070707", minHeight: "100vh", fontFamily: "var(--font-jakarta), -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <div style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <video autoPlay muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "110%", objectFit: "cover", objectPosition: "center 30%", zIndex: 0, top: "-5%" }}>
          <source src="/videos/boxingonring.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(7,7,7,0.45) 0%, rgba(7,7,7,0.1) 25%, rgba(7,7,7,0.65) 70%, rgba(7,7,7,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(7,7,7,0.55) 0%, transparent 65%)" }} />

        {/* Nav */}
        <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 3rem", height: "72px", flexShrink: 0 }}>
          <div style={{ width: "120px" }} />
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/images/logo-attax-wh.svg" alt="Attax" width={96} height={36} priority style={{ display: "block" }} />
          </a>
          <div style={{ width: "120px", display: "flex", justifyContent: "flex-end" }}>
            <a href="#early-access" style={{ fontSize: "0.8125rem", fontWeight: 700, color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "8px 18px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.16)", backgroundColor: "rgba(255,255,255,0.06)" }}>
              Early Access
            </a>
          </div>
        </nav>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 5, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 3rem 3rem" }}>
          <div style={{ maxWidth: "660px" }}>
            <p style={{ ...rev(heroVisible, 0), fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", margin: "0 0 2.25rem" }}>
              Coming soon
            </p>
            <h1 style={{ ...rev(heroVisible, 0.18), fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.0, letterSpacing: "-0.04em", margin: "0 0 2rem" }}>
              Every workout<br />will soon have<br />consequences.
            </h1>
            <p style={{ ...rev(heroVisible, 0.34), fontSize: "1rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.8, margin: "0 0 2.75rem", maxWidth: "360px" }}>
              A new competitive experience is coming.<br />Train in real life. Compete somewhere else.
            </p>
            <div style={{ ...rev(heroVisible, 0.48) }}>
              {!submitted ? (
                <form onSubmit={(e) => submit(e, 1)} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" style={{ flex: 1, minWidth: "180px", padding: "13px 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.05)", color: "#fff", fontSize: "0.9375rem", fontFamily: "inherit", outline: "none" }} />
                  <button type="submit" style={{ padding: "13px 26px", borderRadius: "999px", border: "none", backgroundColor: "#fff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap" }}>
                    Get Early Access
                  </button>
                </form>
              ) : (
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: 0 }}>You&apos;re in. We&apos;ll be in touch.</p>
              )}
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", margin: "0.875rem 0 0" }}>
                Be among the first players invited.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: breathing ── */}
      <section style={{ padding: "11rem 2rem", textAlign: "center" }}>
        <div ref={s2.ref} style={{ maxWidth: "520px", margin: "0 auto" }}>
          <p style={{ ...rev(s2.visible, 0), fontSize: "1.25rem", fontWeight: 500, color: "rgba(255,255,255,0.28)", lineHeight: 1.8, margin: 0 }}>
            Most fitness apps track activity.
          </p>
          <p style={{ ...rev(s2.visible, 0.22), fontSize: "1.25rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0.2rem 0 0" }}>
            We&apos;re building something different.
          </p>
        </div>
      </section>

      {/* ── Section 3: statement ── */}
      <section ref={s3.ref} style={{ padding: "10rem 3rem", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ ...rev(s3.visible, 0), fontSize: "clamp(2.75rem, 6vw, 6.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.05em", lineHeight: 0.9, margin: "0 0 5rem" }}>
            Not another<br />fitness app.
          </h2>
          <div>
            {[
              ["No streaks.", 0.1],
              ["No badges.", 0.22],
              ["No pointless statistics.", 0.36],
            ].map(([text, d]) => (
              <div key={String(text)} style={{ ...rev(s3.visible, Number(d)), padding: "1.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "rgba(255,255,255,0.16)", letterSpacing: "-0.03em" }}>{text}</span>
              </div>
            ))}
            <p style={{ ...rev(s3.visible, 0.52), margin: "3rem 0 0", fontSize: "0.9375rem", color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>
              Something else is coming.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: second CTA ── */}
      <section id="early-access" ref={s4.ref} style={{ padding: "12rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <p style={{ ...rev(s4.visible, 0), fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", margin: "0 0 2rem" }}>
            Launching soon
          </p>
          <h2 style={{ ...rev(s4.visible, 0.14), fontSize: "clamp(2rem, 4.5vw, 3.75rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 1.5rem" }}>
            Join the first wave.
          </h2>
          <p style={{ ...rev(s4.visible, 0.25), fontSize: "0.9375rem", color: "rgba(255,255,255,0.32)", lineHeight: 1.8, margin: "0 0 2.75rem" }}>
            The first wave of invitations will be sent<br />to early subscribers only.
          </p>
          <div style={{ ...rev(s4.visible, 0.36) }}>
            {!submitted2 ? (
              <form onSubmit={(e) => submit(e, 2)} style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                <input type="email" required value={email2} onChange={(e) => setEmail2(e.target.value)} placeholder="your@email.com" style={{ flex: 1, minWidth: "180px", maxWidth: "260px", padding: "14px 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.05)", color: "#fff", fontSize: "0.9375rem", fontFamily: "inherit", outline: "none" }} />
                <button type="submit" style={{ padding: "14px 28px", borderRadius: "999px", border: "none", backgroundColor: "#fff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap" }}>
                  Join the first wave
                </button>
              </form>
            ) : (
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", fontStyle: "italic", margin: 0 }}>You&apos;re in. We&apos;ll be in touch.</p>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer minimal ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2.5rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
        <Image src="/images/logo-attax-wh.svg" alt="Attax" width={72} height={27} style={{ display: "block", opacity: 0.45 }} />
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {[
            { label: "Instagram", href: "https://instagram.com/gowithattax", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
            { label: "TikTok", href: "https://tiktok.com/@gowithattax", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg> },
            { label: "Discord", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057.102 18.08.114 18.1.132 18.11a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg> },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
              {s.icon}
            </a>
          ))}
          <a href="mailto:hello@attax.app" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.16)" }}>© 2025 Attax</span>
      </footer>
    </div>
  );
}
