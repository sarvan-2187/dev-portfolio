import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  const result = await sql`
    SELECT visits FROM site_stats WHERE id = 'portfolio';
  `;

  return NextResponse.json({ visits: result[0].visits });
}

export async function POST() {
  const result = await sql`
    UPDATE site_stats
    SET visits = visits + 1
    WHERE id = 'portfolio'
    RETURNING visits;
  `;

  return NextResponse.json({ visits: result[0].visits });
}
