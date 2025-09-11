// src/components/service/ServiceHero.tsx
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  BadgeCheck,
  Truck,
  Clock,
  Receipt,
  CheckCircle2,
} from "lucide-react";
import HoursChip from "./HoursChip";
import { formatPhoneDisplayTR, buildWhatsAppLink } from "@/lib/links";

export type ServiceHeroProps = {
  title: string;
  short: string;
  desc: string;
  phone: string;     // E.164 (e.g. "+90XXXXXXXXXX")
  whatsapp?: string; // optional direct WA link; otherwise we build it
};

export default function ServiceHero({
  title,
  short,
  desc,
  phone,
  whatsapp,
}: ServiceHeroProps) {
  const wa =
    whatsapp ||
    buildWhatsAppLink(phone, `Merhaba, ${title} için hızlı teklif almak istiyorum.`);

  return (
    <section className="relative bg-white" aria-labelledby="service-hero">
      {/* Subtle background glow to feel “established insurance” */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px 300px at 80% 0%, rgba(30,58,138,0.06), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: key copy + KPIs + CTAs */}
        <div>
          <h1
            id="service-hero"
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "#1e3a8a" }}
          >
            {title}
          </h1>

          <p className="mt-3 text-lg text-slate-700">{short}</p>
          <p className="mt-2 text-slate-600">{desc}</p>

          {/* KPIs */}
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3" aria-label="Hizmet özet bilgileri">
            <Kpi icon={<Clock className="h-4 w-4 text-[#1e3a8a]" />} title="2 saatte ön bilgi" />
            <Kpi icon={<Truck className="h-4 w-4 text-[#1e3a8a]" />} title="24 saatte alım" />
            <Kpi icon={<Receipt className="h-4 w-4 text-[#1e3a8a]" />} title="Gizli ücret yok" />
          </ul>

          {/* Primary CTAs (call first) */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold shadow-sm"
              style={{ background: "#ea580c" }}
              aria-label={`Hemen Ara: ${formatPhoneDisplayTR(phone)}`}
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold shadow-sm"
              style={{ background: "#059669" }}
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
            <Badge icon={<ShieldCheck className="h-4 w-4 text-[#1e3a8a]" />} label="Lisanslı şirket" />
            <Badge icon={<BadgeCheck className="h-4 w-4 text-[#059669]" />} label="Şeffaf süreç" />
            <Badge icon={<CheckCircle2 className="h-4 w-4 text-[#ea580c]" />} label="Aynı gün ödeme" />
          </ul>

          <p className="mt-3 text-xs text-slate-500">
            Tüm alım/devir işlemleri mevzuata uygun; noter, sözleşme ve ödeme belgeli olarak yapılır.
          </p>
        </div>

        {/* Right: reassurance / contact card */}
        <aside className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm" aria-label="Güvence ve iletişim">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-700 mb-3">Neden Biz?</div>
            <HoursChip />
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <Bullet>Resmî sözleşme ve fatura</Bullet>
            <Bullet>Yerinde ekspertiz & ücretsiz çekici</Bullet>
            <Bullet>Piyasa verilerine dayalı adil teklif</Bullet>
            <Bullet>Ödeme aynı gün (EFT/havale)</Bullet>
          </ul>

          <div className="mt-5 rounded-xl border bg-slate-50 p-4">
            <div className="text-sm text-slate-600">Doğrudan arayın</div>
            <a
              href={`tel:${phone}`}
              className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-slate-900"
              aria-label="Telefon"
            >
              <Phone className="h-5 w-5 text-[#ea580c]" />
              {formatPhoneDisplayTR(phone)}
            </a>
            <p className="mt-1 text-xs text-slate-500">Hafta içi & hafta sonu • 09:00 – 21:00</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-white text-sm font-semibold"
                style={{ background: "#ea580c" }}
              >
                <Phone className="h-4 w-4" />
                Hemen Ara
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-white text-sm font-semibold"
                style={{ background: "#059669" }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Fotoğraflarınız varsa WhatsApp üzerinden iletebilirsiniz; ön değerlendirme hızlanır.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ── helpers ──────────────────────────────────────────────────────────────── */
function Kpi({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <li className="rounded-xl border bg-white px-3 py-2 flex items-center gap-2">
      {icon}
      <span className="text-slate-800 font-medium">{title}</span>
    </li>
  );
}
function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-white">
      {icon}
      {label}
    </li>
  );
}
function Bullet({ children }: { children: React.ReactNode }) {
  return <li className="rounded-xl bg-white border px-3 py-2">{children}</li>;
}
