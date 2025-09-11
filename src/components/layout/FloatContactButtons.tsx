"use client";

import { Phone, MessageCircle } from "lucide-react";

// ---- EDIT THESE -------------------------------------------------------------
const PHONE_DISPLAY = "0 (536) 929 86 06";
const PHONE_TEL = "+905369298606";                 // e.g. +905551112233
const WHATSAPP_URL = "https://wa.me/905369298606"; // e.g. https://wa.me/905369298606
// -----------------------------------------------------------------------------

export default function FloatContactButtons() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 print:hidden"
      // keep away from iOS home indicator
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-hidden={false}
    >
      <div className="mx-auto max-w-7xl px-4 relative">
        {/* LEFT: WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            pointer-events-auto
            absolute left-0 bottom-0
            inline-flex items-center gap-2
            rounded-full md:rounded-full
            h-14 w-14 md:h-auto md:w-auto
            px-0 md:px-4 py-0 md:py-3
            text-white font-semibold
            shadow-lg border border-black/5
            transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200
          "
          style={{ background: "#059669" }}
          aria-label="WhatsApp ile yazın"
        >
          <MessageCircle className="h-6 w-6 mx-auto md:mx-0" aria-hidden />
          <span className="hidden md:inline">WhatsApp</span>
        </a>

        {/* RIGHT: Call */}
        <a
          href={`tel:${PHONE_TEL}`}
          className="
            pointer-events-auto
            absolute right-0 bottom-0
            inline-flex items-center gap-2
            rounded-full md:rounded-full
            h-14 w-14 md:h-auto md:w-auto
            px-0 md:px-4 py-0 md:py-3
            text-white font-semibold
            shadow-lg border border-black/5
            transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200
          "
          style={{ background: "#ea580c" }}
          aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
        >
          <Phone className="h-6 w-6 mx-auto md:mx-0" aria-hidden />
          <span className="hidden md:inline">Hemen Ara</span>
        </a>
      </div>
    </div>
  );
}
