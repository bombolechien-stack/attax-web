// Tes données (passe 7, 21/11, accord du propriétaire) : une seule ligne sous la FAQ, bouclier + une phrase + un lien.
// Texte dans src/lib/liveCopy.ts (privacy.line / privacy.link).
"use client";

import { useLang, useT } from "@/lib/i18n";
import { LIVE } from "@/lib/liveCopy";

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export default function PrivacyStrip() {
  const t = { ...useT(), ...LIVE[useLang().lang] };
  const p = t.privacy;
  return (
    <section id="your-data" className="h7-data">
      <div className="p5-wrap">
        <p className="h7-dataline">
          <ShieldIcon />
          <span>{p.line} <a href="/health-data-privacy">{p.link} →</a></span>
        </p>
      </div>
    </section>
  );
}
