"use client";

import Image from "next/image";
import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

const BODY: React.CSSProperties = { fontSize: "1.0625rem", color: "#444", lineHeight: 1.85, margin: "0 0 1.25rem" };
const BODY_EM: React.CSSProperties = { ...BODY, color: "#1a1a1a", fontWeight: 500 };
const RULE: React.CSSProperties = { border: "none", borderTop: "1px solid #ebebeb", margin: "5rem 0" };
const LABEL_STYLE: React.CSSProperties = { fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: "1.25rem" };

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="seo-section-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
      <div style={{ paddingTop: "0.3rem" }}><span style={LABEL_STYLE}>{label}</span></div>
      <div>{children}</div>
    </div>
  );
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>{children}</h2>;
}

type Lang = "en" | "fr";

const P: Record<Lang, {
  heroLabel: string;
  heroTitle: string;
  heroSubtitle1: string;
  heroSubtitle2: string;
  heroCta: string;
  secWhatItIs: string;
  whatItIsH2: string;
  whatItIs1: string;
  whatItIs2: string;
  whatItIs3: string;
  whatItIs4: string;
  whatItIs5: string;
  whatItIs6: string;
  secHowItConnects: string;
  howItConnectsH2: string;
  howItConnects1: string;
  howItConnects2: string;
  howItConnects3: string;
  activities: string[];
  howItConnectsEm: string;
  howItConnectsClosing: string;
  secWhyUsers: string;
  whyUsersH2: string;
  whyUsers1: string;
  whyUsers2: string;
  whyUsers3: string;
  whyUsersQ: string;
  whyUsersA: string;
  whyUsers4: string;
  secActivityToComp: string;
  activityToCompH2: string;
  activityToComp1: string;
  activityToCompEm: string;
  activityToComp2: string;
  secLongTerm: string;
  longTermH2: string;
  longTerm1: string;
  longTerm2: string;
  platformItems: { title: string; body: string }[];
  longTerm3: string;
  secWhyComp: string;
  whyCompH2: string;
  whyCompEm1: string;
  whyComp1: string;
  whyCompEm2: string;
  whyComp2: string;
  secFaq: string;
  faqH2: string;
  faq: { q: string; a: string }[];
  finalH2: string;
  finalBody: string;
  finalCta: string;
  learnMore: string;
}> = {
  en: {
    heroLabel: "APPLE HEALTH FITNESS GAME",
    heroTitle: "The fitness game powered by Apple Health.",
    heroSubtitle1: "Attax turns your Apple Health activity into a daily duel against a player of your league.",
    heroSubtitle2: "Every workout counts. Every step adds up. Every evening, a duel to win.",
    heroCta: "Download on App Store",
    secWhatItIs: "What It Is",
    whatItIsH2: "What is an Apple Health fitness game?",
    whatItIs1: "Most applications connected to Apple Health focus on tracking. They collect information. Display statistics. Generate reports.",
    whatItIs2: "Attax takes a different approach.",
    whatItIs3: "Instead of simply recording activity, Attax transforms movement into a competitive experience. Your Apple Health data becomes part of a larger system built around motivation, progression, and competition.",
    whatItIs4: "The result is simple.",
    whatItIs5: "Activity gains purpose.",
    whatItIs6: "Every workout contributes to something meaningful.",
    secHowItConnects: "How It Connects",
    howItConnectsH2: "How Apple Health works with Attax",
    howItConnects1: "Apple Health serves as the foundation for activity synchronization.",
    howItConnects2: "Once connected, Attax reads two things from Apple Health: your heart rate and your steps. It never writes anything back.",
    howItConnects3: "Your watch records the effort, whatever the sport:",
    activities: [
      "Running",
      "Cycling",
      "Gym workouts",
      "Swimming",
      "Team sports",
      "Walking (steps)",
    ],
    howItConnectsEm: "No manual tracking is required.\nNo spreadsheets.\nNo repetitive data entry.",
    howItConnectsClosing: "Before your first league, Attax checks that your heart rate comes through. After that, it syncs every time you open the app. Move in real life. Win inside Attax.",
    secWhyUsers: "Why Users Love It",
    whyUsersH2: "Why Apple Health users love Attax",
    whyUsers1: "Apple Health already provides excellent activity tracking. The challenge is motivation.",
    whyUsers2: "Many users collect months or years of fitness data but eventually stop engaging with it. The information becomes passive.",
    whyUsers3: "Attax transforms that data into action.",
    whyUsersQ: "“How many steps did I take?”",
    whyUsersA: "“Can I win today?”",
    whyUsers4: "This small change creates a completely different experience.",
    secActivityToComp: "Activity to Competition",
    activityToCompH2: "Turn activity into competition",
    activityToComp1: "Every day provides a new opportunity to progress.",
    activityToCompEm: "Every minute of effort earns points.\nYour last 7 days face your opponent's.\nWins move you up the standings.\nYour rank climbs from Rookie to Legend.",
    activityToComp2: "The result is a fitness experience that feels engaging long after traditional tracking applications lose their appeal.",
    secLongTerm: "Long-Term",
    longTermH2: "Built for long-term motivation",
    longTerm1: "The biggest challenge in fitness is not starting. It is continuing.",
    longTerm2: "Attax was designed around sustainable engagement. The platform combines:",
    platformItems: [
      { title: "Real-world activity", body: "Heart rate and steps from Apple Health are your only source of points." },
      { title: "Daily duels", body: "A new opponent every morning, a verdict every night at 9:30 PM." },
      { title: "Competitive systems", body: "Leagues of 8 players and a global rank from Rookie to Legend." },
      { title: "Visible progression", body: "Your sessions, heart-rate zones and points, day by day." },
      { title: "Strategic decisions", body: "3 cards drawn every morning, one to play before 1 PM." },
    ],
    longTerm3: "These elements work together to create a reason to stay active.",
    secWhyComp: "Why Competition",
    whyCompH2: "Why competition matters",
    whyCompEm1: "Competition creates accountability.\nCompetition creates focus.\nCompetition creates engagement.",
    whyComp1: "When activity influences outcomes, movement becomes more rewarding.",
    whyCompEm2: "A workout is no longer just a workout.\nIt becomes part of a larger competitive journey.",
    whyComp2: "This principle sits at the center of Attax.",
    secFaq: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "Does Attax work with Apple Health?", a: "Yes. Attax reads your heart rate and your steps from Apple Health." },
      { q: "What activities count?", a: "Any activity that raises your heart rate: running, cycling, gym, swimming, team sports, dance… plus your steps, all day." },
      { q: "Do I need an Apple Watch?", a: "You need a device that measures your heart rate and syncs it to Apple Health: an Apple Watch, or a Garmin, Amazfit, COROS or Withings watch, among others. Fitbit doesn't sync with Apple Health. On Apple Watch models before Series 12, start a workout in the Workout app so your sessions count in full." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads." },
      { q: "Is Attax available on iPhone?", a: "Yes." },
      { q: "Does Attax automatically sync activity?", a: "Yes. Attax reads Apple Health every time you open the app — no manual entry." },
    ],
    finalH2: "Turn Apple Health into a game.",
    finalBody: "Turn your Apple Health activity into daily duels. Download Attax and start your first league.",
    finalCta: "Download on App Store",
    learnMore: "Learn More",
  },
  fr: {
    heroLabel: "JEU FITNESS APPLE SANTÉ",
    heroTitle: "Le jeu de fitness propulsé par Apple Santé.",
    heroSubtitle1: "Attax transforme ton activité Apple Santé en un duel quotidien contre un joueur de ta ligue.",
    heroSubtitle2: "Chaque séance compte. Chaque pas s'additionne. Chaque soir, un duel à gagner.",
    heroCta: "Télécharger sur l'App Store",
    secWhatItIs: "C'est quoi",
    whatItIsH2: "Qu'est-ce qu'un jeu de fitness Apple Santé ?",
    whatItIs1: "La plupart des applications connectées à Apple Santé se concentrent sur le suivi. Elles collectent des informations. Affichent des statistiques. Génèrent des rapports.",
    whatItIs2: "Attax adopte une approche différente.",
    whatItIs3: "Au lieu de simplement enregistrer l'activité, Attax transforme le mouvement en expérience compétitive. Tes données Apple Santé font partie d'un système plus large construit autour de la motivation, de la progression et de la compétition.",
    whatItIs4: "Le résultat est simple.",
    whatItIs5: "L'activité prend un sens.",
    whatItIs6: "Chaque entraînement contribue à quelque chose de concret.",
    secHowItConnects: "La connexion",
    howItConnectsH2: "Comment Apple Santé fonctionne avec Attax",
    howItConnects1: "Apple Santé sert de base à la synchronisation de l'activité.",
    howItConnects2: "Une fois connecté, Attax lit deux choses dans Apple Santé : ta fréquence cardiaque et tes pas. Il n'y écrit jamais rien.",
    howItConnects3: "Ta montre enregistre l'effort, quel que soit le sport :",
    activities: [
      "Course",
      "Vélo",
      "Muscu",
      "Natation",
      "Sports collectifs",
      "Marche (pas)",
    ],
    howItConnectsEm: "Aucun suivi manuel n'est nécessaire.\nPas de tableurs.\nPas de saisie répétitive.",
    howItConnectsClosing: "Avant ta première ligue, Attax vérifie que ta fréquence cardiaque arrive bien. Ensuite, la synchro se fait à chaque ouverture de l'app. Bouge dans la vraie vie. Gagne dans Attax.",
    secWhyUsers: "Pourquoi ils adorent",
    whyUsersH2: "Pourquoi les utilisateurs d'Apple Santé adorent Attax",
    whyUsers1: "Apple Santé offre déjà un excellent suivi d'activité. Le défi, c'est la motivation.",
    whyUsers2: "Beaucoup d'utilisateurs accumulent des mois ou des années de données fitness mais finissent par ne plus s'y intéresser. L'information devient passive.",
    whyUsers3: "Attax transforme ces données en action.",
    whyUsersQ: "« Combien de pas ai-je faits ? »",
    whyUsersA: "« Est-ce que je peux gagner aujourd'hui ? »",
    whyUsers4: "Ce petit changement crée une expérience totalement différente.",
    secActivityToComp: "Activité et compétition",
    activityToCompH2: "Transforme l'activité en compétition",
    activityToComp1: "Chaque jour offre une nouvelle opportunité de progresser.",
    activityToCompEm: "Chaque minute d'effort rapporte des points.\nTes 7 derniers jours affrontent ceux de ton adversaire.\nLes victoires te font monter au classement.\nTon rang grimpe de Rookie à Legend.",
    activityToComp2: "Le résultat est une expérience fitness qui reste engageante bien après que les applications de suivi traditionnelles perdent leur attrait.",
    secLongTerm: "Long terme",
    longTermH2: "Conçu pour une motivation durable",
    longTerm1: "Le plus grand défi du fitness n'est pas de commencer. C'est de continuer.",
    longTerm2: "Attax a été conçu autour d'un engagement durable. La plateforme combine :",
    platformItems: [
      { title: "Activité réelle", body: "La fréquence cardiaque et les pas d'Apple Santé sont ta seule source de points." },
      { title: "Duels quotidiens", body: "Un nouvel adversaire chaque matin, un verdict chaque soir à 21h30." },
      { title: "Systèmes compétitifs", body: "Des ligues de 8 joueurs et un rang global de Rookie à Legend." },
      { title: "Progression visible", body: "Tes séances, tes zones cardio et tes points, jour après jour." },
      { title: "Décisions stratégiques", body: "3 cartes tirées chaque matin, une à jouer avant 13h." },
    ],
    longTerm3: "Ces éléments fonctionnent ensemble pour créer une raison de rester actif.",
    secWhyComp: "Pourquoi la compétition",
    whyCompH2: "Pourquoi la compétition est importante",
    whyCompEm1: "La compétition crée de la responsabilité.\nLa compétition crée de la concentration.\nLa compétition crée de l'engagement.",
    whyComp1: "Quand l'activité influence les résultats, le mouvement devient plus gratifiant.",
    whyCompEm2: "Un entraînement n'est plus seulement un entraînement.\nIl fait partie d'un parcours compétitif plus large.",
    whyComp2: "Ce principe est au cœur d'Attax.",
    secFaq: "FAQ",
    faqH2: "Questions fréquentes",
    faq: [
      { q: "Attax fonctionne-t-il avec Apple Santé ?", a: "Oui. Attax lit ta fréquence cardiaque et tes pas dans Apple Santé." },
      { q: "Quelles activités comptent ?", a: "Toute activité qui fait monter ton cœur : course, vélo, muscu, natation, sports collectifs, danse… plus tes pas, toute la journée." },
      { q: "Ai-je besoin d'une Apple Watch ?", a: "Il te faut un appareil qui mesure ta fréquence cardiaque et l'envoie à Apple Santé : une Apple Watch, ou une montre Garmin, Amazfit, COROS ou Withings, entre autres. Fitbit ne se synchronise pas avec Apple Santé. Sur les Apple Watch antérieures à la Series 12, lance un exercice dans l'app Exercice pour que tes séances comptent entièrement." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité." },
      { q: "Attax est-il disponible sur iPhone ?", a: "Oui." },
      { q: "La synchro est-elle automatique ?", a: "Oui. Attax lit Apple Santé à chaque ouverture de l'app — aucune saisie manuelle." },
    ],
    finalH2: "Transforme Apple Santé en jeu.",
    finalBody: "Transforme ton activité Apple Santé en duels quotidiens. Télécharge Attax et lance ta première ligue.",
    finalCta: "Télécharger sur l'App Store",
    learnMore: "En savoir plus",
  },
};

