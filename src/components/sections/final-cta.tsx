import { Section } from "@/components/ui/section";
import { CtaGroup } from "./cta-buttons";

/** Full-width navy conversion band with gold rules — no rounded card. */
export function FinalCta({
  title = "Aracınız Ne Durumda Olursa Olsun, Sormak Ücretsiz",
  subtitle = "Fotoğrafları gönderin, ekibimiz kısa sürede dönüş yapsın. Teklif almak sizi hiçbir şekilde bağlamaz.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section
      tone="charcoal"
      className="border-y-[3px] border-gold-600 bg-gradient-to-br from-brand-900 to-charcoal-950"
    >
      <div className="text-center">
        <h2 className="mx-auto max-w-2xl text-[26px] font-bold leading-tight text-white md:text-[34px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-base">
          {subtitle}
        </p>
        <div className="mt-8 flex justify-center">
          <CtaGroup size="lg" showPhone location="cta_banner" className="justify-center" />
        </div>
      </div>
    </Section>
  );
}
