// src/components/about/Values.tsx
import { Scale, Zap, Handshake } from "lucide-react";

export default function Values() {
  const vals = [
    {
      icon: <Scale className="h-5 w-5 text-[#1e3a8a]" />,
      title: "Şeffaflık",
      desc: "Değerlemeyi açıkça anlatır; gizli ücret çıkarmaz.",
    },
    {
      icon: <Zap className="h-5 w-5 text-[#ea580c]" />,
      title: "Hız",
      desc: "2 saatte ön teklif, 24 saatte alım hedefi.",
    },
    {
      icon: <Handshake className="h-5 w-5 text-[#059669]" />,
      title: "Adalet",
      desc: "Piyasa verisine dayalı adil fiyat politikası.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid md:grid-cols-3 gap-4">
        {vals.map((v, i) => (
          <div key={i} className="rounded-2xl border bg-white p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border mb-3">
              {v.icon}
            </div>
            <h3 className="font-semibold text-slate-900">{v.title}</h3>
            <p className="text-sm text-slate-700 mt-1">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
