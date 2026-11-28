// LANGUES ET ADRESSES (28/11/2026) : le français a ses propres adresses, pour être lu par les moteurs de recherche.
//   anglais  : attax.app/clubs        (adresse d'origine, inchangée)
//   français : attax.app/fr/clubs     (même page, servie en français dès le serveur)
// Le fichier src/middleware.ts retire le préfixe /fr et transmet la langue à la page (en-tête x-attax-lang) ; le
// sélecteur EN · FR change d'adresse. Seules les pages listées ici ont une version /fr ; les autres (profil d'un
// joueur, ligue, liens d'invitation, écran de club…) gardent une seule adresse et la langue choisie dans le navigateur.
export type Lang = "en" | "fr";
export const LANG_HEADER = "x-attax-lang";
export const LANG_COOKIE = "attax-lang";
export const BASE_URL = "https://attax.app";

export const LOCALIZED_PATHS = [
  "/", "/clubs", "/discover", "/adventure", "/contact", "/download", "/download/ios", "/download/android", "/faq",
  "/what-is-attax", "/how-attax-works", "/fitness-gamification", "/fitness-competition-app",
  "/apple-health-fitness-game", "/health-connect-fitness-game", "/press",
  "/privacy", "/health-data-privacy", "/terms", "/legal", "/cookie-policy",
] as const;

const norm = (p: string) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p) || "/";
/** L'adresse commence-t-elle par /fr ? */
export const isFrPath = (p: string) => p === "/fr" || p.startsWith("/fr/");
/** L'adresse sans son préfixe de langue (« /fr/clubs » → « /clubs », « /fr » → « / »). */
export const stripLang = (p: string) => norm(isFrPath(p) ? p.slice(3) || "/" : p);
/** Cette page a-t-elle une version par langue ? */
export const isLocalized = (p: string) => (LOCALIZED_PATHS as readonly string[]).includes(stripLang(p));
/** L'adresse d'une page dans une langue (« /clubs », fr → « /fr/clubs » ; « / », fr → « /fr »). */
export const withLang = (p: string, lang: Lang) => { const b = stripLang(p); return lang === "fr" ? (b === "/" ? "/fr" : "/fr" + b) : b; };
