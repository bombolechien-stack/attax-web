"use client";
import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

// Mentions légales (art. 6-III de la loi n° 2004-575 du 21 juin 2004, LCEN).
const SECTION: React.CSSProperties = { marginBottom: "3rem" };
const H2: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 1rem", letterSpacing: "-0.02em" };
const P: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem" };
const LINK: React.CSSProperties = { color: "#0d0d0d", fontWeight: 600 };

function ContentFr() {
  return (
    <>
      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Légal</p>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Mentions légales</h1>
      <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Dernière mise à jour : 20 octobre 2026</p>

      <div style={SECTION}>
        <h2 style={H2}>Éditeur</h2>
        <p style={P}>Le site attax.app et l'application mobile Attax (iOS et Android) sont édités par <strong>ATTAX</strong>, société par actions simplifiée (SAS) au capital de 1 000 €, dont le siège social est situé 61 rue de Lyon, 75012 Paris, France.</p>
        <p style={P}>Immatriculée au Registre du commerce et des sociétés de Paris sous le numéro 107 084 337 (RCS Paris 107 084 337) — SIRET du siège : 107 084 337 00016 — N° de TVA intracommunautaire : FR81107084337.</p>
        <p style={P}>Contact : <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a></p>
        <p style={P}>Directeur de la publication : Guillaume Ruiz, Président.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Hébergement</h2>
        <p style={P}><strong>Site web</strong> : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.</p>
        <p style={P}><strong>Données de l'application</strong> : Supabase Inc. (supabase.com), sur des serveurs situés dans l'Union européenne (Paris, France).</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Données personnelles</h2>
        <p style={P}>ATTAX est responsable du traitement des données personnelles collectées par l'application et le site. Leur utilisation et tes droits sont décrits dans la <Link href="/privacy" style={LINK}>politique de confidentialité</Link> et la <Link href="/health-data-privacy" style={LINK}>politique relative aux données de santé</Link>.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Propriété intellectuelle</h2>
        <p style={P}>La marque Attax, les logos, les textes, les visuels et l'application sont la propriété d'ATTAX. Toute reproduction ou utilisation sans autorisation écrite préalable est interdite.</p>
      </div>
    </>
  );
}

function ContentEn() {
  return (
    <>
      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Legal</p>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Legal Notice</h1>
      <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: October 20, 2026</p>

      <div style={SECTION}>
        <h2 style={H2}>Publisher</h2>
        <p style={P}>The website attax.app and the Attax mobile app (iOS and Android) are published by <strong>ATTAX</strong>, a French simplified joint-stock company (SAS) with a share capital of €1,000, whose registered office is at 61 rue de Lyon, 75012 Paris, France.</p>
        <p style={P}>Registered with the Paris Trade and Companies Register under number 107 084 337 (RCS Paris 107 084 337) — SIRET: 107 084 337 00016 — EU VAT number: FR81107084337.</p>
        <p style={P}>Contact: <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a></p>
        <p style={P}>Publication director: Guillaume Ruiz, President.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Hosting</h2>
        <p style={P}><strong>Website</strong>: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA — vercel.com.</p>
        <p style={P}><strong>App data</strong>: Supabase Inc. (supabase.com), on servers located in the European Union (Paris, France).</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Personal data</h2>
        <p style={P}>ATTAX is the data controller for the personal data collected by the app and the website. How it is used and your rights are described in our <Link href="/privacy" style={LINK}>Privacy Policy</Link> and <Link href="/health-data-privacy" style={LINK}>Consumer Health Data Privacy Policy</Link>.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>Intellectual property</h2>
        <p style={P}>The Attax brand, logos, texts, visuals and the app are the property of ATTAX. Any reproduction or use without prior written permission is prohibited.</p>
      </div>
    </>
  );
}

export default function LegalPage() {
  const { lang } = useLang();
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#0d0d0d", padding: "0 12px" }}>
        <PageNavbar />
      </div>
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        {lang === "fr" ? <ContentFr /> : <ContentEn />}

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "2rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</Link>
          <Link href="/terms" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Conditions d'utilisation" : "Terms of Service"}</Link>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Retour à Attax" : "Back to Attax"}</Link>
        </div>
      </div>
    </div>
  );
}
