"use client";

import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp } from "@/hooks/useInView";

// « L'idée » (version premium, passe 2) : section claire. Une grande phrase en graisse régulière avec un seul mot en
// bleu (le seul accent bleu de la page hors de la vitrine sombre), et la page Match de l'app (capture réelle) en panneau flottant incliné
// en perspective, qui se redresse doucement au défilement. Les 3 idées en lignes séparées par des filets fins.

const COPY = {
  en: { pre: "Attax turns every workout into a duel you can ", hl: "win tonight", post: "." },
  fr: { pre: "Attax transforme chaque séance en un duel que tu peux ", hl: "gagner ce soir", post: "." },
};

export default function InfoSection() {
  const t = useT();
  const inf = t.info;
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: listRef, visible: listVisible } = useInView<HTMLDivElement>(0.1, { oneShot: true });

  return (
    <section className="idea p-tint">
      <div className="p-wrap idea-grid idea-solo">
        <div ref={headerRef} className="idea-copy">
          <p className="p-mono" style={fadeUp(headerVisible, 0)}>{inf.label}</p>
          <h2 className="p-statement" style={fadeUp(headerVisible, 100)}>
            {inf.h2} {c.pre}<span className="p-hl">{c.hl}</span>{c.post}
          </h2>
          <div ref={listRef} className="idea-list">
            {inf.steps.map((s, i) => (
              <div key={i} className="idea-row" style={fadeUp(listVisible, 80 * i)}>
                <span className="p-mono">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="p-h3">{s.title}</h3>
                  <p className="p-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
