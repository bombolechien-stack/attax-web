"use client";

import { useT } from "@/lib/i18n";
import { useInView, fadeUp, scaleIn, clipReveal, slideRight } from "@/hooks/useInView";

const BLUE = "#0443FD";
const RED = "#EC0420";
const INK = "#0B1116";

// Les 6 rounds passés d'un match d'exemple (Y = toi, O = adversaire), puis le round final ce soir.
const ROUNDS: ("Y" | "O")[] = ["Y", "O", "Y", "Y", "O", "Y"];

/** Barre de PV façon app : segments, bleu à gauche (toi) ou rouge à droite (adversaire). */
function HpBar({ color, filled, total, align, visible, delay }: { color: string; filled: number; total: number; align: "left" | "right"; visible: boolean; delay: number }) {
  return (
    <div style={{ display: "flex", gap: 3, flexDirection: align === "left" ? "row" : "row-reverse" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: 6, borderRadius: 3,
          backgroundColor: i < filled ? color : "rgba(11,17,22,0.08)",
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: align === "left" ? "left" : "right",
          transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + i * 40}ms`,
        }} />
      ))}
    </div>
  );
}

export default function DailyMatch() {
  const t = useT();
  const m = t.dailyMatch;
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: cardRef, visible: cardVisible } = useInView<HTMLDivElement>(0.12, { oneShot: true });
  const { ref: statsRef, visible: statsVisible } = useInView<HTMLDivElement>(0.1);
  const yourLost = ROUNDS.filter((r) => r === "O").length;
  const oppLost = ROUNDS.filter((r) => r === "Y").length;

  return (
    <section id="daily-match" className="dm-section" style={{ backgroundColor: "#F3F5F8", padding: "8rem 2rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

        <div ref={headerRef} style={{ marginBottom: "5rem" }}>
          <span style={{ ...fadeUp(headerVisible, 0), display: "block", marginBottom: "1.5rem" }} className="section-label">{m.label}</span>
          <div className="dm-header" style={{ display: "flex", alignItems: "flex-end", gap: "4rem", flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.055em", lineHeight: 0.95, margin: 0 }}>
              <div><span style={clipReveal(headerVisible, 80)}>{m.h2[0]}</span></div>
              <div><span style={{ ...clipReveal(headerVisible, 220), color: BLUE }}>{m.h2[1]}</span></div>
            </h2>
            <p style={{ ...slideRight(headerVisible, 350), fontSize: "1.0625rem", color: "#777", lineHeight: 1.75, maxWidth: "440px", margin: 0 }}>{m.subtitle}</p>
          </div>
        </div>

        {/* Carte de match, au format de la page Match de l'app (fond clair, bleu = toi, rouge = adversaire) */}
        <div ref={cardRef} style={{ display: "flex", justifyContent: "center" }}>
          <div className="dm-card" style={{
            ...scaleIn(cardVisible, 0, 0.96),
            width: "min(820px, 100%)",
            backgroundColor: "#ffffff",
            borderRadius: 28,
            padding: "2.25rem 2.5rem 2.5rem",
            border: "1px solid rgba(11,17,22,0.06)",
          }}>
            <div className="dm-card-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: RED }} />
                <span className="pin-mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", color: RED }}>{m.live}</span>
                <span className="pin-mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", color: "rgba(11,17,22,0.4)" }}>· {m.match}</span>
              </div>
              <span className="pin-mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", color: "rgba(11,17,22,0.4)" }}>{m.resolves}</span>
            </div>

            <div className="dm-players" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "end", gap: "1.5rem", marginBottom: "2.75rem" }}>
              <div>
                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: INK, letterSpacing: "-0.04em", lineHeight: 1 }}>{m.you}</div>
                <div className="pin-mono" style={{ fontSize: "0.625rem", letterSpacing: "0.16em", color: BLUE, margin: "0.6rem 0 0.9rem" }}>{m.card_you}</div>
                <HpBar color={BLUE} filled={7 - yourLost} total={7} align="left" visible={cardVisible} delay={250} />
              </div>
              <div className="pin-mono" style={{ fontSize: "0.75rem", color: "rgba(11,17,22,0.25)", paddingBottom: 2 }}>VS</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: INK, letterSpacing: "-0.04em", lineHeight: 1 }}>{m.opp}</div>
                <div className="pin-mono" style={{ fontSize: "0.625rem", letterSpacing: "0.16em", color: "rgba(11,17,22,0.4)", margin: "0.6rem 0 0.9rem" }}>{m.card_opp}</div>
                <HpBar color={RED} filled={7 - oppLost} total={7} align="right" visible={cardVisible} delay={350} />
              </div>
            </div>

            <div className="pin-mono" style={{ fontSize: "0.625rem", letterSpacing: "0.2em", color: "rgba(11,17,22,0.4)", marginBottom: "0.9rem" }}>{m.rounds_label}</div>
            <div className="dm-rounds" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
              {m.days.map((d, i) => {
                const isFinal = i === 6;
                const w = ROUNDS[i];
                const color = w === "Y" ? BLUE : RED;
                return (
                  <div key={d} style={{
                    ...fadeUp(cardVisible, 400 + i * 70),
                    borderRadius: 12, padding: "0.9rem 0 0.8rem", textAlign: "center",
                    backgroundColor: isFinal ? "#ffffff" : "transparent",
                    border: isFinal ? `1.5px dashed ${INK}` : "1px solid rgba(11,17,22,0.08)",
                  }}>
                    <div className="pin-mono" style={{ fontSize: "0.5625rem", letterSpacing: "0.14em", color: "rgba(11,17,22,0.45)", marginBottom: 10 }}>{isFinal ? m.final : d}</div>
                    {isFinal ? (
                      <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: INK, height: 14, lineHeight: "14px" }}>2 {m.hp}</div>
                    ) : (
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: color }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(11,17,22,0.55)", lineHeight: 1.6, margin: "1.5rem 0 0" }}>{m.final_note}</p>
          </div>
        </div>

        <div ref={statsRef} className="dm-stats" style={{ display: "flex", justifyContent: "center", gap: "0", marginTop: "5rem", borderTop: "1px solid rgba(11,17,22,0.09)" }}>
          {m.stats.map((s, i) => (
            <div key={s.n} className="dm-stat" style={{ ...fadeUp(statsVisible, i * 80), flex: 1, padding: "2.5rem 2rem 0", textAlign: "center", borderLeft: i > 0 ? "1px solid rgba(11,17,22,0.09)" : "none" }}>
              <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.03em" }}>{s.n}</div>
              <div style={{ fontSize: "0.8125rem", color: "#999", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
