"use client";

import { useLang } from "@/lib/i18n";
import { useInView } from "@/hooks/useInView";

// Grande phrase entre deux sections (passe 4) : graisse régulière, 64 à 80 px, un seul mot en bleu, révélée mot par mot.
const LINES = {
  night: {
    en: { pre: "Every night at 9:30 PM,", hl: "someone", post: "wins." },
    fr: { pre: "Chaque soir à 21h30,", hl: "quelqu'un", post: "gagne." },
  },
  season: {
    en: { pre: "One week, one league,", hl: "one", post: "champion." },
    fr: { pre: "Une semaine, une ligue,", hl: "un", post: "champion." },
  },
} as const;

export default function Statement({ id }: { id: keyof typeof LINES }) {
  const { lang } = useLang();
  const l = LINES[id][lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.4, { oneShot: true });
  const words = [...l.pre.split(" ").map((w) => ({ w, hl: false })), { w: l.hl, hl: true }, ...l.post.split(" ").map((w) => ({ w, hl: false }))];
  return (
    <section className="stmt" aria-label={`${l.pre} ${l.hl} ${l.post}`}>
      <div ref={ref} className="p-wrap">
        <p className="stmt-text" aria-hidden="true">
          {words.map((x, i) => (
            <span key={i} className={x.hl ? "stmt-w p-hl" : "stmt-w"} style={{ transitionDelay: `${i * 70}ms`, opacity: visible ? 1 : 0.12, transform: visible ? "none" : "translateY(0.25em)" }}>
              {x.w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
