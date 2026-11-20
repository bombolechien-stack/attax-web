"use client";

import { useLang } from "@/lib/i18n";

// Bande de confiance sous le hero (20/11) : uniquement des faits vérifiables (compatibilité, gratuité, plateformes).
// Pas d'avis, de logos de presse ni de nombre de joueurs. Les marques sont écrites en texte simple.
const DEVICES = ["Apple Watch", "Garmin", "Samsung Galaxy Watch", "Fitbit", "COROS", "Amazfit", "Withings", "Oura", "CMF by Nothing"];
const COPY = {
  en: { works: "Works with Apple Health and Health Connect, and the devices that sync to them", free: "Free to play", platforms: "iPhone and Android", data: "Read-only health data, never sold" },
  fr: { works: "Fonctionne avec Apple Santé et Health Connect, et les appareils qui s'y synchronisent", free: "Gratuit", platforms: "iPhone et Android", data: "Données santé en lecture seule, jamais vendues" },
};

export default function TrustStrip() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <section className="trust">
      <div className="p-wrap">
        <p className="trust-kick">{c.works}</p>
        <ul className="trust-list">
          {DEVICES.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <p className="trust-meta"><span>{c.free}</span><span>{c.platforms}</span><span>{c.data}</span></p>
      </div>
    </section>
  );
}
