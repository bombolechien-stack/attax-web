"use client";

// Jeu de fitness Health Connect (21/11) : système de l'accueil (src/components/site/Site.tsx). Textes inchangés (P).
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import "../site-seo-b.css";
import { SitePage, PageHero, ScanBg, Block, Lines, HairList, FinalCta, PlayIcon } from "@/components/site/Site";

function heroTitle(s: string) {
  const l = s.split("\n");
  return <>{l.map((x, i) => <span key={i}>{i === l.length - 1 && l.length > 1 ? <em>{x}</em> : x}</span>)}</>;
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
    heroTitle: "The fitness game\nbuilt for Android.",
    heroSubtitle1: "Your workouts become a fight. Connect your watch through Health Connect and turn every session into a daily boxing duel against a player of your league.",
    heroSubtitle2: "Every workout counts. Every step adds up. Every evening at 9:30 PM, Fight Night.",
    heroCta: "Get it on Google Play",
    secWhatItIs: "What It Is",
    whatItIsH2: "What is a Health Connect fitness game?",
    whatItIs1: "Health Connect allows Android applications to securely access activity and health information.",
    whatItIs2: "Most applications use this data for tracking. Attax uses it for competition.",
    whatItIs3: "By connecting activity data to game systems, rankings, progression, and daily duels, Attax creates a new type of fitness experience.",
    whatItIs4: "One where movement has consequences.",
    secHowItConnects: "How It Connects",
    howItConnectsH2: "How Health Connect works with Attax",
    howItConnects1: "Attax integrates with Health Connect to synchronize physical activity automatically.",
    howItConnects2: "Attax reads your workouts, your heart rate and your steps from Health Connect, written there by your watch app (Garmin Connect, Samsung Health, Fitbit, Zepp, COROS…). Read-only: nothing is written back, and your data is never sold or used for ads.",
    howItConnectsEm: "Simply stay active.\nThe platform handles the rest.",
    secProgression: "Progression",
    progressionH2: "Activity becomes progression",
    progression1: "Traditional fitness applications often focus exclusively on measurement. Attax focuses on motivation.",
    progressionEm: "Movement contributes to competitive performance.\nConsistency contributes to rankings.\nActivity contributes to long-term progression.",
    progression2: "The system transforms exercise into something more engaging than a simple statistic.",
    secWhyAndroid: "Why Android Users",
    whyAndroidH2: "Why Attax for Android users",
    whyAndroid1: "Many Android users already collect activity data through:",
    androidSources: ["Smartwatches", "Fitness trackers", "Running applications", "Cycling applications", "Health platforms"],
    whyAndroid2: "Attax provides a new purpose for that activity.",
    whyAndroidEm: "Instead of accumulating data, players accumulate progress.\nInstead of tracking movement, players compete through movement.",
    secDaily: "Daily",
    dailyH2: "Daily competition",
    daily1: "Every day creates new opportunities.",
    dailyEm: "A new opponent.\nThree new cards.\nA new Fight Night at 9:30 PM.",
    daily2: "The competitive environment evolves continuously. This helps maintain engagement while encouraging healthy habits.",
    daily3: "The goal is not perfection. The goal is consistency.",
    secLongTerm: "Long-Term",
    longTermH2: "Long-term progression",
    longTerm1: "The most rewarding systems provide visible growth.",
    longTerm2: "Your league standings move every evening, your rank climbs from Rookie to Legend, league after league, and the worldwide season counts every point.",
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
      { q: "Does Attax work with Health Connect?", a: "Yes. Attax reads your workouts, your heart rate and your steps from Health Connect, read-only." },
      { q: "What activities are supported?", a: "Any workout your watch measures: running, cycling, strength training, swimming, team sports, dance… plus your steps, every day. Manual entries don't count." },
      { q: "Do I need a smartwatch?", a: "Yes: a device whose app shares heart rate with Health Connect, Garmin, Samsung Galaxy Watch, Fitbit and Pixel Watch, Wear OS watches, Amazfit, COROS, CMF by Nothing and more. Some brands only share heart rate during workouts: with Polar, start a session on your watch; with Xiaomi, start and end it in the Mi Fitness app on your phone (not on the watch), and there may still be gaps. Apple Watch and Huawei are not supported on Android." },
      { q: "Is Attax available on Android?", a: "Yes, on Android 9 or later, with Health Connect." },
      { q: "Is activity synchronized automatically?", a: "Yes. Once access is granted, Attax reads Health Connect when you open the app, and in the background if you allow it. On match day, everything synced before 9:30 PM counts." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads and no in-app purchases." },
    ],
    finalH2: "Turn Health Connect into competition.",
    finalBody: "Turn activity into boxing duels. Turn consistency into victories. Download Attax on Android.",
    finalCta: "Get it on Google Play",
    learnMore: "Learn More",
  },
  fr: {
    heroLabel: "JEU FITNESS HEALTH CONNECT",
    heroTitle: "Le jeu de fitness\nconçu pour Android.",
    heroSubtitle1: "Ton sport devient un combat. Connecte ta montre via Health Connect et transforme chaque séance en duel de boxe quotidien contre un joueur de ta ligue.",
    heroSubtitle2: "Chaque séance compte. Chaque pas s'additionne. Chaque soir à 21h30, le Soir de combat.",
    heroCta: "Obtenir sur Google Play",
    secWhatItIs: "C'est quoi",
    whatItIsH2: "Qu'est-ce qu'un jeu de fitness Health Connect ?",
    whatItIs1: "Health Connect permet aux applications Android d'accéder de façon sécurisée aux données d'activité et de santé.",
    whatItIs2: "La plupart des applications utilisent ces données pour le suivi. Attax les utilise pour la compétition.",
    whatItIs3: "En connectant les données d'activité à des systèmes de jeu, classements, progression et duels quotidiens, Attax crée un nouveau type d'expérience fitness.",
    whatItIs4: "Un environnement où le mouvement a des conséquences.",
    secHowItConnects: "La connexion",
    howItConnectsH2: "Comment Health Connect fonctionne avec Attax",
    howItConnects1: "Attax s'intègre à Health Connect pour synchroniser automatiquement l'activité physique.",
    howItConnects2: "Attax lit dans Health Connect tes séances, ta fréquence cardiaque et tes pas, qui y sont écrits par l'application de ta montre (Garmin Connect, Samsung Health, Fitbit, Zepp, COROS…). En lecture seule : rien n'est écrit en retour, et tes données ne sont jamais vendues ni utilisées pour de la publicité.",
    howItConnectsEm: "Reste simplement actif.\nLa plateforme s'occupe du reste.",
    secProgression: "Progression",
    progressionH2: "L'activité devient progression",
    progression1: "Les applications fitness traditionnelles se concentrent souvent exclusivement sur la mesure. Attax se concentre sur la motivation.",
    progressionEm: "Le mouvement contribue à la performance compétitive.\nLa régularité contribue au classement.\nL'activité contribue à la progression à long terme.",
    progression2: "Le système transforme l'exercice en quelque chose de plus engageant qu'une simple statistique.",
    secWhyAndroid: "Pourquoi Android",
    whyAndroidH2: "Pourquoi Attax pour les utilisateurs Android",
    whyAndroid1: "De nombreux utilisateurs Android collectent déjà des données d'activité via :",
    androidSources: ["Montres connectées", "Trackers de fitness", "Applications de course", "Applications de vélo", "Plateformes de santé"],
    whyAndroid2: "Attax offre un nouveau sens à cette activité.",
    whyAndroidEm: "Au lieu d'accumuler des données, les joueurs accumulent de la progression.\nAu lieu de suivre le mouvement, les joueurs se battent à travers le mouvement.",
    secDaily: "Quotidien",
    dailyH2: "Compétition quotidienne",
    daily1: "Chaque jour crée de nouvelles opportunités.",
    dailyEm: "Un nouvel adversaire.\nTrois nouvelles cartes.\nUn nouveau Soir de combat à 21h30.",
    daily2: "L'environnement compétitif évolue en continu. Cela maintient l'engagement tout en encourageant de bonnes habitudes.",
    daily3: "L'objectif n'est pas la perfection. L'objectif, c'est la régularité.",
    secLongTerm: "Long terme",
    longTermH2: "Progression à long terme",
    longTerm1: "Les systèmes les plus gratifiants offrent une croissance visible.",
    longTerm2: "Le classement de ta ligue bouge chaque soir, ton rang grimpe de Rookie à Legend, ligue après ligue, et la saison mondiale compte chaque point.",
    longTermEm: "Chaque jour actif compte.\nChaque effort a de la valeur.",
    longTerm3: "Le résultat est une expérience fitness conçue pour une participation à long terme plutôt que pour une motivation à court terme.",
    secWhyItWorks: "Pourquoi ça marche",
    whyItWorksH2: "Pourquoi le fitness gamifié fonctionne",
    whyItWorks1: "La gamification introduit :",
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
      { q: "Attax fonctionne-t-il avec Health Connect ?", a: "Oui. Attax lit tes séances, ta fréquence cardiaque et tes pas dans Health Connect, en lecture seule." },
      { q: "Quelles activités sont prises en compte ?", a: "Toute séance mesurée par ta montre : course, vélo, musculation, natation, sports collectifs, danse… plus tes pas, chaque jour. Les saisies à la main ne comptent pas." },
      { q: "Ai-je besoin d'une montre connectée ?", a: "Oui : un appareil dont l'application partage la fréquence cardiaque avec Health Connect, Garmin, Samsung Galaxy Watch, Fitbit et Pixel Watch, montres Wear OS, Amazfit, COROS, CMF by Nothing et d'autres. Certaines marques ne partagent la fréquence cardiaque que pendant les exercices : avec Polar, lance une séance sur ta montre ; avec Xiaomi, démarre-la et termine-la dans l'app Mi Fitness du téléphone (pas sur la montre), et il peut quand même y avoir des trous. L'Apple Watch et Huawei ne sont pas compatibles sur Android." },
      { q: "Attax est-il disponible sur Android ?", a: "Oui, sur Android 9 ou plus récent, avec Health Connect." },
      { q: "La synchronisation est-elle automatique ?", a: "Oui. Une fois l'accès accordé, Attax lit Health Connect à l'ouverture de l'app, et en arrière-plan si tu l'autorises. Le jour du match, tout ce qui est synchronisé avant 21h30 compte." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité ni achat intégré." },
    ],
    finalH2: "Transforme Health Connect en compétition.",
    finalBody: "Transforme ton activité en duels de boxe. Transforme ta régularité en victoires. Télécharge Attax sur Android.",
    finalCta: "Obtenir sur Google Play",
    learnMore: "En savoir plus",
  },
};

