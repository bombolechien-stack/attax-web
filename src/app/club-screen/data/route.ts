// attax.app/club-screen/data?code=ABC123 : les donnees de l'ecran de salle anime (JSON), relayees depuis la fonction
// Supabase club_screen (?format=json). Pseudos, photos, points du classement, duels d'hier (gagnant, perdants, points
// gagnes). Aucune donnee de sante, aucun pts. ?code=DEMO : un club d'exemple.
import { NextRequest } from "next/server";

const SOURCE = "https://huxwznrgxnarxmuaugse.supabase.co/functions/v1/club_screen";
const JSON_HEAD = { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=60", "X-Robots-Tag": "noindex" };

const NAMES = ["Gui", "Sophie", "Morgan", "Casey", "Tom_R", "Inès", "Max_B", "Sora_K", "Léa", "Yanis", "Chloé_V", "Noah", "Jade", "Malik", "Emma_D", "Hugo"];
function demo() {
  const d = new Date();
  return {
    name: "Iron House", code: "DEMO42", logo_url: null, members: 42,
    season_key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
    goal: { target: 600000, total: 412380 },
    rows: NAMES.map((username, i) => ({ rank: i + 1, username, avatar_url: null, points: Math.max(2, 31 - i * 2), wins: Math.max(1, 20 - i) })),
    yesterday: [
      { winner: "Sophie", losers: ["Tom_R"], points: 1 },
      { winner: "Morgan", losers: ["Inès", "Léa"], points: 2 },
      { winner: "Gui", losers: ["Casey"], points: 1 },
      { winner: "Max_B", losers: ["Yanis"], points: 1 },
    ],
  };
}

export async function GET(req: NextRequest) {
  const code = (req.nextUrl.searchParams.get("code") ?? "").replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 6);
  if (code === "DEMO") return new Response(JSON.stringify(demo()), { headers: JSON_HEAD });
  try {
    const r = await fetch(`${SOURCE}?code=${code}&format=json`, { cache: "no-store" });
    const t = await r.text();
    if (!t.trim().startsWith("{")) throw new Error("pas du JSON"); // fonction pas encore redeployee
    return new Response(t, { status: r.status, headers: JSON_HEAD });
  } catch {
    return new Response(JSON.stringify({ error: "unavailable" }), { status: 502, headers: JSON_HEAD });
  }
}
