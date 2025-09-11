import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Hizmetler",
  description: "Hasarlı, kazalı, hurda, pert, yanmış, motor arızalı ve çekme belgeli araç alımı.",
};

export default function ServicesIndex() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold" style={{color:"#1e3a8a"}}>Hizmetler</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => (
          <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="rounded-2xl border bg-white p-5 hover:shadow-md">
            <div className="text-lg font-semibold text-slate-900">{s.title}</div>
            <p className="text-slate-600 mt-1">{s.short}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
