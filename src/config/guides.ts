import type { Block } from "./blog";

export interface GuideChapter {
  title: string;
  blocks: Block[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  estimatedTime: string;
  difficulty: "Kolay" | "Orta" | "İleri";
  lastReviewed: string; // ISO
  image: string;
  imageAlt: string;
  chapters: GuideChapter[];
  sample: boolean;
}

export const guideCategories = [
  "Araç durumuna göre",
  "Satış sürecine göre",
  "Belge ve hazırlık",
  "Konum ve taşıma",
];

export const guides: Guide[] = [
  {
    slug: "hasarli-arac-satisi-bastan-sona",
    title: "Akdeniz'de Hasarlı Araç Satışı: Adım Adım Yol Haritası",
    description:
      "Antalya'dan Hatay'a, hasarlı aracınızı satarken izleyeceğiniz yolu netleştiren pratik rehber: hazırlık, değerlendirme, noter ve teslim.",
    category: "Satış sürecine göre",
    estimatedTime: "10 dk",
    difficulty: "Kolay",
    lastReviewed: "2026-05-20",
    image: "/images/photos/2.png",
    imageAlt: "Değerlendirme için hazırlanmış hasarlı araç",
    chapters: [
      {
        title: "Sürece kuş bakışı",
        blocks: [
          { type: "p", text: "Hasarlı araç satışı beş net adımdan oluşur: bilgi paylaşımı, değerlendirme, teklif, noter devri ve teslim. Aracınız Antalya'da bir sitenin otoparkında da bekliyor olsa, Adana'da bir sanayi sitesinde de dursa sıra değişmez; yalnızca teslim planı konuma göre şekillenir." },
        ],
      },
      {
        title: "Araç bilgilerini toparlayın",
        blocks: [
          { type: "p", text: "Marka, model, yıl ve kilometrenin yanında hasarın hikâyesini de kısaca not edin: kaza mı, dolu mu, su baskını mı, yoksa sıcaktan kaynaklı bir motor arızası mı? Akdeniz'de hasarın kaynağı çeşitlidir ve doğru anlatım değerlendirmeyi hızlandırır." },
          { type: "ul", items: ["Ruhsat bilgileri", "Hasarın veya arızanın kısa açıklaması (kaza, dolu, sel, hararet vb.)", "Varsa servis, ekspertiz veya sigorta kayıtları"] },
        ],
      },
      {
        title: "Fotoğrafları doğru çekin",
        blocks: [
          { type: "p", text: "Bölgemizde öğle güneşi çok sert olduğundan sabah veya ikindi saatlerinde, gölgelik bir yerde çekim yapın; parlama, dolu göçüklerini ve boya kusurlarını gizler." },
          { type: "ul", items: ["Dört yönden genel görünüm", "Hasarlı bölgelerin yakın çekimi", "Motor bölmesi ve iç mekân", "Sel geçmişi varsa halı altı ve bagaj zemini"] },
        ],
      },
      {
        title: "Değerlendirme talebini gönderin",
        blocks: [
          { type: "p", text: "Bilgileri ve fotoğrafları form veya WhatsApp üzerinden iletin. Bu adım ücretsizdir, sizi bağlamaz ve aracınızı yerinden oynatmanızı gerektirmez." },
        ],
      },
      {
        title: "Noter, ödeme ve teslim",
        blocks: [
          { type: "p", text: "Anlaşma sağlandığında devir, bulunduğunuz ile uygun bir noterde resmi olarak tamamlanır; ödeme adımları devir planıyla birlikte netleştirilir. Çalışmayan araçlar için çekici ve taşıma seçenekleri konuma göre planlanır — ister Mersin sahilinde ister Isparta'da olun." },
          { type: "note", text: "Bu rehber genel bilgilendirme amaçlıdır; hukuki tavsiye niteliği taşımaz." },
        ],
      },
    ],
    sample: true,
  },
  {
    slug: "arac-fotografi-nasil-cekilir",
    title: "Güney Güneşinde Araç Fotoğrafı Çekmenin Püf Noktaları",
    description:
      "Sert Akdeniz ışığında hasarı doğru gösteren, değerlendirmeyi hızlandıran fotoğraflar için kısa bir kontrol listesi.",
    category: "Belge ve hazırlık",
    estimatedTime: "5 dk",
    difficulty: "Kolay",
    lastReviewed: "2026-05-02",
    image: "/images/photos/22.png",
    imageAlt: "Hasarlı aracın telefonla fotoğraflanması",
    chapters: [
      {
        title: "Işığı doğru kullanın",
        blocks: [
          { type: "p", text: "Akdeniz güneşi öğle saatlerinde kaportada güçlü yansıma yapar; dolu göçükleri ve ince çizikler bu parlamada kaybolur. Sabah erken ya da ikindi sonrası, mümkünse gölgede çekim yapın ve aracın tamamını kadraja alın." },
        ],
      },
      {
        title: "Çekim listesi",
        blocks: [
          { type: "ol", items: [
            "Ön, arka ve her iki yan görünüm",
            "Hasarlı bölgelerin yakın çekimi (dolu göçüklerinde kaput ve tavanı hafif açıyla çekin)",
            "Motor bölmesi",
            "Gösterge paneli (kilometre görünecek şekilde)",
            "Sel veya su teması varsa iç döşeme, halı altı ve bagaj zemini",
            "Şase numarası ve ruhsat",
          ] },
        ],
      },
    ],
    sample: true,
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
