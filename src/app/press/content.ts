// Contenu du kit presse (FR/EN). Règles : ce que l'app montre, rien de plus —
// pas de mécanique interne, pas de chiffres inventés. Contact : contact@attax.app.

export const KIT_URL = "/press/attax-press-kit.zip";

const LOGOS = [
  { key: "logo", files: ["attax-logo-black", "attax-logo-white"] },
  { key: "icon", files: ["attax-icon-black", "attax-icon-white"] },
  { key: "wordmark", files: ["attax-wordmark-black", "attax-wordmark-white"] },
] as const;
export { LOGOS };

export const SCREENS = [
  { src: "/screens/screenactivity.png", file: "/press/screens/attax-activity.png" },
  { src: "/screens/screenmatch.png", file: "/press/screens/attax-match.png" },
  { src: "/screens/screencards.png", file: "/press/screens/attax-cards.png" },
];

export const CARDS = ["spike", "overdrive", "recover", "shield", "freeze", "pressure", "parasite", "scan", "mirage", "ghost", "blackout", "counter"];

type Text = { label: string; body: string };
export type PressContent = {
  meta_title: string; meta_desc: string;
  hero_label: string; hero_title: string; hero_sub: string; hero_cta: string; hero_cta2: string; kit_note: string;
  kit_label: string; kit_title: string; kit_items: { title: string; desc: string }[];
  facts_label: string; facts_title: string; facts: { label: string; value: string }[];
  texts_label: string; texts_title: string; texts_sub: string; texts: Text[]; copy_btn: string; copied_btn: string;
  how_label: string; how_title: string; how: { title: string; body: string }[];
  creators_label: string; creators_title: string; creators_sub: string; ideas: { title: string; body: string }[];
  tags_label: string; tags: string[];
  logos_label: string; logos_title: string; logos_sub: string; logo_names: Record<"logo" | "icon" | "wordmark", string>;
  on_dark: string; on_light: string;
  colors_label: string; colors: { name: string; hex: string; usage: string }[]; font_label: string; font_value: string;
  media_label: string; media_title: string; media_sub: string; video_title: string; video_caption: string;
  screens: { label: string; caption: string }[]; download: string;
  cards_label: string; cards_title: string; cards_sub: string;
  rules_label: string; rules_title: string; rules_do_title: string; rules_do: string[]; rules_dont_title: string; rules_dont: string[];
  contact_label: string; contact_title: string; contact_body: string; contact_email: string; contact_response: string;
};