export default function HealthConnectFitnessGame() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <SitePage>
      <PageHero bg={<ScanBg name="cycling" />} kick={p.heroLabel} title={heroTitle(p.heroTitle)} lead={p.heroSubtitle1} lead2={p.heroSubtitle2}>
        <a className="h7-btn h7-btn-light" href="/download/android"><PlayIcon />{p.heroCta}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap">
          <div className="sp-blocks">
            <Block kick={p.secWhatItIs} title={p.whatItIsH2}>
              <p>{p.whatItIs1}</p>
              <p>{p.whatItIs2}</p>
              <p>{p.whatItIs3}</p>
              <p className="strong">{p.whatItIs4}</p>
            </Block>

            <Block kick={p.secHowItConnects} title={p.howItConnectsH2}>
              <p>{p.howItConnects1}</p>
              <p>{p.howItConnects2}</p>
              <p className="em"><Lines text={p.howItConnectsEm} /></p>
            </Block>

            <p className="sp-quote">
              {lang === "en"
                ? "“Whatever your sport, if your watch measures it, it counts.”"
                : "« Quel que soit ton sport, si ta montre le mesure, ça compte. »"}
            </p>

            <Block kick={p.secProgression} title={p.progressionH2}>
              <p>{p.progression1}</p>
              <p className="em"><Lines text={p.progressionEm} /></p>
              <p>{p.progression2}</p>
            </Block>

            <Block kick={p.secWhyAndroid} title={p.whyAndroidH2}>
              <p>{p.whyAndroid1}</p>
              <ul className="sp-dots">{p.androidSources.map((s) => <li key={s}>{s}</li>)}</ul>
              <p>{p.whyAndroid2}</p>
              <p className="em"><Lines text={p.whyAndroidEm} /></p>
            </Block>

            <Block kick={p.secDaily} title={p.dailyH2}>
              <p>{p.daily1}</p>
              <p className="em"><Lines text={p.dailyEm} /></p>
              <p>{p.daily2}</p>
              <p className="strong">{p.daily3}</p>
            </Block>

            <Block kick={p.secLongTerm} title={p.longTermH2}>
              <p>{p.longTerm1}</p>
              <p>{p.longTerm2}</p>
              <p className="em"><Lines text={p.longTermEm} /></p>
              <p>{p.longTerm3}</p>
            </Block>

            <Block kick={p.secWhyItWorks} title={p.whyItWorksH2}>
              <p>{p.whyItWorks1}</p>
              <div style={{ margin: "1.75rem 0" }}>
                <HairList two items={p.gamificationItems.map((g) => ({ title: g.label, body: g.desc }))} />
              </div>
              <p>{p.whyItWorks2}</p>
            </Block>

            <Block kick={p.secFaq} title={p.faqH2}>
              <div className="h7-faq-list sp-faq-static">
                {p.faq.map((item) => (
                  <div key={item.q} className="h7-faq-item">
                    <h3 className="h7-faq-q" style={{ cursor: "default", margin: 0 }}>{item.q}</h3>
                    <p className="h7-faq-a">{item.a}</p>
                  </div>
                ))}
              </div>
            </Block>
          </div>

          <div className="h7-mid-row is-in sp-seo-end">
            <div>
              <p className="h7-mid-t">{p.finalH2}</p>
              <p className="sp-note" style={{ marginTop: "0.5rem", fontSize: "1.0625rem", maxWidth: "34rem" }}>{p.finalBody}</p>
            </div>
            <div className="h7-ctas" style={{ marginTop: 0 }}>
              <a className="h7-btn h7-btn-ink" href="/download/android"><PlayIcon />{p.finalCta}</a>
              <Link className="h7-btn h7-btn-line" href="/discover">{p.learnMore}</Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </SitePage>
  );
}
