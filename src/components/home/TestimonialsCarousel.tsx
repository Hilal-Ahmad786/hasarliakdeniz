"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// ---- EDIT THESE -------------------------------------------------------------
const GOOGLE_REVIEWS_URL = "https://g.page/r/…"; // (optional) public reviews page
// -----------------------------------------------------------------------------

type Testimonial = {
  name: string;
  city: string;
  text: string;
  img?: string;
  rating?: number; // 1..5
};

const DATA: Testimonial[] = [
  {
    name: "Serkan Y.",
    city: "Antalya",
    text: "Telefonla ulaştım, aynı gün noter ve ödeme. Gizli ücret olmadı.",
    img: "/gallery/t1.jpg",
    rating: 5,
  },
  {
    name: "Selin K.",
    city: "Adana",
    text: "Süreç şeffaf ve hızlı. WhatsApp’tan foto gönderdim, 2 saatte dönüş yaptılar.",
    img: "/gallery/t2.jpg",
    rating: 5,
  },
  {
    name: "M. Emin",
    city: "Gaziantep",
    text: "Çekici ücretsiz geldi, yerinde ekspertiz ile fiyat netleşti. Tavsiye ederim.",
    img: "/gallery/t3.jpg",
    rating: 5,
  },
  {
    name: "Ayşe D.",
    city: "Şanlıurfa",
    text: "Kurumsal ve güvenilir yaklaşım. 24 saat içinde devir tamamlandı.",
    img: "/gallery/t4.jpg",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  const go = (next: number) => setI((p) => (next + DATA.length) % DATA.length);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  // auto-advance (respect reduced motion / pause on hover/focus)
  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, paused, prefersReduced]);

  // keyboard arrows
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }

  // touch swipe
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStartX.current;
    if (start == null) return;
    const delta = e.changedTouches[0].clientX - start;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  }

  const translate = useMemo(() => `translateX(-${i * 100}%)`, [i]);

  return (
    <section
      aria-label="Müşteri görüşleri"
      className="mx-auto max-w-7xl px-4 py-12"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Akdeniz bölgesinden gerçek deneyimler.
          </p>
        </div>

        {/* (optional) reviews link */}
        {GOOGLE_REVIEWS_URL && (
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium"
            style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
          >
            Tüm Yorumlar
          </a>
        )}
      </div>

      {/* Carousel */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Müşteri yorumları"
        className="relative mt-6"
        onKeyDown={onKeyDown}
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* viewport */}
        <div className="overflow-hidden rounded-2xl border bg-white">
          {/* track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: translate }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {DATA.map((t, idx) => (
              <Slide key={idx} t={t} active={idx === i} />
            ))}
          </div>
        </div>

        {/* prev/next controls */}
        <button
          type="button"
          onClick={prev}
          aria-label="Önceki yorum"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border p-2 shadow hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Sonraki yorum"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border p-2 shadow hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {DATA.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              aria-current={idx === i ? "true" : "false"}
              onClick={() => go(idx)}
              className={`h-2.5 w-2.5 rounded-full ${
                idx === i ? "bg-[#3b82f6]" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Slide({ t, active }: { t: Testimonial; active: boolean }) {
  return (
    <figure
      className="min-w-full p-6 md:p-8 grid md:grid-cols-[auto,1fr] gap-4 items-start"
      aria-hidden={!active}
    >
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden bg-slate-200 shrink-0">
          {t.img ? (
            <Image
              src={t.img}
              alt={`${t.name} - ${t.city}`}
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>
        <figcaption className="text-sm">
          <div className="font-semibold text-slate-900">
            {t.name} • {t.city}
          </div>
          {typeof t.rating === "number" && (
            <div className="flex items-center gap-0.5 text-[#f59e0b]" aria-label={`Puan ${t.rating}/5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < (t.rating ?? 0) ? "fill-[#f59e0b]" : ""}`} />
              ))}
            </div>
          )}
        </figcaption>
      </div>

      <blockquote className="md:mt-1 text-slate-700 text-base md:text-lg relative">
        <Quote
          className="absolute -left-2 -top-2 h-5 w-5 opacity-20"
          aria-hidden
        />
        <span className="pl-4 block">“{t.text}”</span>
      </blockquote>
    </figure>
  );
}

// util: prefers-reduced-motion hook
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(q.matches);
    const handler = () => setPrefers(q.matches);
    q.addEventListener ? q.addEventListener("change", handler) : q.addListener(handler);
    return () => {
      q.removeEventListener ? q.removeEventListener("change", handler) : q.removeListener(handler);
    };
  }, []);
  return prefers;
}
