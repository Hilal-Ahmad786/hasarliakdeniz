import { cities } from "@/data/cities";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return <main className="p-6">Şehir bulunamadı.</main>;

  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold" style={{color:"#1e3a8a"}}>
          {city.name}’da Hasarlı/Kazalı Araç Alımı
        </h1>
        <p className="text-slate-600 mt-4 max-w-2xl">{city.blurb}</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { t: "Foto & Bilgi", d: "Marka-model, yıl ve hasar fotoğraflarını ekleyin." },
            { t: "Ön Teklif (~2s)", d: "Yoğunluğa göre ~2 saatte ballpark teklif." },
            { t: "24 Saatte Alım", d: "Yerinde/çekici ekspertiz, aynı gün ödeme & noter." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-card">
              <div className="font-bold text-xl mb-2" style={{color:"#3b82f6"}}>{i + 1}</div>
              <h3 className="font-semibold text-slate-900">{s.t}</h3>
              <p className="text-slate-600 text-sm mt-1">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/#quote"
            className="inline-flex items-center rounded-xl px-5 py-3 text-white font-semibold"
            style={{background:"#059669"}}
          >
            {city.name} için Hızlı Teklif Al
          </a>
          <a
            href={`tel:${city.phone || "+90XXXXXXXXXX"}`}
            className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border"
            style={{borderColor:"#1e3a8a", color:"#1e3a8a"}}
          >
            {city.name} Ofisi: {city.phone || "+90 X XXX XX XX"}
          </a>
        </div>
      </div>
    </section>
  );
}
