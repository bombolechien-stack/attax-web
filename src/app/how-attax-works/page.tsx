"use client";

import Link from "next/link";
import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

type Lang = "en" | "fr";

const BODY: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "#444",
  lineHeight: 1.85,
  margin: "0 0 1.25rem",
};

const BODY_EM: React.CSSProperties = { ...BODY, color: "#1a1a1a", fontWeight: 500 };
const RULE: React.CSSProperties = { border: "none", borderTop: "1px solid #ebebeb", margin: "5rem 0" };

const LABEL_STYLE: React.CSSProperties = {
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#aaa",
  display: "block",
  marginBottom: "1.25rem",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
      <div style={{ paddingTop: "0.3rem" }}>
        <span style={LABEL_STYLE}>{label}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 2rem" }}>
      {children}
    </h2>
  );
}

const P: Record<Lang, {
  heroLabel: string;
  heroTitle: string;
  heroSubtitle1: string;
  heroSubtitle2: string;
  heroCta: string;

  foundationLabel: string;
  foundationH2: string;
  foundationP1: string;
  foundationP2: string;
  foundationP3: string;
  foundationP4: string;
  foundationP5: string;
  foundationP6: string;
  foundationP7: string;
  foundationP8: string;

  connectLabel: string;
  connectH2: string;
  connectP1: string;
  connectP2: string;
  connectP3: string;
  connectP4: string;
  connectP5: string;
  connectP6: string;
  connectP7: string;

  activityLabel: string;
  activityH2: string;
  activityP1: string;
  activityP2: string;
  activityP3: string;
  activityP4: string;
  activityP5: string;
  activityP6: string;

  competitionLabel: string;
  competitionH2: string;
  competitionP1: string;
  competitionP2: string;
  competitionP3: string;
  competitionP4: string;
  competitionP5: string;
  competitionP6: string;
  competitionP7: string;

  strategyLabel: string;
  strategyH2: string;
  strategyP1: string;
  strategyP2: string;
  strategyP3: string;
  strategyP4: string;
  strategyP5: string;
  strategyP6: string;
  strategyP7: string;

  progressionLabel: string;
  progressionH2: string;
  progressionP1: string;
  progressionP2: string;
  progressionP3: string;
  progressionP4: string;
  progressionP5: string;
  progressionP6: string;

  whyLabel: string;
  whyH2: string;
  whyP1: string;
  whyP2: string;
  whyP3: string;
  whyMotivation: string[];
  whyP4: string;
  whyP5: string;

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
  ctaBody1: string;
  ctaBody2: string;
  ctaDownload: string;
  ctaLearn: string;
}> = {
  en: {
    heroLabel: "HOW ATTAX WORKS",
    heroTitle: "Real activity.\nReal competition.",
    heroSubtitle1: "Attax transforms physical activity into a competitive experience built around consistency, progression, and daily challenges.",
    heroSubtitle2: "No manual tracking. No complicated setup. Just move and compete.",
    heroCta: "Download Attax",

    foundationLabel: "The Foundation",
    foundationH2: "The foundation: real-world activity",
    foundationP1: "Everything inside Attax starts with one thing.",
    foundationP2: "Movement.",
    foundationP3: "Unlike traditional games, progression cannot be purchased, farmed, or automated.",
    foundationP4: "Your performance comes from what you achieve in real life.",
    foundationP5: "Walking.\nRunning.\nCycling.\nStrength training.\nSports.\nDaily movement.",
    foundationP6: "The system rewards activity performed outside the app and transforms it into meaningful progression inside the experience.",
    foundationP7: "This creates a direct connection between physical effort and competitive outcomes.",
    foundationP8: "The more consistent you are, the stronger your position becomes.",

    connectLabel: "Connect",
    connectH2: "Connect your activity",
    connectP1: "Attax integrates with the health systems already available on your device.",
    connectP2: "For iPhone users, activity is synchronized through Apple Health.",
    connectP3: "For Android users, activity is synchronized through Health Connect.",
    connectP4: "This allows workouts and movement data to be imported automatically.",
    connectP5: "No spreadsheets.\nNo manual entries.\nNo complicated setup process.",
    connectP6: "The goal is simple: spend less time logging activity and more time doing it.",
    connectP7: "Once connected, Attax continuously transforms movement into progression.",

    activityLabel: "Activity",
    activityH2: "Activity becomes power",
    activityP1: "Most fitness applications stop at measurement. Attax goes one step further.",
    activityP2: "Activity becomes a resource.",
    activityP3: "Every workout contributes to your overall performance.\nEvery active day strengthens your position.\nEvery effort creates momentum.",
    activityP4: "This means that physical activity is no longer isolated from the rest of the experience.",
    activityP5: "Movement directly influences competition. The connection is immediate and meaningful.",
    activityP6: "The more consistent your effort, the greater your potential advantage.",

    competitionLabel: "Competition",
    competitionH2: "Daily competition",
    competitionP1: "At the heart of Attax is competition. Players are regularly matched against opponents.",
    competitionP2: "Each competition represents a direct comparison between two active individuals.",
    competitionP3: "The objective is simple: move, train, stay consistent, perform better.",
    competitionP4: "Competition transforms ordinary activity into a challenge.",
    competitionP5: "A walk is no longer just a walk.\nA workout is no longer just a workout.",
    competitionP6: "Every action contributes to an ongoing contest.",
    competitionP7: "This creates a powerful source of motivation that traditional fitness applications rarely provide.",

    strategyLabel: "Strategy",
    strategyH2: "Strategy matters",
    strategyP1: "Attax is not purely about activity volume.",
    strategyP2: "Decision-making matters too.",
    strategyP3: "Players have access to strategic mechanics that introduce variation and tactical depth.",
    strategyP4: "This creates situations where two players with similar activity levels can still experience different outcomes.",
    strategyP5: "The result is a system that rewards both consistency and intelligent choices.",
    strategyP6: "Progress is influenced by effort.\nSuccess is influenced by strategy.",
    strategyP7: "The combination creates a more engaging experience than simple activity tracking alone.",

    progressionLabel: "Progression",
    progressionH2: "Leagues and progression",
    progressionP1: "Competition becomes meaningful when progress is visible.",
    progressionP2: "Attax organizes players into competitive environments where rankings evolve over time.",
    progressionP3: "Victories help players move upward.\nConsistency improves positioning.\nStrong performances unlock new opportunities.",
    progressionP4: "The ranking system creates long-term objectives beyond individual workouts.",
    progressionP5: "Instead of focusing exclusively on today's activity, players are encouraged to think about their progression across weeks and months.",
    progressionP6: "This transforms fitness from a short-term task into a long-term journey.",

    whyLabel: "Why It Works",
    whyH2: "Why the system works",
    whyP1: "Many fitness products struggle with retention. People begin motivated. Then engagement fades.",
    whyP2: "Attax was designed to address this challenge.",
    whyP3: "The system combines several motivational principles:",
    whyMotivation: ["Visible progression", "Daily objectives", "Competitive accountability", "Strategic decision-making", "Long-term rankings"],
    whyP4: "Together, these systems create a reason to return. Not because the application demands it. Because the experience remains engaging.",
    whyP5: "The goal is not to force activity. The goal is to make activity more rewarding.",

    consLabel: "Consistency",
    consH2: "Built around consistency",
    consP1: "The strongest players are not necessarily the most athletic. They are often the most consistent.",
    consP2: "This philosophy sits at the center of Attax. The system does not expect perfection. It rewards participation.",
    consP3: "Small efforts matter.\nDaily movement matters.\nLong-term habits matter.",
    consP4: "Progress comes from showing up repeatedly.",
    consP5: "Attax exists to make that process more enjoyable.",

    faqLabel: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "How does Attax track activity?", a: "Attax connects to Apple Health and Health Connect to synchronize activity automatically." },
      { q: "Do I need to manually enter workouts?", a: "No. Activity is imported automatically from supported health platforms." },
      { q: "What activities count?", a: "Walking, running, cycling, gym sessions, sports, and many other forms of movement." },
      { q: "Does consistency matter?", a: "Yes. Consistency is one of the most important factors in long-term progression." },
      { q: "Do I need a smartwatch?", a: "Yes. Attax requires a smartwatch or fitness tracker (Apple Watch, Fitbit, Garmin, or similar) to automatically synchronize your activity through Apple Health or Health Connect." },
      { q: "Is Attax suitable for beginners?", a: "Absolutely. The system is designed for every fitness level." },
      { q: "Can I improve without being an elite athlete?", a: "Yes. Attax rewards effort, participation, and consistency." },
      { q: "Is Attax available worldwide?", a: "Yes. Players from many countries already use the platform." },
    ],

    ctaH2: "Start competing through activity.",
    ctaBody1: "Every workout matters. Every effort contributes.",
    ctaBody2: "Every day creates new opportunities to progress. Download Attax and enter the arena.",
    ctaDownload: "Download Attax",
    ctaLearn: "Learn More",
  },

  fr: {
    heroLabel: "COMMENT FONCTIONNE ATTAX",
    heroTitle: "Activité réelle.\nCompétition réelle.",
    heroSubtitle1: "Attax transforme l'activité physique en une expérience compétitive construite autour de la régularité, de la progression et des défis quotidiens.",
    heroSubtitle2: "Pas de saisie manuelle. Pas de configuration complexe. Bouge et concours.",
    heroCta: "Télécharger Attax",

    foundationLabel: "Le Fondement",
    foundationH2: "Le fondement : l'activité dans la vie réelle",
    foundationP1: "Tout dans Attax commence par une seule chose.",
    foundationP2: "Le mouvement.",
    foundationP3: "Contrairement aux jeux traditionnels, la progression ne s'achète pas, ne se farm pas et ne s'automatise pas.",
    foundationP4: "Tes performances viennent de ce que tu accomplis dans la vie réelle.",
    foundationP5: "Marche.\nCourse.\nVélo.\nMusculation.\nSport.\nMouvement du quotidien.",
    foundationP6: "Le système récompense l'activité pratiquée en dehors de l'appli et la transforme en progression concrète à l'intérieur de l'expérience.",
    foundationP7: "Cela crée un lien direct entre l'effort physique et les résultats compétitifs.",
    foundationP8: "Plus tu es régulier, plus ta position se renforce.",

    connectLabel: "Connexion",
    connectH2: "Connecte ton activité",
    connectP1: "Attax s'intègre aux systèmes de santé déjà disponibles sur ton appareil.",
    connectP2: "Pour les utilisateurs d'iPhone, l'activité est synchronisée via Apple Santé.",
    connectP3: "Pour les utilisateurs Android, l'activité est synchronisée via Health Connect.",
    connectP4: "Cela permet d'importer automatiquement les séances et les données de mouvement.",
    connectP5: "Pas de tableurs.\nPas de saisie manuelle.\nPas de configuration compliquée.",
    connectP6: "L'objectif est simple : passer moins de temps à enregistrer l'activité et plus de temps à la pratiquer.",
    connectP7: "Une fois connecté, Attax transforme en continu le mouvement en progression.",

    activityLabel: "Activité",
    activityH2: "L'activité devient une puissance",
    activityP1: "La plupart des applications fitness s'arrêtent à la mesure. Attax va plus loin.",
    activityP2: "L'activité devient une ressource.",
    activityP3: "Chaque séance contribue à tes performances globales.\nChaque jour actif renforce ta position.\nChaque effort crée de l'élan.",
    activityP4: "Cela signifie que l'activité physique n'est plus isolée du reste de l'expérience.",
    activityP5: "Le mouvement influence directement la compétition. Le lien est immédiat et concret.",
    activityP6: "Plus ton effort est régulier, plus ton avantage potentiel est grand.",

    competitionLabel: "Compétition",
    competitionH2: "Compétition quotidienne",
    competitionP1: "Au cœur d'Attax se trouve la compétition. Les joueurs sont régulièrement mis en face d'adversaires.",
    competitionP2: "Chaque compétition représente une comparaison directe entre deux personnes actives.",
    competitionP3: "L'objectif est simple : bouger, s'entraîner, rester régulier, performer mieux.",
    competitionP4: "La compétition transforme une activité ordinaire en défi.",
    competitionP5: "Une marche n'est plus juste une marche.\nUne séance n'est plus juste une séance.",
    competitionP6: "Chaque action contribue à un concours en cours.",
    competitionP7: "Cela crée une puissante source de motivation que les applications fitness traditionnelles offrent rarement.",

    strategyLabel: "Stratégie",
    strategyH2: "La stratégie compte",
    strategyP1: "Attax ne se résume pas au volume d'activité.",
    strategyP2: "La prise de décision compte aussi.",
    strategyP3: "Les joueurs ont accès à des mécaniques stratégiques qui introduisent de la variation et de la profondeur tactique.",
    strategyP4: "Cela crée des situations où deux joueurs avec des niveaux d'activité similaires peuvent vivre des résultats différents.",
    strategyP5: "Le résultat est un système qui récompense à la fois la régularité et les choix intelligents.",
    strategyP6: "La progression est influencée par l'effort.\nLe succès est influencé par la stratégie.",
    strategyP7: "La combinaison crée une expérience plus engageante que le simple suivi d'activité.",

    progressionLabel: "Progression",
    progressionH2: "Ligues et progression",
    progressionP1: "La compétition prend du sens quand les progrès sont visibles.",
    progressionP2: "Attax organise les joueurs dans des environnements compétitifs où les classements évoluent dans le temps.",
    progressionP3: "Les victoires font monter les joueurs.\nLa régularité améliore le positionnement.\nLes bonnes performances ouvrent de nouvelles opportunités.",
    progressionP4: "Le système de classement crée des objectifs à long terme qui dépassent les séances individuelles.",
    progressionP5: "Au lieu de se concentrer exclusivement sur l'activité du jour, les joueurs sont encouragés à penser à leur progression sur des semaines et des mois.",
    progressionP6: "Cela transforme le fitness d'une tâche à court terme en un parcours à long terme.",

    whyLabel: "Pourquoi Ça Marche",
    whyH2: "Pourquoi le système fonctionne",
    whyP1: "Beaucoup de produits fitness peinent à fidéliser. Les gens commencent motivés. Puis l'engagement s'efface.",
    whyP2: "Attax a été conçu pour répondre à ce défi.",
    whyP3: "Le système combine plusieurs principes de motivation :",
    whyMotivation: ["Progression visible", "Objectifs quotidiens", "Responsabilité compétitive", "Prise de décision stratégique", "Classements à long terme"],
    whyP4: "Ensemble, ces systèmes créent une raison de revenir. Pas parce que l'appli l'exige. Parce que l'expérience reste engageante.",
    whyP5: "L'objectif n'est pas de forcer l'activité. L'objectif est de rendre l'activité plus gratifiante.",

    consLabel: "Régularité",
    consH2: "Construit autour de la régularité",
    consP1: "Les joueurs les plus forts ne sont pas forcément les plus athlétiques. Ils sont souvent les plus réguliers.",
    consP2: "Cette philosophie est au centre d'Attax. Le système n'attend pas la perfection. Il récompense la participation.",
    consP3: "Les petits efforts comptent.\nLe mouvement quotidien compte.\nLes habitudes à long terme comptent.",
    consP4: "Le progrès vient du fait de revenir régulièrement.",
    consP5: "Attax existe pour rendre ce processus plus agréable.",

    faqLabel: "FAQ",
    faqH2: "Questions fréquemment posées",
    faq: [
      { q: "Comment Attax suit-il l'activité ?", a: "Attax se connecte à Apple Santé et Health Connect pour synchroniser l'activité automatiquement." },
      { q: "Dois-je saisir mes séances manuellement ?", a: "Non. L'activité est importée automatiquement depuis les plateformes de santé compatibles." },
      { q: "Quelles activités comptent ?", a: "La marche, la course, le vélo, les séances de salle, le sport et de nombreuses autres formes de mouvement." },
      { q: "La régularité compte-t-elle ?", a: "Oui. La régularité est l'un des facteurs les plus importants pour la progression à long terme." },
      { q: "Ai-je besoin d'une montre connectée ?", a: "Oui. Attax nécessite une montre connectée ou un tracker de fitness (Apple Watch, Fitbit, Garmin ou similaire) pour synchroniser automatiquement ton activité via Apple Santé ou Health Connect." },
      { q: "Attax convient-il aux débutants ?", a: "Absolument. Le système est conçu pour tous les niveaux de forme physique." },
      { q: "Puis-je progresser sans être un athlète d'élite ?", a: "Oui. Attax récompense l'effort, la participation et la régularité." },
      { q: "Attax est-il disponible partout dans le monde ?", a: "Oui. Des joueurs de nombreux pays utilisent déjà la plateforme." },
    ],

    ctaH2: "Commence à concourir par l'activité.",
    ctaBody1: "Chaque séance compte. Chaque effort contribue.",
    ctaBody2: "Chaque jour crée de nouvelles opportunités de progresser. Télécharge Attax et entre dans l'arène.",
    ctaDownload: "Télécharger Attax",
    ctaLearn: "En savoir plus",
  },
};

