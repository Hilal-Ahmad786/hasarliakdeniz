// src/components/service/RelatedServices.tsx
import Link from "next/link";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function RelatedServices({
  currentSlug,
  limit = 4,
  title = "İlgili Hizmetler",
  showAllLink = true,
}: {
  currentSlug: string;
  limit?: number;
  title?: string;
  showAllLink?: boolean;
}) {
  const items = services.filter(s => s.slug !== currentSlug).slice(0, limit);
  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10" aria-labelledby="related-title">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 id="related-title" className="text-xl md:text-2xl font-bold" style={{ color: "#1e3a8a" }}>
          {title}
        </h2>
        {showAllLink && (
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900"
            aria-label="Tüm hizmetleri görüntüle"
          >
            Tüm Hizmetler
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/hizmetler/${s.slug}`}
              className="group block h-full rounded-2xl border bg-white p-5 hover:shadow-sm transition-shadow"
              title={`${s.title} sayfasına git`}
            >
              <div className="text-base font-semibold text-slate-900">{s.title}</div>
              {s.short && (
                <p className="mt-1 text-sm text-slate-600 line-clamp-3">
                  {s.short}
                </p>
              )}
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#1e3a8a]">
                İncele
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
