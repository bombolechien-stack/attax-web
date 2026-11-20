"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, slideRight } from "@/hooks/useInView";
import PLAN from "./matchFight.json";

// « 7 jours. 7 rounds. » = l'écran Match de l'app pendant le combat (app/(tabs)/match.tsx + révélation de 21h30,
// captures _captures_app/14_*, 19b_*, 19c_*) : en haut les avatars, le round et les barres de vie (components/match/
// HealthBars.tsx : capsule chromée, dégradé du bord vers le centre, coup jaune puis barre noire, 7 tirets), l'écart du
// round ; au centre les deux boxeurs de l'app en très gros plan (bleu à gauche, rouge à droite) ; en bas les pts de
// chacun, l'enjeu et l'état du round. Les rounds se jouent un par un au rythme des coups : la vidéo
// (public/videos/match-fight-*, rendue par scripts/fight-night-video/boxers-match.mjs avec le moteur de l'app) et la page
// partagent la même chorégraphie (matchFight.json) ; à l'impact du gagnant, le perdant perd 1 PV (2 au round final).
// Chacun part de 7 PV ; avant le final 4 PV partout ; le final se gagne 4 PV à 2 ; K.O. seulement à 0 PV ; jamais de nul.

type Round = { winner: "Y" | "O"; strike: string; feint: string; start: number; at: number; impact: number; y: number; o: number; final?: boolean };
const ROUNDS = PLAN.rounds as Round[];
const DUR = PLAN.duration, VERDICT = PLAN.verdictAt, HP0 = 7;
const BLUE = "#0443FD", RED = "#EC0420", INK = "#0B1116", SUB = "#6B7280", MUTED = "#94A3B8";
const FONT = "var(--font-manrope), var(--font-jakarta), sans-serif";
const G_ME = "linear-gradient(90deg, #0024c8 0%, #0443FD 45%, #4b78ff 82%, #9bb1ff 100%)";
const G_OPP = "linear-gradient(270deg, #a8001a 0%, #EC0420 45%, #ff3a55 82%, #ffa1a9 100%)";

const COPY = {
  en: {
    you: "YOU", opp: "SOPHIE", rank: "Pro II", match: "MATCH 6", round: "ROUND", final: "FINAL", stakeSub: "2 HP AT STAKE",
    days: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tonight"],
    ahead: "pts ahead", behind: "pts behind", wins: "WINS THE ROUND", atStake: "AT STAKE", status: "ROUND STATUS",
    st: { blue: "BLUE EDGE", red: "RED EDGE", close: "CLOSE", bw: "BLUE TAKES IT", rw: "RED TAKES IT" },
    // Le commentaire du combat : « You throw… » / « Sophie throws… ».
    say: (who: "Y" | "O", move: string) => `${who === "Y" ? "You" : "Sophie"} ${({ jab: ["throw a jab", "throws a jab"], cross: ["throw a cross", "throws a cross"], hook: ["land a hook", "lands a hook"], body_shot: ["dig a body shot", "digs a body shot"], lowkick: ["fire a low kick", "fires a low kick"], overdrive: ["unleash a flurry", "unleashes a flurry"] } as Record<string, string[]>)[move]?.[who === "Y" ? 0 : 1] ?? ""}`,
    dodge: (who: "Y" | "O") => (who === "Y" ? "you slip it" : "Sophie slips it"), winner: "WINNER", verdict: "Wins the match, 4 HP to 2.", ready: "The match starts",
  },
  fr: {
    you: "TOI", opp: "SOPHIE", rank: "Pro II", match: "MATCH 6", round: "ROUND", final: "FINAL", stakeSub: "2 PV EN JEU",
    days: ["Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Ce soir"],
    ahead: "pts d'avance", behind: "pts de retard", wins: "REMPORTE LE ROUND", atStake: "EN JEU", status: "ÉTAT DU ROUND",
    st: { blue: "AVANTAGE BLEU", red: "AVANTAGE ROUGE", close: "SERRÉ", bw: "LE BLEU L'EMPORTE", rw: "LE ROUGE L'EMPORTE" },
    say: (who: "Y" | "O", move: string) => `${who === "Y" ? "Tu" : "Sophie"} ${({ jab: ["envoies un jab", "envoie un jab"], cross: ["envoies un direct", "envoie un direct"], hook: ["places un crochet", "place un crochet"], body_shot: ["frappes au corps", "frappe au corps"], lowkick: ["lances un low kick", "lance un low kick"], overdrive: ["déchaînes une rafale", "déchaîne une rafale"] } as Record<string, string[]>)[move]?.[who === "Y" ? 0 : 1] ?? ""}`,
    dodge: (who: "Y" | "O") => (who === "Y" ? "tu esquives" : "Sophie esquive"), winner: "VAINQUEUR", verdict: "Remporte le match, 4 PV à 2.", ready: "Le match commence",
  },
};

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const eo = (u: number) => 1 - Math.pow(1 - u, 3);
const eio = (u: number) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);

