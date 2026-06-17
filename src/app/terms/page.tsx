import Link from "next/link";

const SECTION: React.CSSProperties = { marginBottom: "3rem" };
const H2: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 1rem", letterSpacing: "-0.02em" };
const P: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem" };

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "8rem 2rem 6rem" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Legal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Terms of Service</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: June 2025</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Acceptance of Terms</h2>
          <p style={P}>By downloading, installing, or using the Attax application ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Description of Service</h2>
          <p style={P}>Attax is a competitive fitness application that transforms real-world physical activity into a competitive experience. The App connects to Apple Health (iOS) and Health Connect (Android) to synchronize activity data and calculate competitive performance.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. Eligibility</h2>
          <p style={P}>You must be at least 16 years of age to use Attax. By using the App, you confirm that you meet this age requirement.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. User Accounts</h2>
          <p style={P}>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate information during registration and to keep it up to date.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Acceptable Use</h2>
          <p style={P}>You agree not to: use the App for any unlawful purpose; attempt to manipulate activity data or rankings; create multiple accounts to gain competitive advantage; reverse engineer, decompile, or tamper with the App; or harass other users.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Health Disclaimer</h2>
          <p style={P}>Attax is not a medical device and does not provide medical advice. Consult a healthcare professional before beginning any new fitness program. By using the App, you acknowledge that you participate in physical activity at your own risk.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Intellectual Property</h2>
          <p style={P}>All content, branding, and technology within Attax are the property of Attax and its licensors. You may not reproduce, distribute, or create derivative works without our written permission.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>8. Limitation of Liability</h2>
          <p style={P}>To the maximum extent permitted by law, Attax shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>9. Modifications</h2>
          <p style={P}>We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the updated terms.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>10. Contact</h2>
          <p style={P}>For questions about these terms, contact us at <a href="mailto:contact@attax.app" style={{ color: "#0d0d0d", fontWeight: 600 }}>contact@attax.app</a>.</p>
        </div>

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "2rem", display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Privacy Policy</Link>
          <Link href="/cookie-policy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Cookie Policy</Link>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>Back to Attax</Link>
        </div>
      </div>
    </div>
  );
}
