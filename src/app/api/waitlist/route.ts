import { NextRequest, NextResponse } from "next/server";

// Liste d'attente : ENREGISTRÉE en base (table waitlist, Supabase) puis notification
// e-mail à l'équipe. Avant : e-mail seul → une inscription était perdue si l'envoi
// échouait. La clé ci-dessous est la clé PUBLIQUE (anon) de Supabase : elle ne permet
// que d'ajouter une adresse à la liste (aucune lecture possible, cf. RLS).
const SUPABASE_URL = "https://huxwznrgxnarxmuaugse.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1eHd6bnJneG5hcnhtdWF1Z3NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0Mjg5NTUsImV4cCI6MjA5MjAwNDk1NX0.GMta0IicYr8QbI7BK3xtBcrDWVCxhFRjJ6kxffVBJGc";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: NextRequest) {
  let body: any = null;
  try { body = await req.json(); } catch { /* ignoré */ }
  const email = String(body?.email ?? "").trim().toLowerCase();
  const lang = String(body?.lang ?? "").slice(0, 10) || null;
  // Champ piège invisible : rempli = robot → on fait semblant d'accepter.
  if (body?.website) return NextResponse.json({ ok: true });
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  const source = (req.headers.get("host") ?? "").toLowerCase().replace(/^www\./, "").slice(0, 100);

  // 1) Enregistrement (409 = déjà inscrit → succès pour l'utilisateur)
  const ins = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email, source, lang }),
  }).catch(() => null);
  const duplicate = ins?.status === 409;
  if (!ins || (!ins.ok && !duplicate)) {
    console.error("waitlist insert failed", ins?.status, await ins?.text().catch(() => ""));
    return NextResponse.json({ error: "save_failed" }, { status: 500 });
  }

  // 2) Notification à l'équipe (best-effort : l'adresse est déjà enregistrée)
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey && !duplicate) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Attax Waitlist <noreply@attax.app>",
        to: "contact@attax.app",
        subject: `[Waitlist] New signup: ${email}`,
        html: `<p>New waitlist signup: <strong>${email}</strong> (${source || "?"})</p>`,
      }),
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
