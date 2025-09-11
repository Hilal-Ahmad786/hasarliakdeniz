// src/components/about/Timeline.tsx
import { MapPin, ClipboardCheck, PhoneCall, HandCoins } from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      icon: <PhoneCall className="h-5 w-5 text-[#ea580c]" />,
      title: "İhtiyaca Odaklı Başlangıç",
      desc: "Bölgede güven veren, şeffaf bir alım sürecine ihtiyaç vardı. Bu ihtiyaçla yola çıktık.",
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#1e3a8a]" />,
      title: "Akdeniz’de Yaygınlaşma",
      desc: "Antalya merkezli yapı, Adana, Mersin ve çevre illere saha ağı ile genişledi.",
    },
    {
      icon: <ClipboardCheck className="h-5 w-5 text-[#059669]" />,
      title: "Standartlaştırılmış Süreç",
      desc: "Belgeli, sözleşmeli ve noter eşliğinde; gizli ücret yok, sürpriz yok.",
    },
    {
      icon: <HandCoins className="h-5 w-5 text-[#ea580c]" />,
      title: "Bugün",
      desc: "2 saatte ön teklif, 24 saatte alım prensibiyle çalışıyoruz; müşteri memnuniyetine odaklıyız.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-2xl border bg-white p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#1e3a8a" }}>
          Yolculuğumuz
        </h2>
        <ol className="relative border-l pl-6 space-y-6">
          {steps.map((s, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-3 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border">
                {s.icon}
              </span>
              <div className="font-semibold text-slate-900">{s.title}</div>
              <p className="text-sm text-slate-700 mt-1">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
