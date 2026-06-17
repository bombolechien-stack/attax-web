import { MetadataRoute } from "next";

const BASE = "https://attax.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/discover`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/adventure`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/download`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/what-is-attax`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/how-attax-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/fitness-gamification`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fitness-competition-app`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/apple-health-fitness-game`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/health-connect-fitness-game`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
