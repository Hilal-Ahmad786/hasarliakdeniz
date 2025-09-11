// src/data/company.ts
export const COMPANY = {
    name: "Hasarlı Akdeniz",
    phoneTel: "+90XXXXXXXXXX",         // E.164 format
    phoneDisplay: "+90 X XXX XX XX",   // Human-friendly
    whatsapp: "https://wa.me/90XXXXXXXXXX",
    email: "info@example.com",         // optional - update or leave empty
    address: {
      line1: "Bölge Ofisi (Güncellenecek)",
      line2: "Akdeniz, Türkiye",
      city: "Antalya",
      country: "TR",
      // Optional: paste a Google Maps embed URL here to show a map
      mapsEmbedSrc: "", // e.g. "https://www.google.com/maps/embed?pb=..."
    },
    hours: [
      { day: "Pazartesi–Pazar", open: "09:00", close: "21:00" },
    ],
    serviceArea: [
      "Antalya","Adana","Mersin","Hatay","Osmaniye","Kahramanmaraş",
      "Isparta","Burdur","Gaziantep","Diyarbakır","Şanlıurfa","Mardin",
    ],
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  };
  