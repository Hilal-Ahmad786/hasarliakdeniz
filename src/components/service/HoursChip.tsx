"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock } from "lucide-react";

/**
 * A small “open now” badge for TR business hours.
 * Defaults: 09:00–21:00, Europe/Istanbul.
 */
export default function HoursChip({
  openHour = 9,
  closeHour = 21,
  timeZone = "Europe/Istanbul",
  className = "",
}: {
  openHour?: number;     // 0-23
  closeHour?: number;    // 0-23
  timeZone?: string;     // e.g. "Europe/Istanbul"
  className?: string;
}) {
  const [now, setNow] = useState<Date | null>(null);

  // tick every minute so the label updates without reload
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const { isOpen, nextLabel } = useMemo(() => {
    const d = now ?? new Date();

    // get HH:mm in the target TZ using formatToParts (no libs)
    const parts = new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).formatToParts(d);

    const hh = Number(parts.find(p => p.type === "hour")?.value ?? "0");
    const mm = Number(parts.find(p => p.type === "minute")?.value ?? "0");
    const minutes = hh * 60 + mm;

    const openMin = openHour * 60;
    const closeMin = closeHour * 60;

    const openNow = minutes >= openMin && minutes < closeMin;

    // Build “next” helper (either "Bugün 09:00" or "Yarın 09:00")
    const next =
      openNow
        ? `Bugün ${pad(openHour)}:00`
        : minutes < openMin
          ? `Bugün ${pad(openHour)}:00`
          : `Yarın ${pad(openHour)}:00`;

    return { isOpen: openNow, nextLabel: next };
  }, [now, openHour, closeHour, timeZone]);

  const bg = isOpen ? "#ecfdf5" : "#f1f5f9";   // subtle green / slate
  const fg = isOpen ? "#059669" : "#334155";   // emerald / slate
  const dot = isOpen ? "#10b981" : "#94a3b8";  // emerald / slate-400
  const border = isOpen ? "#d1fae5" : "#e2e8f0";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border ${className}`}
      style={{ background: bg, color: fg, borderColor: border }}
      aria-live="polite"
      title={`Çalışma saatleri: ${pad(openHour)}:00 – ${pad(closeHour)}:00 (TR)`}
    >
      <span
        aria-hidden
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: dot }}
      />
      {isOpen ? "Şu an açık" : "Şu an kapalı"}
      <span className="mx-1 text-slate-400">•</span>
      <Clock className="h-3.5 w-3.5 opacity-70" aria-hidden />
      {pad(openHour)}:00–{pad(closeHour)}:00
      {!isOpen && (
        <span className="ml-2 text-slate-500">(Açılış: {nextLabel})</span>
      )}
    </span>
  );
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}
