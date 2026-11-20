"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp } from "@/hooks/useInView";

// « L'idée » (version premium, 20/11) : la vitrine sombre de la page. Une grande phrase en graisse régulière avec un seul
// passage en bleu, une lueur bleue floue au bord, et la page Match de l'app (capture réelle) en panneau flottant incliné
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
  const phoneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(1);

  // Parallaxe douce : le panneau se redresse en entrant dans l'écran (rien si les animations sont réduites).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = phoneRef.current; if (!el) return;
        if (reduce) { setTilt(0.4); return; }
        const r = el.getBoundingClientRect();
        const k = Math.max(0, Math.min(1, (r.top + r.height / 2) / window.innerHeight));
        setTilt(k);
      });
    };
    on();
    if (reduce) return () => cancelAnimationFrame(raf);
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="p-dark idea">
      <div className="p-glow p-glow-r" aria-hidden="true" />
      <div className="p-wrap idea-grid">
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
        <div className="idea-stage">
          <div ref={phoneRef} className="idea-phone" style={{ transform: `perspective(1400px) rotateY(${-16 * tilt}deg) rotateX(${6 * tilt}deg) rotateZ(${2 * tilt}deg) translateY(${30 * tilt}px)` }}>
            <Image src={`/screens/app/${lang}/2.webp`} alt={lang === "fr" ? "La page Match d'Attax : le duel du jour contre Sophie" : "The Attax Match page: today's duel against Sophie"}
              width={560} height={1107} quality={90} sizes="(max-width: 860px) 70vw, 340px" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
