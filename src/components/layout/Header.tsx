"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  MapPin,
  Wrench,
} from "lucide-react";

// ---- CONFIG (edit phone/WhatsApp + city & service slugs here) ---------------

const PHONE_DISPLAY = "+90 X XXX XX XX";
const PHONE_TEL = "+90XXXXXXXXXX";          // e.g., +905551112233
const WHATSAPP_URL = "https://wa.me/90XXXXXXXXXX";

type NavItem = { label: string; href: string };

const SERVICES: NavItem[] = [
  { label: "Hasarlı Araç Alan",        href: "/hizmetler/hasarli-arac-alan" },
  { label: "Kazalı Araç Alan",         href: "/hizmetler/kazali-arac-alan" },
  { label: "Hurda Araç Alan",          href: "/hizmetler/hurda-arac-alan" },
  { label: "Pert Araç Alan",           href: "/hizmetler/pert-arac-alan" },
  { label: "Yanmış Araç Alan",         href: "/hizmetler/yanmis-arac-alan" },
  { label: "Motor Arızalı Araç Alan",  href: "/hizmetler/motor-arizali-arac-alan" },
  { label: "Çekme Belgeli Araç Alan",  href: "/hizmetler/cekme-belgeli-arac-alan" },
];

// Akdeniz illeri + ek bölgeler (Gaziantep, Diyarbakır, Şanlıurfa, Mardin)
const CITIES: NavItem[] = [
  { label: "Antalya",       href: "/antalya" },
  { label: "Adana",         href: "/adana" },
  { label: "Mersin",        href: "/mersin" },
  { label: "Hatay",         href: "/hatay" },
  { label: "Osmaniye",      href: "/osmaniye" },
  { label: "Kahramanmaraş", href: "/kahramanmaras" },
  { label: "Isparta",       href: "/isparta" },
  { label: "Burdur",        href: "/burdur" },
  { label: "Gaziantep",     href: "/gaziantep" },
  { label: "Diyarbakır",    href: "/diyarbakir" },
  { label: "Şanlıurfa",     href: "/sanliurfa" },
  { label: "Mardin",        href: "/mardin" },
];

// -----------------------------------------------------------------------------

