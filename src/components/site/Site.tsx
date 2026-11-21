// Composants partagés des pages du site (21/11) : le système de l'accueil appliqué partout. Styles : src/app/home-p5.css
// (classes .p5 / .h7-* / .st6-* de l'accueil) + src/app/site-pages.css (classes .sp-*).
"use client";

import "@/app/home-p5.css";
import "@/app/site-pages.css";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PageNavbar from "@/components/PageNavbar";
import ArenaSection from "@/components/live/ArenaSection";
import AppPhone from "@/components/home/AppPhone";
import { AppleIcon, PlayIcon } from "@/components/live/StoreIcons";
import { useInView } from "@/hooks/useInView";
import ScanAthlete from "@/components/scan/ScanAthlete";
import type { AthleteName } from "@/components/scan/athletes";

export { AppleIcon, PlayIcon, AppPhone };

/** Enveloppe de page : fond de l'app, variables et pied de page de l'accueil (body:has(.h7-page)). */
export function SitePage({ children }: { children: React.ReactNode }) {
  return <div className="pm p5 h7-page sp">{children}</div>;
}

/** En-tête de page : la carte sombre arrondie du hero de l'accueil (12 px de marge, rayon 24 px), sans vidéo.
 *  poster = l'image scanlines des sportifs du hero (sinon, seulement la trame fine). */
export function PageHero({ kick, title, lead, lead2, meta, children, poster = false, compact = false, stats, phone, bg, full = false }: {
  kick?: React.ReactNode; title: React.ReactNode; lead?: React.ReactNode; lead2?: React.ReactNode; meta?: React.ReactNode;
  children?: React.ReactNode; poster?: boolean; compact?: boolean; stats?: readonly { title: string; sub?: string }[];
  /** phone = capture réelle (public/screens/story/...) dont le haut monte du bord bas de la carte, comme sur l'accueil */
  phone?: { src: string; alt: string; dark?: boolean };
  /** fond d'origine de l'en-tête de la page (photo, athlète en scanlines, dégradé) : gardé tel quel (accord du 21/11) */
  bg?: React.ReactNode; full?: boolean;
}) {
  return (
    <div className="sp-hero-wrap">
      <div className={`sp-hero${compact ? " is-compact" : ""}${phone ? " has-phone" : ""}${full ? " is-full" : ""}${bg ? " has-bg" : ""}`}>
        {bg && <div className="sp-hero-bg" aria-hidden="true">{bg}</div>}
        {!bg && poster && (
          <div className="sp-hero-poster" aria-hidden="true">
            <Image src="/videos/hero-scan-poster.jpg" alt="" fill priority sizes="(max-width: 860px) 100vw, 72vw" />
          </div>
        )}
        {!bg && <div className="sp-hero-scan" aria-hidden="true" />}
        {!bg && <div className="sp-hero-shade" aria-hidden="true" />}
        <div className="sp-hero-nav"><PageNavbar pill /></div>
        <div className="sp-hero-in">
          {kick && <p className="hero-kick6 sp-anim">{kick}</p>}
          <h1 className="sp-h1 sp-anim">{title}</h1>
          {lead && <p className="sp-hero-lead sp-anim">{lead}</p>}
          {lead2 && <p className="sp-hero-lead sp-anim">{lead2}</p>}
          {children && <div className="h7-ctas sp-anim">{children}</div>}
          {meta && <p className="sp-hero-meta sp-anim">{meta}</p>}
          {stats && (
            <div className="sp-hero-stats sp-anim">
              {stats.map((s) => <div key={s.title}><b>{s.title}</b>{s.sub && <span>{s.sub}</span>}</div>)}
            </div>
          )}
        </div>
        {phone && <div className="sp-hero-phone"><AppPhone src={phone.src} alt={phone.alt} dark={phone.dark} /></div>}
      </div>
    </div>
  );
}

