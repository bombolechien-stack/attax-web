// RÉFÉRENCEMENT PAR LANGUE (28/11/2026). Chaque page garde ses titres anglais dans son layout ; ce fichier ajoute :
//  · le titre et la description en FRANÇAIS pour l'adresse /fr/… (table FR ci-dessous) ;
//  · l'adresse de référence de la langue servie, et les liens entre langues (hreflang : en, fr, x-default) ;
//  · l'image de partage par défaut (elle manquait sur la plupart des pages) et la carte X / Twitter.
// Usage dans un layout :  export const generateMetadata = () => localMeta("/clubs", EN_META);
import type { Metadata } from "next";
import { headers } from "next/headers";
import { BASE_URL, LANG_HEADER, type Lang } from "./locale";

const OG_IMAGE = { url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Attax" };

/** La langue de la requête (posée par src/middleware.ts). */
export async function reqLang(): Promise<Lang> {
  return (await headers()).get(LANG_HEADER) === "fr" ? "fr" : "en";
}

/** Titres (≤ 60 caractères) et descriptions (≤ 160) en français, par adresse. */
const FR: Record<string, { title: string; description: string }> = {
  "/": { title: "Attax : le sport devient un jeu.", description: "Attax transforme tes vraies séances en duels quotidiens : ligues de 8, matchs en 7 rounds, 12 cartes et le Soir de combat à 21h30. Gratuit sur iPhone et Android." },
  "/clubs": { title: "Attax Clubs : faites bouger votre communauté", description: "Créez gratuitement le club Attax de votre salle, club de sport, groupe, communauté ou entreprise. Un rival par jour, un champion par mois." },
  "/discover": { title: "Découvrir Attax : le jeu de fitness compétitif", description: "Un duel chaque jour contre un joueur de ta ligue, des cartes à jouer et un verdict à 21h30. Attax donne un enjeu à chacune de tes séances." },
  "/adventure": { title: "L'Aventure : l'histoire d'Attax", description: "Pourquoi nous avons créé Attax : un jeu de fitness bâti sur l'effort réel et la compétition, pour que le sport soit plus qu'un suivi de chiffres." },
  "/contact": { title: "Contacter Attax", description: "Écris à l'équipe Attax : aide, partenariats ou demandes presse." },
  "/download": { title: "Télécharger Attax : App Store et Google Play", description: "Télécharge Attax gratuitement sur iPhone et Android. Tes vraies séances deviennent un duel chaque jour, avec le Soir de combat à 21h30." },
  "/download/ios": { title: "Télécharger Attax sur iPhone : gratuit", description: "Attax est gratuit sur l'App Store : tes séances deviennent un duel chaque jour contre un joueur de ta ligue, avec le Soir de combat à 21h30. iOS 15.1 ou plus récent." },
  "/download/android": { title: "Télécharger Attax sur Android : gratuit", description: "Attax est gratuit sur Google Play : tes séances deviennent un duel chaque jour contre un joueur de ta ligue, avec le Soir de combat à 21h30." },
  "/faq": { title: "FAQ : matchs, rounds, cartes, rangs et montres", description: "Toutes les réponses sur Attax : duels en 7 rounds, Soir de combat à 21h30, ligues de 8, cartes, rangs, saison, montres et capteurs cardio compatibles." },
  "/what-is-attax": { title: "Qu'est-ce qu'Attax ? Le jeu de fitness compétitif", description: "Attax est un jeu de fitness compétitif : tes vraies séances deviennent des duels quotidiens. Ce qui le distingue des applications de suivi classiques." },
  "/how-attax-works": { title: "Comment fonctionne Attax", description: "Tes séances et tes pas deviennent des duels quotidiens : 7 rounds, 3 cartes chaque matin, le Soir de combat à 21h30, des ligues de 8 joueurs." },
  "/fitness-gamification": { title: "La gamification du fitness, expliquée", description: "La gamification applique les mécaniques du jeu au sport. Pourquoi ça marche, et comment Attax s'appuie sur la compétition et la progression." },
  "/fitness-competition-app": { title: "Application de compétition fitness", description: "Attax est l'application de compétition fitness où tes vraies séances deviennent des duels quotidiens. Ligues de 8 joueurs, de Rookie à Legend." },
  "/apple-health-fitness-game": { title: "Le jeu de fitness pour Apple Santé", description: "Attax est le jeu de fitness relié à Apple Santé. Chaque séance compte, chaque pas compte, chaque jour est une occasion de gagner." },
  "/health-connect-fitness-game": { title: "Le jeu de fitness pour Android et Health Connect", description: "Attax est le jeu de fitness pensé pour Android. Relie ton activité via Health Connect et transforme chaque séance en compétition." },
  "/press": { title: "Kit presse", description: "Logos, captures, vidéo, textes prêts à l'emploi et chiffres clés pour parler d'Attax, le jeu de fitness où tes vraies séances deviennent des duels." },
  "/privacy": { title: "Politique de confidentialité", description: "Politique de confidentialité d'Attax : comment nous collectons, utilisons et protégeons tes données personnelles." },
  "/health-data-privacy": { title: "Confidentialité des données de santé", description: "Comment Attax collecte, utilise et protège tes données de santé (fréquence cardiaque, pas)." },
  "/terms": { title: "Conditions d'utilisation", description: "Conditions d'utilisation d'Attax : les règles qui encadrent l'usage de l'application et du site." },
  "/cookie-policy": { title: "Politique de cookies", description: "Politique de cookies d'Attax : les cookies et technologies similaires utilisés sur notre site." },
  "/legal": { title: "Mentions légales", description: "Mentions légales du site attax.app." },
};

const urlOf = (path: string, lang: Lang) => BASE_URL + (lang === "fr" ? "/fr" : "") + (path === "/" ? "" : path);
const text = (t: Metadata["title"]): string => (typeof t === "string" ? t : t && typeof t === "object" && "default" in t ? String(t.default) : "Attax");

/** Les métadonnées d'une page dans la langue de la requête. `en` = les métadonnées anglaises déclarées par la page. */
export async function localMeta(path: string, en: Metadata): Promise<Metadata> {
  const lang = await reqLang();
  const fr = lang === "fr" ? FR[path] : undefined;
  const title = fr?.title ?? en.title;
  const description = fr?.description ?? en.description ?? undefined;
  const ogEn = (en.openGraph ?? {}) as { title?: string; description?: string };
  const ogTitle = fr ? text(fr.title) : (ogEn.title ?? text(en.title));
  const ogDesc = fr ? fr.description : (ogEn.description ?? description ?? undefined);
  return {
    ...en,
    title,
    description,
    alternates: { canonical: urlOf(path, lang), languages: { en: urlOf(path, "en"), fr: urlOf(path, "fr"), "x-default": urlOf(path, "en") } },
    openGraph: { type: "website", siteName: "Attax", locale: lang === "fr" ? "fr_FR" : "en_US", title: ogTitle, description: ogDesc, url: urlOf(path, lang), images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", site: "@playattax", creator: "@playattax", title: ogTitle, description: ogDesc, images: [OG_IMAGE.url] },
  };
}
