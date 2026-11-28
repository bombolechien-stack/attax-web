// Contenu du kit presse (FR/EN). Règles : ce que l'app montre, rien de plus :
// pas de mécanique interne, pas de chiffres inventés. Contacts : media@attax.app (presse), partners@attax.app (partenariats).

export const KIT_URL = "/press/attax-press-kit.zip";

const LOGOS = [
  { key: "logo", files: ["attax-logo-black", "attax-logo-white"] },
  { key: "icon", files: ["attax-icon-black", "attax-icon-white"] },
  { key: "wordmark", files: ["attax-wordmark-black", "attax-wordmark-white"] },
] as const;
export { LOGOS };

// Captures de l'app (stores, novembre 2026). Aperçu = /screens/app/{lang}/N.webp (n = 2 : match-final-{lang}.webp, 2.webp n'existe plus) ;
// fichier = le téléphone recadré en pleine résolution (scripts/build-press-kit.py → public/press/screens/{lang}/).
export const SCREENS = [
  { n: 2, file: "attax-01-fight-night.jpg" },
  { n: 3, file: "attax-02-cards.jpg" },
  { n: 4, file: "attax-03-activity.jpg" },
  { n: 5, file: "attax-04-league.jpg" },
  { n: 6, file: "attax-05-season.jpg" },
  { n: 7, file: "attax-06-duo.jpg" },
  { n: 8, file: "attax-07-profile.jpg" },
] as const;
export const SCREEN_PREVIEW = (lang: "en" | "fr", n: number) => n === 2 ? `/screens/app/${lang}/match-final-${lang}.webp` : `/screens/app/${lang}/${n}.webp`;
export const VIDEO = (lang: "en" | "fr") => `/press/attax-fight-night-${lang}.mp4`;

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
  rules_label: string; rules_title: string; rules_do_title: string; rules_do: string[]; rules_dont_title: string; rules_dont: string[];
  contact_label: string; contact_title: string; contact_body: string; contact_email: string; partners_label: string; partners_email: string; contact_response: string;
};

