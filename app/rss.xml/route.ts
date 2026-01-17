import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = "https://nagarampalli-sarvan-kumar.vercel.app";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Sarvan Kumar – Portfolio</title>
    <link>${siteUrl}</link>
    <description>Updates from my portfolio</description>

    <item>
      <title>Portfolio Live</title>
      <description>My personal portfolio is live on Vercel.</description>
      <link>${siteUrl}</link>
      <guid>${siteUrl}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>

  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