// Media queries lues sans effet (pas de rendu en double au chargement).
function useMedia(q: string) {
  return useSyncExternalStore(
    (cb) => { const m = window.matchMedia(q); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); },
    () => window.matchMedia(q).matches,
    () => false,
  );
}

/** Vie d'un côté à l'instant t, avec le coup jaune : le jaune file vers la nouvelle vie, puis la barre noire le rattrape. */
function lifeAt(side: "Y" | "O", t: number) {
  let life = HP0, front = HP0, edge = HP0;
  for (const r of ROUNDS) {
    if (r.winner === side || t < r.impact) continue;
    const loss = r.final ? 2 : 1, from = life, to = life - loss, dt = t - r.impact;
    life = to;
    front = from + (to - from) * eo(clamp(dt / 0.42));
    edge = from + (to - from) * eio(clamp((dt - 0.54) / 0.34));
  }
  return { life, front, edge };
}

/** La barre de vie de l'app (HealthBars) : capsule chromée, couleur du bord vers le centre, jaune du coup, barre noire. */
function HpBar({ side, t, hp }: { side: "me" | "opp"; t: number; hp: string }) {
  const { life, front, edge } = lifeAt(side === "me" ? "Y" : "O", t);
  const me = side === "me", ef = edge / HP0, ff = front / HP0;
  return (
    <div className="mx-bar-wrap">
      <div className="mx-bar">
        <span className="mx-bar-fill" style={{ background: me ? G_ME : G_OPP, [me ? "left" : "right"]: 0, width: `${ef * 100}%` }} />
        {ff < ef - 0.001 && <span className="mx-bar-hit" style={{ [me ? "left" : "right"]: `${ff * 100}%`, width: `${(ef - ff) * 100}%` }} />}
        <span className="mx-bar-sheen" />
      </div>
      {ef < 0.999 && <span className="mx-notch" style={{ [me ? "left" : "right"]: `${ef * 100}%` }} />}
      <div className="mx-ticks">{Array.from({ length: HP0 - 1 }, (_, k) => <i key={k} style={{ left: `${((k + 1) / HP0) * 100}%` }} />)}</div>
      <div className="mx-hp" style={{ color: me ? BLUE : RED, textAlign: me ? "left" : "right" }}>
        <span key={life}>{life}</span> {hp}
      </div>
    </div>
  );
}

function Fighter({ side, name, rank }: { side: "me" | "opp"; name: string; rank: string }) {
  const me = side === "me";
  return (
    <div className="mx-fighter" style={{ alignItems: "center" }}>
      <span className="mx-avatar" style={{ borderColor: me ? BLUE : RED }}>
        <Image src={`/match/${me ? "you" : "sophie"}.webp`} alt="" width={96} height={96} />
      </span>
      <span className="mx-name">{name} <b style={{ color: me ? BLUE : RED }}>#{me ? 1 : 2}</b></span>
      <span className="mx-rank"><i />{rank}</span>
    </div>
  );
}

