"use client";
import { useState } from "react";

export type DamageArea =
  | "front" | "rear" | "left" | "right" | "roof" | "interior" | "engine" | "flood" | "electronics" | "undercarriage";

const OPTIONS: { key: DamageArea; label: string }[] = [
  { key: "front", label: "Ön" },
  { key: "rear", label: "Arka" },
  { key: "left", label: "Sol" },
  { key: "right", label: "Sağ" },
  { key: "roof", label: "Tavan" },
  { key: "interior", label: "İç" },
  { key: "engine", label: "Motor" },
  { key: "flood", label: "Su/Sele" },
  { key: "electronics", label: "Elektrik" },
  { key: "undercarriage", label: "Şase/Alt" },
];

export default function DamageSelector({
  value = [],
  onChange,
}: {
  value?: DamageArea[];
  onChange?: (areas: DamageArea[]) => void;
}) {
  const [selected, setSelected] = useState<DamageArea[]>(value);

  function toggle(area: DamageArea) {
    const s = selected.includes(area)
      ? selected.filter((a) => a !== area)
      : [...selected, area];
    setSelected(s);
    onChange?.(s);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
      {OPTIONS.map((o) => {
        const active = selected.includes(o.key);
        return (
          <button
            type="button"
            key={o.key}
            onClick={() => toggle(o.key)}
            className={`rounded-xl border px-3 py-2 text-sm ${active ? "bg-brand-50 border-brand-600 text-brand-700" : "bg-white"}`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
