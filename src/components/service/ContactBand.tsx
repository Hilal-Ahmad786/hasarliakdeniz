// src/components/service/ContactBand.tsx
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import HoursChip from "./HoursChip";
import { buildWhatsAppLink, formatPhoneDisplayTR } from "@/lib/links";

export default function ContactBand({
  title = "Hızlı Teklif için Hemen İletişime Geçin",
  subtitle = "2 saatte ön bilgi • 24 saatte alım • Gizli ücret yok",
  phone,
  whatsappMessage = "Merhaba, hızlı teklif almak istiyorum.",
  showHours = true,
  note = "KVKK kapsamında bilgileriniz yalnızca ön değerlendirme amacıyla kullanılır.",
}: {
  title?: string;
  subtitle?: string;
  phone: string;              // E.164, e.g. "0 (536) 929 86 06XX"
  whatsappMessage?: string;   // prefilled WhatsApp text
  showHours?: boolean;
  note?: string;
}) {
  const wa = buildWhatsAppLink(phone, whatsappMessage);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10" aria-labelledby="contact-band">
      <div className="rounded-2xl border bg-white p-6 md:p-8">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-center">
          {/* Copy */}
          <div>
            <h2
              id="contact-band"
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: "#1e3a8a" }}
            >
              {title}
            </h2>
            <p className="mt-2 text-slate-700">{subtitle}</p>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ShieldCheck className="h-4 w-4 text-[#1e3a8a]" />
                Şeffaf ve belgeli süreç
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                Ücretsiz çekici
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ShieldCheck className="h-4 w-4 text-[#ea580c]" />
                Aynı gün ödeme
              </li>
              {showHours && (
                <li className="inline-flex items-center">
                  <HoursChip />
                </li>
              )}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-white font-semibold shadow-sm"
              style={{ background: "#ea580c" }}
              aria-label={`Hemen Ara: ${formatPhoneDisplayTR(phone)}`}
            >
              <Phone className="h-5 w-5" />
              Hemen Ara — {formatPhoneDisplayTR(phone)}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-white font-semibold shadow-sm"
              style={{ background: "#059669" }}
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp’tan Yazın
            </a>
            <p className="text-xs text-slate-500">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
