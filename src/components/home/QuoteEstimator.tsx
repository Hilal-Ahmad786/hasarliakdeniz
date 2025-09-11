"use client";
import { estimateRange } from "@/lib/quote";
import type { DamageArea } from "./DamageDiagram";

export default function QuoteEstimator({
  year,
  areas,
  market,
}: {
  year: number | undefined;
  areas: DamageArea[];
  market?: number;
}) {
  if (!year) return null;
  const r = estimateRange(year, areas, market);
  return (
    <div className="rounded-xl border p-3 bg-white">
      <div className="text-sm text-slate-600">Anlık Ön Tahmin</div>
      {"min" in r && "max" in r ? (
        <div className="text-lg font-semibold text-slate-900">
          ~ ₺{r.min.toLocaleString("tr-TR")} – ₺{r.max.toLocaleString("tr-TR")}
          <span className="ml-2 text-xs text-slate-500">(yaklaşık)</span>
        </div>
      ) : (
        <div className="text-lg font-semibold text-slate-900">
          ~ %{Math.round(r.minFactor*100)} – %{Math.round(r.maxFactor*100)} piyasa değerinin
        </div>
      )}
      <p className="text-xs text-slate-500 mt-1">Kesin fiyat ekspertiz sonrası netleşir.</p>
    </div>
  );
}
