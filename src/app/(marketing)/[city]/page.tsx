import { cities } from "@/data/cities";

export async function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find(c => c.slug === params.city);
  if (!city) return <main className="p-6">Şehir bulunamadı.</main>;
  return (
    <main className="p-6">
      TODO: {city.name} landing — kısa blurb: {city.blurb || "Eklenecek"}
    </main>
  );
}
