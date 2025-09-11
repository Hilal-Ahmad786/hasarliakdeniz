import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type QuotePayload = {
  make?: string;
  model?: string;
  year?: string;
  damage?: string;
  phone?: string;
  city?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<QuotePayload>;
    return NextResponse.json({ ok: true, received: body }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
