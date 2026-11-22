// Textes des sections reprises du site en ligne (branche master, 21/11) : L'idée, Fonctionnalités, Tes données, FAQ.
// Passe 7 (21/11, accord du propriétaire) : L'idée réduite à 3 mots-clés courts, Fonctionnalités à 4 points courts
// (sans doublon avec L'idée), Tes données en une ligne (line + link). Les questions de la FAQ sont inchangées.
export const LIVE = {
  en: {
    info: {
      label: "THE IDEA",
      h2: "Your fitness is the game engine.",
      sub: "Most fitness apps stop at tracking.\nAttax turns every session into a fight you can win tonight.",
      steps: [
        { title: "Real effort", body: "Every minute your heart works hard earns pts. Your steps count too." },
        { title: "Strategy", body: "3 cards every morning. One choice can flip a close duel." },
        { title: "Competition", body: "A new opponent every day. The verdict lands at 9:30 PM." },
      ],
    },
    features: {
      label: "FEATURES",
      h2: ["Built for athletes.", "Designed for gamers."],
      items: [
        { title: "Leagues", desc: "8 players at your level, 7 duels in 7 days, one podium." },
        { title: "Friends Leagues", desc: "A ranked league with up to 3 friends of a close rank, or a custom league from 2 to 40." },
        { title: "Progression", desc: "5 divisions, 15 tiers, from Rookie to Legend." },
        { title: "Real Activity", desc: "Manual entries don't count." },
      ],
    },
    privacy: {
      label: "YOUR DATA",
      title: "Your health data stays yours.",
      body: "Attax only reads your steps and heart rate; it never writes anything to Apple Health or Health Connect. Your data powers your game and nothing else, and you can delete your account in the app at any time.",
      points: ["Read-only access", "Never sold, no ads", "Delete anytime, in the app"],
      line: "Your health data stays yours: read-only, never sold, no ads.",
      link: "Learn more",
    },
    faq: {
      label: "FAQ",
      h2: "Frequently asked questions.",
      contact_text: "Can't find your answer?",
      contact_link: "Get in touch",
      all_link: "See the full FAQ",
      items: [
        { q: "Do I need a smartwatch?", a: "Yes. You need a device that measures your heart rate (smartwatch, fitness band or chest strap) synced with Apple Health (iPhone) or Health Connect (Android): Apple Watch, Garmin, Samsung Galaxy Watch, Fitbit, COROS, Amazfit, Withings, Oura, CMF by Nothing and more. Your phone alone counts your steps, but your workouts are measured by your watch. Attax checks your connection before your first league." },
        { q: "How do I earn pts?", a: "Your watch measures your effort: every minute your heart works hard earns pts, and the harder you push, the more you score. Your steps earn pts too. No manual entry: everything comes from Apple Health or Health Connect." },
        { q: "How is a duel decided?", a: "A match has 7 rounds: the 6 previous days and today (in your first league, matches build up: match 1 is the final round alone, match 2 has 2 rounds, and so on). Each day is won by whoever scored the most pts that day, with at least 5 minutes of effort or 2,000 steps. Everyone starts with 7 HP and every round lost costs HP. The past rounds play out from 10 AM to 5:30 PM, the final round (2 HP) is live from 7 PM. At 9:30 PM the cards are revealed and whoever keeps the most HP wins, by K.O. if the other falls to 0 HP. Level on HP? The week's pts (without cards) decide, then the steps, then the judges. Never a draw." },
          { q: "Will I face players at my level?", a: "Yes. A few questions when you sign up set your starting level, and you join a league at your level. Then your results do the talking: your rank follows you from league to league." },
        { q: "Can I play with friends?", a: "Yes. Create a ranked league with up to 3 friends of a close rank, or a custom league from 2 to 40 players. Share your code, they join in seconds." },
        { q: "Is Attax free?", a: "Yes. Attax is free to download and free to play, with no ads." },
        { q: "Does Attax work on iPhone and Android?", a: "Yes. Attax is available on iPhone (App Store) and Android (Google Play), and every league plays on its own local time." },
      ],
    },
  },
  fr: {
    info: {
      label: "L'IDÉE",
      h2: "Ton activité est le moteur du jeu.",
      sub: "La plupart des applications fitness s'arrêtent au suivi.\nAttax transforme chaque séance en combat à gagner le soir même.",
      steps: [
        { title: "Ton vrai effort", body: "Chaque minute où ton cœur travaille rapporte des pts. Tes pas aussi." },
        { title: "Stratégie", body: "3 cartes chaque matin. Un seul choix peut renverser un duel serré." },
        { title: "Compétition", body: "Un nouvel adversaire chaque jour. Le verdict tombe à 21h30." },
      ],
    },
    features: {
      label: "FONCTIONNALITÉS",
      h2: ["Pensé pour les sportifs.", "Conçu pour les joueurs."],
      items: [
        { title: "Ligues", desc: "8 joueurs de ton niveau, 7 duels en 7 jours, un podium." },
        { title: "Ligues entre amis", desc: "Une ligue classée entre amis (jusqu'à 3 amis de rang proche), ou une ligue personnalisée de 2 à 40." },
        { title: "Progression", desc: "5 divisions, 15 paliers, de Rookie à Legend." },
        { title: "Activité réelle", desc: "Les saisies à la main ne comptent pas." },
      ],
    },
    privacy: {
      label: "TES DONNÉES",
      title: "Tes données de santé restent les tiennes.",
      body: "Attax lit uniquement tes pas et ta fréquence cardiaque, il n'écrit jamais rien dans Apple Santé ou Health Connect. Tes données servent à ton jeu, et à rien d'autre. Et tu peux supprimer ton compte depuis l'app, à tout moment.",
      points: ["Accès en lecture seule", "Jamais vendues, zéro publicité", "Suppression à tout moment, dans l'app"],
      line: "Tes données de santé restent les tiennes : lecture seule, jamais vendues, zéro publicité.",
      link: "En savoir plus",
    },
    faq: {
      label: "FAQ",
      h2: "Questions fréquentes.",
      contact_text: "Tu ne trouves pas ta réponse ?",
      contact_link: "Contacte-nous",
      all_link: "Voir toute la FAQ",
      items: [
        { q: "Ai-je besoin d'une montre connectée ?", a: "Oui. Il te faut un appareil qui mesure ta fréquence cardiaque (montre, bracelet ou ceinture thoracique) synchronisé avec Apple Santé (iPhone) ou Health Connect (Android) : Apple Watch, Garmin, Samsung Galaxy Watch, Fitbit, COROS, Amazfit, Withings, Oura, CMF by Nothing et d'autres. Ton téléphone seul compte tes pas, mais tes séances sont mesurées par ta montre. Attax vérifie ta connexion avant ta première ligue." },
        { q: "Comment je gagne des pts ?", a: "Ta montre mesure ton effort : chaque minute où ton cœur travaille rapporte des pts, et plus tu pousses, plus tu marques. Tes pas rapportent aussi des pts. Aucune saisie manuelle : tout vient d'Apple Santé ou de Health Connect." },
        { q: "Comment un duel est-il tranché ?", a: "Un match compte 7 rounds : les 6 jours d'avant et aujourd'hui (dans ta première ligue, les matchs montent en puissance : le match 1 se résume au round final, le match 2 compte 2 rounds, et ainsi de suite). Chaque jour est gagné par celui qui a marqué le plus de pts ce jour-là, avec au moins 5 minutes d'effort ou 2 000 pas. Chacun part de 7 PV et chaque round perdu coûte des PV. Les rounds passés se jouent de 10h à 17h30, le round final (2 PV) est en direct dès 19h. À 21h30, les cartes se révèlent et celui qui garde le plus de PV gagne, par K.O. si l'autre tombe à 0 PV. Égalité de PV ? Les pts de la semaine (sans les cartes) décident, puis les pas, puis les juges. Jamais de match nul." },
          { q: "Vais-je affronter des joueurs de mon niveau ?", a: "Oui. Quelques questions à l'inscription fixent ton niveau de départ, et tu rejoins une ligue de ton niveau. Ensuite, ce sont tes résultats qui parlent : ton rang te suit de ligue en ligue." },
        { q: "Puis-je jouer avec mes amis ?", a: "Oui. Crée une ligue classée entre amis (jusqu'à 3 amis de rang proche), ou une ligue personnalisée de 2 à 40 joueurs. Partage ton code, ils te rejoignent en quelques secondes." },
        { q: "Attax est-il gratuit ?", a: "Oui. Attax est gratuit à télécharger et à jouer, sans publicité." },
        { q: "Attax fonctionne-t-il sur iPhone et Android ?", a: "Oui. Attax est disponible sur iPhone (App Store) et Android (Google Play), et chaque ligue se joue à son heure locale." },
      ],
    },
  },
} as const;
