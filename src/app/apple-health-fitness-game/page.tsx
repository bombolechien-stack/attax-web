"use client";

// Jeu de fitness Apple Santé (21/11) : système de l'accueil (src/components/site/Site.tsx). Textes inchangés (P).
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
  heroSubtitle1: string;
  heroSubtitle2: string;
  heroCta: string;
  secWhatItIs: string;
  whatItIsH2: string;
  whatItIs1: string;
  whatItIs2: string;
  whatItIs3: string;
  whatItIs4: string;
  whatItIs5: string;
  whatItIs6: string;
  secHowItConnects: string;
  howItConnectsH2: string;
  howItConnects1: string;
  howItConnects2: string;
  howItConnects3: string;
  activities: string[];
  howItConnectsEm: string;
  howItConnectsClosing: string;
  secWhyUsers: string;
  whyUsersH2: string;
  whyUsers1: string;
  whyUsers2: string;
  whyUsers3: string;
  whyUsersQ: string;
  whyUsersA: string;
  whyUsers4: string;
  secActivityToComp: string;
  activityToCompH2: string;
  activityToComp1: string;
  activityToCompEm: string;
  activityToComp2: string;
  secLongTerm: string;
  longTermH2: string;
  longTerm1: string;
  longTerm2: string;
  platformItems: { title: string; body: string }[];
  longTerm3: string;
  secWhyComp: string;
  whyCompH2: string;
  whyCompEm1: string;
  whyComp1: string;
  whyCompEm2: string;
  whyComp2: string;
  secFaq: string;
  faqH2: string;
  faq: { q: string; a: string }[];
  finalH2: string;
  finalBody: string;
  finalCta: string;
  learnMore: string;
}> = {
  en: {
    heroLabel: "APPLE HEALTH FITNESS GAME",
    heroTitle: "The fitness game\npowered by Apple Health.",
    heroSubtitle1: "Your workouts become a competition. Attax turns your Apple Health activity into a daily duel against a player of your league.",
    heroSubtitle2: "Every workout counts. Every step adds up. Every evening at 9:30 PM, Fight Night.",
    heroCta: "Download on App Store",
    secWhatItIs: "What It Is",
    whatItIsH2: "What is an Apple Health fitness game?",
    whatItIs1: "Most applications connected to Apple Health focus on tracking. They collect information. Display statistics. Generate reports.",
    whatItIs2: "Attax takes a different approach.",
    whatItIs3: "Instead of simply recording activity, Attax transforms movement into a competitive experience. Your Apple Health data becomes part of a larger system built around motivation, progression, and competition.",
    whatItIs4: "The result is simple.",
    whatItIs5: "Activity gains purpose.",
    whatItIs6: "Every workout contributes to something meaningful.",
    secHowItConnects: "How It Connects",
    howItConnectsH2: "How Apple Health works with Attax",
    howItConnects1: "Apple Health serves as the foundation for activity synchronization.",
    howItConnects2: "Once connected, Attax reads your workouts, your heart rate and your steps from Apple Health. Read-only: it never writes anything back, and your data is never sold or used for ads.",
    howItConnects3: "Your watch records the effort, whatever the sport:",
    activities: [
      "Running",
      "Cycling",
      "Strength training",
      "Swimming",
      "Team sports",
      "Walking (steps)",
    ],
    howItConnectsEm: "No manual tracking is required.\nNo spreadsheets.\nNo repetitive data entry.",
    howItConnectsClosing: "Before your first league, Attax checks that your heart rate comes through. After that, it syncs when you open the app, and in the background if you allow it. Move in real life. Win inside Attax.",
    secWhyUsers: "Why Attax",
    whyUsersH2: "Why Attax for Apple Health users",
    whyUsers1: "Apple Health already provides excellent activity tracking. The challenge is motivation.",
    whyUsers2: "Many users collect months or years of fitness data but eventually stop engaging with it. The information becomes passive.",
    whyUsers3: "Attax transforms that data into action.",
    whyUsersQ: "“How many steps did I take?”",
    whyUsersA: "“Can I win today?”",
    whyUsers4: "This small change creates a completely different experience.",
    secActivityToComp: "Activity to Competition",
    activityToCompH2: "Turn activity into competition",
    activityToComp1: "Every day provides a new opportunity to progress.",
    activityToCompEm: "Your workouts and steps become points.\nEach day is a round: 7 rounds, one match.\nWins move you up the standings.\nYour rank climbs from Rookie to Legend.",
    activityToComp2: "The result is a fitness experience that feels engaging long after traditional tracking applications lose their appeal.",
    secLongTerm: "Long-Term",
    longTermH2: "Built for long-term motivation",
    longTerm1: "The biggest challenge in fitness is not starting. It is continuing.",
    longTerm2: "Attax was designed around sustainable engagement. The platform combines:",
    platformItems: [
      { title: "Real-world activity", body: "Workouts and steps from Apple Health are your only source of points." },
      { title: "Daily duels", body: "A new opponent every day, 7 rounds, and Fight Night at 9:30 PM." },
      { title: "Competitive systems", body: "Leagues of 8 players at your level, a rank from Rookie to Legend, and a worldwide season." },
      { title: "Visible progression", body: "Your streak, your unlocked moves, your badges and trophies." },
      { title: "Strategic decisions", body: "3 cards drawn every morning, the same for both players. One to play before 1 PM." },
    ],
    longTerm3: "These elements work together to create a reason to stay active.",
    secWhyComp: "Why Competition",
    whyCompH2: "Why competition matters",
    whyCompEm1: "Competition creates accountability.\nCompetition creates focus.\nCompetition creates engagement.",
    whyComp1: "When activity influences outcomes, movement becomes more rewarding.",
    whyCompEm2: "A workout is no longer just a workout.\nIt becomes part of a larger competitive journey.",
    whyComp2: "This principle sits at the center of Attax.",
    secFaq: "FAQ",
    faqH2: "Frequently asked questions",
    faq: [
      { q: "Does Attax work with Apple Health?", a: "Yes. Attax reads your workouts, your heart rate and your steps from Apple Health, read-only." },
      { q: "What activities count?", a: "Any workout your watch measures: running, cycling, strength training, swimming, team sports, dance… plus your steps, every day. Manual entries don't count." },
      { q: "Do I need an Apple Watch?", a: "You need a device that measures your heart rate and syncs it to Apple Health: an Apple Watch, or a Garmin, Amazfit, COROS, Withings or CMF by Nothing watch, among others. Fitbit doesn't sync with Apple Health. On Apple Watch models before Series 12, start a workout in the Workout app so your sessions count in full." },
      { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads and no in-app purchases." },
      { q: "Is Attax available on iPhone?", a: "Yes, on iPhone. There is no iPad version and no app to install on the Apple Watch: your watch just needs to sync with Apple Health." },
      { q: "Does Attax automatically sync activity?", a: "Yes. Attax reads Apple Health when you open the app, and in the background if you allow it. No manual entry. On match day, everything synced before 9:30 PM counts." },
    ],
    finalH2: "Turn Apple Health into a game.",
    finalBody: "Turn your Apple Health activity into daily duels. Download Attax and start your first league.",
    finalCta: "Download on App Store",
    learnMore: "Learn More",
  },
  fr: {
    heroLabel: "JEU FITNESS APPLE SANTÉ",
    heroTitle: "Le jeu de fitness\npropulsé par Apple Santé.",
    heroSubtitle1: "Ton sport devient une compétition. Attax transforme ton activité Apple Santé en un duel quotidien contre un joueur de ta ligue.",
    heroSubtitle2: "Chaque séance compte. Chaque pas s'additionne. Chaque soir à 21h30, le Soir de combat.",
    heroCta: "Télécharger sur l'App Store",
    secWhatItIs: "C'est quoi",
    whatItIsH2: "Qu'est-ce qu'un jeu de fitness Apple Santé ?",
    whatItIs1: "La plupart des applications connectées à Apple Santé se concentrent sur le suivi. Elles collectent des informations. Affichent des statistiques. Génèrent des rapports.",
    whatItIs2: "Attax adopte une approche différente.",
    whatItIs3: "Au lieu de simplement enregistrer l'activité, Attax transforme le mouvement en expérience compétitive. Tes données Apple Santé font partie d'un système plus large construit autour de la motivation, de la progression et de la compétition.",
    whatItIs4: "Le résultat est simple.",
    whatItIs5: "L'activité prend un sens.",
    whatItIs6: "Chaque entraînement contribue à quelque chose de concret.",
    secHowItConnects: "La connexion",
    howItConnectsH2: "Comment Apple Santé fonctionne avec Attax",
    howItConnects1: "Apple Santé sert de base à la synchronisation de l'activité.",
    howItConnects2: "Une fois connecté, Attax lit dans Apple Santé tes séances, ta fréquence cardiaque et tes pas. En lecture seule : il n'y écrit jamais rien, et tes données ne sont jamais vendues ni utilisées pour de la publicité.",
    howItConnects3: "Ta montre enregistre l'effort, quel que soit le sport :",
    activities: [
      "Course",
      "Vélo",
      "Musculation",
      "Natation",
      "Sports collectifs",
      "Marche (pas)",
    ],
    howItConnectsEm: "Aucun suivi manuel n'est nécessaire.\nPas de tableurs.\nPas de saisie répétitive.",
    howItConnectsClosing: "Avant ta première ligue, Attax vérifie que ta fréquence cardiaque arrive bien. Ensuite, la synchronisation se fait à l'ouverture de l'app, et en arrière-plan si tu l'autorises. Bouge dans la vraie vie. Gagne dans Attax.",
    secWhyUsers: "Pourquoi Attax",
    whyUsersH2: "Pourquoi Attax pour les utilisateurs d'Apple Santé",
    whyUsers1: "Apple Santé offre déjà un excellent suivi d'activité. Le défi, c'est la motivation.",
    whyUsers2: "Beaucoup d'utilisateurs accumulent des mois ou des années de données fitness mais finissent par ne plus s'y intéresser. L'information devient passive.",
    whyUsers3: "Attax transforme ces données en action.",
    whyUsersQ: "« Combien de pas ai-je faits ? »",
    whyUsersA: "« Est-ce que je peux gagner aujourd'hui ? »",
    whyUsers4: "Ce petit changement crée une expérience totalement différente.",
    secActivityToComp: "Activité et compétition",
    activityToCompH2: "Transforme l'activité en compétition",
    activityToComp1: "Chaque jour offre une nouvelle opportunité de progresser.",
    activityToCompEm: "Tes séances et tes pas deviennent des points.\nChaque jour est un round : 7 rounds, un match.\nLes victoires te font monter au classement.\nTon rang grimpe de Rookie à Legend.",
    activityToComp2: "Le résultat est une expérience fitness qui reste engageante bien après que les applications de suivi traditionnelles perdent leur attrait.",
    secLongTerm: "Long terme",
    longTermH2: "Conçu pour une motivation durable",
    longTerm1: "Le plus grand défi du fitness n'est pas de commencer. C'est de continuer.",
    longTerm2: "Attax a été conçu autour d'un engagement durable. La plateforme combine :",
    platformItems: [
      { title: "Activité réelle", body: "Les séances et les pas d'Apple Santé sont ta seule source de points." },
      { title: "Duels quotidiens", body: "Un nouvel adversaire chaque jour, 7 rounds, et le Soir de combat à 21h30." },
      { title: "Systèmes compétitifs", body: "Des ligues de 8 joueurs de ton niveau, un rang de Rookie à Legend, et une saison mondiale." },
      { title: "Progression visible", body: "Ta série, tes coups débloqués, tes badges et tes trophées." },
      { title: "Décisions stratégiques", body: "3 cartes tirées chaque matin, les mêmes pour les deux joueurs. Une à jouer avant 13h." },
    ],
    longTerm3: "Ces éléments fonctionnent ensemble pour créer une raison de rester actif.",
    secWhyComp: "Pourquoi la compétition",
    whyCompH2: "Pourquoi la compétition est importante",
    whyCompEm1: "La compétition crée de la responsabilité.\nLa compétition crée de la concentration.\nLa compétition crée de l'engagement.",
    whyComp1: "Quand l'activité influence les résultats, le mouvement devient plus gratifiant.",
    whyCompEm2: "Un entraînement n'est plus seulement un entraînement.\nIl fait partie d'un parcours compétitif plus large.",
    whyComp2: "Ce principe est au cœur d'Attax.",
    secFaq: "FAQ",
    faqH2: "Questions fréquentes",
    faq: [
      { q: "Attax fonctionne-t-il avec Apple Santé ?", a: "Oui. Attax lit tes séances, ta fréquence cardiaque et tes pas dans Apple Santé, en lecture seule." },
      { q: "Quelles activités comptent ?", a: "Toute séance mesurée par ta montre : course, vélo, musculation, natation, sports collectifs, danse… plus tes pas, chaque jour. Les saisies à la main ne comptent pas." },
      { q: "Ai-je besoin d'une Apple Watch ?", a: "Il te faut un appareil qui mesure ta fréquence cardiaque et l'envoie à Apple Santé : une Apple Watch, ou une montre Garmin, Amazfit, COROS, Withings ou CMF by Nothing, entre autres. Fitbit ne se synchronise pas avec Apple Santé. Sur les Apple Watch antérieures à la Series 12, lance un exercice dans l'app Exercice pour que tes séances comptent entièrement." },
      { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité ni achat intégré." },
      { q: "Attax est-il disponible sur iPhone ?", a: "Oui, sur iPhone. Il n'y a pas de version iPad ni d'app à installer sur l'Apple Watch : ta montre doit simplement se synchroniser avec Apple Santé." },
      { q: "La synchronisation est-elle automatique ?", a: "Oui. Attax lit Apple Santé à l'ouverture de l'app, et en arrière-plan si tu l'autorises. Aucune saisie manuelle. Le jour du match, tout ce qui est synchronisé avant 21h30 compte." },
    ],
    finalH2: "Transforme Apple Santé en jeu.",
    finalBody: "Transforme ton activité Apple Santé en duels quotidiens. Télécharge Attax et lance ta première ligue.",
    finalCta: "Télécharger sur l'App Store",
    learnMore: "En savoir plus",
  },
};

export default function AppleHealthFitnessGame() {
  const { lang } = useLang();
  const p = P[lang];

  return (
    <SitePage>
      <PageHero bg={<ScanBg name="spin" />} kick={p.heroLabel} title={heroTitle(p.heroTitle)} lead={p.heroSubtitle1} lead2={p.heroSubtitle2}>
        <a className="h7-btn h7-btn-light" href="/download/ios"><AppleIcon />{p.heroCta}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap">
          <div className="sp-blocks">
            <Block kick={p.secWhatItIs} title={p.whatItIsH2}>
              <p>{p.whatItIs1}</p>
              <p>{p.whatItIs2}</p>
              <p>{p.whatItIs3}</p>
              <p>{p.whatItIs4}</p>
              <p className="em">{p.whatItIs5}<br />{p.whatItIs6}</p>
            </Block>

            <Block kick={p.secHowItConnects} title={p.howItConnectsH2}>
              <p>{p.howItConnects1}</p>
              <p>{p.howItConnects2}</p>
              <p>{p.howItConnects3}</p>
              <ul className="sp-dots">{p.activities.map((a) => <li key={a}>{a}</li>)}</ul>
              <p className="em"><Lines text={p.howItConnectsEm} /></p>
              <p className="strong">{p.howItConnectsClosing}</p>
            </Block>

            <p className="sp-quote">
              {lang === "en"
                ? "“Every run, every ride, every walk: now part of your game.”"
                : "« Chaque course, chaque sortie vélo, chaque marche : fait maintenant partie de ton jeu. »"}
            </p>

            <Block kick={p.secWhyUsers} title={p.whyUsersH2}>
              <p>{p.whyUsers1}</p>
              <p>{p.whyUsers2}</p>
              <p className="strong">{p.whyUsers3}</p>
              <p>{lang === "en" ? "Instead of asking:" : "Au lieu de se demander :"} <em>{p.whyUsersQ}</em></p>
              <p className="big">{lang === "en" ? "Players begin asking:" : "Les joueurs se demandent :"} <em>{p.whyUsersA}</em></p>
              <p>{p.whyUsers4}</p>
            </Block>

            <Block kick={p.secActivityToComp} title={p.activityToCompH2}>
              <p>{p.activityToComp1}</p>
              <p className="em"><Lines text={p.activityToCompEm} /></p>
              <p>{p.activityToComp2}</p>
            </Block>

            <Block kick={p.secLongTerm} title={p.longTermH2}>
              <p>{p.longTerm1}</p>
              <p>{p.longTerm2}</p>
              <div style={{ margin: "1.75rem 0" }}>
                <HairList two items={p.platformItems.map((it) => ({ title: it.title, body: it.body }))} />
              </div>
              <p>{p.longTerm3}</p>
            </Block>

            <Block kick={p.secWhyComp} title={p.whyCompH2}>
              <p className="em"><Lines text={p.whyCompEm1} /></p>
              <p>{p.whyComp1}</p>
              <p className="em"><Lines text={p.whyCompEm2} /></p>
              <p className="strong">{p.whyComp2}</p>
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
              <a className="h7-btn h7-btn-ink" href="/download/ios"><AppleIcon />{p.finalCta}</a>
              <Link className="h7-btn h7-btn-line" href="/discover">{p.learnMore}</Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </SitePage>
  );
}
