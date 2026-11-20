"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang, useT } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal } from "@/hooks/useInView";

// « Une journée avec Attax » (passe 3) : le récit de la journée piloté par le défilement. À gauche, les moments de la
// journée (10h, 13h, la journée, 19h, 21h30) défilent ; à droite, UN téléphone collant dont l'écran se fond vers la vraie
// capture de l'app du moment (les rounds qui se dévoilent, la carte jouée, l'activité, le round final, le classement),
// avec la frise de la journée au-dessus. Sur téléphone, chaque moment montre sa capture sous son texte.
// Captures : public/screens/story/<lang>/*.webp (écrans réels de l'app, barre d'état retirée).

const SHOTS = ["rounds", "card", "activity", "final", "ranking"] as const;

export default function HowItWorks() {
  const t = useT();
  const h = t.howItWorks;
  const { lang } = useLang();
  const { ref: headerRef, visible: headerVisible } = useInView<HTMLDivElement>(0.1);
  const steps = h.steps.slice(1); // 0 = « Connecte » (une fois), présenté en introduction
  const connect = h.steps[0];
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // L'étape active = celle dont le texte croise le milieu de l'écran.
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="p-section story-section">
      <div className="p-wrap">
        <div ref={headerRef} className="p-head">
          <div>
            <p className="p-label" style={fadeUp(headerVisible, 0)}>{h.label}</p>
            <h2 className="p-h2">
              <div><span style={clipReveal(headerVisible, 0)}>{h.h2[0]}</span></div>
              <div><span style={clipReveal(headerVisible, 120)}>{h.h2[1]}</span></div>
            </h2>
          </div>
          <div className="story-connect" style={fadeUp(headerVisible, 240)}>
            <p className="p-label" style={{ marginBottom: "0.5rem" }}>{connect.time} · {connect.title.replace(/\.$/, "")}</p>
            <p className="p-body">{connect.body}</p>
          </div>
        </div>

        <div className="story">
          <div className="story-steps">
            {steps.map((s, i) => (
              <div key={i} ref={(el) => { refs.current[i] = el; }} data-i={i} className={i === active ? "story-step is-on" : "story-step"}>
                <p className="story-time">{s.time}</p>
                <h3 className="story-title">{s.title}</h3>
                <p className="p-body story-body">{s.body}</p>
                {/* Téléphone : la capture sous le texte */}
                <div className="story-inline">
                  <div className="story-phone">
                    <div className="story-screen">
                      <Image src={`/screens/story/${lang}/${SHOTS[i]}.webp`} alt={s.title} width={522} height={1017} sizes="70vw" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="story-stick" aria-hidden="true">
            <div className="story-sticky">
              <div className="story-timeline">
                {steps.map((s, i) => (
                  <span key={i} className={i === active ? "is-on" : i < active ? "is-past" : undefined}>
                    <i />{s.time}
                  </span>
                ))}
              </div>
              <div className="story-phone story-phone-lg">
                <div className="story-screen">
                  {steps.map((s, i) => (
                    <Image key={i} src={`/screens/story/${lang}/${SHOTS[i]}.webp`} alt="" width={522} height={1017} sizes="340px"
                      loading={i === 0 ? "eager" : "lazy"} style={{ opacity: i === active ? 1 : 0 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
