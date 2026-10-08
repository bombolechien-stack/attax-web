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
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Terms of Service</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: October 8, 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Acceptance of Terms</h2>
          <p style={P}>By downloading, installing, or using the Attax application ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Description of Service</h2>
          <p style={P}>Attax is a competitive fitness game. The App reads your steps and heart rate from Apple Health (iOS) or Health Connect (Android), converts them into activity points, and uses those points in daily duels between players of a league, together with strategy cards, league standings and a global rank.</p>
          <p style={P}>The App is free to download and to play. Game rules (scoring, schedules, cards, ranks) may evolve to keep the game fair and enjoyable.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. Eligibility</h2>
          <p style={P}>You must be at least 16 years of age to use Attax. By using the App, you confirm that you meet this age requirement.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. User Accounts</h2>
          <p style={P}>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate information during registration — including your year of birth, which is used to calculate your activity points — and to keep it up to date.</p>
          <p style={P}>You can delete your account at any time from the App (My account → Delete my account) or by contacting us. Deletion is permanent.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Fair Play and Acceptable Use</h2>
          <p style={P}>Attax is only fun if everyone plays fair. You agree not to: use the App for any unlawful purpose; manipulate or falsify activity data (for example by providing false information, sharing a device, or generating heart-rate or step data without performing the activity yourself); create multiple accounts to gain a competitive advantage; reverse engineer, decompile, or tamper with the App or its servers; or harass other users.</p>
          <p style={P}>We may correct scores, cancel results, or suspend accounts that breach these rules.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Usernames, Profile Photos and Reports</h2>
          <p style={P}>Your username and profile photo are visible to other players. They must not be offensive, hateful, sexual, misleading, or infringe anyone's rights. You can report a player or block them from their profile in the App. We review reports within 24 hours and may remove content or suspend accounts that break these rules.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Health Disclaimer</h2>
          <p style={P}>Attax is not a medical device and does not provide medical advice. Points, zones and duels are game mechanics, not health assessments. Consult a healthcare professional before beginning any new fitness program, and stop exercising if you feel unwell. By using the App, you acknowledge that you participate in physical activity at your own risk.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>8. Intellectual Property</h2>
          <p style={P}>All content, branding, and technology within Attax are the property of Attax and its licensors. You may not reproduce, distribute, or create derivative works without our written permission.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>9. Limitation of Liability</h2>
          <p style={P}>To the maximum extent permitted by law, Attax shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App, including data that is missing or delayed because of your device, your watch app, Apple Health or Health Connect.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>10. Modifications</h2>
          <p style={P}>We may modify these terms. We will inform you in the App of any significant change. Continued use of the App after changes constitutes acceptance of the updated terms.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>11. Contact</h2>
          <p style={P}>For questions about these terms, contact us at <a href="mailto:contact@attax.app" style={{ color: "#0d0d0d", fontWeight: 600 }}>contact@attax.app</a>.</p>
        </div>

    </>
  );
}

function ContentFr() {
  return (
    <>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Légal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Conditions d'utilisation</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Dernière mise à jour : 8 octobre 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Acceptation des conditions</h2>
          <p style={P}>En téléchargeant, en installant ou en utilisant l'application Attax (« l'App »), tu acceptes d'être lié par ces conditions d'utilisation. Si tu ne les acceptes pas, n'utilise pas l'App.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Description du service</h2>
          <p style={P}>Attax est un jeu de fitness compétitif. L'App lit tes pas et ta fréquence cardiaque dans Apple Santé (iOS) ou Health Connect (Android), les convertit en points d'activité et utilise ces points dans des duels quotidiens entre les joueurs d'une ligue, avec des cartes stratégiques, des classements de ligue et un rang global.</p>
          <p style={P}>L'App est gratuite à télécharger et à jouer. Les règles du jeu (points, horaires, cartes, rangs) peuvent évoluer pour que le jeu reste équitable et agréable.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. Conditions d'âge</h2>
          <p style={P}>Tu dois avoir au moins 16 ans pour utiliser Attax. En utilisant l'App, tu confirmes remplir cette condition.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Comptes</h2>
          <p style={P}>Tu es responsable de la confidentialité de tes identifiants et de toute activité réalisée avec ton compte. Tu t'engages à fournir des informations exactes à l'inscription — y compris ton année de naissance, utilisée dans le calcul de tes points d'activité — et à les tenir à jour.</p>
          <p style={P}>Tu peux supprimer ton compte à tout moment depuis l'App (Mon compte → Supprimer mon compte) ou en nous contactant. La suppression est définitive.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Fair-play et usage acceptable</h2>
          <p style={P}>Attax n'est amusant que si tout le monde joue le jeu. Tu t'engages à ne pas : utiliser l'App à des fins illégales ; manipuler ou falsifier des données d'activité (par exemple en fournissant de fausses informations, en partageant un appareil, ou en générant des données de fréquence cardiaque ou de pas sans faire l'activité toi-même) ; créer plusieurs comptes pour obtenir un avantage ; désassembler, décompiler ou altérer l'App ou ses serveurs ; harceler d'autres utilisateurs.</p>
          <p style={P}>Nous pouvons corriger des scores, annuler des résultats ou suspendre des comptes qui enfreignent ces règles.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Pseudos, photos de profil et signalements</h2>
          <p style={P}>Ton pseudo et ta photo de profil sont visibles par les autres joueurs. Ils ne doivent pas être offensants, haineux, sexuels, trompeurs, ni porter atteinte aux droits de quiconque. Tu peux signaler un joueur ou le bloquer depuis son profil dans l'App. Nous examinons les signalements sous 24 heures et pouvons supprimer du contenu ou suspendre des comptes qui enfreignent ces règles.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Avertissement santé</h2>
          <p style={P}>Attax n'est pas un dispositif médical et ne fournit aucun conseil médical. Les points et les duels sont des mécaniques de jeu, pas des évaluations de santé. Consulte un professionnel de santé avant de commencer un nouveau programme sportif, et arrête-toi si tu ne te sens pas bien. En utilisant l'App, tu reconnais pratiquer une activité physique à tes propres risques.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>8. Propriété intellectuelle</h2>
          <p style={P}>Tous les contenus, la marque et la technologie d'Attax appartiennent à Attax et à ses concédants. Tu ne peux pas les reproduire, les distribuer ou en créer des œuvres dérivées sans notre autorisation écrite.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>9. Limitation de responsabilité</h2>
          <p style={P}>Dans toute la mesure permise par la loi, Attax ne pourra être tenu responsable des dommages indirects, accessoires ou consécutifs liés à ton utilisation de l'App, y compris des données manquantes ou retardées en raison de ton appareil, de l'appli de ta montre, d'Apple Santé ou de Health Connect.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>10. Modifications</h2>
          <p style={P}>Nous pouvons modifier ces conditions. Nous t'informerons dans l'App de toute modification importante. Continuer à utiliser l'App après une modification vaut acceptation des nouvelles conditions.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>11. Contact</h2>
          <p style={P}>Pour toute question sur ces conditions, écris-nous à <a href="mailto:contact@attax.app" style={{ color: "#0d0d0d", fontWeight: 600 }}>contact@attax.app</a>.</p>
        </div>
    </>
  );
}

export default function TermsPage() {
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
          <Link href="/cookie-policy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Politique cookies" : "Cookie Policy"}</Link>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Retour à Attax" : "Back to Attax"}</Link>
        </div>
      </div>
    </div>
  );
}
