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
    heroSubtitle1: "Your workouts become a fight. Attax turns your workouts and your steps into pts, and your pts into a daily boxing duel against a player of your league.",
    heroSubtitle2: "No manual tracking. No complicated setup. Just move and compete.",
    heroCta: "Download Attax",

    foundationLabel: "The Foundation",
    foundationH2: "The foundation: real-world activity",
    foundationP1: "Everything inside Attax starts with one thing.",
    foundationP2: "Movement.",
    foundationP3: "Unlike many games, progression can't be bought: there is nothing to purchase in Attax. Your pts come only from what your watch records.",
    foundationP4: "Your performance comes from what you achieve in real life.",
    foundationP5: "Running.\nCycling.\nStrength training.\nTeam sports.\nWalking.\nAnything that gets your heart working.",
    foundationP6: "The system rewards activity performed outside the app and transforms it into meaningful progression inside the experience.",
    foundationP7: "This creates a direct connection between physical effort and competitive outcomes.",
    foundationP8: "The more consistent you are, the stronger your position becomes.",

    connectLabel: "Connect",
    connectH2: "Connect your activity",
    connectP1: "Attax integrates with the health systems already available on your device.",
    connectP2: "For iPhone users, activity is synchronized through Apple Health.",
    connectP3: "For Android users, activity is synchronized through Health Connect.",
    connectP4: "Attax reads your workouts, your heart rate and your steps: read-only, nothing else. Your data is never sold and never used for ads.",
    connectP5: "No spreadsheets.\nNo manual entries.\nNo complicated setup process.",
    connectP6: "The goal is simple: spend less time logging activity and more time doing it.",
    connectP7: "Before your first league, Attax checks that your heart-rate data is coming through. After that, it syncs when you open the app, and in the background if you allow it. On match day, everything synced before 9:30 PM counts.",

    activityLabel: "Activity",
    activityH2: "Activity becomes pts",
    activityP1: "Most fitness applications stop at measurement. Attax goes one step further.",
    activityP2: "Activity becomes a resource.",
    activityP3: "Your workouts and your steps become pts.\nIt's intensity that pays, not just volume.\nEvery session shows up in your Activity tab.",
    activityP4: "This means that physical activity is no longer isolated from the rest of the experience.",
    activityP5: "Movement directly influences competition. The connection is immediate and meaningful.",
    activityP6: "The more consistent your effort, the greater your potential advantage.",

    competitionLabel: "Competition",
    competitionH2: "Daily competition",
    competitionP1: "At the heart of Attax is the daily boxing duel. Every day, you face a new player of your league.",
    competitionP2: "A match is 7 rounds: your previous 6 days, plus today. Each day is a round, won by the player with the most pts that day, and a lost round costs 1 HP (the final round, 2 HP). The 6 past rounds play out one by one from 10 AM to 7 PM. The final round is live from 7 PM and takes 2 HP. At 9:30 PM, Fight Night: the boxers walk out, the rounds replay, the cards flip, and the final round decides. The player with the most HP left wins. Never a draw.",
    competitionP3: "The objective is simple: move, train, stay consistent, perform better.",
    competitionP4: "Competition transforms ordinary activity into a challenge.",
    competitionP5: "A walk is no longer just a walk.\nA workout is no longer just a workout.",
    competitionP6: "Every action contributes to an ongoing contest.",
    competitionP7: "This creates a powerful source of motivation that traditional fitness applications rarely provide.",

    strategyLabel: "Strategy",
    strategyH2: "Strategy matters",
    strategyP1: "Attax is not purely about activity volume.",
    strategyP2: "Decision-making matters too.",
    strategyP3: "Every morning, 3 cards are drawn (the same for both players) from 12 cards in 4 families: Attack, Defense, Sabotage and Trick. You pick one before 1 PM; otherwise, a card is played for you. Your opponent's card stays secret until 9:30 PM.",
    strategyP4: "Overdrive makes your workout of the day count ×1.5. With Guard, their final round only takes 1 HP from you. Freeze cancels their best past round won. Ghost hides your training until 9:30 PM. Two players with similar activity can see very different outcomes.",
    strategyP5: "The result is a system that rewards both consistency and intelligent choices.",
    strategyP6: "Progress is influenced by effort.\nSuccess is influenced by strategy.",
    strategyP7: "The combination creates a more engaging experience than simple activity tracking alone.",

    progressionLabel: "Progression",
    progressionH2: "Leagues and progression",
    progressionP1: "Competition becomes meaningful when progress is visible.",
    progressionP2: "A league is 8 players at your level, 7 days, a new opponent every day. The standings move every evening, and the league crowns 1 champion, then run it back with the same group, or start a new league. You can also play ranked leagues with your friends, or custom leagues from 2 to 40 players.",
    progressionP3: "A rank follows you from league to league.\nFrom Rookie to Legend.\nA worldwide season ranking, where every pt counts.\nFrom your 2nd league, a duo partner is assigned to you to keep you going.",
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
      { q: "How does Attax track activity?", a: "Through Apple Health (iPhone) or Health Connect (Android): Attax reads your workouts, your heart rate and your steps, read-only." },
      { q: "Do I need to manually enter workouts?", a: "No. Everything comes from your watch, through Apple Health or Health Connect. There is no manual entry." },
      { q: "What activities count?", a: "Any workout your watch measures: running, cycling, strength training, swimming, team sports, dance… plus your steps, every day." },
      { q: "Does consistency matter?", a: "Yes. A match is 7 rounds, one per day: showing up every day is the surest way to win." },
      { q: "Do I need a smartwatch?", a: "Yes. You need a device that measures your heart rate (smartwatch, fitness band or chest strap) synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing and more on both; Samsung Galaxy Watch and Fitbit on Android only. Your phone alone counts your steps. Attax checks your connection before your first league." },
      { q: "Is Attax suitable for beginners?", a: "Absolutely. You join a league at your level, and every effort counts." },
      { q: "Can I play with my friends?", a: "Yes. Create a ranked league with up to 2 friends (3 of you), of a close rank, or a custom league from 2 to 40 players. Share your code, they join in seconds." },
      { q: "Can I improve without being an elite athlete?", a: "Yes. You play against players at your level, and your rank depends on your results, not on absolute performance." },
      { q: "Does it work in my time zone?", a: "Yes. Every league plays on its own local time: rounds from 10 AM, Fight Night at 9:30 PM, wherever you are." },
    ],

    ctaH2: "Start competing through activity.",
    ctaBody1: "Every workout matters. Every effort contributes.",
    ctaBody2: "A new duel every day. Download Attax and enter the arena.",
    ctaDownload: "Download Attax",
    ctaLearn: "Learn More",
  },

  fr: {
    heroLabel: "COMMENT FONCTIONNE ATTAX",
    heroTitle: "Activité réelle.\nCompétition réelle.",
    heroSubtitle1: "Ton sport devient un combat. Attax transforme tes séances et tes pas en pts, et tes pts en un duel de boxe quotidien contre un joueur de ta ligue.",
    heroSubtitle2: "Pas de saisie manuelle. Pas de configuration complexe. Bouge et concours.",
    heroCta: "Télécharger Attax",

    foundationLabel: "Le Fondement",
    foundationH2: "Le fondement : l'activité dans la vie réelle",
    foundationP1: "Tout dans Attax commence par une seule chose.",
    foundationP2: "Le mouvement.",
    foundationP3: "Contrairement à beaucoup de jeux, la progression ne s'achète pas : il n'y a rien à acheter dans Attax. Tes pts viennent uniquement de ce que ta montre enregistre.",
    foundationP4: "Tes performances viennent de ce que tu accomplis dans la vie réelle.",
    foundationP5: "Course.\nVélo.\nMusculation.\nSports collectifs.\nMarche.\nTout ce qui fait travailler ton cœur.",
    foundationP6: "Le système récompense l'activité pratiquée en dehors de l'application et la transforme en progression concrète à l'intérieur de l'expérience.",
    foundationP7: "Cela crée un lien direct entre l'effort physique et les résultats compétitifs.",
    foundationP8: "Plus tu es régulier, plus ta position se renforce.",

    connectLabel: "Connexion",
    connectH2: "Connecte ton activité",
    connectP1: "Attax s'intègre aux systèmes de santé déjà disponibles sur ton appareil.",
    connectP2: "Pour les utilisateurs d'iPhone, l'activité est synchronisée via Apple Santé.",
    connectP3: "Pour les utilisateurs Android, l'activité est synchronisée via Health Connect.",
    connectP4: "Attax lit tes séances, ta fréquence cardiaque et tes pas : en lecture seule, rien d'autre. Tes données ne sont jamais vendues ni utilisées pour de la publicité.",
    connectP5: "Pas de tableurs.\nPas de saisie manuelle.\nPas de configuration compliquée.",
    connectP6: "L'objectif est simple : passer moins de temps à enregistrer l'activité et plus de temps à la pratiquer.",
    connectP7: "Avant ta première ligue, Attax vérifie que tes données de fréquence cardiaque arrivent bien. Ensuite, la synchronisation se fait à l'ouverture de l'app, et en arrière-plan si tu l'autorises. Le jour du match, tout ce qui est synchronisé avant 21h30 compte.",

    activityLabel: "Activité",
    activityH2: "L'activité devient des pts",
    activityP1: "La plupart des applications fitness s'arrêtent à la mesure. Attax va plus loin.",
    activityP2: "L'activité devient une ressource.",
    activityP3: "Tes séances et tes pas deviennent des pts.\nC'est l'intensité qui paie, pas seulement le volume.\nChaque séance apparaît dans ton onglet Activités.",
    activityP4: "Cela signifie que l'activité physique n'est plus isolée du reste de l'expérience.",
    activityP5: "Le mouvement influence directement la compétition. Le lien est immédiat et concret.",
    activityP6: "Plus ton effort est régulier, plus ton avantage potentiel est grand.",

    competitionLabel: "Compétition",
    competitionH2: "Compétition quotidienne",
    competitionP1: "Au cœur d'Attax, il y a le duel de boxe quotidien. Chaque jour, tu affrontes un nouveau joueur de ta ligue.",
    competitionP2: "Un match se joue en 7 rounds : tes 6 jours d'avant, plus aujourd'hui. Chaque jour est un round, gagné par celui qui a le plus de pts ce jour-là, et un round perdu coûte 1 PV (le round final, 2 PV). Les 6 rounds passés se jouent un par un de 10h à 19h. Le round final se joue en direct dès 19h et retire 2 PV. À 21h30, le Soir de combat : entrée des boxeurs, rounds rejoués, cartes retournées, puis le round final décide. Celui qui garde le plus de PV gagne. Jamais de match nul.",
    competitionP3: "L'objectif est simple : bouger, s'entraîner, rester régulier, performer mieux.",
    competitionP4: "La compétition transforme une activité ordinaire en défi.",
    competitionP5: "Une marche n'est plus juste une marche.\nUne séance n'est plus juste une séance.",
    competitionP6: "Chaque action contribue à un concours en cours.",
    competitionP7: "Cela crée une puissante source de motivation que les applications fitness traditionnelles offrent rarement.",

    strategyLabel: "Stratégie",
    strategyH2: "La stratégie compte",
    strategyP1: "Attax ne se résume pas au volume d'activité.",
    strategyP2: "La prise de décision compte aussi.",
    strategyP3: "Chaque matin, 3 cartes sont tirées (les mêmes pour les deux joueurs) parmi 12 cartes en 4 familles : Attaque, Défense, Sabotage et Ruse. Tu en choisis une avant 13h, sinon une carte est jouée pour toi. Celle de ton adversaire reste secrète jusqu'à 21h30.",
    strategyP4: "Overdrive fait compter ta séance du jour ×1,5. Avec Garde, son round final ne te retire qu'1 PV. Freeze annule son meilleur round passé gagné. Ghost cache ton entraînement jusqu'à 21h30. Deux joueurs à activité égale peuvent connaître des issues très différentes.",
    strategyP5: "Le résultat est un système qui récompense à la fois la régularité et les choix intelligents.",
    strategyP6: "La progression est influencée par l'effort.\nLe succès est influencé par la stratégie.",
    strategyP7: "La combinaison crée une expérience plus engageante que le simple suivi d'activité.",

    progressionLabel: "Progression",
    progressionH2: "Ligues et progression",
    progressionP1: "La compétition prend du sens quand les progrès sont visibles.",
    progressionP2: "Une ligue, c'est 8 joueurs de ton niveau, 7 jours, un nouvel adversaire chaque jour. Le classement bouge chaque soir, et la ligue couronne 1 champion, puis tu rejoues avec le même groupe, ou tu lances une nouvelle ligue. Tu peux aussi jouer des ligues classées avec tes amis, ou des ligues personnalisées de 2 à 40 joueurs.",
    progressionP3: "Un rang te suit de ligue en ligue.\nDe Rookie à Legend.\nUn classement mondial de saison, où chaque pt compte.\nDès ta 2e ligue, un binôme t'est attribué pour te motiver.",
    progressionP4: "Le système de classement crée des objectifs à long terme qui dépassent les séances individuelles.",
    progressionP5: "Au lieu de se concentrer exclusivement sur l'activité du jour, les joueurs sont encouragés à penser à leur progression sur des semaines et des mois.",
    progressionP6: "Cela transforme le fitness d'une tâche à court terme en un parcours à long terme.",

    whyLabel: "Pourquoi Ça Marche",
    whyH2: "Pourquoi le système fonctionne",
    whyP1: "Beaucoup de produits fitness peinent à fidéliser. Les gens commencent motivés. Puis l'engagement s'efface.",
    whyP2: "Attax a été conçu pour répondre à ce défi.",
    whyP3: "Le système combine plusieurs principes de motivation :",
    whyMotivation: ["Progression visible", "Objectifs quotidiens", "Responsabilité compétitive", "Prise de décision stratégique", "Classements à long terme"],
    whyP4: "Ensemble, ces systèmes créent une raison de revenir. Pas parce que l'application l'exige. Parce que l'expérience reste engageante.",
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
      { q: "Comment Attax suit-il l'activité ?", a: "Via Apple Santé (iPhone) ou Health Connect (Android) : Attax lit tes séances, ta fréquence cardiaque et tes pas, en lecture seule." },
      { q: "Dois-je saisir mes séances à la main ?", a: "Non. Tout vient de ta montre, via Apple Santé ou Health Connect. Il n'y a aucune saisie manuelle." },
      { q: "Quelles activités comptent ?", a: "Toute séance mesurée par ta montre : course, vélo, musculation, natation, sports collectifs, danse… plus tes pas, chaque jour." },
      { q: "La régularité compte-t-elle ?", a: "Oui. Un match se joue en 7 rounds, un par jour : être là chaque jour, c'est le moyen le plus sûr de gagner." },
      { q: "Ai-je besoin d'une montre connectée ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque (montre, bracelet ou ceinture thoracique) synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing et d'autres sur les deux ; Samsung Galaxy Watch et Fitbit sur Android uniquement. Ton téléphone seul compte tes pas. Attax vérifie ta connexion avant ta première ligue." },
      { q: "Attax convient-il aux débutants ?", a: "Absolument. Tu rejoins une ligue de ton niveau, et chaque effort compte." },
      { q: "Puis-je jouer avec mes amis ?", a: "Oui. Crée une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche, ou une ligue personnalisée de 2 à 40 joueurs. Partage ton code, ils te rejoignent en quelques secondes." },
      { q: "Puis-je progresser sans être un athlète d'élite ?", a: "Oui. Tu affrontes des joueurs de ton niveau, et ton rang dépend de tes résultats, pas d'une performance absolue." },
      { q: "Ça marche dans mon fuseau horaire ?", a: "Oui. Chaque ligue se joue à son heure locale : rounds dès 10h, Soir de combat à 21h30, où que tu sois." },
    ],

    ctaH2: "Commence à concourir par l'activité.",
    ctaBody1: "Chaque séance compte. Chaque effort contribue.",
    ctaBody2: "Un nouveau duel chaque jour. Télécharge Attax et entre dans l'arène.",
    ctaDownload: "Télécharger Attax",
    ctaLearn: "En savoir plus",
  },
};

