// attax.app/club-screen?code=ABC123 : le classement d'un club pour l'ecran d'une salle (television, tablette).
// Par defaut : la version ANIMEE (boxeur qui bouge, panneaux qui tournent, donnees relues toutes les 5 minutes), voir tv.ts.
// ?static=1 : l'ancienne page fixe, fabriquee par la fonction Supabase club_screen et relayee ici avec le bon type.
// ?code=DEMO : donnees d'exemple, pour tester sans club.
import { NextRequest } from "next/server";
import { tvHtml } from "./tv";

const SOURCE = "https://huxwznrgxnarxmuaugse.supabase.co/functions/v1/club_screen";
const HEAD = { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=120", "X-Robots-Tag": "noindex" };

export async function GET(req: NextRequest) {
  const code = (req.nextUrl.searchParams.get("code") ?? "").replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 6);
  if (req.nextUrl.searchParams.get("static") !== "1") return new Response(tvHtml(code), { status: 200, headers: HEAD });
  let status = 502, body = "<!doctype html><meta charset=\"utf-8\"><title>Attax</title><p style=\"font-family:system-ui;padding:40px\">Le classement n'est pas disponible pour le moment.</p>";
  try {
    const r = await fetch(`${SOURCE}?code=${code}`, { cache: "no-store" });
    status = r.status;
    body = await r.text();
  } catch {}
  return new Response(body, { status, headers: HEAD });
}
