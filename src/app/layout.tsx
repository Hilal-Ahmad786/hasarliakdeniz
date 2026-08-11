import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"], // latin-ext covers Turkish characters
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.brandName} — Hasarlı Araç Alımı`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Hasarlı, kazalı, pert, arızalı, yanmış, sel hasarlı ve hurda araçlarınız için Akdeniz Bölgesi geneli hızlı ve güvenilir değerlendirme.",
  applicationName: siteConfig.brandName,
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: siteConfig.brandName,
    url: siteConfig.domain,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={sora.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