export const PRESS_CONTENT: Record<"en" | "fr", PressContent> = {
  en: {
    meta_title: "Attax press kit",
    meta_desc: "Logos, screenshots, video, ready-to-use texts and key facts to write about Attax, the fitness game where your real workouts become daily duels.",
    hero_label: "PRESS & CREATORS",
    hero_title: "Everything you need\nto talk about Attax.",
    hero_sub: "Journalists, bloggers, creators: logos, screenshots, a gameplay video, ready-to-use texts and key facts. Download the kit and tell the story your way.",
    hero_cta: "Download the press kit",
    hero_cta2: "Contact us",
    kit_note: "ZIP · logos, screenshots, video, texts",
    kit_label: "THE KIT",
    kit_title: "What's inside.",
    kit_items: [
      { title: "Logos", desc: "Full logo, icon and wordmark: black and white, SVG and PNG." },
      { title: "App screenshots", desc: "Fight Night, cards, activity, league, season, duo and profile, in high resolution, in English and French." },
      { title: "Fight Night video", desc: "The 9:30 PM reveal, recorded in the app: the rounds replay, the cards flip, the final round, the winner. English and French." },
      { title: "Ready-to-use texts", desc: "Attax in one sentence, one paragraph and a long version, in English and French." },
    ],
    facts_label: "KEY FACTS",
    facts_title: "Attax at a glance.",
    facts: [
      { label: "Name", value: "Attax" },
      { label: "Category", value: "Competitive fitness game" },
      { label: "Platforms", value: "iPhone (App Store) & Android (Google Play)" },
      { label: "Price", value: "Free to download and play, no ads" },
      { label: "Activity source", value: "Apple Health (iPhone) · Health Connect (Android) · Bluetooth heart-rate sensor, connected straight to the app" },
      { label: "Requires", value: "A smartwatch, or a Bluetooth heart-rate sensor (chest strap, armband)" },
      { label: "Format", value: "Leagues of 8 players, 7 days, a new opponent every day, matches in 7 rounds" },
      { label: "Cards", value: "12 cards in 4 families: 3 drawn every morning, 1 to play" },
      { label: "Fight Night", value: "Every evening at 9:30 PM, league local time" },
      { label: "Progression", value: "A rank from Rookie to Legend, a worldwide season" },
      { label: "Clubs", value: "For gyms, sports clubs, coaches, creators and companies: a rival every day, a champion every month. Free to create and to run" },
      { label: "Languages", value: "15 languages: English, French, Spanish, Portuguese (Brazil), German, Dutch, Italian, Swedish, Finnish, Danish, Russian, Hindi, Arabic, Japanese and Chinese (Simplified)" },
      { label: "Founded", value: "2026" },
      { label: "Website", value: "attax.app" },
      { label: "Social", value: "@playattax on Instagram, TikTok, X and YouTube" },
    ],
    texts_label: "READY-TO-USE TEXTS",
    texts_title: "Copy, paste, publish.",
    texts_sub: "Use them as they are or adapt them to your format.",
    texts: [
      { label: "In one sentence", body: "Every day, an opponent at your level. Every night at 9:30 PM, the verdict. In Attax, your real workouts decide the match." },
      { label: "In one paragraph", body: "No more training for numbers nobody looks at. In Attax, you take on an opponent at your level every day, and your real workouts decide the match: seven rounds, a card to play every morning to turn it all around, and at 9:30 PM Fight Night, where the verdict lands right in front of you. Win your league, climb from Rookie to Legend, defend your place in the world ranking. You can also play in a club: your gym, your team or your group of friends get their own ranking, with a rival every day. A watch or a simple heart-rate sensor is all you need. Free on iPhone and Android, with no ads." },
      { label: "Long version", body: "Most fitness apps count. Attax makes you play. Numbers nobody else sees never got anyone off the sofa; an opponent waiting for you does. That's the idea behind Attax: turning the sport you already do into a match to win, every single day.\n\nThe principle is simple. Your real workouts and steps become points. They are measured by your watch, through Apple Health on iPhone or Health Connect on Android, or by a Bluetooth heart-rate sensor, chest strap or armband, linked straight to the app. Intensity pays, not just volume: a short, committed session earns more than a long stroll. And nothing can be entered by hand. The only way to win is to move.\n\nEvery week, you join a league of 8 players at your level, for 7 days. Every day, you face a new opponent in a match of 7 rounds: your previous 6 days, plus today. Each day is a round, won by whoever scored the most points. A lost round costs 1 HP, the final round costs 2, and the player with the most HP left wins the match. There is never a draw. As long as the day isn't over, nothing is settled: a late-afternoon session can still change everything.\n\nAttax isn't won with your legs alone. Every morning, 3 cards are drawn out of 12, the same for both players: Attack, Defense, Sabotage or Trick. You play one, so does your opponent, and their pick stays secret until the evening. Double down on a day you feel strong, protect yourself on a rest day, trap an opponent who is too sure of themselves: the right card flips a close match.\n\nThen comes 9:30 PM, Fight Night. The two boxers walk out, the rounds replay one by one, the cards flip, and the final round decides the winner. It's the appointment of the day, the one you watch alone on the sofa or with friends, and the one that makes you lace up again the next morning.\n\nThere is always a next step. The league champion leaves with the crown, then a new league begins. A rank follows you from Rookie to Legend. A worldwide season ranks every player on their effort. From your second league, a duo partner is assigned to keep you going. And your profile keeps everything you win: trophies, active-day streak, unlocked moves.\n\nAttax is also played with your own people. You can create a league with friends, or a custom league of 2 to 40 players. And with clubs, the game opens up to communities: a gym, a sports club, a coach, a creator or a company creates its own in one minute. Every day, each member takes on a rival there; every month, a champion gets a cup with the club's logo. Creating and running a club is free.\n\nRunning, cycling, lifting, swimming, team sports, dance: every sport counts. Every league plays on its own local time, the app is available in 15 languages, and your health data is never sold nor shown to other players. Attax is free on iPhone and Android, with no ads." },
    ],
    copy_btn: "Copy",
    copied_btn: "Copied",
    how_label: "HOW IT WORKS",
    how_title: "Attax in four points.",
    how: [
      { title: "Your real effort", body: "Your watch (through Apple Health or Health Connect) or your Bluetooth heart-rate sensor measures your effort. Your workouts and steps become points. Manual entries don't count." },
      { title: "A duel every day", body: "A new opponent from your league every day, a match in 7 rounds. Past rounds played out from 10 AM to 7 PM, the final round live from 7 PM, Fight Night at 9:30 PM." },
      { title: "The cards", body: "3 cards drawn every morning, the same for both players, one to play before 1 PM: Double or nothing, Guard, Freeze, Ghost… The right card can flip a close match." },
      { title: "Leagues and ranks", body: "Leagues of 8 players over 7 days, 1 champion with the crown, then run it back or start a new league. A rank from Rookie to Legend." },
    ],
    creators_label: "CREATORS & INFLUENCERS",
    creators_title: "Content ideas that hit.",
    creators_sub: "Attax is built for daily stories. A few formats that work:",
    ideas: [
      { title: "Fight Night, 9:30 PM", body: "Film your reaction live as the boxers walk out, the cards flip and the final round decides. Win or lose, it's a moment." },
      { title: "The card of the day", body: "Show your 3 cards in the morning and explain your pick. Then reveal at Fight Night if it paid off." },
      { title: "Your club", body: "Open an Attax club for your community: a link in your bio, and your followers take each other on every day, you included. Every month, a champion and a podium to post." },
      { title: "Friends league", body: "Create a league with your crew, share the code and document the week: trash talk, comebacks, the crown." },
      { title: "From Rookie to Legend", body: "A series following your climb, league after league." },
      { title: "The comeback session", body: "Behind before the final round? Show the session that turns the match around before 9:30 PM." },
      { title: "Every sport counts", body: "Run, ride, lift, dance: show that whatever your sport, if your watch measures it, it becomes points in Attax." },
    ],
    tags_label: "Tag us",
    tags: ["#playattax", "@playattax"],
    logos_label: "LOGOS",
    logos_title: "Logos.",
    logos_sub: "Use the black version on light backgrounds and the white version on dark backgrounds. Do not alter the proportions, colors or orientation of the logo.",
    logo_names: { logo: "Full logo", icon: "Icon", wordmark: "Wordmark" },
    on_dark: "White, for dark backgrounds",
    on_light: "Black, for light backgrounds",
    colors_label: "Colors & typography",
    colors: [
      { name: "Black", hex: "#0D0D0D", usage: "Logo, backgrounds" },
      { name: "White", hex: "#FFFFFF", usage: "Logo on dark, text" },
      { name: "Attax Blue", hex: "#0443FD", usage: "You, your fighter" },
      { name: "Attax Red", hex: "#EC0420", usage: "Your opponent" },
    ],
    font_label: "Typefaces",
    font_value: "Manrope (app) · Plus Jakarta Sans (website)",
    media_label: "SCREENSHOTS & VIDEO",
    media_title: "Inside the app.",
    media_sub: "Free to use in editorial and creator content, with credit to Attax.",
    video_title: "Fight Night",
    video_caption: "The 9:30 PM reveal · 23 s · MP4",
    screens: [
      { label: "Fight Night", caption: "The verdict, every night at 9:30 PM" },
      { label: "Cards", caption: "Play a card, flip the match" },
      { label: "Activity", caption: "Your points of the day" },
      { label: "League", caption: "8 players, 7 days, 1 champion" },
      { label: "Season", caption: "The world ranking of effort" },
      { label: "Duo", caption: "A duo partner is assigned to motivate you" },
      { label: "Profile", caption: "Trophies, badges, streak" },
    ],
    download: "Download",
    rules_label: "GUIDELINES",
    rules_title: "A few simple rules.",
    rules_do_title: "Please do",
    rules_do: ["Write \"Attax\" with a capital A only.", "Use the logos and screenshots as provided.", "Link to attax.app and tag @playattax.", "Present Attax as a free fitness game for iPhone and Android."],
    rules_dont_title: "Please don't",
    rules_dont: ["Distort, recolor or crop the logo.", "Present Attax as a medical or health-diagnosis app.", "Promise results, prizes or rewards that the app doesn't offer.", "Edit screenshots in a way that changes what the app shows."],
    contact_label: "PRESS CONTACT",
    contact_title: "Let's talk.",
    contact_body: "Interviews, demos or coverage of Attax: write to us.",
    contact_email: "media@attax.app",
    partners_label: "Partnerships or creator collaborations:", partners_email: "partners@attax.app",
    contact_response: "We reply as quickly as we can, in your language.",
  },
  fr: {
    meta_title: "Kit presse Attax",
    meta_desc: "Logos, captures, vidéo, textes prêts à l'emploi et chiffres clés pour parler d'Attax, le jeu de fitness où tes vraies séances deviennent des duels quotidiens.",
    hero_label: "PRESSE & CRÉATEURS",
    hero_title: "Tout ce qu'il faut\npour parler d'Attax.",
    hero_sub: "Journalistes, blogueurs, créateurs : logos, captures, vidéo de jeu, textes prêts à l'emploi et chiffres clés. Télécharge le kit et raconte l'histoire à ta façon.",
    hero_cta: "Télécharger le kit presse",
    hero_cta2: "Nous contacter",
    kit_note: "ZIP · logos, captures, vidéo, textes",
    kit_label: "LE KIT",
    kit_title: "Ce qu'il contient.",
    kit_items: [
      { title: "Logos", desc: "Logo complet, icône et logotype : noir et blanc, en SVG et PNG." },
      { title: "Captures de l'app", desc: "Soir de combat, cartes, activités, ligue, saison, binôme et profil, en haute résolution, en français et en anglais." },
      { title: "Vidéo du soir de combat", desc: "La révélation de 21h30, enregistrée dans l'app : rounds rejoués, cartes retournées, round final, vainqueur. En français et en anglais." },
      { title: "Textes prêts à l'emploi", desc: "Attax en une phrase, en un paragraphe et en version longue, en français et en anglais." },
    ],
    facts_label: "CHIFFRES CLÉS",
    facts_title: "Attax en un coup d'œil.",
    facts: [
      { label: "Nom", value: "Attax" },
      { label: "Catégorie", value: "Jeu de fitness compétitif" },
      { label: "Plateformes", value: "iPhone (App Store) & Android (Google Play)" },
      { label: "Prix", value: "Gratuit à télécharger et à jouer, sans publicité" },
      { label: "Source d'activité", value: "Apple Santé (iPhone) · Health Connect (Android) · capteur cardio Bluetooth, relié directement à l'app" },
      { label: "Prérequis", value: "Une montre connectée, ou un capteur cardio Bluetooth (ceinture, brassard)" },
      { label: "Format", value: "Ligues de 8 joueurs, 7 jours, un nouvel adversaire chaque jour, matchs en 7 rounds" },
      { label: "Cartes", value: "12 cartes en 4 familles : 3 tirées chaque matin, 1 à jouer" },
      { label: "Soir de combat", value: "Chaque soir à 21h30, heure locale de la ligue" },
      { label: "Progression", value: "Un rang de Rookie à Legend, une saison mondiale" },
      { label: "Clubs", value: "Pour les salles, clubs de sport, coachs, créateurs et entreprises : un rival par jour, un champion par mois. Gratuit à créer et à gérer" },
      { label: "Langues", value: "15 langues : français, anglais, espagnol, portugais (Brésil), allemand, néerlandais, italien, suédois, finnois, danois, russe, hindi, arabe, japonais et chinois simplifié" },
      { label: "Création", value: "2026" },
      { label: "Site", value: "attax.app" },
      { label: "Réseaux", value: "@playattax sur Instagram, TikTok, X et YouTube" },
    ],
    texts_label: "TEXTES PRÊTS À L'EMPLOI",
    texts_title: "Copie, colle, publie.",
    texts_sub: "Utilise-les tels quels ou adapte-les à ton format.",
    texts: [
      { label: "En une phrase", body: "Chaque jour, un adversaire de ton niveau. Chaque soir à 21h30, le verdict. Dans Attax, ce sont tes vraies séances de sport qui décident du match." },
      { label: "En un paragraphe", body: "Fini de s'entraîner pour des chiffres que personne ne regarde. Dans Attax, tu affrontes chaque jour un adversaire de ton niveau, et ce sont tes vraies séances qui décident du match : sept rounds, une carte à jouer chaque matin pour tout renverser, et à 21h30 le soir de combat, où le verdict tombe sous tes yeux. Gagne ta ligue, grimpe de Rookie à Legend, défends ta place au classement mondial. Tu peux aussi jouer en club : ta salle, ton équipe ou ta bande d'amis ont leur propre classement, avec un rival chaque jour. Une montre ou un simple capteur cardio suffit. Gratuit sur iPhone et Android, sans publicité." },
      { label: "Version longue", body: "La plupart des applications de sport comptent. Attax fait jouer. Des chiffres que personne d'autre ne voit n'ont jamais fait lever qui que ce soit du canapé ; un adversaire qui t'attend, si. C'est l'idée d'Attax : transformer le sport que tu fais déjà en un match à gagner, tous les jours.\n\nLe principe est simple. Tes vraies séances et tes pas deviennent des points. Ils sont mesurés par ta montre, via Apple Santé sur iPhone ou Health Connect sur Android, ou par un capteur cardio Bluetooth, ceinture ou brassard, relié directement à l'app. C'est l'intensité qui paie, pas seulement le volume : une séance courte et engagée rapporte plus qu'une longue promenade. Et rien ne se saisit à la main. On ne gagne qu'en bougeant.\n\nChaque semaine, tu rejoins une ligue de 8 joueurs de ton niveau, pour 7 jours. Chaque jour, tu affrontes un nouvel adversaire dans un match en 7 rounds : tes 6 jours d'avant, plus aujourd'hui. Chaque jour est un round, remporté par celui qui a marqué le plus de points. Un round perdu coûte 1 PV, le round final en coûte 2, et celui qui garde le plus de PV gagne le match. Il n'y a jamais de match nul. Tant que la journée n'est pas finie, rien n'est joué : une séance en fin d'après-midi peut encore tout changer.\n\nAttax ne se gagne pas qu'avec les jambes. Chaque matin, 3 cartes sont tirées parmi 12, les mêmes pour les deux joueurs : Attaque, Défense, Sabotage ou Ruse. Tu en joues une, ton adversaire aussi, et son choix reste secret jusqu'au soir. Doubler la mise sur une journée où tu te sens fort, te protéger un jour de repos, piéger un adversaire trop sûr de lui : la bonne carte renverse un match serré.\n\nPuis vient 21h30, le soir de combat. Les deux boxeurs entrent, les rounds se rejouent un à un, les cartes se retournent, et le round final décide du vainqueur. C'est le rendez-vous de la journée, celui qu'on regarde seul dans son canapé ou à plusieurs, et qui donne envie de remettre ses baskets le lendemain.\n\nIl y a toujours une suite. Le champion de la ligue repart avec la couronne, puis une nouvelle ligue commence. Un rang te suit de Rookie à Legend. Une saison mondiale classe tous les joueurs sur leur effort. Dès ta deuxième ligue, un binôme t'est attribué pour tenir dans la durée. Et ton profil garde tout ce que tu gagnes : trophées, série de jours actifs, coups débloqués.\n\nAttax se joue aussi avec les tiens. Tu peux créer une ligue entre amis, ou une ligue personnalisée de 2 à 40 joueurs. Et avec les clubs, le jeu s'ouvre aux communautés : une salle de sport, un club, un coach, un créateur ou une entreprise crée le sien en une minute. Chaque jour, chaque membre y affronte un rival ; chaque mois, un champion reçoit une coupe au logo du club. Créer et gérer un club est gratuit.\n\nCourse, vélo, musculation, natation, sports collectifs, danse : tous les sports comptent. Chaque ligue se joue à son heure locale, l'app existe en 15 langues, et tes données de santé ne sont jamais vendues ni montrées aux autres joueurs. Attax est gratuit sur iPhone et Android, sans publicité." },
    ],
    copy_btn: "Copier",
    copied_btn: "Copié",
    how_label: "COMMENT ÇA MARCHE",
    how_title: "Attax en quatre points.",
    how: [
      { title: "Ton vrai effort", body: "Ta montre (via Apple Santé ou Health Connect) ou ton capteur cardio Bluetooth mesure ton effort. Tes séances et tes pas deviennent des points. Les saisies à la main ne comptent pas." },
      { title: "Un duel par jour", body: "Un nouvel adversaire de ta ligue chaque jour, un match en 7 rounds. Rounds passés joués de 10h à 19h, round final en direct dès 19h, soir de combat à 21h30." },
      { title: "Les cartes", body: "3 cartes tirées chaque matin, les mêmes pour les deux joueurs, une à jouer avant 13h : Quitte ou double, Garde, Freeze, Ghost… La bonne carte peut renverser un match serré." },
      { title: "Ligues et rangs", body: "Des ligues de 8 joueurs sur 7 jours, 1 champion couronné, puis on rejoue ou on change de ligue. Un rang de Rookie à Legend." },
    ],
    creators_label: "CRÉATEURS & INFLUENCEURS",
    creators_title: "Des idées de contenu qui marchent.",
    creators_sub: "Attax est fait pour raconter des histoires au quotidien. Quelques formats qui fonctionnent :",
    ideas: [
      { title: "Le soir de combat, 21h30", body: "Filme ta réaction en direct : entrée des boxeurs, cartes retournées, round final. Victoire ou défaite, c'est un moment." },
      { title: "La carte du jour", body: "Montre tes 3 cartes le matin et explique ton choix. Puis révèle au soir de combat si ça a payé." },
      { title: "Ton club", body: "Ouvre un club Attax pour ta communauté : un lien en bio, et tes abonnés se défient chaque jour, toi avec eux. Chaque mois, un champion et un podium à poster." },
      { title: "La ligue entre amis", body: "Crée une ligue avec ta bande, partage le code et raconte la semaine : chambrage, remontadas, couronne." },
      { title: "De Rookie à Legend", body: "Une série qui suit ta montée, ligue après ligue." },
      { title: "La séance de la remontada", body: "Mené avant le round final ? Montre la séance qui renverse le match avant 21h30." },
      { title: "Tous les sports comptent", body: "Course, vélo, musculation, danse : montre que quel que soit ton sport, si ta montre le mesure, il devient des points dans Attax." },
    ],
    tags_label: "Identifie-nous",
    tags: ["#playattax", "@playattax"],
    logos_label: "LOGOS",
    logos_title: "Logos.",
    logos_sub: "Utilise la version noire sur fond clair et la version blanche sur fond sombre. Ne modifie ni les proportions, ni les couleurs, ni l'orientation du logo.",
    logo_names: { logo: "Logo complet", icon: "Icône", wordmark: "Logotype" },
    on_dark: "Blanc, pour fonds sombres",
    on_light: "Noir, pour fonds clairs",
    colors_label: "Couleurs & typographies",
    colors: [
      { name: "Noir", hex: "#0D0D0D", usage: "Logo, fonds" },
      { name: "Blanc", hex: "#FFFFFF", usage: "Logo sur fond sombre, texte" },
      { name: "Bleu Attax", hex: "#0443FD", usage: "Toi, ton combattant" },
      { name: "Rouge Attax", hex: "#EC0420", usage: "Ton adversaire" },
    ],
    font_label: "Typographies",
    font_value: "Manrope (app) · Plus Jakarta Sans (site)",
    media_label: "CAPTURES & VIDÉO",
    media_title: "Dans l'app.",
    media_sub: "Libres d'utilisation dans un contexte éditorial ou de création de contenu, avec mention d'Attax.",
    video_title: "Soir de combat",
    video_caption: "La révélation de 21h30 · 23 s · MP4",
    screens: [
      { label: "Soir de combat", caption: "Le verdict, chaque soir à 21h30" },
      { label: "Cartes", caption: "Joue une carte, renverse le match" },
      { label: "Activités", caption: "Tes points du jour" },
      { label: "Ligue", caption: "8 joueurs, 7 jours, 1 champion" },
      { label: "Saison", caption: "Le classement mondial de l'effort" },
      { label: "Binôme", caption: "Un binôme t'est attribué pour te motiver" },
      { label: "Profil", caption: "Trophées, badges, série" },
    ],
    download: "Télécharger",
    rules_label: "BONNES PRATIQUES",
    rules_title: "Quelques règles simples.",
    rules_do_title: "À faire",
    rules_do: ["Écrire « Attax » avec un A majuscule uniquement.", "Utiliser les logos et captures tels que fournis.", "Mettre un lien vers attax.app et identifier @playattax.", "Présenter Attax comme un jeu de fitness gratuit sur iPhone et Android."],
    rules_dont_title: "À éviter",
    rules_dont: ["Déformer, recolorer ou recadrer le logo.", "Présenter Attax comme une app médicale ou de diagnostic santé.", "Promettre des résultats, des prix ou des récompenses que l'app ne propose pas.", "Retoucher les captures de façon à changer ce que montre l'app."],
    contact_label: "CONTACT PRESSE",
    contact_title: "Parlons-en.",
    contact_body: "Interviews, démos ou articles sur Attax : écris-nous.",
    contact_email: "media@attax.app",
    partners_label: "Partenariats ou collaborations créateurs :", partners_email: "partners@attax.app",
    contact_response: "Nous répondons au plus vite, dans ta langue.",
  },
};
