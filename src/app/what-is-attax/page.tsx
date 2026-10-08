"use client";

import Link from "next/link";
import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

type Lang = "en" | "fr";

const SECTION_LABEL: React.CSSProperties = {
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#aaa",
  display: "block",
  marginBottom: "1.25rem",
};

const BODY: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "#444",
  lineHeight: 1.85,
  margin: "0 0 1.25rem",
};

const BODY_EMPHASIS: React.CSSProperties = {
  ...BODY,
  color: "#1a1a1a",
  fontWeight: 500,
};

const RULE: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #ebebeb",
  margin: "5rem 0",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="seo-section-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
      <div style={{ paddingTop: "0.3rem" }}>
        <span style={SECTION_LABEL}>{label}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

const P: Record<Lang, {
  heroLabel: string;
  heroTitle: string;
  heroSubtitle1: string;
  heroSubtitle2: string;
  heroCta: string;

  problemLabel: string;
  problemH2: string;
  problemP1: string;
  problemP2: string;
  problemP3: string;
  problemP4: string;
  problemP5: string;
  problemP6: string;
  problemP7: string;
  problemP8: string;
  problemQuoteQ: string;
  problemQuoteA: string;

  diffLabel: string;
  diffH2: string;
  diffP1: string;
  diffP2: string;
  diffP3: string;
  diffP4: string;
  diffP5: string;
  diffP6: string;

  howLabel: string;
  howH2: string;
  howIntro: string;
  howSystems: { title: string; body: string }[];

  whyLabel: string;
  whyH2: string;
  whyP1: string;
  whyP2: string;
  whyP3: string;
  whyP4: string;
  whyP5: string;
  whyP6: string;

  whoLabel: string;
  whoH2: string;
  whoIntro: string;
  who: { title: string; body: string }[];

  psychLabel: string;
  psychH2: string;
  psychP1: string;
  psychP2: string;
  psychP3: string;
  psychP4: string;
  psychP5: string;

  consLabel: string;
  consH2: string;
  consP1: string;
  consP2: string;
  consP3: string;
  consP4: string;
  consP5: string;

  faqLabel: string;
  faqH2: string;
  faq: { q: string; a: string }[];

  ctaH2: string;
  ctaBody: string;
  ctaDownload: string;
  ctaLearn: string;
}> = {
  en: {
    heroLabel: "WHAT IS ATTAX",
    heroTitle: "The fitness game powered by real activity.",
    heroSubtitle1: "Attax turns your workouts and daily movement into a daily duel against a player of your league. Your heart rate and your steps become points — and the most active player wins at 9:30 PM.",
    heroSubtitle2: "Train in real life. Win your duels. Climb from Rookie to Legend.",
    heroCta: "Download Attax",

    problemLabel: "The Problem",
    problemH2: "The problem with traditional fitness apps",
    problemP1: "For more than a decade, fitness applications have focused on tracking.",
    problemP2: "They count steps.\nThey measure distance.\nThey record heart rate.\nThey estimate calories burned.",
    problemP3: "The technology has improved dramatically, yet one problem remains unchanged.",
    problemP4: "Most people eventually stop using them.",
    problemP5: "Not because the data is wrong. Not because the apps are poorly built. But because information alone rarely creates long-term motivation.",
    problemP6: "Knowing that you walked 8,000 steps yesterday doesn’t necessarily make you want to walk again tomorrow. Seeing a graph move upward can feel rewarding for a while, but eventually the novelty disappears.",
    problemP7: "This is where many fitness products struggle. They become archives of activity rather than engines of motivation.",
    problemP8: "Attax was created to solve that problem.",
    problemQuoteQ: "Instead of asking: “How much activity did you do today?”",
    problemQuoteA: "Attax asks: “What does that activity actually mean?”",

    diffLabel: "What’s Different",
    diffH2: "What makes Attax different",
    diffP1: "Attax is not simply a fitness tracker.\nIt is not a traditional workout application.\nIt is not another step counter.",
    diffP2: "Attax is a competitive fitness game.",
    diffP3: "Your real-world activity, measured by your watch, decides your duels against the other players of your league.",
    diffP4: "Every run contributes.\nEvery walk contributes.\nEvery workout contributes.\nEvery effort becomes part of a larger competitive system.",
    diffP5: "The result is simple. Movement gains purpose. Instead of exercising purely for statistics, players exercise because every action contributes to progression, competition and achievement.",
    diffP6: "The objective is not to create pressure. The objective is to create engagement. When activity influences meaningful outcomes, consistency becomes easier to maintain.",

    howLabel: "How It Works",
    howH2: "How Attax works",
    howIntro: "Attax combines four systems that work together.",
    howSystems: [
      { title: "Real Activity", body: "Attax connects to Apple Health and Health Connect and reads your heart rate and your steps. Every minute of real effort earns activity points — the harder you push, the more you score — and your steps count too. Running, cycling, gym, team sports, dance: if your heart works, it counts." },
      { title: "Daily Competition", body: "Every day, you face a player of your league. Your duel score is your activity over the last 7 days, revealed round by round from 10 AM; today is the final round, live from 7 PM. At 9:30 PM, the fight plays out to the KO." },
      { title: "Strategic Decisions", body: "Every morning, 3 strategy cards are drawn from a deck of 12. Pick one before 1 PM to boost your session, sabotage your opponent, peek at their curve or hide your own. The right card can flip a close duel." },
      { title: "League Progression", body: "Leagues gather 8 players of a similar level for 7 days and 7 duels, ending with a podium. Across leagues, a global rank follows you through 5 divisions: Rookie, Challenger, Pro, Elite, Legend." },
    ],

    whyLabel: "Why It Works",
    whyH2: "Why competition works",
    whyP1: "Human beings naturally respond to competition.",
    whyP2: "Competition creates focus.\nCompetition creates accountability.\nCompetition creates engagement.",
    whyP3: "This principle is visible everywhere. Sports. Video games. Education. Professional environments.",
    whyP4: "The reason is simple. Competition provides context. Running five kilometers can feel ordinary. Running five kilometers knowing it could help you win feels different. The activity itself does not change. The meaning attached to it does.",
    whyP5: "Attax uses competition not as a source of pressure but as a source of motivation. The goal is not to punish inactivity. The goal is to reward consistency.",
    whyP6: "Every day becomes an opportunity to improve. Every workout becomes part of a larger story.",

    whoLabel: "Who It’s For",
    whoH2: "Who Attax is for",
    whoIntro: "Attax was designed for a wide variety of athletes and active people.",
    who: [
      { title: "Runners", body: "Transform every run into competitive progress." },
      { title: "Walkers", body: "Daily movement matters. Consistency is rewarded." },
      { title: "Cyclists", body: "Every ride contributes to your development." },
      { title: "Gym Enthusiasts", body: "Strength sessions become part of your progression." },
      { title: "Beginners", body: "You do not need to be an elite athlete. Attax rewards effort at every level." },
      { title: "Competitive Personalities", body: "If you enjoy rankings, progression systems and measurable improvement, Attax was built for you." },
    ],

    psychLabel: "The Psychology",
    psychH2: "The psychology behind Attax",
    psychP1: "Many fitness products focus exclusively on discipline. Attax focuses on motivation. The difference matters.",
    psychP2: "Discipline is valuable. But discipline alone is difficult to sustain.",
    psychP3: "Motivation comes from progress.\nMotivation comes from feedback.\nMotivation comes from visible improvement.",
    psychP4: "Attax combines these elements into a system designed to encourage long-term engagement.",
    psychP5: "Instead of relying on guilt, Attax creates reasons to return.\nInstead of demanding perfection, Attax rewards consistency.\nInstead of emphasizing short-term intensity, Attax celebrates sustainable progress.",

    consLabel: "Consistency",
    consH2: "Why consistency matters more than intensity",
    consP1: "One of the biggest misconceptions in fitness is that success belongs to people who perform extraordinary workouts. In reality, success usually belongs to people who remain consistent.",
    consP2: "A moderate workout repeated three times a week often creates better results than a perfect workout once a month. Attax was designed around this principle: your duel score covers your last 7 days, so every session keeps counting for a whole week.",
    consP3: "Consistency compounds.\nSmall actions accumulate.\nTiny improvements become meaningful over time.",
    consP4: "The most successful players are rarely those who produce a single exceptional performance. They are usually the ones who continue showing up.",
    consP5: "Again.\nAnd again.\nAnd again.",

    faqLabel: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "What is Attax?", a: "A competitive fitness game: your real activity, measured by your watch, powers a daily duel against a player of your league." },
      { q: "Is Attax a fitness app or a game?", a: "Both. Attax reads your activity like a fitness app, and turns it into duels, cards, leagues and ranks like a game." },
      { q: "Does walking count?", a: "Yes. Your steps earn points all day long, and a brisk walk that gets your heart working counts as effort too." },
      { q: "Can beginners use Attax?", a: "Absolutely. You play against players of a similar level, and every effort counts — from a brisk walk to an all-out session." },
      { q: "Do I need a smartwatch?", a: "Yes. You need a device that measures your heart rate — smartwatch, fitness band or chest strap — synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Amazfit, COROS and more on both; Samsung Galaxy Watch and Fitbit on Android only. Your phone alone counts your steps. Attax checks your connection before your first league." },
      { q: "Is Attax available on iPhone and Android?", a: "Yes: on iPhone through Apple Health, on Android through Health Connect." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads." },
      { q: "How often do duels happen?", a: "Every day. One duel a day, settled at 9:30 PM, in leagues that last 7 days." },
    ],

    ctaH2: "Ready to make your activity matter?",
    ctaBody: "Join the first leagues: download Attax and start your first duel.",
    ctaDownload: "Download Attax",
    ctaLearn: "Learn More",
  },

  fr: {
    heroLabel: "QU’EST-CE QU’ATTAX",
    heroTitle: "Le jeu de fitness propulsé par une activité réelle.",
    heroSubtitle1: "Attax transforme tes séances et ton activité quotidienne en un duel quotidien contre un joueur de ta ligue. Ta fréquence cardiaque et tes pas deviennent des points — et le plus actif l'emporte à 21h30.",
    heroSubtitle2: "Entraîne-toi dans la vraie vie. Gagne tes duels. Grimpe de Rookie à Legend.",
    heroCta: "Télécharger Attax",

    problemLabel: "Le Problème",
    problemH2: "Le problème des applications fitness traditionnelles",
    problemP1: "Depuis plus d’une décennie, les applications fitness se concentrent sur le suivi.",
    problemP2: "Elles comptent les pas.\nElles mesurent les distances.\nElles enregistrent la fréquence cardiaque.\nElles estiment les calories brûlées.",
    problemP3: "La technologie a considérablement progressé, pourtant un problème demeure inchangé.",
    problemP4: "La plupart des gens finissent par arrêter de les utiliser.",
    problemP5: "Pas parce que les données sont fausses. Pas parce que les applis sont mal conçues. Mais parce que l’information seule crée rarement une motivation à long terme.",
    problemP6: "Savoir que tu as marché 8 000 pas hier ne te donne pas forcément envie de recommencer demain. Voir un graphique progresser peut être gratifiant un temps, mais la nouveauté finit par s’évanouir.",
    problemP7: "C’est là que beaucoup de produits fitness échouent. Ils deviennent des archives d’activité plutôt que des moteurs de motivation.",
    problemP8: "Attax a été créé pour résoudre ce problème.",
    problemQuoteQ: "Au lieu de demander : «Combien d’activité as-tu fait aujourd’hui ?»",
    problemQuoteA: "Attax demande : «Que signifie vraiment cette activité ?»",

    diffLabel: "Ce Qui Change",
    diffH2: "Ce qui rend Attax différent",
    diffP1: "Attax n’est pas simplement un tracker fitness.\nCe n’est pas une application d’entraînement traditionnelle.\nCe n’est pas un podomètre de plus.",
    diffP2: "Attax est un jeu de fitness compétitif.",
    diffP3: "Ton activité réelle, mesurée par ta montre, décide de tes duels contre les autres joueurs de ta ligue.",
    diffP4: "Chaque course contribue.\nChaque marche contribue.\nChaque séance contribue.\nChaque effort fait partie d’un système compétitif plus large.",
    diffP5: "Le résultat est simple. Le mouvement prend du sens. Au lieu de faire du sport uniquement pour des statistiques, les joueurs s’entraînent parce que chaque action contribue à la progression, la compétition et l’accomplissement.",
    diffP6: "L’objectif n’est pas de créer de la pression. L’objectif est de créer de l’engagement. Quand l’activité influe sur des résultats concrets, la régularité devient plus facile à maintenir.",

    howLabel: "Comment Ça Marche",
    howH2: "Comment fonctionne Attax",
    howIntro: "Attax combine quatre systèmes qui fonctionnent ensemble.",
    howSystems: [
      { title: "Activité réelle", body: "Attax se connecte à Apple Santé et Health Connect et lit ta fréquence cardiaque et tes pas. Chaque minute de vrai effort rapporte des points d'activité — plus tu pousses, plus tu marques — et tes pas comptent aussi. Course, vélo, muscu, sports collectifs, danse : si ton cœur travaille, ça compte." },
      { title: "Compétition quotidienne", body: "Chaque jour, tu affrontes un joueur de ta ligue. Ton score de duel, c'est ton activité des 7 derniers jours, dévoilée round après round dès 10h ; aujourd'hui est le round final, en direct dès 19h. À 21h30, le combat se joue jusqu'au KO." },
      { title: "Décisions stratégiques", body: "Chaque matin, 3 cartes stratégiques sont tirées d'un deck de 12. Choisis-en une avant 13h pour booster ta séance, saboter ton adversaire, espionner sa courbe ou cacher la tienne. La bonne carte peut renverser un duel serré." },
      { title: "Progression en ligue", body: "Les ligues réunissent 8 joueurs de niveau proche pendant 7 jours et 7 duels, avec un podium à la clé. De ligue en ligue, un rang global te suit à travers 5 divisions : Rookie, Challenger, Pro, Elite, Legend." },
    ],

    whyLabel: "Pourquoi Ça Marche",
    whyH2: "Pourquoi la compétition fonctionne",
    whyP1: "Les êtres humains répondent naturellement à la compétition.",
    whyP2: "La compétition crée la concentration.\nLa compétition crée la responsabilité.\nLa compétition crée l’engagement.",
    whyP3: "Ce principe est visible partout. Sport. Jeux vidéo. Éducation. Environnements professionnels.",
    whyP4: "La raison est simple. La compétition donne du contexte. Courir cinq kilomètres peut sembler ordinaire. Courir cinq kilomètres en sachant que cela pourrait t’aider à gagner, c’est différent. L’activité elle-même ne change pas. Le sens qu’on lui donne, si.",
    whyP5: "Attax utilise la compétition non comme source de pression, mais comme source de motivation. L’objectif n’est pas de punir l’inactivité. L’objectif est de récompenser la régularité.",
    whyP6: "Chaque jour devient une occasion de progresser. Chaque entraînement devient une partie d’une histoire plus grande.",

    whoLabel: "Pour Qui",
    whoH2: "Pour qui est Attax",
    whoIntro: "Attax a été conçu pour une grande variété de sportifs et de personnes actives.",
    who: [
      { title: "Coureurs", body: "Transforme chaque course en progression compétitive." },
      { title: "Marcheurs", body: "Le mouvement du quotidien compte. La régularité est récompensée." },
      { title: "Cyclistes", body: "Chaque sortie contribue à ton développement." },
      { title: "Fans de salle", body: "Les séances de musculation font partie de ta progression." },
      { title: "Débutants", body: "Tu n’as pas besoin d’être un athlète d’élite. Attax récompense l’effort à chaque niveau." },
      { title: "Personnalités compétitives", body: "Si tu aimes les classements, les systèmes de progression et l’amélioration mesurable, Attax a été conçu pour toi." },
    ],

    psychLabel: "La Psychologie",
    psychH2: "La psychologie derrière Attax",
    psychP1: "Beaucoup de produits fitness misent exclusivement sur la discipline. Attax mise sur la motivation. La différence est importante.",
    psychP2: "La discipline a de la valeur. Mais la discipline seule est difficile à maintenir.",
    psychP3: "La motivation vient du progrès.\nLa motivation vient du retour d’information.\nLa motivation vient d’une amélioration visible.",
    psychP4: "Attax combine ces éléments dans un système conçu pour encourager l’engagement sur le long terme.",
    psychP5: "Au lieu de miser sur la culpabilité, Attax crée des raisons de revenir.\nAu lieu d’exiger la perfection, Attax récompense la régularité.\nAu lieu de valoriser l’intensité à court terme, Attax célèbre la progression durable.",

    consLabel: "Régularité",
    consH2: "Pourquoi la régularité compte plus que l’intensité",
    consP1: "L’une des plus grandes erreurs de perception dans le fitness, c’est de croire que le succès appartient à ceux qui font des séances extraordinaires. En réalité, le succès appartient souvent à ceux qui restent réguliers.",
    consP2: "Une séance modérée répétée trois fois par semaine donne souvent de meilleurs résultats qu'une séance parfaite une fois par mois. Attax a été conçu autour de ce principe : ton score de duel couvre tes 7 derniers jours, donc chaque séance continue de compter pendant une semaine entière.",
    consP3: "La régularité s’accumule.\nLes petites actions s’additionnent.\nLes micro-progrès deviennent significatifs avec le temps.",
    consP4: "Les joueurs les plus performants sont rarement ceux qui produisent une seule performance exceptionnelle. Ce sont généralement ceux qui continuent à se montrer.",
    consP5: "Encore.\nEt encore.\nEt encore.",

    faqLabel: "FAQ",
    faqH2: "Questions fréquemment posées",
    faq: [
      { q: "Qu'est-ce qu'Attax ?", a: "Un jeu de fitness compétitif : ton activité réelle, mesurée par ta montre, alimente un duel quotidien contre un joueur de ta ligue." },
      { q: "Attax est-il une appli fitness ou un jeu ?", a: "Les deux. Attax lit ton activité comme une appli fitness, et la transforme en duels, cartes, ligues et rangs comme un jeu." },
      { q: "La marche compte-t-elle ?", a: "Oui. Tes pas rapportent des points toute la journée, et une marche rapide qui fait travailler ton cœur compte aussi comme effort." },
      { q: "Les débutants peuvent-ils jouer ?", a: "Absolument. Tu affrontes des joueurs de niveau proche, et chaque effort compte — de la marche rapide à la séance à fond." },
      { q: "Ai-je besoin d'une montre connectée ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque — montre, bracelet ou ceinture cardio — synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Amazfit, COROS et d'autres sur les deux ; Samsung Galaxy Watch et Fitbit sur Android uniquement. Ton téléphone seul compte tes pas. Attax vérifie ta connexion avant ta première ligue." },
      { q: "Attax est-il disponible sur iPhone et Android ?", a: "Oui : sur iPhone via Apple Santé, sur Android via Health Connect." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité." },
      { q: "À quelle fréquence ont lieu les duels ?", a: "Tous les jours. Un duel par jour, tranché à 21h30, dans des ligues qui durent 7 jours." },
    ],

    ctaH2: "Prêt à donner du sens à ton activité ?",
    ctaBody: "Rejoins les premières ligues : télécharge Attax et lance ton premier duel.",
    ctaDownload: "Télécharger Attax",
    ctaLearn: "En savoir plus",
  },
};

