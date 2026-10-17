"use client";

import { useLang } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";
import ScanAthlete from "@/components/scan/ScanAthlete";
import ScanBand from "@/components/scan/ScanBand";
import type { AthleteName } from "@/components/scan/athletes";

const SPORTS: { name: AthleteName; s: number; en: string; fr: string }[] = [
  { name: "run-woman", s: 0.86, en: "Running", fr: "Course" },
  { name: "boxing", s: 1, en: "Boxing", fr: "Boxe" },
  { name: "cycling", s: 0.84, en: "Cycling", fr: "Vélo" },
  { name: "tennis", s: 0.84, en: "Tennis", fr: "Tennis" },
  { name: "deadlift", s: 1, en: "Lifting", fr: "Musculation" },
  { name: "swim-start", s: 0.8, en: "Swimming", fr: "Natation" },
  { name: "wheelchair", s: 0.72, en: "Wheelchair sports", fr: "Handisport" },
  { name: "nordic-walk", s: 0.86, en: "Nordic walking", fr: "Marche nordique" },
  { name: "basketball", s: 1.08, en: "Basketball", fr: "Basket" },
  { name: "row", s: 0.5, en: "Rowing", fr: "Aviron" },
  { name: "sprint", s: 0.94, en: "Sprint", fr: "Sprint" },
  { name: "spin", s: 0.92, en: "Indoor cycling", fr: "Vélo d'intérieur" },
  { name: "walk-senior", s: 1, en: "Walking", fr: "Marche" },
];

const COPY = {
  en: {
    label: "Every sport counts",
    h2: ["Run. Ride. Lift.", "Swim. Box. Play."],
    body: "If your heart rate goes up, it counts. Your watch measures the effort, Attax turns it into points. Whatever your sport, whatever your age.",
  },
  fr: {
    label: "Tous les sports comptent",
    h2: ["Cours. Roule. Soulève.", "Nage. Boxe. Joue."],
    body: "Si ton cœur accélère, ça compte. Ta montre mesure l'effort, Attax le transforme en points. Quel que soit ton sport, quel que soit ton âge.",
  },
};

export default function SportsMarquee({ theme = "light" }: { theme?: "light" | "dark" }) {
  const dark = theme === "dark";
  const K = dark
    ? { bg: "#0B0B0C", ink: "#ffffff", accent: "#C9D5F0", fig: "#C9D5F0", mute: "rgba(255,255,255,0.45)", label: "rgba(201,213,240,0.55)" }
    : { bg: "#EEF2FA", ink: "#0B0B0C", accent: "#1C2540", fig: "#1C2540", mute: "rgba(28,37,64,0.62)", label: "rgba(28,37,64,0.5)" };
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref, visible } = useInView<HTMLDivElement>(0.15);
  const row = [...SPORTS, ...SPORTS];

  return (
    <section style={{ backgroundColor: K.bg, padding: "8rem 0 6rem", overflow: "hidden", position: "relative" }}>
      <div ref={ref} style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 4rem)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "3rem", flexWrap: "wrap" }}>
        <div>
          <p style={{ ...fadeUp(visible, 0), fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: K.label, margin: "0 0 1.5rem" }}>{c.label}</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 800, color: K.ink, letterSpacing: "-0.05em", lineHeight: 0.95, margin: 0 }}>
            <span style={clipReveal(visible, 80)}>{c.h2[0]}</span>
            <span style={{ ...clipReveal(visible, 220), color: K.accent }}>{c.h2[1]}</span>
          </h2>
        </div>
        <p style={{ ...fadeUp(visible, 350), fontSize: "1rem", color: K.mute, lineHeight: 1.75, maxWidth: "340px", margin: 0 }}>{c.body}</p>
      </div>

      <div className="sports-marquee" style={{ marginTop: "5rem", position: "relative", overflow: "hidden" }}>
        <div className="sports-marquee-track" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", alignItems: "flex-end", width: "max-content" }}>
          {row.map((s, i) => (
            <figure key={i} aria-hidden={i >= SPORTS.length} style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", flexShrink: 0, padding: "0 clamp(1.25rem, 2.5vw, 2.5rem)" }}>
              <div style={{ height: "clamp(220px, 30vw, 340px)", display: "flex", alignItems: "flex-end" }}>
                <ScanAthlete name={s.name} color={K.fig} height={`${s.s * 100}%`} reveal={false} label={i < SPORTS.length ? s[lang] : undefined} />
              </div>
              <figcaption style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: K.label }}>{s[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "72rem", margin: "4rem auto 0", padding: "0 clamp(1.5rem, 5vw, 4rem)" }}>
        <ScanBand color={K.fig} lines={7} height={56} opacity={dark ? 0.5 : 0.85} />
      </div>
    </section>
  );
}
