/**
 * Priority service-area cities — Akdeniz Bölgesi focus for Hasarlı Akdeniz.
 * A city page is only "published" once it has unique approved content —
 * the `published` flag gates routing/sitemap inclusion. For now all are
 * config-seeded; the CMS will own this later.
 */

export interface City {
  slug: string;
  name: string;
  /** Possessive form for Turkish copy, e.g. "Antalya'da". */
  locative: string;
  region: string;
  featured: boolean;
  published: boolean;
}

export const cities: City[] = [
  { slug: "antalya", name: "Antalya", locative: "Antalya'da", region: "Akdeniz", featured: true, published: true },
  { slug: "adana", name: "Adana", locative: "Adana'da", region: "Akdeniz", featured: true, published: true },
  { slug: "mersin", name: "Mersin", locative: "Mersin'de", region: "Akdeniz", featured: true, published: true },
  { slug: "hatay", name: "Hatay", locative: "Hatay'da", region: "Akdeniz", featured: true, published: true },
  { slug: "osmaniye", name: "Osmaniye", locative: "Osmaniye'de", region: "Akdeniz", featured: true, published: true },
  { slug: "kahramanmaras", name: "Kahramanmaraş", locative: "Kahramanmaraş'ta", region: "Akdeniz", featured: true, published: true },
  { slug: "isparta", name: "Isparta", locative: "Isparta'da", region: "Akdeniz", featured: true, published: true },
  { slug: "burdur", name: "Burdur", locative: "Burdur'da", region: "Akdeniz", featured: true, published: true },
  { slug: "gaziantep", name: "Gaziantep", locative: "Gaziantep'te", region: "Güneydoğu Anadolu", featured: false, published: true },
  { slug: "sanliurfa", name: "Şanlıurfa", locative: "Şanlıurfa'da", region: "Güneydoğu Anadolu", featured: false, published: false },
  { slug: "diyarbakir", name: "Diyarbakır", locative: "Diyarbakır'da", region: "Güneydoğu Anadolu", featured: false, published: false },
  { slug: "mardin", name: "Mardin", locative: "Mardin'de", region: "Güneydoğu Anadolu", featured: false, published: false },
];

export const featuredCities = cities.filter((c) => c.featured);
export const publishedCities = cities.filter((c) => c.published);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
