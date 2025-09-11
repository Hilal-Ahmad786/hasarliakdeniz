import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { randomUUID } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      city: String(form.get("city") || ""),
      make: String(form.get("make") || ""),
      model: String(form.get("model") || ""),
      year: String(form.get("year") || ""),
      desc: String(form.get("desc") || ""),
    };

    const files = form.getAll("photos") as File[];
    let saved = 0;

    for (const file of files.slice(0, 6)) {
      if (typeof file === "string") continue;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const ext = (file.name.split(".").pop() || "bin").toLowerCase();
      const name = `${Date.now()}-${randomUUID()}.${ext}`;
      await writeFile(`/tmp/${name}`, buffer);
      saved++;
    }

    // TODO: email (Resend/Nodemailer) + Cloudinary/S3 store instead of /tmp
    return NextResponse.json({ ok: true, received: payload, uploadedCount: saved });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
