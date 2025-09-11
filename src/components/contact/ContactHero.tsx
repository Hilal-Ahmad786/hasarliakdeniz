// src/components/contact/ContactHero.tsx
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink, formatPhoneDisplayTR } from "@/lib/links";

export default function ContactHero({
  title = "Uzmanla Hemen Görüşün",
  subtitle = "2 saatte ön teklif • 24 saatte alım • Gizli ücret yok",
  phone,
  whatsapp,
}: {
  title?: string;
  subtitle?: string;
  phone: string;
  whatsapp: string;
}) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:py-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h1
              className="text-2xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "#1e3a8a" }}
            >
              {title}
            </h1>
            <p className="mt-3 text-slate-700">{subtitle}</p>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ShieldCheck className="h-4 w-4 text-[#1e3a8a]" />
                Şeffaf süreç
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                Ücretsiz çekici
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ShieldCheck className="h-4 w-4 text-[#ea580c]" />
                Aynı gün ödeme
              </li>
            </ul>

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
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold"
                style={{ background: "#059669" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile yazın"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Decorative card */}
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Ne zaman aramalıyım?</h3>
            <p className="mt-2 text-sm text-slate-700">
              Hasar sonrası hızlı hareket etmek en doğru teklifi almanızı sağlar.
              Fotoğraf paylaşımına uygunsanız WhatsApp’tan iletin; uzmanlarımız aynı gün dönüş yapsın.
            </p>
            <div className="mt-4 rounded-xl border bg-white px-4 py-3 text-sm text-slate-600">
              <p>Belgeleriniz eksikse sorun değil—süreç boyunca adım adım yönlendiriyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
