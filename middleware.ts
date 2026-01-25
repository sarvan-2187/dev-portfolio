import { NextRequest, NextResponse } from "next/server";

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

  const targetRoute = routeMap[subdomain];

  if (targetRoute) {
    return NextResponse.rewrite(
      new URL(targetRoute, req.url)
    );
  }

  return NextResponse.rewrite(
    new URL("/404", req.url)
  );
}
