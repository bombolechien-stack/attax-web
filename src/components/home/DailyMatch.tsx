"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";

// « 7 jours. 7 rounds. » = la page Match de l'app, telle quelle, dans un téléphone (captures store-assets/shots-2026-11-17/
// en/fn-02…fn-07 et _captures_app/13_*, 14_*, 16b_*) : en-tête « Match • LIVE », compte à rebours, avatars, barres de vie
// (components/match/HealthBars.tsx), tirets des rounds, puis le round : MON score en haut, « vs », le score rouge de
// l'adversaire dessous, la barre partagée, et les séances du jour (heure, joueur, sport, durée, pts) + les pas.
// Pas d'animation : l'écran change d'un coup à chaque round (image fixe 1, puis 2…), comme quand l'app dévoile un round.
// Règles (docs/regles/01-match.md) : 7 PV chacun, round perdu = −1 PV, round final = 2 PV, K.O. seulement à 0 PV, jamais
// de nul. Ici : Johnny gagne les rounds 1, 3, 5, Sophie les 2, 4, 6 → 4 PV partout avant le round final (pts secrets).

const BLUE = "#0443FD", RED = "#EC0420", INK = "#09090B", HP0 = 7;
const FONT = "var(--font-manrope), var(--font-jakarta), sans-serif";
const G_ME = "linear-gradient(90deg, #0024c8 0%, #0443FD 45%, #4b78ff 82%, #9bb1ff 100%)";
const G_OPP = "linear-gradient(270deg, #a8001a 0%, #EC0420 45%, #ff3a55 82%, #ffa1a9 100%)";
const STEP_MS = 2600;

type Sport = { en: string; fr: string };
type Sess = { who: "Y" | "O"; at: string; sport: Sport; min: number; pts: number };
type Day = { w: "Y" | "O"; y: number; o: number; ys: number; os: number; sess: Sess[]; left: string };
const S = (en: string, fr: string): Sport => ({ en, fr });
// Pts du jour = séances + pas (10 pts par 1 000 pas). Chaque total est la somme exacte de ses lignes.
const DAYS: Day[] = [
  { w: "Y", y: 486, o: 312, ys: 10020, os: 9040, left: "11:24:24", sess: [{ who: "O", at: "6:40 PM", sport: S("Yoga", "Yoga"), min: 55, pts: 222 }, { who: "Y", at: "7:10 AM", sport: S("Running", "Course"), min: 38, pts: 386 }] },
  { w: "O", y: 210, o: 455, ys: 6010, os: 7020, left: "09:52:10", sess: [{ who: "O", at: "6:35 PM", sport: S("Swimming", "Natation"), min: 53, pts: 385 }, { who: "Y", at: "12:30 PM", sport: S("Strength training", "Musculation"), min: 40, pts: 150 }] },
  { w: "Y", y: 530, o: 380, ys: 8030, os: 8000, left: "08:21:45", sess: [{ who: "Y", at: "6:05 PM", sport: S("Cycling", "Vélo"), min: 60, pts: 450 }, { who: "O", at: "1:45 PM", sport: S("Tennis", "Tennis"), min: 70, pts: 300 }] },
  { w: "O", y: 95, o: 268, ys: 5000, os: 7000, left: "06:50:31", sess: [{ who: "O", at: "10:15 AM", sport: S("Climbing", "Escalade"), min: 45, pts: 198 }, { who: "Y", at: "8:20 AM", sport: S("Walking", "Marche"), min: 35, pts: 45 }] },
  { w: "Y", y: 620, o: 540, ys: 10000, os: 9000, left: "05:12:59", sess: [{ who: "Y", at: "5:30 PM", sport: S("Football", "Football"), min: 75, pts: 520 }, { who: "O", at: "7:00 AM", sport: S("Running", "Course"), min: 50, pts: 450 }] },
  { w: "O", y: 140, o: 395, ys: 6000, os: 8000, left: "03:44:02", sess: [{ who: "O", at: "7:15 PM", sport: S("HIIT", "HIIT"), min: 35, pts: 315 }, { who: "Y", at: "6:50 AM", sport: S("Yoga", "Yoga"), min: 30, pts: 80 }] },
];
const FINAL_SESS: Sess[] = [{ who: "O", at: "6:35 PM", sport: S("Swimming", "Natation"), min: 53, pts: 0 }, { who: "Y", at: "6:05 PM", sport: S("Strength training", "Musculation"), min: 55, pts: 0 }];
const STATES = DAYS.length + 1; // 6 rounds dévoilés puis le round final en direct

