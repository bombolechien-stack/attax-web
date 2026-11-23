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
    heroTitle: "The fitness game\npowered by real activity.",
    heroSubtitle1: "Your workouts become a competition. Attax turns your real sessions into daily duels against a player of your league: your watch measures your effort, the verdict lands every evening at 9:30 PM.",
    heroSubtitle2: "Train in real life. Win your matches. Climb from Rookie to Legend.",
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
    howIntro: "Attax combines five systems that work together.",
    howSystems: [
      { title: "Real Activity", body: "Attax reads your workouts and your steps from Apple Health or Health Connect, in read-only mode, and turns them into points. It's intensity that pays, not just volume. Running, cycling, strength training, team sports, dance: if your watch measures it, it counts. Manual entries don't." },
      { title: "Daily Competition", body: "Every day, a new opponent from your league. A match is 7 rounds: your previous 6 days, plus today. Each day is a round, won by the player with the most points. A lost round costs 1 HP, the final round 2 HP. The past rounds are revealed from 10 AM to 7 PM, the final round is live from 7 PM, and at 9:30 PM, Fight Night decides. Never a draw." },
      { title: "Strategic Decisions", body: "Every morning, 3 cards are drawn (the same for both players) from 12 cards in 4 families: Attack, Defense, Sabotage, Trick. Pick one before 1 PM. Your opponent's card stays secret until 9:30 PM. The right card can flip a close match." },
      { title: "League Progression", body: "A league is 8 players at your level, 7 days, and 1 champion who leaves with the crown. Across leagues, a rank follows you from Rookie to Legend, and a worldwide season ranking rewards every point of effort." },
      { title: "Play Together", body: "Play a ranked league with up to 2 friends (3 of you), of a close rank, or a custom league from 2 to 40 players: share your code, they join in seconds. From your 2nd league, a duo partner is assigned to you to keep you going." },
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
      { title: "Strength training enthusiasts", body: "Strength sessions become part of your progression." },
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
    consP2: "A moderate workout repeated three times a week often creates better results than a perfect workout once a month. Attax was designed around this principle: a match is played over 7 rounds, one per day, so every day you move is a round you can win, and one big day can't decide everything.",
    consP3: "Consistency compounds.\nSmall actions accumulate.\nTiny improvements become meaningful over time.",
    consP4: "The most successful players are rarely those who produce a single exceptional performance. They are usually the ones who continue showing up.",
    consP5: "Again.\nAnd again.\nAnd again.",

    faqLabel: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "What is Attax?", a: "A competitive fitness game: your real workouts, measured by your watch, become daily duels against a player of your league." },
      { q: "Is Attax a fitness app or a game?", a: "Both. Attax reads your activity like a fitness app, and turns it into matches, cards, leagues and ranks like a game." },
      { q: "Does walking count?", a: "Yes. Your steps count every day, even with your phone alone. For your workouts, you need a device that measures your heart rate." },
      { q: "Can beginners use Attax?", a: "Absolutely. You play against players at your level, and every effort counts: from a brisk walk to an all-out session." },
      { q: "Do I need a smartwatch?", a: "Yes. You need a device that measures your heart rate (smartwatch, fitness band or chest strap) synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing and more on both; Samsung Galaxy Watch and Fitbit on Android only. Your phone alone counts your steps. Attax checks your connection before your first league." },
      { q: "Is Attax available on iPhone and Android?", a: "Yes: on iPhone through Apple Health, on Android through Health Connect. There is no iPad version." },
      { q: "Can I play with my friends?", a: "Yes. Create a ranked league with up to 2 friends (3 of you), of a close rank, or a custom league from 2 to 40 players. Share your code, they join in seconds." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads and no in-app purchases." },
      { q: "How often do duels happen?", a: "Every day. One match a day against a new opponent, decided at Fight Night, 9:30 PM, in leagues that last 7 days." },
    ],

    ctaH2: "Ready to make your activity matter?",
    ctaBody: "Download Attax, join a league and start your first duel.",
    ctaDownload: "Download Attax",
    ctaLearn: "Learn More",
  },

  fr: {
    heroLabel: "QU’EST-CE QU’ATTAX",
    heroTitle: "Le jeu de fitness\npropulsé par une activité réelle.",
    heroSubtitle1: "Ton sport devient une compétition. Attax transforme tes vraies séances en duels quotidiens contre un joueur de ta ligue : ta montre mesure ton effort, le verdict tombe chaque soir à 21h30.",
    heroSubtitle2: "Entraîne-toi dans la vraie vie. Gagne tes matchs. Grimpe de Rookie à Legend.",
    heroCta: "Télécharger Attax",

    problemLabel: "Le Problème",
    problemH2: "Le problème des applications fitness traditionnelles",
    problemP1: "Depuis plus d’une décennie, les applications fitness se concentrent sur le suivi.",
    problemP2: "Elles comptent les pas.\nElles mesurent les distances.\nElles enregistrent la fréquence cardiaque.\nElles estiment les calories brûlées.",
    problemP3: "La technologie a considérablement progressé, pourtant un problème demeure inchangé.",
    problemP4: "La plupart des gens finissent par arrêter de les utiliser.",
    problemP5: "Pas parce que les données sont fausses. Pas parce que les applications sont mal conçues. Mais parce que l’information seule crée rarement une motivation à long terme.",
    problemP6: "Savoir que tu as marché 8 000 pas hier ne te donne pas forcément envie de recommencer demain. Voir un graphique progresser peut être gratifiant un temps, mais la nouveauté finit par s’évanouir.",
    problemP7: "C’est là que beaucoup de produits fitness échouent. Ils deviennent des archives d’activité plutôt que des moteurs de motivation.",
    problemP8: "Attax a été créé pour résoudre ce problème.",
    problemQuoteQ: "Au lieu de demander : « Combien d’activité as-tu fait aujourd’hui ? »",
    problemQuoteA: "Attax demande : « Que signifie vraiment cette activité ? »",

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
    howIntro: "Attax combine cinq systèmes qui fonctionnent ensemble.",
    howSystems: [
      { title: "Activité réelle", body: "Attax lit tes séances et tes pas dans Apple Santé ou Health Connect, en lecture seule, et les transforme en points. C'est l'intensité qui paie, pas seulement le volume. Course, vélo, musculation, sports collectifs, danse : si ta montre le mesure, ça compte. Les saisies à la main, non." },
      { title: "Compétition quotidienne", body: "Chaque jour, un nouvel adversaire de ta ligue. Un match se joue en 7 rounds : tes 6 jours d'avant, plus aujourd'hui. Chaque jour est un round, gagné par celui qui a le plus de points. Un round perdu coûte 1 PV, le round final 2 PV. Les rounds passés se dévoilent de 10h à 19h, le round final se joue en direct dès 19h, et à 21h30, le Soir de combat décide. Jamais de match nul." },
      { title: "Décisions stratégiques", body: "Chaque matin, 3 cartes sont tirées (les mêmes pour les deux joueurs) parmi 12 cartes en 4 familles : Attaque, Défense, Sabotage, Ruse. Choisis-en une avant 13h. Celle de ton adversaire reste secrète jusqu'à 21h30. La bonne carte peut renverser un match serré." },
      { title: "Progression en ligue", body: "Une ligue, c'est 8 joueurs de ton niveau, 7 jours, et 1 champion qui repart avec la couronne. De ligue en ligue, un rang te suit de Rookie à Legend, et un classement mondial de saison récompense chaque point d'effort." },
      { title: "Jouer ensemble", body: "Joue une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche, ou une ligue personnalisée de 2 à 40 joueurs : partage ton code, ils te rejoignent en quelques secondes. Dès ta 2e ligue, un binôme t'est attribué pour te motiver." },
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
    consP2: "Une séance modérée répétée trois fois par semaine donne souvent de meilleurs résultats qu'une séance parfaite une fois par mois. Attax a été conçu autour de ce principe : un match se joue en 7 rounds, un par jour, donc chaque jour où tu bouges est un round à gagner, et une seule grosse journée ne peut pas tout décider.",
    consP3: "La régularité s’accumule.\nLes petites actions s’additionnent.\nLes micro-progrès deviennent significatifs avec le temps.",
    consP4: "Les joueurs les plus performants sont rarement ceux qui produisent une seule performance exceptionnelle. Ce sont généralement ceux qui continuent à se montrer.",
    consP5: "Encore.\nEt encore.\nEt encore.",

    faqLabel: "FAQ",
    faqH2: "Questions fréquemment posées",
    faq: [
      { q: "Qu'est-ce qu'Attax ?", a: "Un jeu de fitness compétitif : tes vraies séances, mesurées par ta montre, deviennent des duels quotidiens contre un joueur de ta ligue." },
      { q: "Attax est-il une application fitness ou un jeu ?", a: "Les deux. Attax lit ton activité comme une application fitness, et la transforme en matchs, cartes, ligues et rangs comme un jeu." },
      { q: "La marche compte-t-elle ?", a: "Oui. Tes pas comptent chaque jour, même avec ton téléphone seul. Pour tes séances, il te faut un appareil qui mesure ta fréquence cardiaque." },
      { q: "Les débutants peuvent-ils jouer ?", a: "Absolument. Tu affrontes des joueurs de ton niveau, et chaque effort compte : de la marche rapide à la séance à fond." },
      { q: "Ai-je besoin d'une montre connectée ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque (montre, bracelet ou ceinture thoracique) synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing et d'autres sur les deux ; Samsung Galaxy Watch et Fitbit sur Android uniquement. Ton téléphone seul compte tes pas. Attax vérifie ta connexion avant ta première ligue." },
      { q: "Attax est-il disponible sur iPhone et Android ?", a: "Oui : sur iPhone via Apple Santé, sur Android via Health Connect. Il n'y a pas de version iPad." },
      { q: "Puis-je jouer avec mes amis ?", a: "Oui. Crée une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche, ou une ligue personnalisée de 2 à 40 joueurs. Partage ton code, ils te rejoignent en quelques secondes." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité ni achat intégré." },
      { q: "À quelle fréquence ont lieu les duels ?", a: "Tous les jours. Un match par jour contre un nouvel adversaire, décidé au Soir de combat, à 21h30, dans des ligues qui durent 7 jours." },
    ],

    ctaH2: "Prêt à donner du sens à ton activité ?",
    ctaBody: "Télécharge Attax, rejoins une ligue et lance ton premier duel.",
    ctaDownload: "Télécharger Attax",
    ctaLearn: "En savoir plus",
  },
};

export default function WhatIsAttax() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <SitePage>
      <PageHero bg={<ScanBg name="run-woman" />} kick={p.heroLabel} title={<Title text={p.heroTitle} />} lead={p.heroSubtitle1} lead2={p.heroSubtitle2}>
        <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{p.heroCta}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap">
          <div className="sp-blocks">
            <Block kick={p.problemLabel} title={p.problemH2}>
              <p>{p.problemP1}</p>
              <p className="em"><Lines text={p.problemP2} /></p>
              <p>{p.problemP3}</p>
              <p className="strong">{p.problemP4}</p>
              <p>{p.problemP5}</p>
              <p>{p.problemP6}</p>
              <p>{p.problemP7}</p>
              <p>{p.problemP8}</p>
              <div className="sp-qa">
                <p><em>{p.problemQuoteQ}</em></p>
                <p className="big"><em>{p.problemQuoteA}</em></p>
              </div>
            </Block>

            <Block kick={p.diffLabel} title={p.diffH2}>
              <p className="em"><Lines text={p.diffP1} /></p>
              <p className="big">{p.diffP2}</p>
              <p>{p.diffP3}</p>
              <p className="em"><Lines text={p.diffP4} /></p>
              <p>{p.diffP5}</p>
              <p>{p.diffP6}</p>
            </Block>

            <Reveal as="p" className="sp-quote">
              {lang === "en"
                ? "“Every effort counts. Every day you move, you compete.”"
                : "« Chaque effort compte. Chaque jour où tu bouges, tu marques. »"}
            </Reveal>

            <Block kick={p.howLabel} title={p.howH2}>
              <p>{p.howIntro}</p>
              <div style={{ marginTop: "2rem" }}>
                <HairList two items={p.howSystems.map((s) => ({ title: s.title, body: s.body }))} />
              </div>
            </Block>

            <Block kick={p.whyLabel} title={p.whyH2}>
              <p>{p.whyP1}</p>
              <p className="em"><Lines text={p.whyP2} /></p>
              <p>{p.whyP3}</p>
              <p>{p.whyP4}</p>
              <p>{p.whyP5}</p>
              <p>{p.whyP6}</p>
            </Block>

            <Block kick={p.whoLabel} title={p.whoH2}>
              <p>{p.whoIntro}</p>
              <div className="sp-cells2">
                {p.who.map((w) => <div key={w.title}><h3 className="h7-h3">{w.title}</h3><p className="h7-p">{w.body}</p></div>)}
              </div>
            </Block>

            <Block kick={p.psychLabel} title={p.psychH2}>
              <p>{p.psychP1}</p>
              <p>{p.psychP2}</p>
              <p className="em"><Lines text={p.psychP3} /></p>
              <p>{p.psychP4}</p>
              <p className="em"><Lines text={p.psychP5} /></p>
            </Block>

            <Block kick={p.consLabel} title={p.consH2}>
              <p>{p.consP1}</p>
              <p>{p.consP2}</p>
              <p className="em"><Lines text={p.consP3} /></p>
              <p>{p.consP4}</p>
              <p className="strong"><Lines text={p.consP5} /></p>
            </Block>

            <Block kick={p.faqLabel} title={p.faqH2}>
              <Faq items={p.faq} />
            </Block>
          </div>

          <EndCta title={p.ctaH2} body={p.ctaBody} download={p.ctaDownload} learn={p.ctaLearn} />
        </div>
      </section>

      <FinalCta />
    </SitePage>
  );
}
