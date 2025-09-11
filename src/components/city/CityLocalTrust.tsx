import { MapPin, Car, Users } from "lucide-react";

export default function CityLocalTrust({ city }: { city: string }) {
  const items = [
    { icon: <MapPin className="h-5 w-5 text-[#1e3a8a]" />, title: "Yerel Varlık", desc: `${city} ve çevresinde aktif saha ekibi` },
    { icon: <Car className="h-5 w-5 text-[#ea580c]" />, title: "Ücretsiz Çekici", desc: "Konumunuza çekici yönlendirme" },
    { icon: <Users className="h-5 w-5 text-[#059669]" />, title: "Referanslar", desc: "Bölgeden gerçek müşteri deneyimleri" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <div className="rounded-2xl border bg-white p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#1e3a8a" }}>
          {city}’de Güven Unsurları
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