export const PRESS_CONTENT: Record<"en" | "fr", PressContent> = {
  en: {
    meta_title: "Press Kit — Attax",
    meta_desc: "Logos, screenshots, video, ready-to-use texts and key facts to write about Attax, the fitness game where your real workouts become daily duels.",
    hero_label: "PRESS & CREATORS",
    hero_title: "Everything you need\nto talk about Attax.",
    hero_sub: "Journalists, bloggers, creators: logos, screenshots, a gameplay video, ready-to-use texts and key facts. Download the kit and tell the story your way.",
    hero_cta: "Download the press kit",
    hero_cta2: "Contact us",
    kit_note: "ZIP · 29 MB · logos, screenshots, card artwork, video, texts",
    kit_label: "THE KIT",
    kit_title: "What's inside.",
    kit_items: [
      { title: "Logos", desc: "Full logo, icon and wordmark — black and white, SVG and PNG." },
      { title: "App screenshots", desc: "Activity, daily duel and strategy cards, in high resolution." },
      { title: "Gameplay video", desc: "A 12-second loop of a live duel: fighters, strikes, scores." },
      { title: "Card artwork", desc: "The 12 strategy cards of the game." },
      { title: "Ready-to-use texts", desc: "Attax in one sentence, one paragraph and a long version — in English and French." },
    ],
    facts_label: "KEY FACTS",
    facts_title: "Attax at a glance.",
    facts: [
      { label: "Name", value: "Attax" },
      { label: "Category", value: "Competitive fitness game" },
      { label: "Platforms", value: "iPhone (App Store) & Android (Google Play)" },
      { label: "Price", value: "Free to download and play, no ads" },
      { label: "Activity source", value: "Apple Health (iPhone) · Health Connect (Android)" },
      { label: "Requires", value: "A watch, band or chest strap that measures heart rate" },
      { label: "Format", value: "Leagues of 8 players, 7 duels in 7 days" },
      { label: "Strategy", value: "12 cards — 3 drawn every morning, 1 to play" },
      { label: "Ranks", value: "5 divisions, 15 tiers — from Rookie to Legend" },
      { label: "Languages", value: "English, French" },
      { label: "Founded", value: "2026" },
      { label: "Website", value: "attax.app" },
      { label: "Social", value: "@playattax — Instagram, TikTok, X, YouTube" },
    ],
    texts_label: "READY-TO-USE TEXTS",
    texts_title: "Copy, paste, publish.",
    texts_sub: "Use them as they are or adapt them to your format.",
    texts: [
      { label: "In one sentence", body: "Attax is the free fitness game that turns your real workouts into a daily duel against a player of your league." },
      { label: "In one paragraph", body: "Attax turns your real activity into competition. Your watch measures your effort through Apple Health or Health Connect, and every workout and every step becomes points. Every day, you face a player of your league in a duel revealed round by round, then settled at 9:30 PM. Play a strategy card every morning, climb the standings, and rise from Rookie to Legend. Free on iPhone and Android." },
      { label: "Long version", body: "Most fitness apps stop at tracking: numbers nobody else sees, nothing at stake. Attax gives your workouts a reason to exist. Players connect a watch, band or chest strap through Apple Health (iPhone) or Health Connect (Android), and their real effort becomes activity points — the harder they push, the more they score, and their steps count too.\n\nPlayers join a league of 8 at their level: 7 days, 7 duels, a new opponent every day. Each duel compares the last 7 days of activity, revealed round by round through the day, with the final round live from 7 PM and the verdict at 9:30 PM — played out as an animated fight to the KO. Every morning, 3 strategy cards are drawn: boost your session, sabotage your opponent, or hide your score. At the end of the week: a podium, then a rematch or a new league, while a global rank follows each player from Rookie to Legend.\n\nAttax works with any sport that gets the heart working — running, cycling, gym, team sports, dance — and every league plays on its own local time. The app is free, with no ads." },
    ],
    copy_btn: "Copy",
    copied_btn: "Copied",
    how_label: "HOW IT WORKS",
    how_title: "Attax in four points.",
    how: [
      { title: "Your real effort", body: "Your watch measures your effort through Apple Health or Health Connect. Every workout and every step becomes points. No manual entry." },
      { title: "A duel every day", body: "A new opponent from your league every day. Rounds revealed from 10 AM, the final round live from 7 PM, the verdict at 9:30 PM." },
      { title: "Strategy cards", body: "3 cards drawn every morning, one to play before 1 PM: Spike, Shield, Ghost, Mirage… The right card can flip a close duel." },
      { title: "Leagues and ranks", body: "Leagues of 8 players over 7 days, a podium, then a rematch or a new league. A global rank from Rookie to Legend." },
    ],
    creators_label: "CREATORS & INFLUENCERS",
    creators_title: "Content ideas that hit.",
    creators_sub: "Attax is built for daily stories. A few formats that work:",
    ideas: [
      { title: "The 9:30 PM verdict", body: "Film your reaction live when the fight plays out to the KO. Win or lose, it's a moment." },
      { title: "The card of the day", body: "Show your 3 cards in the morning and explain your pick. Then reveal if it paid off in the evening." },
      { title: "Friends league", body: "Create a private league with your crew and document the week: trash talk, comebacks, podium." },
      { title: "From Rookie to Legend", body: "A series following your climb, tier after tier, league after league." },
      { title: "The comeback session", body: "Behind in the afternoon? Show the session that turns the duel around before the verdict." },
      { title: "Every sport counts", body: "Run, ride, lift, dance: show that whatever your sport, it becomes power in Attax." },
    ],
    tags_label: "Tag us",
    tags: ["#playattax", "@playattax"],
    logos_label: "LOGOS",
    logos_title: "Logos.",
    logos_sub: "Use the black version on light backgrounds and the white version on dark backgrounds. Do not alter the proportions, colors or orientation of the logo.",
    logo_names: { logo: "Full logo", icon: "Icon", wordmark: "Wordmark" },
    on_dark: "White — for dark backgrounds",
    on_light: "Black — for light backgrounds",
    colors_label: "Colors & typography",
    colors: [
      { name: "Black", hex: "#0D0D0D", usage: "Logo, backgrounds" },
      { name: "White", hex: "#FFFFFF", usage: "Logo on dark, text" },
      { name: "Attax Blue", hex: "#0443FD", usage: "You — your fighter" },
      { name: "Attax Red", hex: "#EC0420", usage: "Your opponent" },
    ],
    font_label: "Typefaces",
    font_value: "Manrope (app) · Plus Jakarta Sans (website)",
    media_label: "SCREENSHOTS & VIDEO",
    media_title: "Inside the app.",
    media_sub: "Free to use in editorial and creator content, with credit to Attax.",
    video_title: "A live duel",
    video_caption: "12-second loop · MP4",
    screens: [
      { label: "Activity", caption: "Your points and sessions of the day" },
      { label: "Daily duel", caption: "The fight, round by round" },
      { label: "Strategy cards", caption: "The cards of the day" },
    ],
    download: "Download",
    cards_label: "STRATEGY CARDS",
    cards_title: "The 12 cards.",
    cards_sub: "Every morning, 3 of these cards are drawn. Each player plays one.",
    rules_label: "GUIDELINES",
    rules_title: "A few simple rules.",
    rules_do_title: "Please do",
    rules_do: ["Write \"Attax\" with a capital A only.", "Use the logos and screenshots as provided.", "Link to attax.app and tag @playattax.", "Present Attax as a free fitness game for iPhone and Android."],
    rules_dont_title: "Please don't",
    rules_dont: ["Distort, recolor or crop the logo.", "Present Attax as a medical or health-diagnosis app.", "Promise results, prizes or rewards that the app doesn't offer.", "Edit screenshots in a way that changes what the app shows."],
    contact_label: "PRESS CONTACT",
    contact_title: "Let's talk.",
    contact_body: "Interviews, demos, partnerships or creator collaborations: write to us.",
    contact_email: "contact@attax.app",
    contact_response: "We reply as quickly as we can, in English or French.",
  },
  fr: {
    meta_title: "Kit presse — Attax",
    meta_desc: "Logos, captures, vidéo, textes prêts à l'emploi et chiffres clés pour parler d'Attax, le jeu de fitness où tes vraies séances deviennent des duels quotidiens.",
    hero_label: "PRESSE & CRÉATEURS",
    hero_title: "Tout ce qu'il faut\npour parler d'Attax.",
    hero_sub: "Journalistes, blogueurs, créateurs : logos, captures, vidéo de jeu, textes prêts à l'emploi et chiffres clés. Télécharge le kit et raconte l'histoire à ta façon.",
    hero_cta: "Télécharger le kit presse",
    hero_cta2: "Nous contacter",
    kit_note: "ZIP · 29 Mo · logos, captures, visuels des cartes, vidéo, textes",
    kit_label: "LE KIT",
    kit_title: "Ce qu'il contient.",
    kit_items: [
      { title: "Logos", desc: "Logo complet, icône et logotype — noir et blanc, en SVG et PNG." },
      { title: "Captures de l'app", desc: "Activité, duel du jour et cartes stratégiques, en haute résolution." },
      { title: "Vidéo de jeu", desc: "Une boucle de 12 secondes d'un duel en direct : combattants, frappes, scores." },
      { title: "Visuels des cartes", desc: "Les 12 cartes stratégiques du jeu." },
      { title: "Textes prêts à l'emploi", desc: "Attax en une phrase, en un paragraphe et en version longue — en français et en anglais." },
    ],
    facts_label: "CHIFFRES CLÉS",
    facts_title: "Attax en un coup d'œil.",
    facts: [
      { label: "Nom", value: "Attax" },
      { label: "Catégorie", value: "Jeu de fitness compétitif" },
      { label: "Plateformes", value: "iPhone (App Store) & Android (Google Play)" },
      { label: "Prix", value: "Gratuit à télécharger et à jouer, sans publicité" },
      { label: "Source d'activité", value: "Apple Santé (iPhone) · Health Connect (Android)" },
      { label: "Prérequis", value: "Une montre, un bracelet ou une ceinture qui mesure la fréquence cardiaque" },
      { label: "Format", value: "Ligues de 8 joueurs, 7 duels en 7 jours" },
      { label: "Stratégie", value: "12 cartes — 3 tirées chaque matin, 1 à jouer" },
      { label: "Rangs", value: "5 divisions, 15 paliers — de Rookie à Legend" },
      { label: "Langues", value: "Français, anglais" },
      { label: "Création", value: "2026" },
      { label: "Site", value: "attax.app" },
      { label: "Réseaux", value: "@playattax — Instagram, TikTok, X, YouTube" },
    ],
    texts_label: "TEXTES PRÊTS À L'EMPLOI",
    texts_title: "Copie, colle, publie.",
    texts_sub: "Utilise-les tels quels ou adapte-les à ton format.",
    texts: [
      { label: "En une phrase", body: "Attax est le jeu de fitness gratuit qui transforme tes vraies séances en un duel quotidien contre un joueur de ta ligue." },
      { label: "En un paragraphe", body: "Attax transforme ton activité réelle en compétition. Ta montre mesure ton effort via Apple Santé ou Health Connect, et chaque séance, chaque pas devient des points. Chaque jour, tu affrontes un joueur de ta ligue dans un duel dévoilé round après round, puis tranché à 21h30. Joue une carte stratégique chaque matin, grimpe au classement et passe de Rookie à Legend. Gratuit sur iPhone et Android." },
      { label: "Version longue", body: "La plupart des applis fitness s'arrêtent au suivi : des chiffres que personne d'autre ne voit, aucun enjeu. Attax donne une raison d'être à chaque séance. Les joueurs connectent une montre, un bracelet ou une ceinture cardio via Apple Santé (iPhone) ou Health Connect (Android), et leur effort réel devient des points d'activité — plus ils poussent, plus ils marquent, et leurs pas comptent aussi.\n\nLes joueurs rejoignent une ligue de 8 de leur niveau : 7 jours, 7 duels, un nouvel adversaire chaque jour. Chaque duel compare les 7 derniers jours d'activité, dévoilés round après round dans la journée, avec un round final en direct dès 19h et un verdict à 21h30 — joué comme un combat animé jusqu'au KO. Chaque matin, 3 cartes stratégiques sont tirées : booster sa séance, saboter son adversaire ou cacher son score. À la fin de la semaine : un podium, puis une revanche ou une nouvelle ligue, pendant qu'un rang global suit chaque joueur de Rookie à Legend.\n\nAttax fonctionne avec tous les sports qui font travailler le cœur — course, vélo, muscu, sports collectifs, danse — et chaque ligue se joue à son heure locale. L'app est gratuite, sans publicité." },
    ],
    copy_btn: "Copier",
    copied_btn: "Copié",
    how_label: "COMMENT ÇA MARCHE",
    how_title: "Attax en quatre points.",
    how: [
      { title: "Ton vrai effort", body: "Ta montre mesure ton effort via Apple Santé ou Health Connect. Chaque séance et chaque pas deviennent des points. Aucune saisie manuelle." },
      { title: "Un duel par jour", body: "Un nouvel adversaire de ta ligue chaque jour. Des rounds dévoilés dès 10h, le round final en direct dès 19h, le verdict à 21h30." },
      { title: "Les cartes stratégiques", body: "3 cartes tirées chaque matin, une à jouer avant 13h : Spike, Shield, Ghost, Mirage… La bonne carte peut renverser un duel serré." },
      { title: "Ligues et rangs", body: "Des ligues de 8 joueurs sur 7 jours, un podium, puis une revanche ou une nouvelle ligue. Un rang global de Rookie à Legend." },
    ],
    creators_label: "CRÉATEURS & INFLUENCEURS",
    creators_title: "Des idées de contenu qui marchent.",
    creators_sub: "Attax est fait pour raconter des histoires au quotidien. Quelques formats qui fonctionnent :",
    ideas: [
      { title: "Le verdict de 21h30", body: "Filme ta réaction en direct quand le combat se joue jusqu'au KO. Victoire ou défaite, c'est un moment." },
      { title: "La carte du jour", body: "Montre tes 3 cartes le matin et explique ton choix. Puis révèle le soir si ça a payé." },
      { title: "La ligue entre potes", body: "Crée une ligue privée avec ta bande et raconte la semaine : chambrage, remontadas, podium." },
      { title: "De Rookie à Legend", body: "Une série qui suit ta montée, palier après palier, ligue après ligue." },
      { title: "La séance de la remontada", body: "Mené l'après-midi ? Montre la séance qui renverse le duel avant le verdict." },
      { title: "Tous les sports comptent", body: "Course, vélo, muscu, danse : montre que quel que soit ton sport, il devient de la puissance dans Attax." },
    ],
    tags_label: "Identifie-nous",
    tags: ["#playattax", "@playattax"],
    logos_label: "LOGOS",
    logos_title: "Logos.",
    logos_sub: "Utilise la version noire sur fond clair et la version blanche sur fond sombre. Ne modifie ni les proportions, ni les couleurs, ni l'orientation du logo.",
    logo_names: { logo: "Logo complet", icon: "Icône", wordmark: "Logotype" },
    on_dark: "Blanc — pour fonds sombres",
    on_light: "Noir — pour fonds clairs",
    colors_label: "Couleurs & typographies",
    colors: [
      { name: "Noir", hex: "#0D0D0D", usage: "Logo, fonds" },
      { name: "Blanc", hex: "#FFFFFF", usage: "Logo sur fond sombre, texte" },
      { name: "Bleu Attax", hex: "#0443FD", usage: "Toi — ton combattant" },
      { name: "Rouge Attax", hex: "#EC0420", usage: "Ton adversaire" },
    ],
    font_label: "Typographies",
    font_value: "Manrope (app) · Plus Jakarta Sans (site)",
    media_label: "CAPTURES & VIDÉO",
    media_title: "Dans l'app.",
    media_sub: "Libres d'utilisation dans un contexte éditorial ou de création de contenu, avec mention d'Attax.",
    video_title: "Un duel en direct",
    video_caption: "Boucle de 12 secondes · MP4",
    screens: [
      { label: "Activité", caption: "Tes points et tes séances du jour" },
      { label: "Duel du jour", caption: "Le combat, round après round" },
      { label: "Cartes stratégiques", caption: "Les cartes du jour" },
    ],
    download: "Télécharger",
    cards_label: "CARTES STRATÉGIQUES",
    cards_title: "Les 12 cartes.",
    cards_sub: "Chaque matin, 3 de ces cartes sont tirées. Chaque joueur en joue une.",
    rules_label: "BONNES PRATIQUES",
    rules_title: "Quelques règles simples.",
    rules_do_title: "À faire",
    rules_do: ["Écrire « Attax » avec un A majuscule uniquement.", "Utiliser les logos et captures tels que fournis.", "Mettre un lien vers attax.app et identifier @playattax.", "Présenter Attax comme un jeu de fitness gratuit sur iPhone et Android."],
    rules_dont_title: "À éviter",
    rules_dont: ["Déformer, recolorer ou recadrer le logo.", "Présenter Attax comme une app médicale ou de diagnostic santé.", "Promettre des résultats, des prix ou des récompenses que l'app ne propose pas.", "Retoucher les captures de façon à changer ce que montre l'app."],
    contact_label: "CONTACT PRESSE",
    contact_title: "Parlons-en.",
    contact_body: "Interviews, démos, partenariats ou collaborations créateurs : écris-nous.",
    contact_email: "contact@attax.app",
    contact_response: "Nous répondons au plus vite, en français ou en anglais.",
  },
};