/** Fond photo d'origine des en-têtes (photo + trame scan-overlay + deux dégradés), valeurs reprises de chaque page. */
export function PhotoBg({ src, alt, pos, c = "10,10,10", a = [0.96, 0.75, 0.25], b = 0.92, priority = true }: { src: string; alt: string; pos: string; c?: string; a?: [number, number, number]; b?: number; priority?: boolean }) {
  return (
    <>
      <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: "cover", objectPosition: pos }} priority={priority} />
      <div className="scan-overlay" />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, rgba(${c},${a[0]}) 0%, rgba(${c},${a[1]}) 55%, rgba(${c},${a[2]}) 100%)` }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(${c},${b}) 0%, transparent 50%)` }} />
    </>
  );
}

/** Fond d'origine des pages de référence : athlète en scanlines à droite, lignes fines, dégradé. */
export function ScanBg({ name }: { name: AthleteName }) {
  return (
    <>
      <div className="scan-hero-lines" />
      <div className="scan-hero-figure"><ScanAthlete name={name} height="100%" /></div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.6) 55%, rgba(5,5,5,0.25) 100%)" }} />
    </>
  );
}

/** Fondu à l'entrée dans l'écran (une seule fois). */
export function Reveal({ children, className = "", as: Tag = "div", id }: { children: React.ReactNode; className?: string; as?: React.ElementType; id?: string }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.12, { oneShot: true });
  return <Tag ref={ref} id={id} className={`sp-rv${visible ? " is-in" : ""}${className ? " " + className : ""}`}>{children}</Tag>;
}

/** En-tête de section de l'accueil : repère mono bleu, grand titre Manrope 500, ligne d'appui. split = ligne à droite. */
export function Head({ kick, title, lead, split = false, h = "h2" }: { kick?: React.ReactNode; title: React.ReactNode; lead?: React.ReactNode; split?: boolean; h?: "h2" | "h3" }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2, { oneShot: true });
  const H = h;
  if (split) return (
    <div ref={ref} className={`h7-head sp-head-split${visible ? " is-in" : ""}`}>
      <div>{kick && <p className="st6-kick">{kick}</p>}<H className="h7-h2">{title}</H></div>
      {lead && <p className="h7-line">{lead}</p>}
    </div>
  );
  return (
    <div ref={ref} className={`h7-head${visible ? " is-in" : ""}`}>
      {kick && <p className="st6-kick">{kick}</p>}
      <H className="h7-h2">{title}</H>
      {lead && <p className="h7-line">{lead}</p>}
    </div>
  );
}

/** Section du corps sur le fond de l'app, sur la grille de 1 120 px. */
export function Sec({ id, kick, title, lead, split, children, tight = false, className = "" }: {
  id?: string; kick?: React.ReactNode; title?: React.ReactNode; lead?: React.ReactNode; split?: boolean; children?: React.ReactNode; tight?: boolean; className?: string;
}) {
  return (
    <section id={id} className={`sp-sec${tight ? " is-tight" : ""}${className ? " " + className : ""}`}>
      <div className="p5-wrap">
        {title && <Head kick={kick} title={title} lead={lead} split={split} />}
        {children && (title ? <div className="sp-body">{children}</div> : children)}
      </div>
    </section>
  );
}

