import Link from "next/link";
import Image from "next/image";

const AppleIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.76-2.77L3.18 23.76zm17.16-10.54L17.5 11.5l-2.96 2.68 2.96 2.68 2.87-1.65c.82-.47.82-1.32-.03-1.79zM3.03.24C2.7.44 2.5.83 2.5 1.37v21.26c0 .54.2.93.54 1.13l.14.08L14.4 12 3.17.16.03.24zm11.44 10.4L3.18.24l11.43 10.4z" />
  </svg>
);

const LINK_STYLE = {
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
  lineHeight: 1,
  transition: "color 0.2s",
};

const LABEL_STYLE = {
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.2)",
  marginBottom: "1.25rem",
  display: "block",
};

export default function Footer() {
  return (
    <footer>
      {/* Photo background zone — CTA + card */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        padding: "0 clamp(1rem, 2.5vw, 2.5rem)", /* image shows through on sides below the card */
      }}>

        {/* Full-bleed photo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/photo-runners.jpg"
            alt="Athletes running"
            fill
            style={{ objectFit: "cover", objectPosition: "center 35%", filter: "grayscale(30%) contrast(1.1) brightness(0.7)" }}
          />
          {/* Dark gradient for CTA text legibility */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,7,7,0.55) 0%, rgba(7,7,7,0.4) 50%, rgba(7,7,7,0) 100%)" }} />
        </div>

        {/* CTA — floats over the photo */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "9rem 2rem 7rem",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 1.5rem",
          }}>
            Download
          </p>
          <h2 style={{
            fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            margin: "0 0 1.75rem",
          }}>
            Ready to enter<br />the arena?
          </h2>
          <p style={{
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            margin: "0 auto 3rem",
            maxWidth: "360px",
          }}>
            Join the league. Every workout counts.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "9px",
              backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem",
              padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
            }}>
              <AppleIcon /> App Store
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "9px",
              backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "0.9375rem",
              padding: "14px 28px", borderRadius: "999px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
            }}>
              <GooglePlayIcon /> Google Play
            </a>
          </div>
        </div>

        {/* Footer card — centered, narrower than wrapper → image visible on sides */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: "80rem",
          margin: "0 auto",
          backgroundColor: "#0d0d0d",
          borderRadius: "20px 20px 0 0",
        }}>
          {/* Columns */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: "3rem",
            padding: "4rem 4rem 3rem",
          }}>
            {/* Brand */}
            <div>
              <Image
                src="/images/logo-attax-wh.svg"
                alt="Attax"
                width={76}
                height={28}
                style={{ display: "block", marginBottom: "1.125rem" }}
              />
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.7,
                margin: "0 0 2rem",
                maxWidth: "240px",
              }}>
                The competitive game powered by your real fitness. Move more, fight harder.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.8125rem",
                  padding: "8px 16px", borderRadius: "999px", textDecoration: "none",
                }}>
                  <AppleIcon /> iOS
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.55)", fontWeight: 600, fontSize: "0.8125rem",
                  padding: "8px 16px", borderRadius: "999px", textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <GooglePlayIcon /> Android
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <span style={LABEL_STYLE}>Product</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { label: "How It Works", href: "/#how-it-works" },
                  { label: "Features", href: "/#features" },
                  { label: "Daily Battle", href: "/#daily-match" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Discover", href: "/discover" },
                ].map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
              </div>
            </div>

            {/* Community */}
            <div>
              <span style={LABEL_STYLE}>Community</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { label: "Discord", href: "#" },
                  { label: "TikTok", href: "#" },
                  { label: "Instagram", href: "#" },
                  { label: "Contact", href: "/contact" },
                  { label: "The Adventure", href: "/adventure" },
                ].map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
              </div>
            </div>

            {/* Legal */}
            <div>
              <span style={LABEL_STYLE}>Legal</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map(l => <Link key={l.label} href={l.href} style={LINK_STYLE}>{l.label}</Link>)}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "1.5rem 4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}>
            <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.15)" }}>© 2025 Attax. All rights reserved.</span>
            <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.1)" }}>Built for athletes. Designed for competitors.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
