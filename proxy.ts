import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/:path*"],
};

export default function proxy(req: NextRequest) {
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

  if (target) {
    return NextResponse.rewrite(
      new URL(target + req.nextUrl.pathname, req.url)
    );
  }

  return NextResponse.rewrite(new URL("/404", req.url));
}
