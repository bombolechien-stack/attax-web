"use client";
// Lien d'invitation à une ligue entre amis (partagé depuis l'app) : attax.app/join?code=XXXX
// → ouvre l'app si elle est installée (attax://join?code=…), sinon propose le téléchargement.
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { SitePage, AppleIcon, PlayIcon } from "@/components/site/Site";

const PLAY_URL = "https://play.google.com/store/apps/details?id=app.attax";
const APPSTORE_URL = "https://apps.apple.com/app/id6821117530";

const TXT = {
  fr: {
    kicker: "INVITATION", title: "Un ami t'invite dans sa ligue Attax",
    sub: "Attax transforme ton sport en duels quotidiens. Rejoins la ligue de ton ami avec ce code :",
    open: "Ouvrir dans l'app", get: "Pas encore l'app ? Télécharge-la",
    then: "Puis, dans l'app : Rejoindre une ligue → J'ai un code, et entre le code ci-dessus.",
    copy: "Copier le code", copied: "Code copié ✅",
  },
  en: {
    kicker: "INVITATION", title: "A friend invited you to their Attax league",
    sub: "Attax turns your workouts into daily duels. Join your friend's league with this code:",
    open: "Open in the app", get: "Don't have the app yet? Download it",
    then: "Then, in the app: Join a league → I have a code, and enter the code above.",
    copy: "Copy code", copied: "Code copied ✅",
  },
};

export default function JoinPage() {
  const { lang } = useLang();
  const t = TXT[lang === "fr" ? "fr" : "en"];
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [os, setOs] = useState<"ios" | "android" | "other">("other");

  useEffect(() => {
    const c = (new URLSearchParams(window.location.search).get("code") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
    setCode(c);
    const ua = navigator.userAgent;
    const o = /iPhone|iPad|iPod/i.test(ua) ? "ios" : /Android/i.test(ua) ? "android" : "other";
    setOs(o);
    // Sur téléphone : tente d'ouvrir l'app directement.
    if (c && o !== "other") window.location.href = `attax://join?code=${c}`;
  }, []);

  const appLink = `attax://join?code=${code}`;
  return (
    <SitePage>
      <div className="sp-fn">
        <div className="sp-fn-card">
          <p className="st6-kick">{t.kicker}</p>
          <h1 className="sp-fn-h">{t.title}</h1>
          <p className="sp-fn-p">{t.sub}</p>
          {code && (
            <button
              type="button"
              className="sp-code"
              onClick={() => { navigator.clipboard?.writeText(code).then(() => setCopied(true)).catch(() => {}); }}
            >
              <b>{code}</b>
              <span>{copied ? t.copied : t.copy}</span>
            </button>
          )}
          {os !== "other" && (
            <a href={appLink} className="h7-btn h7-btn-ink sp-btn-full">{t.open}</a>
          )}
          <p className="sp-label" style={{ margin: "1.5rem 0 0.75rem" }}>{t.get}</p>
          <div className="sp-fn-btns">
            {os !== "android" && <a href={APPSTORE_URL} className="h7-btn h7-btn-line sp-btn-full"><AppleIcon />App Store</a>}
            {os !== "ios" && <a href={PLAY_URL} className="h7-btn h7-btn-line sp-btn-full"><PlayIcon />Google Play</a>}
          </div>
          <p className="sp-note" style={{ marginTop: "1.25rem" }}>{t.then}</p>
        </div>
      </div>
    </SitePage>
  );
}
