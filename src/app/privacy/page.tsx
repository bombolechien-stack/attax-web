import Link from "next/link";

const SECTION: React.CSSProperties = { marginBottom: "3rem" };
const H2: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 1rem", letterSpacing: "-0.02em" };
const P: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem" };

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "8rem 2rem 6rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Legal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Privacy Policy</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: June 2025</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Introduction</h2>
          <p style={P}>Attax ("we", "our", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Attax application and website (attax.app).</p>
          <p style={P}>By using Attax, you agree to the practices described in this policy.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Data We Collect</h2>
          <p style={P}><strong>Account data:</strong> Email address, username, and profile information provided during registration.</p>
          <p style={P}><strong>Activity data:</strong> Physical activity data synchronized through Apple Health or Health Connect, including steps, distance, active energy, and workout sessions. This data is used exclusively to power your competitive performance in the app.</p>
          <p style={P}><strong>Usage data:</strong> Information about how you interact with the app, including features used, screens viewed, and session duration.</p>
          <p style={P}><strong>Device data:</strong> Device type, operating system version, and app version for compatibility and debugging purposes.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. How We Use Your Data</h2>
          <p style={P}>We use your data to: provide and improve the Attax competitive experience; calculate your performance in daily battles and league rankings; send notifications about your matches and results; provide customer support; and analyze usage patterns to improve the product.</p>
          <p style={P}>We do not sell your personal data to third parties.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Health Data</h2>
          <p style={P}>Activity data from Apple Health and Health Connect is used exclusively to calculate your competitive performance within Attax. This data is never sold, shared with advertisers, or used for any purpose other than powering your in-app experience.</p>
          <p style={P}>You can revoke health data access at any time through your device settings.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Data Sharing</h2>
          <p style={P}>We may share your data with: infrastructure providers (Supabase for database hosting); analytics services (PostHog for product analytics); and notification services (Firebase for push notifications). All third-party providers are bound by data processing agreements.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Data Retention</h2>
          <p style={P}>We retain your account data for as long as your account is active. You can request deletion of your account and associated data at any time by contacting us at privacy@attax.app.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Your Rights</h2>
          <p style={P}>Under applicable data protection law, you have the right to access, correct, delete, or export your personal data. To exercise these rights, contact us at privacy@attax.app.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>8. Security</h2>
          <p style={P}>We use industry-standard security measures to protect your data, including encryption in transit and at rest, row-level security on our database, and regular security reviews.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>9. Contact</h2>
          <p style={P}>For privacy-related questions, contact us at <a href="mailto:privacy@attax.app" style={{ color: "#0d0d0d", fontWeight: 600 }}>privacy@attax.app</a>.</p>
        </div>

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "2rem", display: "flex", gap: "1.5rem" }}>
          <Link href="/terms" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Terms of Service</Link>
          <Link href="/cookie-policy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Cookie Policy</Link>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Back to Attax</Link>
        </div>
      </div>
    </div>
  );
}
