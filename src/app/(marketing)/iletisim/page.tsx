// src/app/(marketing)/iletisim/page.tsx
import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import StructuredData from "@/components/service/StructuredData";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import { COMPANY } from "@/data/company";
import { buildWhatsAppLink } from "@/lib/links";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Hasarlı, kazalı, pert, hurda, motor arızalı araç alımı için hızlı iletişim. 2 saatte ön teklif, 24 saatte alım.",
  alternates: {
    canonical: COMPANY.siteUrl ? `${COMPANY.siteUrl}/iletisim` : undefined,
  },
  openGraph: {
    title: "İletişim — Hasarlı Akdeniz",
    description:
      "Uzmanımızla hemen görüşün. 2 saatte ön teklif, 24 saatte alım, ücretsiz çekici.",
    url: COMPANY.siteUrl ? `${COMPANY.siteUrl}/iletisim` : undefined,
    siteName: "Hasarlı Akdeniz",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "İletişim — Hasarlı Akdeniz",
    description:
      "Hızlı iletişim ve şeffaf süreç: 2 saatte ön teklif, 24 saatte alım.",
  },
};

export default function ContactPage() {
  const phone = COMPANY.phoneTel;
  const whatsapp = buildWhatsAppLink(COMPANY.phoneTel, "Merhaba, hızlı teklif almak istiyorum.");
  const street = [COMPANY.address.line1, COMPANY.address.line2].filter(Boolean).join(", ");

  // Organization / LocalBusiness JSON-LD
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: street || undefined,
      addressLocality: COMPANY.address.city || undefined,
      addressCountry: "TR",
    },
    areaServed: COMPANY.serviceArea.join(", "),
    url: COMPANY.siteUrl || undefined,
    openingHoursSpecification: COMPANY.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: h.open,
      closes: h.close,
    })),
  };

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <Breadcrumbs items={[{ label: "Anasayfa", href: "/" }, { label: "İletişim" }]} />
      </div>

      <StructuredData id="ld-org" data={orgLd} />

      <ContactHero phone={phone} whatsapp={whatsapp} />

      <section className="mx-auto max-w-7xl px-4 py-8 grid lg:grid-cols-[1.2fr_1fr] gap-6">
        <ContactDetails />
        <ContactForm />
      </section>
    </main>
  );
}
