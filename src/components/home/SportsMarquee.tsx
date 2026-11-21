"use client";

import { useLang } from "@/lib/i18n";
import ICONS from "./sportIcons.json";
import { useInView, fadeUp } from "@/hooks/useInView";
import SectionHead from "./SectionHead";

// « Tous les sports comptent » (passe 6b) : plus de défilé d'images. Deux cartes blanches (surface de l'app), tout visible
// d'un coup : à gauche des séances de sports différents (lignes de séance de l'écran Activités), à droite le détail d'une
// séance (zones cardio). Le sport lui-même ne change rien aux pts : seuls le cœur et les pas comptent.

// Séances de différents sports, comme les lignes de séance de l'écran Activités (activity.tsx : icône
// MaterialCommunityIcons de lib/sport.ts SPORT_ICON, nom du sport de l'app (locales sport.*), heure de début → fin, durée
// au format fmtTime). Les icônes sont les tracés de la police de l'app (scripts : sportIcons.json).
const SESSIONS: { icon: keyof typeof ICONS; en: string; fr: string; t: { en: string; fr: string }; d: string }[] = [
  { icon: "run", en: "Running", fr: "Running", t: { en: "6:50 AM → 7:28 AM", fr: "06:50 → 07:28" }, d: "38 min" },
  { icon: "bike", en: "Cycling", fr: "Vélo", t: { en: "8:05 AM → 9:05 AM", fr: "08:05 → 09:05" }, d: "1h" },
  { icon: "swim", en: "Swimming", fr: "Natation", t: { en: "12:15 PM → 1:08 PM", fr: "12:15 → 13:08" }, d: "53 min" },
  { icon: "weight-lifter", en: "Strength training", fr: "Musculation", t: { en: "6:30 PM → 7:25 PM", fr: "18:30 → 19:25" }, d: "55 min" },
  { icon: "soccer", en: "Team sports", fr: "Sport collectif", t: { en: "7:00 PM → 8:15 PM", fr: "19:00 → 20:15" }, d: "1h15" },
  { icon: "tennis", en: "Racket sports", fr: "Sport de raquette", t: { en: "5:30 PM → 6:40 PM", fr: "17:30 → 18:40" }, d: "1h10" },
  { icon: "yoga", en: "Yoga / mobility", fr: "Yoga / mobilité", t: { en: "7:10 AM → 7:40 AM", fr: "07:10 → 07:40" }, d: "30 min" },
  { icon: "walk", en: "Walk", fr: "Marche", t: { en: "1:10 PM → 1:45 PM", fr: "13:10 → 13:45" }, d: "35 min" },
];

// Zones de l'app (HR_ZONE_BASE de app/(tabs)/activity.tsx) et séance de la capture 09_seance_minutes_par_zone.png
const ZONES = [
  { key: "80_120", en: "Endurance", fr: "Endurance", color: "#3B82F6", range: "90–119 bpm", min: 6, pts: 18, bar: 50 },
  { key: "120_135", en: "Tempo", fr: "Tempo", color: "#F97316", range: "119–134 bpm", min: 12, pts: 96, bar: 100 },
  { key: "135_150", en: "Threshold", fr: "Seuil", color: "#EF4444", range: "134–149 bpm", min: 12, pts: 168, bar: 100 },
  { key: "150_plus", en: "Sprint", fr: "Sprint", color: "#7C3AED", range: "149+ bpm", min: 4, pts: 80, bar: 33 },
];

const COPY = {
  en: {
    label: "Every sport counts",
    h2: ["Every sport.", "Every effort."],
    body: "If your heart rate goes up, it counts.\nYoga, curling or a marathon.",
    week: "Sessions this week", sessions: "Today's sessions", sport: "Running", time: "6:50 AM → 7:28 AM",
    note: "Only your heart rate and your steps set the score. Zones adapt to your age.",
    index: "SPORT",
    any: "And any sport or any intense activity",
    anyShort: "And any sport",
    anyKick: "AND ANY SPORT",
    anyLine: "or any intense activity.",
    listKick: "A FEW EXAMPLES. NOTHING IS LEFT OUT.",
  },
  fr: {
    label: "Tous les sports comptent",
    h2: ["Tous les sports.", "Tous les efforts."],
    body: "Si ton cœur accélère, ça compte.\nYoga, curling ou marathon.",
    week: "Séances de la semaine", sessions: "Séances de la journée", sport: "Running", time: "06:50 → 07:28",
    note: "Seuls ton cœur et tes pas font le score. Les zones s'adaptent à ton âge.",
    index: "SPORT",
    any: "Et tout sport ou toute activité intense",
    anyShort: "Et tout sport",
    anyKick: "ET TOUT SPORT",
    anyLine: "ou toute activité intense.",
    listKick: "QUELQUES EXEMPLES. RIEN N'EST EXCLU.",
  },
};

export default function SportsMarquee() {
  const { lang } = useLang();
  const c = COPY[lang];
  const { ref: listRef, visible: listVisible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref: panelRef, visible: panelVisible } = useInView<HTMLDivElement>(0.3, { oneShot: true });

  return (
    <section className="spt-section p5-sec">
      <div className="p5-wrap">
        <SectionHead label={c.label} title={[c.h2[0], c.h2[1]]} lead={c.body} />
        <div className="spt6-grid">
          {/* Toutes les séances, visibles d'un coup (lignes de séance de l'écran Activités) */}
          <div ref={listRef} className="spt6-card">
            <div className="act6-title">{c.week}</div>
            {SESSIONS.map((s, i) => (
              <div key={s.icon} className="act6-sess" style={{ ...fadeUp(listVisible, i * 60), display: "flex" }}>
                <svg width="25" height="25" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0F172A" d={ICONS[s.icon]} /></svg>
                <div style={{ flex: 1 }}><div className="act6-sport">{s[lang]}</div><div className="act6-time">{s.t[lang]}</div></div>
                <div className="act6-dur">{s.d}</div>
              </div>
            ))}
          </div>

          {/* Le détail d'une séance (zones cardio), à l'identique de l'écran Activités ; valeurs de la capture
              _captures_app/09_seance_minutes_par_zone.png */}
          <div ref={panelRef} className="spt6-card">
            <div className="act6-title">{c.sessions}</div>
            <div className="act6-sess">
              <svg width="25" height="25" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0F172A" d={ICONS.run} /></svg>
              <div style={{ flex: 1 }}><div className="act6-sport">{c.sport}</div><div className="act6-time">{c.time}</div></div>
              <div className="act6-dur">38 min</div>
            </div>
            {ZONES.map((z, i) => (
              <div key={z.key} className="act6-zone">
                <div style={{ flex: 1 }}>
                  <div className="act6-zhead"><i style={{ background: z.color }} /><b>{z[lang]}</b><span>{z.range}</span></div>
                  <div className="act6-bar"><span style={{ background: z.color, width: panelVisible ? `${z.bar}%` : "0%", transitionDelay: `${250 + i * 120}ms` }} /></div>
                </div>
                <div className="act6-min">{z.min}<small> min</small></div>
                <div className="act6-pill" style={{ background: z.color + "1F", color: z.color }}>+{z.pts}</div>
              </div>
            ))}
            <p className="act6-note">{c.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
