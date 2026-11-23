"use client";

// Restylée le 21/11 au système de l'accueil (src/components/site/Site.tsx) ; textes (P) et liens inchangés.
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import "../site-seo-a.css";
import { SitePage, PageHero, ScanBg, Block, HairList, Lines, Reveal, FinalCta, AppleIcon } from "@/components/site/Site";

/** Titre du héros : lignes séparées par \n, la dernière en italique serif (comme PinTitle). */
function Title({ text }: { text: string }) {
  const l = text.split("\n");
  return <>{l.map((x, i) => <span key={i}>{i === l.length - 1 && l.length > 1 ? <em>{x}</em> : x}</span>)}</>;
}

/** Questions fréquentes : liste à filets de l'accueil, réponses ouvertes. */
function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="h7-faq-list">
      {items.map((it) => (
        <div key={it.q} className="h7-faq-item">
          <h3 className="h7-faq-q" style={{ cursor: "default", margin: 0 }}>{it.q}</h3>
          <p className="h7-faq-a">{it.a}</p>
        </div>
      ))}
    </div>
  );
}

/** Appel de fin : une ligne entre deux filets + les pilules (comme l'appel du milieu de l'accueil). */
function EndCta({ title, body, body2, download, learn }: { title: string; body: string; body2?: string; download: string; learn: string }) {
  return (
    <Reveal className="h7-mid-row is-in sp-endcta">
      <div>
        <p className="h7-mid-t">{title}</p>
        <p className="sp-note" style={{ marginTop: "0.5rem", fontSize: "1.0625rem" }}>{body}{body2 ? <><br />{body2}</> : null}</p>
      </div>
      <div className="h7-ctas" style={{ marginTop: 0 }}>
        <a className="h7-btn h7-btn-ink" href="/download/ios"><AppleIcon />{download}</a>
        <Link className="h7-btn h7-btn-line" href="/discover">{learn}</Link>
      </div>
    </Reveal>
  );
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
    heroSubtitle2: "Attax was built around this idea: your workouts become a fight.",
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
      { title: "Real-world activity", body: "Your workouts and steps, read from Apple Health or Health Connect, are the only source of points. Intensity pays, not just volume." },
      { title: "Daily competition", body: "One boxing duel a day against a new player of your league: 7 rounds, HP to protect, and Fight Night at 9:30 PM." },
      { title: "Strategic decisions", body: "3 cards drawn every morning, the same for both players, from 12 cards in 4 families. One to play before 1 PM; theirs stays secret until 9:30 PM." },
      { title: "League progression", body: "Leagues of 8 players at your level, 7 days, 1 champion who leaves with the crown." },
      { title: "Long-term objectives", body: "A rank from Rookie to Legend that follows you from league to league, a worldwide season, and a profile with your streak, moves, badges and trophies." },
      { title: "Social play", body: "A ranked league with up to 2 friends (3 of you), of a close rank, a custom league from 2 to 40 players, and a duo partner assigned to you from your 2nd league to keep you going." },
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
      { q: "Is Attax a fitness game?", a: "Yes. Attax turns your real workouts into daily boxing duels, with cards, leagues, ranks and a season inspired by games." },
      { q: "Does fitness gamification replace discipline?", a: "No. It supports discipline by making healthy habits more engaging." },
      { q: "Who benefits from fitness gamification?", a: "Beginners, experienced athletes, and anyone looking for additional motivation." },
      { q: "Do I need a smartwatch to use Attax?", a: "Yes. You need a device that measures your heart rate (smartwatch, fitness band or chest strap) synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing and more on both; Samsung Galaxy Watch and Fitbit on Android only. Your phone alone counts your steps. Attax checks your connection before your first league." },
    ],
    ctaTitle: "Turn activity into progression.",
    ctaBody: "Boxing duels, cards, leagues and ranks, all powered by your real workouts. Download Attax and start your first league.",
    ctaDownload: "Download Attax",
    ctaLearnMore: "Learn More",
  },
  fr: {
    heroLabel: "GAMIFICATION DU FITNESS",
    heroTitle: "Pourquoi les jeux réussissent\nlà où la motivation échoue.",
    heroSubtitle: "La gamification du fitness change la façon dont les gens font de l'exercice. En combinant compétition, progression, récompenses et formation d'habitudes, les expériences de fitness gamifiées peuvent aider les gens à rester actifs plus longtemps et à apprécier davantage le processus.",
    heroSubtitle2: "Attax a été conçu autour de cette idée : ton sport devient un combat.",
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
      { title: "Activité réelle", body: "Tes séances et tes pas, lus dans Apple Santé ou Health Connect, sont la seule source de points. C'est l'intensité qui paie, pas seulement le volume." },
      { title: "Compétition quotidienne", body: "Un duel de boxe par jour contre un nouveau joueur de ta ligue : 7 rounds, des PV à protéger, et le Soir de combat à 21h30." },
      { title: "Décisions stratégiques", body: "3 cartes tirées chaque matin, les mêmes pour les deux joueurs, parmi 12 cartes en 4 familles. Une à jouer avant 13h ; la sienne reste secrète jusqu'à 21h30." },
      { title: "Progression en ligue", body: "Des ligues de 8 joueurs de ton niveau, 7 jours, 1 champion qui repart avec la couronne." },
      { title: "Objectifs à long terme", body: "Un rang de Rookie à Legend qui te suit de ligue en ligue, une saison mondiale, et un profil avec ta série, tes coups, tes badges et tes trophées." },
      { title: "Jeu social", body: "Une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche, une ligue personnalisée de 2 à 40 joueurs, et un binôme qui t'est attribué dès ta 2e ligue pour te motiver." },
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
      { q: "Attax est-il un jeu fitness ?", a: "Oui. Attax transforme tes vraies séances en duels de boxe quotidiens, avec des cartes, des ligues, des rangs et une saison inspirés des jeux." },
      { q: "La gamification remplace-t-elle la discipline ?", a: "Non. Elle soutient la discipline en rendant les habitudes saines plus engageantes." },
      { q: "Qui bénéficie de la gamification du fitness ?", a: "Les débutants, les athlètes expérimentés et toute personne cherchant une motivation supplémentaire." },
      { q: "Ai-je besoin d'une montre connectée pour utiliser Attax ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque (montre, bracelet ou ceinture thoracique) synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing et d'autres sur les deux ; Samsung Galaxy Watch et Fitbit sur Android uniquement. Ton téléphone seul compte tes pas. Attax vérifie ta connexion avant ta première ligue." },
    ],
    ctaTitle: "Transforme l'activité en progression.",
    ctaBody: "Duels de boxe, cartes, ligues et rangs : le tout alimenté par tes vraies séances. Télécharge Attax et lance ta première ligue.",
    ctaDownload: "Télécharger Attax",
    ctaLearnMore: "En savoir plus",
  },
};

