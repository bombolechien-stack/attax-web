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
  secHowItConnects: string;
  howItConnectsH2: string;
  howItConnects1: string;
  howItConnects2: string;
  howItConnectsEm: string;
  secProgression: string;
  progressionH2: string;
  progression1: string;
  progressionEm: string;
  progression2: string;
  secWhyAndroid: string;
  whyAndroidH2: string;
  whyAndroid1: string;
  androidSources: string[];
  whyAndroid2: string;
  whyAndroidEm: string;
  secDaily: string;
  dailyH2: string;
  daily1: string;
  dailyEm: string;
  daily2: string;
  daily3: string;
  secLongTerm: string;
  longTermH2: string;
  longTerm1: string;
  longTerm2: string;
  longTermEm: string;
  longTerm3: string;
  secWhyItWorks: string;
  whyItWorksH2: string;
  whyItWorks1: string;
  gamificationItems: { label: string; desc: string }[];
  whyItWorks2: string;
  secFaq: string;
  faqH2: string;
  faq: { q: string; a: string }[];
  finalH2: string;
  finalBody: string;
  finalCta: string;
  learnMore: string;
}> = {
  en: {
    heroLabel: "HEALTH CONNECT FITNESS GAME",
    heroTitle: "The fitness game built for Android.",
    heroSubtitle1: "Connect your watch through Health Connect and turn every session into a daily duel against a player of your league.",
    heroSubtitle2: "Every workout counts. Every step adds up. Every evening, a verdict at 9:30 PM.",
    heroCta: "Get it on Google Play",
    secWhatItIs: "What It Is",
    whatItIsH2: "What is a Health Connect fitness game?",
    whatItIs1: "Health Connect allows Android applications to securely access activity and health information.",
    whatItIs2: "Most applications use this data for tracking. Attax uses it for competition.",
    whatItIs3: "By connecting activity data to game systems, rankings, progression, and challenges, Attax creates a new type of fitness experience.",
    whatItIs4: "One where movement has consequences.",
    secHowItConnects: "How It Connects",
    howItConnectsH2: "How Health Connect works with Attax",
    howItConnects1: "Attax integrates with Health Connect to synchronize physical activity automatically.",
    howItConnects2: "Attax reads two things from Health Connect: your heart rate and your steps, written there by your watch app (Garmin Connect, Samsung Health, Fitbit, Zepp, COROS…). Nothing is written back.",
    howItConnectsEm: "Simply stay active.\nThe platform handles the rest.",
    secProgression: "Progression",
    progressionH2: "Activity becomes progression",
    progression1: "Traditional fitness applications often focus exclusively on measurement. Attax focuses on motivation.",
    progressionEm: "Movement contributes to competitive performance.\nConsistency contributes to rankings.\nActivity contributes to long-term progression.",
    progression2: "The system transforms exercise into something more engaging than a simple statistic.",
    secWhyAndroid: "Why Android Users",
    whyAndroidH2: "Why Android users choose Attax",
    whyAndroid1: "Many Android users already collect activity data through:",
    androidSources: ["Smartwatches", "Fitness trackers", "Running applications", "Cycling applications", "Health platforms"],
    whyAndroid2: "Attax provides a new purpose for that activity.",
    whyAndroidEm: "Instead of accumulating data, players accumulate progress.\nInstead of tracking movement, players compete through movement.",
    secDaily: "Daily",
    dailyH2: "Daily competition",
    daily1: "Every day creates new opportunities.",
    dailyEm: "A new opponent.\nThree new cards.\nA new verdict at 9:30 PM.",
    daily2: "The competitive environment evolves continuously. This helps maintain engagement while encouraging healthy habits.",
    daily3: "The goal is not perfection. The goal is consistency.",
    secLongTerm: "Long-Term",
    longTermH2: "Long-term progression",
    longTerm1: "The most rewarding systems provide visible growth.",
    longTerm2: "Your league standings move every evening, and your global rank climbs from Rookie to Legend, league after league.",
    longTermEm: "Every active day contributes.\nEvery effort counts.",
    longTerm3: "The result is a fitness experience designed around long-term participation rather than short-term motivation.",
    secWhyItWorks: "Why It Works",
    whyItWorksH2: "Why gamified fitness works",
    whyItWorks1: "Gamification introduces:",
    gamificationItems: [
      { label: "Goals", desc: "Clear objectives keep players engaged." },
      { label: "Progress", desc: "Visible advancement creates satisfaction." },
      { label: "Competition", desc: "Opponents provide accountability and motivation." },
      { label: "Feedback", desc: "Immediate results reinforce consistent behavior." },
      { label: "Achievement", desc: "Milestones reward long-term participation." },
    ],
    whyItWorks2: "Attax combines these principles with real-world movement to create a unique fitness experience for Android users.",
    secFaq: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "Does Attax work with Health Connect?", a: "Yes. Attax reads your heart rate and your steps from Health Connect." },
      { q: "What activities are supported?", a: "Any activity that raises your heart rate: running, cycling, gym, swimming, team sports, dance… plus your steps, all day." },
      { q: "Do I need a smartwatch?", a: "Yes: a device whose app shares heart rate with Health Connect — Garmin, Samsung Galaxy Watch, Fitbit and Pixel Watch, Wear OS watches, Amazfit, COROS and more. Some brands (Xiaomi, Polar) only share heart rate during workouts, so start a session on your watch. Huawei is not supported on Android." },
      { q: "Is Attax available on Android?", a: "Yes, on Android 8.0 or later." },
      { q: "Is activity synchronized automatically?", a: "Yes. Once access is granted, Attax reads Health Connect every time you open the app." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads." },
    ],
    finalH2: "Turn Health Connect into competition.",
    finalBody: "Turn activity into duels. Turn consistency into victories. Download Attax on Android.",
    finalCta: "Get it on Google Play",
    learnMore: "Learn More",
  },
  fr: {
    heroLabel: "JEU FITNESS HEALTH CONNECT",
    heroTitle: "Le jeu de fitness conçu pour Android.",
    heroSubtitle1: "Connecte ta montre via Health Connect et transforme chaque séance en duel quotidien contre un joueur de ta ligue.",
    heroSubtitle2: "Chaque séance compte. Chaque pas s'additionne. Chaque soir, un verdict à 21h30.",
    heroCta: "Obtenir sur Google Play",
    secWhatItIs: "C'est quoi",
    whatItIsH2: "Qu'est-ce qu'un jeu de fitness Health Connect ?",
    whatItIs1: "Health Connect permet aux applications Android d'accéder de façon sécurisée aux données d'activité et de santé.",
    whatItIs2: "La plupart des applications utilisent ces données pour le suivi. Attax les utilise pour la compétition.",
    whatItIs3: "En connectant les données d'activité à des systèmes de jeu, classements, progression et défis, Attax crée un nouveau type d'expérience fitness.",
    whatItIs4: "Un environnement où le mouvement a des conséquences.",
    secHowItConnects: "La connexion",
    howItConnectsH2: "Comment Health Connect fonctionne avec Attax",
    howItConnects1: "Attax s'intègre à Health Connect pour synchroniser automatiquement l'activité physique.",
    howItConnects2: "Attax lit deux choses dans Health Connect : ta fréquence cardiaque et tes pas, qui y sont écrits par l'appli de ta montre (Garmin Connect, Samsung Health, Fitbit, Zepp, COROS…). Rien n'est écrit en retour.",
    howItConnectsEm: "Reste simplement actif.\nLa plateforme s'occupe du reste.",
    secProgression: "Progression",
    progressionH2: "L'activité devient progression",
    progression1: "Les applications fitness traditionnelles se concentrent souvent exclusivement sur la mesure. Attax se concentre sur la motivation.",
    progressionEm: "Le mouvement contribue à la performance compétitive.\nLa régularité contribue au classement.\nL'activité contribue à la progression à long terme.",
    progression2: "Le système transforme l'exercice en quelque chose de plus engageant qu'une simple statistique.",
    secWhyAndroid: "Pourquoi Android",
    whyAndroidH2: "Pourquoi les utilisateurs Android choisissent Attax",
    whyAndroid1: "De nombreux utilisateurs Android collectent déjà des données d'activité via :",
    androidSources: ["Montres connectées", "Trackers de fitness", "Applications de course", "Applications de vélo", "Plateformes de santé"],
    whyAndroid2: "Attax offre un nouveau sens à cette activité.",
    whyAndroidEm: "Au lieu d'accumuler des données, les joueurs accumulent de la progression.\nAu lieu de suivre le mouvement, les joueurs se battent à travers le mouvement.",
    secDaily: "Quotidien",
    dailyH2: "Compétition quotidienne",
    daily1: "Chaque jour crée de nouvelles opportunités.",
    dailyEm: "Un nouvel adversaire.\nTrois nouvelles cartes.\nUn nouveau verdict à 21h30.",
    daily2: "L'environnement compétitif évolue en continu. Cela maintient l'engagement tout en encourageant de bonnes habitudes.",
    daily3: "L'objectif n'est pas la perfection. L'objectif, c'est la régularité.",
    secLongTerm: "Long terme",
    longTermH2: "Progression à long terme",
    longTerm1: "Les systèmes les plus gratifiants offrent une croissance visible.",
    longTerm2: "Le classement de ta ligue bouge chaque soir, et ton rang global grimpe de Rookie à Legend, ligue après ligue.",
    longTermEm: "Chaque jour actif compte.\nChaque effort a de la valeur.",
    longTerm3: "Le résultat est une expérience fitness conçue pour une participation à long terme plutôt que pour une motivation à court terme.",
    secWhyItWorks: "Pourquoi ça marche",
    whyItWorksH2: "Pourquoi le fitness gamifié fonctionne",
    whyItWorks1: "La gamification introduit :",
    gamificationItems: [
      { label: "Objectifs", desc: "Des objectifs clairs maintiennent l'engagement des joueurs." },
      { label: "Progression", desc: "Une avancée visible crée de la satisfaction." },
      { label: "Compétition", desc: "Les adversaires apportent responsabilité et motivation." },
      { label: "Retour d'information", desc: "Des résultats immédiats renforcent un comportement régulier." },
      { label: "Accomplissement", desc: "Les jalons récompensent la participation à long terme." },
    ],
    whyItWorks2: "Attax combine ces principes avec le mouvement du monde réel pour créer une expérience fitness unique pour les utilisateurs Android.",
    secFaq: "FAQ",
    faqH2: "Questions fréquentes",
    faq: [
      { q: "Attax fonctionne-t-il avec Health Connect ?", a: "Oui. Attax lit ta fréquence cardiaque et tes pas dans Health Connect." },
      { q: "Quelles activités sont prises en compte ?", a: "Toute activité qui fait monter ton cœur : course, vélo, muscu, natation, sports collectifs, danse… plus tes pas, toute la journée." },
      { q: "Ai-je besoin d'une montre connectée ?", a: "Oui : un appareil dont l'appli partage la fréquence cardiaque avec Health Connect — Garmin, Samsung Galaxy Watch, Fitbit et Pixel Watch, montres Wear OS, Amazfit, COROS et d'autres. Certaines marques (Xiaomi, Polar) ne partagent la fréquence cardiaque que pendant les exercices : lance une séance sur ta montre. Huawei n'est pas compatible sur Android." },
      { q: "Attax est-il disponible sur Android ?", a: "Oui, sur Android 8.0 ou plus récent." },
      { q: "La synchro est-elle automatique ?", a: "Oui. Une fois l'accès accordé, Attax lit Health Connect à chaque ouverture de l'app." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité." },
    ],
    finalH2: "Transforme Health Connect en compétition.",
    finalBody: "Transforme ton activité en duels. Transforme ta régularité en victoires. Télécharge Attax sur Android.",
    finalCta: "Obtenir sur Google Play",
    learnMore: "En savoir plus",
  },
};

