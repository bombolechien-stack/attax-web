// Contenu de la page de vente /clubs (FR = référence, EN). Uniquement ce qui existe dans l'app : pas de promesse au-delà
// (ni paiement, ni messagerie, ni badge), pas de date, pas de mécanique interne. Contact partenariats : partners@attax.app.
// Refonte du 26/11 (retours du propriétaire) :
//  · chaque profil a TROIS problèmes de son métier et, pour chacun, ce qu'Attax y change ;
//  · on parle la langue de chaque cible : adhérents (salle), licenciés (club), clients (coach), abonnés (créateur),
//    salariés (entreprise). Le mot « membre » n'apparaît plus dans un onglet ;
//  · TOUTE la page suit l'onglet choisi : les étapes, « À savoir » et les questions sont écrits avec {m} (singulier) et
//    {ms} (pluriel), remplacés par le mot du profil (fonction fill) ;
//  · l'écran télé n'est montré que dans l'onglet des salles.

export type Words = { m: string; ms: string };
export type ClubsProfile = {
  id: string;
  tab: string;
  w: Words;
  title: [string, string];
  lead: string;
  /** Trois problèmes du métier, et ce qu'Attax y change. */
  cases: { problem: string; title: string; body: string }[];
  toolsLabel: string;
  tools: string[];
  useLabel: string;
  use: string;
  /** « Ils viennent pour… » : ce que CE profil utilise aujourd'hui (old : la comparaison), puis ce que le club est pour lui
   *  (1re ligne du titre, texte, colonne du milieu, conclusion). */
  world: { old: { k: string; items: string[] }; title: string; lead: string; k: string; items: string[]; foot: string };
  /** Étape 2 de « Comment ça marche » : comment CE profil invite. */
  invite: string;
  /** L'aperçu de l'écran télé (salles de sport seulement). */
  tv?: { label: string; note: string; cta: string; frameTitle: string };
};
export type ClubsContent = {
  /** Le mot par défaut (données structurées, avant tout choix d'onglet). */
  w: Words;
  hero: { kick: string; title: [string, string]; lead: string; ios: string; android: string; stats: { title: string; sub: string }[] };
  profiles: { kick: string; title: [string, string]; lead: string; tablist: string; problemLabel: string; fixLabel: string; items: ClubsProfile[] };
  /** L'univers de jeu au-delà du club : ce qui fait rester (ligue, Soir de combat, cartes, rangs, binôme, saison). */
  world: { kick: string; title2: string; leagues: { k: string; items: string[] }; shotsLabel: string; shots: { title: string; body: string }[]; items: { title: string; body: string }[]; cta: string };
  steps: { kick: string; title: [string, string]; lead: string; items: { title: string; body: string }[] };
  trust: { kick: string; title: [string, string]; items: { title: string; body: string }[] };
  faq: { kick: string; title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string; mailLabel: string; ios: string; android: string };
};

export const PARTNERS_EMAIL = "partners@attax.app";

/** Remplace {m} / {ms} par le mot du profil ({invite} : la façon d'inviter du profil). */
export const fill = (t: string, w: Words, invite = "") => t.replace(/\{ms\}/g, w.ms).replace(/\{m\}/g, w.m).replace(/\{invite\}/g, invite);

