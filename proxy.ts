import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const parts = host.split(".");
  const subdomain = parts.length > 2 ? parts[0] : "root";

  if (subdomain === "root" || subdomain === "www" || host.includes("localhost")) {
    return NextResponse.next();
  }

  const routeMap: Record<string, string> = {
    projects: "/projects",
    contact: "/contact",
    certifications: "/certifications",
    roadmap: "/roadmap",
  };

  const target = routeMap[subdomain];

  if (!target) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  const url = req.nextUrl.clone();
  url.pathname = target;

  return NextResponse.rewrite(url);
}
