import Link from "next/link";
import {
  Building2,
  Star,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

// ---- EDIT THESE -------------------------------------------------------------
const MERSIS_NUMBER = "XXXXXXXXXXXXXX";
const VERGI_NO = "XXXXXXXXXX";
const GOOGLE_REVIEWS_URL = "https://g.page/r/…";   // your public reviews link
const MAPS_URL = "https://maps.google.com/?q=…";   // your office on Google Maps
const TSE_CERT_URL = "#";                           // if applicable
// -----------------------------------------------------------------------------

type Badge = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href?: string;
  cta?: string;
  aria?: string;
};

export default function TrustBadges() {
  const items: Badge[] = [
    {
      title: "Lisanslı Şirket",
      subtitle: `MERSİS: ${MERSIS_NUMBER} • Vergi No: ${VERGI_NO}`,
      icon: iconWrap(<Building2 className="h-4 w-4" />),
      href: "#", // put your public registry link if available
      cta: "Detay",
      aria: "Lisans bilgilerini görüntüle",
    },
    {
      title: "Gerçek Yorumlar",
      subtitle: "Google ⭐ 4.9/5 (son 6 ay)",
      icon: iconWrap(<Star className="h-4 w-4" />),
      href: GOOGLE_REVIEWS_URL,
      cta: "Yorumları Gör",
      aria: "Google yorumlarını aç",
    },
    {
      title: "Şeffaf Süreç",
      subtitle: "Gizli ücret yok • Net adımlar",
      icon: iconWrap(<BadgeCheck className="h-4 w-4" />),
      href: "/#process",
      cta: "Süreci İncele",
      aria: "Süreç adımlarını gör",
    },
    {
      title: "Fiziksel Adres",
      subtitle: "Randevu ile araç görme / ekspertiz",
      icon: iconWrap(<MapPin className="h-4 w-4" />),
      href: MAPS_URL,
      cta: "Haritada Aç",
      aria: "Ofisi haritada aç",
    },
    {
      title: "KVKK Uyumlu",
      subtitle: "Aydınlatma metni & açık rıza",
      icon: iconWrap(<ShieldCheck className="h-4 w-4" />),
      href: "/kvkk",
      cta: "KVKK",
      aria: "KVKK metnini aç",
    },
    {
      title: "Belgelendirme",
      subtitle: "TSE / Hizmet Yeterlilik (varsa)",
      icon: iconWrap(<FileCheck className="h-4 w-4" />),
      href: TSE_CERT_URL,
      cta: "Belge",
      aria: "Belgeyi görüntüle",
    },
  ];

  return (
    <section id="trust" aria-label="Güven ve doğrulama unsurları" className="bg-slate-50 border-y">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
          Hemen Güven Veren Unsurlar
        </h2>
        <p className="text-slate-600 mt-1">Kurumsal, şeffaf ve doğrulanabilir.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border bg-white p-5 transition hover:shadow-sm"
            >
              <div className="flex items-start gap-3">
                {b.icon}
                <div>
                  <h3 className="font-semibold text-slate-900">{b.title}</h3>
                  <p className="text-slate-600 text-sm mt-0.5">{b.subtitle}</p>
                </div>
              </div>

              {b.href && (
                <div className="mt-4">
                  <Link
                    href={b.href}
                    aria-label={b.aria || b.title}
                    target={b.href.startsWith("http") ? "_blank" : undefined}
                    rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium"
                    style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
                  >
                    {b.cta || "Aç"}
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function iconWrap(icon: React.ReactNode) {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-md"
      style={{ background: "#eef2ff", color: "#1e3a8a" }}
      aria-hidden
    >
      {icon}
    </div>
  );
}
