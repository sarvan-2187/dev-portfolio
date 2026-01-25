import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const subdomain = host.split(".")[0];

  if (subdomain === "sarvankumar" || subdomain === "www") {
    return NextResponse.next();
  }

  const routeMap: Record<string, string> = {
    projects: "/projects",
    contact: "/contact",
    certifications: "/certifications",
  };

  const target = routeMap[subdomain];

  if (!target) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  const rewrittenUrl = new URL(req.url);
  rewrittenUrl.pathname = target;

  return NextResponse.rewrite(rewrittenUrl);
}
