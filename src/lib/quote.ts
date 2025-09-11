import type { DamageArea } from "@/components/home/DamageDiagram";

export function estimateRange(year: number, areas: DamageArea[], market?: number) {
  const now = new Date().getFullYear();
  const age = Math.max(0, Math.min(25, now - year)); // clamp 0..25
  // base severity from selected areas
  const severity = Math.min(1, areas.length * 0.12); // ~0..1
  // older cars → lower multiplier
  const agePenalty = 1 - age * 0.015; // -1.5% per year, floor later
  // severity penalty
  const sevPenalty = 1 - severity * 0.5; // up to -50%
  // combine
  const center = Math.max(0.15, agePenalty * sevPenalty); // never below 15%
  const minFactor = Math.max(0.10, center - 0.07);
  const maxFactor = Math.min(0.75, center + 0.07);

  if (market && market > 0) {
    const min = Math.round(market * minFactor);
    const max = Math.round(market * maxFactor);
    return { min, max, minFactor, maxFactor };
  }
  return { minFactor, maxFactor };
}
