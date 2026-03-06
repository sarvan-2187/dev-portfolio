import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";

  const domain = "sarvankumar.in";

  let subdomain = "";

  if (host.endsWith(domain)) {
    subdomain = host.replace(`.${domain}`, "").replace(domain, "");
  }

  if (!subdomain || subdomain === "www") {
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
