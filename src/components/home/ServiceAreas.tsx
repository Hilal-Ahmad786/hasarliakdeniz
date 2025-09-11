// src/components/home/ServiceAreas.tsx
import Link from "next/link";
import { cities } from "@/data/cities";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/company";
import { buildWhatsAppLink, formatPhoneDisplayTR } from "@/lib/links";

const DEFAULT_PHONE_TEL = COMPANY.phoneTel;
const DEFAULT_PHONE_DISPLAY =
  COMPANY.phoneDisplay || formatPhoneDisplayTR(COMPANY.phoneTel);

export default function ServiceAreas() {
  const list = cities;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-6">
        <h2 className="text-2xl font-bold" style={{ color: "#1e3a8a" }}>
          Hizmet Verdiğimiz Bölgeler
        </h2>
        <p className="mt-1 text-slate-600">
          Akdeniz ve çevresinde yerel ekiplerimizle hızlı, şeffaf alım.
        </p>
      </header>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {list.map((c) => {
          const tel = DEFAULT_PHONE_TEL;
          const telDisp = DEFAULT_PHONE_DISPLAY;
          const wa = buildWhatsAppLink(
            tel,
            `Merhaba, ${c.name} için hızlı teklif almak istiyorum.`
          );

          return (
            <article
              key={c.slug}
              className="rounded-2xl border bg-white p-4 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border mb-2">
                  <MapPin className="h-4 w-4 text-[#1e3a8a]" />
                </div>
                <h3 className="font-semibold text-slate-900">{c.name}</h3>
                <p className="text-sm text-slate-600 mt-1">
                  {c.blurb || "Hızlı ve şeffaf alım"}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href={`tel:${tel}`}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm text-white"
                  style={{ background: "#ea580c" }}
                  aria-label={`Hemen Ara: ${telDisp}`}
                >
                  <Phone className="h-4 w-4" />
                  Ara
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm text-white"
                  style={{ background: "#059669" }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <Link
                  href={`/${c.slug}`}
                  className="ml-auto text-xs sm:text-sm font-medium text-[#1e3a8a] underline underline-offset-2"
                >
                  Detay
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
