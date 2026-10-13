"use client";
// Lien d'invitation à une ligue entre amis (partagé depuis l'app) : attax.app/join?code=XXXX
// → ouvre l'app si elle est installée (attax://join?code=…), sinon propose le téléchargement.
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const PLAY_URL = "https://play.google.com/store/apps/details?id=app.attax";
const APPSTORE_URL = "https://apps.apple.com/app/id6821117530";

const TXT = {
  fr: {
    kicker: "INVITATION", title: "Un ami t'invite dans sa ligue Attax",
    sub: "Attax transforme ton sport en duels quotidiens. Rejoins la ligue de ton ami avec ce code :",
    open: "Ouvrir dans l'app", get: "Pas encore l'app ? Télécharge-la",
    then: "Puis, dans l'app : Rejoindre une ligue → J'ai un code, et entre le code ci-dessus.",
    copy: "Copier le code", copied: "Code copié ✅",
  },
  en: {
    kicker: "INVITATION", title: "A friend invited you to their Attax league",
    sub: "Attax turns your workouts into daily duels. Join your friend's league with this code:",
    open: "Open in the app", get: "Don't have the app yet? Download it",
    then: "Then, in the app: Join a league → I have a code, and enter the code above.",
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
  const btn: React.CSSProperties = { display: "block", width: "100%", padding: "15px", borderRadius: 12, fontSize: 15, fontWeight: 700, textAlign: "center", textDecoration: "none", boxSizing: "border-box" };
  return (
    <div style={{ minHeight: "100vh", background: "#EEF1F7", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ width: "100%", maxWidth: 440, background: "#fff", borderRadius: 20, padding: "32px 24px", boxShadow: "0 10px 40px rgba(11,17,22,0.08)" }}>
        <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.18em", color: "#0443FD", margin: "0 0 10px" }}>{t.kicker}</p>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0B1116", margin: "0 0 10px", lineHeight: 1.2 }}>{t.title}</h1>
        <p style={{ fontSize: 15, color: "#5B6472", lineHeight: 1.6, margin: "0 0 18px" }}>{t.sub}</p>
        {code && (
          <button
            onClick={() => { navigator.clipboard?.writeText(code).then(() => setCopied(true)).catch(() => {}); }}
            style={{ width: "100%", border: "1.5px dashed #0443FD", background: "#F2F5FF", borderRadius: 14, padding: "16px", cursor: "pointer", marginBottom: 18 }}
          >
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 6, color: "#0B1116" }}>{code}</div>
            <div style={{ fontSize: 12, color: "#0443FD", fontWeight: 700, marginTop: 4 }}>{copied ? t.copied : t.copy}</div>
          </button>
        )}
        {os !== "other" && (
          <a href={appLink} style={{ ...btn, background: "#0B1116", color: "#fff", marginBottom: 10 }}>{t.open}</a>
        )}
        <p style={{ fontSize: 13, color: "#5B6472", margin: "14px 0 10px", fontWeight: 600 }}>{t.get}</p>
        {os !== "android" && <a href={APPSTORE_URL} style={{ ...btn, border: "1.5px solid #0B1116", color: "#0B1116", marginBottom: 10 }}>App Store</a>}
        {os !== "ios" && <a href={PLAY_URL} style={{ ...btn, border: "1.5px solid #0B1116", color: "#0B1116", marginBottom: 10 }}>Google Play</a>}
        <p style={{ fontSize: 13, color: "#8A94A6", lineHeight: 1.6, margin: "14px 0 0" }}>{t.then}</p>
      </div>
    </div>
  );
}