/** Liste numérotée à filets : n° | titre (+ sur-titre) | texte. */
export function HairList({ items, two = false }: { items: { n?: string; pre?: string; title: React.ReactNode; body?: React.ReactNode }[]; two?: boolean }) {
  const { ref, visible } = useInView<HTMLOListElement>(0.1, { oneShot: true });
  return (
    <ol ref={ref} className={`sp-list${two ? " is-2" : ""}`}>
      {items.map((it, i) => (
        <li key={i} className={`sp-li sp-rv${visible ? " is-in" : ""}`} style={{ transitionDelay: `${Math.min(i, 6) * 0.05}s` }}>
          <span className="sp-li-n">{it.n ?? String(i + 1).padStart(2, "0")}</span>
          {two ? (
            <div><h3 className="sp-li-t">{it.pre && <small>{it.pre}</small>}{it.title}</h3>{it.body && <p className="sp-li-b" style={{ marginTop: "0.5rem" }}>{it.body}</p>}</div>
          ) : (
            <>
              <h3 className="sp-li-t">{it.pre && <small>{it.pre}</small>}{it.title}</h3>
              {it.body ? <p className="sp-li-b">{it.body}</p> : <span />}
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Bloc éditorial (pages de référence) : repère à gauche, titre et texte à droite, entre deux filets. */
export function Block({ kick, title, children, id }: { kick?: React.ReactNode; title?: React.ReactNode; children: React.ReactNode; id?: string }) {
  return (
    <Reveal className="sp-block" id={id}>
      <p className="st6-kick">{kick}</p>
      <div className="sp-block-c">
        {title && <h2 className="sp-h3big">{title}</h2>}
        <div className="sp-prose">{children}</div>
      </div>
    </Reveal>
  );
}

/** Texte avec retours à la ligne (\n) conservés. */
export function Lines({ text }: { text: string }) {
  const parts = text.split("\n");
  return <>{parts.map((l, i) => <span key={i}>{l}{i < parts.length - 1 && <br />}</span>)}</>;
}

/** Article (pages juridiques) : sommaire (donné, ou construit depuis les h2 du texte avec autoToc) + colonne de 720 px. */
export function Article({ toc, tocLabel, autoToc = false, tocKey, children, foot }: { toc?: { id: string; label: string }[]; tocLabel?: string; autoToc?: boolean; tocKey?: string; children: React.ReactNode; foot?: React.ReactNode }) {
  const proseRef = useRef<HTMLDivElement>(null);
  const [auto, setAuto] = useState<{ id: string; label: string }[]>([]);
  useEffect(() => {
    if (!autoToc || !proseRef.current) return;
    const used = new Set<string>();
    const items = [...proseRef.current.querySelectorAll("h2")].map((h) => {
      const label = (h.textContent ?? "").trim();
      let id = label.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "s";
      while (used.has(id)) id += "-2";
      used.add(id); h.id = id;
      return { id, label };
    });
    setAuto(items);
  }, [autoToc, tocKey]);
  const list = autoToc ? auto : toc;
  const hasToc = autoToc || (toc && toc.length > 0);
  return (
    <section className="sp-article">
      <div className="p5-wrap">
        <div className={`sp-article-grid${hasToc ? "" : " no-toc"}`}>
          {hasToc && (
            <nav className="sp-toc" aria-label={tocLabel}>
              <p>{tocLabel}</p>
              <ol>{(list ?? []).map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}</ol>
            </nav>
          )}
          <div>
            <div ref={proseRef} className="sp-prose">{children}</div>
            {foot && <div className="sp-article-foot">{foot}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Pilules App Store / Google Play (vers /download/ios|android). dark = sur une carte sombre. */
export function StoreBtns({ ios, android, dark = false }: { ios: string; android: string; dark?: boolean }) {
  return (
    <>
      <a className={`h7-btn ${dark ? "h7-btn-light" : "h7-btn-ink"}`} href="/download/ios"><AppleIcon />{ios}</a>
      <a className={`h7-btn ${dark ? "h7-btn-ghost" : "h7-btn-line"}`} href="/download/android"><PlayIcon />{android}</a>
    </>
  );
}

/** Téléphones (captures réelles, cadre premium, rien derrière) avec légende. */
export function Phones({ items, two = false }: { items: { src: string; alt: string; title?: string; body?: React.ReactNode; baked?: boolean }[]; two?: boolean }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.1, { oneShot: true });
  return (
    <div ref={ref} className={`sp-phones${two ? " is-2" : ""}`}>
      {items.map((p, i) => (
        <figure key={p.src} className={`sp-rv${visible ? " is-in" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
          <AppPhone src={p.src} alt={p.alt} baked={p.baked} />
          {(p.title || p.body) && <figcaption>{p.title && <b>{p.title}</b>}{p.body}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

/** Carte finale de l'accueil (Télécharger + l'arène), à placer en fin de page marketing, avant le pied de page. */
export function FinalCta() {
  return <div style={{ paddingBottom: 0 }}><ArenaSection /></div>;
}
