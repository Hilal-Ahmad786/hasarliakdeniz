"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cities } from "@/data/cities";
import { Phone, MapPin, Search } from "lucide-react";

// ---- EDIT THESE (fallback for cities without per-city phone) -----------------
const DEFAULT_PHONE_DISPLAY = "0 (536) 929 86 06";
const DEFAULT_PHONE_TEL = "+905369298606";
// -----------------------------------------------------------------------------

export default function ServiceAreas() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const norm = (s: string) =>
      s
        .toLocaleLowerCase("tr")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
    const nq = norm(q);
    return cities
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, "tr"))
      .filter((c) => {
        if (!nq) return true;
        return (
          norm(c.name).includes(nq) ||
          c.slug.includes(nq) ||
          (c.blurb && norm(c.blurb).includes(nq))
        );
      });
  }, [q]);

  return (
    <section id="areas" aria-label="Hizmet verdiğimiz bölgeler" className="mx-auto max-w-7xl px-4 py-12">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
            Akdeniz ve Komşu Bölgelerde Hizmet
          </h2>
          <p className="text-slate-600 mt-1">
            Akdeniz illerine ek olarak Gaziantep, Diyarbakır, Şanlıurfa ve Mardin’deyiz.
          </p>
        </div>

        {/* search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Şehir ara…"
            className="input pl-9"
            aria-label="Şehir ara"
          />
        </div>
      </header>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {list.map((c) => {
          const tel = c.phone || DEFAULT_PHONE_TEL;
          const telDisp = c.phone || DEFAULT_PHONE_DISPLAY;
          return (
            <article key={c.slug} className="rounded-2xl border bg-white p-4 flex flex-col justify-between">
              <div className="flex items-start gap-2">
                <div
                  className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md"
                  style={{ background: "#eef2ff", color: "#1e3a8a" }}
                  aria-hidden
                >
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{c.name}</h3>
                  <p className="text-slate-600 text-xs mt-0.5 line-clamp-2">
                    {c.blurb || "Yerel ekip • Şeffaf süreç • Ücretsiz çekici"}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2">
                <a
                  href={`tel:${tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-white text-sm font-semibold"
                  style={{ background: "#ea580c" }}
                  aria-label={`${c.name} için hemen ara: ${telDisp}`}
                >
                  <Phone className="h-4 w-4" />
                  Ara
                </a>
                <Link
                  href={`/${c.slug}`}
                  className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium border"
                  style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
                  aria-label={`${c.name} şehir sayfasını aç`}
                >
                  Şehir Sayfası
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Aradığınız şehri bulamazsanız bizi arayın — yönlendirelim.
      </p>
    </section>
  );
}
