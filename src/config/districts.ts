/**
 * District seed data — curated set for major Akdeniz cities. A district page is
 * published only when it has unique approved content (master prompt) — so we
 * seed a curated set rather than auto-generating all districts.
 */
export interface District {
  slug: string;
  name: string;
  citySlug: string;
}

export const districts: District[] = [
  // Antalya
  { slug: "kepez", name: "Kepez", citySlug: "antalya" },
  { slug: "muratpasa", name: "Muratpaşa", citySlug: "antalya" },
  { slug: "konyaalti", name: "Konyaaltı", citySlug: "antalya" },
  { slug: "alanya", name: "Alanya", citySlug: "antalya" },
  { slug: "manavgat", name: "Manavgat", citySlug: "antalya" },
  { slug: "serik", name: "Serik", citySlug: "antalya" },
  // Adana
  { slug: "seyhan", name: "Seyhan", citySlug: "adana" },
  { slug: "yuregir", name: "Yüreğir", citySlug: "adana" },
  { slug: "cukurova", name: "Çukurova", citySlug: "adana" },
  { slug: "ceyhan", name: "Ceyhan", citySlug: "adana" },
  // Mersin
  { slug: "yenisehir", name: "Yenişehir", citySlug: "mersin" },
  { slug: "mezitli", name: "Mezitli", citySlug: "mersin" },
  { slug: "toroslar", name: "Toroslar", citySlug: "mersin" },
  { slug: "tarsus", name: "Tarsus", citySlug: "mersin" },
  // Hatay
  { slug: "antakya", name: "Antakya", citySlug: "hatay" },
  { slug: "iskenderun", name: "İskenderun", citySlug: "hatay" },
  { slug: "dortyol", name: "Dörtyol", citySlug: "hatay" },
  // Kahramanmaraş
  { slug: "onikisubat", name: "Onikişubat", citySlug: "kahramanmaras" },
  { slug: "dulkadiroglu", name: "Dulkadiroğlu", citySlug: "kahramanmaras" },
  // Isparta
  { slug: "isparta-merkez", name: "Merkez", citySlug: "isparta" },
];

export function districtsOfCity(citySlug: string): District[] {
  return districts.filter((d) => d.citySlug === citySlug);
}

export function getDistrict(citySlug: string, districtSlug: string): District | undefined {
  return districts.find((d) => d.citySlug === citySlug && d.slug === districtSlug);
}
