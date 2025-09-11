import { Phone, MessageCircle, MapPin } from "lucide-react";
import { formatPhoneDisplayTR } from "@/lib/links";

export default function CityHero({
  city,
  phone,
  whatsapp,
  blurb,
}: {
  city: string;
  phone: string;
  whatsapp: string;
  blurb?: string;
}) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:py-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4" />
              {city}
            </div>
            <h1 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "#1e3a8a" }}>
              {city} Hasarlı Araç Alımı
            </h1>
            <p className="mt-3 text-slate-700 max-w-2xl">
              {blurb || "Şeffaf süreç, 2 saatte ön teklif, 24 saatte alım. Ücretsiz çekici ve noter eşliğinde ödeme."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold"
                style={{ background: "#ea580c" }}
                aria-label={`Hemen Ara: ${formatPhoneDisplayTR(phone)}`}
              >
                <Phone className="h-5 w-5" />
                Hemen Ara — {formatPhoneDisplayTR(phone)}
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold"
                style={{ background: "#059669" }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{city}’de Neden Biz?</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Yerel ekip ve hızlı ulaşım</li>
              <li>• Noter eşliğinde güvenli işlem</li>
              <li>• Ücretsiz çekici desteği</li>
              <li>• Adil fiyat, açık değerleme</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
