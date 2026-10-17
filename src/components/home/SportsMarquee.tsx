"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";

// Silhouettes des images des carrousels, toutes traitées pareil : détourées en silhouette pleine,
// même taille de personne, posées sur la même ligne de sol, puis scanlines bleu marine sur bleu glacier.
// On alterne femme / homme et le sens (gauche / droite). Images 520×780, affichées en 260×390 (rapport 2:1, lignes nettes).
const SPORTS: { file: string; en: string; fr: string }[] = [
  { file: "running", en: "Running", fr: "Course" },
  { file: "cycling", en: "Cycling", fr: "Vélo" },
  { file: "lifting", en: "Lifting", fr: "Musculation" },
  { file: "sprint", en: "Sprint", fr: "Sprint" },
  { file: "tennis", en: "Tennis", fr: "Tennis" },
  { file: "wheelchair", en: "Wheelchair basketball", fr: "Basket fauteuil" },
  { file: "nordic-walking", en: "Nordic walking", fr: "Marche nordique" },
  { file: "basketball", en: "Basketball", fr: "Basket" },
  { file: "spin", en: "Indoor cycling", fr: "Vélo d'intérieur" },
  { file: "walking", en: "Walking", fr: "Marche" },
];

const COPY = {
  en: {
    label: "Every sport counts",
    h2: ["Run. Ride. Lift.", "Play. Walk. Win."],
    body: "If your heart rate goes up, it counts. Your watch measures the effort, Attax turns it into points. Whatever your sport, whatever your age.",
  },
  fr: {
    label: "Tous les sports comptent",
    h2: ["Cours. Roule. Soulève.", "Joue. Marche. Gagne."],
    body: "Si ton cœur accélère, ça compte. Ta montre mesure l'effort, Attax le transforme en points. Quel que soit ton sport, quel que soit ton âge.",
  },
};

export default function SportsMarquee() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  const row = [...SPORTS, ...SPORTS];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 0 8rem", overflow: "hidden", position: "relative" }}>
      <div ref={ref} style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 4rem)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "3rem", flexWrap: "wrap" }}>
        <div>
          <p style={{ ...fadeUp(visible, 0), fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(28,37,64,0.5)", margin: "0 0 1.5rem" }}>{c.label}</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 800, color: "#0B0B0C", letterSpacing: "-0.05em", lineHeight: 0.95, margin: 0 }}>
            <span style={clipReveal(visible, 80)}>{c.h2[0]}</span>
            <span style={{ ...clipReveal(visible, 220), color: "#1C2540" }}>{c.h2[1]}</span>
          </h2>
        </div>
        <p style={{ ...fadeUp(visible, 350), fontSize: "1rem", color: "rgba(28,37,64,0.62)", lineHeight: 1.75, maxWidth: "340px", margin: 0 }}>{c.body}</p>
      </div>

      <div className="sports-marquee" style={{ marginTop: "4.5rem", position: "relative", overflow: "hidden" }}>
        <div className="sports-marquee-track" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "16px", width: "max-content", paddingRight: "16px" }}>
          {row.map((s, i) => (
            <figure key={i} aria-hidden={i >= SPORTS.length} style={{ margin: 0, flexShrink: 0, width: 260 }}>
              <Image
                src={`/scan/panels/${s.file}.webp`}
                alt={i < SPORTS.length ? s[lang] : ""}
                width={260}
                height={390}
                unoptimized
                style={{ display: "block", width: 260, height: 390 }}
              />
              <figcaption style={{ marginTop: "0.9rem", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(28,37,64,0.55)" }}>{s[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
