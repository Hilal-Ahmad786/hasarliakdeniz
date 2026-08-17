import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/**
 * Default social card for every page without a more specific image
 * (services/blog/guides pass their own photos). Generated at build time;
 * the bundled TTF (Sora) covers Turkish glyphs the default OG font lacks.
 */
export const alt = "Hasarlı Akdeniz — Akdeniz Bölgesi hasarlı ve kazalı araç alımı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const font = await readFile(new URL("../assets/og-font.ttf", import.meta.url));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#174c88",
          padding: "64px 72px",
          fontFamily: "Sora",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 56,
              borderRadius: 9,
              background: "#c9862e",
            }}
          />
          <div style={{ fontSize: 40, color: "#eaf1f9" }}>{siteConfig.brandName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, lineHeight: 1.08, color: "#ffffff", maxWidth: 1000 }}>
            {"Akdeniz'de Hasarlı ve Kazalı Araç Alımı"}
          </div>
          <div style={{ fontSize: 30, color: "#bcd0e6", maxWidth: 920 }}>
            Ücretsiz çekici · Aynı gün nakit ödeme · 30 dakikada değerlendirme
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#c9862e",
              color: "#ffffff",
              fontSize: 30,
              padding: "16px 32px",
              borderRadius: 999,
            }}
          >
            {siteConfig.phoneDisplay}
          </div>
          <div style={{ fontSize: 28, color: "#e8c891" }}>hasarliakdeniz.com</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Sora", data: font, weight: 700, style: "normal" }],
    },
  );
}
