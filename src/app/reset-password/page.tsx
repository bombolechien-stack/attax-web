"use client";
// Réinitialisation du mot de passe — lien de l'e-mail « Mot de passe oublié ».
// Fonctionne sur ORDINATEUR comme sur téléphone (avant : lien attax:// qui ne s'ouvrait
// que dans l'app, et l'app connectait l'utilisateur sans lui laisser changer son mot
// de passe). Le modèle d'e-mail Supabase envoie ?token_hash=…&type=recovery.
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLang } from "@/lib/i18n";

const supabase = createClient(
  "https://huxwznrgxnarxmuaugse.supabase.co",
  // Clé PUBLIQUE (anon), déjà présente dans l'app.
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1eHd6bnJneG5hcnhtdWF1Z3NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0Mjg5NTUsImV4cCI6MjA5MjAwNDk1NX0.GMta0IicYr8QbI7BK3xtBcrDWVCxhFRjJ6kxffVBJGc",
  { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } },
);

const TXT = {
  fr: {
    title: "Nouveau mot de passe",
    sub: "Choisis un nouveau mot de passe pour ton compte Attax (6 caractères minimum).",
    pw: "Nouveau mot de passe", pw2: "Confirme le mot de passe",
    cta: "Enregistrer", saving: "Enregistrement…",
    checking: "Vérification du lien…",
    invalid: "Ce lien n'est plus valide (déjà utilisé ou expiré). Redemande un lien depuis l'app : Connexion → Mot de passe oublié.",
    short: "Le mot de passe doit contenir au moins 6 caractères.",
    mismatch: "Les deux mots de passe ne sont pas identiques.",
    error: "Impossible d'enregistrer le mot de passe. Réessaie.",
    done: "Mot de passe modifié ✅",
    doneSub: "Tu peux maintenant te connecter dans l'app Attax avec ton nouveau mot de passe.",
  },
  en: {
    title: "New password",
    sub: "Choose a new password for your Attax account (at least 6 characters).",
    pw: "New password", pw2: "Confirm password",
    cta: "Save", saving: "Saving…",
    checking: "Checking the link…",
    invalid: "This link is no longer valid (already used or expired). Request a new one in the app: Log in → Forgot password.",
    short: "The password must be at least 6 characters.",
    mismatch: "The two passwords don't match.",
    error: "Couldn't save the password. Please try again.",
    done: "Password updated ✅",
    doneSub: "You can now log in to the Attax app with your new password.",
  },
};

export default function ResetPasswordPage() {
  const { lang } = useLang();
  const t = TXT[lang === "fr" ? "fr" : "en"];
  const [state, setState] = useState<"checking" | "ready" | "invalid" | "saving" | "done">("checking");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const tokenHash = q.get("token_hash");
    if (!tokenHash) { setState("invalid"); return; }
    supabase.auth.verifyOtp({ token_hash: tokenHash, type: "recovery" })
      .then(({ data, error }) => setState(!error && data.session ? "ready" : "invalid"))
      .catch(() => setState("invalid"));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (pw.length < 6) { setErr(t.short); return; }
    if (pw !== pw2) { setErr(t.mismatch); return; }
    setState("saving");
    const { error } = await supabase.auth.updateUser({ password: pw });
    if (error) { setErr(t.error); setState("ready"); return; }
    await supabase.auth.signOut().catch(() => {});
    setState("done");
  };

  const input: React.CSSProperties = { width: "100%", padding: "14px 16px", borderRadius: 12, border: "1px solid #E2E5EC", fontSize: 16, marginBottom: 12, boxSizing: "border-box" };
  return (
    <div style={{ minHeight: "100vh", background: "#EEF1F7", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ width: "100%", maxWidth: 420, background: "#fff", borderRadius: 20, padding: "32px 24px", boxShadow: "0 10px 40px rgba(11,17,22,0.08)" }}>
        <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.18em", color: "#0443FD", margin: "0 0 10px" }}>ATTAX</p>
        {state === "done" ? (
          <>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0B1116", margin: "0 0 10px" }}>{t.done}</h1>
            <p style={{ fontSize: 15, color: "#5B6472", lineHeight: 1.6, margin: 0 }}>{t.doneSub}</p>
          </>
        ) : state === "checking" ? (
          <p style={{ fontSize: 15, color: "#5B6472" }}>{t.checking}</p>
        ) : state === "invalid" ? (
          <p style={{ fontSize: 15, color: "#5B6472", lineHeight: 1.6 }}>{t.invalid}</p>
        ) : (
          <form onSubmit={submit}>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0B1116", margin: "0 0 8px" }}>{t.title}</h1>
            <p style={{ fontSize: 15, color: "#5B6472", lineHeight: 1.6, margin: "0 0 20px" }}>{t.sub}</p>
            <input type="password" autoComplete="new-password" placeholder={t.pw} value={pw} onChange={(e) => setPw(e.target.value)} style={input} />
            <input type="password" autoComplete="new-password" placeholder={t.pw2} value={pw2} onChange={(e) => setPw2(e.target.value)} style={input} />
            {err && <p style={{ color: "#EC0420", fontSize: 14, margin: "0 0 12px" }}>{err}</p>}
            <button type="submit" disabled={state === "saving"} style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "#0B1116", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", opacity: state === "saving" ? 0.6 : 1 }}>
              {state === "saving" ? t.saving : t.cta}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
