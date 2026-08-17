import type { Metadata } from "next";
import {
  FileText,
  Camera,
  SearchCheck,
  ClipboardCheck,
  Handshake,
  Landmark,
  Truck,
  Archive,
} from "lucide-react";
import { routes } from "@/config/navigation";
import { Section, SectionHeading } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHero } from "@/components/ui/page-hero";
import { IconList } from "@/components/ui/icon-list";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { CtaGroup } from "@/components/sections/cta-buttons";
import { OfferExplainer } from "@/components/sections/offer-explainer";
import { FinalCta } from "@/components/sections/final-cta";
import { faqPageLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Nasıl Çalışır? | 3 Adımda Araç Satışı",
  description:
    "Aracınızı 3 adımda satın: fotoğraf gönderin, ücretsiz teklifinizi alın, anlaşınca ücretsiz çekici ile alalım ve aynı gün nakit ödeyelim.",
  keywords:
    "araç nasıl satılır, hasarlı araç satış süreci, araç değerleme, ücretsiz çekici",
  alternates: { canonical: routes.howItWorks },
};

const steps = [
  { icon: FileText, title: "Bilgileri gönderin", desc: "Marka, model, yıl ve hasar durumuyla birlikte aracın Akdeniz'de bulunduğu ili yazın; iki dakikanızı alır.", user: "Kısa formu doldurur veya WhatsApp'tan yazarsınız.", us: "Başvuruyu anında işleme alırız." },
  { icon: Camera, title: "Fotoğraf paylaşın", desc: "Aracın dört yönden ve hasar bölgelerinden çekilmiş fotoğrafları teklifin temelini oluşturur.", user: "Telefonunuzla çekip gönderirsiniz.", us: "Uzman ekip görselleri inceler." },
  { icon: SearchCheck, title: "30 dakikada ön teklif", desc: "Bilgiler eksiksizse ön değerlendirme ortalama yarım saat içinde size ulaşır.", user: "Teklifi beklersiniz.", us: "Hızlı ve gerekçeli dönüş yaparız." },
  { icon: ClipboardCheck, title: "Araç yerinde görülür", desc: "Gerekli durumlarda aracınız bulunduğu adreste incelenir; sizi hiçbir yere çağırmayız.", user: "Uygun saati söylersiniz.", us: "Adresinize geliriz." },
  { icon: Handshake, title: "Nakit teklif netleşir", desc: "İnceleme sonrası kesin rakam açıklanır; pazarlık payı ve gerekçeler açıkça anlatılır.", user: "Kabul veya red — karar sizin.", us: "Rakamın arkasında dururuz." },
  { icon: Landmark, title: "Noterde devir, anında ödeme", desc: "Randevu bize ait; devir imzalanırken ödemenizi nakit veya hesabınıza alırsınız.", user: "Ruhsat ve kimlikle gelirsiniz.", us: "Evrak ve randevuyu hazırlarız." },
  { icon: Truck, title: "Ücretsiz çekici", desc: "Çalışmayan araçlar bulunduğu yerden ücretsiz çekiciyle alınır; çalışanlar devirde teslim edilir.", user: "Aracın yerini gösterirsiniz.", us: "Çekiciyi biz gönderir, biz öderiz." },
  { icon: Archive, title: "Kayıtlar saklanır", desc: "Satışın tüm belgeleri mevzuata uygun arşivlenir; sonradan ihtiyaç olursa ulaşabilirsiniz.", user: "—", us: "Arşivi güvenle tutarız." },
];

const processFaqs = [
  { q: "Gerçekten aynı gün ödeme yapıyor musunuz?", a: "Evet. Ödeme, noterde devir işlemiyle eş zamanlı yapılır — nakit ya da tercihinize göre anında hesabınıza transfer. Devir tamamlanmadan sizden aracı teslim etmenizi istemeyiz." },
  { q: "Çekici için benden ücret çıkar mı?", a: "Çıkmaz. Teklifi kabul ettiğiniz her araçta çekici, Akdeniz Bölgesi'nin neresinde olursa olsun tarafımızdan karşılanır." },
  { q: "Antalya dışındayım, süreç benim için değişir mi?", a: "Değişmez. Adana, Mersin, Hatay ve diğer illerde de aynı adımlar işler; yalnızca randevu saatleri mesafeye göre planlanır." },
];

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Nasıl Çalışır?", href: routes.howItWorks }]} />

      <PageHero
        image="/images/heroes/6.png"
        eyebrow="Şeffaf ve Kolay Süreç"
        title="Fotoğraftan Nakite: Sürecin Tamamı"
        description="Akdeniz'de aracınızı satmak üç temel adımdan oluşur: fotoğraf gönderin, nakit teklifinizi alın, noterde devredin. Aradaki her detayı aşağıda görebilirsiniz."
      >
        <CtaGroup location="hero" />
      </PageHero>

      {/* Detailed timeline */}
      <Section tone="white">
        <SectionHeading eyebrow="Adım Adım" title="Sürecin Tüm Aşamaları" />
        <ol className="mx-auto mt-10 max-w-3xl space-y-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-5 rounded-[14px] border border-line bg-cream-50 p-5 md:p-6"
            >
              <div className="flex flex-col items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                  <s.icon size={22} strokeWidth={1.9} />
                </span>
                {i < steps.length - 1 && <span className="mt-2 w-px flex-1 bg-line-strong" />}
              </div>
              <div className="pb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gold-700">ADIM {i + 1}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-secondary">{s.desc}</p>
                <div className="mt-3 grid gap-2 text-[13px] sm:grid-cols-2">
                  <p className="rounded-[8px] bg-white px-3 py-2 text-ink-muted">
                    <span className="font-semibold text-ink">Siz:</span> {s.user}
                  </p>
                  <p className="rounded-[8px] bg-white px-3 py-2 text-ink-muted">
                    <span className="font-semibold text-ink">Biz:</span> {s.us}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Prepare checklist */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Sizin Hazırlamanız Gerekenler" align="left" />
            <IconList
              className="mt-6"
              items={[
                "Aracın ruhsatı ve plaka bilgisi",
                "Telefonla çekilmiş güncel fotoğraflar",
                "Hasarın nasıl oluştuğuna dair birkaç cümle",
                "Bakım ve ekspertiz geçmişi (varsa)",
                "Tramer dökümü veya çekme belgesi (varsa)",
              ]}
            />
          </div>
          <div>
            <SectionHeading title="Bizim Üstlendiğimiz Adımlar" align="left" />
            <IconList
              className="mt-6"
              items={[
                "30 dakikada fotoğraf üzerinden ön teklif",
                "Aracın adresinizde incelenmesi",
                "Noter randevusu ve tüm evrak hazırlığı",
                "Devir anında nakit veya hesaba ödeme",
                "Ücretsiz çekici ile aracın teslim alınması",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Offer explainer */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Beklenti Yönetimi"
          title="İlk Değerlendirme ve Nihai Teklif"
        />
        <div className="mt-10">
          <OfferExplainer />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="alt">
        <SectionHeading eyebrow="Sık Sorulan Sorular" title="Süreç Hakkında Sorular" />
        <div className="mt-10">
          <FaqAccordion items={processFaqs} />
        </div>
        <JsonLd data={faqPageLd(processFaqs)} />
      </Section>

      <FinalCta />
    </>
  );
}
