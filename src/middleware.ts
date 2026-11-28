import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANG_COOKIE, LANG_HEADER, isFrPath, isLocalized, stripLang, withLang } from "@/lib/locale";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.includes("vercel.app")) {
    const url = request.nextUrl.clone();
    url.host = "attax.app";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // LANGUE (28/11) : « /fr/clubs » = la page « /clubs » servie en français. `pathname` est l'adresse SANS le préfixe :
  // tout le reste de ce fichier raisonne dessus, comme avant.
  const rawPath = request.nextUrl.pathname;
  const fr = isFrPath(rawPath);
  const pathname = fr ? stripLang(rawPath) : rawPath;

  // playattax.com : domaine de pré-lancement → UNIQUEMENT la page liste d'attente (« / »),
  // jamais le site complet (même avec le cookie de prévisualisation), et non indexé.
  const waitlistOnly = host.includes("playattax");
  const unlocked = !waitlistOnly && request.cookies.get("attax_preview_unlocked")?.value === "1";

  const isStaticAsset = /\.(mp4|webm|mov|png|jpg|jpeg|gif|webp|svg|ico|css|js|json|txt|xml|woff|woff2|ttf)$/i.test(pathname);

  // Pages légales TOUJOURS publiques sur attax.app (Google Play / App Store exigent une
  // politique de confidentialité et une page de suppression de compte accessibles).
  const isLegal = /^\/(privacy|health-data-privacy|terms|cookie-policy|legal|contact|reset-password|join|club-screen|nothingwatch|cardio)(\/|$)/.test(pathname);

  if (!unlocked && pathname !== "/" && !isStaticAsset && !(isLegal && !waitlistOnly)) {
    const url = request.nextUrl.clone();
    url.pathname = fr ? "/fr" : "/";
    url.search = "";
    const r = NextResponse.redirect(url, 307);
    if (waitlistOnly) r.headers.set("X-Robots-Tag", "noindex, nofollow");
    return r;
  }

  // Une adresse /fr qui n'a pas de version française (profil d'un joueur, écran de club…) : retour à l'adresse d'origine.
  if (fr && !isLocalized(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname;
    return NextResponse.redirect(url, 307);
  }

  // Un visiteur qui a choisi le français (cookie posé par le sélecteur de langue ou par une page /fr) et qui suit un
  // lien interne vers l'adresse anglaise reste en français. Les moteurs de recherche n'ont pas ce cookie : ils lisent
  // l'anglais sur « /clubs » et le français sur « /fr/clubs ».
  if (!fr && !isStaticAsset && isLocalized(pathname) && request.cookies.get(LANG_COOKIE)?.value === "fr") {
    const url = request.nextUrl.clone();
    url.pathname = withLang(pathname, "fr");
    return NextResponse.redirect(url, 307);
  }

  const headers = new Headers(request.headers);
  headers.set(LANG_HEADER, fr ? "fr" : "en");
  let res: NextResponse;
  if (fr) {
    const url = request.nextUrl.clone();
    url.pathname = pathname;
    res = NextResponse.rewrite(url, { request: { headers } });
  } else {
    res = NextResponse.next({ request: { headers } });
  }
  if (waitlistOnly) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
