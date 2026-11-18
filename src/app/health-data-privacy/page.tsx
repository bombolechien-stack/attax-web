"use client";
import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

// Politique dédiée aux données de santé des consommateurs (Washington My Health My Data
// Act, Nevada SB 370, Connecticut et lois similaires). Doit rester accessible depuis la
// page d'accueil (lien du pied de page) et publique (middleware).
const SECTION: React.CSSProperties = { marginBottom: "3rem" };
const H2: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 1rem", letterSpacing: "-0.02em" };
const P: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem" };
const UL: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem", paddingLeft: "1.25rem" };
const LINK: React.CSSProperties = { color: "#0d0d0d", fontWeight: 600 };
const KICKER: React.CSSProperties = { fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" };
const H1: React.CSSProperties = { fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" };
const DATE: React.CSSProperties = { fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" };

function ContentEn() {
  return (
    <>
      <p style={KICKER}>Legal</p>
      <h1 style={H1}>Consumer Health Data Privacy Policy</h1>
      <p style={DATE}>Last updated: November 18, 2026</p>

      <div style={SECTION}>
        <p style={P}>This policy explains how Attax collects, uses and shares <strong>consumer health data</strong>, as defined by the Washington My Health My Data Act and similar laws in Nevada, Connecticut and other U.S. states. It supplements our general <Link href="/privacy" style={LINK}>Privacy Policy</Link>.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>1. Consumer health data we collect</h2>
        <ul style={UL}>
          <li>Heart rate, including per-minute heart-rate values recorded during your workouts.</li>
          <li>Step counts.</li>
          <li>Workouts: start and end times and the workout type (for example running or swimming).</li>
          <li>The minutes of effort and activity points we calculate from the data above.</li>
          <li>Technical information about how your watch records this data (for example how often measurements arrive and which app provided your steps), used only to diagnose synchronization problems.</li>
        </ul>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>2. Sources</h2>
        <p style={P}>We collect this data from you, through Apple Health (HealthKit) on iPhone or Health Connect on Android, only after you give your consent in the app and grant access in your phone's health settings. If you allow it, Attax can also read this data in the background (on Android, a few times a day; on iPhone, when Apple Health signals new data), so that your day counts even if you do not open the app. Attax never writes anything to Apple Health or Health Connect.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>3. How we use it</h2>
        <p style={P}>We use consumer health data <strong>only</strong> to provide the Attax game you asked for: calculating your activity points, resolving your daily matches, updating rankings, running the duo partner and the season, and showing your activity history. We do not use it for advertising, marketing, profiling, or to determine eligibility for credit, insurance, housing or employment.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>4. Consent</h2>
        <p style={P}>We collect and use consumer health data only with your explicit consent, given by ticking a dedicated checkbox when you create your account (or on a dedicated screen for accounts created earlier). You can withdraw your consent at any time by revoking access in Apple Health or Health Connect and by deleting your account (see section 7).</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>5. Sharing</h2>
        <ul style={UL}>
          <li><strong>Other players:</strong> in a match, your opponent of the day sees your activity points, the heart-rate curve of your workout for that match and your workout type of the day. The players of your leagues see your points; your duo partner sees whether you reached your goal of the day; if you join the season, all season players see your total points. Nobody sees your other health data.</li>
          <li><strong>Service providers (processors):</strong> our hosting and database provider (Supabase, servers in the European Union) stores this data on our behalf, under contract, only to run Attax. Consumer health data is never sent to our analytics provider.</li>
          <li>We <strong>never sell</strong> consumer health data and never share it with advertisers, data brokers or other third parties.</li>
        </ul>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>6. Security and retention</h2>
        <p style={P}>Data is encrypted in transit and at rest, and access is restricted to the minimum needed to run the game. We keep it for as long as your account exists. When you delete your account, it is deleted from our database immediately and from backups within 30 days.</p>
      </div>

      <div style={SECTION} id="rights">
        <h2 style={H2}>7. Your rights</h2>
        <p style={P}>You have the right to confirm whether we collect your consumer health data, to access it, to obtain the list of third parties and processors it is shared with, to withdraw your consent, and to have it deleted.</p>
        <ul style={UL}>
          <li><strong>Delete your data:</strong> in the app, tap your profile photo at the top of the Home screen &gt; My account &gt; Edit profile (My profile in earlier versions) &gt; Delete my account. All your health data is deleted. You can also email us (see below and our <Link href="/privacy#delete-account" style={LINK}>Privacy Policy</Link>).</li>
          <li><strong>Any other request:</strong> email <a href="mailto:contact@attax.app?subject=Consumer%20health%20data%20request" style={LINK}>contact@attax.app</a> from the email address of your account. We respond within 45 days.</li>
          <li><strong>Appeal:</strong> if we decline your request, you can appeal by replying to our answer. If your appeal is denied, you may contact your state Attorney General.</li>
        </ul>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>8. Contact</h2>
        <p style={P}>Attax — <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a></p>
      </div>
    </>
  );
}

function ContentFr() {
  return (
    <>
      <p style={KICKER}>Légal</p>
      <h1 style={H1}>Politique relative aux données de santé</h1>
      <p style={DATE}>Dernière mise à jour : 18 novembre 2026</p>

      <div style={SECTION}>
        <p style={P}>Cette politique explique comment Attax collecte, utilise et partage tes <strong>données de santé</strong>. Elle répond notamment aux lois américaines sur les données de santé des consommateurs (Washington My Health My Data Act, Nevada, Connecticut et autres États) et complète notre <Link href="/privacy" style={LINK}>politique de confidentialité</Link>.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>1. Données de santé collectées</h2>
        <ul style={UL}>
          <li>Fréquence cardiaque, y compris les valeurs minute par minute enregistrées pendant tes séances.</li>
          <li>Nombre de pas.</li>
          <li>Séances : heures de début et de fin, et type de séance (par exemple course ou natation).</li>
          <li>Les minutes d'effort et les points d'activité que nous calculons à partir de ces données.</li>
          <li>Des informations techniques sur la façon dont ta montre enregistre ces données (par exemple la fréquence d'arrivée des mesures et l'application qui a fourni tes pas), utilisées uniquement pour diagnostiquer les problèmes de synchronisation.</li>
        </ul>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>2. Provenance</h2>
        <p style={P}>Ces données viennent de toi, via Apple Santé (HealthKit) sur iPhone ou Health Connect sur Android, uniquement après ton consentement dans l'app et ton autorisation dans les réglages santé de ton téléphone. Si tu l'autorises, Attax peut aussi lire ces données en arrière-plan (sur Android, quelques fois par jour ; sur iPhone, quand Apple Santé signale de nouvelles données), pour que ta journée compte même si tu n'ouvres pas l'app. Attax n'écrit jamais rien dans Apple Santé ou Health Connect.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>3. Utilisation</h2>
        <p style={P}>Nous utilisons ces données <strong>uniquement</strong> pour faire fonctionner le jeu Attax : calcul de tes points d'activité, résolution de tes matchs quotidiens, classements, binôme, saison et historique d'activité. Jamais pour de la publicité, du marketing, du profilage, ni pour évaluer une solvabilité, une assurance, un logement ou un emploi.</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>4. Consentement</h2>
        <p style={P}>Nous ne collectons et n'utilisons ces données qu'avec ton consentement explicite, donné en cochant une case dédiée à la création de ton compte (ou sur un écran dédié pour les comptes créés avant). Tu peux le retirer à tout moment en retirant l'accès dans Apple Santé ou Health Connect et en supprimant ton compte (voir section 7).</p>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>5. Partage</h2>
        <ul style={UL}>
          <li><strong>Autres joueurs :</strong> dans un match, ton adversaire du jour voit tes points d'activité, la courbe cardiaque de ta séance pour ce match et ton type de séance du jour. Les joueurs de tes ligues voient tes points ; ton binôme voit si tu as atteint ton objectif du jour ; si tu participes à la saison, tous les joueurs de la saison voient ton total de points. Personne ne voit tes autres données de santé.</li>
          <li><strong>Prestataires (sous-traitants) :</strong> notre hébergeur et fournisseur de base de données (Supabase, serveurs dans l'Union européenne) stocke ces données pour notre compte, sous contrat, uniquement pour faire fonctionner Attax. Elles ne sont jamais envoyées à notre outil de statistiques.</li>
          <li>Nous ne <strong>vendons jamais</strong> ces données et ne les partageons jamais avec des annonceurs, des courtiers en données ou d'autres tiers.</li>
        </ul>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>6. Sécurité et conservation</h2>
        <p style={P}>Les données sont chiffrées pendant leur transfert et au repos, et leur accès est limité au strict nécessaire. Nous les conservons tant que ton compte existe. À la suppression de ton compte, elles sont effacées immédiatement de notre base et sous 30 jours des sauvegardes.</p>
      </div>

      <div style={SECTION} id="rights">
        <h2 style={H2}>7. Tes droits</h2>
        <p style={P}>Tu as le droit de savoir si nous collectons tes données de santé, d'y accéder, d'obtenir la liste des tiers et sous-traitants qui les reçoivent, de retirer ton consentement et de les faire supprimer.</p>
        <ul style={UL}>
          <li><strong>Supprimer tes données :</strong> dans l'app, touche ta photo de profil en haut de l'Accueil &gt; Mon compte &gt; Éditer le profil (Mon profil dans les versions précédentes) &gt; Supprimer mon compte. Toutes tes données de santé sont supprimées. Tu peux aussi nous écrire (voir ci-dessous et notre <Link href="/privacy#delete-account" style={LINK}>politique de confidentialité</Link>).</li>
          <li><strong>Toute autre demande :</strong> écris à <a href="mailto:contact@attax.app?subject=Demande%20donn%C3%A9es%20de%20sant%C3%A9" style={LINK}>contact@attax.app</a> depuis l'adresse e-mail de ton compte. Nous répondons sous 45 jours.</li>
          <li><strong>Recours :</strong> si nous refusons ta demande, tu peux faire appel en répondant à notre réponse, puis saisir l'autorité compétente de ton pays ou de ton État (en France, la CNIL).</li>
        </ul>
      </div>

      <div style={SECTION}>
        <h2 style={H2}>8. Contact</h2>
        <p style={P}>Attax — <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a></p>
      </div>
    </>
  );
}

export default function HealthDataPrivacyPage() {
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
