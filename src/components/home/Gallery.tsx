"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

type Item = {
  src: string;           // public path under /public/gallery
  alt: string;           // concise, descriptive alt
  caption: string;       // e.g., "2018 Egea • sağ ön hasar"
  city: string;          // e.g., "Adana"
  note?: string;         // e.g., "Satın alındı"
  date?: string;         // optional e.g., "2025-02"
};

const ITEMS: Item[] = [
  { src: "/gallery/car1.jpg", alt: "2018 Egea sağ ön hasarlı beyaz", caption: "2018 Egea • sağ ön hasar", city: "Adana", note: "Satın alındı" },
  { src: "/gallery/car2.jpg", alt: "2016 Clio motor arızalı gri",     caption: "2016 Clio • motor arızalı", city: "Antalya", note: "Satın alındı" },
  { src: "/gallery/car3.jpg", alt: "2014 Focus arka tampon hasarlı",  caption: "2014 Focus • arka hasar",   city: "Mersin",  note: "Satın alındı" },
  { src: "/gallery/car4.jpg", alt: "2012 Polo su sele hasarlı",       caption: "2012 Polo • su/sele",       city: "Hatay",   note: "Satın alındı" },
  // Add your real photos here…
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const hasOpen = index !== null;

  const next = () => setIndex((p) => (p === null ? 0 : (p + 1) % ITEMS.length));
  const prev = () => setIndex((p) => (p === null ? 0 : (p - 1 + ITEMS.length) % ITEMS.length));

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!hasOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [hasOpen]);

  // Touch swipe on lightbox
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 40) (delta < 0 ? next() : prev());
    startX.current = null;
  };

  return (
    <section aria-label="Gerçek alım örnekleri" className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
            Gerçek Alımlar
          </h2>
          <p className="text-slate-600 text-sm mt-1">Akdeniz’de yakın dönemde satın aldığımız araçlardan örnekler.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
          <Camera className="h-4 w-4" />
          Plakalar gizlilik için kapatılır.
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {ITEMS.map((it, i) => (
          <figure
            key={i}
            className="group rounded-2xl overflow-hidden border bg-white cursor-zoom-in"
            onClick={() => open(i)}
          >
            <div className="relative h-40 w-full">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={i < 2}
              />
            </div>
            <figcaption className="p-3 text-sm">
              <div className="font-medium text-slate-900">{it.caption}</div>
              <div className="text-slate-600">{it.city}{it.date ? ` • ${it.date}` : ""}{it.note ? ` — ${it.note}` : ""}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-3 md:hidden flex items-center gap-2 text-xs text-slate-500">
        <Camera className="h-4 w-4" /> Plakalar gizlilik için kapatılır.
      </p>

      {/* Lightbox */}
      {hasOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Araç fotoğrafı"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            aria-label="Kapat"
            onClick={close}
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow border hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            aria-label="Önceki"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="hidden md:inline-flex absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow border hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            aria-label="Sonraki"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="hidden md:inline-flex absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow border hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* inner content */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border bg-white">
              <Image
                src={ITEMS[index!].src}
                alt={ITEMS[index!].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-3 rounded-xl bg-white/95 border px-4 py-3 text-sm text-slate-800">
              <div className="font-medium">{ITEMS[index!].caption}</div>
              <div className="text-slate-600">
                {ITEMS[index!].city}{ITEMS[index!].date ? ` • ${ITEMS[index!].date}` : ""}{ITEMS[index!].note ? ` — ${ITEMS[index!].note}` : ""}
              </div>
            </figcaption>
          </div>
        </div>
      )}
    </section>
  );
}
