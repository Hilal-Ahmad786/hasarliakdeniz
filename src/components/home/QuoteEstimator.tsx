"use client";

type Range = { min: number; max: number };
type NoteResult = { note: string };
type Result = Range | NoteResult;

function isNumber(x: unknown): x is number {
  return typeof x === "number";
}

function hasRange(x: Result): x is Range {
  // Use property presence + runtime number checks, no "any"
  return (
    x !== null &&
    typeof x === "object" &&
    "min" in x &&
    "max" in x &&
    isNumber((x as Record<string, unknown>).min) &&
    isNumber((x as Record<string, unknown>).max)
  );
}

export default function QuoteEstimator({ result }: { result?: Result }) {
  if (!result) return null;

  return (
    <section className="rounded-2xl border bg-white p-4">
      {hasRange(result) ? (
        <div className="text-lg font-semibold text-slate-900">
          ~ ₺{result.min.toLocaleString("tr-TR")} – ₺{result.max.toLocaleString("tr-TR")}
          <span className="ml-2 text-xs text-slate-500">(yaklaşık)</span>
        </div>
      ) : (
        <p className="text-sm text-slate-600">{result.note}</p>
      )}
    </section>
  );
}
