import {
  MessageCircle,
  CarFront,
  ShieldCheck,
  MapPin,
  Landmark,
  Clock3,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const benefits = [
  { icon: MessageCircle, title: "Net iletişim", desc: "Telefon ve WhatsApp üzerinden her adımda açık bilgilendirme yapılır." },
  { icon: CarFront, title: "Bölge koşullarına hâkim değerlendirme", desc: "Dolu göçüğü, sel teması ve sıcaklık kaynaklı arızalar dâhil her durum ayrı ele alınır." },
  { icon: ShieldCheck, title: "Kayıtlı ve şeffaf işlem", desc: "Devir ve ödeme adımları resmi zeminde, açık şekilde yürütülür." },
  { icon: MapPin, title: "Antalya'dan Hatay'a hizmet", desc: "Sahilden iç kesimlere, Akdeniz genelinde yerinden başvuru alınır." },
  { icon: Landmark, title: "Noter sürecinde yönlendirme", desc: "Randevu, belge ve devir adımlarında yanınızda oluruz." },
  { icon: Clock3, title: "Bekletmeyen süreç", desc: "Talebiniz ulaştığında ekibimiz kısa sürede sizinle iletişime geçer." },
];

/** White editorial benefits — navy icon tiles, ruled list, no dark block. */
export function WhyUs() {
  return (
    <Section tone="alt">
      <SectionHeading
        eyebrow="Neden Hasarlı Akdeniz?"
        title="Bölgesini Tanıyan Kurumsal Alım"
        intro="Akdeniz'in yolunu, iklimini ve hasar profilini bilen bir ekiple, süreci baştan sona net yönetin."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-4 bg-white p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[6px] bg-brand-800 text-gold-600">
              <b.icon size={24} strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-base font-semibold text-ink">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