export default function WhatIsAttax() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{
          position: "relative",
          backgroundColor: "#0d0d0d",
          borderRadius: "24px",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}>
          <Image src="/images/runninggroup.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.22) grayscale(0.25)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.6) 55%, rgba(5,5,5,0.25) 100%)" }} />
          <PageNavbar />
          <div className="hero-text-box" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem 4rem", maxWidth: "720px" }}>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
              {p.heroLabel}
            </span>
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

      {/* ── Content ── */}
      <div style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "7rem 4rem" }}>

          {/* Section 1 */}
          <Section label={p.problemLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.problemH2}
            </h2>
            <p style={BODY}>{p.problemP1}</p>
            <p style={BODY_EMPHASIS}>{p.problemP2.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.problemP3}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.problemP4}</p>
            <p style={BODY}>{p.problemP5}</p>
            <p style={BODY}>{p.problemP6}</p>
            <p style={BODY}>{p.problemP7}</p>
            <p style={BODY}>{p.problemP8}</p>
            <div style={{ borderLeft: "3px solid #0d0d0d", paddingLeft: "1.5rem", margin: "2.5rem 0" }}>
              <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.75, margin: "0 0 0.5rem" }}><em>{p.problemQuoteQ}</em></p>
              <p style={{ fontSize: "1rem", color: "#0d0d0d", fontWeight: 600, lineHeight: 1.75, margin: 0 }}><em>{p.problemQuoteA}</em></p>
            </div>
          </Section>

          <hr style={RULE} />

          {/* Section 2 */}
          <Section label={p.diffLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.diffH2}
            </h2>
            <p style={BODY_EMPHASIS}>{p.diffP1.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={{ ...BODY, fontWeight: 700, color: "#0d0d0d", fontSize: "1.125rem" }}>{p.diffP2}</p>
            <p style={BODY}>{p.diffP3}</p>
            <p style={BODY_EMPHASIS}>{p.diffP4.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.diffP5}</p>
            <p style={BODY}>{p.diffP6}</p>
          </Section>

          <hr style={RULE} />

          <div style={{ position: "relative", height: "clamp(380px, 52vh, 620px)", overflow: "hidden", borderRadius: "20px", margin: "5rem 0" }}>
            <Image src="/images/inblack.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 60%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.72) 100%)" }} />
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.75rem", right: "2.75rem", zIndex: 1 }}>
              <p style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.3, maxWidth: "580px", margin: 0 }}>
                "Every effort counts. Every day you move, you compete."
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <Section label={p.howLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.howH2}
            </h2>
            <p style={BODY}>{p.howIntro}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "2rem" }}>
              {p.howSystems.map((s, i) => (
                <div key={s.title} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1.5rem", padding: "2rem 0", borderTop: "1px solid #f0f0f0", alignItems: "start" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ccc", paddingTop: "3px" }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>{s.title}</h3>
                    <p style={{ ...BODY, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Section 4 */}
          <Section label={p.whyLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.whyH2}
            </h2>
            <p style={BODY}>{p.whyP1}</p>
            <p style={BODY_EMPHASIS}>{p.whyP2.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.whyP3}</p>
            <p style={BODY}>{p.whyP4}</p>
            <p style={BODY}>{p.whyP5}</p>
            <p style={BODY}>{p.whyP6}</p>
          </Section>

          <hr style={RULE} />

          {/* Section 5 */}
          <Section label={p.whoLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.whoH2}
            </h2>
            <p style={{ ...BODY, marginBottom: "2.5rem" }}>{p.whoIntro}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              {p.who.map((w, i) => (
                <div key={w.title} style={{ padding: "1.75rem 1.75rem 1.75rem 0", borderTop: "1px solid #f0f0f0", borderLeft: i % 2 === 1 ? "1px solid #f0f0f0" : "none", paddingLeft: i % 2 === 1 ? "1.75rem" : 0 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>{w.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Section 6 */}
          <Section label={p.psychLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.psychH2}
            </h2>
            <p style={BODY}>{p.psychP1}</p>
            <p style={BODY}>{p.psychP2}</p>
            <p style={BODY_EMPHASIS}>{p.psychP3.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.psychP4}</p>
            <p style={BODY_EMPHASIS}>{p.psychP5.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
          </Section>

          <hr style={RULE} />

          {/* Section 7 */}
          <Section label={p.consLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.consH2}
            </h2>
            <p style={BODY}>{p.consP1}</p>
            <p style={BODY}>{p.consP2}</p>
            <p style={BODY_EMPHASIS}>{p.consP3.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.consP4}</p>
            <p style={{ ...BODY, color: "#0d0d0d", fontWeight: 600 }}>{p.consP5.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
          </Section>

          <hr style={RULE} />

          {/* FAQ */}
          <Section label={p.faqLabel}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
              {p.faqH2}
            </h2>
            <div>
              {p.faq.map((item) => (
                <div key={item.q} style={{ borderBottom: "1px solid #f0f0f0", padding: "1.5rem 0" }}>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0d0d0d", margin: "0 0 0.5rem", lineHeight: 1.4 }}>{item.q}</p>
                  <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <hr style={RULE} />

          {/* Final CTA */}
          <div style={{ textAlign: "center", padding: "3rem 0 2rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.05, margin: "0 0 1.25rem" }}>
              {p.ctaH2}
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 auto 2.5rem", maxWidth: "400px" }}>
              {p.ctaBody}
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {p.ctaDownload}
              </a>
              <Link href="/discover" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#f4f4f4", color: "#0d0d0d", fontWeight: 600, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
                {p.ctaLearn}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
