"use client";
import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

const SECTION: React.CSSProperties = { marginBottom: "3rem" };
const H2: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 1rem", letterSpacing: "-0.02em" };
const P: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem" };

function ContentEn() {
  return (
    <>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Legal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Cookie Policy</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: October 8, 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. In Short</h2>
          <p style={P}>The attax.app website uses no advertising cookies, no analytics and no third-party tracking. It only stores what it needs to work: your language and your choice about this notice.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. What We Store on Your Device</h2>
          <p style={P}><strong>attax-lang</strong> (local storage) — your language preference (English or French). Essential.</p>
          <p style={P}><strong>attax_cookie_consent</strong> (local storage) — remembers that you have seen this notice. Essential.</p>
          <p style={P}><strong>attax_preview_unlocked</strong> (cookie, 1 year) — remembers access to the full website while it is in preview. Essential.</p>
          <p style={P}>None of these contain personal data, and none are shared with anyone.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. The Attax App</h2>
          <p style={P}>This policy covers the website only. How the Attax mobile app handles your data is explained in our <Link href="/privacy" style={{ color: "#0d0d0d", fontWeight: 600 }}>Privacy Policy</Link>.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Your Choices</h2>
          <p style={P}>You can delete this data at any time from your browser settings (cookies and site data). The website will simply ask for your language again.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Contact</h2>
          <p style={P}>For questions about this policy, contact <a href="mailto:contact@attax.app" style={{ color: "#0d0d0d", fontWeight: 600 }}>contact@attax.app</a>.</p>
        </div>

    </>
  );
}

function ContentFr() {
  return (
    <>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Légal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Politique cookies</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Dernière mise à jour : 8 octobre 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. En bref</h2>
          <p style={P}>Le site attax.app n'utilise aucun cookie publicitaire, aucun outil de statistiques et aucun pistage tiers. Il ne retient que ce dont il a besoin pour fonctionner : ta langue et ton choix concernant ce message.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Ce que nous enregistrons sur ton appareil</h2>
          <p style={P}><strong>attax-lang</strong> (stockage local) — ta langue (français ou anglais). Indispensable.</p>
          <p style={P}><strong>attax_cookie_consent</strong> (stockage local) — retient que tu as vu ce message. Indispensable.</p>
          <p style={P}><strong>attax_preview_unlocked</strong> (cookie, 1 an) — retient l'accès au site complet pendant sa phase de prévisualisation. Indispensable.</p>
          <p style={P}>Aucune de ces données ne contient d'informations personnelles, et aucune n'est partagée.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. L'application Attax</h2>
          <p style={P}>Cette politique concerne uniquement le site. La façon dont l'application mobile Attax traite tes données est expliquée dans notre <Link href="/privacy" style={{ color: "#0d0d0d", fontWeight: 600 }}>politique de confidentialité</Link>.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Tes choix</h2>
          <p style={P}>Tu peux supprimer ces données à tout moment dans les réglages de ton navigateur (cookies et données de site). Le site te redemandera simplement ta langue.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Contact</h2>
          <p style={P}>Pour toute question sur cette politique, écris à <a href="mailto:contact@attax.app" style={{ color: "#0d0d0d", fontWeight: 600 }}>contact@attax.app</a>.</p>
        </div>
    </>
  );
}

export default function CookiePolicyPage() {
  const { lang } = useLang();
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#0d0d0d", padding: "0 12px" }}>
        <PageNavbar />
      </div>
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        {lang === "fr" ? <ContentFr /> : <ContentEn />}

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "2rem", display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</Link>
          <Link href="/terms" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Conditions d'utilisation" : "Terms of Service"}</Link>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Retour à Attax" : "Back to Attax"}</Link>
        </div>
      </div>
    </div>
  );
}
