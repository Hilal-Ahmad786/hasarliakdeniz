import Link from "next/link";

const SERVICES = [
  { slug: "hasarli-arac-alan",       title: "Hasarlı Araç Alan" },
  { slug: "kazali-arac-alan",        title: "Kazalı Araç Alan" },
  { slug: "hurda-arac-alan",         title: "Hurda Araç Alan" },
  { slug: "pert-arac-alan",          title: "Pert Araç Alan" },
  { slug: "yanmis-arac-alan",        title: "Yanmış Araç Alan" },
  { slug: "motor-arizali-arac-alan", title: "Motor Arızalı Araç Alan" },
  { slug: "cekme-belgeli-arac-alan", title: "Çekme Belgeli Araç Alan" },
];

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = SERVICES.find((s) => s.slug === params.slug);
  if (!svc) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10">
        <p>Hizmet bulunamadı. <Link href="/" className="text-[#3b82f6] underline">Anasayfa</Link></p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:underline">Anasayfa</Link> <span>›</span>{" "}
        <Link href="/#services" className="hover:underline">Hizmetler</Link> <span>›</span>{" "}
        <span>{svc.title}</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
        {svc.title}
      </h1>
      <p className="mt-2 text-slate-600">Bu hizmet hakkında yakında detaylı içerik eklenecek.</p>
    </main>
  );
}
