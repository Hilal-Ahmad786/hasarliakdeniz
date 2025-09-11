"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { City } from "@/data/cities";
import { MapPin, Search } from "lucide-react";

export default function CityDirectory({ cities }: { cities: City[] }) {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return cities;
    return cities.filter(c =>
      c.name.toLowerCase().includes(n) ||
      (c.blurb ? c.blurb.toLowerCase().includes(n) : false)
    );
  }, [q, cities]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: "#1e3a8a" }}>
            Bölgeler
          </h1>
          <p className="mt-1 text-slate-600">Akdeniz + çevre illerde yerel ekip ve hızlı alım.</p>
        </div>

        <div className="relative w-full sm:w-80">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Şehir ara…"
            className="w-full rounded-xl border bg-white px-3 py-2 pr-9 text-sm"
            aria-label="Şehir ara"
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        </div>
      </div>

      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((c) => (
          <li key={c.slug} className="rounded-2xl border bg-white p-5 hover:shadow-sm transition">
            <Link href={`/${c.slug}`} className="block">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border mb-3">
                <MapPin className="h-5 w-5 text-[#1e3a8a]" />
              </div>
              <div className="text-lg font-semibold text-slate-900">{c.name}</div>
              <p className="text-sm text-slate-600 mt-1">{c.blurb || "Hızlı ve şeffaf alım"}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
