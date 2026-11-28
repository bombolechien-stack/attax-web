// attax.app/nothingwatch : adresse courte vers la montre recommandée (lien d'affiliation, voir src/lib/gear.ts).
import { gearRedirect } from "@/lib/gear";

export const dynamic = "force-dynamic";
export function GET() { return gearRedirect("nothingwatch"); }
