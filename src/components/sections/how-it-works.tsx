import { FileText, SearchCheck, Banknote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const steps = [
  {
    icon: FileText,
    title: "Fotoğrafları gönderin",
    desc: "Aracın ve hasarın net fotoğraflarını form ya da WhatsApp üzerinden iletin; araç yerinden oynamaz.",
  },
  {
    icon: SearchCheck,
    title: "Teklifinizi alın",
    desc: "Aracınız durumuna göre değerlendirilir; teklif gerekçeleriyle iletilir ve sizi bağlamaz.",
  },
  {
    icon: Banknote,
    title: "Noterde devri tamamlayın",
    desc: "Anlaşma sonrası devir, ödeme ve teslim adımları resmi zeminde birlikte planlanır.",
  },
];

/** Numbered structural cards — sharp corners, navy number blocks, gold top rule. */
export function HowItWorks() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Nasıl Çalışır?"
        title="Üç Adımda Net Süreç"
        intro="Başvurudan teslime kadar her adım baştan bellidir; sürpriz yoktur."
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