export const CLUBS_CONTENT: Record<"en" | "fr", ClubsContent> = {
  fr: {
    w: { m: "membre", ms: "membres" },
    hero: {
      kick: "Attax Clubs",
      title: ["Faites bouger votre communauté.", "Tous les jours."],
      lead: "Chaque jour, chacun affronte un rival de votre club. Chaque mois, un champion et une coupe à votre logo.",
      ios: "Créer mon club sur iPhone",
      android: "Créer mon club sur Android",
      stats: [
        { title: "Gratuit", sub: "À créer comme à gérer" },
        { title: "1 minute", sub: "Un nom, un logo, c'est parti" },
        { title: "Sans limite", sub: "Dix personnes ou dix mille" },
      ],
    },
    profiles: {
      kick: "Pour qui",
      title: ["Vous êtes…", "voici ce que ça change."],
      lead: "Choisissez votre profil : toute la page s'adapte.",
      tablist: "Votre profil",
      problemLabel: "Aujourd'hui",
      fixLabel: "Avec Attax",
      items: [
        {
          id: "gyms",
          tab: "Salles de sport",
          w: { m: "adhérent", ms: "adhérents" },
          title: ["Un adhérent qui a un rival", "revient."],
          lead: "On ne reste pas dans une salle pour ses machines. On reste pour les gens qu'on y retrouve.",
          cases: [
            { problem: "Le nouvel adhérent ne connaît personne. Au bout d'un mois, il ne vient plus.", title: "Un rival dès le premier jour", body: "Dès qu'il rejoint le club de la salle, il affronte un autre adhérent et entre au classement. Il a une raison de revenir avant d'avoir parlé à quelqu'un." },
            { problem: "Vos adhérents s'entraînent côte à côte, écouteurs sur les oreilles, sans jamais se parler.", title: "Une salle où l'on se cherche", body: "Le rival du jour est peut-être sur le tapis d'à côté. Le classement tourne sur l'écran de la salle, les piques partent, les adhérents se reconnaissent." },
            { problem: "Vos affiches, personne ne les lit. Vos publications, peu d'adhérents les voient.", title: "Un message sur leur téléphone", body: "Nouveau cours, changement d'horaires, soirée : un message épinglé dans le club et une notification à vos adhérents, jusqu'à deux fois par semaine." },
          ],
          toolsLabel: "Vos outils",
          tools: ["L'affiche avec QR code, à poser à l'accueil", "L'écran télé du classement", "Le nombre d'adhérents actifs, jour par jour", "Le champion du mois, à fêter dans la salle"],
          useLabel: "Concrètement, dans votre salle",
          use: "Vous posez l'affiche à l'accueil. Les adhérents scannent le QR code entre deux séries. Le classement tourne sur l'écran. À la fin du mois, vous affichez le champion.",
          world: { old: {"k":"Aujourd'hui : l'app de défis de la salle","items":["Un classement de calories ou de passages","Toujours les mêmes en tête","Passé la première semaine, plus rien de neuf","Au bout d'un mois, plus personne ne l'ouvre"]}, title: "Ils viennent pour votre salle.", lead: "Une app faite pour le seul défi de la salle, vos adhérents l'ouvrent deux semaines. Dans Attax, le duel de la salle n'est qu'une partie du jeu : à côté, chacun peut jouer en ligue, un jeu à part, bien plus complet.", k: "Dans le club de votre salle", items: ["Un duel par jour contre un autre adhérent","Celui qui bouge le plus gagne, tout simplement","Le classement de la salle, un champion chaque mois","Rien à apprendre : on scanne, on joue"], foot: "Résultat : vos adhérents viennent pour le duel de la salle, et restent pour leur ligue." },
          invite: "Posez l'affiche avec QR code à l'accueil et au vestiaire.",
          tv: {
            label: "L'écran de la salle",
            note: "Exemple avec un club fictif. L'adresse : attax.app/club-screen?code= suivi du code de votre club.",
            cta: "Voir l'exemple en plein écran",
            frameTitle: "Exemple d'écran télé avec un club fictif",
          },
        },
        {
          id: "sports",
          tab: "Clubs & associations",
          w: { m: "licencié", ms: "licenciés" },
          title: ["Le club continue", "entre deux entraînements."],
          lead: "Un club, ce n'est pas deux créneaux par semaine. C'est un groupe qui tient toute l'année.",
          cases: [
            { problem: "Entre deux entraînements, vos licenciés ne font rien. Pendant la trêve, c'est pire.", title: "Le club joue tous les jours", body: "Les duels continuent le dimanche, pendant les vacances et hors saison. À la reprise, personne ne repart de zéro." },
            { problem: "Les seniors ne connaissent pas les jeunes. Le créneau du mardi ne croise jamais celui du jeudi.", title: "Les créneaux se rencontrent", body: "Le rival du jour peut être un vétéran, un jeune ou quelqu'un d'une autre équipe. Ils se cherchent au prochain entraînement." },
            { problem: "Ce sont toujours les mêmes qu'on félicite : les meilleurs.", title: "Chacun fait avancer le club", body: "Chaque licencié affronte un rival de son niveau. Et l'objectif du mois additionne les efforts de tous, du premier au dernier." },
          ],
          toolsLabel: "Vos outils",
          tools: ["Le lien d'invitation, à coller dans le groupe du club", "L'objectif collectif du mois", "La coupe du mois, gravée au logo du club", "Le palmarès des mois passés"],
          useLabel: "Concrètement, dans votre club",
          use: "Vous collez le lien dans le groupe du club. Vous fixez l'objectif du mois. Au pot de fin de mois, vous remettez la coupe au champion devant tout le monde.",
          world: { old: {"k":"Aujourd'hui : une app de compétition basique","items":["Un classement de kilomètres, et c'est tout","Les meilleurs loin devant, les autres décrochent","Aucun face-à-face entre licenciés","Oubliée dès la fin du défi"]}, title: "Ils viennent pour le club.", lead: "Un défi entre licenciés s'essouffle en deux semaines. Dans Attax, le duel du club n'est qu'une partie du jeu : à côté, chacun peut jouer en ligue, un jeu à part, bien plus complet.", k: "Dans votre club", items: ["Un duel par jour contre un autre licencié","Celui qui bouge le plus gagne, tout simplement","Le classement du club, un champion chaque mois","Rien à apprendre : on rejoint, on joue"], foot: "Résultat : vos licenciés viennent pour le duel du club, et restent pour leur ligue." },
          invite: "Collez le lien d'invitation dans le groupe du club.",
        },
        {
          id: "coaches",
          tab: "Coachs",
          w: { m: "élève", ms: "élèves" },
          title: ["Vos élèves bougent", "même sans vous."],
          lead: "Vous les voyez une heure par semaine. Leurs résultats se jouent les six autres jours.",
          cases: [
            { problem: "Entre deux séances, vous ne savez pas ce que font vos élèves.", title: "Vous voyez qui décroche", body: "La liste de vos élèves indique qui est actif et qui ne l'est plus depuis plusieurs jours. Vous savez qui appeler, sans voir aucune donnée de santé." },
            { problem: "La motivation retombe dès que vous n'êtes plus là. Vous passez vos soirées à relancer par message.", title: "Le jeu relance à votre place", body: "Chaque jour, chaque élève affronte un autre élève. Chaque soir, le verdict. Ils ont une raison de bouger sans que vous écriviez un mot." },
            { problem: "Trouver de nouveaux élèves vous coûte du temps et de l'argent.", title: "Vos élèves amènent leurs amis", body: "Un duel est plus drôle contre un proche. Vos élèves transfèrent le lien, leurs amis découvrent votre groupe de l'intérieur." },
          ],
          toolsLabel: "Vos outils",
          tools: ["La liste de vos élèves, avec leur dernier jour actif", "« Séance demain » : des phrases prêtes à épingler, avec notification", "Le code du club, à donner en fin de séance"],
          useLabel: "Concrètement, avec vos élèves",
          use: "Vous donnez le code du club à la fin d'une séance. Le dimanche, vous épinglez « Séance demain ». Le mercredi, un coup d'œil à la liste vous dit qui appeler.",
          world: { old: {"k":"Aujourd'hui : un groupe de messagerie","items":["Vous relancez tout le monde à la main","Chacun envoie sa séance quand il y pense","Aucun jeu entre vos élèves","Le groupe s'éteint dès que vous arrêtez d'écrire"]}, title: "Ils viennent pour votre groupe.", lead: "Un défi lancé entre deux séances s'essouffle en deux semaines. Dans Attax, le duel entre vos élèves n'est qu'une partie du jeu : à côté, chacun peut jouer en ligue, un jeu à part, bien plus complet.", k: "Dans votre groupe", items: ["Un duel par jour entre deux de vos élèves","Celui qui bouge le plus gagne, tout simplement","Le classement du groupe, un champion chaque mois","Rien à apprendre : vous donnez le code, ils jouent"], foot: "Résultat : vos élèves viennent pour votre groupe, et restent pour leur ligue." },
          invite: "Donnez le code du club à la fin d'une séance.",
        },
        {
          id: "creators",
          tab: "Créateurs & communautés",
          w: { m: "abonné", ms: "abonnés" },
          title: ["Vos abonnés", "passent à l'action."],
          lead: "Une vidéo motive dix minutes. Un duel contre un autre abonné fait sortir courir.",
          cases: [
            { problem: "Vos abonnés regardent vos vidéos, likent, et restent sur leur canapé.", title: "Ils bougent, tous les jours", body: "Chaque jour, chaque abonné affronte un autre abonné. Celui qui bouge le plus gagne. Votre contenu devient quelque chose qu'ils font." },
            { problem: "L'algorithme décide de qui voit vos publications. Une partie de vos abonnés ne vous voit plus.", title: "Un canal qui vous appartient", body: "Votre message est épinglé en haut du club et la notification part à vos abonnés. Personne ne décide à votre place de qui la voit." },
            { problem: "Vos abonnés ne se connaissent pas entre eux, et vous ne savez pas qui sont les plus fidèles.", title: "Une communauté qui se voit", body: "Un classement, un champion chaque mois, et vous dedans. Vous passer devant devient leur objectif. Le podium sort en une image, prête à poster." },
          ],
          toolsLabel: "Vos outils",
          tools: ["Le lien pour votre bio, le QR code pour vos stories", "L'image du podium, prête à poster", "Aucune limite : chaque abonné affronte un rival de son niveau"],
          useLabel: "Concrètement, avec vos abonnés",
          use: "Vous ouvrez un club Attax à votre nom, mettez le lien en bio et l'annoncez en story. Vos abonnés rejoignent en un geste. Chaque mois, vous postez le podium et félicitez le champion.",
          world: { old: {"k":"Aujourd'hui : un défi en story","items":["Il dure une semaine, puis disparaît","Impossible de savoir qui a vraiment bougé","Aucun lien entre vos abonnés","À relancer de zéro à chaque fois"]}, title: "Ils viennent pour vous.", lead: "Un défi lancé en story s'essouffle en deux semaines. Dans Attax, le duel entre vos abonnés n'est qu'une partie du jeu : à côté, chacun peut jouer en ligue, un jeu à part, bien plus complet.", k: "Dans votre communauté", items: ["Un duel par jour entre deux de vos abonnés","Celui qui bouge le plus gagne, tout simplement","Le classement de votre communauté, avec vous dedans","Rien à apprendre : un lien en bio, ils jouent"], foot: "Résultat : vos abonnés viennent pour vous, et restent pour leur ligue." },
          invite: "Mettez le lien en bio et le QR code en story.",
        },
        {
          id: "teams",
          tab: "Entreprises",
          w: { m: "salarié", ms: "salariés" },
          title: ["Un défi d'équipe", "où personne n'est mal à l'aise."],
          lead: "Un défi sportif entre collègues doit embarquer tout le monde, pas seulement les sportifs.",
          cases: [
            { problem: "Vos défis sportifs attirent toujours les dix mêmes. Les autres n'osent pas s'inscrire.", title: "Le débutant a ses chances", body: "Chaque salarié affronte un collègue proche de lui au classement. Le marathonien du service ne joue pas contre celui qui marche le midi." },
            { problem: "Personne ne veut montrer son poids ou son cardio à ses collègues. Encore moins à son employeur.", title: "Des pseudos et des points, rien d'autre", body: "Aucune mesure n'est visible, pour personne. Pas même pour vous, qui créez le club. Chaque salarié choisit son pseudo." },
            { problem: "Les services ne se parlent pas. Avec le télétravail, certains collègues ne se croisent plus.", title: "Les équipes se mélangent", body: "Le rival du jour est peut-être à un autre étage ou sur un autre site. Le duel du matin devient le sujet de la pause café." },
          ],
          toolsLabel: "Vos outils",
          tools: ["Le lien d'invitation, pour la messagerie interne", "Un pseudo libre pour chaque salarié", "L'objectif collectif du mois", "Un classement remis à zéro chaque mois"],
          useLabel: "Concrètement, dans votre entreprise",
          use: "Vous partagez le lien dans la messagerie interne. Chacun choisit son pseudo. Vous fixez un objectif commun, et vous fêtez le champion du mois à la machine à café.",
          world: { old: {"k":"Aujourd'hui : un challenge de pas","items":["Un classement de pas, quelques semaines par an","Toujours les mêmes sportifs devant","Les chiffres de chacun affichés à tous","Oublié dès qu'il s'arrête"]}, title: "Ils viennent pour le défi d'équipe.", lead: "Un défi sportif d'entreprise s'essouffle en deux semaines. Dans Attax, le duel entre collègues n'est qu'une partie du jeu : à côté, chacun peut jouer en ligue, un jeu à part, bien plus complet.", k: "Dans votre entreprise", items: ["Un duel par jour entre deux collègues","Celui qui bouge le plus gagne, tout simplement","Le classement de l'entreprise, un champion chaque mois","Rien à apprendre : un lien, un pseudo, on joue"], foot: "Résultat : vos salariés viennent pour le défi d'équipe, et restent pour leur ligue." },
          invite: "Partagez le lien d'invitation dans la messagerie interne.",
        },
      ],
    },
    world: {
      kick: "En plus du club",
      title2: "Ils restent pour les ligues.",
      leagues: { k: "En plus : les ligues", items: ["Une ligue de 8 joueurs chaque semaine, hors du club", "Des matchs en 7 rounds, révélés chaque soir à 21h30", "Des cartes tactiques à jouer, des rangs à gravir", "Un binôme, une saison, un classement mondial"] },
      shotsLabel: "Ce que vos {ms} trouvent en ligue",
      shots: [
        { title: "Le match de ligue", body: "Un adversaire par jour, et un match en 7 rounds qui se révèle chaque soir, en direct." },
        { title: "La saison", body: "Chaque ligue jouée compte pour la saison : une place dans le classement mondial." },
        { title: "Le binôme", body: "Un partenaire de ligue pour rester motivé. Chaque jour où les deux tiennent, chacun gagne un point." },
      ],
      items: [
        { title: "Une ligue chaque semaine", body: "Huit joueurs de même niveau, venus de partout. Un adversaire par jour, un classement à remonter, et tout recommence le lundi." },
        { title: "Le Soir de combat", body: "En ligue, le match du jour se révèle chaque soir à 21h30, round par round. Un rendez-vous qu'on ne rate pas." },
        { title: "12 cartes tactiques", body: "En ligue, on joue une carte par match. Bien choisie, elle peut renverser le résultat." },
        { title: "Des rangs à gravir", body: "Les ligues gagnées font monter de rang. Le rang se voit sur le profil." },
        { title: "Un binôme", body: "Un partenaire pour tenir dans la durée. Chaque jour où les deux atteignent leur objectif, chacun gagne un point de ligue." },
        { title: "Le classement mondial", body: "Toute la saison, chacun défend sa place face aux joueurs du monde entier, avec un trophée au bout." },
      ],
      cta: "Découvrir les ligues",
    },
    steps: {
      kick: "Comment ça marche",
      title: ["Trois étapes.", "Puis le club joue tout seul."],
      lead: "Rien à installer chez vous, rien à animer chaque jour.",
      items: [
        { title: "Créez votre club", body: "Dans l'app Attax : un nom, un logo. Une minute." },
        { title: "Invitez vos {ms}", body: "{invite}" },
        { title: "Le jeu tourne", body: "Chaque jour, chaque {m} affronte un rival du club. Verdict à 21h30. Chaque mois, un champion." },
      ],
    },
    trust: {
      kick: "À savoir",
      title: ["Simple pour vous.", "Sûr pour vos {ms}."],
      items: [
        { title: "Gratuit, à créer comme à gérer", body: "Aucun abonnement, aucun plafond. Tous les outils du responsable sont compris." },
        { title: "Aucune donnée de santé partagée", body: "De vos {ms}, vous ne voyez que des pseudos, des places et des points. Eux non plus ne voient rien d'autre." },
        { title: "Une montre connectée ou un brassard cardio", body: "Chaque {m} joue avec sa montre (Apple Watch, Garmin, etc.) ou avec un simple capteur cardio Bluetooth, moins cher." },
        { title: "Vous gardez la main", body: "Vous pouvez retirer un {m} du club. Chaque {m} peut couper les notifications du club." },
      ],
    },
    faq: {
      kick: "Questions fréquentes",
      title: "Avant de créer votre club.",
      items: [
        { q: "Combien ça coûte ?", a: "Rien. Créer un club, le gérer, inviter vos {ms} et jouer est gratuit." },
        { q: "Combien de {ms} un club peut-il accueillir ?", a: "Il n'y a pas de limite. Chaque {m} affronte un rival proche de lui au classement, que le club compte dix personnes ou plusieurs milliers." },
        { q: "De quoi mes {ms} ont-ils besoin ?", a: "De l'app Attax (iPhone ou Android), et d'une montre connectée (Apple Watch, Garmin, etc.) ou d'un brassard cardio Bluetooth. Leurs séances comptent toutes seules." },
        { q: "Qu'est-ce que je vois de mes {ms} ?", a: "Leur nombre, les nouveaux, les actifs jour par jour, les duels joués et le classement. Jamais de données de santé." },
        { q: "Puis-je écrire mes propres messages ?", a: "Tous les clubs ont 20 phrases toutes prêtes. Les messages libres sont réservés aux clubs vérifiés par l'équipe Attax : la demande se fait d'un bouton dans l'app, sur l'écran « Gérer le club »." },
        { q: "Un {m} peut-il être dans plusieurs clubs ?", a: "Oui, jusqu'à 3 en même temps : sa salle, son équipe et son entreprise, par exemple." },
      ],
    },
    final: {
      title: "Un partenariat, une question, un grand club à lancer ?",
      body: "Écrivez-nous, on vous répond.",
      mailLabel: "Écrire à partners@attax.app",
      ios: "App Store",
      android: "Google Play",
    },
  },
  en: {
    w: { m: "member", ms: "members" },
    hero: {
      kick: "Attax Clubs",
      title: ["Get your community moving.", "Every single day."],
      lead: "Every day, everyone takes on a rival from your club. Every month, a champion and a cup with your logo.",
      ios: "Create my club on iPhone",
      android: "Create my club on Android",
      stats: [
        { title: "Free", sub: "To create and to run" },
        { title: "1 minute", sub: "A name, a logo, go" },
        { title: "No limit", sub: "Ten people or ten thousand" },
      ],
    },
    profiles: {
      kick: "Who it's for",
      title: ["Tell us who you are.", "We'll tell you what changes."],
      lead: "Pick your profile: the whole page follows.",
      tablist: "Your profile",
      problemLabel: "Today",
      fixLabel: "With Attax",
      items: [
        {
          id: "gyms",
          tab: "Gyms",
          w: { m: "member", ms: "members" },
          title: ["A member with a rival", "comes back."],
          lead: "Nobody stays at a gym for the machines. They stay for the people they find there.",
          cases: [
            { problem: "The new member knows no one. A month later, they've stopped coming.", title: "A rival from day one", body: "As soon as they join the gym's club, they take on another member and enter the ranking. A reason to come back before they've spoken to anyone." },
            { problem: "Your members train side by side, headphones on, and never talk to each other.", title: "A gym where people look for each other", body: "Today's rival might be on the next treadmill. The ranking runs on the gym screen, the taunts fly, members recognise each other." },
            { problem: "Nobody reads your posters. Few members see your posts.", title: "A message on their phone", body: "New class, new opening hours, an event: a message pinned in the club and a notification to your members, up to twice a week." },
          ],
          toolsLabel: "Your tools",
          tools: ["The QR code poster, for the front desk", "The ranking TV screen", "Active members, day by day", "The champion of the month, to celebrate in the gym"],
          useLabel: "In practice, at your gym",
          use: "You put the poster at the front desk. Members scan the QR code between sets. The ranking runs on the screen. At the end of the month, you put the champion on display.",
          world: { old: {"k":"Today: the gym's challenge app","items":["A ranking of calories or check-ins","Always the same people on top","After the first week, nothing new","A month later, nobody opens it"]}, title: "They come for your gym.", lead: "An app built only for the gym's challenge gets opened for two weeks. In Attax, the gym duel is only one part of the game: alongside it, everyone can play in a league, a separate and far more complete game.", k: "In your gym's club", items: ["One duel a day against another member","Whoever moves the most wins, simple as that","The gym's ranking, a champion every month","Nothing to learn: scan and play"], foot: "The result: your members come for the gym duel, and stay for their league." },
          invite: "Put the QR code poster at the front desk and in the locker room.",
          tv: {
            label: "The gym screen",
            note: "Example with a fictional club. The address: attax.app/club-screen?code= followed by your club's code.",
            cta: "See the example full screen",
            frameTitle: "Example TV screen with a fictional club",
          },
        },
        {
          id: "sports",
          tab: "Sports clubs",
          w: { m: "player", ms: "players" },
          title: ["The club keeps going", "between practices."],
          lead: "A club isn't two time slots a week. It's a group that holds together all year.",
          cases: [
            { problem: "Between practices, your players do nothing. In the off-season, it's worse.", title: "The club plays every day", body: "The duels go on at weekends, over the holidays and in the off-season. When practice resumes, nobody starts from scratch." },
            { problem: "The seniors don't know the juniors. The Tuesday session never meets the Thursday one.", title: "Time slots finally meet", body: "Today's rival might be a veteran, a junior or someone from another team. They look for each other at the next practice." },
            { problem: "It's always the same ones who get the praise: the best.", title: "Everyone moves the club forward", body: "Each player faces a rival of their level. And the monthly goal adds up everyone's effort, from first to last." },
          ],
          toolsLabel: "Your tools",
          tools: ["The invite link, for the club's group chat", "The monthly collective goal", "The monthly cup, engraved with the club's logo", "The hall of fame of past months"],
          useLabel: "In practice, at your club",
          use: "You paste the link in the club's group chat. You set the goal for the month. At the end-of-month get-together, you hand the cup to the champion in front of everyone.",
          world: { old: {"k":"Today: a basic competition app","items":["A ranking of kilometres, and that's it","The best far ahead, the others drop off","No head-to-head between players","Forgotten as soon as the challenge ends"]}, title: "They come for the club.", lead: "A challenge between players runs out of steam in two weeks. In Attax, the club duel is only one part of the game: alongside it, everyone can play in a league, a separate and far more complete game.", k: "In your club", items: ["One duel a day against another player","Whoever moves the most wins, simple as that","The club's ranking, a champion every month","Nothing to learn: join and play"], foot: "The result: your players come for the club duel, and stay for their league." },
          invite: "Paste the invite link in the club's group chat.",
        },
        {
          id: "coaches",
          tab: "Coaches",
          w: { m: "client", ms: "clients" },
          title: ["Your clients keep moving", "when you're not there."],
          lead: "You see them one hour a week. Their results are decided on the other six days.",
          cases: [
            { problem: "Between sessions, you don't know what your clients are doing.", title: "You see who is dropping off", body: "Your client list shows who is active and who hasn't been for several days. You know who to call, without seeing any health data." },
            { problem: "Motivation drops the moment you're gone. You spend your evenings sending reminders.", title: "The game nudges for you", body: "Every day, each client takes on another client. Every night, the verdict. They have a reason to move without you writing a word." },
            { problem: "Finding new clients costs you time and money.", title: "Your clients bring their friends", body: "A duel is more fun against someone you know. Your clients forward the link, and their friends discover your group from the inside." },
          ],
          toolsLabel: "Your tools",
          tools: ["Your client list, with each one's last active day", "\"Session tomorrow\": ready-made sentences to pin, with a notification", "The club code, to hand out at the end of a session"],
          useLabel: "In practice, with your clients",
          use: "You give the club code at the end of a session. On Sunday, you pin \"Session tomorrow\". On Wednesday, one look at the list tells you who to call.",
          world: { old: {"k":"Today: a group chat","items":["You chase everyone by hand","People send their session when they remember","No game between your clients","The group dies when you stop writing"]}, title: "They come for your group.", lead: "A challenge launched between two sessions runs out of steam in two weeks. In Attax, the duel between your clients is only one part of the game: alongside it, everyone can play in a league, a separate and far more complete game.", k: "In your group", items: ["One duel a day between two of your clients","Whoever moves the most wins, simple as that","The group's ranking, a champion every month","Nothing to learn: you give the code, they play"], foot: "The result: your clients come for your group, and stay for their league." },
          invite: "Give the club code at the end of a session.",
        },
        {
          id: "creators",
          tab: "Creators & communities",
          w: { m: "follower", ms: "followers" },
          title: ["Your followers", "start moving."],
          lead: "A video motivates for ten minutes. A duel against another follower gets people out for a run.",
          cases: [
            { problem: "Your followers watch your videos, like them, and stay on the sofa.", title: "They move, every day", body: "Every day, each follower takes on another follower. Whoever moves the most wins. Your content becomes something they do." },
            { problem: "The algorithm decides who sees your posts. Part of your audience no longer sees you.", title: "A channel you own", body: "Your message is pinned at the top of the club and the notification goes to your followers. Nobody decides for you who sees it." },
            { problem: "Your followers don't know each other, and you don't know who the most loyal ones are.", title: "A community you can see", body: "A ranking, a champion every month, and you in it. Getting ahead of you becomes their goal. The podium comes out as one image, ready to post." },
          ],
          toolsLabel: "Your tools",
          tools: ["The link for your bio, the QR code for your stories", "The podium image, ready to post", "No limit: each follower faces a rival of their level"],
          useLabel: "In practice, with your followers",
          use: "You put the link in your bio and announce the club in a story. Your followers join in one tap. Every month, you post the podium and congratulate the champion.",
          world: { old: {"k":"Today: a challenge in a story","items":["It lasts a week, then disappears","No way to know who really moved","No link between your followers","To relaunch from scratch every time"]}, title: "They come for you.", lead: "A challenge launched in a story runs out of steam in two weeks. In Attax, the duel between your followers is only one part of the game: alongside it, everyone can play in a league, a separate and far more complete game.", k: "In your community", items: ["One duel a day between two of your followers","Whoever moves the most wins, simple as that","Your community's ranking, with you in it","Nothing to learn: a link in your bio, they play"], foot: "The result: your followers come for you, and stay for their league." },
          invite: "Put the link in your bio and the QR code in a story.",
        },
        {
          id: "teams",
          tab: "Companies",
          w: { m: "employee", ms: "employees" },
          title: ["A team challenge", "where no one feels uncomfortable."],
          lead: "A fitness challenge between colleagues has to bring everyone along, not just the athletes.",
          cases: [
            { problem: "Your fitness challenges always attract the same ten people. The others don't dare sign up.", title: "The beginner has a chance", body: "Each employee faces a colleague close to them in the ranking. The office marathon runner doesn't play against the lunchtime walker." },
            { problem: "Nobody wants to show their weight or heart rate to colleagues. Even less to their employer.", title: "Usernames and points, nothing else", body: "No measurement is visible, to anyone. Not even to you, who created the club. Each employee picks their own username." },
            { problem: "Departments don't talk to each other. With remote work, some colleagues never cross paths.", title: "Teams mix", body: "Today's rival might be on another floor or at another site. The morning duel becomes the coffee-break topic." },
          ],
          toolsLabel: "Your tools",
          tools: ["The invite link, for the internal chat", "A username of their choice for each employee", "The monthly collective goal", "A ranking that resets every month"],
          useLabel: "In practice, at your company",
          use: "You share the link in the internal chat. Everyone picks a username. You set a shared goal, and you celebrate the champion of the month at the coffee machine.",
          world: { old: {"k":"Today: a step challenge","items":["A step ranking, a few weeks a year","Always the same athletes on top","Everyone's numbers shown to all","Forgotten as soon as it stops"]}, title: "They come for the team challenge.", lead: "A company fitness challenge runs out of steam in two weeks. In Attax, the duel between colleagues is only one part of the game: alongside it, everyone can play in a league, a separate and far more complete game.", k: "At your company", items: ["One duel a day between two colleagues","Whoever moves the most wins, simple as that","The company ranking, a champion every month","Nothing to learn: a link, a username, play"], foot: "The result: your employees come for the team challenge, and stay for their league." },
          invite: "Share the invite link in the internal chat.",
        },
      ],
    },
    world: {
      kick: "On top of the club",
      title2: "They stay for the leagues.",
      leagues: { k: "On top: the leagues", items: ["A league of 8 players every week, outside the club", "Matches in 7 rounds, revealed every night at 9:30 PM", "Tactical cards to play, ranks to climb", "A duo partner, a season, a world ranking"] },
      shotsLabel: "What your {ms} find in a league",
      shots: [
        { title: "The league match", body: "An opponent every day, and a 7-round match revealed live every night." },
        { title: "The season", body: "Every league played counts for the season: a place in the world ranking." },
        { title: "The duo", body: "A league partner to stay motivated. Every day both keep it up, each wins a point." },
      ],
      items: [
        { title: "A league every week", body: "Eight players of the same level, from everywhere. An opponent every day, a table to climb, and it all starts again on Monday." },
        { title: "Fight Night", body: "In a league, the match of the day is revealed every evening at 9:30 PM, round by round. An appointment nobody misses." },
        { title: "12 tactical cards", body: "In a league, you play one card per match. Well chosen, it can turn the result around." },
        { title: "Ranks to climb", body: "Winning leagues moves you up the ranks. Your rank shows on your profile." },
        { title: "A duo partner", body: "A partner to keep going over time. Every day both hit their goal, each wins a league point." },
        { title: "The world ranking", body: "All season long, everyone defends their place against players from all over the world, with a trophy at the end." },
      ],
      cta: "Discover the leagues",
    },
    steps: {
      kick: "How it works",
      title: ["Three steps.", "Then the club plays itself."],
      lead: "Nothing to install on your side, nothing to run every day.",
      items: [
        { title: "Create your club", body: "In the Attax app: a name, a logo. One minute." },
        { title: "Invite your {ms}", body: "{invite}" },
        { title: "The game runs", body: "Every day, each {m} takes on a rival from the club. Verdict at 9:30 PM. Every month, a champion." },
      ],
    },
    trust: {
      kick: "Good to know",
      title: ["Simple for you.", "Safe for your {ms}."],
      items: [
        { title: "Free to create, free to run", body: "No subscription, no cap. All the manager's tools are included." },
        { title: "No health data shared", body: "All you see of your {ms} is usernames, places and points. They see nothing more either." },
        { title: "A smartwatch or a heart-rate armband", body: "Each {m} plays with their watch (Apple Watch, Garmin, etc.) or with a simple Bluetooth heart-rate sensor, which costs less." },
        { title: "You stay in charge", body: "You can remove a {m} from the club. Each {m} can mute the club's notifications." },
      ],
    },
    faq: {
      kick: "Frequently asked",
      title: "Before you create your club.",
      items: [
        { q: "How much does it cost?", a: "Nothing. Creating a club, running it, inviting your {ms} and playing is free." },
        { q: "How many {ms} can a club have?", a: "There is no limit. Each {m} faces a rival close to them in the ranking, whether the club has ten people or several thousand." },
        { q: "What do my {ms} need?", a: "The Attax app (iPhone or Android), and a smartwatch (Apple Watch, Garmin, etc.) or a Bluetooth heart-rate armband. Their workouts count by themselves." },
        { q: "What do I see of my {ms}?", a: "How many they are, the new ones, who is active day by day, duels played and the ranking. Never any health data." },
        { q: "Can I write my own messages?", a: "Every club gets 20 ready-made sentences. Free-text messages are reserved for clubs verified by the Attax team: you ask with one button in the app, on the \"Manage the club\" screen." },
        { q: "Can one {m} be in several clubs?", a: "Yes, up to 3 at once: their gym, their team and their company, for example." },
      ],
    },
    final: {
      title: "A partnership, a question, a big club to launch?",
      body: "Write to us, we'll get back to you.",
      mailLabel: "Write to partners@attax.app",
      ios: "App Store",
      android: "Google Play",
    },
  },
};
