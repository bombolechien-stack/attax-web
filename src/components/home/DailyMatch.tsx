"use client";

import { useEffect, useRef, useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideRight } from "@/hooks/useInView";
import AppScanlines from "./AppScanlines";

// « 7 jours. 7 rounds. » = la page Match de l'app (app/(tabs)/match.tsx), reproduite avec ses vrais éléments :
// barres de vie (components/match/LifeBar.tsx : 7 fractions fines, bleu depuis la gauche pour toi, rouge depuis la
// droite pour lui, les fractions en jeu ce soir respirent), frise TIMELINE et cartes de round
// (components/v3/RoundsTimeline.tsx : gagné = bleu à scanlines blanches, perdu = rouge, nul = gris, round final = noir).
// Exemple cohérent avec les règles (docs/regles/01-match.md) : chacun part de 7 PV, round passé perdu = −1 PV ;
// avant le final : toi 4 PV, Sophie 4 PV ; le final vaut 2 PV ; K.O. seulement à 0 PV ; jamais de nul.
// Les rounds se dévoilent un par un comme sur la page Match (frise, carte, PV qui tombe) et, en fond, les deux boxeurs
// de l'app échangent des coups (public/videos/match-boxers.*, rendu par scripts/fight-night-video/boxers-bg.mjs).

const BLUE = "#0443FD", RED = "#EC0420", INK = "#0B1116", SUB = "#6B7280", MUTED = "#94A3B8", EMPTY = "#E2E6EC";
const FONT = "var(--font-manrope), var(--font-jakarta), sans-serif";
const LIFE_MAX = 7;

type Res = "Y" | "O";
const ROUNDS: { res: Res; y: number; o: number }[] = [
  { res: "Y", y: 486, o: 312 },
  { res: "O", y: 210, o: 455 },
  { res: "Y", y: 530, o: 380 },
  { res: "O", y: 95, o: 268 },
  { res: "Y", y: 620, o: 540 },
  { res: "O", y: 140, o: 395 },
];
const STEP_MS = 1150;

const COPY = {
  en: {
    days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Today"],
    round: "ROUND", finalRound: "FINAL ROUND", won: "WON", lost: "LOST", live: "LIVE", upcoming: "UPCOMING", revealing: "REVEALING",
    forOpp: (n: string) => `−1 HP for ${n}`, forYou: "−1 HP for you", replay: "Replay the rounds",
    timeline: "TIMELINE", finalLive: "Final round live", liveSub: "Live from 7 PM to 9:30 PM, cards included",
    worth: "worth 2 HP", stake: (me: number, opp: number) => `At stake: you ${me} HP, Sophie ${opp} HP. Tonight's winner takes 2 HP from the other. K.O. only at 0 HP.`,
    yourCard: "YOUR CARD", theirCard: "THEIR CARD", secret: "Secret until 9:30 PM", overdrive: "Overdrive", overdriveFx: "Workout pts ×1.5",
    played: "‹ played", next: "tonight ›",
  },
  fr: {
    days: ["Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Aujourd'hui"],
    round: "ROUND", finalRound: "ROUND FINAL", won: "GAGNÉ", lost: "PERDU", live: "EN DIRECT", upcoming: "À VENIR", revealing: "RÉVÉLATION",
    forOpp: (n: string) => `−1 PV pour ${n}`, forYou: "−1 PV pour toi", replay: "Rejouer les rounds",
    timeline: "TIMELINE", finalLive: "Round final en direct", liveSub: "En direct de 19h à 21h30, cartes comprises",
    worth: "vaut 2 PV", stake: (me: number, opp: number) => `L'enjeu : toi ${me} PV, Sophie ${opp} PV. Le gagnant de ce soir retire 2 PV à l'autre. K.O. seulement à 0 PV.`,
    yourCard: "TA CARTE", theirCard: "SA CARTE", secret: "Secrète jusqu'à 21h30", overdrive: "Overdrive", overdriveFx: "pts de séance ×1,5",
    played: "‹ rounds joués", next: "ce soir ›",
  },
};

