import type { Metadata } from "next";
import { cities } from "@/data/cities";
import CityDirectory from "@/components/city/CityDirectory";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import StructuredData from "@/components/service/StructuredData";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Bölgeler",
  description: "Akdeniz ve çevre illerde hasarlı araç alımı: Antalya, Adana, Mersin, Hatay, Gaziantep, Diyarbakır, Şanlıurfa, Mardin ve daha fazlası.",
  alternates: {
    canonical: COMPANY.siteUrl ? `${COMPANY.siteUrl}/bolgeler` : undefined,
  },
  openGraph: {
    title: "Bölgeler — Hasarlı Akdeniz",
    description: "Bölgeler ve hizmet alanlarımız.",
    url: COMPANY.siteUrl ? `${COMPANY.siteUrl}/bolgeler` : undefined,
    siteName: "Hasarlı Akdeniz",
    type: "website",
  },
};

export default function RegionsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${COMPANY.siteUrl || ""}/` },
      { "@type": "ListItem", position: 2, name: "Bölgeler" },
    ],
  };

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <Breadcrumbs items={[{ label: "Anasayfa", href: "/" }, { label: "Bölgeler" }]} />
      </div>

      <StructuredData id="ld-breadcrumb" data={breadcrumbLd} />

      <CityDirectory cities={cities} />
    </main>
  );
}
