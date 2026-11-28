// Matériel recommandé (26/11) : deux produits mis en avant, vendus sur Amazon par des liens d'affiliation.
// Le site n'affiche jamais le lien Amazon : il pointe vers une adresse courte d'attax.app (src/app/nothingwatch et
// src/app/cardio), qui redirige. Changer de produit ou de lien = changer une ligne ici.
// Obligation légale (et règle du programme Amazon) : la mention « lien affilié » reste affichée à côté des boutons.
export const GEAR_LINKS = {
  nothingwatch: "https://link.amazon/B05T5MYYR", // CMF Watch 3 Pro (by Nothing)
  cardio: "https://link.amazon/B05t9jgWf",       // moofit HW401, brassard cardio Bluetooth
} as const;

export type GearKey = keyof typeof GEAR_LINKS;

/** Réponse de redirection d'une adresse courte : non indexée, jamais gardée en cache (le lien peut changer). */
export function gearRedirect(key: GearKey) {
  return new Response(null, { status: 302, headers: { Location: GEAR_LINKS[key], "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow", "Referrer-Policy": "no-referrer" } });
}
