// src/components/about/AboutHero.tsx
import { Phone, MessageCircle, ShieldCheck, ThumbsUp, HandCoins } from "lucide-react";
import HoursChip from "@/components/service/HoursChip";
import { formatPhoneDisplayTR } from "@/lib/links";

export default function AboutHero({
  phone,
  whatsapp,
}: {
  phone: string;
  whatsapp: string;
}) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:py-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "#1e3a8a" }}>
              Akdeniz’de Hasarlı Araç Alımında Güvenin Adresi
            </h1>
            <p className="mt-3 text-slate-700 max-w-2xl">
              “Profesyonel Güvence” anlayışıyla; şeffaf süreç, hızlı iletişim ve adil fiyatlandırma.
              2 saatte ön teklif, 24 saatte alım. Ücretsiz çekici ve noter eşliğinde ödeme.
            </p>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ShieldCheck className="h-4 w-4 text-[#1e3a8a]" />
                Belgeli & şeffaf süreç
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <HandCoins className="h-4 w-4 text-[#ea580c]" />
                Aynı gün ödeme
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-slate-50">
                <ThumbsUp className="h-4 w-4 text-[#059669]" />
                Ücretsiz çekici
              </li>
              <li className="inline-flex items-center">
                <HoursChip />
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

          {/* Right info card */}
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Neden bizi tercih ediyorlar?</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Açık ve dürüst değerleme; kalem kalem anlatım</li>
              <li>• Evrak rehberliği ve noter işlem desteği</li>
              <li>• Yerinde ekspertiz veya çekici ile teslim</li>
              <li>• Bölgesel deneyim: Akdeniz + çevre iller</li>
            </ul>
            <div className="mt-4 rounded-xl border bg-white px-4 py-3 text-sm text-slate-600">
              “En stresli anda bile profesyonel, hızlı ve güven veren yaklaşım” — müşteri yorumlarının özetidir.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
