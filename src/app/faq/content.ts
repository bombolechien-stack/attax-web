// Contenu de la page /faq (FR/EN). Uniquement ce qui est visible dans l'app :
// pas de barème chiffré ni de mécanique interne.

export type FaqItem = { q: string; a: string; list?: string[]; after?: string };
export type FaqCategory = { id: string; label: string; title: string; items: FaqItem[] };
export type FaqContent = {
  heroLabel: string;
  heroTitle: string;
  heroSub: string;
  navLabel: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
  categories: FaqCategory[];
};

export const FAQ_CONTENT: Record<"en" | "fr", FaqContent> = {
  en: {
    heroLabel: "FAQ",
    heroTitle: "Everything you need\nto know about Attax.",
    heroSub: "Matches, rounds, cards, leagues, ranks and watches: all the answers in one place.",
    navLabel: "Jump to",
    contactTitle: "Still have a question?",
    contactBody: "Write to us at contact@attax.app, or from the app: My account → Support.",
    contactCta: "Contact us",
    categories: [
      {
        id: "game", label: "The game", title: "How Attax works",
        items: [
          { q: "What is Attax?", a: "Attax turns your real workouts into daily boxing duels. Your watch measures your effort, your boxer throws the punches. Every day, a new opponent from your league. Every evening at 9:30 PM, Fight Night." },
          { q: "How does a match work?", a: "A match is 7 rounds: your previous 6 days, plus today. Each day is a round, won by the player with the most pts that day. You have to have moved to win it (at least 5 minutes of effort or 2,000 steps); otherwise, the round is drawn. Everyone starts with 7 HP, a lost round costs 1 HP (the final round, 2 HP), and the player with the most HP left wins the match. Level on HP? The week's pts (without cards) decide, then the steps, then the judges. There's never a draw.", list: ["10 AM → 7 PM, the 6 past rounds play out one by one.", "7 PM → 9:30 PM, the final round, today, is live. It takes 2 HP. Everything synced before 9:30 PM counts.", "9:30 PM, Fight Night: the boxers walk out, the rounds replay, the cards flip, then the final round decides. The result lands at the end."] },
          { q: "Why does my first match have fewer rounds?", a: "Your 1st league starts gently: only the days played in the league count. Your 1st match has 1 round, your 2nd has 2, and so on." },
          { q: "How does a league work?", a: "A league is 8 players at your level, 7 days, a new opponent every day, and 1 champion, who leaves with the crown. Then you can run it back with the same group or join a new league." },
          { q: "How can I play?", a: "However you like:", list: ["Random leagues, with players at your level.", "A ranked league with up to 2 friends (3 of you), of a close rank.", "Custom leagues, from 2 to 40 players: share your code."] },
          { q: "Can I talk to my opponent?", a: "Not inside the match. After the fight, share your wins and recaps as images. Quick messages exist only with your duo partner." },
          { q: "Can I report or block a player?", a: "Yes, right from their profile." },
          { q: "Does it work in my time zone?", a: "Yes. Every league plays on its own local time: rounds are revealed from 10 AM and Fight Night starts at 9:30 PM, wherever you are." },
          { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads and no in-app purchases, on iPhone and Android." },
          { q: "How do I sign in?", a: "With your e-mail and a password, or with Apple or Google." },
          { q: "Who can play?", a: "Anyone aged 16 or over, with an iPhone or an Android phone, and a watch that measures heart rate. There is no iPad version." },
        ],
      },
      {
        id: "points", label: "Pts", title: "Pts and your activity",
        items: [
          { q: "How do I earn pts?", a: "Your watch measures your workouts and your steps. Attax reads them through Apple Health or Health Connect and turns them into pts. It's intensity that pays, not just volume." },
          { q: "Pts, rounds, points: what's the difference?", a: "Three words, three things:", list: ["pts: your activity of the day.", "rounds: your match.", "points: your league standings."] },
          { q: "Can I enter a workout by hand?", a: "No. Manual entries don't count: everything comes from your watch." },
          { q: "Does walking count?", a: "Yes. Your steps count every day. Your phone alone counts your steps; for your workouts, you need a device that measures your heart rate." },
          { q: "Which sports count?", a: "Any activity your watch measures: running, cycling, strength training, swimming, team sports, dance, hiking… Attax doesn't need to know the sport, your watch measures the effort." },
          { q: "Can one big day decide everything?", a: "No. Every day of the match is a round. Showing up day after day pays more than one huge session." },
        ],
      },
      {
        id: "cards", label: "Cards", title: "The cards",
        items: [
          { q: "How do cards work?", a: "Every morning, 3 cards are drawn: the same for both players. Pick one before 1 PM; otherwise, a card is played for you. Your opponent's card stays secret until 9:30 PM, when the cards flip during Fight Night. On the league's 1st match day, you have until 5 PM. Some cards arrive after your first matches." },
          { q: "What are the 12 cards?", a: "12 cards in 4 families: Attack, Defense, Sabotage and Trick.", list: ["Double or nothing (Attack): the final round takes 3 HP, from them… or from you.", "Overdrive (Attack): your workout of the day counts ×1.5.", "Steps ×3 (Attack): your steps count triple today.", "Counter (Attack): behind before the final round and you win it? It takes 2 more HP.", "Guard (Defense): their final round only takes 1 HP from you.", "Dodge (Defense): their card does nothing.", "Mirror (Defense): Parasite or Freeze? Back to sender.", "Freeze (Sabotage): their best past round won is cancelled.", "Parasite (Sabotage): you take 20% of their pts of the day.", "Scan (Trick): at the card deadline, all remaining rounds are revealed.", "Ghost (Trick): they don't know you're training, until 9:30 PM.", "Bluff (Trick): they see a fake score for you until 9:30 PM."] },
        ],
      },
      {
        id: "ranks", label: "Progression", title: "Standings, rank and season",
        items: [
          { q: "How do the league standings work?", a: "Your matches earn you points in the league standings: +1 point per HP you take, +2 per match won, +1 when you hit your daily goal before 9:30 PM, +1 per successful day with your duo partner. The standings update every evening after Fight Night. After 7 days, the leader is champion and leaves with the crown." },
          { q: "What is my rank?", a: "Beyond each league, a rank follows you from league to league, from Rookie to Legend. Your results move it up or down." },
          { q: "When is my rank revealed?", a: "At the end of your 1st league, once the game knows your level. From there, it's up to you." },
          { q: "Will I face players at my level?", a: "Yes. A few questions when you sign up set your starting level, and you join a league at your level. Then your results do the talking." },
          { q: "What's on my profile?", a: "Your streak, your unlocked moves, your badges, your trophies and your crowns." },
          { q: "What is the Season?", a: "Join the season in one tap. It is a worldwide season ranking, based on effort: every pt counts. You can filter it by country." },
          { q: "What is a duo partner?", a: "From your 2nd league, a duo partner is assigned to you to keep you going: a player of your rank, from another league. You both hit your daily goal: +1 point each. You can cheer each other on with quick messages." },
        ],
      },
      {
        id: "watches", label: "Watches", title: "Watches and data",
        items: [
          { q: "Do I need a watch?", a: "Yes: a smartwatch, a fitness band or a chest strap that measures your heart rate, Apple Watch, Garmin, Amazfit, COROS, Withings, Oura, CMF by Nothing… (plus Samsung Galaxy Watch and Fitbit on Android). Your phone alone counts your steps, but your workouts need a heart rate to count. Attax doesn't connect to the watch directly: everything goes through Apple Health (iPhone) or Health Connect (Android)." },
          { q: "Which watches work on iPhone?", a: "Through Apple Health:", list: ["Fully compatible: Apple Watch, Garmin, Amazfit, COROS, Withings, Oura, CMF by Nothing.", "Workouts only (start a session on your watch): Polar, WHOOP, Suunto, Huawei.", "Xiaomi: workouts only, and you must start and end them in the Mi Fitness app on your phone, not on the watch. Even then, there may be gaps in the data.", "Not compatible: Fitbit / Pixel Watch (no sync with Apple Health), Samsung Galaxy Watch and Wear OS (don't pair with an iPhone)."] },
          { q: "Which watches work on Android?", a: "Through Health Connect:", list: ["Fully compatible: Garmin, Samsung Galaxy Watch, Fitbit / Pixel Watch, Wear OS watches, Amazfit, COROS, CMF by Nothing, Suunto, Withings, Oura.", "Workouts only (start a session on your watch): Polar, WHOOP.", "Xiaomi / Redmi: workouts only, and you must start and end them in the Mi Fitness app on your phone, not on the watch. Even then, there may be gaps in the data.", "Not compatible: Apple Watch (it only pairs with an iPhone), Huawei / Honor (Huawei Health doesn't share data with Health Connect)."] },
          { q: "What does \"workouts only\" mean?", a: "Some brands only send your heart rate to Apple Health or Health Connect during a workout. Your sessions count as long as you start them on your watch, but everyday walking won't." },
          { q: "I have an Apple Watch. Anything to know?", a: "On models before Series 12, the watch measures your heart rate only every few minutes outside of workouts. Start a workout in the Workout app so your sessions count in full." },
          { q: "How do I connect my watch?", a: "In your watch app (Garmin Connect, Samsung Health, Zepp, COROS…), turn on sharing with Apple Health or Health Connect, including steps and heart rate. Then allow Attax to read them when the app asks. For the best results, set heart-rate measurement to continuous in your watch app." },
          { q: "What happens to my data?", a: "Attax reads your workouts, your heart rate and your steps, read-only. Your data is never sold and never used for ads. You can delete your account anytime, right from the app (My account), or by writing to contact@attax.app." },
        ],
      },
      {
        id: "check", label: "Watch check", title: "Making sure your watch works",
        items: [
          { q: "How does Attax check my watch?", a: "Before your first league, Attax runs a watch check: it looks for your recent heart-rate data. In a few seconds, you know where you stand:", list: ["Connected: you're good to go.", "Measurements too far apart: you can play, and the app tells you how to improve it (continuous heart rate, starting your workouts on the watch).", "No data, no recent sync or access missing: you can't join a league yet, and the app tells you exactly what to fix."], after: "You can run the check again anytime: My account → Help." },
          { q: "What if my data stops coming in?", a: "If Attax hasn't received any data from your watch for a while, you get a notification and a banner on the Home screen, so you can fix it before it costs you a round." },
          { q: "My pts stay at 0. What should I do?", a: "Check that your watch app shares your workouts, steps and heart rate with Apple Health or Health Connect, and that Attax is allowed to read them. Then run the watch check: it tells you exactly what's missing." },
          { q: "My pts show up late.", a: "Data goes from your watch to its app, then to Apple Health or Health Connect, then to Attax. This can take a few minutes. Open your watch app to force a sync, then open Attax. On match day, everything synced before 9:30 PM counts." },
        ],
      },
    ],
  },
  fr: {
    heroLabel: "FAQ",
    heroTitle: "Tout ce qu'il faut\nsavoir sur Attax.",
    heroSub: "Matchs, rounds, cartes, ligues, rangs et montres : toutes les réponses au même endroit.",
    navLabel: "Aller à",
    contactTitle: "Encore une question ?",
    contactBody: "Écris-nous à contact@attax.app, ou depuis l'app : Mon compte → Support.",
    contactCta: "Nous contacter",
    categories: [
      {
        id: "game", label: "Le jeu", title: "Comment fonctionne Attax",
        items: [
          { q: "Qu'est-ce qu'Attax ?", a: "Attax transforme tes vraies séances en duels de boxe quotidiens. Ta montre mesure ton effort, ton boxeur frappe. Chaque jour, un nouvel adversaire de ta ligue. Chaque soir à 21h30, le Soir de combat." },
          { q: "Comment se passe un match ?", a: "Un match se joue en 7 rounds : tes 6 jours d'avant, plus aujourd'hui. Chaque jour est un round, gagné par celui qui a le plus de pts ce jour-là. Il faut avoir bougé pour le gagner (au moins 5 minutes d'effort ou 2 000 pas), sinon le round est nul. Chacun part de 7 PV, un round perdu coûte 1 PV (le round final, 2 PV), et le joueur qui garde le plus de PV gagne le match. Égalité de PV ? Les pts de la semaine (sans les cartes) décident, puis les pas, puis les juges. Jamais de match nul.", list: ["10h → 19h : les 6 rounds passés se jouent un par un.", "19h → 21h30 : le round final, aujourd'hui, se joue en direct. Il retire 2 PV. Tout ce qui est synchronisé avant 21h30 compte.", "21h30 : Soir de combat : entrée des boxeurs, rounds rejoués, cartes retournées, puis le round final décide. Le résultat tombe à la fin."] },
          { q: "Pourquoi mon premier match a-t-il moins de rounds ?", a: "Ta 1re ligue démarre en douceur : seuls les jours joués dans la ligue comptent. Ton 1er match a 1 round, ton 2e en a 2, et ainsi de suite." },
          { q: "Comment fonctionne une ligue ?", a: "Une ligue, c'est 8 joueurs de ton niveau, 7 jours, un nouvel adversaire chaque jour, et 1 champion, qui repart avec la couronne. Ensuite, tu peux rejouer avec le même groupe ou rejoindre une nouvelle ligue." },
          { q: "Comment puis-je jouer ?", a: "Comme tu veux :", list: ["Ligues au hasard, avec des joueurs de ton niveau.", "Une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche.", "Ligues personnalisées, de 2 à 40 joueurs : partage ton code."] },
          { q: "Puis-je parler à mon adversaire ?", a: "Pas pendant le match. Après le combat, partage tes victoires et tes bilans en image. Les messages rapides existent seulement avec ton binôme." },
          { q: "Puis-je signaler ou bloquer un joueur ?", a: "Oui, directement depuis son profil." },
          { q: "Ça marche dans mon fuseau horaire ?", a: "Oui. Chaque ligue se joue à son heure locale : les rounds se dévoilent dès 10h et le Soir de combat commence à 21h30, où que tu sois." },
          { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité ni achat intégré, sur iPhone et Android." },
          { q: "Comment me connecter ?", a: "Avec ton e-mail et un mot de passe, ou avec Apple ou Google." },
          { q: "Qui peut jouer ?", a: "Tout le monde à partir de 16 ans, avec un iPhone ou un téléphone Android, et une montre qui mesure la fréquence cardiaque. Il n'y a pas de version iPad." },
        ],
      },
      {
        id: "points", label: "Pts", title: "Les pts et ton activité",
        items: [
          { q: "Comment je gagne des pts ?", a: "Ta montre mesure tes séances et tes pas. Attax les lit via Apple Santé ou Health Connect et les transforme en pts. C'est l'intensité qui paie, pas seulement le volume." },
          { q: "Pts, rounds, points : quelle différence ?", a: "Trois mots, trois choses :", list: ["pts : ton activité du jour.", "rounds : ton match.", "points : le classement de ta ligue."] },
          { q: "Puis-je saisir une séance à la main ?", a: "Non. Les saisies à la main ne comptent pas : tout vient de ta montre." },
          { q: "La marche compte-t-elle ?", a: "Oui. Tes pas comptent chaque jour. Ton téléphone seul compte tes pas ; pour tes séances, il te faut un appareil qui mesure ta fréquence cardiaque." },
          { q: "Quels sports comptent ?", a: "Toute activité mesurée par ta montre : course, vélo, musculation, natation, sports collectifs, danse, randonnée… Attax n'a pas besoin de connaître le sport, ta montre mesure l'effort." },
          { q: "Une grosse journée peut-elle tout décider ?", a: "Non. Chaque jour du match est un round. Être là jour après jour paie plus qu'une seule séance énorme." },
        ],
      },
      {
        id: "cards", label: "Cartes", title: "Les cartes",
        items: [
          { q: "Comment fonctionnent les cartes ?", a: "Chaque matin, 3 cartes sont tirées : les mêmes pour les deux joueurs. Choisis-en une avant 13h, sinon une carte est jouée pour toi. Celle de ton adversaire reste secrète jusqu'à 21h30, quand les cartes sont retournées pendant le Soir de combat. Le jour du 1er match de la ligue, tu as jusqu'à 17h. Certaines cartes arrivent après tes premiers matchs." },
          { q: "Quelles sont les 12 cartes ?", a: "12 cartes en 4 familles : Attaque, Défense, Sabotage et Ruse.", list: ["Quitte ou double (Attaque) : le round final retire 3 PV, à lui… ou à toi.", "Overdrive (Attaque) : ta séance du jour compte ×1,5.", "Pas de géant (Attaque) : tes pas comptent triple aujourd'hui.", "Counter (Attaque) : mené avant le round final et tu le gagnes ? Il retire 2 PV de plus.", "Garde (Défense) : son round final ne te retire qu'1 PV.", "Esquive (Défense) : sa carte ne fait rien.", "Miroir (Défense) : Parasite ou Freeze ? Retour à l'envoyeur.", "Freeze (Sabotage) : son meilleur round passé gagné est annulé.", "Parasite (Sabotage) : tu lui prends 20 % de ses pts du jour.", "Scan (Ruse) : à l'heure limite des cartes, tous les rounds restants sont dévoilés.", "Ghost (Ruse) : il ne sait pas que tu t'entraînes, jusqu'à 21h30.", "Bluff (Ruse) : il voit ton score faussé jusqu'à 21h30."] },
        ],
      },
      {
        id: "ranks", label: "Progression", title: "Classement, rang et saison",
        items: [
          { q: "Comment fonctionne le classement de la ligue ?", a: "Tes matchs te rapportent des points au classement de la ligue : +1 point par PV retiré, +2 par match gagné, +1 quand tu atteins ton objectif du jour avant 21h30, +1 par journée réussie avec ton binôme. Le classement est mis à jour chaque soir après le Soir de combat. Au bout des 7 jours, le premier est champion et repart avec la couronne." },
          { q: "C'est quoi, mon rang ?", a: "Au-delà de chaque ligue, un rang te suit de ligue en ligue, de Rookie à Legend. Tes résultats le font monter ou descendre." },
          { q: "Quand mon rang est-il dévoilé ?", a: "À la fin de ta 1re ligue, une fois que le jeu connaît ton niveau. À partir de là, c'est à toi de jouer." },
          { q: "Vais-je affronter des joueurs de mon niveau ?", a: "Oui. Quelques questions à l'inscription fixent ton niveau de départ, et tu rejoins une ligue de ton niveau. Ensuite, ce sont tes résultats qui parlent." },
          { q: "Qu'y a-t-il sur mon profil ?", a: "Ta série, tes coups débloqués, tes badges, tes trophées et tes couronnes." },
          { q: "C'est quoi, la Saison ?", a: "Rejoins la saison en un geste. C'est un classement mondial de saison, à l'effort : chaque pt compte. Tu peux le filtrer par pays." },
          { q: "C'est quoi, le binôme ?", a: "Dès ta 2e ligue, un binôme t'est attribué pour te motiver : un joueur de ton rang, venu d'une autre ligue. Objectif du jour atteint à deux : +1 point chacun. Vous pouvez vous encourager avec des messages rapides." },
        ],
      },
      {
        id: "watches", label: "Montres", title: "Les montres et tes données",
        items: [
          { q: "Ai-je besoin d'une montre ?", a: "Oui : une montre connectée, un bracelet ou une ceinture thoracique qui mesure ta fréquence cardiaque, Apple Watch, Garmin, Amazfit, COROS, Withings, Oura, CMF by Nothing… (plus Samsung Galaxy Watch et Fitbit sur Android). Ton téléphone seul compte tes pas, mais tes séances ont besoin de la fréquence cardiaque pour compter. Attax ne se connecte pas directement à la montre : tout passe par Apple Santé (iPhone) ou Health Connect (Android)." },
          { q: "Quelles montres fonctionnent sur iPhone ?", a: "Via Apple Santé :", list: ["Compatibles : Apple Watch, Garmin, Amazfit, COROS, Withings, Oura, CMF by Nothing.", "Exercices seulement (lance une séance sur ta montre) : Polar, WHOOP, Suunto, Huawei.", "Xiaomi : exercices seulement, à démarrer et terminer dans l'app Mi Fitness du téléphone, pas sur la montre. Même ainsi, il peut y avoir des trous dans les données.", "Non compatibles : Fitbit / Pixel Watch (pas de synchronisation avec Apple Santé), Samsung Galaxy Watch et Wear OS (ne s'associent pas à un iPhone)."] },
          { q: "Quelles montres fonctionnent sur Android ?", a: "Via Health Connect :", list: ["Compatibles : Garmin, Samsung Galaxy Watch, Fitbit / Pixel Watch, montres Wear OS, Amazfit, COROS, CMF by Nothing, Suunto, Withings, Oura.", "Exercices seulement (lance une séance sur ta montre) : Polar, WHOOP.", "Xiaomi / Redmi : exercices seulement, à démarrer et terminer dans l'app Mi Fitness du téléphone, pas sur la montre. Même ainsi, il peut y avoir des trous dans les données.", "Non compatibles : Apple Watch (elle ne s'associe qu'à un iPhone), Huawei / Honor (Huawei Health ne partage pas ses données avec Health Connect)."] },
          { q: "Que veut dire « exercices seulement » ?", a: "Certaines marques n'envoient ta fréquence cardiaque à Apple Santé ou Health Connect que pendant un exercice. Tes séances comptent à condition de les lancer sur ta montre, mais la marche du quotidien ne comptera pas." },
          { q: "J'ai une Apple Watch. Quelque chose à savoir ?", a: "Sur les modèles antérieurs à la Series 12, la montre ne mesure ta fréquence cardiaque que toutes les quelques minutes en dehors des exercices. Lance un exercice dans l'app Exercice pour que tes séances comptent entièrement." },
          { q: "Comment connecter ma montre ?", a: "Dans l'application de ta montre (Garmin Connect, Samsung Health, Zepp, COROS…), active le partage avec Apple Santé ou Health Connect, pas et fréquence cardiaque compris. Autorise ensuite Attax à les lire quand l'app te le demande. Pour de meilleurs résultats, règle la mesure de la fréquence cardiaque sur « en continu » dans l'application de ta montre." },
          { q: "Que deviennent mes données ?", a: "Attax lit tes séances, ta fréquence cardiaque et tes pas, en lecture seule. Tes données ne sont jamais vendues ni utilisées pour de la publicité. Tu peux supprimer ton compte à tout moment, directement dans l'app (Mon compte), ou en écrivant à contact@attax.app." },
        ],
      },
      {
        id: "check", label: "Vérification", title: "S'assurer que ta montre fonctionne",
        items: [
          { q: "Comment Attax vérifie-t-il ma montre ?", a: "Avant ta première ligue, Attax lance la vérification de la montre : il cherche tes données de fréquence cardiaque récentes. En quelques secondes, tu sais où tu en es :", list: ["Connectée, tout est bon, tu peux jouer.", "Mesures trop espacées : tu peux jouer, et l'app te dit comment améliorer ça (fréquence cardiaque en continu, séances lancées sur la montre).", "Aucune donnée, plus de synchronisation récente ou accès manquant : tu ne peux pas encore rejoindre une ligue, et l'app te dit exactement quoi corriger."], after: "Tu peux relancer la vérification à tout moment : Mon compte → Aide." },
          { q: "Et si mes données n'arrivent plus ?", a: "Si Attax ne reçoit plus de données de ta montre depuis un moment, tu reçois une notification et un bandeau s'affiche sur l'Accueil, pour corriger le problème avant qu'il te coûte un round." },
          { q: "Mes pts restent à 0. Que faire ?", a: "Vérifie que l'application de ta montre partage tes séances, tes pas et ta fréquence cardiaque avec Apple Santé ou Health Connect, et qu'Attax a le droit de les lire. Lance ensuite la vérification de la montre : elle te dit exactement ce qui manque." },
          { q: "Mes pts arrivent en retard.", a: "Les données passent de ta montre à son application, puis à Apple Santé ou Health Connect, puis à Attax. Cela peut prendre quelques minutes. Ouvre l'application de ta montre pour forcer une synchronisation, puis ouvre Attax. Le jour du match, tout ce qui est synchronisé avant 21h30 compte." },
        ],
      },
    ],
  },
};
