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

  const unlocked = request.cookies.get("attax_preview_unlocked")?.value === "1";
  const { pathname } = request.nextUrl;

  const isStaticAsset = /\.(mp4|webm|mov|png|jpg|jpeg|gif|webp|svg|ico|css|js|json|txt|xml|woff|woff2|ttf)$/i.test(pathname);

  if (!unlocked && pathname !== "/" && !isStaticAsset) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
