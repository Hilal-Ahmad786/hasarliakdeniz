"use client";

import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import Script from "next/script";
import { cities } from "@/data/cities";

// ---- EDIT THESE -------------------------------------------------------------
const ORG_NAME = "Hasarlı Akdeniz";
const PHONE_DISPLAY = "0 (536) 929 86 06";
const PHONE_TEL = "+905369298606";                 // e.g. +905551112233
const WHATSAPP_URL = "https://wa.me/905369298606"; // e.g. https://wa.me/905369298606
const EMAIL = "info@ornek.com";

const ADDRESS_LINE_1 = "Mahalle / Cadde / No";
const ADDRESS_LINE_2 = "İlçe, Antalya";
const ADDRESS_COUNTRY = "Türkiye";

// Use a precise Google Maps embed URL for your address (or keep a city-level map for now)
const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=antalya&t=&z=11&ie=UTF8&iwloc=&output=embed";

const OPENING_HOURS: { label: string; value: string }[] = [
  { label: "Hafta içi", value: "09:00–19:00" },
  { label: "Cumartesi", value: "10:00–17:00" },
  { label: "Pazar", value: "Kapalı" },
];
// -----------------------------------------------------------------------------

export default function ContactStrip() {
  // JSON-LD (LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: ORG_NAME,
    telephone: PHONE_TEL,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`,
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: cities.map((c) => c.name),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
    ],
  };

  return (
    <>
      <section className="bg-slate-50 border-y">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-6 items-center">
          {/* Left: contact info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
              Ofis & İletişim
            </h2>
            <p className="text-slate-600 mt-2">
              Fiziksel adres ve yasal bilgiler açıkça paylaşılır. Telefonla hızlı yönlendirme;
              çekici ve noter desteği sağlanır.
            </p>

            {/* Call-first CTAs */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white font-semibold"
                style={{ background: "#ea580c" }}
                aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
              >
                <Phone className="h-5 w-5" />
                Hemen Ara
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold border"
                style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
                aria-label="WhatsApp ile yazın"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold border"
                style={{ borderColor: "#cbd5e1", color: "#0f172a" }}
                aria-label="E-posta gönder"
              >
                <Mail className="h-5 w-5" />
                E-posta
              </a>
            </div>

            {/* Details */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="h-9 w-9 rounded-md flex items-center justify-center"
                    style={{ background: "#eef2ff", color: "#1e3a8a" }}
                    aria-hidden
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <address className="not-italic">
                    <div className="font-semibold text-slate-900">Adres</div>
                    <div className="text-slate-700 text-sm">{ADDRESS_LINE_1}</div>
                    <div className="text-slate-700 text-sm">{ADDRESS_LINE_2}</div>
                    <div className="text-slate-500 text-xs">{ADDRESS_COUNTRY}</div>
                  </address>
                </div>
                <div className="mt-3">
                  <a
                    href={MAPS_EMBED_SRC.replace("output=embed", "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium"
                    style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
                    aria-label="Haritada aç"
                  >
                    Haritada Aç
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="h-9 w-9 rounded-md flex items-center justify-center"
                    style={{ background: "#eef2ff", color: "#1e3a8a" }}
                    aria-hidden
                  >
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Çalışma Saatleri</div>
                    <ul className="mt-1 text-sm text-slate-700 space-y-0.5">
                      {OPENING_HOURS.map((r) => (
                        <li key={r.label} className="flex gap-2">
                          <span className="w-28 text-slate-500">{r.label}</span>
                          <span>{r.value}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-500 mt-2">
                      Saat dışı aramalarda ilk mesai saatinde dönüş yapılır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & email line for quick copy */}
            <div className="mt-4 text-sm text-slate-700">
              <span className="font-medium">Telefon:</span>{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-[#3b82f6] font-semibold">
                {PHONE_DISPLAY}
              </a>{" "}
              • <span className="font-medium">E-posta:</span>{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#3b82f6]">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-2xl overflow-hidden border bg-white aspect-video">
            <iframe
              src={MAPS_EMBED_SRC}
              className="h-full w-full"
              loading="lazy"
              aria-label="Ofis konumu (Google Haritalar)"
            />
          </div>
        </div>
      </section>

      {/* SEO: LocalBusiness JSON-LD */}
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