export default function DailyMatch() {
  const t = useT();
  const { lang } = useLang();
  const m = t.dailyMatch;
  const c = COPY[lang];
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: screenRef, visible: onScreen } = useInView<HTMLDivElement>(0.12);
  const { ref: nearRef, visible: near } = useInView<HTMLDivElement>(0.01, { oneShot: true });
  const tall = useMedia("(max-width: 760px)");
  const reduce = useMedia("(prefers-reduced-motion: reduce)");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(VERDICT + 1.2); // avant le lancement : l'image du verdict (= affiche de la vidéo)

  // L'horloge du match = la vidéo (les PV tombent à l'instant exact du coup) ; sinon une horloge à elle.
  useEffect(() => {
    if (reduce || !onScreen) return;
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
    let raf = 0, last = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return;
      last = now;
      const vid = videoRef.current;
      const cur = vid && vid.readyState >= 2 && !vid.paused ? vid.currentTime : ((now - t0) / 1000) % DUR;
      setTime(cur);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); v?.pause(); };
  }, [onScreen, reduce, near, tall]);

  const ri = ROUNDS.reduce((k, r, i) => (time >= r.start - 0.3 ? i : k), -1);
  const r = ri >= 0 ? ROUNDS[ri] : null;
  const done = r ? time >= r.impact : false;
  const k = r ? eo(clamp((time - r.start) / Math.max(0.1, r.impact - r.start))) : 0;
  const yPts = r ? Math.round(r.y * k) : 0, oPts = r ? Math.round(r.o * k) : 0, diff = yPts - oPts;
  const isFinal = !!r?.final;
  const verdict = time >= VERDICT;
  const loser = r ? (r.winner === "Y" ? "O" : "Y") : "Y";
  const caption = !r ? c.ready
    : time >= r.at ? `${c.say(r.winner, r.strike)}.`
      : time >= r.start + 0.35 ? `${c.say(loser, r.feint)}, ${c.dodge(r.winner)}.` : `${c.round} ${ri + 1} / 7`;
  const status = !r ? c.st.close : done ? (r.winner === "Y" ? c.st.bw : c.st.rw) : Math.abs(diff) < 20 ? c.st.close : diff > 0 ? c.st.blue : c.st.red;
  const statusCol = !r ? MUTED : done ? (r.winner === "Y" ? BLUE : RED) : Math.abs(diff) < 20 ? SUB : diff > 0 ? BLUE : RED;
  const nf = (n: number) => n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US");
  const fade = reduce ? 1 : clamp(Math.min((DUR - time) / 0.45, time / 0.3 + 0.2));
  const fmt = tall ? "tall" : "wide";

  return (
    <section id="daily-match" className="mx-section">
      <div style={{ maxWidth: "76rem", margin: "0 auto" }}>
        <div ref={headerRef} style={{ marginBottom: "3.5rem" }}>
          <span style={{ ...fadeUp(headerVisible, 0), display: "block", marginBottom: "1.5rem" }} className="section-label">{m.label}</span>
          <div className="dm-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "4rem", flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.95, margin: 0 }}>
              <div><span style={clipReveal(headerVisible, 80)}>{m.h2[0]}</span></div>
              <div><span style={{ ...clipReveal(headerVisible, 220), color: BLUE }}>{m.h2[1]}</span></div>
            </h2>
            <p style={{ ...slideRight(headerVisible, 350), fontSize: "1.0625rem", color: "rgba(11,17,22,0.58)", lineHeight: 1.75, maxWidth: "460px", margin: 0 }}>{m.subtitle}</p>
          </div>
        </div>
      </div>

      {/* L'écran Match de l'app */}
      <div ref={screenRef} className="mx-screen" style={{ fontFamily: FONT }}>
        <div ref={nearRef} className="mx-top">
          <div className="mx-versus">
            <Fighter side="me" name={c.you} rank={c.rank} />
            <div className="mx-center">
              <span className="mx-kick">{c.match}</span>
              <span className="mx-kick" style={{ marginTop: 10 }}>{c.round}</span>
              <span key={isFinal ? "f" : ri} className="mx-roundnum">{isFinal ? c.final : r ? ri + 1 : 1}</span>
              <span className="mx-kick" style={{ color: isFinal ? RED : SUB }}>{isFinal ? c.stakeSub : r ? c.days[ri].toUpperCase() : c.days[0].toUpperCase()}</span>
            </div>
            <Fighter side="opp" name={c.opp} rank={c.rank} />
          </div>
          <div className="mx-bars">
            <HpBar side="me" t={time} hp={m.hp} />
            <HpBar side="opp" t={time} hp={m.hp} />
          </div>
          {/* L'écart du round, comme « 194 pts behind » de l'app */}
          <div className="mx-gap" style={{ opacity: verdict ? 0 : 1 }}>
            <span className="mx-kick">{isFinal ? `${c.final} ${c.round}` : `${c.round} ${Math.max(1, ri + 1)} / 7`}  ·  {r ? c.days[ri].toUpperCase() : ""}</span>
            <span className="mx-gap-v" style={{ color: diff >= 0 ? BLUE : RED }}>{nf(Math.abs(diff))} {diff >= 0 ? c.ahead : c.behind}</span>
            <span className="mx-gap-bar"><i style={{ flex: Math.max(1, yPts), background: BLUE }} /><i style={{ flex: Math.max(1, oPts), background: RED }} /></span>
          </div>
        </div>

        {/* Les deux boxeurs, en très gros plan */}
        <div className={`mx-stage mx-stage-${fmt}`} style={{ opacity: fade }}>
          {near && !reduce ? (
            <video key={fmt} ref={videoRef} muted loop playsInline preload="none" poster={`/videos/match-fight-${fmt}-poster.jpg`} aria-hidden="true">
              <source src={`/videos/match-fight-${fmt}.webm`} type="video/webm" />
              <source src={`/videos/match-fight-${fmt}.mp4`} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/videos/match-fight-${fmt}-poster.jpg`} alt="" aria-hidden="true" loading="lazy" />
          )}

          {/* Le verdict, comme « WINNER JOHNNY » de l'app */}
          <div className="mx-verdict" style={{ opacity: verdict ? 1 : 0, transform: verdict ? "none" : "translateY(10px) scale(0.98)" }}>
            <span className="mx-kick" style={{ letterSpacing: "0.4em", color: SUB }}>{c.winner}</span>
            <span className="mx-verdict-name">{c.you}</span>
            <span className="mx-verdict-sub">{c.verdict}</span>
          </div>
        </div>

        {/* En bas : les pts de chacun, l'enjeu, l'état du round */}
        <div className="mx-bottom">
          <div className="mx-score" style={{ opacity: verdict ? 0.35 : 1 }}>
            <span className="mx-kick" style={{ color: BLUE }}>{c.you}{done && r?.winner === "Y" && !verdict ? `  ·  ${c.wins}` : ""}</span>
            <span className="mx-pts" style={{ color: BLUE }}>{nf(yPts)}<small>pts</small></span>
          </div>
          <div className="mx-mid">
            <span key={caption} className="mx-caption">{verdict ? c.verdict : caption}</span>
            <div className="mx-rounds" aria-hidden="true">
              {ROUNDS.map((x, i) => {
                const played = time >= x.impact;
                return <i key={i} className={x.final ? "is-final" : undefined} style={{ background: played ? (x.winner === "Y" ? BLUE : RED) : i === ri ? INK : "#D5DBE4" }} />;
              })}
            </div>
            <div className="mx-meta">
              <span><b>{c.atStake}</b> {isFinal ? 2 : 1} {m.hp}</span>
              <span><b>{c.status}</b> <em style={{ color: statusCol }}>{status}</em></span>
            </div>
          </div>
          <div className="mx-score" style={{ alignItems: "flex-end", textAlign: "right", opacity: verdict ? 0.35 : 1 }}>
            <span className="mx-kick" style={{ color: RED }}>{done && r?.winner === "O" && !verdict ? `${c.wins}  ·  ` : ""}{c.opp}</span>
            <span className="mx-pts" style={{ color: RED }}>{nf(oPts)}<small>pts</small></span>
          </div>
        </div>
      </div>

      {/* Le rythme de la journée */}
      <div className="dm2-rhythm" style={{ maxWidth: "76rem", margin: "2.75rem auto 0" }}>
        {m.stats.map((s, i) => (
          <div key={i} className="dm2-rhythm-item" style={fadeUp(headerVisible, 500 + i * 120)}>
            <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.0625rem", letterSpacing: "-0.02em", color: i === 2 ? BLUE : INK }}>{s.n}</div>
            <div style={{ fontSize: "0.875rem", color: "rgba(11,17,22,0.55)", lineHeight: 1.55, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