const COPY = {
  en: {
    live: "LIVE", day: "DAY 7", timeLeft: "TIME LEFT", until: "UNTIL RESOLUTION", me: "JOHNNY", opp: "SOPHIE", rank: "Pro II", hp: "HP",
    round: (n: number) => `ROUND ${n} / 7`, days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"], wins: "WINS THE ROUND",
    vs: "VS", workouts: (d: string) => `${d.toUpperCase()}'S WORKOUTS`, sport: (w: "Y" | "O") => (w === "Y" ? "Johnny" : "Sophie"),
    steps: "Steps", finalTitle: "Final round", finalLive: "live", secret: "Points secret until 9:30 PM", today: "TODAY'S WORKOUTS",
    stake: "WHAT'S AT STAKE IN THE FINAL ROUND", stakeLine: "4 HP each. The final round takes 2 HP.", stakeSub: "Win it and you win the match, 4 HP to 2.",
    alt: "The Attax Match page: Johnny's score on top, Sophie's below, the day's workouts and the HP bars",
    rounds: "Rounds",
  },
  fr: {
    live: "EN DIRECT", day: "JOUR 7", timeLeft: "TEMPS RESTANT", until: "AVANT LE VERDICT", me: "JOHNNY", opp: "SOPHIE", rank: "Pro II", hp: "PV",
    round: (n: number) => `ROUND ${n} / 7`, days: ["Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi"], wins: "REMPORTE LE ROUND",
    vs: "VS", workouts: (d: string) => `SÉANCES DU ${d.toUpperCase()}`, sport: (w: "Y" | "O") => (w === "Y" ? "Johnny" : "Sophie"),
    steps: "Pas", finalTitle: "Round final", finalLive: "en direct", secret: "Points secrets jusqu'à 21h30", today: "SÉANCES DU JOUR",
    stake: "L'ENJEU DU ROUND FINAL", stakeLine: "4 PV partout. Le round final vaut 2 PV.", stakeSub: "Gagne-le et tu gagnes le match, 4 PV à 2.",
    alt: "La page Match d'Attax : le score de Johnny en haut, celui de Sophie dessous, les séances du jour et les barres de vie",
    rounds: "Rounds",
  },
};

