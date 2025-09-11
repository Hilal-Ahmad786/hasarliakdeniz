import Link from "next/link";
import { cities } from "@/data/cities";
import { Phone, Mail, MapPin, Shield, ExternalLink } from "lucide-react";


// ---- EDIT THESE -------------------------------------------------------------
const ORG_NAME = "Hasarlı Akdeniz";
const PHONE_DISPLAY = "+90 X XXX XX XX";
const PHONE_TEL = "+90XXXXXXXXXX";                // e.g. +905551112233
const EMAIL = "info@ornek.com";
const ADDRESS_LINE_1 = "Mahalle / Cadde / No";
const ADDRESS_LINE_2 = "İlçe, Antalya";
const MERSIS_NUMBER = "XXXXXXXXXXXXXX";
const VERGI_NO = "XXXXXXXXXX";
const GOOGLE_REVIEWS_URL = "https://g.page/r/…";  // optional
// -----------------------------------------------------------------------------

const SERVICES = [
  { label: "Hasarlı Araç Alan",       href: "/hizmetler/hasarli-arac-alan" },
  { label: "Kazalı Araç Alan",        href: "/hizmetler/kazali-arac-alan" },
  { label: "Hurda Araç Alan",         href: "/hizmetler/hurda-arac-alan" },
  { label: "Pert Araç Alan",          href: "/hizmetler/pert-arac-alan" },
  { label: "Yanmış Araç Alan",        href: "/hizmetler/yanmis-arac-alan" },
  { label: "Motor Arızalı Araç Alan", href: "/hizmetler/motor-arizali-arac-alan" },
  { label: "Çekme Belgeli Araç Alan", href: "/hizmetler/cekme-belgeli-arac-alan" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const topCities = [...cities].sort((a, b) => a.name.localeCompare(b.name, "tr"));

  return (
    <footer className="mt-16 text-slate-200" style={{ background: "#0f172a" }}>
      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-12">
        {/* Brand / Value */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md" style={{ background: "#3b82f6" }} aria-hidden />
            <span className="text-lg font-semibold">{ORG_NAME}</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Akdeniz ve komşu bölgelerde hasarlı/kazalı/pert araçlarınızı{" "}
            profesyonel ve şeffaf süreçle <strong>hızla satın alıyoruz</strong>.
          </p>

          <div className="mt-4 grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 opacity-80" aria-hidden />
              <a href={`tel:${PHONE_TEL}`} className="font-semibold text-slate-100 hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 opacity-80" aria-hidden />
              <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 opacity-80" aria-hidden />
              <address className="not-italic">
                {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
              </address>
            </div>
            {GOOGLE_REVIEWS_URL && (
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 opacity-80" aria-hidden />
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-1"
                >
                  Google Yorumları <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Nav columns */}
        <nav className="md:col-span-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Site */}
          <div>
            <h3 className="font-semibold mb-3 text-slate-100">Site</h3>
            <ul className="space-y-2 text-sm text-slate-300">
  <li><Link href="/" className="hover:underline">Anasayfa</Link></li>
  <li><Link href="/hakkimizda" className="hover:underline">Hakkımızda</Link></li>
  <li><Link href="/iletisim" className="hover:underline">İletişim</Link></li>
  <li><Link href="/#process" className="hover:underline">Süreç</Link></li>   {/* <- updated */}
  <li><Link href="/#trust" className="hover:underline">Güven</Link></li>     {/* <- updated */}
</ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="font-semibold mb-3 text-slate-100">Hizmetler</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:underline">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölgeler */}
          <div>
            <h3 className="font-semibold mb-3 text-slate-100">Bölgeler</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:underline">{c.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
  <Link href="/#areas" className="text-xs text-slate-400 hover:underline">
    Tüm şehirleri gör
  </Link> {/* <- updated */}
</div>

          </div>
          
        </nav>
      </div>

      {/* Legal strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 grid gap-4 md:grid-cols-2 items-center">
          <div className="text-xs text-slate-400">
            © {year} {ORG_NAME}. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 md:justify-end">
            <Link href="/kvkk" className="hover:underline">KVKK Aydınlatma</Link>
            <Link href="/cerez-politikasi" className="hover:underline">Çerez Politikası</Link>
            <Link href="/kullanim-sartlari" className="hover:underline">Kullanım Şartları</Link>
            <Link  href="/kvkk" className="hover:underline">KVKK Aydınlatma Metni</Link>

            <span className="opacity-80">MERSİS: {MERSIS_NUMBER}</span>
            <span className="opacity-80">Vergi No: {VERGI_NO}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
