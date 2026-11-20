"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { useInView, fadeUp } from "@/hooks/useInView";
import SectionHead from "./SectionHead";

// « Tous les sports comptent » : une seule scène, calme, au lieu d'un défilé. Les athlètes des photos d'origine, détourés
// (public/sports/*.webp, scripts/scan-athletes/sports-cutouts.py), en encre sur le fond clair, le nom du sport en grand
// derrière ; chaque athlète se dévoile de haut en bas à chaque sport. 9 sports en image puis, en dernier, « Et tout sport ou toute activité
// intense » : ce cadre fait défiler d'autres sports (yoga, curling, danse…), la liste n'est qu'un échantillon.
// À côté, ce qui compte vraiment, comme dans l'écran Activités de l'app : les 4 zones cardio et leur barème
// (3 / 8 / 14 / 20 pts par minute, lib/scoring.ts) et les pas (10 pts par 1 000 pas).
// Le sport lui-même ne change rien aux pts (docs/regles/02-activite.md § 3.3).

const BLUE = "#0443FD", INK = "#0B1116", SUB = "#6B7280", MUTED = "#94A3B8";
const FONT = "var(--font-manrope), var(--font-jakarta), sans-serif";
const STAGE_BG = "#EEF1F7"; // fond des images (captures de l'app)
const INTERVAL = 2800, ANY_INTERVAL = 5600;

const SPORTS: { file: string; en: string; fr: string }[] = [
  { file: "running", en: "Running", fr: "Course" },
  { file: "cycling", en: "Cycling", fr: "Vélo" },
  { file: "lifting", en: "Lifting", fr: "Musculation" },
  { file: "tennis", en: "Tennis", fr: "Tennis" },
  { file: "wheelchair", en: "Wheelchair basketball", fr: "Basketball en fauteuil" },
  { file: "sprint", en: "Sprint", fr: "Sprint" },
  { file: "nordic-walking", en: "Nordic walking", fr: "Marche nordique" },
  { file: "basketball", en: "Basketball", fr: "Basketball" },
  { file: "walking", en: "Walking", fr: "Marche" },
];
const ANY = SPORTS.length; // le 10e et dernier : tout le reste
const TOTAL = SPORTS.length + 1;

// Le 10e cadre fait défiler d'autres sports, sans image : la liste n'a pas de fin.
const MORE = {
  en: ["Yoga", "Curling", "Dance", "Climbing", "Padel", "Skiing", "Hiking", "Martial arts", "Pilates", "Jump rope", "Swimming", "Boxing", "Rowing", "Surfing"],
  fr: ["Yoga", "Curling", "Danse", "Escalade", "Padel", "Ski", "Randonnée", "Arts martiaux", "Pilates", "Corde à sauter", "Natation", "Boxe", "Aviron", "Surf"],
};

const ZONES = [
  { en: "Endurance", fr: "Endurance", pts: 3 },
  { en: "Tempo", fr: "Tempo", pts: 8 },
  { en: "Threshold", fr: "Seuil", pts: 14 },
  { en: "Sprint", fr: "Sprint", pts: 20 },
];