/** Barre de vie de l'app : 7 fractions fines ; la vie part de l'extérieur, les pertes s'éteignent vers le centre. */
function LifeBar({ side, life, stake }: { side: "me" | "opp"; life: number; stake: number }) {
  const col = side === "me" ? BLUE : RED;
  const order = Array.from({ length: LIFE_MAX }, (_, k) => (side === "me" ? k : LIFE_MAX - 1 - k));
  return (
    <div className="dm2-life" aria-hidden="true">
      {order.map((k) => {
        const on = k < life;
        const inStake = on && stake > 0 && k >= life - stake;
        return (
          <span key={k} className="dm2-life-seg" style={{ backgroundColor: EMPTY }}>
            <span className={inStake ? "dm2-breath" : undefined} style={{
              position: "absolute", inset: 0, borderRadius: 2, backgroundColor: col,
              transform: on ? "scaleX(1)" : "scaleX(0)", opacity: on ? 1 : 0,
              transition: "transform 0.7s cubic-bezier(0.55,0,0.85,0.35), opacity 0.7s ease 0.1s",
            }} />
          </span>
        );
      })}
    </div>
  );
}

function Player({ side, name, life, stake, hp, hit }: { side: "me" | "opp"; name: string; life: number; stake: number; hp: string; hit: number }) {
  const col = side === "me" ? BLUE : RED;
  const right = side === "opp";
  return (
    <div className="dm2-player" style={{ alignItems: right ? "flex-end" : "flex-start", textAlign: right ? "right" : "left" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexDirection: right ? "row-reverse" : "row" }}>
        <span className="dm2-avatar" style={{ borderColor: col, color: col }}>{name.charAt(0)}</span>
        <div>
          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "clamp(1.05rem, 2vw, 1.375rem)", letterSpacing: "-0.03em", color: INK, lineHeight: 1.1 }}>{name}</div>
          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.8125rem", color: col, marginTop: 2, fontVariantNumeric: "tabular-nums" }}>
            <span key={life} className="dm2-tick">{life}</span> {hp}
            {hit > 0 && <span key={`hit-${hit}`} className="dm2-hit" style={{ color: col }}>−1 {hp}</span>}
          </div>
        </div>
      </div>
      <LifeBar side={side} life={life} stake={stake} />
    </div>
  );
}

