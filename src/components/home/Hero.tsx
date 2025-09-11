"use client";

import { useRouter } from "next/navigation";
import { Phone, MessageCircle, ShieldCheck, Star, BadgeCheck } from "lucide-react";
import { cities } from "@/data/cities";
import { useState } from "react";

// ---- EDIT THESE -------------------------------------------------------------
const PHONE_DISPLAY = "0 (536) 929 86 06";
const PHONE_TEL = "+905369298606";             // e.g. +905551112233
const WHATSAPP_URL = "https://wa.me/905369298606";
// -----------------------------------------------------------------------------

export default function Hero() {
  const router = useRouter();
  const [city, setCity] = useState("");

  function onGoCity() {
    if (!city) return;
    router.push(`/${city}`);
  }

  return (
    <section
      className="border-b"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f8fafc)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: core messaging */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: "#1e3a8a" }}>
            Endişeyi Güvene Dönüştüren<br />
            Profesyonel Araç Alımı
          </h1>
          <p className="mt-4 text-slate-700">
            Kurumsal süreç, yerel ekip, <strong>gizli ücret yok</strong>. Telefonla anında yönlendirme,
            <strong> ~2 saatte ön bilgi</strong>, <strong>24 saatte alım</strong>.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold"
              style={{ background: "#ea580c" }}
              aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
            </a>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold"
              style={{ background: "#059669" }}
              aria-label="WhatsApp ile yazın"
              target="_blank" rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href="#process"
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border"
              style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
            >
              Süreci Gör
            </a>
          </div>

          {/* Hours */}
          <p className="mt-3 text-xs text-slate-500">
            Hafta içi 09:00–19:00 • Cumartesi 10:00–17:00
          </p>

          {/* Credibility chips */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Chip icon={<ShieldCheck className="h-4 w-4" />} title="Lisanslı Şirket" desc="MERSİS / Vergi No" />
            <Chip icon={<Star className="h-4 w-4" />} title="Gerçek Yorumlar" desc="Google 4.9/5" />
            <Chip icon={<BadgeCheck className="h-4 w-4" />} title="Şeffaf Süreç" desc="Gizli ücret yok" />
          </div>
        </div>

        {/* Right: call box + city quick select */}
        <aside className="rounded-2xl border bg-white p-6 shadow-card">
          <div className="rounded-xl border p-5">
            <div className="text-sm text-slate-600">Telefon</div>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-1 block text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: "#1e3a8a" }}
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-sm text-slate-600">
              Hemen arayın, 1–2 dakikada yönlendirelim. Çekici ve noter desteği sağlanır.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white font-semibold"
                style={{ background: "#ea580c" }}
              >
                <Phone className="h-4 w-4" />
                Hemen Ara
              </a>
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold border"
                style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick city selector */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Bölgemizde hizmet verdiğimiz şehirler
            </label>
            <div className="flex gap-2">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input"
                aria-label="Şehir seçin"
              >
                <option value="">Şehir seçin…</option>
                {cities.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
              <button
                onClick={onGoCity}
                className="rounded-xl px-4 py-2 text-white font-semibold"
                style={{ background: "#3b82f6" }}
                aria-label="Şehir sayfasına git"
              >
                Git
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Akdeniz + Gaziantep, Diyarbakır, Şanlıurfa, Mardin.
            </p>
          </div>

          {/* Tiny reassurance bullets */}
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li>• ~2 saatte ön bilgi (yoğunluğa göre)</li>
            <li>• Yerinde/çekici ekspertiz — <strong>ücretsiz</strong></li>
            <li>• <strong>24 saat</strong> içinde noter & ödeme</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Chip({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-3 flex items-start gap-3">
      <div
        className="h-8 w-8 rounded-md flex items-center justify-center"
        style={{ background: "#eef2ff", color: "#1e3a8a" }}
        aria-hidden
      >
        {icon}
      </div>
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-slate-600 text-xs">{desc}</div>
      </div>
    </div>
  );
}
