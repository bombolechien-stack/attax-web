import Link from "next/link";
import Image from "next/image";

const LINK_STYLE = {
  fontSize: "0.875rem",
  color: "#555",
  textDecoration: "none",
  lineHeight: 1,
};

const LABEL_STYLE = {
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "#aaa",
  marginBottom: "1.25rem",
  display: "block",
};

export default function Footer() {
  return (
    <footer>
      {/* ── Photo CTA ─────────────────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", padding: "0 12px" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/sport-running-group.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%", filter: "grayscale(25%) contrast(1.1) brightness(0.58)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,7,7,0.65) 0%, rgba(7,7,7,0.38) 60%, rgba(7,7,7,0) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, padding: "9rem 2rem 7rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 1.25rem" }}>
            Download
          </p>
          <h2 style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.05em", lineHeight: 0.95, margin: "0 0 1.5rem" }}>
            Ready to enter<br />the arena?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, margin: "0 auto 2.75rem", maxWidth: "340px" }}>
            Join the league. Every workout counts.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#fff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
            }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.82)", fontWeight: 600, fontSize: "0.9375rem",
              padding: "13px 26px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.16)",
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
              Google Play
            </a>
          </div>
        </div>

        {/* ── Footer card ───────────────────────────────────────── */}
        <div style={{
          position: "relative", zIndex: 2,
          backgroundColor: "#ffffff",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
        }}>
          {/* ATTAX watermark — the visual anchor */}
          <div style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(6rem, 16vw, 18rem)",
            fontWeight: 900,
            color: "#f0f0f0",
            letterSpacing: "-0.06em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            fontFamily: "var(--font-jakarta), sans-serif",
            zIndex: 0,
          }}>
            ATTAX
          </div>

          {/* Content — above the watermark */}
          <div style={{ position: "relative", zIndex: 1 }}>

            {/* Top row: logo + store buttons */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3rem 4rem 2.5rem",
              borderBottom: "1px solid #f0f0f0",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}>
              <Image
                src="/images/logo-attax-wh.svg"
                alt="Attax"
                width={88}
                height={33}
                style={{ display: "block", filter: "brightness(0)" }}
              />
              <div style={{ display: "flex", gap: "8px" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.8125rem",
                  padding: "9px 18px", borderRadius: "999px", textDecoration: "none",
                }}>
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  iOS
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  backgroundColor: "#f2f2f2", color: "#333", fontWeight: 600, fontSize: "0.8125rem",
                  padding: "9px 18px", borderRadius: "999px", textDecoration: "none",
                  border: "1px solid #e4e4e4",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z"/></svg>
                  Android
                </a>
              </div>
            </div>

            {/* 3 link columns */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              padding: "2.5rem 4rem 8rem",
            }}>
              <div>
                <span style={LABEL_STYLE}>Product</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { label: "How It Works", href: "/#how-it-works" },
                    { label: "Features", href: "/#features" },
                    { label: "Daily Battle", href: "/#daily-match" },
                    { label: "FAQ", href: "/#faq" },
                    { label: "Discover", href: "/discover" },
                  ].map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
                </div>
              </div>
              <div>
                <span style={LABEL_STYLE}>Community</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { label: "Discord", href: "#" },
                    { label: "TikTok", href: "#" },
                    { label: "Instagram", href: "#" },
                    { label: "Contact", href: "/contact" },
                    { label: "The Adventure", href: "/adventure" },
                  ].map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
                </div>
              </div>
              <div>
                <span style={LABEL_STYLE}>Legal</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" },
                  ].map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{
              borderTop: "1px solid #f0f0f0",
              padding: "1.25rem 4rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}>
              <span style={{ fontSize: "0.8rem", color: "#ccc" }}>© 2025 Attax. All rights reserved.</span>
              <span style={{ fontSize: "0.8rem", color: "#ddd" }}>Built for athletes.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
