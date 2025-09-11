import { Clock, HandCoins, ShieldCheck } from "lucide-react";

export default function CityHighlights({ city }: { city: string }) {
  const items = [
    { icon: <Clock className="h-5 w-5 text-[#1e3a8a]" />, title: "Hızlı Süreç", desc: "2 saatte ön teklif, 24 saatte alım" },
    { icon: <HandCoins className="h-5 w-5 text-[#ea580c]" />, title: "Aynı Gün Ödeme", desc: "Noter işlemi sonrası anında ödeme" },
    { icon: <ShieldCheck className="h-5 w-5 text-[#059669]" />, title: "Şeffaflık", desc: `${city} özelinde açık ve net değerleme` },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <li key={i} className="rounded-2xl border bg-white p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border mb-3">
              {it.icon}
            </div>
            <div className="font-semibold text-slate-900">{it.title}</div>
            <p className="text-sm text-slate-700 mt-1">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