export default function AppleHealthFitnessGame() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "60vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Image src="/images/runsunrise.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.22) grayscale(0.25)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.6) 55%, rgba(5,5,5,0.25) 100%)" }} />
          <PageNavbar />
          <div className="hero-text-box" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem 4rem", maxWidth: "720px" }}>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>{p.heroLabel}</span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 1.5rem" }}>
              {p.heroTitle}
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 0.75rem", maxWidth: "540px" }}>
              {p.heroSubtitle1}
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.32)", lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "480px" }}>
              {p.heroSubtitle2}
            </p>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", alignSelf: "flex-start" }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {p.heroCta}
            </a>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "7rem 4rem" }}>

          <Section label={p.secWhatItIs}>
            <H2>{p.whatItIsH2}</H2>
            <p style={BODY}>{p.whatItIs1}</p>
            <p style={BODY}>{p.whatItIs2}</p>
            <p style={BODY}>{p.whatItIs3}</p>
            <p style={BODY}>{p.whatItIs4}</p>
            <p style={BODY_EM}>{p.whatItIs5}<br />{p.whatItIs6}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secHowItConnects}>
            <H2>{p.howItConnectsH2}</H2>
            <p style={BODY}>{p.howItConnects1}</p>
            <p style={BODY}>{p.howItConnects2}</p>
            <p style={BODY}>{p.howItConnects3}</p>
            <div style={{ margin: "1.5rem 0 2rem" }}>
              {p.activities.map((a) => (
                <div key={a} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid #f0f0f0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
                  <span style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: 500 }}>{a}</span>
                </div>
              ))}
            </div>
            <p style={BODY_EM}>{p.howItConnectsEm.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.howItConnectsClosing}</p>
          </Section>

          <hr style={RULE} />

          <div style={{ position: "relative", height: "clamp(380px, 52vh, 620px)", overflow: "hidden", borderRadius: "20px", margin: "5rem 0" }}>
            <Image src="/images/runnnnnn.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 50%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.72) 100%)" }} />
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.75rem", right: "2.75rem", zIndex: 1 }}>
              <p style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.3, maxWidth: "580px", margin: 0 }}>
                "Every run, every ride, every walk — now part of your game."
              </p>
            </div>
          </div>

          <Section label={p.secWhyUsers}>
            <H2>{p.whyUsersH2}</H2>
            <p style={BODY}>{p.whyUsers1}</p>
            <p style={BODY}>{p.whyUsers2}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.whyUsers3}</p>
            <p style={BODY}>Instead of asking: <em>{p.whyUsersQ}</em></p>
            <p style={{ ...BODY, fontWeight: 700, color: "#0d0d0d", fontSize: "1.125rem" }}>Players begin asking: <em>{p.whyUsersA}</em></p>
            <p style={BODY}>{p.whyUsers4}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secActivityToComp}>
            <H2>{p.activityToCompH2}</H2>
            <p style={BODY}>{p.activityToComp1}</p>
            <p style={BODY_EM}>{p.activityToCompEm.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.activityToComp2}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secLongTerm}>
            <H2>{p.longTermH2}</H2>
            <p style={BODY}>{p.longTerm1}</p>
            <p style={BODY}>{p.longTerm2}</p>
            <div style={{ marginTop: "2rem" }}>
              {p.platformItems.map((item, i) => (
                <div key={item.title} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1.5rem", padding: "1.75rem 0", borderTop: "1px solid #f0f0f0" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ccc", paddingTop: "3px" }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>{item.title}</h3>
                    <p style={{ ...BODY, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: "2rem" }}>{p.longTerm3}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secWhyComp}>
            <H2>{p.whyCompH2}</H2>
            <p style={BODY_EM}>{p.whyCompEm1.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.whyComp1}</p>
            <p style={BODY_EM}>{p.whyCompEm2.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.whyComp2}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secFaq}>
            <H2>{p.faqH2}</H2>
            <div>
              {p.faq.map((item) => (
                <div key={item.q} style={{ borderBottom: "1px solid #f0f0f0", padding: "1.5rem 0" }}>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0d0d0d", margin: "0 0 0.5rem" }}>{item.q}</p>
                  <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          <div style={{ textAlign: "center", padding: "3rem 0 2rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.05, margin: "0 0 1.25rem" }}>{p.finalH2}</h2>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 auto 2.5rem", maxWidth: "400px" }}>{p.finalBody}</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {p.finalCta}
              </a>
              <Link href="/discover" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#f4f4f4", color: "#0d0d0d", fontWeight: 600, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
                {p.learnMore}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
