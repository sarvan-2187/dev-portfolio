import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/:path*",
};

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  const domain = "sarvankumar.in";

  let subdomain = "";

  if (host.endsWith(domain)) {
    subdomain = host.replace(`.${domain}`, "").replace(domain, "");
  }

  // main domain
  if (!subdomain || subdomain === "www") {
    return NextResponse.next();
  }

  const routes: Record<string, string> = {
    projects: "/projects",
    contact: "/contact",
    certifications: "/certifications",
    roadmap: "/roadmap",
  };

  const target = routes[subdomain];

  if (!target) {
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  url.pathname = target;
  return NextResponse.rewrite(url);
}
