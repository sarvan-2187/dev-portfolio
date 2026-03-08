import { NextResponse } from "next/server";

export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

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
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}