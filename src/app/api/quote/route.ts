import { NextResponse } from "next/server";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function POST() {
  return NextResponse.json({ ok: true, message: "Stub: implement upload & email next." }, { status: 200 });
}
