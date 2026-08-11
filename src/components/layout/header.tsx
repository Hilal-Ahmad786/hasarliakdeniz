"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, routes } from "@/config/navigation";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useSettings } from "@/components/providers/settings-provider";
import { telHref, whatsappHref } from "@/lib/settings/shared";
import { Logo } from "./logo";

/**
 * Two-tier structural header: thin navy contact strip on top, white main bar
 * with underline-active nav below. Sharp corners, editorial feel.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const settings = useSettings();
  const tel = telHref(settings);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact strip — deep navy */}
      <div className="hidden bg-brand-900 text-white/80 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-[13px]">
          <p className="flex items-center gap-2 font-medium">
            <Clock size={14} className="text-gold-600" />
            {settings.workingHours} · Akdeniz Bölgesi geneli hizmet
          </p>
          <div className="flex items-center gap-5">
            <a
              href={whatsappHref(settings)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-track-location="header_top"
              className="flex items-center gap-1.5 font-medium transition-colors hover:text-white"
            >
              <WhatsAppIcon size={14} className="text-whatsapp" />
              WhatsApp
            </a>
            <a
              href={tel}
              data-track="phone_click"
              data-track-location="header_top"
              className="flex items-center gap-1.5 font-bold text-white transition-colors hover:text-gold-600"
            >
              <Phone size={14} />
              {settings.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar — white */}
      <div
        className={cn(
          "border-b border-line bg-white transition-shadow",
          scrolled && "shadow-[0_8px_30px_rgba(12,43,80,0.12)]",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
          <Logo brandName={settings.brandName} />

          {/* Desktop nav — underline active state */}
          <nav aria-label="Ana menü" className="hidden items-center gap-6 lg:flex">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-semibold transition-colors",
                    active ? "text-brand-800" : "text-ink-secondary hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-[1px] h-[3px] rounded-none transition-colors",
                      active ? "bg-gold-600" : "bg-transparent",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappHref(settings)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-track-location="header"
              className={buttonClasses({ variant: "whatsapp", size: "md" })}
            >
              <WhatsAppIcon size={17} />
              WhatsApp
            </a>
            <a href={tel} data-track="phone_click" data-track-location="header" className={buttonClasses({ size: "md" })}>
              <Phone size={16} />
              Hemen Ara
            </a>
          </div>

          {/* Mobile right: phone icon + menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={tel}
              data-track="phone_click"
              data-track-location="header_mobile"
              aria-label="Bizi arayın"
              className="grid h-11 w-11 place-items-center rounded-[6px] bg-brand-700 text-white shadow-sm transition-colors hover:bg-brand-800"
            >
              <Phone size={22} strokeWidth={2.5} />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-[6px] text-ink hover:bg-cream-100"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="border-t border-line bg-white lg:hidden">
            <nav aria-label="Mobil menü" className="container-page flex flex-col py-3">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "border-l-2 px-4 py-3 text-[15px] font-semibold",
                    isActive(item.href)
                      ? "border-gold-600 bg-cream-100 text-brand-800"
                      : "border-transparent text-ink-secondary hover:bg-cream-100",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={tel}
                onClick={() => setMenuOpen(false)}
                data-track="phone_click"
                data-track-location="mobile_menu"
                className={buttonClasses({ size: "lg", fullWidth: true, className: "mt-3" })}
              >
                <Phone size={18} />
                Hemen Ara
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
