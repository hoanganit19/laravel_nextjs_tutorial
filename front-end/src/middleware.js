import { NextResponse } from "next/server";
import { getProfile } from "./utils/utils";
import { setSession } from "./utils/session";

export const middleware = async (request) => {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  if (token) {
    //verify token
    const { success, user = "" } = await getProfile(token);
    setSession(token, user);
    if (!success && pathname.startsWith("/users")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  } else if (pathname.startsWith("/users")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
