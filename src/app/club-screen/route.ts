// attax.app/club-screen?code=ABC123 : le classement d'un club pour l'ecran d'une salle (television, tablette).
// La page est fabriquee par la fonction Supabase club_screen (app Attax). Supabase sert le HTML de ses fonctions en
// texte brut : cette route le relaie avec le bon type, pour qu'un navigateur l'affiche. Aucune donnee n'est gardee ici.
import { NextRequest } from "next/server";

const SOURCE = "https://huxwznrgxnarxmuaugse.supabase.co/functions/v1/club_screen";

export async function GET(req: NextRequest) {
  const code = (req.nextUrl.searchParams.get("code") ?? "").replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 6);
  let status = 502, body = "<!doctype html><meta charset=\"utf-8\"><title>Attax</title><p style=\"font-family:system-ui;padding:40px\">Le classement n'est pas disponible pour le moment.</p>";
  try {
    const r = await fetch(`${SOURCE}?code=${code}`, { cache: "no-store" });
    status = r.status;
    body = await r.text();
  } catch {}
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=120", "X-Robots-Tag": "noindex" },
  });
}