const COPY = {
  en: {
    label: "Every sport counts",
    h2: ["Every sport.", "Every effort."],
    body: "If your heart rate goes up, it counts.\nYoga, curling or a marathon.",
    panelKick: "YOUR EFFORT → PTS",
    panelTitle: "Your heart sets the score.",
    zone: "Zone",
    perMin: "pts / min",
    steps: "1,000 steps",
    stepsPts: "10 pts",
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
    panelKick: "TON EFFORT → PTS",
    panelTitle: "C'est ton cœur qui marque.",
    zone: "Zone",
    perMin: "pts / min",
    steps: "1 000 pas",
    stepsPts: "10 pts",
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
  const { ref: stageRef, visible: stageVisible } = useInView<HTMLDivElement>(0.25);
  const { ref: panelRef, visible: panelVisible } = useInView<HTMLDivElement>(0.3, { oneShot: true });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [more, setMore] = useState(0);
  const isAny = active === ANY;
  const names = [...SPORTS.map((s) => s[lang]), c.anyShort];

  // Un sport toutes les 2,8 s (le dernier cadre reste plus longtemps), seulement quand la scène est à l'écran,
  // et jamais si l'utilisateur réduit les animations.
  useEffect(() => {
    if (!stageVisible || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % TOTAL), isAny ? ANY_INTERVAL : INTERVAL);
    return () => clearTimeout(id);
  }, [stageVisible, paused, active, isAny]);

  // Dernier cadre : les autres sports défilent un par un.
  useEffect(() => {
    if (!isAny) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setMore((m) => (m + 1) % MORE.en.length), 460);
    return () => { clearInterval(id); setMore(0); };
  }, [isAny]);

  const pad = (n: number) => String(n).padStart(2, "0");
  const segDur = isAny ? ANY_INTERVAL : INTERVAL;

  return (
    <section className="spt-section p5-sec">
      <div className="p5-wrap">
        <SectionHead label={c.label} title={[c.h2[0], c.h2[1]]} lead={c.body} />
      </div>

      <div className="spt-grid">
        {/* La scène */}
        <div ref={stageRef} className="spt-stage spt-v-C spt-v2a" style={{ backgroundColor: STAGE_BG }}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {SPORTS.map((s, i) => {
            const on = i === active;
            return (
              <div key={s.file} className="spt-frame" aria-hidden={!on} style={{
                opacity: on ? 1 : 0,
                clipPath: on ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
                transform: on ? "scale(1)" : "scale(1.03)",
                transition: on
                  ? "clip-path 1.1s cubic-bezier(0.65,0,0.35,1), opacity 0.3s ease, transform 1.6s cubic-bezier(0.16,1,0.3,1)"
                  : "opacity 0.6s ease 0.35s, clip-path 0s linear 0.95s, transform 0s linear 0.95s",
                zIndex: on ? 2 : 1,
              }}>
                <Image className="spt-photo" src={`/sports/${s.file}.webp`} alt={on ? s[lang] : ""} width={520} height={780} unoptimized loading={i < 2 ? "eager" : "lazy"}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} />
              </div>
            );
          })}

          {/* 10e cadre : tous les autres sports, en typographie (pas d'image : la liste continue) */}
          <div className="spt-any" aria-hidden={!isAny} style={{
            opacity: isAny ? 1 : 0,
            clipPath: isAny ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
            transition: isAny ? "clip-path 1.1s cubic-bezier(0.65,0,0.35,1), opacity 0.3s ease" : "opacity 0.6s ease 0.35s, clip-path 0s linear 0.95s",
            zIndex: isAny ? 2 : 1,
          }}>
            <div className="spt-any-inner">
              <span className="spt-any-kick">{c.anyKick}</span>
              <div className="spt-any-roll">
                {MORE[lang].map((n, i) => (
                  <span key={n} className="spt-any-word" style={{
                    opacity: i === more ? 1 : 0,
                    transform: i === more ? "translateY(0)" : i === (more + MORE.en.length - 1) % MORE.en.length ? "translateY(-45%)" : "translateY(45%)",
                  }}>{n}</span>
                ))}
              </div>
              <span className="spt-any-line">{c.anyLine}</span>
            </div>
          </div>

          <div className="spt-stage-top">
            <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.65625rem", letterSpacing: "0.25em", color: SUB }}>{c.index}</span>
            <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.8125rem", color: INK, fontVariantNumeric: "tabular-nums" }}>
              {pad(active + 1)} <span style={{ color: MUTED }}>/ {pad(TOTAL)}</span>
            </span>
          </div>

          <div className="spt-stage-bottom">
            <div className="spt-name-wrap">
              <span key={active} className="spt-name" style={isAny ? { color: BLUE } : undefined}>{names[active]}</span>
            </div>
            {/* La frise de l'app : un segment par sport, celui en cours se remplit */}
            <div className="spt-track" role="tablist" aria-label={c.label}>
              {names.map((n, i) => (
                <button key={i} type="button" role="tab" aria-selected={i === active} aria-label={i === ANY ? c.any : n}
                  onClick={() => setActive(i)} className="spt-seg">
                  <span className="spt-seg-bg" />
                  <span key={i === active ? `on-${active}` : "off"} style={i === active ? { animationDuration: `${segDur}ms` } : undefined}
                    className={i === active ? (paused || !stageVisible ? "spt-seg-fill spt-seg-full" : "spt-seg-fill spt-seg-run") : i < active ? "spt-seg-fill spt-seg-full" : "spt-seg-fill"} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ce qui compte : le barème, comme l'écran Activités */}
        <div ref={panelRef} className="spt-side">
          <div className="spt-panel" style={{ ...fadeUp(panelVisible, 0) }}>
            <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.65625rem", letterSpacing: "0.25em", color: SUB }}>{c.panelKick}</div>
            <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)", letterSpacing: "-0.035em", color: INK, marginTop: 8, lineHeight: 1.1 }}>{c.panelTitle}</div>

            <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {ZONES.map((z, i) => (
                <div key={z.en}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: FONT }}>
                    <span style={{ fontWeight: 700, fontSize: "0.875rem", color: INK }}>
                      <span style={{ fontWeight: 800, fontSize: "0.625rem", letterSpacing: "0.16em", color: MUTED, marginRight: 8 }}>{c.zone.toUpperCase()} {i + 1}</span>
                      {z[lang]}
                    </span>
                    <span style={{ fontWeight: 800, fontSize: "0.9375rem", color: INK, fontVariantNumeric: "tabular-nums" }}>
                      {z.pts} <span style={{ fontWeight: 600, fontSize: "0.75rem", color: SUB }}>{c.perMin}</span>
                    </span>
                  </div>
                  <div style={{ marginTop: 8, height: 6, borderRadius: 3, backgroundColor: "#E6EAF0", overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: 3, backgroundColor: BLUE, opacity: 0.4 + i * 0.2,
                      width: panelVisible ? `${(z.pts / 20) * 100}%` : "0%",
                      transition: `width 1.1s cubic-bezier(0.16,1,0.3,1) ${250 + i * 120}ms`,
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: FONT }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: "0.875rem", color: INK }}>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill={INK} d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3A7.3 7.3 0 0 0 19 13v-2a5.1 5.1 0 0 1-4.4-2.5l-1-1.6A2 2 0 0 0 11.9 6c-.3 0-.5 0-.8.1L6 8.3V13h2V9.6l1.8-.7"/></svg>
                {c.steps}
              </span>
              <span style={{ fontWeight: 800, fontSize: "0.9375rem", color: INK }}>{c.stepsPts}</span>
            </div>
          </div>

          <p style={{ ...fadeUp(panelVisible, 350), fontSize: "0.875rem", color: "rgba(11,17,22,0.55)", lineHeight: 1.65, margin: 0 }}>{c.note}</p>

        </div>
      </div>
    </section>
  );
}
