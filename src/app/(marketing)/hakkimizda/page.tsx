// src/app/(marketing)/hakkimizda/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import StructuredData from "@/components/service/StructuredData";
import AboutHero from "@/components/about/AboutHero";
import TrustGrid from "@/components/about/TrustGrid";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";
import ContactBand from "@/components/service/ContactBand";
import { COMPANY } from "@/data/company";
import { buildWhatsAppLink } from "@/lib/links";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Hasarlı Akdeniz — Akdeniz bölgesinde hasarlı, kazalı, pert ve çekme belgeli araç alımı. Şeffaf süreç, 2 saatte ön teklif, 24 saatte alım.",
  alternates: {
    canonical: COMPANY.siteUrl ? `${COMPANY.siteUrl}/hakkimizda` : undefined,
  },
  openGraph: {
    title: "Hakkımızda — Hasarlı Akdeniz",
    description:
      "Akdeniz bölgesinde güvenilir hasarlı araç alımı: şeffaflık, hız ve adil fiyat.",
    url: COMPANY.siteUrl ? `${COMPANY.siteUrl}/hakkimizda` : undefined,
    siteName: "Hasarlı Akdeniz",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hakkımızda — Hasarlı Akdeniz",
    description:
      "Şeffaf süreç • 2 saatte ön teklif • 24 saatte alım • Ücretsiz çekici",
  },
};

export default function AboutPage() {
  const phone = COMPANY.phoneTel;
  const wa = buildWhatsAppLink(COMPANY.phoneTel, "Merhaba, bilgi almak istiyorum.");

  // Organization JSON-LD
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: COMPANY.siteUrl || undefined,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email || undefined,
    areaServed: COMPANY.serviceArea.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: [COMPANY.address.line1, COMPANY.address.line2].filter(Boolean).join(", ") || undefined,
      addressLocality: COMPANY.address.city || undefined,
      addressCountry: "TR",
    },
  };

  // AboutPage JSON-LD
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Hakkımızda",
    description:
      "Hasarlı Akdeniz, Akdeniz bölgesinde hasarlı, kazalı, pert ve çekme belgeli araç alımı yapar. Şeffaf süreç, 2 saatte ön teklif, 24 saatte alım.",
    mainEntityOfPage: COMPANY.siteUrl ? `${COMPANY.siteUrl}/hakkimizda` : undefined,
  };

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <Breadcrumbs items={[{ label: "Anasayfa", href: "/" }, { label: "Hakkımızda" }]} />
      </div>

      <StructuredData id="ld-org" data={orgLd} />
      <StructuredData id="ld-about" data={aboutLd} />

      <AboutHero phone={phone} whatsapp={wa} />

      <TrustGrid />

      <Values />

      <Timeline />

      <ContactBand
        phone={phone}
        title="Uzmanımızla şimdi görüşün"
        subtitle="Arayın ya da WhatsApp’tan fotoğraf gönderin; ~2 saat içinde ön teklif."
      />
    </main>
  );
}
