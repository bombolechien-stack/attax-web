"use client";

import Link from "next/link";
import Image from "next/image";
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
function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0d0d", margin: "2rem 0 0.75rem", letterSpacing: "-0.02em" }}>{children}</h3>;
}

type Lang = "en" | "fr";

const P: Record<Lang, {
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroSubtitle2: string;
  heroCta: string;
  secWhyFail: string;
  whyFailH2: string;
  whyFail1: string;
  whyFailEm: string;
  whyFail2: string;
  whyFail3: string;
  whyFail4: string;
  whyFailConclude: string;
  secCompetition: string;
  competitionH2: string;
  competition1: string;
  competitionEm: string;
  competition2: string;
  competitionEm2: string;
  competitionConclude: string;
  secDifferent: string;
  differentH2: string;
  different1: string;
  different2: string;
  differentEm: string;
  different3: string;
  whatMakes: string[];
  different4: string;
  secRealActivity: string;
  realActivityH2: string;
  realActivity1: string;
  realActivity2: string;
  realActivityEm: string;
  realActivity3: string;
  realActivity4: string;
  secDaily: string;
  dailyH2: string;
  daily1: string;
  dailyEm: string;
  daily2: string;
  daily3: string;
  secRankings: string;
  rankingsH2: string;
  rankings1: string;
  rankings2: string;
  rankings3: string;
  rankingsQuote: string;
  rankings4: string;
  secForEveryone: string;
  forEveryoneH2: string;
  forEveryone1: string;
  forEveryone2: string;
  forEveryoneEm: string;
  forEveryone3: string;
  secRetention: string;
  retentionH2: string;
  retention1: string;
  retentionConclusion: string;
  retention: { title: string; body: string }[];
  secWho: string;
  whoH2: string;
  who: { title: string; body: string }[];
  whoConclusion: string;
  secFaq: string;
  faqH2: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaDownload: string;
  ctaLearnMore: string;
}> = {
  en: {
    heroLabel: "FITNESS COMPETITION APP",
    heroTitle: "A better reason\nto stay active.",
    heroSubtitle: "Attax is a fitness competition app where real-world activity becomes a competitive advantage.",
    heroSubtitle2: "One duel a day against a player of your league, strategy cards every morning, a verdict every night at 9:30 PM.",
    heroCta: "Download Attax",
    secWhyFail: "Why Goals Fail",
    whyFailH2: "Why most fitness goals fail",
    whyFail1: "Every year, millions of people start a new fitness journey.",
    whyFailEm: "A gym membership.\nA running plan.\nA weight-loss goal.\nA promise to become more active.",
    whyFail2: "The challenge is rarely knowing what to do. The challenge is continuing.",
    whyFail3: "Most people understand the benefits of exercise: better health, more energy, improved fitness, long-term wellbeing.",
    whyFail4: "The problem is that these rewards often take weeks or months to appear. Human motivation works differently. We naturally respond to immediate feedback. We enjoy visible progress. We enjoy meaningful challenges. We enjoy winning.",
    whyFailConclude: "Traditional fitness applications focus on measurement. Attax focuses on engagement.",
    secCompetition: "Competition",
    competitionH2: "Competition creates motivation",
    competition1: "Competition is one of the oldest motivational systems in human history. People naturally push harder when there is something at stake.",
    competitionEm: "Sports are built around this principle.\nGames are built around this principle.\nMany successful educational systems use this principle.",
    competition2: "Competition transforms effort into purpose. The activity itself does not change. The reason for doing it does.",
    competitionEm2: "A walk becomes a contribution.\nA run becomes an opportunity.\nA workout becomes a competitive advantage.",
    competitionConclude: "This is why Attax uses competition as a motivational framework. The objective is not to create pressure. The objective is to make activity more meaningful.",
    secDifferent: "What's Different",
    differentH2: "What makes Attax different?",
    different1: "Most fitness applications ask you to compete against yourself. Attax allows you to compete against others.",
    different2: "The difference is significant. When activity influences rankings, victories, progression, and outcomes, engagement changes.",
    differentEm: "Every day feels different.\nEvery workout matters.\nEvery decision carries weight.",
    different3: "Attax combines:",
    whatMakes: [
      "Real heart-rate and step data",
      "A duel every day",
      "3 strategy cards a day",
      "Leagues of 8 players",
      "A global rank, from Rookie to Legend",
    ],
    different4: "The result feels less like a fitness tracker and more like a living competition.",
    secRealActivity: "Real Activity",
    realActivityH2: "Built around real activity",
    realActivity1: "Attax doesn't require a gym membership or elite ability. It needs one thing: a watch or band that measures your heart rate.",
    realActivity2: "The system rewards movement.",
    realActivityEm: "Running counts.\nCycling counts.\nGym sessions count.\nTeam sports count.\nWalking counts — every step.",
    realActivity3: "The objective is not to reward perfection. The objective is to reward consistency.",
    realActivity4: "Leagues bring together players of a similar level: accessible to beginners, still intense for experienced athletes.",
    secDaily: "Daily",
    dailyH2: "Daily competition",
    daily1: "Most challenges lose momentum because they remain unchanged. Attax introduces new opportunities every day.",
    dailyEm: "New opponents.\nNew decisions.\nNew outcomes.",
    daily2: "The competitive environment remains dynamic. Players are encouraged to return regularly because progress is always evolving.",
    daily3: "This creates a sense of continuity that traditional fitness challenges often lack.",
    secRankings: "Rankings",
    rankingsH2: "Rankings that matter",
    rankings1: "Progress feels more rewarding when it is visible. Every evening, your league standings update; across leagues, your rank climbs through 5 divisions.",
    rankings2: "Wins push you up, losses pull you down: every duel counts for your rank.",
    rankings3: "The ranking system creates long-term goals beyond individual workouts. Instead of asking “did I exercise today?” players begin asking:",
    rankingsQuote: "“Can I climb higher?”",
    rankings4: "That shift in perspective changes everything.",
    secForEveryone: "For Everyone",
    forEveryoneH2: "Competition without intimidation",
    forEveryone1: "Many people avoid competition because they imagine elite athletes dominating the experience. Attax was designed differently.",
    forEveryone2: "The goal is not to reward the strongest athlete on earth. You face players at your level, and your score covers 7 days: consistency wins.",
    forEveryoneEm: "Regular activity.\nLong-term participation.\nSteady improvement.",
    forEveryone3: "Everyone starts somewhere. Everyone can progress. This makes competition accessible while preserving motivation.",
    secRetention: "Retention",
    retentionH2: "Why people stay engaged",
    retention1: "The biggest challenge in fitness is retention. Attax addresses retention through multiple systems working together.",
    retentionConclusion: "Together these systems create a fitness experience designed for long-term engagement.",
    retention: [
      { title: "Progress", body: "Visible advancement creates momentum." },
      { title: "Competition", body: "Opponents create accountability." },
      { title: "Rankings", body: "Goals become tangible." },
      { title: "Strategy", body: "Decisions create variety." },
      { title: "Consistency", body: "Small actions remain meaningful." },
    ],
    secWho: "Who It's For",
    whoH2: "Who Attax is for",
    who: [
      { title: "Runners", body: "Turn every run into progression." },
      { title: "Walkers", body: "Transform daily movement into competition." },
      { title: "Cyclists", body: "Compete through every ride." },
      { title: "Gym enthusiasts", body: "Make workouts part of a larger system." },
      { title: "Busy professionals", body: "Stay motivated despite limited time." },
      { title: "Beginners", body: "Build consistency without pressure." },
    ],
    whoConclusion: "The platform rewards participation and effort at every level.",
    secFaq: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "What is a fitness competition app?", a: "An app that uses rankings, duels and challenges to motivate physical activity. In Attax, your real activity decides daily duels within leagues of 8 players." },
      { q: "How does Attax create competition?", a: "Every day, you face a player of your league in a duel decided by your last 7 days of activity and the strategy card you chose." },
      { q: "Can beginners compete?", a: "Yes. You join a league at your level, and every effort counts." },
      { q: "Does walking count?", a: "Yes. Your steps earn points all day long, and a brisk walk that gets your heart working counts as effort too." },
      { q: "Is Attax available on iPhone?", a: "Yes, through Apple Health." },
      { q: "Is Attax available on Android?", a: "Yes, through Health Connect (Android 8.0 or later)." },
      { q: "Does Attax require a smartwatch?", a: "Yes. You need a device that measures your heart rate — smartwatch, fitness band or chest strap — synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Amazfit, COROS and more on both; Samsung Galaxy Watch and Fitbit on Android only. Your phone alone counts your steps. Attax checks your connection before your first league." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads." },
    ],
    ctaTitle: "A better reason to move.",
    ctaBody: "Turn activity into duels. Turn consistency into wins. Download Attax and start your first league.",
    ctaDownload: "Download Attax",
    ctaLearnMore: "Learn More",
  },
  fr: {
    heroLabel: "APP DE COMPÉTITION FITNESS",
    heroTitle: "Une meilleure raison\nde rester actif.",
    heroSubtitle: "Attax est une application de compétition fitness où l'activité réelle devient un avantage compétitif.",
    heroSubtitle2: "Un duel par jour contre un joueur de ta ligue, des cartes stratégiques chaque matin, un verdict chaque soir à 21h30.",
    heroCta: "Télécharger Attax",
    secWhyFail: "Pourquoi les objectifs échouent",
    whyFailH2: "Pourquoi la plupart des objectifs fitness échouent",
    whyFail1: "Chaque année, des millions de personnes commencent un nouveau parcours fitness.",
    whyFailEm: "Un abonnement à la salle de sport.\nUn programme de course.\nUn objectif de perte de poids.\nUne promesse de devenir plus actif.",
    whyFail2: "Le défi est rarement de savoir quoi faire. Le défi, c'est de continuer.",
    whyFail3: "La plupart des gens comprennent les bienfaits de l'exercice : meilleure santé, plus d'énergie, meilleure forme physique, bien-être à long terme.",
    whyFail4: "Le problème est que ces récompenses prennent souvent des semaines ou des mois à apparaître. La motivation humaine fonctionne différemment. On répond naturellement aux retours immédiats. On aime les progrès visibles. On aime les défis significatifs. On aime gagner.",
    whyFailConclude: "Les applications fitness traditionnelles se concentrent sur la mesure. Attax se concentre sur l'engagement.",
    secCompetition: "Compétition",
    competitionH2: "La compétition crée la motivation",
    competition1: "La compétition est l'un des systèmes de motivation les plus anciens de l'histoire humaine. Les gens poussent naturellement plus fort quand il y a quelque chose en jeu.",
    competitionEm: "Le sport est construit autour de ce principe.\nLes jeux sont construits autour de ce principe.\nDe nombreux systèmes éducatifs réussis utilisent ce principe.",
    competition2: "La compétition transforme l'effort en but. L'activité elle-même ne change pas. La raison de la faire, oui.",
    competitionEm2: "Une marche devient une contribution.\nUne course devient une opportunité.\nUn entraînement devient un avantage compétitif.",
    competitionConclude: "C'est pourquoi Attax utilise la compétition comme cadre de motivation. L'objectif n'est pas de créer de la pression. L'objectif est de rendre l'activité plus significative.",
    secDifferent: "Ce qui est différent",
    differentH2: "Qu'est-ce qui rend Attax différent ?",
    different1: "La plupart des applications fitness te demandent de te compétitionner contre toi-même. Attax te permet de te compétitionner contre les autres.",
    different2: "La différence est significative. Quand l'activité influence les classements, les victoires, la progression et les résultats, l'engagement change.",
    differentEm: "Chaque jour est différent.\nChaque entraînement compte.\nChaque décision a du poids.",
    different3: "Attax combine :",
    whatMakes: [
      "De vraies données cardio et de pas",
      "Un duel chaque jour",
      "3 cartes stratégiques par jour",
      "Des ligues de 8 joueurs",
      "Un rang global, de Rookie à Legend",
    ],
    different4: "Le résultat ressemble moins à un tracker fitness et plus à une compétition vivante.",
    secRealActivity: "Activité réelle",
    realActivityH2: "Conçu autour de l'activité réelle",
    realActivity1: "Attax ne demande ni abonnement en salle ni niveau d'élite. Il lui faut une seule chose : une montre ou un bracelet qui mesure ta fréquence cardiaque.",
    realActivity2: "Le système récompense le mouvement.",
    realActivityEm: "La course compte.\nLe vélo compte.\nLa muscu compte.\nLes sports collectifs comptent.\nLa marche compte — chaque pas.",
    realActivity3: "L'objectif n'est pas de récompenser la perfection. L'objectif est de récompenser la régularité.",
    realActivity4: "Les ligues réunissent des joueurs de niveau proche : accessible aux débutants, toujours intense pour les sportifs confirmés.",
    secDaily: "Quotidien",
    dailyH2: "Compétition quotidienne",
    daily1: "La plupart des défis perdent de l'élan parce qu'ils restent inchangés. Attax introduit de nouvelles opportunités chaque jour.",
    dailyEm: "Nouveaux adversaires.\nNouvelles décisions.\nNouveaux résultats.",
    daily2: "L'environnement compétitif reste dynamique. Les joueurs sont encouragés à revenir régulièrement parce que la progression évolue toujours.",
    daily3: "Cela crée un sentiment de continuité que les défis fitness traditionnels manquent souvent.",
    secRankings: "Classements",
    rankingsH2: "Des classements qui comptent",
    rankings1: "Le progrès est plus gratifiant quand il est visible. Chaque soir, le classement de ta ligue se met à jour ; de ligue en ligue, ton rang grimpe à travers 5 divisions.",
    rankings2: "Les victoires te font monter, les défaites te font descendre : chaque duel compte pour ton rang.",
    rankings3: "Le système de classement crée des objectifs à long terme au-delà des entraînements individuels. Au lieu de se demander « est-ce que j’ai fait du sport aujourd’hui ? », les joueurs commencent à se demander :",
    rankingsQuote: "« Est-ce que je peux grimper plus haut ? »",
    rankings4: "Ce changement de perspective change tout.",
    secForEveryone: "Pour tout le monde",
    forEveryoneH2: "La compétition sans intimidation",
    forEveryone1: "Beaucoup de gens évitent la compétition parce qu'ils imaginent des athlètes d'élite dominer l'expérience. Attax a été conçu différemment.",
    forEveryone2: "Le but n'est pas de récompenser le meilleur athlète de la planète. Tu affrontes des joueurs de ton niveau, et ton score couvre 7 jours : c'est la régularité qui gagne.",
    forEveryoneEm: "Activité régulière.\nParticipation à long terme.\nAmélioration constante.",
    forEveryone3: "Tout le monde commence quelque part. Tout le monde peut progresser. Cela rend la compétition accessible tout en préservant la motivation.",
    secRetention: "Rétention",
    retentionH2: "Pourquoi les gens restent engagés",
    retention1: "Le plus grand défi dans le fitness est la rétention. Attax aborde la rétention par plusieurs systèmes fonctionnant ensemble.",
    retentionConclusion: "Ensemble, ces systèmes créent une expérience fitness conçue pour un engagement à long terme.",
    retention: [
      { title: "Progression", body: "L'avancement visible crée de l'élan." },
      { title: "Compétition", body: "Les adversaires créent de la responsabilisation." },
      { title: "Classements", body: "Les objectifs deviennent tangibles." },
      { title: "Stratégie", body: "Les décisions créent de la variété." },
      { title: "Régularité", body: "Les petites actions restent significatives." },
    ],
    secWho: "Pour qui",
    whoH2: "Pour qui est Attax",
    who: [
      { title: "Coureurs", body: "Transforme chaque course en progression." },
      { title: "Marcheurs", body: "Transforme le mouvement quotidien en compétition." },
      { title: "Cyclistes", body: "Compétitionne à chaque sortie." },
      { title: "Fans de salle", body: "Intègre tes entraînements dans un système plus grand." },
      { title: "Professionnels actifs", body: "Reste motivé malgré un temps limité." },
      { title: "Débutants", body: "Construis la régularité sans pression." },
    ],
    whoConclusion: "La plateforme récompense la participation et l'effort à tous les niveaux.",
    secFaq: "FAQ",
    faqH2: "Questions fréquentes",
    faq: [
      { q: "Qu'est-ce qu'une appli de compétition sportive ?", a: "Une appli qui utilise classements, duels et défis pour motiver l'activité physique. Dans Attax, ton activité réelle décide de duels quotidiens au sein de ligues de 8 joueurs." },
      { q: "Comment Attax crée-t-il la compétition ?", a: "Chaque jour, tu affrontes un joueur de ta ligue dans un duel décidé par tes 7 derniers jours d'activité et la carte stratégique que tu as choisie." },
      { q: "Les débutants peuvent-ils jouer ?", a: "Oui. Tu rejoins une ligue de ton niveau, et chaque effort compte." },
      { q: "La marche compte-t-elle ?", a: "Oui. Tes pas rapportent des points toute la journée, et une marche rapide qui fait travailler ton cœur compte aussi comme effort." },
      { q: "Attax est-il disponible sur iPhone ?", a: "Oui, via Apple Santé." },
      { q: "Attax est-il disponible sur Android ?", a: "Oui, via Health Connect (Android 8.0 ou plus récent)." },
      { q: "Attax nécessite-t-il une montre connectée ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque — montre, bracelet ou ceinture cardio — synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Amazfit, COROS et d'autres sur les deux ; Samsung Galaxy Watch et Fitbit sur Android uniquement. Ton téléphone seul compte tes pas. Attax vérifie ta connexion avant ta première ligue." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité." },
    ],
    ctaTitle: "Une meilleure raison de bouger.",
    ctaBody: "Transforme ton activité en duels. Transforme ta régularité en victoires. Télécharge Attax et lance ta première ligue.",
    ctaDownload: "Télécharger Attax",
    ctaLearnMore: "En savoir plus",
  },
};