export default function HealthConnectFitnessGame() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "60vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Image src="/images/cycling-portrait.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.22) grayscale(0.25)" }} />
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
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", alignSelf: "flex-start" }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/></svg>
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
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.whatItIs4}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secHowItConnects}>
            <H2>{p.howItConnectsH2}</H2>
            <p style={BODY}>{p.howItConnects1}</p>
            <p style={BODY}>{p.howItConnects2}</p>
            <p style={BODY_EM}>{p.howItConnectsEm.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
          </Section>

          <hr style={RULE} />

          <div style={{ position: "relative", height: "clamp(380px, 52vh, 620px)", overflow: "hidden", borderRadius: "20px", margin: "5rem 0" }}>
            <Image src="/images/grimper.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 20%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.72) 100%)" }} />
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.75rem", right: "2.75rem", zIndex: 1 }}>
              <p style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.3, maxWidth: "580px", margin: 0 }}>
                "Whatever your sport, it all counts. Health Connect tracks it all."
              </p>
            </div>
          </div>

          <Section label={p.secProgression}>
            <H2>{p.progressionH2}</H2>
            <p style={BODY}>{p.progression1}</p>
            <p style={BODY_EM}>{p.progressionEm.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.progression2}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secWhyAndroid}>
            <H2>{p.whyAndroidH2}</H2>
            <p style={BODY}>{p.whyAndroid1}</p>
            <div style={{ margin: "1.5rem 0 2rem" }}>
              {p.androidSources.map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid #f0f0f0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
                  <span style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
            <p style={BODY}>{p.whyAndroid2}</p>
            <p style={BODY_EM}>{p.whyAndroidEm.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secDaily}>
            <H2>{p.dailyH2}</H2>
            <p style={BODY}>{p.daily1}</p>
            <p style={BODY_EM}>{p.dailyEm.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.daily2}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.daily3}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secLongTerm}>
            <H2>{p.longTermH2}</H2>
            <p style={BODY}>{p.longTerm1}</p>
            <p style={BODY}>{p.longTerm2}</p>
            <p style={BODY_EM}>{p.longTermEm.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.longTerm3}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secWhyItWorks}>
            <H2>{p.whyItWorksH2}</H2>
            <p style={BODY}>{p.whyItWorks1}</p>
            <div style={{ marginTop: "2rem" }}>
              {p.gamificationItems.map((g, i) => (
                <div key={g.label} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1.5rem", padding: "1.5rem 0", borderTop: "1px solid #f0f0f0" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ccc", paddingTop: "3px" }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.4rem", letterSpacing: "-0.02em" }}>{g.label}</h3>
                    <p style={{ ...BODY, margin: 0 }}>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: "2rem" }}>{p.whyItWorks2}</p>
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
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z"/></svg>
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
