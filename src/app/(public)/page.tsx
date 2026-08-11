import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Clock3, Landmark } from "lucide-react";
import { siteConfig } from "@/config/site";
import { routes } from "@/config/navigation";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaGroup } from "@/components/sections/cta-buttons";
import { TrustStrip } from "@/components/sections/trust-strip";
import { CategoryGrid } from "@/components/sections/category-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceAreas } from "@/components/sections/service-areas";
import { FinalCta } from "@/components/sections/final-cta";
import { QuoteSection } from "@/components/sections/quote-section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { homepageFaqs } from "@/config/faq";
import { organizationLd, websiteLd, faqPageLd } from "@/lib/seo/jsonld";

const homeTitle = "Akdeniz'de Hasarlı ve Kazalı Araç Alımı";
const homeDescription =
  "Antalya, Mersin, Adana ve tüm Akdeniz'de hasarlı araç alan kurumsal ekip: kazalı, pert, dolu ve sel hasarlı, arızalı, hurda araçlar için ücretsiz değerlendirme.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords:
    "hasarlı araç alan, kazalı araç alan, pert araç alan, hasarlı araç alan antalya, hasarlı araç alan mersin, hasarlı araç alan adana",
  alternates: { canonical: routes.home },
  openGraph: {
    title: `${homeTitle} | ${siteConfig.brandName}`,
    description: homeDescription,
    url: routes.home,
    type: "website",
  },
};

const heroPoints = [
  { icon: BadgeCheck, label: "Ücretsiz değerlendirme", sub: "Teklif sizi bağlamaz" },
  { icon: Landmark, label: "Noter destekli devir", sub: "Resmi ve kayıtlı işlem planı" },
  { icon: Clock3, label: "Bekletmeyen süreç", sub: "Talebinize kısa sürede dönüş" },
];

/**
 * Dark editorial hero — deep navy gradient surface, gold eyebrow, framed photo
 * on the right with sharp corners. Opposite of a light full-bleed hero.
 */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-charcoal-950 via-brand-900 to-brand-800 text-white">
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page grid items-center gap-10 py-14 md:py-18 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 border-l-2 border-gold-600 pl-3 text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
            Akdeniz'in Hasarlı Araç Alım Noktası
          </p>
          <h1 className="text-[34px] font-bold leading-[1.1] md:text-[46px] lg:text-[52px]">
            Hasarlı Aracınızı{" "}
            <span className="text-gold-600">Net Bir Süreçle</span> Satın
          </h1>
          <p className="mt-5 max-w-[540px] text-[16px] leading-relaxed text-white/70 md:text-[18px]">
            Dolu göçüğünden sel hasarına, kazadan motor arızasına — Antalya,
            Mersin, Adana ve tüm bölgede aracınız bulunduğu yerden
            değerlendirilir; noter ve ödeme adımları baştan net planlanır.
          </p>

          <CtaGroup className="mt-8" location="hero" />

          <ul className="mt-9 grid gap-4 border-t border-white/12 pt-6 sm:grid-cols-3">
            {heroPoints.map((p) => (
              <li key={p.label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-white/8 text-gold-600">
                  <p.icon size={18} strokeWidth={2} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold">{p.label}</span>
                  <span className="mt-0.5 text-xs text-white/55">{p.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Framed photo — sharp corners, offset gold frame */}
        <div className="relative hidden lg:block">
          <div aria-hidden className="absolute -top-4 -right-4 h-full w-full rounded-[10px] border-2 border-gold-600/50" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border border-white/15">
            <Image
              src="/images/heroes/2.png"
              alt="Hasarlı araç değerlendirmesi"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <HowItWorks />
      <WhyUs />
      <QuoteSection source="homepage_hero" tone="alt" />
      <Testimonials />
      <ServiceAreas />
      <Section tone="white">
        <SectionHeading
          eyebrow="Sık Sorulan Sorular"
          title="Aklınızdaki Sorular"
          intro="Dolu hasarından noter devrine, süreçle ilgili en çok merak edilenler."
        />
        <div className="mt-10">
          <FaqAccordion items={homepageFaqs} />
        </div>
      </Section>
      <FinalCta />
      <JsonLd data={[organizationLd(), websiteLd(), faqPageLd(homepageFaqs)]} />
    </>
  );
}
