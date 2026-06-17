"use client";

import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";

const BODY: React.CSSProperties = { fontSize: "1.0625rem", color: "#444", lineHeight: 1.85, margin: "0 0 1.25rem" };
const BODY_EM: React.CSSProperties = { ...BODY, color: "#1a1a1a", fontWeight: 500 };
const RULE: React.CSSProperties = { border: "none", borderTop: "1px solid #ebebeb", margin: "5rem 0" };
const LABEL_STYLE: React.CSSProperties = { fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: "1.25rem" };

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
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
  secWhatIsIt: string;
  whatIsItH2: string;
  whatIsIt1: string;
  whatIsIt2: string;
  whatIsIt3: string;
  whatIsItEm: string;
  whatIsIt4: string;
  whatIsIt5: string;
  whatIsIt6: string;
  secMotivation: string;
  motivationH2: string;
  motivation1: string;
  motivation2: string;
  motivationEm: string;
  motivation3: string;
  motivation4: string;
  motivationEm2: string;
  motivationConclude: string;
  secPsychology: string;
  psychologyH2: string;
  psychology1: string;
  psychologyConclusion: string;
  psych: { title: string; body: string }[];
  secCompetition: string;
  competitionH2: string;
  competition1: string;
  competitionEm: string;
  competition2: string;
  competition3: string;
  competitionEm2: string;
  competition4: string;
  competitionConclude: string;
  secEvolution: string;
  evolutionH2: string;
  evolution1: string;
  evolution2: string;
  evolutionConclude: string;
  evolution3: string;
  evolutionEm: string;
  secHowAttax: string;
  howAttaxH2: string;
  howAttax1: string;
  howAttaxConclusion: string;
  gamificationSystems: { title: string; body: string }[];
  secNotPerfection: string;
  notPerfectionH2: string;
  notPerfection1: string;
  notPerfection2: string;
  notPerfection3: string;
  notPerfectionEm: string;
  notPerfectionConclude: string;
  secBenefits: string;
  benefitsH2: string;
  benefits1: string;
  benefitsConclusion: string;
  benefits: { title: string; body: string }[];
  secFaq: string;
  faqH2: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaDownload: string;
  ctaLearnMore: string;
}> = {
  en: {
    heroLabel: "FITNESS GAMIFICATION",
    heroTitle: "Why games succeed\nwhere motivation fails.",
    heroSubtitle: "Fitness gamification is changing the way people exercise. By combining competition, progression, rewards, and habit formation, gamified fitness experiences can help people stay active longer and enjoy the process more.",
    heroSubtitle2: "Attax was built around this idea.",
    heroCta: "Download Attax",
    secWhatIsIt: "What Is It",
    whatIsItH2: "What is fitness gamification?",
    whatIsIt1: "Fitness gamification is the practice of applying game mechanics to physical activity.",
    whatIsIt2: "Instead of treating exercise as a simple task, gamification transforms movement into a system of goals, rewards, progression, and achievement.",
    whatIsIt3: "Many of the most successful products in the world use gamification.",
    whatIsItEm: "Video games.\nLanguage learning platforms.\nProductivity applications.\nEducational tools.",
    whatIsIt4: "The reason is simple. Humans naturally respond to progress. We enjoy seeing improvement. We enjoy reaching milestones. We enjoy overcoming challenges.",
    whatIsIt5: "Fitness gamification takes these principles and applies them to exercise.",
    whatIsIt6: "The objective is not to make fitness easier. The objective is to make fitness more engaging.",
    secMotivation: "Why Motivation Fades",
    motivationH2: "Why motivation disappears",
    motivation1: "One of the biggest challenges in fitness is not starting. It is continuing.",
    motivation2: "Most people begin a fitness journey with enthusiasm.",
    motivationEm: "A new gym membership.\nA new running plan.\nA new health objective.",
    motivation3: "For a few days or weeks, motivation feels effortless. Then reality arrives. Schedules become busy. Energy levels fluctuate. The novelty disappears.",
    motivation4: "Not because they don’t care. Not because they don’t know what to do. Because motivation is difficult to sustain when there is little feedback.",
    motivationEm2: "A graph can be useful.\nA statistic can be informative.\nNeither necessarily creates excitement.",
    motivationConclude: "Gamification introduces something different: engagement.",
    secPsychology: "The Psychology",
    psychologyH2: "The psychology behind gamification",
    psychology1: "Gamification works because it aligns with several psychological principles that influence human behavior.",
    psychologyConclusion: "Together, these elements create experiences that feel rewarding long before major fitness results become visible.",
    psych: [
      { title: "Progress", body: "People enjoy moving forward. Visible progression creates satisfaction and encourages continued effort." },
      { title: "Achievement", body: "Small victories reinforce positive habits. Milestones create momentum." },
      { title: "Competition", body: "Competition increases focus and engagement. Even friendly rivalry can dramatically increase motivation." },
      { title: "Feedback", body: "Immediate feedback helps people understand the impact of their actions." },
      { title: "Consistency", body: "Gamified systems encourage regular participation rather than occasional bursts of effort." },
    ],
    secCompetition: "Why Competition Works",
    competitionH2: "Why competition is so powerful",
    competition1: "Competition is one of the most effective forms of motivation. This principle appears everywhere.",
    competitionEm: "Sports.\nVideo games.\nEducation.\nProfessional environments.",
    competition2: "The reason is simple. Competition creates meaning.",
    competition3: "Running five kilometers alone can feel routine. Running five kilometers while trying to outperform an opponent feels different.",
    competitionEm2: "The physical activity remains identical.\nThe context changes completely.",
    competition4: "Competition transforms effort into purpose. This is one of the foundations of Attax.",
    competitionConclude: "The objective is not to create stress. The objective is to create engagement.",
    secEvolution: "The Evolution",
    evolutionH2: "The evolution of fitness apps",
    evolution1: "The first generation of fitness apps focused on tracking: steps, calories, distance, heart rate.",
    evolution2: "The second generation introduced social features: friends, leaderboards, sharing, challenges.",
    evolutionConclude: "The next evolution combines fitness and game design.",
    evolution3: "Instead of simply measuring movement, applications actively transform movement into progression.",
    evolutionEm: "Activity stops being data.\nActivity becomes gameplay.",
    secHowAttax: "How Attax Applies It",
    howAttaxH2: "How Attax applies gamification",
    howAttax1: "Attax combines several gamification systems into a single experience.",
    howAttaxConclusion: "These systems work together to create a fitness experience that feels engaging long after traditional motivation begins to fade.",
    gamificationSystems: [
      { title: "Real-world activity", body: "Movement powers progression. The game begins outside the screen." },
      { title: "Daily competition", body: "Players regularly compete against real opponents. Activity influences outcomes." },
      { title: "Strategic decisions", body: "Players make choices that affect how competitions unfold." },
      { title: "League progression", body: "Performance contributes to rankings and advancement." },
      { title: "Long-term objectives", body: "Progress accumulates over time. Consistency creates results." },
    ],
    secNotPerfection: "Not Perfection",
    notPerfectionH2: "The goal is not perfection",
    notPerfection1: "One of the biggest misconceptions in fitness is that success belongs to extraordinary performers.",
    notPerfection2: "In reality, success often belongs to consistent performers.",
    notPerfection3: "Small actions repeated over time create powerful results. Attax was designed around this philosophy.",
    notPerfectionEm: "A walk matters.\nA workout matters.\nA bike ride matters.\nEvery effort contributes.",
    notPerfectionConclude: "The objective is not to be perfect. The objective is to keep moving.",
    secBenefits: "Benefits",
    benefitsH2: "Benefits of fitness gamification",
    benefits1: "People who engage with gamified fitness experiences often report several advantages.",
    benefitsConclusion: "These benefits explain why gamification continues to become an important part of modern fitness products.",
    benefits: [
      { title: "Improved consistency", body: "Exercise becomes easier to maintain." },
      { title: "Greater engagement", body: "Activity feels more rewarding." },
      { title: "Increased motivation", body: "Goals become clearer." },
      { title: "Better accountability", body: "Competition creates commitment." },
      { title: "More enjoyment", body: "Fitness becomes something people look forward to." },
    ],
    secFaq: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "What is fitness gamification?", a: "Fitness gamification applies game mechanics such as progression, competition, rewards, and achievements to physical activity." },
      { q: "Why does gamification work?", a: "Because humans naturally respond to progress, goals, competition, and feedback." },
      { q: "Can gamification improve exercise habits?", a: "Many studies suggest that gamified systems can improve engagement and long-term consistency." },
      { q: "Is Attax a fitness game?", a: "Yes. Attax combines real-world activity with competition and progression systems inspired by games." },
      { q: "Does fitness gamification replace discipline?", a: "No. It supports discipline by making healthy habits more engaging." },
      { q: "Who benefits from fitness gamification?", a: "Beginners, experienced athletes, and anyone looking for additional motivation." },
      { q: "Do I need a smartwatch to use Attax?", a: "Yes. Attax requires a smartwatch or fitness tracker (Apple Watch, Fitbit, Garmin, or similar) to automatically synchronize your activity through Apple Health or Health Connect." },
    ],
    ctaTitle: "Turn activity into progression.",
    ctaBody: "Join a fitness experience designed around competition, consistency, and long-term motivation. Download Attax today.",
    ctaDownload: "Download Attax",
    ctaLearnMore: "Learn More",
  },
  fr: {
    heroLabel: "GAMIFICATION DU FITNESS",
    heroTitle: "Pourquoi les jeux réussissent\nlà où la motivation échoue.",
    heroSubtitle: "La gamification du fitness change la façon dont les gens font de l'exercice. En combinant compétition, progression, récompenses et formation d'habitudes, les expériences de fitness gamifiées peuvent aider les gens à rester actifs plus longtemps et à apprécier davantage le processus.",
    heroSubtitle2: "Attax a été conçu autour de cette idée.",
    heroCta: "Télécharger Attax",
    secWhatIsIt: "C'est quoi",
    whatIsItH2: "Qu'est-ce que la gamification du fitness ?",
    whatIsIt1: "La gamification du fitness consiste à appliquer des mécaniques de jeu à l'activité physique.",
    whatIsIt2: "Au lieu de traiter l'exercice comme une simple tâche, la gamification transforme le mouvement en un système d'objectifs, de récompenses, de progression et d'accomplissements.",
    whatIsIt3: "Beaucoup des produits les plus réussis au monde utilisent la gamification.",
    whatIsItEm: "Les jeux vidéo.\nLes plateformes d'apprentissage des langues.\nLes applications de productivité.\nLes outils éducatifs.",
    whatIsIt4: "La raison est simple. Les humains répondent naturellement au progrès. On aime voir s'améliorer. On aime atteindre des jalons. On aime surmonter des défis.",
    whatIsIt5: "La gamification du fitness prend ces principes et les applique à l'exercice.",
    whatIsIt6: "L'objectif n'est pas de rendre le fitness plus facile. L'objectif est de rendre le fitness plus engageant.",
    secMotivation: "Pourquoi la motivation s'efface",
    motivationH2: "Pourquoi la motivation disparaît",
    motivation1: "L'un des plus grands défis du fitness n'est pas de commencer. C'est de continuer.",
    motivation2: "La plupart des gens commencent un parcours fitness avec enthousiasme.",
    motivationEm: "Un nouvel abonnement à la salle de sport.\nUn nouveau programme de course.\nUn nouvel objectif santé.",
    motivation3: "Pendant quelques jours ou quelques semaines, la motivation semble sans effort. Puis la réalité arrive. Les emplois du temps se remplissent. Les niveaux d'énergie fluctuent. La nouveauté disparaît.",
    motivation4: "Pas parce qu'on ne s'en soucie pas. Pas parce qu'on ne sait pas quoi faire. Parce que la motivation est difficile à maintenir quand il y a peu de retour.",
    motivationEm2: "Un graphique peut être utile.\nUne statistique peut être informative.\nNi l'un ni l'autre ne crée nécessairement de l'enthousiasme.",
    motivationConclude: "La gamification introduit quelque chose de différent : l'engagement.",
    secPsychology: "La psychologie",
    psychologyH2: "La psychologie derrière la gamification",
    psychology1: "La gamification fonctionne parce qu'elle s'aligne sur plusieurs principes psychologiques qui influencent le comportement humain.",
    psychologyConclusion: "Ensemble, ces éléments créent des expériences qui semblent gratifiantes bien avant que les résultats fitness majeurs ne deviennent visibles.",
    psych: [
      { title: "Progression", body: "Les gens aiment avancer. Une progression visible crée de la satisfaction et encourage l'effort continu." },
      { title: "Accomplissement", body: "Les petites victoires renforcent les habitudes positives. Les jalons créent de l'élan." },
      { title: "Compétition", body: "La compétition augmente la concentration et l'engagement. Même une rivalité amicale peut considérablement augmenter la motivation." },
      { title: "Retour d'information", body: "Un retour immédiat aide les gens à comprendre l'impact de leurs actions." },
      { title: "Régularité", body: "Les systèmes gamifiés encouragent une participation régulière plutôt que des poussées d'effort occasionnelles." },
    ],
    secCompetition: "Pourquoi la compétition fonctionne",
    competitionH2: "Pourquoi la compétition est si puissante",
    competition1: "La compétition est l'une des formes de motivation les plus efficaces. Ce principe apparaît partout.",
    competitionEm: "Le sport.\nLes jeux vidéo.\nL'éducation.\nLes environnements professionnels.",
    competition2: "La raison est simple. La compétition crée du sens.",
    competition3: "Courir cinq kilomètres seul peut sembler routinier. Courir cinq kilomètres en essayant de surpasser un adversaire, c'est différent.",
    competitionEm2: "L'activité physique reste identique.\nLe contexte change complètement.",
    competition4: "La compétition transforme l'effort en but. C'est l'une des fondations d'Attax.",
    competitionConclude: "L'objectif n'est pas de créer du stress. L'objectif est de créer de l'engagement.",
    secEvolution: "L'évolution",
    evolutionH2: "L'évolution des applications fitness",
    evolution1: "La première génération d'applications fitness se concentrait sur le suivi : pas, calories, distance, fréquence cardiaque.",
    evolution2: "La deuxième génération a introduit des fonctionnalités sociales : amis, classements, partage, défis.",
    evolutionConclude: "La prochaine évolution combine fitness et game design.",
    evolution3: "Au lieu de simplement mesurer le mouvement, les applications transforment activement le mouvement en progression.",
    evolutionEm: "L'activité cesse d'être des données.\nL'activité devient du gameplay.",
    secHowAttax: "Comment Attax l'applique",
    howAttaxH2: "Comment Attax applique la gamification",
    howAttax1: "Attax combine plusieurs systèmes de gamification en une seule expérience.",
    howAttaxConclusion: "Ces systèmes fonctionnent ensemble pour créer une expérience fitness qui reste engageante bien après que la motivation traditionnelle commence à s'estomper.",
    gamificationSystems: [
      { title: "Activité réelle", body: "Le mouvement alimente la progression. Le jeu commence en dehors de l'écran." },
      { title: "Compétition quotidienne", body: "Les joueurs s'affrontent régulièrement contre de vrais adversaires. L'activité influence les résultats." },
      { title: "Décisions stratégiques", body: "Les joueurs font des choix qui affectent le déroulement des compétitions." },
      { title: "Progression en ligue", body: "Les performances contribuent aux classements et à l'avancement." },
      { title: "Objectifs à long terme", body: "Les progrès s'accumulent au fil du temps. La régularité crée des résultats." },
    ],
    secNotPerfection: "Pas la perfection",
    notPerfectionH2: "L'objectif n'est pas la perfection",
    notPerfection1: "L'une des plus grandes idées reçues dans le fitness est que le succès appartient aux performeurs extraordinaires.",
    notPerfection2: "En réalité, le succès appartient souvent aux performeurs réguliers.",
    notPerfection3: "De petites actions répétées au fil du temps créent des résultats puissants. Attax a été conçu autour de cette philosophie.",
    notPerfectionEm: "Une marche compte.\nUn entraînement compte.\nUne sortie vélo compte.\nChaque effort contribue.",
    notPerfectionConclude: "L'objectif n'est pas d'être parfait. L'objectif est de continuer à bouger.",
    secBenefits: "Bénéfices",
    benefitsH2: "Les bénéfices de la gamification du fitness",
    benefits1: "Les personnes qui s'engagent dans des expériences fitness gamifiées rapportent souvent plusieurs avantages.",
    benefitsConclusion: "Ces bénéfices expliquent pourquoi la gamification continue de devenir une partie importante des produits fitness modernes.",
    benefits: [
      { title: "Meilleure régularité", body: "L'exercice devient plus facile à maintenir." },
      { title: "Plus d'engagement", body: "L'activité semble plus gratifiante." },
      { title: "Motivation accrue", body: "Les objectifs deviennent plus clairs." },
      { title: "Responsabilisation", body: "La compétition crée de l'engagement." },
      { title: "Plus de plaisir", body: "Le fitness devient quelque chose qu'on attend avec impatience." },
    ],
    secFaq: "FAQ",
    faqH2: "Questions fréquentes",
    faq: [
      { q: "Qu'est-ce que la gamification du fitness ?", a: "La gamification du fitness applique des mécaniques de jeu telles que la progression, la compétition, les récompenses et les accomplissements à l'activité physique." },
      { q: "Pourquoi la gamification fonctionne-t-elle ?", a: "Parce que les humains répondent naturellement au progrès, aux objectifs, à la compétition et au retour d'information." },
      { q: "La gamification peut-elle améliorer les habitudes d'exercice ?", a: "De nombreuses études suggèrent que les systèmes gamifiés peuvent améliorer l'engagement et la régularité à long terme." },
      { q: "Attax est-il un jeu fitness ?", a: "Oui. Attax combine l'activité réelle avec des systèmes de compétition et de progression inspirés des jeux." },
      { q: "La gamification remplace-t-elle la discipline ?", a: "Non. Elle soutient la discipline en rendant les habitudes saines plus engageantes." },
      { q: "Qui bénéficie de la gamification du fitness ?", a: "Les débutants, les athlètes expérimentés et toute personne cherchant une motivation supplémentaire." },
      { q: "Ai-je besoin d'une montre connectée pour utiliser Attax ?", a: "Oui. Attax nécessite une montre connectée ou un tracker de fitness (Apple Watch, Fitbit, Garmin ou similaire) pour synchroniser automatiquement ton activité via Apple Health ou Health Connect." },
    ],
    ctaTitle: "Transforme l'activité en progression.",
    ctaBody: "Rejoins une expérience fitness conçue autour de la compétition, de la régularité et de la motivation à long terme. Télécharge Attax aujourd'hui.",
    ctaDownload: "Télécharger Attax",
    ctaLearnMore: "En savoir plus",
  },
};

