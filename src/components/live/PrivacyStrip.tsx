// Textes repris tels quels du site en ligne (branche master, 21/11), dans src/lib/liveCopy.ts. Mise en forme : passe 7
// (21/11), une simple rangée entre deux filets sur la grille des chapitres (classes .h7-* de src/app/home-p5.css).
"use client";

import { useLang, useT } from "@/lib/i18n";
import { LIVE } from "@/lib/liveCopy";
import { useInView } from "@/hooks/useInView";

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export default function PrivacyStrip() {
  const t = { ...useT(), ...LIVE[useLang().lang] };
  const p = t.privacy;
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });

  return (
    <section id="your-data" className="h7 h7-data">
      <div className="p5-wrap">
        <div ref={ref} className={`h7-row${visible ? " is-in" : ""}`}>
          <div className="h7-row-a">
            <p className="st6-kick"><ShieldIcon />{p.label}</p>
            <h3 className="h7-row-t">{p.title}</h3>
          </div>
          <p className="h7-p">{p.body}</p>
          <ul className="h7-checks">
            {p.points.map((point: string, i: number) => (
              <li key={i}><i />{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
