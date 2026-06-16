import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "4rem 2rem 3rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1rem", textDecoration: "none" }}>
              <Image src="/images/logo-attax-wh.svg" alt="Attax" width={80} height={30} />
            </Link>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, maxWidth: "240px", margin: "0 0 1.5rem" }}>
              The competitive fitness game where your real activity becomes combat power.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", padding: "5px 12px" }}>App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", padding: "5px 12px" }}>Google Play</a>
            </div>
          </div>
          {/* Product */}
          <div>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Product</div>
            {["How It Works", "Features", "FAQ"].map(l => (
              <div key={l} style={{ marginBottom: "0.75rem" }}>
                <Link href={"/#" + l.toLowerCase().replace(/ /g, "-")} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</Link>
              </div>
            ))}
          </div>
          {/* Legal */}
          <div>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Legal</div>
            {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Contact", href: "/contact" }].map(l => (
              <div key={l.label} style={{ marginBottom: "0.75rem" }}>
                <Link href={l.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l.label}</Link>
              </div>
            ))}
          </div>
          {/* Social */}
          <div>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Follow</div>
            {[{ label: "Discord", href: "#" }, { label: "TikTok", href: "#" }, { label: "Instagram", href: "#" }].map(l => (
              <div key={l.label} style={{ marginBottom: "0.75rem" }}>
                <a href={l.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l.label}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.2)" }}>© 2025 Attax. All rights reserved.</span>
          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.2)" }}>The first fighting game powered by real fitness.</span>
        </div>
      </div>
    </footer>
  );
}
