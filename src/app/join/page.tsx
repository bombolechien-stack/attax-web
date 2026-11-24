"use client";
// Lien d'invitation à une ligue entre amis (partagé depuis l'app) : attax.app/join?code=XXXX
// → ouvre l'app si elle est installée (attax://join?code=…), sinon propose le téléchargement.
// Trois liens : ?code= (ligue entre amis), ?duel= (défi d'un ami), ?club= (invitation dans un club, lien ou QR code).
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
    duelTitle: "Un ami te défie sur Attax",
    duelSub: "Vos 7 derniers jours de sport, l'un contre l'autre. Relève son défi avec ce code :",
    duelThen: "Puis rouvre ce lien depuis ton téléphone : le défi s'ouvre dans l'app.",
    clubTitle: "Tu es invité dans un club Attax",
    clubSub: "Chaque jour, un rival tiré dans le club : le plus actif gagne. Chaque mois, un champion. Rejoins le club avec ce code :",
    clubThen: "Puis rouvre ce lien depuis ton téléphone : l'invitation s'ouvre dans l'app. Ou, dans l'app : Classement → Clubs → Rejoindre un club, et entre le code ci-dessus.",
  },
  en: {
    kicker: "INVITATION", title: "A friend invited you to their Attax league",
    sub: "Attax turns your workouts into daily duels. Join your friend's league with this code:",
    open: "Open in the app", get: "Don't have the app yet? Download it",
    then: "Then, in the app: Join a league → I have a code, and enter the code above.",
    copy: "Copy code", copied: "Code copied ✅",
    duelTitle: "A friend challenges you on Attax",
    duelSub: "Your last 7 days of sport, head to head. Take the challenge with this code:",
    duelThen: "Then open this link again on your phone: the challenge opens in the app.",
    clubTitle: "You're invited to an Attax club",
    clubSub: "Every day, a rival drawn from the club: the most active wins. Every month, a champion. Join the club with this code:",
    clubThen: "Then open this link again on your phone: the invitation opens in the app. Or, in the app: Ranking → Clubs → Join a club, and enter the code above.",
  },
};

export default function JoinPage() {
  const { lang } = useLang();
  const t = TXT[lang === "fr" ? "fr" : "en"];
  const [code, setCode] = useState("");
  const [duel, setDuel] = useState(false);
  const [club, setClub] = useState(false);
  const [copied, setCopied] = useState(false);
  const [os, setOs] = useState<"ios" | "android" | "other">("other");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search), isDuel = !!q.get("duel"), isClub = !isDuel && !!q.get("club");
    setDuel(isDuel);
    setClub(isClub);
    const c = (q.get("duel") || q.get("club") || q.get("code") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
    setCode(c);
    const ua = navigator.userAgent;
    const o = /iPhone|iPad|iPod/i.test(ua) ? "ios" : /Android/i.test(ua) ? "android" : "other";
    setOs(o);
    // Sur téléphone : tente d'ouvrir l'app directement.
    if (c && o !== "other") window.location.href = `attax://join?${isDuel ? "duel" : isClub ? "club" : "code"}=${c}`;
  }, []);

  const appLink = `attax://join?${duel ? "duel" : club ? "club" : "code"}=${code}`;
  return (
    <SitePage>
      <div className="sp-fn">
        <div className="sp-fn-card">
          <p className="st6-kick">{t.kicker}</p>
          <h1 className="sp-fn-h">{duel ? t.duelTitle : club ? t.clubTitle : t.title}</h1>
          <p className="sp-fn-p">{duel ? t.duelSub : club ? t.clubSub : t.sub}</p>
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
          <p className="sp-note" style={{ marginTop: "1.25rem" }}>{duel ? t.duelThen : club ? t.clubThen : t.then}</p>
        </div>
      </div>
    </SitePage>
  );
}