export default function Header() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openCities, setOpenCities] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const citiesRef = useRef<HTMLDivElement | null>(null);

  // sticky shadow after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close dropdowns on outside click / ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenServices(false);
        setOpenCities(false);
        setOpenMobile(false);
      }
    }
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (
        servicesRef.current &&
        !servicesRef.current.contains(t)
      ) setOpenServices(false);
      if (
        citiesRef.current &&
        !citiesRef.current.contains(t)
      ) setOpenCities(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur border-b transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Top line */}
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="h-8 w-8 rounded-md"
            style={{ background: "#1e3a8a" }}
            aria-hidden
          />
          <span className="font-semibold" style={{ color: "#1e3a8a" }}>
            Hasarlı Akdeniz
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink href="/" active={isActive("/")}>
            Anasayfa
          </NavLink>

          {/* Hizmetler (dropdown) */}
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openServices}
              onClick={() => setOpenServices((s) => !s)}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium ${
                openServices ? "bg-slate-100" : "hover:bg-slate-100"
              } ${isActive("/hizmetler") ? "text-[#1e3a8a]" : "text-slate-700"}`}
            >
              <Wrench className="h-4 w-4" />
              Hizmetler
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>

            {openServices && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-[380px] rounded-2xl border bg-white shadow-lg p-3 grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`rounded-lg px-3 py-2 text-sm hover:bg-slate-50 ${
                      isActive(s.href) ? "text-[#1e3a8a] font-semibold" : "text-slate-700"
                    }`}
                    role="menuitem"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/hakkimizda" active={isActive("/hakkimizda")}>
            Hakkımızda
          </NavLink>

          {/* Bölgeler (dropdown) */}
          <div
            className="relative"
            ref={citiesRef}
            onMouseEnter={() => setOpenCities(true)}
            onMouseLeave={() => setOpenCities(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openCities}
              onClick={() => setOpenCities((s) => !s)}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium ${
                openCities ? "bg-slate-100" : "hover:bg-slate-100"
              } ${isActive("/(marketing)") ? "text-[#1e3a8a]" : "text-slate-700"}`}
            >
              <MapPin className="h-4 w-4" />
              Bölgeler
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>

            {openCities && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-[520px] max-h-[60vh] overflow-auto rounded-2xl border bg-white shadow-lg p-3 grid grid-cols-2 sm:grid-cols-3 gap-2"
              >
                {CITIES.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`rounded-lg px-3 py-2 text-sm hover:bg-slate-50 ${
                      isActive(c.href) ? "text-[#1e3a8a] font-semibold" : "text-slate-700"
                    }`}
                    role="menuitem"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/iletisim" active={isActive("/iletisim")}>
            İletişim
          </NavLink>
        </nav>

        {/* Call actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-semibold"
            style={{ color: "#3b82f6" }}
            aria-label={`Telefon: ${PHONE_DISPLAY}`}
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white font-semibold"
            style={{ background: "#ea580c" }}
          >
            <Phone className="h-4 w-4" />
            Hemen Ara
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menüyü aç"
          onClick={() => setOpenMobile(true)}
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition ${
          openMobile ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!openMobile}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity ${
            openMobile ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpenMobile(false)}
        />
        {/* panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-xl border-l p-4 transition-transform ${
            openMobile ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setOpenMobile(false)}
            >
              <div
                className="h-8 w-8 rounded-md"
                style={{ background: "#1e3a8a" }}
              />
              <span className="font-semibold" style={{ color: "#1e3a8a" }}>
                Hasarlı Akdeniz
              </span>
            </Link>
            <button
              type="button"
              aria-label="Kapat"
              onClick={() => setOpenMobile(false)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <MobileLink href="/" onClick={() => setOpenMobile(false)} active={isActive("/")}>
              Anasayfa
            </MobileLink>

            {/* Hizmetler accordion */}
            <details className="rounded-xl border bg-white" open>
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer">
                <span className="inline-flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  Hizmetler
                </span>
                <ChevronDown className="h-4 w-4 opacity-70" />
              </summary>
              <div className="p-2">
                {SERVICES.map((s) => (
                  <MobileLink
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpenMobile(false)}
                    active={isActive(s.href)}
                  >
                    {s.label}
                  </MobileLink>
                ))}
              </div>
            </details>

            <MobileLink
              href="/hakkimizda"
              onClick={() => setOpenMobile(false)}
              active={isActive("/hakkimizda")}
            >
              Hakkımızda
            </MobileLink>

            {/* Bölgeler accordion */}
            <details className="rounded-xl border bg-white">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Bölgeler
                </span>
                <ChevronDown className="h-4 w-4 opacity-70" />
              </summary>
              <div className="max-h-[40vh] overflow-auto p-2 grid grid-cols-1">
                {CITIES.map((c) => (
                  <MobileLink
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpenMobile(false)}
                    active={isActive(c.href)}
                  >
                    {c.label}
                  </MobileLink>
                ))}
              </div>
            </details>

            <MobileLink
              href="/iletisim"
              onClick={() => setOpenMobile(false)}
              active={isActive("/iletisim")}
            >
              İletişim
            </MobileLink>
          </div>

          <div className="mt-6 grid gap-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-white font-semibold"
              style={{ background: "#ea580c" }}
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
            </a>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold border"
              style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            Hafta içi 09:00–19:00 • Cumartesi 10:00–17:00
          </p>
        </aside>
      </div>
    </header>
  );
}

// ---- Subcomponents -----------------------------------------------------------

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium ${
        active
          ? "text-[#1e3a8a] bg-slate-100"
          : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  active,
  children,
}: {
  href: string;
  onClick?: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-lg px-4 py-3 text-sm ${
        active
          ? "bg-slate-100 text-[#1e3a8a] font-semibold"
          : "text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </Link>
  );
}
