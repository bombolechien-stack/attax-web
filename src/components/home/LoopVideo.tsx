"use client";

import { useEffect, useRef, useState } from "react";

// Vidéo de motion design en boucle (22/11, accord du propriétaire) : muette, sans contrôles, chargée seulement à
// l'approche de l'écran (preload none avant), en pause hors écran, image d'attente = première image ; si l'utilisateur
// réduit les animations, seule l'image d'attente s'affiche.
export default function LoopVideo({ mp4, webm, poster, label, ratio }: { mp4: string; webm?: string; poster: string; label: string; ratio: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [still, setStill] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStill(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setNear(true); v.play().catch(() => {}); } else v.pause();
    }, { rootMargin: "200px 0px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  // 22/11 : les <source> n'arrivent qu'à l'approche ; ajouter des <source> ne recharge pas la vidéo → load() puis play()
  // (sans ça, la vidéo restait figée sur son image d'attente : « je ne vois pas le motion design »).
  useEffect(() => {
    const v = ref.current;
    if (!near || !v) return;
    v.load();
    v.play().catch(() => {});
  }, [near]);
  if (still) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={label} style={{ display: "block", width: "100%", aspectRatio: ratio }} />;
  }
  return (
    <video ref={ref} muted loop playsInline preload={near ? "auto" : "none"} poster={poster} aria-label={label}
      style={{ display: "block", width: "100%", aspectRatio: ratio, objectFit: "cover" }}>
      {near && webm && <source src={webm} type="video/webm" />}
      {near && <source src={mp4} type="video/mp4" />}
    </video>
  );
}
