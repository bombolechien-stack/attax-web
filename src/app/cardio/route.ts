// attax.app/cardio : adresse courte vers le capteur cardio recommandé (lien d'affiliation, voir src/lib/gear.ts).
import { gearRedirect } from "@/lib/gear";

export const dynamic = "force-dynamic";
export function GET() { return gearRedirect("cardio"); }
