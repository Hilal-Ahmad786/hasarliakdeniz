import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import ServiceHero from "@/components/service/ServiceHero";
import Highlights from "@/components/service/Highlights";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import StructuredData from "@/components/service/StructuredData";
import ServiceSteps from "@/components/service/ServiceSteps";
import ContactBand from "@/components/service/ContactBand";
import RelatedServices from "@/components/service/RelatedServices";
import { getService, serviceSlugs } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/links";

const PHONE_TEL = "+90XXXXXXXXXX";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "";

// ---- SSG params -------------------------------------------------------------
export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

// ---- Metadata (canonical, OG) ----------------------------------------------
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params; // <-- IMPORTANT
  const svc = getService(slug);
  if (!svc) return { title: "Hizmet Bulunamadı", robots: "noindex" };

  const canonical = SITE ? `${SITE}/hizmetler/${svc.slug}` : undefined;
  return {
    title: svc.title,
    description: svc.short,
    alternates: { canonical },
    openGraph: {
      title: svc.title,
      description: svc.short,
      type: "article",
      url: canonical,
      siteName: "Hasarlı Akdeniz",
    },
    twitter: {
      card: "summary",
      title: svc.title,
      description: svc.short,
    },
  };
}

// ---- Page -------------------------------------------------------------------
export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params; // <-- IMPORTANT
  const svc = getService(slug);
  if (!svc) {
    return <main className="mx-auto max-w-7xl px-4 py-10">Hizmet bulunamadı.</main>;
  }

  const wa = buildWhatsAppLink(
    PHONE_TEL,
    `Merhaba, ${svc.title} için hızlı teklif almak istiyorum.`
  );

  // JSON-LD blocks
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE}/hizmetler` },
      { "@type": "ListItem", position: 3, name: svc.title },
    ],
  };
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hasarlı Akdeniz",
    telephone: PHONE_TEL,
    areaServed: "TR",
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.short,
    provider: { "@type": "Organization", name: "Hasarlı Akdeniz", telephone: PHONE_TEL },
    areaServed: "TR",
    serviceType: "Vehicle Purchasing",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: svc.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : "" },
    })),
  };
  const howtoLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${svc.title} süreci`,
    step: [
      { "@type": "HowToStep", name: "Telefonla ön bilgi" },
      { "@type": "HowToStep", name: "Yerinde/çekiciyle ekspertiz" },
      { "@type": "HowToStep", name: "Şeffaf teklif & sözleşme" },
      { "@type": "HowToStep", name: "Aynı gün ödeme & devir" },
    ],
  };

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <Breadcrumbs
          items={[
            { label: "Anasayfa", href: "/" },
            { label: "Hizmetler", href: "/hizmetler" },
            { label: svc.title },
          ]}
        />
      </div>

      {/* JSON-LD for SEO */}
      <StructuredData id="ld-breadcrumb" data={breadcrumbLd} />
      <StructuredData id="ld-organization" data={orgLd} />
      <StructuredData id="ld-service" data={serviceLd} />
      <StructuredData id="ld-faq" data={faqLd} />
      <StructuredData id="ld-howto" data={howtoLd} />

      {/* Hero */}
      <section id="ozet">
        <ServiceHero
          title={svc.title}
          short={svc.short}
          desc={svc.desc}
          phone={PHONE_TEL}
          whatsapp={wa}
        />
      </section>

      {/* Highlights */}
      <section id="avantajlar">
        <Highlights items={svc.bullets} />
      </section>

      {/* Process (HowTo) */}
      <section id="surec">
        <ServiceSteps />
      </section>

      {/* FAQ (client) — remove function prop from server */}
      <section id="sss" className="mx-auto max-w-7xl px-4">

        <ServiceFAQ
          items={svc.faqs}
          phone={PHONE_TEL}
          whatsappMessage={`Merhaba, "${svc.title}" hakkında bir sorum var.`}
          // ❌ no onFeedback here (server→client functions not allowed)
        />
      </section>

      {/* Conversion band */}
      <section id="iletisim">
        <ContactBand
          phone={PHONE_TEL}
          title={`"${svc.title}" için hızlı teklif alın`}
          subtitle="Arayın ya da WhatsApp’tan fotoğraf gönderin; ~2 saat içinde ön teklif."
        />
      </section>

      {/* Internal links (SEO) */}
      <RelatedServices currentSlug={svc.slug} />
    </main>
  );
}