function useReduce() {
  return useSyncExternalStore(
    (cb) => { const m = window.matchMedia("(prefers-reduced-motion: reduce)"); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

/** Barre de vie de l'app (HealthBars), à l'arrêt : capsule chromée, couleur du bord vers le centre, barre noire, 7 tirets. */
function HpBar({ side, life }: { side: "me" | "opp"; life: number }) {
  const me = side === "me", f = life / HP0;
  return (
    <div className="mp-bar-wrap">
      <div className="mp-bar">
        <span className="mp-bar-fill" style={{ background: me ? G_ME : G_OPP, [me ? "left" : "right"]: 0, width: `${f * 100}%` }} />
        <span className="mp-bar-sheen" />
      </div>
      {f < 0.999 && <span className="mp-notch" style={{ [me ? "left" : "right"]: `${f * 100}%` }} />}
      <div className="mp-ticks">{Array.from({ length: HP0 - 1 }, (_, k) => <i key={k} style={{ left: `${((k + 1) / HP0) * 100}%` }} />)}</div>
    </div>
  );
}

export default function DailyMatch() {
  const t = useT();
  const { lang } = useLang();
  const m = t.dailyMatch;
  const c = COPY[lang];
  const reduce = useReduce();
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: phoneRef, visible: onScreen } = useInView<HTMLDivElement>(0.3);
  const [state, setState] = useState(0);
  const [hold, setHold] = useState(false);
  const shown = reduce ? STATES - 1 : state;

  // Un round de plus toutes les 2,6 s, d'un coup (pas de transition), seulement à l'écran ; le round final reste plus longtemps.
  useEffect(() => {
    if (reduce || !onScreen || hold) return;
    const id = setTimeout(() => setState((s) => (s + 1) % STATES), shown === STATES - 1 ? STEP_MS * 2 : STEP_MS);
    return () => clearTimeout(id);
  }, [reduce, onScreen, hold, shown]);

  const isFinal = shown === DAYS.length;
  const played = DAYS.slice(0, isFinal ? DAYS.length : shown + 1);
  const lifeMe = HP0 - played.filter((d) => d.w === "O").length;
  const lifeOpp = HP0 - played.filter((d) => d.w === "Y").length;
  const d = isFinal ? null : DAYS[shown];
  const nf = (n: number) => n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US");
  const time = (s: string) => (lang === "fr" ? s.replace(/^(\d+):(\d+) (AM|PM)$/, (_, h, mm, ap) => `${(+h % 12) + (ap === "PM" ? 12 : 0)}h${mm}`) : s);
  const sess = d ? d.sess : FINAL_SESS;

  return (
    <section id="daily-match" className="mp-section">
      <div className="mp-inner">
        {/* Le texte */}
        <div ref={headerRef} className="mp-copy">
          <span style={{ ...fadeUp(headerVisible, 0), display: "block", marginBottom: "1.5rem" }} className="section-label">{m.label}</span>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.95, margin: 0 }}>
            <div><span style={clipReveal(headerVisible, 80)}>{m.h2[0]}</span></div>
            <div><span style={{ ...clipReveal(headerVisible, 220), color: BLUE }}>{m.h2[1]}</span></div>
          </h2>
          <p style={{ ...fadeUp(headerVisible, 320), fontSize: "1.0625rem", color: "rgba(11,17,22,0.58)", lineHeight: 1.75, maxWidth: 460, margin: "2rem 0 0" }}>{m.subtitle}</p>
          <div className="mp-rhythm">
            {m.stats.map((s, i) => (
              <div key={i} className="mp-rhythm-item" style={fadeUp(headerVisible, 450 + i * 100)}>
                <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.0625rem", letterSpacing: "-0.02em", color: i === 2 ? BLUE : INK }}>{s.n}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(11,17,22,0.55)", lineHeight: 1.55, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* La page Match de l'app, dans un téléphone */}
        <div ref={phoneRef} className="mp-phone" role="group" aria-label={c.alt} onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
          <div className="mp-screen" style={{ fontFamily: FONT }}>
            <div className="mp-status"><span>9:41</span><i className="mp-island" /><span className="mp-icons" /></div>

            <div className="mp-head">
              <span className="mp-title">Match</span><i className="mp-dot" /><span className="mp-live">{c.live}</span>
              <span className="mp-head-r"><b>‹</b><b>›</b></span>
            </div>

            <div className="mp-info">
              <span className="mp-daylbl">{c.day}</span>
              <div className="mp-clock">
                <span className="mp-lbl">{c.timeLeft}</span>
                <span className="mp-time">{isFinal ? "01:49:25" : d!.left}</span>
                <span className="mp-lbl">{c.until}</span>
              </div>
              <span style={{ width: 52 }} />
            </div>

            <div className="mp-row">
              {(["me", "opp"] as const).map((sd) => (
                <div key={sd} className="mp-col">
                  <span className="mp-av" style={{ borderColor: sd === "me" ? BLUE : RED }}>
                    <Image src={`/match/${sd === "me" ? "you" : "sophie"}.webp`} alt="" width={96} height={96} />
                  </span>
                  <span className="mp-name">{sd === "me" ? c.me : c.opp}  <b style={{ color: sd === "me" ? BLUE : RED }}>#{sd === "me" ? 1 : 2}</b></span>
                  <span className="mp-rank"><i />{c.rank}</span>
                </div>
              ))}
              <span className="mp-vs">VS</span>
            </div>

            <div className="mp-bars"><HpBar side="me" life={lifeMe} /><HpBar side="opp" life={lifeOpp} /></div>
            <div className="mp-hp"><span style={{ color: BLUE }}>{lifeMe} {c.hp}</span><span style={{ color: RED }}>{lifeOpp} {c.hp}</span></div>

            {/* Les tirets des rounds (cliquables pour revoir un round) */}
            <div className="mp-dashes" aria-label={c.rounds}>
              {Array.from({ length: 7 }, (_, i) => {
                const col = i < played.length ? (DAYS[i].w === "Y" ? BLUE : RED) : i === played.length && isFinal ? INK : "#D5DBE4";
                const on = isFinal ? i === 6 : i === shown;
                return <button key={i} type="button" aria-label={i < 6 ? c.round(i + 1) : c.finalTitle} onClick={() => { setState(Math.min(i, DAYS.length)); setHold(true); }}
                  style={{ background: on && !isFinal ? INK : col, outline: on ? `1px solid ${INK}` : undefined }} />;
              })}
            </div>

            {d ? (
              <div key={`r${shown}`} className="mp-round">
                <span className="mp-kick">{c.round(shown + 1)}</span>
                <span className="mp-dayname">{c.days[shown]}</span>
                {d.w === "Y" && <span className="mp-kick" style={{ color: BLUE, marginTop: 8 }}>{c.wins}</span>}
                <span className="mp-big" style={{ color: BLUE }}>{nf(d.y)}<small>pts</small></span>
                <span className="mp-small">{nf(d.y)} pts</span>
                <span className="mp-vs2">{c.vs.toLowerCase()}</span>
                {d.w === "O" && <span className="mp-kick" style={{ color: RED }}>{c.wins}</span>}
                <span className="mp-big" style={{ color: RED }}>{nf(d.o)}<small>pts</small></span>
                <span className="mp-small">{nf(d.o)} pts</span>
                <span className="mp-split"><i style={{ flex: d.y, background: BLUE }} /><i style={{ flex: d.o, background: RED }} /></span>
              </div>
            ) : (
              <div key="final" className="mp-round">
                <span className="mp-finaltitle">{c.finalTitle} <em>{c.finalLive}</em></span>
                <span className="mp-secret">{c.secret}</span>
                <span className="mp-kick" style={{ marginTop: 16, letterSpacing: "0.12em", color: INK }}>{c.stake}</span>
                <span className="mp-stake"><b style={{ color: BLUE }}>4</b> {c.hp} · <b style={{ color: RED }}>4</b> {c.hp}</span>
                <span className="mp-stakesub">{c.stakeLine} {c.stakeSub}</span>
              </div>
            )}

            {/* Les séances du jour, comme les lignes de l'app (heure · joueur · sport · durée) */}
            <div className="mp-sess">
              <span className="mp-kick" style={{ color: INK, letterSpacing: "0.16em" }}>{d ? c.workouts(c.days[shown]) : c.today}</span>
              {sess.map((s, i) => (
                <div key={`${shown}-${i}`} className="mp-sess-row">
                  <span className="mp-sess-at">{time(s.at)}</span>
                  <i style={{ background: s.who === "Y" ? BLUE : RED }} />
                  <span className="mp-sess-t"><b>{c.sport(s.who)}</b> · {s.sport[lang]} · {s.min} min</span>
                  <span className="mp-sess-pts" style={{ color: s.who === "Y" ? BLUE : RED }}>{d ? `${nf(s.pts)} pts` : "?"}</span>
                </div>
              ))}
              {d && (
                <div className="mp-sess-steps">{c.steps} · {c.sport("Y")} {nf(d.ys)} · {c.sport("O")} {nf(d.os)}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