export default function FitnessCompetitionApp() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "60vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Image src="/images/cycling-race.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.22) grayscale(0.25)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.6) 55%, rgba(5,5,5,0.25) 100%)" }} />
          <PageNavbar />
          <div className="hero-text-box" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem 4rem", maxWidth: "720px" }}>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>{p.heroLabel}</span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 1.5rem" }}>
              {p.heroTitle.split("\n").map((line, i) => (
                <span key={i}>{line}{i < p.heroTitle.split("\n").length - 1 && <br />}</span>
              ))}
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 0.75rem", maxWidth: "540px" }}>
              {p.heroSubtitle}
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

          <Section label={p.secWhyFail}>
            <H2>{p.whyFailH2}</H2>
            <p style={BODY}>{p.whyFail1}</p>
            <p style={BODY_EM}>
              {p.whyFailEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.whyFail2}</p>
            <p style={BODY}>{p.whyFail3}</p>
            <p style={BODY}>{p.whyFail4}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.whyFailConclude}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secCompetition}>
            <H2>{p.competitionH2}</H2>
            <p style={BODY}>{p.competition1}</p>
            <p style={BODY_EM}>
              {p.competitionEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.competition2}</p>
            <p style={BODY_EM}>
              {p.competitionEm2.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.competitionConclude}</p>
          </Section>

          <hr style={RULE} />

          <div style={{ position: "relative", height: "clamp(380px, 52vh, 620px)", overflow: "hidden", borderRadius: "20px", margin: "5rem 0" }}>
            <Image src="/images/escrime.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 45%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.72) 100%)" }} />
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.75rem", right: "2.75rem", zIndex: 1 }}>
              <p style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1.3, maxWidth: "580px", margin: 0 }}>
                "Real competition. Real motivation. Every single day."
              </p>
            </div>
          </div>

          <Section label={p.secDifferent}>
            <H2>{p.differentH2}</H2>
            <p style={BODY}>{p.different1}</p>
            <p style={BODY}>{p.different2}</p>
            <p style={BODY_EM}>
              {p.differentEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.different3}</p>
            <div style={{ margin: "1.5rem 0 2rem" }}>
              {p.whatMakes.map((m) => (
                <div key={m} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid #f0f0f0" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#0d0d0d", flexShrink: 0 }} />
                  <span style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: 500 }}>{m}</span>
                </div>
              ))}
            </div>
            <p style={BODY}>{p.different4}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secRealActivity}>
            <H2>{p.realActivityH2}</H2>
            <p style={BODY}>{p.realActivity1}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.realActivity2}</p>
            <p style={BODY_EM}>
              {p.realActivityEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.realActivity3}</p>
            <p style={BODY}>{p.realActivity4}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secDaily}>
            <H2>{p.dailyH2}</H2>
            <p style={BODY}>{p.daily1}</p>
            <p style={BODY_EM}>
              {p.dailyEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.daily2}</p>
            <p style={BODY}>{p.daily3}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secRankings}>
            <H2>{p.rankingsH2}</H2>
            <p style={BODY}>{p.rankings1}</p>
            <p style={BODY}>{p.rankings2}</p>
            <p style={BODY}>{p.rankings3}</p>
            <p style={{ ...BODY, fontWeight: 700, color: "#0d0d0d", fontSize: "1.25rem", fontStyle: "italic" }}>{p.rankingsQuote}</p>
            <p style={BODY}>{p.rankings4}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secForEveryone}>
            <H2>{p.forEveryoneH2}</H2>
            <p style={BODY}>{p.forEveryone1}</p>
            <p style={BODY}>{p.forEveryone2}</p>
            <p style={BODY_EM}>
              {p.forEveryoneEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.forEveryone3}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secRetention}>
            <H2>{p.retentionH2}</H2>
            <p style={BODY}>{p.retention1}</p>
            <div style={{ marginTop: "2rem" }}>
              {p.retention.map((r) => (
                <div key={r.title} style={{ borderTop: "1px solid #f0f0f0", padding: "1.5rem 0" }}>
                  <H3>{r.title}</H3>
                  <p style={{ ...BODY, margin: 0 }}>{r.body}</p>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: "2rem", fontWeight: 600, color: "#0d0d0d" }}>{p.retentionConclusion}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secWho}>
            <H2>{p.whoH2}</H2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginBottom: "2rem" }}>
              {p.who.map((w, i) => (
                <div key={w.title} style={{ padding: "1.75rem", borderTop: "1px solid #f0f0f0", borderLeft: i % 2 === 1 ? "1px solid #f0f0f0" : "none", paddingLeft: i % 2 === 0 ? 0 : "1.75rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem" }}>{w.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{w.body}</p>
                </div>
              ))}
            </div>
            <p style={BODY}>{p.whoConclusion}</p>
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.045em", lineHeight: 1.05, margin: "0 0 1.25rem" }}>{p.ctaTitle}</h2>
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 auto 2.5rem", maxWidth: "400px" }}>{p.ctaBody}</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#0d0d0d", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {p.ctaDownload}
              </a>
              <Link href="/discover" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#f4f4f4", color: "#0d0d0d", fontWeight: 600, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: "999px", textDecoration: "none" }}>
                {p.ctaLearnMore}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
