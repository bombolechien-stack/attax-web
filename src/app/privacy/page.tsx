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
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Last updated: November 18, 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Introduction</h2>
          <p style={P}>Attax ("we", "our", "us") is a fitness game: your real physical activity powers daily duels against the other players of a league. This Privacy Policy explains what data we collect when you use the Attax mobile app (iPhone and Android) and the website attax.app, why we collect it, who processes it, what other players can see, and how you can delete it.</p>
          <p style={P}>The data controller is <strong>ATTAX</strong>, SAS with a share capital of €1,000, 61 rue de Lyon, 75012 Paris, France, RCS Paris 107 084 337 (see our <a href="/legal" style={{ color: "#0d0d0d", fontWeight: 600 }}>Legal Notice</a>). Contact: <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>.</p>
          <p style={P}>Attax is not a medical app and does not provide medical advice.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Data We Collect</h2>
          <p style={P}><strong>Account data:</strong> email address, password (stored hashed by our authentication provider), username, first and last name, country, year of birth, gender (you can choose not to say), your answers to the short level questionnaire shown when you start, your phone's time zone (to run your leagues at the right local time) and your profile photo. If you sign in with Apple or Google, we receive the identifier, email address and name that Apple or Google share with us; for Sign in with Apple, we also keep a technical token so that your Apple authorization can be revoked when you delete your account.</p>
          <p style={P}><strong>Health and activity data</strong> (only if you grant access in Apple Health / HealthKit or Health Connect):</p>
          <ul style={UL}>
            <li>Steps (totals and the times they were recorded).</li>
            <li>Heart rate, including per-minute values during your activity.</li>
            <li>Workouts: start and end times and the workout type (for example running or swimming).</li>
            <li>Technical information about how your watch records this data (for example how often measurements arrive and which app provided your steps), used only to diagnose synchronization problems.</li>
          </ul>
          <p style={P}>Steps and heart rate come from your watch, band or phone through Apple Health or Health Connect. Attax only <strong>reads</strong> health data; it never writes anything to Apple Health or Health Connect. If you allow it, Attax can also read this data in the background (on Android, a few times a day through Health Connect; on iPhone, when Apple Health signals new data), so that your day counts even if you do not open the app.</p>
          <p style={P}><strong>Game data:</strong> the activity points calculated from your health data, your matches and results, leagues, rankings, rank, streak, badges, trophies, cards played, duo partner days and, if you join it, your season ranking.</p>
          <p style={P}><strong>Content you create:</strong> the messages you send to your opponent or your duo partner (chosen from a fixed list of ready-made phrases, there is no free-text chat), the names you give to custom leagues, and your reactions.</p>
          <p style={P}><strong>Usage, diagnostics and device data:</strong> app events (for example screens opened or a match viewed), error reports (error message and technical trace) when something goes wrong in the app, device type, operating system, app version, a random identifier of your installation and a push-notification token.</p>
          <p style={P}><strong>Pseudonymised usage statistics</strong> (PostHog, hosted in the EU): a technical identifier linked to your account and the IP address of the connection, without your name or your email; used only to understand how the app is used and to improve it; never sold or used for advertising. Legal basis: our legitimate interest. You can ask for them to be deleted at contact@attax.app.</p>
          <p style={P}><strong>Support and safety data:</strong> messages you send us, and reports or blocks you make about other players.</p>
          <p style={P}><strong>Website:</strong> if you use the contact form, your name, email address, subject and message; if you join the waiting list, your email address and language. Like any website, our host also processes technical connection data (such as your IP address) to deliver and secure the site.</p>
          <p style={P}>We do not collect your location (you choose your country yourself), your contacts, your camera or microphone, or any advertising identifier. Your profile photo is chosen from your photo library through the system picker. We do not show advertising and we do not track you across other apps or websites.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. How We Use Your Data</h2>
          <ul style={UL}>
            <li><strong>Run the game:</strong> calculate your activity points, resolve your daily matches, update leagues, rankings and your rank, place you in leagues of your level (your year of birth, gender and questionnaire answers help adapt the game to you), run the duo partner and the season.</li>
            <li><strong>Show your profile and results</strong> to other players (see section 5).</li>
            <li><strong>Send notifications</strong> about your matches, cards and results (you can turn them off in the app or in your device settings).</li>
            <li><strong>Keep the game fair and safe:</strong> detect cheating, handle reports and blocks.</li>
            <li><strong>Fix problems and improve the app</strong> with error reports and usage statistics.</li>
            <li><strong>Answer your messages</strong> sent from the app or the website, and manage the waiting list.</li>
          </ul>
          <p style={P}>Legal bases (GDPR): performance of our contract with you (running the game and your account), your explicit consent for health data (which you can withdraw at any time), and our legitimate interest for usage statistics, error reports, security, fraud prevention and answering your messages.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Health Data (Apple Health / HealthKit and Health Connect)</h2>
          <p style={P}>Health data is used <strong>only</strong> to calculate your activity points and to run your matches, rankings, streak, duo partner, season and activity history inside Attax.</p>
          <ul style={UL}>
            <li>It is never sold, never used for advertising or marketing, and never shared with data brokers or information resellers.</li>
            <li>It is never used to determine credit-worthiness, insurance or employment eligibility.</li>
            <li>It is not stored in iCloud and is only transferred to our own servers to compute your game results.</li>
            <li>It is never sent to our analytics provider.</li>
          </ul>
          <p style={P}>The use of information received from Health Connect adheres to the <a href="https://support.google.com/googleplay/android-developer/answer/12991134" style={LINK}>Health Connect Permissions policy</a>, including the Limited Use requirements. The use of HealthKit data complies with Apple's App Store Review Guidelines.</p>
          <p style={P}><strong>Consent:</strong> we only process health data with your explicit consent, given by ticking a dedicated checkbox when you create your account. You can revoke health access at any time in the Health app (iPhone) or in Health Connect settings (Android), and withdraw your consent by deleting your account; data already synchronized stays attached to your account until you delete it (see section 9). U.S. residents: see our <Link href="/health-data-privacy" style={LINK}>Consumer Health Data Privacy Policy</Link>.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. What Other Players See</h2>
          <ul style={UL}>
            <li><strong>Your profile:</strong> username, profile photo, country, rank, results, streak, badges, trophies, crown and the sports you choose to show.</li>
            <li><strong>In your leagues:</strong> your points, results and ranking.</li>
            <li><strong>In a match:</strong> your opponent of the day sees your activity points, the heart-rate curve of your workout for that match and your workout type of the day, plus the messages you send them.</li>
            <li><strong>Duo partner:</strong> your partner sees whether you reached your goal of the day and the messages you send them.</li>
            <li><strong>Season:</strong> if you join the season, all season players can see your username, profile photo, country, total points and position in the world ranking. The ranking can also be filtered by rank, gender and age group, so your gender and age group are used to place you in those filtered views, without being displayed.</li>
          </ul>
          <p style={P}>Your email address, name, year of birth and other health data are never shown to other players. When you share an image of a result, it is created on your phone and shared only where you choose.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Service Providers</h2>
          <p style={P}>We share data only with the providers that run Attax for us (processors), under contract and only for that purpose:</p>
          <ul style={UL}>
            <li><strong>Supabase</strong> — database, authentication, file storage (profile photos) and server functions (servers in the European Union, Paris).</li>
            <li><strong>PostHog</strong> — pseudonymised usage statistics and error reports (EU hosting). Health data is never sent to PostHog, nor your name or email address.</li>
            <li><strong>Amazon Web Services (Amazon SES)</strong> — sending emails from the app (account emails, support messages, reports).</li>
            <li><strong>Expo</strong>, <strong>Google Firebase Cloud Messaging</strong> and <strong>Apple Push Notification service</strong> — delivery of push notifications (push token and notification content); Expo also delivers app updates.</li>
            <li><strong>Cloudflare (R2)</strong> — storage and delivery of app update files.</li>
            <li><strong>Apple</strong> and <strong>Google</strong> — sign-in, only if you choose Sign in with Apple or Google, and access to Apple Health or Health Connect on your phone.</li>
            <li><strong>Vercel</strong> — hosting of the attax.app website; <strong>Resend</strong> — delivery of the messages sent through the website's forms to our inbox.</li>
          </ul>
          <p style={P}>We do not sell your personal data. Some of these providers are based in, or may process data in, the United States. Where personal data is transferred outside the European Union, the transfer relies on the safeguards provided by the GDPR, such as the European Commission's Standard Contractual Clauses or, for certified providers, the EU-U.S. Data Privacy Framework. You can ask us for more information at contact@attax.app.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Data Retention</h2>
          <p style={P}>We keep your account, health and game data for as long as your account exists. When you delete your account, they are deleted from our database immediately, and from backups within 30 days. Scores of past matches, which also belong to your former opponents, are kept without any link to you. Pseudonymised usage statistics and error reports are linked only to a technical identifier (never to your email or name) and are kept for a limited time; you can ask us to delete them at contact@attax.app. Messages sent to us by email or through the website are kept as long as needed to answer you. Waiting-list addresses are kept until the app launch information has been sent, or until you ask us to remove yours.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>8. Your Rights</h2>
          <p style={P}>You can access, correct, export or delete your personal data, object to or restrict its processing, and withdraw your consent at any time. You can correct most of your profile directly in the app. For any other request, contact us at <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>. You can also lodge a complaint with your data protection authority (in France, the CNIL).</p>
        </div>

        <div style={SECTION} id="delete-account">
          <h2 style={H2}>9. Delete Your Account</h2>
          <p style={P}><strong>In the app:</strong> open Attax, tap your profile photo at the top of the Home screen → <em>My account</em> → <em>Edit profile</em> (called <em>My profile</em> in earlier versions) → <em>Delete my account</em> (at the bottom of the page), then confirm. Deletion is immediate.</p>
          <p style={P}><strong>Without the app:</strong> email <a href="mailto:contact@attax.app?subject=Delete%20my%20Attax%20account" style={LINK}>contact@attax.app</a> from the email address of your account with the subject "Delete my Attax account". We delete it within 7 days and confirm by email.</p>
          <p style={P}>What is deleted: your account (email, password, username, name, country, year of birth, gender, questionnaire answers), your profile photo, all your health and activity data, points, cards, streak, rewards, season and duo partner data, messages and reactions (sent and received), rankings, notifications, reports, blocks and push tokens. If you used Sign in with Apple, your Apple authorization is revoked. Scores of past matches are kept without any link to you.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>10. Security</h2>
          <p style={P}>Data is encrypted in transit (HTTPS) and at rest, access is protected by row-level security on our database, and private fields (email, name, year of birth, gender) are never readable by other users.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>11. Minimum Age</h2>
          <p style={P}>Attax is intended for people aged 16 and over. We do not knowingly collect data from anyone under 16; if you believe someone under 16 has created an account, contact us and we will delete it.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>12. Changes and Contact</h2>
          <p style={P}>We will inform you in the app of any significant change to this policy. For any privacy question, contact us at <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>.</p>
        </div>

    </>
  );
}

