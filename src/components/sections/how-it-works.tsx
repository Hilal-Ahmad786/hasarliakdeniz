import { FileText, SearchCheck, Banknote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const steps = [
  {
    icon: FileText,
    title: "Bilgilerinizi paylaşın",
    desc: "Araç bilgilerini ve güncel fotoğrafları form veya WhatsApp üzerinden iletin.",
  },
  {
    icon: SearchCheck,
    title: "Değerlendirme ve teklif alın",
    desc: "Uzman ekibimiz aracınızı değerlendirir ve size teklifimizi iletir.",
  },
  {
    icon: Banknote,
    title: "Noter, ödeme ve teslim",
    desc: "Anlaşma sonrası noter devri, ödeme ve teslim süreci güvenle planlanır.",
  },
];

/** Numbered structural cards — sharp corners, navy number blocks, gold top rule. */
export function HowItWorks() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Nasıl Çalışır?"
        title="Aracınızı 3 Adımda Değerlendirin"
        intro="Süreç açık ve anlaşılırdır. Her adımda sizi bilgilendiririz."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="flex flex-col rounded-[8px] border border-line border-t-[3px] border-t-gold-600 bg-cream-50 p-7"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-[6px] bg-brand-800 text-lg font-bold text-white">
                {i + 1}
              </span>
              <s.icon size={28} className="text-brand-700" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
