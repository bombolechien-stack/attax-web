"use client";

import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";

// « Une journée avec Attax » (version premium, 20/11) : 6 cartes arrondies, une par moment de la journée. En haut une
// photo de campagne ou une vraie capture de l'app (chaque écran une seule fois sur la page), puis l'heure, le titre et
// une phrase. Fond clair, filets fins, pas d'effets.

type Visual = { photo: string; pos?: string } | { app: string; panel?: boolean };
const VISUALS: Visual[] = [
  { photo: "/images/runsunrise.jpg", pos: "50% 60%" },        // Connecte : la course du matin, la montre au poignet
  { photo: "/images/photo-runners.jpg", pos: "50% 40%" },     // Le match s'ouvre : un nouvel adversaire
  { app: "card-overdrive", panel: true },                              // Joue ta carte : Overdrive (capture réelle)
  { app: "4" },                                                // Bouge : l'écran Activité (capture réelle)
  { photo: "/images/fatigue.jpg", pos: "50% 35%" },          // Le round final : le dernier effort de la journée
  { app: "5" },                                                // Soir de combat : le classement après le verdict
];

export default function HowItWorks() {
  const t = useT();
  const h = t.howItWorks;
  const { lang } = useLang();
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const { ref: gridRef, visible: gridVisible } = useInView<HTMLDivElement>(0.08, { oneShot: true });

  return (
    <section id="how-it-works" className="p-section">
      <div className="p-wrap">
        <div ref={headerRef} className="p-head">
          <div>
            <p className="p-label" style={fadeUp(headerVisible, 0)}>{h.label}</p>
            <h2 className="p-h2">
              <div><span style={clipReveal(headerVisible, 0)}>{h.h2[0]}</span></div>
              <div><span style={clipReveal(headerVisible, 120)}>{h.h2[1]}</span></div>
            </h2>
          </div>
          <p className="p-body" style={{ ...fadeUp(headerVisible, 240), maxWidth: 340, whiteSpace: "pre-line" }}>{h.subtitle}</p>
        </div>

        <div ref={gridRef} className="hiw-grid">
          {h.steps.map((s, i) => {
            const v = VISUALS[i];
            return (
              <article key={i} className="hiw-card" style={fadeUp(gridVisible, 80 * i)}>
                <div className={"photo" in v ? "hiw-media" : "hiw-media hiw-media-app"}>
                  {"photo" in v ? (
                    <Image src={v.photo} alt="" fill sizes="(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 380px" className="p-photo" style={{ objectFit: "cover", objectPosition: v.pos }} />
                  ) : (
                    <Image src={`/screens/app/${lang}/${v.app}.webp`} alt={s.title} width={v.panel ? 500 : 560} height={v.panel ? 400 : 1107} sizes="300px"
                      className={v.panel ? "hiw-app-panel" : "hiw-app-phone"} />
                  )}
                  <span className="hiw-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="p-label" style={{ margin: "1.25rem 0 0.4rem" }}>{s.time}</p>
                <h3 className="p-h3">{s.title}</h3>
                <p className="p-body" style={{ marginTop: "0.5rem" }}>{s.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
