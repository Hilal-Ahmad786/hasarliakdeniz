// src/components/service/ServiceFAQ.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Phone, Link as LinkIcon, ChevronDown, ChevronUp, Check, X } from "lucide-react";
import { buildWhatsAppLink, formatPhoneDisplayTR } from "@/lib/links";

export type FAQItem = {
  q: string;
  a: string | React.ReactNode;
  id?: string;       // optional stable id (otherwise derived from q)
  category?: string; // optional category label
};

export default function ServiceFAQ({
  items,
  defaultOpen = 1,
  title = "Sık Sorulan Sorular",
  subtitle = "Aşağıda en çok merak edilenleri topladık. Aradığınızı bulamazsanız bizi arayın.",
  showSearch = true,
  groupByCategory = true,
  autoOpenHash = true,
  phone,                 // e.g. "+90XXXXXXXXXX"
  whatsappMessage = "Merhaba, bir sorum var.",
  onFeedback,            // receive micro-feedback events
}: {
  items: FAQItem[];
  defaultOpen?: number;
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  groupByCategory?: boolean;
  autoOpenHash?: boolean;
  phone?: string;
  whatsappMessage?: string;
  onFeedback?: (payload: { id: string; helpful: boolean }) => void;
}) {
  const [query, setQuery] = useState("");
  const [expandAll, setExpandAll] = useState(false);
  const [hashTarget, setHashTarget] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize + slugify for TR characters
  const norm = (s: string) =>
    s
      .toLowerCase()
      .replace(/[çÇ]/g, "c")
      .replace(/[ğĞ]/g, "g")
      .replace(/[ıİ]/g, "i")
      .replace(/[öÖ]/g, "o")
      .replace(/[şŞ]/g, "s")
      .replace(/[üÜ]/g, "u");
  const slugify = (s: string) =>
    norm(s)
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // Decorate items with ids
  const withIds = useMemo(
    () =>
      items.map((it) => ({
        ...it,
        id: it.id || slugify(it.q),
      })),
    [items]
  );

  // Filter by query
  const filtered = useMemo(() => {
    if (!query.trim()) return withIds;
    const needle = norm(query.trim());
    return withIds.filter((it) => norm(it.q).includes(needle) || (typeof it.a === "string" && norm(it.a).includes(needle)));
  }, [withIds, query]);

  // Group (optional)
  const groups = useMemo(() => {
    if (!groupByCategory) return [{ label: undefined as string | undefined, rows: filtered }];
    const map = new Map<string | undefined, FAQItem[]>();
    filtered.forEach((it) => {
      const key = it.category || undefined;
      map.set(key, [...(map.get(key) || []), it]);
    });
    return Array.from(map.entries()).map(([label, rows]) => ({ label, rows }));
  }, [filtered, groupByCategory]);

  // Auto-open from hash (and scroll)
  useEffect(() => {
    if (!autoOpenHash) return;
    const onHash = () => setHashTarget(window.location.hash.replace(/^#/, "") || null);
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [autoOpenHash]);

  useEffect(() => {
    if (!hashTarget) return;
    const el = document.getElementById(hashTarget);
    if (el) {
      // open <details> if present
      const details = el.closest("details");
      if (details && !details.open) (details as HTMLDetailsElement).open = true;
      // smooth scroll
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // brief highlight
      el.classList.add("ring-2", "ring-[#1e3a8a]/40", "rounded-md");
      const t = setTimeout(() => {
        el.classList.remove("ring-2", "ring-[#1e3a8a]/40", "rounded-md");
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [hashTarget]);

  const totalCount = withIds.length;
  const matchCount = filtered.length;

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-4 py-10" aria-labelledby="faq-title">
      <div className="mb-4">
        <h2 id="faq-title" className="text-2xl font-bold" style={{ color: "#1e3a8a" }}>
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        {showSearch && (
          <div className="relative w-full sm:max-w-md">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sorunuzu yazın…"
              className="w-full rounded-xl border px-3 py-2 pr-10 text-sm bg-white"
              aria-label="SSS arama"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-500">
              {matchCount}/{totalCount}
            </span>
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setExpandAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm"
            aria-pressed={expandAll}
          >
            {expandAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {expandAll ? "Tümünü daralt" : "Tümünü genişlet"}
          </button>

          {phone && (
            <>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white"
                style={{ background: "#ea580c" }}
              >
                <Phone className="h-4 w-4" />
                Ara — {formatPhoneDisplayTR(phone)}
              </a>
              <a
                href={buildWhatsAppLink(phone, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white"
                style={{ background: "#059669" }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </>
          )}
        </div>
      </div>

      {/* Groups & items */}
      <div className="space-y-6">
        {groups.map(({ label, rows }, gi) => (
          <div key={label ?? `grp-${gi}`}>
            {label && (
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-slate-500 uppercase">
                {label}
              </h3>
            )}

            <div className="space-y-3">
              {rows.map((f, i) => {
                const id = f.id!;
                const openByDefault =
                  expandAll ||
                  (!!query && matchQuery(f, query, norm)) ||
                  (!!hashTarget && hashTarget === id) ||
                  (!query && !expandAll && gi === 0 && i < defaultOpen);

                return (
                  <details key={id} id={id} className="rounded-2xl border bg-white p-4" {...(openByDefault ? { open: true } : {})}>
                    <summary className="group cursor-pointer font-semibold text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] rounded-lg px-1 flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs text-[#1e3a8a]">
                        {gi + 1}.{i + 1}
                      </span>
                      <span className="flex-1">{highlight(f.q, query, norm)}</span>
                    </summary>

                    <div className="mt-2 text-slate-700 leading-relaxed">
                      {typeof f.a === "string" ? renderAnswer(f.a, query, norm) : f.a}
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <CopyLinkButton id={id} />
                        <Feedback id={id} onFeedback={onFeedback} />
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA (if phone provided) */}
      {phone && (
        <div className="mt-8 rounded-2xl border bg-slate-50 p-4 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-slate-700">
            Hâlâ sorunuz mu var? <span className="font-semibold">Uzman ekibimiz yanıtlasın.</span>
          </div>
          <div className="mt-2 sm:mt-0 flex gap-2">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white"
              style={{ background: "#ea580c" }}
            >
              <Phone className="h-4 w-4" />
              Ara — {formatPhoneDisplayTR(phone)}
            </a>
            <a
              href={buildWhatsAppLink(phone, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white"
              style={{ background: "#059669" }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function matchQuery(f: FAQItem, q: string, norm: (s: string) => string) {
  const needle = norm(q.trim());
  if (!needle) return false;
  const inQ = norm(f.q).includes(needle);
  const inA = typeof f.a === "string" ? norm(f.a).includes(needle) : false;
  return inQ || inA;
}

function highlight(text: string, q: string, norm: (s: string) => string) {
  if (!q.trim()) return text;
  const nText = norm(text);
  const nQ = norm(q.trim());
  const idx = nText.indexOf(nQ);
  if (idx === -1) return text;
  const end = idx + nQ.length;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-100">{text.slice(idx, end)}</mark>
      {text.slice(end)}
    </>
  );
}

function renderAnswer(ans: string, q: string, norm: (s: string) => string) {
  // split into paragraphs by blank line or newline
  const parts = ans.split(/\n{2,}|\r?\n/).filter(Boolean);
  return parts.map((p, i) => (
    <p key={i} className="mb-2">
      {highlight(p, q, norm)}
    </p>
  ));
}

function CopyLinkButton({ id }: { id: string }) {
  const [ok, setOk] = useState<"idle" | "copied">("idle");
  async function copy() {
    const url = typeof window !== "undefined" ? `${location.origin}${location.pathname}#${id}` : `#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setOk("copied");
      setTimeout(() => setOk("idle"), 1200);
    } catch {
      // ignore
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1 hover:text-slate-700"
      aria-label="Bağlantıyı kopyala"
    >
      <LinkIcon className="h-3.5 w-3.5" />
      {ok === "copied" ? "Kopyalandı" : "Bağlantı kopyala"}
    </button>
  );
}

function Feedback({ id, onFeedback }: { id: string; onFeedback?: (p: { id: string; helpful: boolean }) => void }) {
  const [state, setState] = useState<"idle" | "yes" | "no">("idle");
  if (state !== "idle") {
    return (
      <span className="inline-flex items-center gap-1 text-emerald-600">
        <Check className="h-3.5 w-3.5" />
        Teşekkürler!
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1">
      Bu yanıt faydalı oldu mu?
      <button
        type="button"
        className="ml-2 inline-flex items-center gap-1 rounded border px-2 py-0.5 text-xs hover:bg-slate-100"
        onClick={() => {
          setState("yes");
          onFeedback?.({ id, helpful: true });
        }}
        aria-label="Evet"
        title="Evet"
      >
        <Check className="h-3.5 w-3.5 text-emerald-600" /> Evet
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded border px-2 py-0.5 text-xs hover:bg-slate-100"
        onClick={() => {
          setState("no");
          onFeedback?.({ id, helpful: false });
        }}
        aria-label="Hayır"
        title="Hayır"
      >
        <X className="h-3.5 w-3.5 text-rose-600" /> Hayır
      </button>
    </span>
  );
}
