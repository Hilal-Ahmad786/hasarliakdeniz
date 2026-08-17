import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { routes } from "@/config/navigation";
import { faqCategories } from "@/config/faq";
import { getPublicSettings } from "@/lib/settings/server";
import { telHref, whatsappHref } from "@/lib/settings/shared";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHero } from "@/components/ui/page-hero";
import { JsonLd } from "@/components/ui/json-ld";
import { buttonClasses } from "@/components/ui/button";
import { FaqSearch } from "@/components/forms/faq-search";
import { FinalCta } from "@/components/sections/final-cta";
import { faqPageLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Akdeniz Bölgesi'nde hasarlı araç satışı hakkında merak edilenler: nakit ödeme, ücretsiz çekici, pert kaydı, hurda belgesi ve noter devri sorularının cevapları.",
  keywords:
    "akdeniz hasarlı araç satış soruları, antalya pert araç satışı, hurda belgesi, nakit araç alımı",
  alternates: { canonical: routes.faq },
};

const allFaqs = faqCategories.flatMap((c) => c.items);

export default async function FaqPage() {
  const settings = await getPublicSettings();
  return (
    <>
      <Breadcrumb items={[{ label: "Sık Sorulan Sorular", href: routes.faq }]} />

      <PageHero
        image="/images/heroes/4.png"
        eyebrow="Merak Ettikleriniz"
        title="Akdeniz'de Araç Satarken Merak Edilenler"
        description="Ödeme, çekici, evrak ve devir: aklınıza gelebilecek tüm soruları cevapladık. Listede olmayan sorular için WhatsApp hattımız her zaman açık."
      />

      <Section tone="white">
        <FaqSearch categories={faqCategories} />
      </Section>

      {/* Contact panel */}
      <Section tone="cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-[18px] border border-line bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-ink">Farklı Bir Sorunuz mu Var?</h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-secondary">
            Aracınıza özel her durumu telefonda dakikalar içinde netleştirelim;
            WhatsApp mesajlarına gün boyu hızlı dönüş yapıyoruz.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref(settings)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-track-location="faq"
              className={buttonClasses({ variant: "whatsapp" })}
            >
              <WhatsAppIcon size={18} />
              WhatsApp’tan Yazın
            </a>
            <a href={telHref(settings)} data-track="phone_click" data-track-location="faq" className={buttonClasses({ variant: "dark" })}>
              <Phone size={18} />
              {settings.phoneDisplay}
            </a>
            <Link href={routes.contact} className={buttonClasses({ variant: "outline" })}>
              İletişim Sayfası
            </Link>
          </div>
        </div>
      </Section>

      <FinalCta />
      <JsonLd data={faqPageLd(allFaqs)} />
    </>
  );
}
