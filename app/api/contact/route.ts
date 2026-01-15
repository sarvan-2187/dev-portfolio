export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, role, subject, message } = body;

    const ntfyResponse = await fetch(
      "https://ntfy.sh/portfolio-contact-cIVJ48UEw1jKd3yl",{
        method: "POST",
        headers: {
          Title: subject || "Portfolio Contact",
          Priority: "4",
          Tags: "contact,portfolio",
          "Content-Type": "text/plain",
        },
        body: `
        Name: ${name}
        Email: ${email}
        Role: ${role}

        Message:
        ${message}
        `.trim(),
      }
    );

    if (!ntfyResponse.ok) {
      const errorText = await ntfyResponse.text();
      console.error("ntfy error:", errorText);
      return new NextResponse("ntfy failed", { status: 500 });
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}
