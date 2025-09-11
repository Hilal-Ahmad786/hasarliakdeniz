"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin, Wrench } from "lucide-react";
import { cities } from "@/data/cities"; // already created earlier

// ---- EDIT THESE -------------------------------------------------------------
const BRAND_NAME = "Hasarlı Akdeniz";
const PHONE_TEL = "+90XXXXXXXXXX";
const PHONE_DISPLAY = "+90 X XXX XX XX";
// -----------------------------------------------------------------------------

const SERVICES = [
  { slug: "hasarli-arac-alan",       title: "Hasarlı Araç Alan" },
  { slug: "kazali-arac-alan",        title: "Kazalı Araç Alan" },
  { slug: "hurda-arac-alan",         title: "Hurda Araç Alan" },
  { slug: "pert-arac-alan",          title: "Pert Araç Alan" },
  { slug: "yanmis-arac-alan",        title: "Yanmış Araç Alan" },
  { slug: "motor-arizali-arac-alan", title: "Motor Arızalı Araç Alan" },
  { slug: "cekme-belgeli-arac-alan", title: "Çekme Belgeli Araç Alan" },
];

export default function Header() {
  const [open, setOpen] = useState(false);           // drawer closed by default
  const [svcOpen, setSvcOpen] = useState(true);      // group collapsed state (mobile)
  const [cityOpen, setCityOpen] = useState(false);
  const pathname = usePathname();

  // lock body scroll when drawer is open (mobile)
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <span
            className="inline-block h-9 w-9 rounded-2xl"
            style={{ background: "#1e3a8a" }}
            aria-hidden
          />
          <span className="font-semibold text-lg" style={{ color: "#1e3a8a" }}>
            {BRAND_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">
            Anasayfa
          </Link>

          {/* Hizmetler dropdown */}
          <div className="group relative">
            <button className="text-slate-700 hover:text-slate-900 font-medium inline-flex items-center gap-2">
              <Wrench className="h-4 w-4" /> Hizmetler
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                            absolute left-0 mt-3 w-72 rounded-2xl border bg-white shadow-lg p-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Bölgeler dropdown */}
          <div className="group relative">
            <button className="text-slate-700 hover:text-slate-900 font-medium inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Bölgeler
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                            absolute left-0 mt-3 max-h-[60vh] w-80 overflow-auto rounded-2xl border bg-white shadow-lg p-2">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/hakkimizda" className="text-slate-700 hover:text-slate-900 font-medium">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="text-slate-700 hover:text-slate-900 font-medium">
            İletişim
          </Link>

          <a
            href={`tel:${PHONE_TEL}`}
            className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white font-semibold shadow"
            style={{ background: "#ea580c" }}
            aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" />
            Ara
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border"
          aria-label="Menüyü aç"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer (renders only when open) */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Scrim */}
          <button
            type="button"
            aria-label="Kapat"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-900/40"
          />
          {/* Panel */}
          <aside
            className="absolute right-0 top-0 h-full w-[86%] max-w-[420px] bg-white shadow-xl
                       flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <span
                  className="inline-block h-9 w-9 rounded-2xl"
                  style={{ background: "#1e3a8a" }}
                  aria-hidden
                />
                <span className="font-semibold text-lg" style={{ color: "#1e3a8a" }}>
                  {BRAND_NAME}
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <Link
                href="/"
                className="block rounded-2xl bg-slate-100 px-4 py-3 font-semibold text-[#1e3a8a]"
                onClick={() => setOpen(false)}
              >
                Anasayfa
              </Link>

              {/* Hizmetler group */}
              <div className="rounded-2xl border p-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-semibold"
                  onClick={() => setSvcOpen((s) => !s)}
                >
                  <span className="inline-flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-slate-500" />
                    Hizmetler
                  </span>
                  <span className="text-slate-400">{svcOpen ? "▾" : "▸"}</span>
                </button>
                {svcOpen && (
                  <ul className="mt-3 space-y-4">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/hizmetler/${s.slug}`}
                          className="block text-lg text-slate-800"
                          onClick={() => setOpen(false)}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Hakkımızda */}
              <Link
                href="/hakkimizda"
                className="block rounded-2xl border px-4 py-3 text-slate-800"
                onClick={() => setOpen(false)}
              >
                Hakkımızda
              </Link>

              {/* Bölgeler group */}
              <div className="rounded-2xl border p-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-semibold"
                  onClick={() => setCityOpen((s) => !s)}
                >
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-slate-500" />
                    Bölgeler
                  </span>
                  <span className="text-slate-400">{cityOpen ? "▾" : "▸"}</span>
                </button>
                {cityOpen && (
                  <ul className="mt-3 grid grid-cols-1 gap-3 max-h-[50vh] overflow-auto pr-1">
                    {cities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/${c.slug}`}
                          className="block rounded-xl px-3 py-2 text-slate-800 hover:bg-slate-50"
                          onClick={() => setOpen(false)}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* İletişim */}
              <Link
                href="/iletisim"
                className="block rounded-2xl border px-4 py-3 text-slate-800"
                onClick={() => setOpen(false)}
              >
                İletişim
              </Link>
            </div>

            <div className="border-t p-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-white font-semibold shadow"
                style={{ background: "#ea580c" }}
                aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
              >
                <Phone className="h-4 w-4" />
                Hemen Ara
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
