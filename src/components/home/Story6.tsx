"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

// Un chapitre de l'histoire (accueil, passe premium du 21/11) : à gauche (ou à droite) un petit repère numéroté en
// capitales mono (« 01 · 8h »), un grand titre serré, une ligne à l'encre, et un grand chiffre très clair en fond ;
// de l'autre côté, une « scène » arrondie (dégradé blanc → fond de l'app, scanlines fines) avec, si besoin, un grand
// sportif en scanlines (art du hero) en encre très pâle, et le téléphone qui déborde de la scène et se redresse à l'arrivée.
// pin : la section est plus haute que l'écran et son contenu reste épinglé ; `children` reçoit alors la progression
// du défilement (0 → 1) pour changer l'écran du téléphone (ordinateur seulement, jamais si les animations sont réduites).
function useMedia(q: string) {
  return useSyncExternalStore(
    (cb) => { const m = window.matchMedia(q); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); },
    () => window.matchMedia(q).matches,
    () => false,
  );
}

export default function Story6({ id, kicker, big, title, line, children, reverse = false, extra, pin = false }: {
  id: string; kicker: string; big?: string; title: [ReactNode, ReactNode]; line: ReactNode; reverse?: boolean; extra?: ReactNode;
  pin?: boolean;
  children: ReactNode | ((progress: number, pinned: boolean) => ReactNode);
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const { ref: visRef, visible: visIn } = useInView<HTMLDivElement>(0.25, { oneShot: true });
  const wide = useMedia("(min-width: 901px)");
  const reduce = useMedia("(prefers-reduced-motion: reduce)");
  const pinned = pin && wide && !reduce;
  const secRef = useRef<HTMLElement>(null);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    if (!pinned) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = secRef.current; if (!el) return;
        const r = el.getBoundingClientRect(), span = r.height - window.innerHeight;
        setProg(Math.max(0, Math.min(1, -r.top / Math.max(1, span))));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, [pinned]);

  const content = typeof children === "function" ? children(pinned ? prog : 1, pinned) : children;
  return (
    <section ref={secRef} id={id} className={`st6${reverse ? " is-rev" : ""}${pinned ? " is-pin" : ""}`}>
      <div className="st6-sticky">
        <div className="p5-wrap st6-grid">
          <div ref={ref} className={`st6-txt${visible ? " is-in" : ""}`}>
            {big && <span className="st6-big" aria-hidden="true">{big}</span>}
            <p className="st6-kick">{kicker}</p>
            <h2 className="st6-h2"><span>{title[0]}</span> <span>{title[1]}</span></h2>
            <p className="st6-line">{line}</p>
            {extra}
          </div>
          <div ref={visRef} className={`st6-vis${visIn ? " is-in" : ""}`}>
            {/* Rien derrière le téléphone (règle du 21/11) : ni scène, ni art, ni texture. */}
            <div className="st6-dev">{content}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
