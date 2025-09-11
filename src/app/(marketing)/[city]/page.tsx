import Link from "next/link";
import { cities } from "@/data/cities";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10">
        <p>Şehir bulunamadı. <Link href="/" className="text-[#3b82f6] underline">Anasayfa</Link></p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:underline">Anasayfa</Link> <span>›</span> <span>{city.name}</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
        {city.name} Hasarlı Araç Alımı
      </h1>
      <p className="mt-2 text-slate-600">
        {city.blurb || "Yerel ekip • Şeffaf süreç • Ücretsiz çekici"}
      </p>
    </main>
  );
}
