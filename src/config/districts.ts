/**
 * District seed data — only districts with real, standalone search demand and
 * unique approved content (config/local-data.ts) get a page. Central districts
 * that just duplicate their city page (Muratpaşa, Seyhan, Onikişubat, …) were
 * pruned and 301-redirect to the city page (see next.config.ts).
 */
export interface District {
  slug: string;
  name: string;
  citySlug: string;
}

export const districts: District[] = [
  // Antalya
  { slug: "kepez", name: "Kepez", citySlug: "antalya" },
  { slug: "konyaalti", name: "Konyaaltı", citySlug: "antalya" },
  { slug: "alanya", name: "Alanya", citySlug: "antalya" },
  { slug: "manavgat", name: "Manavgat", citySlug: "antalya" },
  { slug: "serik", name: "Serik", citySlug: "antalya" },
  // Adana
  { slug: "ceyhan", name: "Ceyhan", citySlug: "adana" },
  // Mersin
  { slug: "tarsus", name: "Tarsus", citySlug: "mersin" },
  // Hatay
  { slug: "antakya", name: "Antakya", citySlug: "hatay" },
  { slug: "iskenderun", name: "İskenderun", citySlug: "hatay" },
  { slug: "dortyol", name: "Dörtyol", citySlug: "hatay" },
];

/**
 * Pruned thin district pages → 301 to their city page (consumed by
 * next.config.ts redirects()).
 */
export const prunedDistrictRedirects: { districtSlug: string; citySlug: string }[] = [
  { districtSlug: "muratpasa", citySlug: "antalya" },
  { districtSlug: "seyhan", citySlug: "adana" },
  { districtSlug: "yuregir", citySlug: "adana" },
  { districtSlug: "cukurova", citySlug: "adana" },
  { districtSlug: "yenisehir", citySlug: "mersin" },
  { districtSlug: "mezitli", citySlug: "mersin" },
  { districtSlug: "toroslar", citySlug: "mersin" },
  { districtSlug: "onikisubat", citySlug: "kahramanmaras" },
  { districtSlug: "dulkadiroglu", citySlug: "kahramanmaras" },
  { districtSlug: "isparta-merkez", citySlug: "isparta" },
];

export function districtsOfCity(citySlug: string): District[] {
  return districts.filter((d) => d.citySlug === citySlug);
}

export function getDistrict(citySlug: string, districtSlug: string): District | undefined {
  return districts.find((d) => d.citySlug === citySlug && d.slug === districtSlug);
}