function ContentFr() {
  return (
    <>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 1rem" }}>Légal</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 0.5rem" }}>Politique de confidentialité</h1>
        <p style={{ fontSize: "0.875rem", color: "#aaa", margin: "0 0 4rem" }}>Dernière mise à jour : 18 novembre 2026</p>

        <div style={SECTION}>
          <h2 style={H2}>1. Introduction</h2>
          <p style={P}>Attax (« nous ») est un jeu sportif : ton activité physique réelle alimente des duels quotidiens contre les autres joueurs d'une ligue. Cette politique explique quelles données nous collectons quand tu utilises l'application mobile Attax (iPhone et Android) et le site attax.app, pourquoi nous les collectons, qui les traite, ce que voient les autres joueurs et comment tu peux les supprimer.</p>
          <p style={P}>Le responsable du traitement est <strong>ATTAX</strong>, SAS au capital de 1 000 €, 61 rue de Lyon, 75012 Paris, France, RCS Paris 107 084 337 (voir nos <a href="/legal" style={{ color: "#0d0d0d", fontWeight: 600 }}>mentions légales</a>). Contact : <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>.</p>
          <p style={P}>Attax n'est pas une application médicale et ne fournit aucun conseil médical.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>2. Données collectées</h2>
          <p style={P}><strong>Données de compte :</strong> adresse e-mail, mot de passe (stocké sous forme hachée par notre prestataire d'authentification), pseudo, prénom et nom, pays, année de naissance, sexe (tu peux choisir de ne pas le dire), tes réponses au court questionnaire de niveau proposé au départ, le fuseau horaire de ton téléphone (pour faire vivre tes ligues à la bonne heure locale) et ta photo de profil. Si tu te connectes avec Apple ou Google, nous recevons l'identifiant, l'adresse e-mail et le nom qu'Apple ou Google nous transmettent ; pour « Se connecter avec Apple », nous conservons aussi un jeton technique permettant de révoquer ton autorisation Apple quand tu supprimes ton compte.</p>
          <p style={P}><strong>Données de santé et d'activité</strong> (uniquement si tu en autorises l'accès dans Apple Santé / HealthKit ou Health Connect) :</p>
          <ul style={UL}>
            <li>Les pas (totaux et heures d'enregistrement).</li>
            <li>La fréquence cardiaque, y compris les valeurs minute par minute pendant ton activité.</li>
            <li>Les séances : heures de début et de fin, et type de séance (par exemple course ou natation).</li>
            <li>Des informations techniques sur la façon dont ta montre enregistre ces données (par exemple la fréquence d'arrivée des mesures et l'application qui a fourni tes pas), utilisées uniquement pour diagnostiquer les problèmes de synchronisation.</li>
          </ul>
          <p style={P}>Les pas et la fréquence cardiaque viennent de ta montre, de ton bracelet ou de ton téléphone, via Apple Santé ou Health Connect. Attax <strong>lit</strong> uniquement les données de santé ; il n'écrit jamais rien dans Apple Santé ou Health Connect. Si tu l'autorises, Attax peut aussi lire ces données en arrière-plan (sur Android, quelques fois par jour via Health Connect ; sur iPhone, quand Apple Santé signale de nouvelles données), pour que ta journée compte même si tu n'ouvres pas l'app.</p>
          <p style={P}><strong>Données de jeu :</strong> les points d'activité calculés à partir de tes données de santé, tes matchs et résultats, tes ligues, classements, ton rang, ta série, tes badges, trophées, cartes jouées, tes jours de binôme et, si tu y participes, ton classement de saison.</p>
          <p style={P}><strong>Contenus que tu crées :</strong> les messages que tu envoies à ton adversaire ou à ton binôme (choisis dans une liste fixe de phrases toutes faites, il n'y a pas de discussion libre), les noms que tu donnes à tes ligues personnalisées, et tes réactions.</p>
          <p style={P}><strong>Données d'usage, de diagnostic et d'appareil :</strong> événements de l'app (par exemple écrans ouverts ou match consulté), rapports d'erreur (message d'erreur et trace technique) quand quelque chose ne fonctionne pas dans l'app, type d'appareil, système d'exploitation, version de l'app, un identifiant aléatoire de ton installation et un jeton de notifications.</p>
          <p style={P}><strong>Statistiques d'usage pseudonymisées</strong> (PostHog, hébergé dans l'UE) : un identifiant technique lié à ton compte et l'adresse IP de la connexion, sans ton nom ni ton e-mail ; utilisées uniquement pour comprendre l'usage de l'app et l'améliorer ; jamais vendues ni utilisées pour de la publicité. Base légale : notre intérêt légitime. Tu peux demander leur suppression à contact@attax.app.</p>
          <p style={P}><strong>Données de support et de sécurité :</strong> les messages que tu nous envoies, et les signalements ou blocages que tu effectues sur d'autres joueurs.</p>
          <p style={P}><strong>Site web :</strong> si tu utilises le formulaire de contact, ton nom, ton adresse e-mail, l'objet et ton message ; si tu t'inscris sur la liste d'attente, ton adresse e-mail et ta langue. Comme pour tout site, notre hébergeur traite aussi des données techniques de connexion (comme ton adresse IP) pour afficher et sécuriser le site.</p>
          <p style={P}>Nous ne collectons ni ta position (tu choisis ton pays toi-même), ni tes contacts, ni ta caméra ou ton micro, ni aucun identifiant publicitaire. Ta photo de profil est choisie dans ta galerie via le sélecteur du système. Nous n'affichons aucune publicité et ne te suivons pas sur d'autres applications ou sites.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>3. Utilisation des données</h2>
          <ul style={UL}>
            <li><strong>Faire fonctionner le jeu :</strong> calculer tes points d'activité, trancher tes matchs quotidiens, mettre à jour les ligues, les classements et ton rang, te placer dans des ligues de ton niveau (ton année de naissance, ton sexe et tes réponses au questionnaire servent à adapter le jeu à toi), faire fonctionner le binôme et la saison.</li>
            <li><strong>Montrer ton profil et tes résultats</strong> aux autres joueurs (voir section 5).</li>
            <li><strong>T'envoyer des notifications</strong> sur tes matchs, tes cartes et tes résultats (tu peux les désactiver dans l'app ou dans les réglages de ton téléphone).</li>
            <li><strong>Garantir un jeu équitable et sûr :</strong> détecter la triche, traiter les signalements et les blocages.</li>
            <li><strong>Corriger les problèmes et améliorer l'app</strong> grâce aux rapports d'erreur et aux statistiques d'usage.</li>
            <li><strong>Répondre à tes messages</strong> envoyés depuis l'app ou le site, et gérer la liste d'attente.</li>
          </ul>
          <p style={P}>Bases légales (RGPD) : l'exécution de notre contrat avec toi (faire fonctionner le jeu et ton compte), ton consentement explicite pour les données de santé (que tu peux retirer à tout moment), et notre intérêt légitime pour les statistiques d'usage, les rapports d'erreur, la sécurité, la prévention de la fraude et la réponse à tes messages.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>4. Données de santé (Apple Santé / HealthKit et Health Connect)</h2>
          <p style={P}>Les données de santé servent <strong>uniquement</strong> à calculer tes points d'activité et à faire fonctionner tes matchs, classements, ta série, le binôme, la saison et ton historique d'activité dans Attax.</p>
          <ul style={UL}>
            <li>Elles ne sont jamais vendues, jamais utilisées pour de la publicité ou du marketing, et jamais partagées avec des courtiers ou revendeurs de données.</li>
            <li>Elles ne sont jamais utilisées pour évaluer une solvabilité, une assurance ou une embauche.</li>
            <li>Elles ne sont pas stockées dans iCloud et ne sont transmises qu'à nos propres serveurs pour calculer tes résultats.</li>
            <li>Elles ne sont jamais envoyées à notre outil de statistiques.</li>
          </ul>
          <p style={P}>L'utilisation des informations reçues de Health Connect respecte la <a href="https://support.google.com/googleplay/android-developer/answer/12991134" style={LINK}>politique d'autorisations Health Connect</a>, y compris les exigences d'utilisation limitée. L'utilisation des données HealthKit respecte les règles de l'App Store d'Apple.</p>
          <p style={P}><strong>Consentement :</strong> nous ne traitons tes données de santé qu'avec ton consentement explicite, donné en cochant une case dédiée à la création de ton compte. Tu peux retirer l'accès à tout moment dans l'app Santé (iPhone) ou dans les réglages de Health Connect (Android), et retirer ton consentement en supprimant ton compte ; les données déjà synchronisées restent liées à ton compte jusqu'à sa suppression (voir section 9). Voir aussi notre <Link href="/health-data-privacy" style={LINK}>politique relative aux données de santé</Link>.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>5. Ce que voient les autres joueurs</h2>
          <ul style={UL}>
            <li><strong>Ton profil :</strong> pseudo, photo de profil, pays, rang, résultats, série, badges, trophées, couronne et les sports que tu choisis d'afficher.</li>
            <li><strong>Dans tes ligues :</strong> tes points, tes résultats et ton classement.</li>
            <li><strong>Dans un match :</strong> ton adversaire du jour voit tes points d'activité, la courbe cardiaque de ta séance pour ce match et ton type de séance du jour, ainsi que les messages que tu lui envoies.</li>
            <li><strong>Binôme :</strong> ton binôme voit si tu as atteint ton objectif du jour et les messages que tu lui envoies.</li>
            <li><strong>Saison :</strong> si tu participes à la saison, tous les joueurs de la saison peuvent voir ton pseudo, ta photo de profil, ton pays, ton total de points et ta place au classement mondial. Ce classement peut aussi être filtré par rang, par sexe et par tranche d'âge : ton sexe et ta tranche d'âge servent donc à te placer dans ces vues filtrées, sans être affichés.</li>
          </ul>
          <p style={P}>Ton adresse e-mail, ton nom, ton année de naissance et tes autres données de santé ne sont jamais montrés aux autres joueurs. Quand tu partages l'image d'un résultat, elle est créée sur ton téléphone et partagée uniquement là où tu le choisis.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>6. Prestataires</h2>
          <p style={P}>Nous ne partageons des données qu'avec les prestataires qui font fonctionner Attax pour nous (sous-traitants), sous contrat et uniquement dans ce but :</p>
          <ul style={UL}>
            <li><strong>Supabase</strong> — base de données, authentification, stockage de fichiers (photos de profil) et fonctions serveur (serveurs dans l'Union européenne, à Paris).</li>
            <li><strong>PostHog</strong> — statistiques d'usage pseudonymisées et rapports d'erreur (hébergement dans l'UE). Ni les données de santé, ni ton nom, ni ton adresse e-mail ne sont envoyés à PostHog.</li>
            <li><strong>Amazon Web Services (Amazon SES)</strong> — envoi des e-mails de l'app (e-mails de compte, messages au support, signalements).</li>
            <li><strong>Expo</strong>, <strong>Google Firebase Cloud Messaging</strong> et <strong>Apple Push Notification service</strong> — acheminement des notifications (jeton de notifications et contenu de la notification) ; Expo distribue aussi les mises à jour de l'app.</li>
            <li><strong>Cloudflare (R2)</strong> — stockage et distribution des fichiers de mise à jour de l'app.</li>
            <li><strong>Apple</strong> et <strong>Google</strong> — connexion, uniquement si tu choisis « Se connecter avec Apple » ou Google, et accès à Apple Santé ou Health Connect sur ton téléphone.</li>
            <li><strong>Vercel</strong> — hébergement du site attax.app ; <strong>Resend</strong> — acheminement vers notre boîte de réception des messages envoyés via les formulaires du site.</li>
          </ul>
          <p style={P}>Nous ne vendons pas tes données personnelles. Certains de ces prestataires sont établis aux États-Unis ou peuvent y traiter des données. Lorsque des données personnelles sont transférées hors de l'Union européenne, le transfert repose sur les garanties prévues par le RGPD, comme les clauses contractuelles types de la Commission européenne ou, pour les prestataires certifiés, le cadre de protection des données UE–États-Unis (Data Privacy Framework). Tu peux nous demander plus d'informations à contact@attax.app.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>7. Durée de conservation</h2>
          <p style={P}>Nous conservons tes données de compte, de santé et de jeu tant que ton compte existe. Quand tu supprimes ton compte, elles sont supprimées de notre base immédiatement, et des sauvegardes sous 30 jours. Les scores des matchs passés, qui appartiennent aussi à tes anciens adversaires, sont conservés sans plus aucun lien avec toi. Les statistiques d'usage pseudonymisées et rapports d'erreur ne sont liés qu'à un identifiant technique (jamais à ton e-mail ni à ton nom) et sont conservés pour une durée limitée ; tu peux demander leur suppression à contact@attax.app. Les messages envoyés par e-mail ou via le site sont conservés le temps nécessaire pour te répondre. Les adresses de la liste d'attente sont conservées jusqu'à l'envoi de l'information de lancement de l'app, ou jusqu'à ce que tu nous demandes de retirer la tienne.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>8. Tes droits</h2>
          <p style={P}>Tu peux accéder à tes données personnelles, les rectifier, les exporter ou les supprimer, t'opposer à leur traitement ou le limiter, et retirer ton consentement à tout moment. Tu peux corriger la plupart de ton profil directement dans l'app. Pour toute autre demande, écris-nous à <a href="mailto:contact@attax.app" style={LINK}>contact@attax.app</a>. Tu peux aussi introduire une réclamation auprès de ton autorité de protection des données (en France, la CNIL).</p>
        </div>

        <div style={SECTION} id="delete-account">
          <h2 style={H2}>9. Supprimer ton compte</h2>
          <p style={P}><strong>Dans l'app :</strong> ouvre Attax, touche ta photo de profil en haut de l'Accueil → <em>Mon compte</em> → <em>Éditer le profil</em> (appelé <em>Mon profil</em> dans les versions précédentes) → <em>Supprimer mon compte</em> (en bas de la page), puis confirme. La suppression est immédiate.</p>
          <p style={P}><strong>Sans l'app :</strong> écris à <a href="mailto:contact@attax.app?subject=Supprimer%20mon%20compte%20Attax" style={LINK}>contact@attax.app</a> depuis l'adresse e-mail de ton compte, avec l'objet « Supprimer mon compte Attax ». Nous le supprimons sous 7 jours et te le confirmons par e-mail.</p>
          <p style={P}>Ce qui est supprimé : ton compte (e-mail, mot de passe, pseudo, nom, pays, année de naissance, sexe, réponses au questionnaire), ta photo de profil, toutes tes données de santé et d'activité, tes points, cartes, série, récompenses, données de saison et de binôme, messages et réactions (envoyés et reçus), classements, notifications, signalements, blocages et jetons de notifications. Si tu utilisais « Se connecter avec Apple », ton autorisation Apple est révoquée. Les scores des matchs passés sont conservés sans plus aucun lien avec toi.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>10. Sécurité</h2>
          <p style={P}>Les données sont chiffrées en transit (HTTPS) et au repos, l'accès est protégé par une sécurité au niveau de chaque ligne de notre base de données, et les champs privés (e-mail, nom, année de naissance, sexe) ne sont jamais lisibles par les autres utilisateurs.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>11. Âge minimum</h2>
          <p style={P}>Attax est destiné aux personnes de 16 ans et plus. Nous ne collectons pas sciemment de données sur des personnes de moins de 16 ans ; si tu penses qu'une personne de moins de 16 ans a créé un compte, contacte-nous et nous le supprimerons.</p>
        </div>

        <div style={SECTION}>
          <h2 style={H2}>12. Modifications et contact</h2>
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
