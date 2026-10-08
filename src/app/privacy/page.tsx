"use client";
import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

const SECTION: React.CSSProperties = { marginBottom: "3rem" };
const H2: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 1rem", letterSpacing: "-0.02em" };
const P: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem" };
const UL: React.CSSProperties = { fontSize: "1rem", color: "#555", lineHeight: 1.8, margin: "0 0 0.875rem", paddingLeft: "1.25rem" };
const LINK: React.CSSProperties = { color: "#0d0d0d", fontWeight: 600 };

function ContentEn() {
  return (
    <>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Legal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Privacy Policy</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: October 8, 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Introduction</h2>
          <p style={P}>Attax ("we", "our", "us") is a fitness competition app: your real physical activity powers daily duels against other players in a league. This Privacy Policy explains what data we collect when you use the Attax mobile app (iOS and Android) and the website attax.app, why we collect it, who processes it, and how you can delete it.</p>
          <p style={P}>Attax is not a medical app and does not provide medical advice.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Data We Collect</h2>
          <p style={P}><strong>Account data:</strong> email address, password (stored hashed by our authentication provider), username, first name, country, year of birth, and the profile photo you choose (optional).</p>
          <p style={P}><strong>Health and activity data</strong> (only if you grant access in Apple Health / HealthKit or Health Connect):</p>
          <ul style={UL}>
            <li>Steps (daily totals and the times they were recorded).</li>
            <li>Heart rate, including per-minute heart-rate values during your activity sessions.</li>
            <li>Activity session times (start and end) derived from the data above.</li>
          </ul>
          <p style={P}>On iPhone, if no watch data is available, Attax may use the phone's motion sensor to count steps. Attax only <strong>reads</strong> health data; it never writes anything to Apple Health or Health Connect.</p>
          <p style={P}><strong>Game data:</strong> the activity points calculated from your health data, your duel results, league, ranking and in-game progression.</p>
          <p style={P}><strong>Usage and device data:</strong> app events (for example screens opened, app opened, duel viewed), device type, operating system and app version, and a push-notification token.</p>
          <p style={P}><strong>Support and safety data:</strong> messages you send us, and reports or blocks you make about other players.</p>
          <p style={P}>We do not collect your precise location, contacts, camera, microphone, or advertising identifier, and we do not show advertising.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. How We Use Your Data</h2>
          <ul style={UL}>
            <li><strong>Run the game:</strong> calculate your activity points (your year of birth is used in this calculation), resolve your daily duels and update rankings.</li>
            <li><strong>Show your public profile</strong> to the other players of your leagues: username, profile photo, country, points, results and ranking. Your email, first name and year of birth are never shown to other players.</li>
            <li><strong>Send notifications</strong> about your duels and results (you can turn them off in the app or in your device settings).</li>
            <li><strong>Keep the game fair and safe:</strong> detect cheating, handle reports and blocks.</li>
            <li><strong>Improve the app</strong> with aggregated usage analytics.</li>
            <li><strong>Answer your support requests.</strong></li>
          </ul>
          <p style={P}>Legal bases (GDPR): performance of our contract with you (running the game), your explicit consent for health data (which you can withdraw at any time), and our legitimate interest for analytics, security and fraud prevention.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Health Data (Apple Health / HealthKit and Health Connect)</h2>
          <p style={P}>Health data is used <strong>only</strong> to calculate your activity points and power your duels, rankings and activity history inside Attax.</p>
          <ul style={UL}>
            <li>It is never sold, never used for advertising or marketing, and never shared with data brokers or information resellers.</li>
            <li>It is never used to determine credit-worthiness, insurance or employment eligibility.</li>
            <li>It is not stored in iCloud and is only transferred to our own servers to compute your game results.</li>
            <li>Other players only see the resulting game data (points, activity duration and intensity in duels), never your raw health records.</li>
          </ul>
          <p style={P}>The use of information received from Health Connect adheres to the <a href="https://support.google.com/googleplay/android-developer/answer/12991134" style={LINK}>Health Connect Permissions policy</a>, including the Limited Use requirements. The use of HealthKit data complies with Apple's App Store Review Guidelines.</p>
          <p style={P}>You can revoke health access at any time in the Health app (iPhone) or in Health Connect settings (Android). Data already synchronized stays attached to your account until you delete it (see section 8).</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Service Providers</h2>
          <p style={P}>We share data only with the providers that run Attax for us, under data processing agreements:</p>
          <ul style={UL}>
            <li><strong>Supabase</strong> — database, authentication, file storage and server functions (servers in the European Union, Paris).</li>
            <li><strong>PostHog</strong> — product analytics (EU hosting). Health data is never sent to PostHog.</li>
            <li><strong>Expo</strong> and <strong>Google Firebase Cloud Messaging</strong> / <strong>Apple Push Notification service</strong> — app updates and push notifications.</li>
            <li><strong>Resend</strong> — transactional emails (account confirmation, password reset, support).</li>
            <li><strong>Vercel</strong> — hosting of the attax.app website.</li>
          </ul>
          <p style={P}>We do not sell your personal data. Where a provider processes data outside the EU, the transfer is covered by appropriate safeguards (such as the European Commission's Standard Contractual Clauses).</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Data Retention</h2>
          <p style={P}>We keep your data for as long as your account exists. When you delete your account, your personal data, health data and game data are deleted from our database immediately, and from backups within 30 days. Anonymous, aggregated statistics may be kept.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Your Rights</h2>
          <p style={P}>You can access, correct, export or delete your personal data, object to or restrict its processing, and withdraw your consent at any time. Contact us at <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>. You can also lodge a complaint with your data protection authority (in France, the CNIL).</p>
        </div>

        <div style={SECTION} id="delete-account">
          <h2 style={H2}>8. How to Delete Your Account</h2>
          <p style={P}><strong>In the app:</strong> open Attax, tap your profile photo at the top of the Home screen → <em>My account</em> → <em>Delete my account</em>, then confirm. Deletion is immediate.</p>
          <p style={P}><strong>Without the app:</strong> email <a href="mailto:contact@attax.app?subject=Delete%20my%20Attax%20account" style={LINK}>contact@attax.app</a> from the email address of your account with the subject "Delete my Attax account". We delete it within 7 days and confirm by email.</p>
          <p style={P}>What is deleted: your account (email, password, username, first name, country, year of birth), your profile photo, all your health and activity data, points, duel history, rankings, notifications, reports and push tokens. Nothing is kept except anonymous aggregated statistics.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>9. Security</h2>
          <p style={P}>Data is encrypted in transit (HTTPS) and at rest, access is protected by row-level security on our database, and sensitive fields (email, year of birth) are never readable by other users.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>10. Children</h2>
          <p style={P}>Attax is not intended for anyone under 16. We do not knowingly collect data from them; if you believe a child has created an account, contact us and we will delete it.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>11. Changes and Contact</h2>
          <p style={P}>We will notify you in the app of any significant change to this policy. For any privacy question, contact us at <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>.</p>
        </div>

    </>
  );
}

function ContentFr() {
  return (
    <>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Légal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Politique de confidentialité</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Dernière mise à jour : 8 octobre 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Introduction</h2>
          <p style={P}>Attax (« nous ») est une application de compétition sportive : ton activité physique réelle alimente des duels quotidiens contre d'autres joueurs d'une ligue. Cette politique explique quelles données nous collectons quand tu utilises l'application mobile Attax (iOS et Android) et le site attax.app, pourquoi nous les collectons, qui les traite et comment tu peux les supprimer.</p>
          <p style={P}>Attax n'est pas une application médicale et ne fournit aucun conseil médical.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Données collectées</h2>
          <p style={P}><strong>Données de compte :</strong> adresse e-mail, mot de passe (stocké sous forme chiffrée par notre prestataire d'authentification), pseudo, prénom, pays, année de naissance et la photo de profil que tu choisis (facultative).</p>
          <p style={P}><strong>Données de santé et d'activité</strong> (uniquement si tu en autorises l'accès dans Apple Santé / HealthKit ou Health Connect) :</p>
          <ul style={UL}>
            <li>Les pas (totaux quotidiens et heures d'enregistrement).</li>
            <li>La fréquence cardiaque, y compris les valeurs minute par minute pendant tes séances.</li>
            <li>Les horaires de tes séances (début et fin), déduits des données ci-dessus.</li>
          </ul>
          <p style={P}>Sur iPhone, si aucune donnée de montre n'est disponible, Attax peut utiliser le capteur de mouvement du téléphone pour compter tes pas. Attax <strong>lit</strong> uniquement les données de santé ; il n'écrit jamais rien dans Apple Santé ou Health Connect.</p>
          <p style={P}><strong>Données de jeu :</strong> les points d'activité calculés à partir de tes données de santé, tes résultats de duels, ta ligue, ton classement et ta progression dans le jeu.</p>
          <p style={P}><strong>Données d'usage et d'appareil :</strong> événements de l'app (par exemple écrans ouverts, ouverture de l'app, duel consulté), type d'appareil, système d'exploitation, version de l'app et jeton de notifications.</p>
          <p style={P}><strong>Données de support et de sécurité :</strong> les messages que tu nous envoies, et les signalements ou blocages que tu effectues sur d'autres joueurs.</p>
          <p style={P}>Nous ne collectons ni ta position précise, ni tes contacts, ni ta caméra, ni ton micro, ni ton identifiant publicitaire, et nous n'affichons aucune publicité.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. Utilisation des données</h2>
          <ul style={UL}>
            <li><strong>Faire fonctionner le jeu :</strong> calculer tes points d'activité (ton année de naissance est utilisée dans ce calcul), trancher tes duels quotidiens et mettre à jour les classements.</li>
            <li><strong>Afficher ton profil public</strong> aux autres joueurs de tes ligues : pseudo, photo de profil, pays, points, résultats et classement. Ton e-mail, ton prénom et ton année de naissance ne sont jamais montrés aux autres joueurs.</li>
            <li><strong>T'envoyer des notifications</strong> sur tes duels et tes résultats (tu peux les désactiver dans l'app ou dans les réglages de ton téléphone).</li>
            <li><strong>Garantir un jeu équitable et sûr :</strong> détecter la triche, traiter les signalements et les blocages.</li>
            <li><strong>Améliorer l'app</strong> grâce à des statistiques d'usage agrégées.</li>
            <li><strong>Répondre à tes demandes de support.</strong></li>
          </ul>
          <p style={P}>Bases légales (RGPD) : l'exécution de notre contrat avec toi (faire fonctionner le jeu), ton consentement explicite pour les données de santé (que tu peux retirer à tout moment), et notre intérêt légitime pour les statistiques, la sécurité et la prévention de la fraude.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Données de santé (Apple Santé / HealthKit et Health Connect)</h2>
          <p style={P}>Les données de santé servent <strong>uniquement</strong> à calculer tes points d'activité et à faire fonctionner tes duels, classements et historique d'activité dans Attax.</p>
          <ul style={UL}>
            <li>Elles ne sont jamais vendues, jamais utilisées pour de la publicité ou du marketing, et jamais partagées avec des courtiers ou revendeurs de données.</li>
            <li>Elles ne sont jamais utilisées pour évaluer une solvabilité, une assurance ou une embauche.</li>
            <li>Elles ne sont pas stockées dans iCloud et ne sont transmises qu'à nos propres serveurs pour calculer tes résultats.</li>
            <li>Les autres joueurs ne voient que les données de jeu qui en résultent (points, durée et intensité d'activité dans les duels), jamais tes données de santé brutes.</li>
          </ul>
          <p style={P}>L'utilisation des informations reçues de Health Connect respecte la <a href="https://support.google.com/googleplay/android-developer/answer/12991134" style={LINK}>politique d'autorisations Health Connect</a>, y compris les exigences d'utilisation limitée. L'utilisation des données HealthKit respecte les règles de l'App Store d'Apple.</p>
          <p style={P}>Tu peux retirer l'accès à tes données de santé à tout moment dans l'app Santé (iPhone) ou dans les réglages de Health Connect (Android). Les données déjà synchronisées restent liées à ton compte jusqu'à sa suppression (voir section 8).</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Prestataires</h2>
          <p style={P}>Nous ne partageons des données qu'avec les prestataires qui font fonctionner Attax pour nous, dans le cadre d'accords de traitement des données :</p>
          <ul style={UL}>
            <li><strong>Supabase</strong> — base de données, authentification, stockage de fichiers et fonctions serveur (serveurs dans l'Union européenne, à Paris).</li>
            <li><strong>PostHog</strong> — statistiques d'usage (hébergement dans l'UE). Aucune donnée de santé n'est envoyée à PostHog.</li>
            <li><strong>Expo</strong> et <strong>Google Firebase Cloud Messaging</strong> / <strong>Apple Push Notification service</strong> — mises à jour de l'app et notifications.</li>
            <li><strong>Resend</strong> — e-mails transactionnels (confirmation de compte, réinitialisation du mot de passe, support).</li>
            <li><strong>Vercel</strong> — hébergement du site attax.app.</li>
          </ul>
          <p style={P}>Nous ne vendons pas tes données personnelles. Lorsqu'un prestataire traite des données hors de l'UE, le transfert est encadré par des garanties appropriées (comme les clauses contractuelles types de la Commission européenne).</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Durée de conservation</h2>
          <p style={P}>Nous conservons tes données tant que ton compte existe. Quand tu supprimes ton compte, tes données personnelles, de santé et de jeu sont supprimées de notre base immédiatement, et des sauvegardes sous 30 jours. Des statistiques anonymes et agrégées peuvent être conservées.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Tes droits</h2>
          <p style={P}>Tu peux accéder à tes données personnelles, les rectifier, les exporter ou les supprimer, t'opposer à leur traitement ou le limiter, et retirer ton consentement à tout moment. Écris-nous à <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>. Tu peux aussi introduire une réclamation auprès de ton autorité de protection des données (en France, la CNIL).</p>
        </div>

        <div style={SECTION} id="delete-account">
          <h2 style={H2}>8. Supprimer ton compte</h2>
          <p style={P}><strong>Dans l'app :</strong> ouvre Attax, touche ta photo de profil en haut de l'Accueil → <em>Mon compte</em> → <em>Supprimer mon compte</em>, puis confirme. La suppression est immédiate.</p>
          <p style={P}><strong>Sans l'app :</strong> écris à <a href="mailto:contact@attax.app?subject=Supprimer%20mon%20compte%20Attax" style={LINK}>contact@attax.app</a> depuis l'adresse e-mail de ton compte, avec l'objet « Supprimer mon compte Attax ». Nous le supprimons sous 7 jours et te le confirmons par e-mail.</p>
          <p style={P}>Ce qui est supprimé : ton compte (e-mail, mot de passe, pseudo, prénom, pays, année de naissance), ta photo de profil, toutes tes données de santé et d'activité, tes points, ton historique de duels, tes classements, tes notifications, tes signalements et tes jetons de notifications. Rien n'est conservé, à part des statistiques anonymes et agrégées.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>9. Sécurité</h2>
          <p style={P}>Les données sont chiffrées en transit (HTTPS) et au repos, l'accès est protégé par une sécurité au niveau de chaque ligne de notre base de données, et les champs sensibles (e-mail, année de naissance) ne sont jamais lisibles par les autres utilisateurs.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>10. Mineurs</h2>
          <p style={P}>Attax n'est pas destiné aux moins de 16 ans. Nous ne collectons pas sciemment leurs données ; si tu penses qu'un mineur a créé un compte, contacte-nous et nous le supprimerons.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>11. Modifications et contact</h2>
          <p style={P}>Nous t'informerons dans l'app de toute modification importante de cette politique. Pour toute question sur tes données, écris-nous à <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>.</p>
        </div>
    </>
  );
}

export default function PrivacyPage() {
  const { lang } = useLang();
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#0d0d0d", padding: "0 12px" }}>
        <PageNavbar />
      </div>
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
        {lang === "fr" ? <ContentFr /> : <ContentEn />}

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "2rem", display: "flex", gap: "1.5rem" }}>
          <Link href="/terms" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Conditions d'utilisation" : "Terms of Service"}</Link>
          <Link href="/cookie-policy" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Politique cookies" : "Cookie Policy"}</Link>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none" }}>{lang === "fr" ? "Retour à Attax" : "Back to Attax"}</Link>
        </div>
      </div>
    </div>
  );
}