export default function DailyMatch() {
  const t = useT();
  const { lang } = useLang();
  const m = t.dailyMatch;
  const c = COPY[lang];
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: boardRef, visible: boardVisible } = useInView<HTMLDivElement>(0.18, { oneShot: true });
  const { ref: sectionRef, visible: sectionNear } = useInView<HTMLElement>(0.01);
  const { ref: boxersRef, visible: videoOn } = useInView<HTMLDivElement>(0.01, { oneShot: true });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Le match se rejoue round par round, comme sur la page Match : la carte du round se dévoile, la frise se remplit,
  // le PV tombe chez celui qui perd le round ; après le 6e, le round final passe en direct. Rejouable.
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (!boardVisible) return;
    const red = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = red ? ROUNDS.length : 0;
    const tick = () => {
      i += 1; setStep(i);
      if (i <= ROUNDS.length) timer = setTimeout(tick, i === ROUNDS.length ? 900 : STEP_MS);
    };
    let timer = setTimeout(() => { setStep(i); timer = setTimeout(tick, red ? 0 : 500); }, 0);
    return () => clearTimeout(timer);
  }, [boardVisible, run]);

  // Les boxeurs en fond : chargés seulement à l'approche de la section, en pause hors de l'écran, jamais animés si
  // l'utilisateur réduit les animations (l'image fixe reste).
  useEffect(() => {
    const v = videoRef.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sectionNear) v.play().catch(() => {}); else v.pause();
  }, [sectionNear, videoOn]);

  const played = ROUNDS.slice(0, Math.min(step, ROUNDS.length));
  const lifeMe = LIFE_MAX - played.filter((r) => r.res === "O").length;
  const lifeOpp = LIFE_MAX - played.filter((r) => r.res === "Y").length;
  const finalOn = step > ROUNDS.length;
  const current = step >= 1 && step <= ROUNDS.length ? step - 1 : -1; // le round qui vient de se dévoiler
  const hitMe = current >= 0 && ROUNDS[current].res === "O" ? step : 0;
  const hitOpp = current >= 0 && ROUNDS[current].res === "Y" ? step : 0;
  const nf = (n: number) => n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US");

  return (
    <section id="daily-match" ref={sectionRef} className="dm2-section">
      {/* En fond : les boxeurs bleu et rouge de l'app échangent des coups (même fond que la section, très atténués) */}
      <div ref={boxersRef} className="dm2-boxers" aria-hidden="true">
        {videoOn && (
          <video ref={videoRef} muted loop playsInline preload="none" poster="/videos/match-boxers-poster.jpg">
            <source src="/videos/match-boxers.webm" type="video/webm" />
            <source src="/videos/match-boxers.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div style={{ position: "relative", maxWidth: "76rem", margin: "0 auto" }}>

        <div ref={headerRef} style={{ marginBottom: "4rem" }}>
          <span style={{ ...fadeUp(headerVisible, 0), display: "block", marginBottom: "1.5rem" }} className="section-label">{m.label}</span>
          <div className="dm-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.95, margin: 0 }}>
              <div><span style={clipReveal(headerVisible, 80)}>{m.h2[0]}</span></div>
              <div><span style={{ ...clipReveal(headerVisible, 220), color: BLUE }}>{m.h2[1]}</span></div>
            </h2>
            <p style={{ ...slideRight(headerVisible, 350), fontSize: "1.0625rem", color: "rgba(11,17,22,0.58)", lineHeight: 1.75, maxWidth: "460px", margin: 0 }}>{m.subtitle}</p>
          </div>
        </div>

        {/* L'écran Match */}
        <div ref={boardRef} className="dm2-board" style={{ opacity: boardVisible ? 1 : 0, transform: boardVisible ? "none" : "translateY(28px)", transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}>

          {/* Les deux joueurs et leur vie */}
          <div className="dm2-versus">
            <Player side="me" name={m.you.charAt(0) + m.you.slice(1).toLowerCase()} life={lifeMe} stake={finalOn ? 2 : 0} hp={m.hp} hit={hitMe} />
            <div className="dm2-vs">
              <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.625rem", letterSpacing: "0.22em", color: MUTED }}>{m.match}</span>
              <span style={{ fontFamily: FONT, fontWeight: 800, fontStyle: "italic", fontSize: "1.5rem", letterSpacing: "-0.04em", color: INK, lineHeight: 1 }}>VS</span>
              <span className="dm2-vs-time" style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.625rem", letterSpacing: "0.18em", color: SUB }}>{m.resolves}</span>
            </div>
            <Player side="opp" name={m.opp.charAt(0) + m.opp.slice(1).toLowerCase()} life={lifeOpp} stake={finalOn ? 2 : 0} hp={m.hp} hit={hitOpp} />
          </div>

          {/* La frise */}
          <div className="dm2-timeline">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.65625rem", letterSpacing: "0.25em", color: SUB }}>{c.timeline}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: FONT, fontWeight: 800, fontSize: "0.8125rem", color: INK, opacity: finalOn ? 1 : 0.35, transition: "opacity 0.6s ease" }}>
                  <span className={finalOn ? "dm2-livedot" : undefined} style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: RED }} />
                  {c.finalLive}
                </span>
                <button type="button" className="dm2-replay" onClick={() => setRun((r) => r + 1)} disabled={!finalOn} aria-label={c.replay} title={c.replay}>
                  <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" /></svg>
                </button>
              </span>
            </div>
            <div className="dm2-track">
              {[...ROUNDS, null].map((r, i) => {
                const isFinal = r === null;
                const done = !isFinal && step > i;
                const fill = !r ? RED : r.res === "Y" ? BLUE : RED;
                return (
                  <div key={i} style={{ flex: isFinal ? 1.8 : 1, minWidth: 0 }}>
                    <div style={{ height: 3, borderRadius: 2, backgroundColor: "#D5DBE4", overflow: "hidden" }}>
                      <div style={{
                        height: 3, backgroundColor: fill, width: isFinal ? (finalOn ? "45%" : "0%") : done ? "100%" : "0%",
                        transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
                      }} className={isFinal && finalOn ? "dm2-breath" : undefined} />
                    </div>
                    <div style={{ marginTop: 7, fontFamily: FONT, fontWeight: 800, fontSize: "0.625rem", letterSpacing: "0.08em", color: isFinal ? (finalOn ? RED : MUTED) : done ? INK : MUTED, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", transition: "color 0.4s ease" }}>
                      {isFinal ? `${m.final} ×2` : m.days[i]}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontFamily: FONT, fontWeight: 600, fontSize: "0.6875rem", color: MUTED }}>
              <span>{c.played}</span><span>{c.next}</span>
            </div>
          </div>

          {/* Les cartes de round */}
          <div className="dm2-grid">
            {ROUNDS.map((r, i) => {
              const done = step > i;
              const won = r.res === "Y";
              const bg = won ? BLUE : RED;
              const white = true;
              const pill = won ? { t: c.won, c: BLUE } : { t: c.lost, c: RED };
              const sub = won ? c.forOpp(m.opp.charAt(0) + m.opp.slice(1).toLowerCase()) : c.forYou;
              const next = !done && step === i && boardVisible; // le prochain à se dévoiler
              return (
                <article key={i} className={i === current ? "dm2-card dm2-focus" : "dm2-card"}>
                  {/* Avant : la carte « à venir » (gris, scanlines grises) */}
                  <div className="dm2-face" style={{ backgroundColor: "#EEF1F5" }}>
                    <AppScanlines w={300} h={190} color={MUTED} opacity={0.3} />
                    <CardHead label={`${c.round} ${i + 1}`} pill={next ? c.revealing : c.upcoming} pillColor={next ? INK : SUB} pillBg="rgba(255,255,255,0.75)" white={false} live={next} />
                    <div className="dm2-day" style={{ color: SUB }}>{c.days[i]}</div>
                  </div>
                  {/* Après : le résultat, dévoilé de haut en bas comme une trame qui s'imprime */}
                  <div className="dm2-face dm2-result" style={{ backgroundColor: bg, clipPath: done ? "inset(0 0 0 0 round 18px)" : "inset(0 0 100% 0 round 18px)" }}>
                    <AppScanlines w={300} h={190} color={white ? "#FFFFFF" : MUTED} opacity={white ? 0.2 : 0.35} />
                    <CardHead label={`${c.round} ${i + 1}`} pill={pill.t} pillColor={pill.c} pillBg="#FFFFFF" white={white} />
                    <div className="dm2-day" style={{ color: white ? "#FFFFFF" : INK }}>{c.days[i]}</div>
                    <div className="dm2-sub" style={{ color: white ? "rgba(255,255,255,0.82)" : SUB }}>{sub}</div>
                    <div className="dm2-sides">
                      {[true, false].map((mine) => (
                        <div key={String(mine)} className={mine ? "dm2-side" : "dm2-side dm2-side-r"} style={!mine ? { borderLeftColor: white ? "rgba(255,255,255,0.35)" : "#D5DBE4" } : undefined}>
                          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.59375rem", letterSpacing: "0.16em", color: white ? "rgba(255,255,255,0.75)" : mine ? BLUE : RED }}>{mine ? m.you : m.opp}</div>
                          <div className="dm2-pts" style={{ color: white ? "#FFFFFF" : mine ? BLUE : RED }}><Count to={mine ? r.y : r.o} on={done} fmt={nf} /> <small>pts</small></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Le round final : la carte noire grisée de l'app */}
            <article className="dm2-card dm2-final" style={{ backgroundColor: "#262D35" }}>
              <AppScanlines w={320} h={460} color="#FFFFFF" opacity={0.1} />
              <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardHead label={c.finalRound} pill={c.live} pillColor="#FF5A6E" pillBg="rgba(255,255,255,0.1)" white live={finalOn} />
                <div className="dm2-day" style={{ color: "#FFFFFF" }}>{c.days[6]}</div>
                <div className="dm2-sub" style={{ color: "rgba(255,255,255,0.75)" }}>{c.liveSub}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: "1.1rem" }}>
                  <span style={{ fontFamily: FONT, fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2.75rem, 4vw, 3.5rem)", letterSpacing: "-0.05em", color: "rgba(255,255,255,0.9)", lineHeight: 1 }}>×2</span>
                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: "0.875rem", color: "rgba(255,255,255,0.72)" }}>{c.worth}</span>
                </div>
                <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.875rem", lineHeight: 1.5, color: "#FFFFFF", margin: "0.85rem 0 0" }}>
                  {c.stake(LIFE_MAX - ROUNDS.filter((r) => r.res === "O").length, LIFE_MAX - ROUNDS.filter((r) => r.res === "Y").length)}
                </p>
                <div className="dm2-sides" style={{ marginTop: "auto", paddingTop: "1.25rem" }}>
                  {[true, false].map((mine) => (
                    <div key={String(mine)} className={mine ? "dm2-side" : "dm2-side dm2-side-r"} style={!mine ? { borderLeftColor: "rgba(255,255,255,0.2)" } : undefined}>
                      <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.59375rem", letterSpacing: "0.16em", color: "rgba(255,255,255,0.6)" }}>{mine ? c.yourCard : c.theirCard}</div>
                      {mine ? (
                        <div style={{ marginTop: 6 }}>
                          <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "-0.02em" }}>{c.overdrive}</div>
                          <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: "0.75rem", color: "#8FA8FF", marginTop: 2 }}>{c.overdriveFx}</div>
                        </div>
                      ) : (
                        <div style={{ marginTop: 6, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                          <span className="dm2-facedown" aria-hidden="true" />
                          <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", marginTop: 6 }}>{c.secret}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Le rythme de la journée */}
        <div className="dm2-rhythm">
          {m.stats.map((s, i) => (
            <div key={i} className="dm2-rhythm-item" style={fadeUp(boardVisible, 500 + i * 120)}>
              <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.0625rem", letterSpacing: "-0.02em", color: i === 2 ? BLUE : INK }}>{s.n}</div>
              <div style={{ fontSize: "0.875rem", color: "rgba(11,17,22,0.55)", lineHeight: 1.55, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/** Les pts du round comptent jusqu'à leur valeur quand la carte se dévoile (comme les chiffres de l'app). */
function Count({ to, on, fmt }: { to: number; on: boolean; fmt: (n: number) => string }) {
  const [v, setV] = useState(on ? to : 0);
  useEffect(() => {
    const instant = !on || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now(), D = 650;
    const f = (t: number) => {
      const k = instant ? 1 : Math.min(1, (t - t0) / D);
      setV(on ? Math.round(to * (1 - Math.pow(1 - k, 3))) : 0);
      if (k < 1) raf = requestAnimationFrame(f);
    };
    let raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
  }, [on, to]);
  return <>{fmt(v)}</>;
}

function CardHead({ label, pill, pillColor, pillBg, white, live }: { label: string; pill: string; pillColor: string; pillBg: string; white: boolean; live?: boolean }) {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
      <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.59375rem", letterSpacing: "0.2em", color: white ? "rgba(255,255,255,0.72)" : MUTED }}>{label}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 8px", borderRadius: 9, backgroundColor: pillBg, fontFamily: FONT, fontWeight: 800, fontSize: "0.625rem", letterSpacing: "0.08em", color: pillColor }}>
        {live && <span className="dm2-livedot" style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: pillColor }} />}
        {pill}
      </span>
    </div>
  );
}
