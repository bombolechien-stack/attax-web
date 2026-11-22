"use client";

// Application de compétition fitness (21/11) : système de l'accueil (src/components/site/Site.tsx). Textes inchangés (P).
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import "../site-seo-b.css";
import { SitePage, PageHero, ScanBg, Block, Lines, HairList, FinalCta, AppleIcon } from "@/components/site/Site";

function heroTitle(s: string) {
  const l = s.split("\n");
  return <>{l.map((x, i) => <span key={i}>{i === l.length - 1 && l.length > 1 ? <em>{x}</em> : x}</span>)}</>;
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
    heroSubtitle2: "One boxing duel a day against a player of your league, 3 cards every morning, and Fight Night every evening at 9:30 PM.",
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
      "Real workout and step data",
      "A boxing duel every day, in 7 rounds",
      "3 cards every morning",
      "Leagues of 8 players at your level",
      "Ranked leagues with friends, and custom leagues from 2 to 40 players",
      "A rank from Rookie to Legend, and a worldwide season",
      "From your 2nd league, a duo partner is assigned to you to keep you going",
    ],
    different4: "The result feels less like a fitness tracker and more like a living competition.",
    secRealActivity: "Real Activity",
    realActivityH2: "Built around real activity",
    realActivity1: "Attax doesn't require a gym membership or elite ability. It needs one thing: a watch or band that measures your heart rate.",
    realActivity2: "The system rewards movement.",
    realActivityEm: "Running counts.\nCycling counts.\nGym sessions count.\nTeam sports count.\nWalking counts: every step.",
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
    rankings1: "Progress feels more rewarding when it is visible. Every evening, your league standings update; across leagues, your rank climbs from Rookie to Legend.",
    rankings2: "Your results move your rank up or down, league after league: every match counts.",
    rankings3: "The ranking system creates long-term goals beyond individual workouts. Instead of asking “did I exercise today?” players begin asking:",
    rankingsQuote: "“Can I climb higher?”",
    rankings4: "That shift in perspective changes everything.",
    secForEveryone: "For Everyone",
    forEveryoneH2: "Competition without intimidation",
    forEveryone1: "Many people avoid competition because they imagine elite athletes dominating the experience. Attax was designed differently.",
    forEveryone2: "The goal is not to reward the strongest athlete on earth. You face players at your level, and a match is 7 rounds, one per day: consistency wins.",
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
      { title: "Strength training enthusiasts", body: "Make workouts part of a larger system." },
      { title: "Busy professionals", body: "Stay motivated despite limited time." },
      { title: "Beginners", body: "Build consistency without pressure." },
    ],
    whoConclusion: "The platform rewards participation and effort at every level.",
    secFaq: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "What is a fitness competition app?", a: "An app that uses rankings, duels and challenges to motivate physical activity. In Attax, your real workouts decide daily boxing duels within leagues of 8 players." },
      { q: "How does Attax create competition?", a: "Every day, you face a new player of your league. The match is 7 rounds (your previous 6 days, plus today), each won by the player with the most pts that day. Add the card you chose, and Fight Night decides at 9:30 PM." },
      { q: "Can beginners compete?", a: "Yes. You join a league at your level, and every effort counts." },
      { q: "Can I compete with my friends?", a: "Yes. Create a ranked league with up to 2 friends (3 of you), of a close rank, or a custom league from 2 to 40 players. Share your code, they join in seconds." },
      { q: "Does walking count?", a: "Yes. Your steps count every day, even with your phone alone. For your workouts, you need a device that measures your heart rate." },
      { q: "Is Attax available on iPhone?", a: "Yes, through Apple Health." },
      { q: "Is Attax available on Android?", a: "Yes, through Health Connect (Android 9 or later)." },
      { q: "Does Attax require a smartwatch?", a: "Yes. You need a device that measures your heart rate (smartwatch, fitness band or chest strap) synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing and more on both; Samsung Galaxy Watch and Fitbit on Android only. Your phone alone counts your steps. Attax checks your connection before your first league." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads and no in-app purchases." },
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
    heroSubtitle2: "Un duel de boxe par jour contre un joueur de ta ligue, 3 cartes chaque matin, et le Soir de combat chaque soir à 21h30.",
    heroCta: "Télécharger Attax",
    secWhyFail: "Pourquoi les objectifs échouent",
    whyFailH2: "Pourquoi la plupart des objectifs fitness échouent",
    whyFail1: "Chaque année, des millions de personnes commencent un nouveau parcours fitness.",
    whyFailEm: "Un abonnement à la salle de sport.\nUn programme de course.\nUn objectif de perte de poids.\nUne promesse de devenir plus actif.",
    whyFail2: "Le défi est rarement de savoir quoi faire. Le défi, c'est de continuer.",
    whyFail3: "La plupart des gens comprennent les bienfaits de l'exercice : meilleure santé, plus d'énergie, meilleure forme physique, bien-être à long terme.",
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
    differentH2: "Qu'est-ce qui rend Attax différent ?",
    different1: "La plupart des applications fitness te demandent de te mesurer à toi-même. Attax te permet de te mesurer aux autres.",
    different2: "La différence est significative. Quand l'activité influence les classements, les victoires, la progression et les résultats, l'engagement change.",
    differentEm: "Chaque jour est différent.\nChaque entraînement compte.\nChaque décision a du poids.",
    different3: "Attax combine :",
    whatMakes: [
      "De vraies données de séances et de pas",
      "Un duel de boxe chaque jour, en 7 rounds",
      "3 cartes chaque matin",
      "Des ligues de 8 joueurs de ton niveau",
      "Des ligues classées entre amis, et des ligues personnalisées de 2 à 40 joueurs",
      "Un rang de Rookie à Legend, et une saison mondiale",
      "Dès ta 2e ligue, un binôme t'est attribué pour te motiver",
    ],
    different4: "Le résultat ressemble moins à un tracker fitness et plus à une compétition vivante.",
    secRealActivity: "Activité réelle",
    realActivityH2: "Conçu autour de l'activité réelle",
    realActivity1: "Attax ne demande ni abonnement en salle ni niveau d'élite. Il lui faut une seule chose : une montre ou un bracelet qui mesure ta fréquence cardiaque.",
    realActivity2: "Le système récompense le mouvement.",
    realActivityEm: "La course compte.\nLe vélo compte.\nLa musculation compte.\nLes sports collectifs comptent.\nLa marche compte : chaque pas.",
    realActivity3: "L'objectif n'est pas de récompenser la perfection. L'objectif est de récompenser la régularité.",
    realActivity4: "Les ligues réunissent des joueurs de niveau proche : accessible aux débutants, toujours intense pour les sportifs confirmés.",
    secDaily: "Quotidien",
    dailyH2: "Compétition quotidienne",
    daily1: "La plupart des défis perdent de l'élan parce qu'ils restent inchangés. Attax introduit de nouvelles opportunités chaque jour.",
    dailyEm: "Nouveaux adversaires.\nNouvelles décisions.\nNouveaux résultats.",
    daily2: "L'environnement compétitif reste dynamique. Les joueurs sont encouragés à revenir régulièrement parce que la progression évolue toujours.",
    daily3: "Cela crée un sentiment de continuité que les défis fitness traditionnels manquent souvent.",
    secRankings: "Classements",
    rankingsH2: "Des classements qui comptent",
    rankings1: "Le progrès est plus gratifiant quand il est visible. Chaque soir, le classement de ta ligue se met à jour ; de ligue en ligue, ton rang grimpe de Rookie à Legend.",
    rankings2: "Tes résultats font monter ou descendre ton rang, ligue après ligue : chaque match compte.",
    rankings3: "Le système de classement crée des objectifs à long terme au-delà des entraînements individuels. Au lieu de se demander « est-ce que j’ai fait du sport aujourd’hui ? », les joueurs commencent à se demander :",
    rankingsQuote: "« Est-ce que je peux grimper plus haut ? »",
    rankings4: "Ce changement de perspective change tout.",
    secForEveryone: "Pour tout le monde",
    forEveryoneH2: "La compétition sans intimidation",
    forEveryone1: "Beaucoup de gens évitent la compétition parce qu'ils imaginent des athlètes d'élite dominer l'expérience. Attax a été conçu différemment.",
    forEveryone2: "Le but n'est pas de récompenser le meilleur athlète de la planète. Tu affrontes des joueurs de ton niveau, et un match se joue en 7 rounds, un par jour : c'est la régularité qui gagne.",
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
      { title: "Cyclistes", body: "Affronte les autres à chaque sortie." },
      { title: "Fans de salle", body: "Intègre tes entraînements dans un système plus grand." },
      { title: "Professionnels actifs", body: "Reste motivé malgré un temps limité." },
      { title: "Débutants", body: "Construis la régularité sans pression." },
    ],
    whoConclusion: "La plateforme récompense la participation et l'effort à tous les niveaux.",
    secFaq: "FAQ",
    faqH2: "Questions fréquentes",
    faq: [
      { q: "Qu'est-ce qu'une application de compétition sportive ?", a: "Une application qui utilise classements, duels et défis pour motiver l'activité physique. Dans Attax, tes vraies séances décident de duels de boxe quotidiens au sein de ligues de 8 joueurs." },
      { q: "Comment Attax crée-t-il la compétition ?", a: "Chaque jour, tu affrontes un nouveau joueur de ta ligue. Le match se joue en 7 rounds (tes 6 jours d'avant, plus aujourd'hui), chacun gagné par celui qui a le plus de pts ce jour-là. Ajoute la carte que tu as choisie, et le Soir de combat décide à 21h30." },
      { q: "Les débutants peuvent-ils jouer ?", a: "Oui. Tu rejoins une ligue de ton niveau, et chaque effort compte." },
      { q: "Puis-je affronter mes amis ?", a: "Oui. Crée une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche, ou une ligue personnalisée de 2 à 40 joueurs. Partage ton code, ils te rejoignent en quelques secondes." },
      { q: "La marche compte-t-elle ?", a: "Oui. Tes pas comptent chaque jour, même avec ton téléphone seul. Pour tes séances, il te faut un appareil qui mesure ta fréquence cardiaque." },
      { q: "Attax est-il disponible sur iPhone ?", a: "Oui, via Apple Santé." },
      { q: "Attax est-il disponible sur Android ?", a: "Oui, via Health Connect (Android 9 ou plus récent)." },
      { q: "Attax nécessite-t-il une montre connectée ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque (montre, bracelet ou ceinture thoracique) synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Amazfit, COROS, CMF by Nothing et d'autres sur les deux ; Samsung Galaxy Watch et Fitbit sur Android uniquement. Ton téléphone seul compte tes pas. Attax vérifie ta connexion avant ta première ligue." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité ni achat intégré." },
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
    <SitePage>
      <PageHero bg={<ScanBg name="basketball" />} kick={p.heroLabel} title={heroTitle(p.heroTitle)} lead={p.heroSubtitle} lead2={p.heroSubtitle2}>
        <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{p.heroCta}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap">
          <div className="sp-blocks">
            <Block kick={p.secWhyFail} title={p.whyFailH2}>
              <p>{p.whyFail1}</p>
              <p className="em"><Lines text={p.whyFailEm} /></p>
              <p>{p.whyFail2}</p>
              <p>{p.whyFail3}</p>
              <p>{p.whyFail4}</p>
              <p className="strong">{p.whyFailConclude}</p>
            </Block>

            <Block kick={p.secCompetition} title={p.competitionH2}>
              <p>{p.competition1}</p>
              <p className="em"><Lines text={p.competitionEm} /></p>
              <p>{p.competition2}</p>
              <p className="em"><Lines text={p.competitionEm2} /></p>
              <p className="strong">{p.competitionConclude}</p>
            </Block>

            <p className="sp-quote">
              {lang === "en"
                ? "“Real competition. Real motivation. Every single day.”"
                : "« Vraie compétition. Vraie motivation. Chaque jour. »"}
            </p>

            <Block kick={p.secDifferent} title={p.differentH2}>
              <p>{p.different1}</p>
              <p>{p.different2}</p>
              <p className="em"><Lines text={p.differentEm} /></p>
              <p>{p.different3}</p>
              <ul className="sp-dots">{p.whatMakes.map((m) => <li key={m}>{m}</li>)}</ul>
              <p>{p.different4}</p>
            </Block>

            <Block kick={p.secRealActivity} title={p.realActivityH2}>
              <p>{p.realActivity1}</p>
              <p className="strong">{p.realActivity2}</p>
              <p className="em"><Lines text={p.realActivityEm} /></p>
              <p>{p.realActivity3}</p>
              <p>{p.realActivity4}</p>
            </Block>

            <Block kick={p.secDaily} title={p.dailyH2}>
              <p>{p.daily1}</p>
              <p className="em"><Lines text={p.dailyEm} /></p>
              <p>{p.daily2}</p>
              <p>{p.daily3}</p>
            </Block>

            <Block kick={p.secRankings} title={p.rankingsH2}>
              <p>{p.rankings1}</p>
              <p>{p.rankings2}</p>
              <p>{p.rankings3}</p>
              <p className="big"><em>{p.rankingsQuote}</em></p>
              <p>{p.rankings4}</p>
            </Block>

            <Block kick={p.secForEveryone} title={p.forEveryoneH2}>
              <p>{p.forEveryone1}</p>
              <p>{p.forEveryone2}</p>
              <p className="em"><Lines text={p.forEveryoneEm} /></p>
              <p>{p.forEveryone3}</p>
            </Block>

            <Block kick={p.secRetention} title={p.retentionH2}>
              <p>{p.retention1}</p>
              <div style={{ margin: "1.75rem 0" }}>
                <HairList two items={p.retention.map((r) => ({ title: r.title, body: r.body }))} />
              </div>
              <p className="strong">{p.retentionConclusion}</p>
            </Block>

            <Block kick={p.secWho} title={p.whoH2}>
              <div style={{ marginBottom: "1.75rem" }}>
                <HairList two items={p.who.map((w) => ({ title: w.title, body: w.body }))} />
              </div>
              <p>{p.whoConclusion}</p>
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
              <p className="h7-mid-t">{p.ctaTitle}</p>
              <p className="sp-note" style={{ marginTop: "0.5rem", fontSize: "1.0625rem", maxWidth: "34rem" }}>{p.ctaBody}</p>
            </div>
            <div className="h7-ctas" style={{ marginTop: 0 }}>
              <a className="h7-btn h7-btn-ink" href="/download/ios"><AppleIcon />{p.ctaDownload}</a>
              <Link className="h7-btn h7-btn-line" href="/discover">{p.ctaLearnMore}</Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </SitePage>
  );
}
