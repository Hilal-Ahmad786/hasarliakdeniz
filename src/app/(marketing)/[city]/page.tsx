import type { Metadata } from "next";
import { cities } from "@/data/cities";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import StructuredData from "@/components/service/StructuredData";
import CityHero from "@/components/city/CityHero";
import CityHighlights from "@/components/city/CityHighlights";
import CityLocalTrust from "@/components/city/CityLocalTrust";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ContactBand from "@/components/service/ContactBand";
import { COMPANY } from "@/data/company";
import { buildWhatsAppLink } from "@/lib/links";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return { title: "Şehir Bulunamadı", robots: "noindex" };
  const url = COMPANY.siteUrl ? `${COMPANY.siteUrl}/${c.slug}` : undefined;
  return {
    title: `${c.name} Hasarlı Araç Alan`,
    description: `${c.name}’de şeffaf süreçle hasarlı araç alımı. 2 saatte ön teklif, 24 saatte alım.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.name} Hasarlı Araç Alan`,
      description: `${c.name} ve çevresinde hızlı, güvenilir alım.`,
      url,
      siteName: "Hasarlı Akdeniz",
      type: "article",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);

  if (!c) {
    return <main className="mx-auto max-w-7xl px-4 py-10">Şehir bulunamadı.</main>;
  }

  const phone = COMPANY.phoneTel;
  const wa = buildWhatsAppLink(phone, `Merhaba, ${c.name} için hızlı teklif almak istiyorum.`);

  // JSON-LD
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${COMPANY.siteUrl || ""}/` },
      { "@type": "ListItem", position: 2, name: "Bölgeler", item: `${COMPANY.siteUrl || ""}/bolgeler` },
      { "@type": "ListItem", position: 3, name: c.name },
    ],
  };
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hasarlı Akdeniz",
    areaServed: c.name,
    telephone: phone,
    url: COMPANY.siteUrl || undefined,
  };
  const faqItems = [
    { q: `${c.name}’de ne kadar sürede alım yapıyorsunuz?`, a: "Ön teklifi ~2 saat içinde, alımı çoğunlukla 24 saat içinde tamamlıyoruz." },
    { q: `${c.name} merkezde değilim, çekici desteğiniz var mı?`, a: "Evet, ücretsiz çekici desteği sağlıyoruz. Konumunuza göre planlıyoruz." },
    { q: `Ödeme nasıl yapılıyor?`, a: "Noter işlemi esnasında, tercihinize göre EFT/havale ile anında ödeme yapıyoruz." },
    { q: `Ekspertiz için aracımı bir yere götürmem gerekiyor mu?`, a: "Çoğunlukla yerinde kontrol ediyoruz; gerekirse çekici ile planlıyoruz." },
  ];

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <Breadcrumbs items={[{ label: "Anasayfa", href: "/" }, { label: "Bölgeler", href: "/bolgeler" }, { label: c.name }]} />
      </div>

      <StructuredData id="ld-breadcrumb" data={breadcrumbLd} />
      <StructuredData id="ld-local" data={localBusinessLd} />

      <CityHero city={c.name} blurb={c.blurb} phone={phone} whatsapp={wa} />

      <CityHighlights city={c.name} />

      <CityLocalTrust city={c.name} />

      <ServiceFAQ
        items={faqItems}
        phone={phone}
        whatsappMessage={`Merhaba, ${c.name} için sorum var.`}
        // Do NOT pass onFeedback from the page (server) to avoid client handler errors
      />

      <ContactBand
        phone={phone}
        title={`${c.name} için hızlı teklif alın`}
        subtitle="Arayın ya da WhatsApp’tan fotoğraf gönderin; ~2 saat içinde ön teklif."
      />
    </main>
  );
}