export default function FitnessGamification() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "12px" }}>
        <div style={{ position: "relative", backgroundColor: "#0d0d0d", borderRadius: "24px", minHeight: "60vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0d0d0d 0%, #1e1a2e 50%, #0d0d0d 100%)" }} />
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
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.32)", lineHeight: 1.75, margin: "0 0 2.5rem", maxWidth: "480px" }}>{p.heroSubtitle2}</p>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "13px 26px", borderRadius: "999px", textDecoration: "none", alignSelf: "flex-start" }}>
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {p.heroCta}
            </a>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "7rem 4rem" }}>

          <Section label={p.secWhatIsIt}>
            <H2>{p.whatIsItH2}</H2>
            <p style={BODY}>{p.whatIsIt1}</p>
            <p style={BODY}>{p.whatIsIt2}</p>
            <p style={BODY}>{p.whatIsIt3}</p>
            <p style={BODY_EM}>
              {p.whatIsItEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.whatIsIt4}</p>
            <p style={BODY}>{p.whatIsIt5}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.whatIsIt6}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secMotivation}>
            <H2>{p.motivationH2}</H2>
            <p style={BODY}>{p.motivation1}</p>
            <p style={BODY}>{p.motivation2}</p>
            <p style={BODY_EM}>
              {p.motivationEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.motivation3}</p>
            <p style={BODY}>{p.motivation4}</p>
            <p style={BODY}>
              {lang === "en"
                ? "This is where traditional fitness applications often struggle. They provide information. But information alone is rarely enough."
                : "C'est là où les applications fitness traditionnelles peinent souvent. Elles fournissent de l'information. Mais l'information seule est rarement suffisante."}
            </p>
            <p style={BODY_EM}>
              {p.motivationEm2.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.motivationConclude}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secPsychology}>
            <H2>{p.psychologyH2}</H2>
            <p style={BODY}>{p.psychology1}</p>
            <div style={{ marginTop: "2rem" }}>
              {p.psych.map((item) => (
                <div key={item.title} style={{ borderTop: "1px solid #f0f0f0", padding: "1.75rem 0" }}>
                  <H3>{item.title}</H3>
                  <p style={{ ...BODY, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: "2rem" }}>{p.psychologyConclusion}</p>
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
            <p style={BODY}>{p.competition3}</p>
            <p style={BODY_EM}>
              {p.competitionEm2.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={BODY}>{p.competition4}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.competitionConclude}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secEvolution}>
            <H2>{p.evolutionH2}</H2>
            <p style={BODY}>{p.evolution1}</p>
            <p style={BODY}>{p.evolution2}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.evolutionConclude}</p>
            <p style={BODY}>{p.evolution3}</p>
            <p style={BODY_EM}>
              {p.evolutionEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secHowAttax}>
            <H2>{p.howAttaxH2}</H2>
            <p style={BODY}>{p.howAttax1}</p>
            <div style={{ marginTop: "2rem" }}>
              {p.gamificationSystems.map((s, i) => (
                <div key={s.title} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1.5rem", padding: "1.75rem 0", borderTop: "1px solid #f0f0f0" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ccc", paddingTop: "3px" }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>{s.title}</h3>
                    <p style={{ ...BODY, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: "2rem" }}>{p.howAttaxConclusion}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secNotPerfection}>
            <H2>{p.notPerfectionH2}</H2>
            <p style={BODY}>{p.notPerfection1}</p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.notPerfection2}</p>
            <p style={BODY}>{p.notPerfection3}</p>
            <p style={BODY_EM}>
              {p.notPerfectionEm.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
            <p style={{ ...BODY, fontWeight: 600, color: "#0d0d0d" }}>{p.notPerfectionConclude}</p>
          </Section>

          <hr style={RULE} />

          <Section label={p.secBenefits}>
            <H2>{p.benefitsH2}</H2>
            <p style={BODY}>{p.benefits1}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginTop: "2rem" }}>
              {p.benefits.map((b, i) => (
                <div key={b.title} style={{ padding: "1.75rem", borderTop: "1px solid #f0f0f0", borderLeft: i % 2 === 1 ? "1px solid #f0f0f0" : "none", paddingLeft: i % 2 === 0 ? 0 : "1.75rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", margin: "0 0 0.5rem" }}>{b.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{b.body}</p>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: "2rem" }}>{p.benefitsConclusion}</p>
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
            <p style={{ fontSize: "1.0625rem", color: "#666", lineHeight: 1.75, margin: "0 auto 2.5rem", maxWidth: "420px" }}>{p.ctaBody}</p>
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
