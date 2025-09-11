"use client";

type Range = { min: number; max: number };
type NoteResult = { note: string };
type Result = Range | NoteResult;

function hasRange(x: Result | { min?: number; max?: number }): x is Range {
  return typeof (x as any).min === "number" && typeof (x as any).max === "number";
}

export default function QuoteEstimator({
  result,
}: {
  result: Result | undefined;
}) {
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
