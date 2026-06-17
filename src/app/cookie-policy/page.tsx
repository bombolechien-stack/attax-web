import Link from "next/link";

const SECTION: React.CSSProperties = { marginBottom: "3rem" };
const H2: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 1rem", letterSpacing: "-0.02em" };
const P: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem" };

export default function CookiePolicyPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "8rem 2rem 6rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Legal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Cookie Policy</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: June 2025</p>

        <div style={SECTION}>
          <h2 style={H2}>1. What Are Cookies</h2>
          <p style={P}>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. How We Use Cookies</h2>
          <p style={P}><strong>Essential cookies:</strong> Required for the website to function. These include session management and language preferences. They cannot be disabled.</p>
          <p style={P}><strong>Analytics cookies:</strong> We use PostHog to understand how visitors use our website. This data is anonymized and used only to improve the product. PostHog stores data on EU servers.</p>
          <p style={P}><strong>No advertising cookies:</strong> We do not use cookies for advertising or tracking across third-party websites.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. Specific Cookies Used</h2>
          <p style={P}><strong>attax-lang</strong> — Stores your language preference (English or French). Expires after 1 year. Essential.</p>
          <p style={P}><strong>ph_*</strong> — PostHog analytics cookies for product usage analysis. No personally identifiable information. Expires after 1 year.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Your Choices</h2>
          <p style={P}>You can control cookies through your browser settings. Disabling cookies may affect the functionality of the website. For analytics opt-out, contact us at privacy@attax.app.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Contact</h2>
          <p style={P}>For questions about our use of cookies, contact <a href="mailto:privacy@attax.app" style={{ color: "#0d0d0d", fontWeight: 600 }}>privacy@attax.app</a>.</p>
        </div>

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "2rem", display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Terms of Service</Link>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Back to Attax</Link>
        </div>
      </div>
    </div>
  );
}
