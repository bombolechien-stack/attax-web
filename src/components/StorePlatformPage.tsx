"use client";

import Image from "next/image";
import Link from "next/link";
import PageNavbar from "@/components/PageNavbar";
import { useLang } from "@/lib/i18n";
import { useInView, fadeUp, clipReveal, scaleIn } from "@/hooks/useInView";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";

type Platform = "ios" | "android";

const COPY = {
  ios: {
    en: {
      label: "ATTAX FOR IPHONE",
      h1: ["Attax on iPhone.", "Free on the App Store."],
      sub: "Your workouts, read from Apple Health, become a boxing duel every day against a player from your league. Fight Night every evening at 9:30 PM.",
      cta: "Download on the App Store",
      need_h: "What you need",
      need: [
        "An iPhone with iOS 15.1 or later.",
        "An Apple Watch, or any watch, band or chest strap that shares heart rate with Apple Health: Garmin, Amazfit, COROS, Withings, Oura and more.",
        "Read access to Apple Health: workouts, steps and heart rate. Attax never writes anything to Apple Health.",
      ],
      note: "iPhone only: no iPad version, and nothing to install on your Apple Watch, it simply syncs with Apple Health.",
      steps_h: "Up and running in three steps",
      steps: [
        { t: "Download and sign in", d: "With Apple, Google or your email." },
        { t: "Connect Apple Health", d: "Attax checks that your watch data is coming through before your first league." },
        { t: "Join a league", d: "8 players at your level, a ranked league with friends, or a custom league from 2 to 40." },
      ],
      free: "Free, no ads, no in-app purchases.",
      other: "Attax for Android",
      hub: "All downloads",
      alt: "Fight Night in the Attax app on iPhone",
    },
    fr: {
      label: "ATTAX SUR IPHONE",
      h1: ["Attax sur iPhone.", "Gratuit sur l'App Store."],
      sub: "Tes séances, lues dans Apple Santé, deviennent un duel de boxe chaque jour contre un joueur de ta ligue. Soir de combat chaque soir à 21h30.",
      cta: "Télécharger sur l'App Store",
      need_h: "Ce qu'il te faut",
      need: [
        "Un iPhone sous iOS 15.1 ou plus récent.",
        "Une Apple Watch, ou une montre, un bracelet ou une ceinture thoracique qui partage la fréquence cardiaque avec Apple Santé : Garmin, Amazfit, COROS, Withings, Oura et d'autres.",
        "L'accès en lecture à Apple Santé : séances, pas et fréquence cardiaque. Attax n'écrit jamais rien dans Apple Santé.",
      ],
      note: "iPhone uniquement : pas de version iPad, et rien à installer sur ton Apple Watch, elle se synchronise simplement avec Apple Santé.",
      steps_h: "Prêt en trois étapes",
      steps: [
        { t: "Télécharge et connecte-toi", d: "Avec Apple, Google ou ton e-mail." },
        { t: "Connecte Apple Santé", d: "Attax vérifie que les données de ta montre arrivent bien avant ta première ligue." },
        { t: "Rejoins une ligue", d: "8 joueurs de ton niveau, une ligue classée entre amis, ou une ligue personnalisée de 2 à 40." },
      ],
      free: "Gratuit, sans publicité, sans achat intégré.",
      other: "Attax sur Android",
      hub: "Tous les téléchargements",
      alt: "Le Soir de combat dans l'app Attax sur iPhone",
    },
  },
  android: {
    en: {
      label: "ATTAX FOR ANDROID",
      h1: ["Attax on Android.", "Free on Google Play."],
      sub: "Your workouts, read from Health Connect, become a boxing duel every day against a player from your league. Fight Night every evening at 9:30 PM.",
      cta: "Get it on Google Play",
      need_h: "What you need",
      need: [
        "An Android phone with Android 9 or later and Health Connect.",
        "A watch, band or chest strap that shares heart rate with Health Connect: Garmin, Samsung Galaxy Watch, Fitbit, Pixel Watch, Wear OS, Amazfit, COROS, Withings, Oura and more.",
        "Read access to Health Connect: workouts, steps and heart rate. Attax never writes anything to Health Connect.",
      ],
      note: "Your phone alone counts your steps; your workouts are measured by your watch.",
      steps_h: "Up and running in three steps",
      steps: [
        { t: "Download and sign in", d: "With Google, Apple or your email." },
        { t: "Connect Health Connect", d: "Attax checks that your watch data is coming through before your first league." },
        { t: "Join a league", d: "8 players at your level, a ranked league with friends, or a custom league from 2 to 40." },
      ],
      free: "Free, no ads, no in-app purchases.",
      other: "Attax for iPhone",
      hub: "All downloads",
      alt: "Fight Night in the Attax app on Android",
    },
    fr: {
      label: "ATTAX SUR ANDROID",
      h1: ["Attax sur Android.", "Gratuit sur Google Play."],
      sub: "Tes séances, lues dans Health Connect, deviennent un duel de boxe chaque jour contre un joueur de ta ligue. Soir de combat chaque soir à 21h30.",
      cta: "Disponible sur Google Play",
      need_h: "Ce qu'il te faut",
      need: [
        "Un téléphone Android 9 ou plus récent, avec Health Connect.",
        "Une montre, un bracelet ou une ceinture thoracique qui partage la fréquence cardiaque avec Health Connect : Garmin, Samsung Galaxy Watch, Fitbit, Pixel Watch, Wear OS, Amazfit, COROS, Withings, Oura et d'autres.",
        "L'accès en lecture à Health Connect : séances, pas et fréquence cardiaque. Attax n'écrit jamais rien dans Health Connect.",
      ],
      note: "Ton téléphone seul compte tes pas ; tes séances sont mesurées par ta montre.",
      steps_h: "Prêt en trois étapes",
      steps: [
        { t: "Télécharge et connecte-toi", d: "Avec Google, Apple ou ton e-mail." },
        { t: "Connecte Health Connect", d: "Attax vérifie que les données de ta montre arrivent bien avant ta première ligue." },
        { t: "Rejoins une ligue", d: "8 joueurs de ton niveau, une ligue classée entre amis, ou une ligue personnalisée de 2 à 40." },
      ],
      free: "Gratuit, sans publicité, sans achat intégré.",
      other: "Attax sur iPhone",
      hub: "Tous les téléchargements",
      alt: "Le Soir de combat dans l'app Attax sur Android",
    },
  },
} as const;

const AppleIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
);
const PlayIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.487 1.487 0 00-.112.568v21.018c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l2.892-2.876L3.271.09a1.513 1.513 0 00-.764 0L13.544 10.99zm0 2.032L2.463 23.91c.184.1.392.16.615.16.219 0 .434-.047.633-.136l13.26-7.601-3.427-3.411z" /></svg>
);

/** Page de téléchargement dédiée à une plateforme (/download/ios, /download/android). */
export default function StorePlatformPage({ platform }: { platform: Platform }) {
  const { lang } = useLang();
  const c = COPY[platform][lang];
  const ios = platform === "ios";
  const storeUrl = ios ? APP_STORE_URL : PLAY_STORE_URL;
  const { ref: heroRef, visible: heroVisible } = useInView<HTMLDivElement>(0.05, { oneShot: true });
  const { ref: bodyRef, visible: bodyVisible } = useInView<HTMLDivElement>(0.08, { oneShot: true });

  return (
    <>
      <div style={{ backgroundColor: "#ffffff", padding: "0 12px 12px" }}>
        <div style={{ position: "relative", backgroundColor: "#05070B", borderRadius: 24, overflow: "hidden", minHeight: "min(860px, calc(100vh - 24px))", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", zIndex: 10 }}><PageNavbar /></div>
          <div ref={heroRef} className="sp-hero" style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", gap: "4rem", padding: "3rem clamp(1.5rem, 5vw, 5rem) 0" }}>
            <div className="sp-hero-text" style={{ flex: "1 1 0", maxWidth: 560, paddingBottom: "3rem" }}>
              <p style={{ ...fadeUp(heroVisible, 0), fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em", margin: "0 0 1.5rem" }}>{c.label}</p>
              <h1 className="pin-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#ffffff", margin: "0 0 1.5rem" }}>
                <div><span style={clipReveal(heroVisible, 80)}>{c.h1[0]}</span></div>
                <div><span style={clipReveal(heroVisible, 200)}><em style={{ color: "#5B86FF" }}>{c.h1[1]}</em></span></div>
              </h1>
              <p style={{ ...fadeUp(heroVisible, 280), fontSize: "1.0625rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, margin: "0 0 2.25rem", maxWidth: 460 }}>{c.sub}</p>
              <div style={{ ...fadeUp(heroVisible, 360), display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
                <a href={storeUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, backgroundColor: "#ffffff", color: "#0d0d0d", fontWeight: 700, fontSize: "0.9375rem", padding: "14px 28px", borderRadius: 999, textDecoration: "none" }}>
                  {ios ? <AppleIcon /> : <PlayIcon />}{c.cta}
                </a>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)" }}>{c.free}</span>
              </div>
            </div>
            <div className="sp-hero-phone" style={{ ...scaleIn(heroVisible, 200, 0.92), flex: "0 0 auto", width: "min(340px, 70vw)", alignSelf: "flex-end", marginBottom: "-6rem", filter: "drop-shadow(0 40px 70px rgba(0,0,0,0.6))" }}>
              <Image src={`/screens/app/${lang}/match-final.webp`} alt={c.alt} width={560} height={1107} priority sizes="340px" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>

      <section ref={bodyRef} style={{ backgroundColor: "#ffffff", padding: "7rem clamp(1.25rem, 5vw, 2rem)" }}>
        <div className="sp-grid" style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          <div style={fadeUp(bodyVisible, 0)}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 1.75rem" }}>{c.need_h}</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", borderTop: "1px solid #ebebeb" }}>
              {c.need.map((n) => (
                <li key={n} style={{ display: "flex", gap: "0.9rem", padding: "1.1rem 0", borderBottom: "1px solid #ebebeb", fontSize: "0.9875rem", color: "#444", lineHeight: 1.65 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0443FD", flexShrink: 0, marginTop: "0.6em" }} />{n}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.875rem", color: "#888", lineHeight: 1.7, margin: 0 }}>{c.note}</p>
          </div>
          <div style={fadeUp(bodyVisible, 140)}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d0d0d", letterSpacing: "-0.04em", margin: "0 0 1.75rem" }}>{c.steps_h}</h2>
            <ol style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", borderTop: "1px solid #ebebeb" }}>
              {c.steps.map((s, i) => (
                <li key={s.t} style={{ display: "flex", gap: "1.25rem", padding: "1.1rem 0", borderBottom: "1px solid #ebebeb" }}>
                  <span className="pin-mono" style={{ fontSize: "0.75rem", color: "#0443FD", paddingTop: "0.2em" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0d0d0d", letterSpacing: "-0.02em" }}>{s.t}</div>
                    <div style={{ fontSize: "0.9375rem", color: "#777", lineHeight: 1.65, marginTop: "0.25rem" }}>{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.9375rem", fontWeight: 600 }}>
              <Link href={ios ? "/download/android" : "/download/ios"} style={{ color: "#0d0d0d" }}>{c.other} →</Link>
              <Link href="/download" style={{ color: "#888" }}>{c.hub}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
