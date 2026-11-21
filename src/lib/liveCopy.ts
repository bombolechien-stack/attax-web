// Textes des sections reprises telles quelles du site en ligne (branche master, 21/11) : L'idée, Fonctionnalités,
// Tes données, FAQ. Seules les erreurs de règles ont été corrigées (voir le commit), le reste est le texte en ligne.
export const LIVE = {
  en: {
    info: {
      label: "THE IDEA",
      h2: "Your fitness is the game engine.",
      sub: "Most fitness apps stop at tracking.\nAttax turns every session into a fight you can win tonight.",
      steps: [
        { title: "Real effort", body: "Every minute your heart works hard earns points, and the harder you push, the more you score. Running, cycling, gym, football, dance: if your watch sees your heart working, it counts. Your steps count too." },
        { title: "Strategy", body: "Every morning, 3 cards are drawn. Pick yours before 1 PM: boost your session, sabotage your opponent, hide your score. One choice can flip a close duel." },
        { title: "Competition", body: "Every day, a new opponent from your league. The verdict lands at 9:30 PM, and the table moves with it." },
      ],
    },
    features: {
      label: "FEATURES",
      h2: ["Built for athletes.", "Designed for gamers."],
      items: [
        { title: "Real Activity", desc: "Your heart rate and your steps power your fighter. No manual input, no way to fake it: what your watch records is what you score." },
        { title: "Daily Duels", desc: "A new opponent every morning. Rounds revealed through the day. A verdict every evening at 9:30 PM. The competition never sleeps." },
        { title: "Card Strategy", desc: "12 cards in 4 families: Attack, Defense, Sabotage, Trick. 3 drawn each day, one to play. The right card can steal a duel." },
        { title: "Leagues", desc: "8 players at your level, 7 duels in 7 days, one podium. Then run it back with the same group, or jump into a new league." },
        { title: "Friends Leagues", desc: "Create a private league, share the code, and settle it once and for all. Your crew, your scoreboard." },
        { title: "Progression", desc: "A global rank that follows you from league to league: 5 divisions, 15 tiers, from Rookie to Legend. Win to climb." },
      ],
    },
    privacy: {
      label: "YOUR DATA",
      title: "Your health data stays yours.",
      body: "Attax only reads your steps and heart rate; it never writes anything to Apple Health or Health Connect. Your data powers your game and nothing else, and you can delete your account in the app at any time.",
      points: ["Read-only access", "Never sold, no ads", "Delete anytime, in the app"],
    },
    faq: {
      label: "FAQ",
      h2: "Frequently asked questions.",
      contact_text: "Can't find your answer?",
      contact_link: "Get in touch",
      all_link: "See the full FAQ",
      items: [
        { q: "Do I need a smartwatch?", a: "Yes. You need a device that measures your heart rate (smartwatch, fitness band or chest strap) synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Samsung Galaxy Watch, Fitbit, COROS, Amazfit, Withings, Oura, CMF by Nothing and more. Your phone alone counts your steps, but your workouts are measured by your watch. Attax checks your connection before your first league." },
        { q: "How do I earn points?", a: "Your watch measures your effort: every minute your heart works hard earns points, and the harder you push, the more you score. Your steps earn points too. No manual entry: everything comes from Apple Health or Health Connect." },
        { q: "How is a duel decided?", a: "A match has 7 rounds: the 6 previous days and today (in your first league, matches build up: match 1 is the final round alone, match 2 has 2 rounds, and so on). Each day is won by whoever scored the most pts that day, with at least 5 minutes of effort or 2,000 steps. Everyone starts with 7 HP and every round lost costs HP. The past rounds play out from 10 AM to 5:30 PM, the final round (2 HP) is live from 7 PM. At 9:30 PM the cards are revealed and whoever keeps the most HP wins, by K.O. if the other falls to 0 HP. Level on HP? The week's pts (without cards) decide, then the steps, then the judges. Never a draw." },
          { q: "Will I face players at my level?", a: "Yes. A few questions when you sign up set your starting level, and you join a league at your level. Then your results do the talking: your rank goes up and down with every duel." },
        { q: "Can I play with friends?", a: "Yes. Create a league in the app, share the code with your friends, and start it whenever everyone's in." },
        { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads." },
        { q: "Does Attax work on iPhone and Android?", a: "Yes. Attax is available on iPhone (App Store) and Android (Google Play), and every league plays on its own local time." },
      ],
    },
  },
  fr: {
    info: {
      label: "L'IDÉE",
      h2: "Ton activité est le moteur du jeu.",
      sub: "La plupart des applis fitness s'arrêtent au suivi.\nAttax transforme chaque séance en combat à gagner le soir même.",
      steps: [
        { title: "Ton vrai effort", body: "Chaque minute où ton cœur travaille rapporte des points, et plus tu pousses, plus tu marques. Course, vélo, muscu, foot, danse : si ta montre voit ton cœur travailler, ça compte. Et tes pas comptent aussi." },
        { title: "Stratégie", body: "Chaque matin, 3 cartes sont tirées. Choisis la tienne avant 13h : booste ta séance, sabote ton adversaire, cache ton score. Un seul choix peut renverser un duel serré." },
        { title: "Compétition", body: "Chaque jour, un nouvel adversaire de ta ligue. Le verdict tombe à 21h30, et le classement bouge avec." },
      ],
    },
    features: {
      label: "FONCTIONNALITÉS",
      h2: ["Pensé pour les sportifs.", "Conçu pour les joueurs."],
      items: [
        { title: "Activité réelle", desc: "Ta fréquence cardiaque et tes pas alimentent ton combattant. Aucune saisie manuelle, rien à truquer : ce que ta montre enregistre, c'est ce que tu marques." },
        { title: "Duels quotidiens", desc: "Un nouvel adversaire chaque matin. Des rounds dévoilés au fil de la journée. Un verdict chaque soir à 21h30. La compétition ne dort jamais." },
        { title: "Stratégie de cartes", desc: "12 cartes en 4 familles : Attaque, Défense, Sabotage, Ruse. 3 tirées chaque jour, une à jouer. La bonne carte peut voler un duel." },
        { title: "Ligues", desc: "8 joueurs de ton niveau, 7 duels en 7 jours, un podium. Ensuite, revanche avec le même groupe ou nouvelle ligue." },
        { title: "Ligues entre amis", desc: "Crée une ligue privée, partage le code, et réglez ça une bonne fois pour toutes. Ta bande, ton classement." },
        { title: "Progression", desc: "Un rang global qui te suit de ligue en ligue : 5 divisions, 15 paliers, de Rookie à Legend. Gagne pour grimper." },
      ],
    },
    privacy: {
      label: "TES DONNÉES",
      title: "Tes données de santé restent les tiennes.",
      body: "Attax lit uniquement tes pas et ta fréquence cardiaque, il n'écrit jamais rien dans Apple Santé ou Health Connect. Tes données servent à ton jeu, et à rien d'autre. Et tu peux supprimer ton compte depuis l'app, à tout moment.",
      points: ["Accès en lecture seule", "Jamais vendues, zéro pub", "Suppression à tout moment, dans l'app"],
    },
    faq: {
      label: "FAQ",
      h2: "Questions fréquentes.",
      contact_text: "Tu ne trouves pas ta réponse ?",
      contact_link: "Contacte-nous",
      all_link: "Voir toute la FAQ",
      items: [
        { q: "Ai-je besoin d'une montre connectée ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque (montre, bracelet ou ceinture thoracique) synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Samsung Galaxy Watch, Fitbit, COROS, Amazfit, Withings, Oura, CMF by Nothing et d'autres. Ton téléphone seul compte tes pas, mais tes séances sont mesurées par ta montre. Attax vérifie ta connexion avant ta première ligue." },
        { q: "Comment je gagne des points ?", a: "Ta montre mesure ton effort : chaque minute où ton cœur travaille rapporte des points, et plus tu pousses, plus tu marques. Tes pas rapportent aussi des points. Aucune saisie manuelle: tout vient d'Apple Santé ou de Health Connect." },
        { q: "Comment un duel est-il tranché ?", a: "Un match compte 7 rounds : les 6 jours d'avant et aujourd'hui (dans ta première ligue, les matchs montent en puissance : le match 1 se résume au round final, le match 2 compte 2 rounds, et ainsi de suite). Chaque jour est gagné par celui qui a marqué le plus de pts ce jour-là, avec au moins 5 minutes d'effort ou 2 000 pas. Chacun part de 7 PV et chaque round perdu coûte des PV. Les rounds passés se jouent de 10h à 17h30, le round final (2 PV) est en direct dès 19h. À 21h30, les cartes se révèlent et celui qui garde le plus de PV gagne, par K.O. si l'autre tombe à 0 PV. Égalité de PV ? Les pts de la semaine (sans les cartes) décident, puis les pas, puis les juges. Jamais de match nul." },
          { q: "Vais-je affronter des joueurs de mon niveau ?", a: "Oui. Quelques questions à l'inscription fixent ton niveau de départ, et tu rejoins une ligue de ton niveau. Ensuite, ce sont tes résultats qui parlent : ton rang monte et descend à chaque duel." },
        { q: "Puis-je jouer avec mes amis ?", a: "Oui. Crée une ligue dans l'app, partage le code avec tes amis, et lancez-la quand tout le monde est là." },
        { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité." },
        { q: "Attax fonctionne-t-il sur iPhone et Android ?", a: "Oui. Attax est disponible sur iPhone (App Store) et Android (Google Play), et chaque ligue se joue à son heure locale." },
      ],
    },
  },
} as const;
