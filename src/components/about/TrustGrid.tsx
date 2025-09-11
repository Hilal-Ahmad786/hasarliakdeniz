// src/components/about/TrustGrid.tsx
import { BadgeCheck, FileCheck2, FileText, Building2 } from "lucide-react";

export default function TrustGrid() {
  const items = [
    {
      icon: <BadgeCheck className="h-5 w-5 text-[#1e3a8a]" />,
      title: "Lisans & Yetki",
      desc: "Faaliyet izinleri ve ticaret sicil kayıtları günceldir.",
    },
    {
      icon: <FileText className="h-5 w-5 text-[#059669]" />,
      title: "Sözleşme & Noter",
      desc: "Tüm alımlar noter ve sözleşme ile şeffaf şekilde yapılır.",
    },
    {
      icon: <FileCheck2 className="h-5 w-5 text-[#ea580c]" />,
      title: "KVKK Uyumlu",
      desc: "Kişisel verileriniz yalnızca değerlendirme amacıyla işlenir.",
    },
    {
      icon: <Building2 className="h-5 w-5 text-[#1e3a8a]" />,
      title: "Yerel Varlık",
      desc: "Akdeniz bölgesinde güçlü saha ağı ve hızlı dönüş.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-2xl border bg-white p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#1e3a8a" }}>
          Güven Unsurları
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <li key={i} className="rounded-xl border bg-slate-50 p-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border mb-3">
                {it.icon}
              </div>
              <div className="font-semibold text-slate-900">{it.title}</div>
              <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