export default function FitnessGamification() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <SitePage>
      <PageHero bg={<ScanBg name="tennis" />} kick={p.heroLabel} title={<Title text={p.heroTitle} />} lead={p.heroSubtitle} lead2={p.heroSubtitle2}>
        <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{p.heroCta}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap">
          <div className="sp-blocks">
            <Block kick={p.secWhatIsIt} title={p.whatIsItH2}>
              <p>{p.whatIsIt1}</p>
              <p>{p.whatIsIt2}</p>
              <p>{p.whatIsIt3}</p>
              <p className="em"><Lines text={p.whatIsItEm} /></p>
              <p>{p.whatIsIt4}</p>
              <p>{p.whatIsIt5}</p>
              <p className="strong">{p.whatIsIt6}</p>
            </Block>

            <Block kick={p.secMotivation} title={p.motivationH2}>
              <p>{p.motivation1}</p>
              <p>{p.motivation2}</p>
              <p className="em"><Lines text={p.motivationEm} /></p>
              <p>{p.motivation3}</p>
              <p>{p.motivation4}</p>
              <p>
                {lang === "en"
                  ? "This is where traditional fitness applications often struggle. They provide information. But information alone is rarely enough."
                  : "C'est là où les applications fitness traditionnelles peinent souvent. Elles fournissent de l'information. Mais l'information seule est rarement suffisante."}
              </p>
              <p className="em"><Lines text={p.motivationEm2} /></p>
              <p className="strong">{p.motivationConclude}</p>
            </Block>

            <Reveal as="p" className="sp-quote">
              {lang === "en"
                ? "“Gamification turns effort into progression. Every session moves you forward.”"
                : "« La gamification transforme l'effort en progression. Chaque séance te fait avancer. »"}
            </Reveal>

            <Block kick={p.secPsychology} title={p.psychologyH2}>
              <p>{p.psychology1}</p>
              <div style={{ margin: "2rem 0" }}>
                <HairList two items={p.psych.map((it) => ({ title: it.title, body: it.body }))} />
              </div>
              <p>{p.psychologyConclusion}</p>
            </Block>

            <Block kick={p.secCompetition} title={p.competitionH2}>
              <p>{p.competition1}</p>
              <p className="em"><Lines text={p.competitionEm} /></p>
              <p>{p.competition2}</p>
              <p>{p.competition3}</p>
              <p className="em"><Lines text={p.competitionEm2} /></p>
              <p>{p.competition4}</p>
              <p className="strong">{p.competitionConclude}</p>
            </Block>

            <Block kick={p.secEvolution} title={p.evolutionH2}>
              <p>{p.evolution1}</p>
              <p>{p.evolution2}</p>
              <p className="strong">{p.evolutionConclude}</p>
              <p>{p.evolution3}</p>
              <p className="em"><Lines text={p.evolutionEm} /></p>
            </Block>

            <Block kick={p.secHowAttax} title={p.howAttaxH2}>
              <p>{p.howAttax1}</p>
              <div style={{ margin: "2rem 0" }}>
                <HairList two items={p.gamificationSystems.map((s) => ({ title: s.title, body: s.body }))} />
              </div>
              <p>{p.howAttaxConclusion}</p>
            </Block>

            <Block kick={p.secNotPerfection} title={p.notPerfectionH2}>
              <p>{p.notPerfection1}</p>
              <p className="strong">{p.notPerfection2}</p>
              <p>{p.notPerfection3}</p>
              <p className="em"><Lines text={p.notPerfectionEm} /></p>
              <p className="strong">{p.notPerfectionConclude}</p>
            </Block>

            <Block kick={p.secBenefits} title={p.benefitsH2}>
              <p>{p.benefits1}</p>
              <div className="sp-cells2">
                {p.benefits.map((b) => <div key={b.title}><h3 className="h7-h3">{b.title}</h3><p className="h7-p">{b.body}</p></div>)}
              </div>
              <p>{p.benefitsConclusion}</p>
            </Block>

            <Block kick={p.secFaq} title={p.faqH2}>
              <Faq items={p.faq} />
            </Block>
          </div>

          <EndCta title={p.ctaTitle} body={p.ctaBody} download={p.ctaDownload} learn={p.ctaLearnMore} />
        </div>
      </section>

      <FinalCta />
    </SitePage>
  );
}