export default function HowAttaxWorks() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <SitePage>
      <PageHero bg={<ScanBg name="sprint" />} kick={p.heroLabel} title={<Title text={p.heroTitle} />} lead={p.heroSubtitle1} lead2={p.heroSubtitle2}>
        <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{p.heroCta}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap">
          <div className="sp-blocks">
            <Block kick={p.foundationLabel} title={p.foundationH2}>
              <p>{p.foundationP1}</p>
              <p className="big">{p.foundationP2}</p>
              <p>{p.foundationP3}</p>
              <p>{p.foundationP4}</p>
              <p className="em"><Lines text={p.foundationP5} /></p>
              <p>{p.foundationP6}</p>
              <p>{p.foundationP7}</p>
              <p className="strong">{p.foundationP8}</p>
            </Block>

            <Block kick={p.connectLabel} title={p.connectH2}>
              <p>{p.connectP1}</p>
              <p>{p.connectP2}</p>
              <p>{p.connectP3}</p>
              <p>{p.connectP4}</p>
              <p className="em"><Lines text={p.connectP5} /></p>
              <p>{p.connectP6}</p>
              <p>{p.connectP7}</p>
            </Block>

            <Reveal as="p" className="sp-quote">
              {lang === "en"
                ? "“Connect your health app. Every workout becomes a fight.”"
                : "« Connecte ton application santé. Chaque séance devient un combat. »"}
            </Reveal>

            <Block kick={p.activityLabel} title={p.activityH2}>
              <p>{p.activityP1}</p>
              <p className="big">{p.activityP2}</p>
              <p className="em"><Lines text={p.activityP3} /></p>
              <p>{p.activityP4}</p>
              <p>{p.activityP5}</p>
              <p className="strong">{p.activityP6}</p>
            </Block>

            <Block kick={p.competitionLabel} title={p.competitionH2}>
              <p>{p.competitionP1}</p>
              <p>{p.competitionP2}</p>
              <p>{p.competitionP3}</p>
              <p>{p.competitionP4}</p>
              <p className="em"><Lines text={p.competitionP5} /></p>
              <p>{p.competitionP6}</p>
              <p>{p.competitionP7}</p>
            </Block>

            <Block kick={p.strategyLabel} title={p.strategyH2}>
              <p>{p.strategyP1}</p>
              <p className="big">{p.strategyP2}</p>
              <p>{p.strategyP3}</p>
              <p>{p.strategyP4}</p>
              <p>{p.strategyP5}</p>
              <p className="em"><Lines text={p.strategyP6} /></p>
              <p>{p.strategyP7}</p>
            </Block>

            <Block kick={p.progressionLabel} title={p.progressionH2}>
              <p>{p.progressionP1}</p>
              <p>{p.progressionP2}</p>
              <p className="em"><Lines text={p.progressionP3} /></p>
              <p>{p.progressionP4}</p>
              <p>{p.progressionP5}</p>
              <p className="strong">{p.progressionP6}</p>
            </Block>

            <Block kick={p.whyLabel} title={p.whyH2}>
              <p>{p.whyP1}</p>
              <p>{p.whyP2}</p>
              <p>{p.whyP3}</p>
              <ul className="sp-dots">{p.whyMotivation.map((m) => <li key={m}>{m}</li>)}</ul>
              <p>{p.whyP4}</p>
              <p className="strong">{p.whyP5}</p>
            </Block>

            <Block kick={p.consLabel} title={p.consH2}>
              <p>{p.consP1}</p>
              <p>{p.consP2}</p>
              <p className="em"><Lines text={p.consP3} /></p>
              <p>{p.consP4}</p>
              <p className="strong">{p.consP5}</p>
            </Block>

            <Block kick={p.faqLabel} title={p.faqH2}>
              <Faq items={p.faq} />
            </Block>
          </div>

          <EndCta title={p.ctaH2} body={p.ctaBody1} body2={p.ctaBody2} download={p.ctaDownload} learn={p.ctaLearn} />
        </div>
      </section>

      <FinalCta />
    </SitePage>
  );
}
