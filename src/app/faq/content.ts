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
    heroSub: "Duels, points, heart-rate zones, cards, ranks and watches: all the answers in one place.",
    navLabel: "Jump to",
    contactTitle: "Still have a question?",
    contactBody: "Write to us at contact@attax.app, or from the app: My account → Support.",
    contactCta: "Contact us",
    categories: [
      {
        id: "game", label: "The game", title: "How Attax works",
        items: [
          { q: "What is Attax?", a: "Attax is a competitive fitness game. Your real activity, measured by your watch, powers a duel every day against another player of your league. Train, play your card, and win your duel at 9:30 PM." },
          { q: "How does a duel work?", a: "Every day you face a new opponent from your league. A duel is made of 7 rounds: your last 6 days and today.", list: ["10 AM — the match opens and the first round is revealed.", "Then a new round every 90 minutes.", "7 PM — today's round goes live: cards are revealed and the live feed gives hints about your opponent's day.", "9:30 PM — the verdict: the fight plays out to the KO and the standings update."] },
          { q: "How does a league work?", a: "A league is 8 players at your level, 7 days and 7 duels — one a day, against a different opponent each time. At the end: final standings and a podium. Then you can run it back with the same group or join a new league." },
          { q: "Can I play with friends?", a: "Yes. Create a league in the app, share the code with your friends, and start it whenever everyone's in." },
          { q: "Does it work in my time zone?", a: "Yes. Every league plays on its own local time: the match opens at 10 AM and the verdict lands at 9:30 PM, wherever you are." },
          { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads." },
        ],
      },
      {
        id: "points", label: "Points & zones", title: "Points and heart-rate zones",
        items: [
          { q: "How do I earn points?", a: "Your watch measures your effort through Apple Health or Health Connect. Every minute your heart works hard earns activity points (AP) — the higher your heart-rate zone, the more points per minute. Your steps earn points too. No manual entry: everything comes from your watch." },
          { q: "What are the heart-rate zones?", a: "Every minute of effort falls into one of 4 zones, from the lightest to the most intense:", list: ["Endurance — light effort that keeps you moving: brisk walk, easy jog.", "Tempo — comfortable moderate effort, your aerobic base.", "Threshold — sustained effort that takes some grit: a fast way to bank points.", "Sprint — all-out effort: intervals, sprints. Huge points, but you can't hold it long."], after: "The more intense the zone, the more points each minute earns. You'll find your zones and your minutes in each zone in the Activity tab." },
          { q: "Does my age matter?", a: "Your zones are calculated from your age, so the same effort is rewarded fairly whatever your age. That's why we ask for your year of birth when you sign up." },
          { q: "Is there a limit per day?", a: "Your best 90 minutes of the day count in full. Beyond that, extra minutes still earn points, but fewer and fewer. One extreme day can't decide a whole week: showing up every day pays off more." },
          { q: "Does walking count?", a: "Yes. Your steps earn points all day long, and a brisk walk that gets your heart working counts as effort too — if your watch measures your heart rate throughout the day." },
          { q: "Which sports count?", a: "Any activity that gets your heart working: running, cycling, gym, swimming, team sports, dance, hiking… Attax doesn't need to know the sport — your heart rate says it all." },
        ],
      },
      {
        id: "cards", label: "Cards", title: "Strategy cards",
        items: [
          { q: "How do cards work?", a: "Every morning, 3 cards are drawn. Pick one before 1 PM — you can change your mind until then. If you don't choose, a card is picked for you. Cards are revealed during the evening live round, and their effects are applied at 9:30 PM, when the duel is decided. Your card and your opponent's both count." },
          { q: "What are the 12 cards?", a: "12 cards in 6 families: Boost, Defense, Sabotage, Intel, Mask and Momentum.", list: ["Spike (Boost) — +30% AP on your session today, capped at 30 minutes.", "Overdrive (Boost) — your best 20-minute window of the day counts ×2 in AP.", "Recover (Boost) — +15% AP on your session today.", "Shield (Defense) — your opponent loses 15% AP on their session today.", "Freeze (Sabotage) — your opponent's best day of the week loses 8% AP.", "Pressure (Sabotage) — if your opponent passes 30 min of exercise today, +15% AP on your points for the day.", "Parasite (Sabotage) — if your opponent passes 30 min of exercise, you steal 7% of their points.", "Scan (Intel) — unlocks a future round of your choice and reveals your opponent's full curve for that round.", "Mirage (Mask) — your opponent sees your score skewed by ±15%.", "Ghost (Mask) — your activity today shows as 0 to your opponent until your card is revealed, then your strike lands all at once.", "Blackout (Mask) — no score info for either player between 2:30 PM and 7 PM.", "Counter (Momentum) — if you're behind at 6 PM, +25% AP on all your sessions after 6 PM."] },
        ],
      },
      {
        id: "ranks", label: "Ranks", title: "Standings and ranks",
        items: [
          { q: "How do the league standings work?", a: "The standings are ranked by wins and update every evening after the verdict. The league feed tells the story: who takes the lead, who's on fire, who drops." },
          { q: "What are the ranks?", a: "Beyond each league, a global rank follows you from league to league: 5 divisions, from Rookie to Legend, with 3 tiers each (I, II, III).", list: ["Rookie", "Challenger", "Pro", "Elite", "Legend"] },
          { q: "How do I climb?", a: "Win your duels: every win moves you toward the next tier, every loss pulls you back. Reach the top of a tier and you're promoted; fall too low and you're relegated." },
          { q: "When is my rank revealed?", a: "Your rank stays hidden during your first 7 duels while the game gets to know your level. It's then revealed — and from there, it's up to you." },
          { q: "Will I face players at my level?", a: "Yes. A few questions when you sign up set your starting level, and you join a league at your level. Then your results do the talking." },
        ],
      },
      {
        id: "watches", label: "Watches", title: "Compatible watches",
        items: [
          { q: "Do I need a watch?", a: "Yes: a smartwatch, a fitness band or a chest strap that measures your heart rate. Your phone alone counts your steps but doesn't measure your heart — without it, your workouts don't earn points. Attax doesn't connect to the watch directly: everything goes through Apple Health (iPhone) or Health Connect (Android)." },
          { q: "Which watches work on iPhone?", a: "Through Apple Health:", list: ["Fully compatible: Apple Watch, Garmin, Amazfit, COROS, Withings, Oura, Nothing / CMF.", "Workouts only (start a session on your watch): Polar, WHOOP, Suunto, Huawei, Xiaomi.", "Not compatible: Fitbit / Pixel Watch (no sync with Apple Health), Samsung Galaxy Watch and Wear OS (don't pair with an iPhone)."] },
          { q: "Which watches work on Android?", a: "Through Health Connect:", list: ["Fully compatible: Garmin, Samsung Galaxy Watch, Fitbit / Pixel Watch, Wear OS watches, Amazfit, COROS, Nothing / CMF, Suunto, Withings, Oura.", "Workouts only (start a session on your watch): Xiaomi / Redmi, Polar, WHOOP.", "Not compatible: Huawei / Honor (Huawei Health doesn't share data with Health Connect)."] },
          { q: "What does \"workouts only\" mean?", a: "Some brands only send your heart rate to Apple Health or Health Connect during a workout. Your sessions count as long as you start them on your watch, but everyday walking won't." },
          { q: "I have an Apple Watch. Anything to know?", a: "On models before Series 12, the watch measures your heart rate only every few minutes outside of workouts. Start a workout in the Workout app so your sessions count in full." },
          { q: "How do I connect my watch?", a: "In your watch app (Garmin Connect, Samsung Health, Zepp, COROS…), turn on sharing with Apple Health or Health Connect, including steps and heart rate. Then allow Attax to read them when the app asks. For the best results, set heart-rate measurement to continuous in your watch app." },
        ],
      },
      {
        id: "check", label: "Watch check", title: "Making sure your watch works",
        items: [
          { q: "How does Attax check my watch?", a: "Before your first league, Attax runs a watch check: it looks for your recent heart-rate data. In a few seconds, you know where you stand:", list: ["Connected — you're good to go.", "Measurements too far apart — you can play, and the app tells you how to improve it (continuous heart rate, starting your workouts on the watch).", "No data, no recent sync or access missing — you can't join a league yet, and the app tells you exactly what to fix."], after: "You can run the check again anytime: My account → Help." },
          { q: "What if my data stops coming in?", a: "If Attax hasn't received any data from your watch for a while, you get a notification and a banner on the Home screen, so you can fix it before it costs you a duel." },
          { q: "My points stay at 0. What should I do?", a: "Check that your watch app shares your heart rate with Apple Health or Health Connect, and that Attax is allowed to read it. Then run the watch check: it tells you exactly what's missing." },
          { q: "My points show up late.", a: "Data goes from your watch to its app, then to Apple Health or Health Connect, then to Attax. This can take a few minutes. Open your watch app to force a sync, then open Attax." },
        ],
      },
    ],
  },
  fr: {
    heroLabel: "FAQ",
    heroTitle: "Tout ce qu'il faut\nsavoir sur Attax.",
    heroSub: "Duels, points, zones cardio, cartes, rangs et montres : toutes les réponses au même endroit.",
    navLabel: "Aller à",
    contactTitle: "Encore une question ?",
    contactBody: "Écris-nous à contact@attax.app, ou depuis l'app : Mon compte → Support.",
    contactCta: "Nous contacter",
    categories: [
      {
        id: "game", label: "Le jeu", title: "Comment fonctionne Attax",
        items: [
          { q: "Qu'est-ce qu'Attax ?", a: "Attax est un jeu de fitness compétitif. Ton activité réelle, mesurée par ta montre, alimente chaque jour un duel contre un autre joueur de ta ligue. Entraîne-toi, joue ta carte, et gagne ton duel à 21h30." },
          { q: "Comment se passe un duel ?", a: "Chaque jour, tu affrontes un nouvel adversaire de ta ligue. Un duel se joue en 7 rounds : tes 6 derniers jours et aujourd'hui.", list: ["10h — le match s'ouvre et le premier round est dévoilé.", "Ensuite, un nouveau round toutes les 90 minutes.", "19h — le round du jour passe en direct : les cartes sont révélées et le fil du direct donne des indices sur la journée de ton adversaire.", "21h30 — le verdict : le combat se joue jusqu'au KO et le classement se met à jour."] },
          { q: "Comment fonctionne une ligue ?", a: "Une ligue, c'est 8 joueurs de ton niveau, 7 jours et 7 duels — un par jour, contre un adversaire différent à chaque fois. À la fin : classement final et podium. Ensuite, tu peux remettre ça avec le même groupe ou rejoindre une nouvelle ligue." },
          { q: "Puis-je jouer avec mes amis ?", a: "Oui. Crée une ligue dans l'app, partage le code avec tes amis, et lancez-la quand tout le monde est là." },
          { q: "Ça marche dans mon fuseau horaire ?", a: "Oui. Chaque ligue se joue à son heure locale : le match s'ouvre à 10h et le verdict tombe à 21h30, où que tu sois." },
          { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité." },
        ],
      },
      {
        id: "points", label: "Points & zones", title: "Les points et les zones cardio",
        items: [
          { q: "Comment je gagne des points ?", a: "Ta montre mesure ton effort via Apple Santé ou Health Connect. Chaque minute où ton cœur travaille rapporte des points d'activité (AP) — plus ta zone cardio est élevée, plus chaque minute rapporte. Tes pas rapportent aussi des points. Aucune saisie manuelle : tout vient de ta montre." },
          { q: "Que sont les zones cardio ?", a: "Chaque minute d'effort tombe dans l'une des 4 zones, de la plus légère à la plus intense :", list: ["Endurance — effort léger qui maintient l'activité : marche rapide, footing lent.", "Tempo — effort modéré confortable, ton endurance fondamentale.", "Seuil — effort soutenu qui demande de la régularité : efficace pour gagner des points vite.", "Sprint — effort maximal : intervalles, sprints. Très rentable, mais impossible à tenir longtemps."], after: "Plus la zone est intense, plus chaque minute rapporte de points. Tu retrouves tes zones et tes minutes par zone dans l'onglet Activité." },
          { q: "Mon âge compte-t-il ?", a: "Tes zones sont calculées selon ton âge : le même effort est récompensé équitablement, quel que soit ton âge. C'est pour ça qu'on te demande ton année de naissance à l'inscription." },
          { q: "Y a-t-il une limite par jour ?", a: "Tes 90 meilleures minutes de la journée comptent en entier. Au-delà, les minutes rapportent toujours des points, mais de moins en moins. Une seule journée extrême ne peut pas décider de toute la semaine : être là chaque jour paie davantage." },
          { q: "La marche compte-t-elle ?", a: "Oui. Tes pas rapportent des points toute la journée, et une marche rapide qui fait travailler ton cœur compte aussi comme effort — si ta montre mesure ta fréquence cardiaque tout au long de la journée." },
          { q: "Quels sports comptent ?", a: "Toute activité qui fait travailler ton cœur : course, vélo, muscu, natation, sports collectifs, danse, randonnée… Attax n'a pas besoin de connaître le sport — ta fréquence cardiaque dit tout." },
        ],
      },
      {
        id: "cards", label: "Cartes", title: "Les cartes stratégiques",
        items: [
          { q: "Comment fonctionnent les cartes ?", a: "Chaque matin, 3 cartes sont tirées. Choisis-en une avant 13h — tu peux changer d'avis jusque-là. Si tu ne choisis pas, une carte est choisie pour toi. Les cartes sont révélées pendant le direct du soir, et leurs effets s'appliquent à 21h30, quand le duel est tranché. Ta carte et celle de ton adversaire comptent toutes les deux." },
          { q: "Quelles sont les 12 cartes ?", a: "12 cartes en 6 familles : Boost, Défense, Sabotage, Info, Masque et Momentum.", list: ["Spike (Boost) — +30 % AP sur ta séance du jour, limitée à 30 minutes.", "Overdrive (Boost) — ta meilleure fenêtre de 20 minutes de la journée compte ×2 en AP.", "Recover (Boost) — +15 % AP sur ta séance du jour.", "Shield (Défense) — l'adversaire perd 15 % d'AP sur sa séance du jour.", "Freeze (Sabotage) — le meilleur jour de la semaine de l'adversaire perd 8 % d'AP.", "Pressure (Sabotage) — si l'adversaire dépasse 30 min de sport aujourd'hui, +15 % AP sur tes points du jour.", "Parasite (Sabotage) — si l'adversaire dépasse 30 min de sport, tu lui voles 7 % de ses points.", "Scan (Info) — débloque un round futur de ton choix et révèle la courbe complète de l'adversaire pour ce round.", "Mirage (Masque) — l'adversaire voit ton score faussé de ±15 %.", "Ghost (Masque) — ton activité du jour s'affiche à 0 pour l'adversaire jusqu'à la révélation de ta carte, puis ta frappe tombe d'un coup.", "Blackout (Masque) — aucune info sur les scores, pour toi comme pour l'adversaire, entre 14h30 et 19h.", "Counter (Momentum) — si tu es derrière à 18h, +25 % AP sur toutes tes séances après 18h."] },
        ],
      },
      {
        id: "ranks", label: "Rangs", title: "Le classement et les rangs",
        items: [
          { q: "Comment fonctionne le classement de la ligue ?", a: "Le classement se fait au nombre de victoires et se met à jour chaque soir après le verdict. Le fil de la ligue raconte l'histoire : qui prend la tête, qui est en feu, qui chute." },
          { q: "Quels sont les rangs ?", a: "Au-delà de chaque ligue, un rang global te suit de ligue en ligue : 5 divisions, de Rookie à Legend, avec 3 paliers chacune (I, II, III).", list: ["Rookie", "Challenger", "Pro", "Elite", "Legend"] },
          { q: "Comment je monte ?", a: "Gagne tes duels : chaque victoire te rapproche du palier suivant, chaque défaite te fait reculer. Atteins le haut d'un palier et tu es promu ; descends trop bas et tu es relégué." },
          { q: "Quand mon rang est-il dévoilé ?", a: "Ton rang reste caché pendant tes 7 premiers duels, le temps que le jeu cerne ton niveau. Il est ensuite dévoilé — et à partir de là, c'est à toi de jouer." },
          { q: "Vais-je affronter des joueurs de mon niveau ?", a: "Oui. Quelques questions à l'inscription fixent ton niveau de départ, et tu rejoins une ligue de ton niveau. Ensuite, ce sont tes résultats qui parlent." },
        ],
      },
      {
        id: "watches", label: "Montres", title: "Les montres compatibles",
        items: [
          { q: "Ai-je besoin d'une montre ?", a: "Oui : une montre connectée, un bracelet ou une ceinture cardio qui mesure ta fréquence cardiaque. Ton téléphone seul compte tes pas mais ne mesure pas ton cœur — sans lui, tes séances ne rapportent pas de points. Attax ne se connecte pas directement à la montre : tout passe par Apple Santé (iPhone) ou Health Connect (Android)." },
          { q: "Quelles montres fonctionnent sur iPhone ?", a: "Via Apple Santé :", list: ["Compatibles : Apple Watch, Garmin, Amazfit, COROS, Withings, Oura, Nothing / CMF.", "Exercices seulement (lance une séance sur ta montre) : Polar, WHOOP, Suunto, Huawei, Xiaomi.", "Non compatibles : Fitbit / Pixel Watch (pas de synchro avec Apple Santé), Samsung Galaxy Watch et Wear OS (ne s'associent pas à un iPhone)."] },
          { q: "Quelles montres fonctionnent sur Android ?", a: "Via Health Connect :", list: ["Compatibles : Garmin, Samsung Galaxy Watch, Fitbit / Pixel Watch, montres Wear OS, Amazfit, COROS, Nothing / CMF, Suunto, Withings, Oura.", "Exercices seulement (lance une séance sur ta montre) : Xiaomi / Redmi, Polar, WHOOP.", "Non compatibles : Huawei / Honor (Huawei Health ne partage pas ses données avec Health Connect)."] },
          { q: "Que veut dire « exercices seulement » ?", a: "Certaines marques n'envoient ta fréquence cardiaque à Apple Santé ou Health Connect que pendant un exercice. Tes séances comptent à condition de les lancer sur ta montre, mais la marche du quotidien ne comptera pas." },
          { q: "J'ai une Apple Watch. Quelque chose à savoir ?", a: "Sur les modèles antérieurs à la Series 12, la montre ne mesure ta fréquence cardiaque que toutes les quelques minutes en dehors des exercices. Lance un exercice dans l'app Exercice pour que tes séances comptent entièrement." },
          { q: "Comment connecter ma montre ?", a: "Dans l'appli de ta montre (Garmin Connect, Samsung Health, Zepp, COROS…), active le partage avec Apple Santé ou Health Connect, pas et fréquence cardiaque compris. Autorise ensuite Attax à les lire quand l'app te le demande. Pour de meilleurs résultats, règle la mesure cardio sur « en continu » dans l'appli de ta montre." },
        ],
      },
      {
        id: "check", label: "Vérification", title: "S'assurer que ta montre fonctionne",
        items: [
          { q: "Comment Attax vérifie-t-il ma montre ?", a: "Avant ta première ligue, Attax lance la vérification de la montre : il cherche tes données cardio récentes. En quelques secondes, tu sais où tu en es :", list: ["Connectée — tout est bon, tu peux jouer.", "Mesures trop espacées — tu peux jouer, et l'app te dit comment améliorer ça (fréquence cardiaque en continu, séances lancées sur la montre).", "Aucune donnée, plus de synchro récente ou accès manquant — tu ne peux pas encore rejoindre une ligue, et l'app te dit exactement quoi corriger."], after: "Tu peux relancer la vérification à tout moment : Mon compte → Aide." },
          { q: "Et si mes données n'arrivent plus ?", a: "Si Attax ne reçoit plus de données de ta montre depuis un moment, tu reçois une notification et un bandeau s'affiche sur l'Accueil, pour corriger le problème avant qu'il te coûte un duel." },
          { q: "Mes points restent à 0. Que faire ?", a: "Vérifie que l'appli de ta montre partage ta fréquence cardiaque avec Apple Santé ou Health Connect, et qu'Attax a le droit de la lire. Lance ensuite la vérification de la montre : elle te dit exactement ce qui manque." },
          { q: "Mes points arrivent en retard.", a: "Les données passent de ta montre à son appli, puis à Apple Santé ou Health Connect, puis à Attax. Cela peut prendre quelques minutes. Ouvre l'appli de ta montre pour forcer une synchro, puis ouvre Attax." },
        ],
      },
    ],
  },
};
