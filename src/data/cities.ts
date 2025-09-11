// src/data/cities.ts
export type City = { slug: string; name: string; blurb: string; phone?: string };

export const cities: City[] = [
  // Akdeniz
  { slug: "antalya", name: "Antalya", blurb: "Aynı gün noter & ödeme.", phone: "+90XXXXXXXXXX" },
  { slug: "adana", name: "Adana", blurb: "Yerinde/çekici ekspertiz.", phone: "+90XXXXXXXXXX" },
  { slug: "mersin", name: "Mersin", blurb: "Gizli ücret yok.", phone: "+90XXXXXXXXXX" },
  { slug: "hatay", name: "Hatay", blurb: "24 saatte alım.", phone: "+90XXXXXXXXXX" },
  { slug: "osmaniye", name: "Osmaniye", blurb: "Hızlı ve şeffaf süreç.", phone: "+90XXXXXXXXXX" },
  { slug: "kahramanmaras", name: "Kahramanmaraş", blurb: "Yerel ekip.", phone: "+90XXXXXXXXXX" },
  { slug: "isparta", name: "Isparta", blurb: "Telefonla yönlendirme.", phone: "+90XXXXXXXXXX" },
  { slug: "burdur", name: "Burdur", blurb: "Ücretsiz çekici.", phone: "+90XXXXXXXXXX" },

  // Ek bölgeler
  { slug: "gaziantep", name: "Gaziantep", blurb: "2 saatte ön bilgi.", phone: "+90XXXXXXXXXX" },
  { slug: "diyarbakir", name: "Diyarbakır", blurb: "Yerinde ekspertiz.", phone: "+90XXXXXXXXXX" },
  { slug: "sanliurfa", name: "Şanlıurfa", blurb: "Şeffaf fiyatlandırma.", phone: "+90XXXXXXXXXX" },
  { slug: "mardin", name: "Mardin", blurb: "Hızlı alım süreci.", phone: "+90XXXXXXXXXX" },
];
