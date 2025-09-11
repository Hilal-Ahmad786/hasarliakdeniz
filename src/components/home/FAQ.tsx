"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import {
  HelpCircle, Search, ChevronDown, Phone, MessageCircle,
} from "lucide-react";

// ---- EDIT THESE -------------------------------------------------------------
const PHONE_DISPLAY = "0 (536) 929 86 06";
const PHONE_TEL = "+905369298606";                 // e.g., +905551112233
const WHATSAPP_URL = "https://wa.me/905369298606"; // e.g., https://wa.me/905369298606
// -----------------------------------------------------------------------------

type QA = {
  id: string;     // used in the URL hash (#faq-…)
  q: string;      // question
  a: string;      // plain text answer (used for JSON-LD)
  bullets?: string[]; // optional bullet points for visual rendering
};

const QA_DATA: QA[] = [
  {
    id: "ucret",
    q: "Gizli ücret var mı?",
    a: "Hayır. Çekici, ön değerlendirme ve standart noter işlemleri için gizli ücret uygulamayız. Tüm kalemleri süreç başında yazılı olarak paylaşırız.",
    bullets: [
      "Gizli ücret yok",
      "Tüm kalemler baştan yazılı",
      "Sürpriz maliyet yok",
    ],
  },
  {
    id: "sure",
    q: "~2 saatte ön bilgi, 24 saatte alım nasıl ilerliyor?",
    a: "Fotoğraflar ve temel bilgiler sonrası yoğunluğa göre yaklaşık 2 saat içinde ballpark bilgi veriyoruz. Yerinde/çekici ekspertizle fiyat netleşir ve aynı gün ya da 24 saat içinde noter işlemleri tamamlanır.",
    bullets: [
      "WhatsApp + telefon ile hızlı ön bilgi",
      "Yerinde/çekici ekspertiz",
      "Aynı gün/24 saatte noter & ödeme",
    ],
  },
  {
    id: "odeme",
    q: "Ödeme nasıl yapılır?",
    a: "Ödemeyi noter devirle eşzamanlı olacak şekilde banka EFT/Havale ile yaparız. Ödeme dekontu paylaşılır.",
    bullets: [
      "Banka EFT/Havale",
      "Noter devri ile eşzamanlı",
      "Dekont paylaşımı",
    ],
  },
  {
    id: "hangi-araclar",
    q: "Hangi araçları alıyorsunuz?",
    a: "Hasarlı, kazalı, pert/çekme belgeli, motor arızalı, su/sele ya da yanmış araçları değerlendiriyoruz. Ticari ve binek sınıflar kabul edilebilir.",
    bullets: [
      "Hasarlı/Kazalı",
      "Pert / Çekme Belgeli",
      "Motor arızalı, su/sele, yanmış",
    ],
  },
  {
    id: "cekici",
    q: "Çekici ücreti var mı?",
    a: "Standart alımlarımızda çekici desteği ücretsizdir. Uzak lokasyon veya özel durumlar öncesinde yazılı bildirilir.",
    bullets: [
      "Standartta ücretsiz çekici",
      "Özel durumlar yazılı bildirim",
    ],
  },
  {
    id: "belgeler",
    q: "Satış için hangi belgeler gerekir?",
    a: "Genellikle ruhsat, kimlik ve varsa yedek anahtar yeterlidir. Pert/çekme belgeli veya şirket aracı gibi durumlarda ilave evrak gerekebilir; telefonda net listeyi paylaşıyoruz.",
    bullets: [
      "Ruhsat + Kimlik",
      "Yedek anahtar (varsa)",
      "Özel durumlarda ilave evrak",
    ],
  },
  {
    id: "rehin-kredi",
    q: "Araç üzerinde rehin/kredi varsa nasıl ilerlenir?",
    a: "Rehinli araçlarda kredi kapama ve rehin kaldırma işlemleri gerekir. Bankanıza göre süreç değişebilir; kapama ve devir akışını birlikte planlıyoruz.",
    bullets: [
      "Kredi kapama gerekli",
      "Rehin kaldırma işlemi",
      "Banka sürecine göre planlama",
    ],
  },
  {
    id: "foto",
    q: "Fotoğrafı nasıl çekmeliyim?",
    a: "Dıştan 4 köşe, önden/arkadan, hasar yakın plan, iç mekân ve kilometre ekranı net olacak biçimde gün ışığında çekmenizi öneririz.",
    bullets: [
      "Dıştan 4 köşe + ön/arka",
      "Hasar yakından",
      "İç mekân & km ekranı",
    ],
  },
  {
    id: "bolgeler",
    q: "Hangi bölgelerde hizmet veriyorsunuz?",
    a: "Akdeniz illerinde ve komşu bölgelerde hizmet veriyoruz: Antalya, Adana, Mersin, Hatay, Osmaniye, Kahramanmaraş, Isparta, Burdur + Gaziantep, Diyarbakır, Şanlıurfa, Mardin.",
  },
  {
    id: "fiyatlama",
    q: "Fiyatlandırmayı nasıl yapıyorsunuz?",
    a: "Yaş, piyasa değeri, hasarın türü/alanı, mekanik/elektrik durumu ve parça/ihracat değerlendirmesi dikkate alınır. Ön bilgi ballpark aralıktır; yerinde ekspertizle netleşir.",
    bullets: [
      "Yaş ve piyasa değeri",
      "Hasar kapsamı & mekanik/elektrik",
      "Parça/ihracat değerlendirmesi",
    ],
  },
];

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  // open item from hash on mount (e.g., #faq-belgeler)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hash;
    if (h.startsWith("#faq-")) {
      const id = h.replace("#faq-", "");
      setOpenIds(new Set([id]));
      // scroll into view after paint
      setTimeout(() => {
        const el = document.getElementById(`faq-${id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, []);

  const norm = (s: string) =>
    s
      .toLocaleLowerCase("tr")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

  const filtered = useMemo(() => {
    const nq = norm(query);
    if (!nq) return QA_DATA;
    return QA_DATA.filter(
      (x) => norm(x.q).includes(nq) || norm(x.a).includes(nq) || (x.bullets || []).some((b) => norm(b).includes(nq))
    );
  }, [query]);

  const allOpen = filtered.length > 0 && filtered.every((x) => openIds.has(x.id));
  const allClosed = filtered.every((x) => !openIds.has(x.id));

  function toggle(id: string, next?: boolean) {
    setOpenIds((prev) => {
      const n = new Set(prev);
      const willOpen = next ?? !n.has(id);
      if (willOpen) n.add(id);
      else n.delete(id);
      return n;
    });
  }

  function expandAll() {
    setOpenIds((prev) => {
      const n = new Set(prev);
      filtered.forEach((x) => n.add(x.id));
      return n;
    });
  }

  function collapseAll() {
    setOpenIds((prev) => {
      const n = new Set(prev);
      filtered.forEach((x) => n.delete(x.id));
      return n;
    });
  }

  // JSON-LD for FAQPage
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QA_DATA.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  return (
    <>
      <section id="faq" aria-label="Sık Sorulan Sorular" className="mx-auto max-w-7xl px-4 py-12">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
              Sık Sorulanlar
            </h2>
            <p className="text-slate-600 mt-1">
              Şeffaf yanıtlar. Bulamadığınız sorular için bizi arayın.
            </p>
          </div>

          {/* search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sorularda ara…"
              className="input pl-9"
              aria-label="SSS içinde ara"
            />
          </div>
        </header>

        {/* controls */}
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <button
            onClick={expandAll}
            className="rounded-lg border px-3 py-1.5 font-medium"
            style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
            disabled={allOpen}
          >
            Tümünü Aç
          </button>
          <button
            onClick={collapseAll}
            className="rounded-lg border px-3 py-1.5 font-medium"
            disabled={allClosed}
          >
            Tümünü Kapat
          </button>
          <span className="self-center text-slate-500">
            {filtered.length} sonuç
          </span>
        </div>

        {/* list */}
        <div className="mt-6 divide-y rounded-2xl border bg-white">
          {filtered.map((x) => {
            const open = openIds.has(x.id);
            return (
              <details
                key={x.id}
                id={`faq-${x.id}`}
                className="group px-4 md:px-6 py-3"
                open={open}
                onToggle={(e) => {
                  // keep controlled state in sync
                  const el = e.currentTarget as HTMLDetailsElement;
                  toggle(x.id, el.open);
                  // update hash when opening
                  if (el.open && typeof window !== "undefined") {
                    history.replaceState(null, "", `#faq-${x.id}`);
                  }
                }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <div className="flex items-start gap-2 py-1">
                    <div
                      className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-md"
                      style={{ background: "#eef2ff", color: "#1e3a8a" }}
                      aria-hidden
                    >
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-slate-900">
                      {x.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </summary>

                <div className="ml-9 mt-2 pb-3 text-slate-700 text-sm">
                  <p>{x.a}</p>
                  {x.bullets && x.bullets.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {x.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-white font-semibold"
                      style={{ background: "#ea580c" }}
                      aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
                    >
                      <Phone className="h-4 w-4" />
                      Hemen Ara
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-semibold border"
                      style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
                      aria-label="WhatsApp ile yazın"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </details>
            );
          })}

          {filtered.length === 0 && (
            <div className="px-6 py-8 text-sm text-slate-600">
              Sonuç bulunamadı. Sorunuzu bize iletin:
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-white font-semibold"
                  style={{ background: "#ea580c" }}
                >
                  <Phone className="h-4 w-4" />
                  Hemen Ara
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-semibold border"
                  style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SEO: FAQPage JSON-LD */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
