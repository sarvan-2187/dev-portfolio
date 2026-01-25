export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, role, subject, message } = await req.json();

    const ntfyResponse = await fetch(
      "https://ntfy.sh/portfolio-contact-cIVJ48UEw1jKd3yl",
      {
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
      return NextResponse.json(
        { error: "ntfy failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
