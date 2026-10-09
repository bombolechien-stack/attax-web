import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.includes("vercel.app")) {
    const url = request.nextUrl.clone();
    url.host = "attax.app";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = request.nextUrl;
  // playattax.com : domaine de pré-lancement → UNIQUEMENT la page liste d'attente (« / »),
  // jamais le site complet (même avec le cookie de prévisualisation), et non indexé.
  const waitlistOnly = host.includes("playattax");
  const unlocked = !waitlistOnly && request.cookies.get("attax_preview_unlocked")?.value === "1";

  const isStaticAsset = /\.(mp4|webm|mov|png|jpg|jpeg|gif|webp|svg|ico|css|js|json|txt|xml|woff|woff2|ttf)$/i.test(pathname);

  // Pages légales TOUJOURS publiques sur attax.app (Google Play / App Store exigent une
  // politique de confidentialité et une page de suppression de compte accessibles).
  const isLegal = /^\/(privacy|terms|cookie-policy)(\/|$)/.test(pathname);

  if (!unlocked && pathname !== "/" && !isStaticAsset && !(isLegal && !waitlistOnly)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    const r = NextResponse.redirect(url, 307);
    if (waitlistOnly) r.headers.set("X-Robots-Tag", "noindex, nofollow");
    return r;
  }

  const res = NextResponse.next();
  if (waitlistOnly) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
