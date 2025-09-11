"use client";

import type { DamageArea } from "./DamageDiagram";

type Props = {
  year?: number;
  areas: DamageArea[];
  market?: number;
};

const THIS_YEAR = new Date().getFullYear();

export default function QuoteEstimator({ year, areas, market }: Props) {
  const est = estimate({ year, areas, market });

  if ("note" in est) {
    return (
      <section className="rounded-2xl border bg-white p-4 text-sm text-slate-600">
        {est.note}
      </section>
    );
  }

  return (
    <section className="rounded-2xl border bg-white p-4">
      <div className="text-lg font-semibold text-slate-900">
        ~ ₺{est.min.toLocaleString("tr-TR")} – ₺{est.max.toLocaleString("tr-TR")}
        <span className="ml-2 text-xs text-slate-500">(yaklaşık)</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">
        Nihai fiyat yerinde/çekici ekspertiz ile netleşir.
      </p>
    </section>
  );
}

function estimate(input: Props): { min: number; max: number } | { note: string } {
  const { year, areas, market } = input;

  if (typeof market !== "number" || !Number.isFinite(market)) {
    return { note: "Piyasa değeri girerseniz yaklaşık aralık hesaplanır." };
  }

  const age = typeof year === "number" ? Math.max(0, THIS_YEAR - year) : 10;
  const agePenalty = Math.min(0.9, age * 0.03);      // up to -90%
  const ageFactor = 1 - agePenalty;

  const dmgCount = areas?.length ?? 0;
  const dmgPenalty = Math.min(0.6, dmgCount * 0.06); // up to -60%
  const dmgFactor = 1 - dmgPenalty;

  const net = Math.max(0, market * ageFactor * dmgFactor);
  const min = Math.round(net * 0.9);
  const max = Math.round(net * 1.1);

  return { min, max };
}