export default function HowAttaxWorks() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "60vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Image src="/images/warmup.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.22) grayscale(0.25)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.6) 55%, rgba(5,5,5,0.25) 100%)" }} />
          <PageNavbar />
          <div className="hero-text-box" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem 4rem", maxWidth: "720px" }}>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>{p.heroLabel}</span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 1.5rem" }}>
              {p.heroTitle.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
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

          <Section label={p.foundationLabel}>
            <H2>{p.foundationH2}</H2>
            <p style={BODY}>{p.foundationP1}</p>
            <p style={{ ...BODY_EM, fontSize: "1.25rem" }}>{p.foundationP2}</p>
            <p style={BODY}>{p.foundationP3}</p>
            <p style={BODY}>{p.foundationP4}</p>
            <p style={BODY_EM}>{p.foundationP5.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.foundationP6}</p>
            <p style={BODY}>{p.foundationP7}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.foundationP8}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.connectLabel}>
            <H2>{p.connectH2}</H2>
            <p style={BODY}>{p.connectP1}</p>
            <p style={BODY}>{p.connectP2}</p>
            <p style={BODY}>{p.connectP3}</p>
            <p style={BODY}>{p.connectP4}</p>
            <p style={BODY_EM}>{p.connectP5.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.connectP6}</p>
            <p style={BODY}>{p.connectP7}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.activityLabel}>
            <H2>{p.activityH2}</H2>
            <p style={BODY}>{p.activityP1}</p>
            <p style={{ ...BODY_EM, fontSize: "1.125rem" }}>{p.activityP2}</p>
            <p style={BODY_EM}>{p.activityP3.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.activityP4}</p>
            <p style={BODY}>{p.activityP5}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.activityP6}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.competitionLabel}>
            <H2>{p.competitionH2}</H2>
            <p style={BODY}>{p.competitionP1}</p>
            <p style={BODY}>{p.competitionP2}</p>
            <p style={BODY}>{p.competitionP3}</p>
            <p style={BODY}>{p.competitionP4}</p>
            <p style={BODY_EM}>{p.competitionP5.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.competitionP6}</p>
            <p style={BODY}>{p.competitionP7}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.strategyLabel}>
            <H2>{p.strategyH2}</H2>
            <p style={BODY}>{p.strategyP1}</p>
            <p style={{ ...BODY_EM, fontSize: "1.125rem" }}>{p.strategyP2}</p>
            <p style={BODY}>{p.strategyP3}</p>
            <p style={BODY}>{p.strategyP4}</p>
            <p style={BODY}>{p.strategyP5}</p>
            <p style={BODY_EM}>{p.strategyP6.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.strategyP7}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.progressionLabel}>
            <H2>{p.progressionH2}</H2>
            <p style={BODY}>{p.progressionP1}</p>
            <p style={BODY}>{p.progressionP2}</p>
            <p style={BODY_EM}>{p.progressionP3.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.progressionP4}</p>
            <p style={BODY}>{p.progressionP5}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.progressionP6}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.whyLabel}>
            <H2>{p.whyH2}</H2>
            <p style={BODY}>{p.whyP1}</p>
            <p style={BODY}>{p.whyP2}</p>
            <p style={BODY}>{p.whyP3}</p>
            <div style={{ margin: "1.5rem 0 2rem" }}>
              {p.whyMotivation.map((m) => (
                <div key={m} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid #f0f0f0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
                  <span style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: 500 }}>{m}</span>
                </div>
              ))}
            </div>
            <p style={BODY}>{p.whyP4}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.whyP5}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.consLabel}>
            <H2>{p.consH2}</H2>
            <p style={BODY}>{p.consP1}</p>
            <p style={BODY}>{p.consP2}</p>
            <p style={BODY_EM}>{p.consP3.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</p>
            <p style={BODY}>{p.consP4}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.consP5}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.faqLabel}>
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.05, margin: "0 0 1.25rem" }}>{p.ctaH2}</h2>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 auto 0.5rem", maxWidth: "400px" }}>{p.ctaBody1}</p>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 auto 2.5rem", maxWidth: "400px" }}>{p.ctaBody2}</p>
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
