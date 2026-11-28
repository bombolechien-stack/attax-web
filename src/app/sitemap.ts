import { MetadataRoute } from "next";

const BASE = "https://attax.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Chaque page existe en anglais (adresse d'origine) et en français (/fr/…), reliées entre elles (hreflang).
  const en: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/discover`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/clubs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/adventure`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/download`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/download/ios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/download/android`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/what-is-attax`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/how-attax-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/fitness-gamification`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fitness-competition-app`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/apple-health-fitness-game`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/health-connect-fitness-game`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/health-data-privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  const frOf = (u: string) => (u === BASE ? BASE + "/fr" : u.replace(BASE, BASE + "/fr"));
  return en.flatMap((e) => {
    const languages = { en: e.url, fr: frOf(e.url), "x-default": e.url };
    return [{ ...e, alternates: { languages } }, { ...e, url: frOf(e.url), alternates: { languages } }];
  });
}
