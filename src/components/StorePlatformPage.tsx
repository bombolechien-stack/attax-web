"use client";

// Restylée le 21/11 au système de l'accueil (src/components/site/Site.tsx) ; textes et liens inchangés.
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SitePage, PageHero, Head, Sec, HairList, Reveal, AppPhone, AppleIcon, PlayIcon } from "@/components/site/Site";
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
        "An Apple Watch, or any watch, band or chest strap that shares heart rate with Apple Health: Garmin, Amazfit, COROS, Withings, Oura, CMF by Nothing and more.",
        "Read access to Apple Health: workouts, steps and heart rate. Attax never writes anything to Apple Health.",
      ],
      note: "iPhone only: no iPad version, and nothing to install on your Apple Watch, it simply syncs with Apple Health.",
      steps_h: "Up and running in three steps",
      steps: [
        { t: "Download and sign in", d: "With Apple, Google or your email." },
        { t: "Connect Apple Health", d: "Attax checks that your watch data is coming through before your first league." },
        { t: "Join a league", d: "8 players at your level, a ranked league with up to 2 friends (3 of you), of a close rank, or a custom league from 2 to 40." },
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
        "Une Apple Watch, ou une montre, un bracelet ou une ceinture thoracique qui partage la fréquence cardiaque avec Apple Santé : Garmin, Amazfit, COROS, Withings, Oura, CMF by Nothing et d'autres.",
        "L'accès en lecture à Apple Santé : séances, pas et fréquence cardiaque. Attax n'écrit jamais rien dans Apple Santé.",
      ],
      note: "iPhone uniquement : pas de version iPad, et rien à installer sur ton Apple Watch, elle se synchronise simplement avec Apple Santé.",
      steps_h: "Prêt en trois étapes",
      steps: [
        { t: "Télécharge et connecte-toi", d: "Avec Apple, Google ou ton e-mail." },
        { t: "Connecte Apple Santé", d: "Attax vérifie que les données de ta montre arrivent bien avant ta première ligue." },
        { t: "Rejoins une ligue", d: "8 joueurs de ton niveau, une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche, ou une ligue personnalisée de 2 à 40." },
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
        "A watch, band or chest strap that shares heart rate with Health Connect: Garmin, Samsung Galaxy Watch, Fitbit, Pixel Watch, Wear OS, Amazfit, COROS, Withings, Oura, CMF by Nothing and more.",
        "Read access to Health Connect: workouts, steps and heart rate. Attax never writes anything to Health Connect.",
      ],
      note: "Your phone alone counts your steps; your workouts are measured by your watch.",
      steps_h: "Up and running in three steps",
      steps: [
        { t: "Download and sign in", d: "With Google, Apple or your email." },
        { t: "Connect Health Connect", d: "Attax checks that your watch data is coming through before your first league." },
        { t: "Join a league", d: "8 players at your level, a ranked league with up to 2 friends (3 of you), of a close rank, or a custom league from 2 to 40." },
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
        "Une montre, un bracelet ou une ceinture thoracique qui partage la fréquence cardiaque avec Health Connect : Garmin, Samsung Galaxy Watch, Fitbit, Pixel Watch, Wear OS, Amazfit, COROS, Withings, Oura, CMF by Nothing et d'autres.",
        "L'accès en lecture à Health Connect : séances, pas et fréquence cardiaque. Attax n'écrit jamais rien dans Health Connect.",
      ],
      note: "Ton téléphone seul compte tes pas ; tes séances sont mesurées par ta montre.",
      steps_h: "Prêt en trois étapes",
      steps: [
        { t: "Télécharge et connecte-toi", d: "Avec Google, Apple ou ton e-mail." },
        { t: "Connecte Health Connect", d: "Attax vérifie que les données de ta montre arrivent bien avant ta première ligue." },
        { t: "Rejoins une ligue", d: "8 joueurs de ton niveau, une ligue classée avec jusqu'à 2 amis (3 avec toi), de rang proche, ou une ligue personnalisée de 2 à 40." },
      ],
      free: "Gratuit, sans publicité, sans achat intégré.",
      other: "Attax sur iPhone",
      hub: "Tous les téléchargements",
      alt: "Le Soir de combat dans l'app Attax sur Android",
    },
  },
} as const;

/** Page de téléchargement dédiée à une plateforme (/download/ios, /download/android). */
export default function StorePlatformPage({ platform }: { platform: Platform }) {
  const { lang } = useLang();
  const c = COPY[platform][lang];
  const ios = platform === "ios";
  const storeUrl = ios ? APP_STORE_URL : PLAY_STORE_URL;

  return (
    <SitePage>
      <PageHero
        full
        bg={<div style={{ position: "absolute", inset: 0, background: "#05070B" }} />}
        kick={c.label}
        title={<><span>{c.h1[0]}</span> <span><em>{c.h1[1]}</em></span></>}
        lead={c.sub}
        meta={c.free}
        phone={{ src: `/screens/story/${lang}/final-round.webp`, alt: c.alt }}
      >
        <a className="h7-btn h7-btn-light" href={storeUrl} target="_blank" rel="noopener noreferrer">{ios ? <AppleIcon /> : <PlayIcon />}{c.cta}</a>
      </PageHero>

      <section className="sp-sec">
        <div className="p5-wrap sp-split">
          <div>
            <Head kick={ios ? "iOS" : "Android"} title={c.need_h} />
            <Reveal className="sp-prose" >
              <ul className="sp-dots" style={{ marginTop: "2rem" }}>
                {c.need.map((n) => <li key={n}><span style={{ color: "var(--ink)" }}>{n}</span></li>)}
              </ul>
              <p className="sp-note">{c.note}</p>
            </Reveal>
          </div>
          <div className="sp-split-ph">
            <AppPhone src={`/screens/story/${lang}/rounds.webp`} alt={c.alt} />
          </div>
        </div>
      </section>

      <Sec kick={c.free} title={c.steps_h}>
        <HairList two items={c.steps.map((s) => ({ title: s.t, body: s.d }))} />
        <div className="h7-ctas">
          <a className="h7-btn h7-btn-ink" href={storeUrl} target="_blank" rel="noopener noreferrer">{ios ? <AppleIcon /> : <PlayIcon />}{c.cta}</a>
          <Link className="h7-btn h7-btn-line" href={ios ? "/download/android" : "/download/ios"}>{ios ? <PlayIcon /> : <AppleIcon />}{c.other}</Link>
          <Link className="h7-btn h7-btn-line" href="/download">{c.hub}</Link>
        </div>
      </Sec>
    </SitePage>
  );
}
