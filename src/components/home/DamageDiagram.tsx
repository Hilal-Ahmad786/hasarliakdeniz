"use client";
import { useState } from "react";

export type DamageArea =
  | "front" | "rear" | "left" | "right" | "roof" | "interior" | "engine" | "flood" | "electronics" | "undercarriage";

const LABELS: Record<DamageArea,string> = {
  front:"Ön", rear:"Arka", left:"Sol", right:"Sağ", roof:"Tavan",
  interior:"İç", engine:"Motor", flood:"Su/Sele", electronics:"Elektrik", undercarriage:"Şase/Alt"
};

const SVG_PARTS: {key: DamageArea; d: string}[] = [
  // very simple car silhouette zones (not to scale)
  { key:"front", d:"M20 60 h60 v20 h-60 z" },
  { key:"rear",  d:"M220 60 h60 v20 h-60 z" },
  { key:"left",  d:"M80 40 h60 v60 h-60 z" },
  { key:"right", d:"M160 40 h60 v60 h-60 z" },
  { key:"roof",  d:"M100 20 h100 v20 h-100 z" },
];

export default function DamageDiagram({
  value = [],
  onChange,
}: {
  value?: DamageArea[];
  onChange?: (areas: DamageArea[]) => void;
}) {
  const [sel, setSel] = useState<DamageArea[]>(value);

  function toggle(a: DamageArea) {
    const next = sel.includes(a) ? sel.filter(x => x !== a) : [...sel, a];
    setSel(next);
    onChange?.(next);
  }

  const isActive = (k: DamageArea) => sel.includes(k);

  return (
    <div className="grid gap-3">
      <svg viewBox="0 0 300 120" className="w-full h-40 rounded-xl border bg-white">
        {/* body */}
        <rect x="10" y="30" width="280" height="70" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        {SVG_PARTS.map(p => (
          <path key={p.key} d={p.d}
            onClick={() => toggle(p.key)}
            className="cursor-pointer"
            fill={isActive(p.key) ? "#d1fae5" : "#fff"}
            stroke={isActive(p.key) ? "#059669" : "#cbd5e1"}
          />
        ))}
      </svg>

      {/* extra systems as chips */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {(["engine","electronics","flood","interior","undercarriage"] as DamageArea[]).map(k => {
          const active = isActive(k);
          return (
            <button type="button" key={k} onClick={() => toggle(k)}
              className={`rounded-xl border px-3 py-2 text-sm ${active ? "bg-emerald-50 border-emerald-600 text-emerald-700" : "bg-white"}`}>
              {LABELS[k]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
