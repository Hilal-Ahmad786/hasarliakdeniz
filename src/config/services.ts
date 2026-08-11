/**
 * Vehicle acquisition services — the primary organic & paid conversion pages.
 * Each maps to /arac-alimi/[slug].
 *
 * - `icon` (lucide-react name) drives the brand primary line-icon category cards
 *   (homepage / overview / related), matching design 5.png.
 * - `image` is a real scene photo (with a genuine background) used for the
 *   service-page hero and feature imagery. The original transparent-looking
 *   category PNGs were discarded — they had a checkerboard baked into the
 *   pixels (no real alpha), so they are not used anywhere.
 *
 * This is seed/config data; the CMS will later own the long-form body content.
 */

export interface VehicleService {
  slug: string;
  /** Short label for category cards & nav. */
  name: string;
  /** H1 / page title form. */
  title: string;
  /** 1–2 line description for cards. */
  short: string;
  /** Real scene photo for hero/feature use (object-cover). */
  image: string;
  imageAlt: string;
  icon: string; // lucide-react name (line icon)
  /** Show on the homepage category grid. */
  featured: boolean;
  /** SEO <title> without brand (the layout template appends " | <brand>"). Falls back to `title`. */
  metaTitle?: string;
  /** SEO meta description. Falls back to the service hero lead. */
  metaDescription?: string;
  /** SEO meta keywords (comma-separated). */
  metaKeywords?: string;
}

const P = "/images/photos";

export const services: VehicleService[] = [
  {
    slug: "hasarli-arac-alimi",
    name: "Hasarlı Araç",
    title: "Hasarlı Araç Alımı",
    short: "Çizikten dolu göçüğüne, her seviyede hasarlı araç değerlendirilir.",
    image: `${P}/1.png`,
    imageAlt: "Yan tarafı hasarlı gümüş renkli sedan otomobil",
    icon: "TriangleAlert",
    featured: true,
    metaTitle: "Hasarlı Araç Alan | Akdeniz Bölgesi",
    metaDescription:
      "Antalya, Mersin ve Adana başta olmak üzere Akdeniz genelinde hasarlı araç alan kurumsal ekip. Fotoğrafla ücretsiz değerlendirme, noter destekli devir.",
    metaKeywords:
      "hasarlı araç alan, hasarlı araç alımı, hasarlı araç alan antalya, hasarlı araç alan mersin, hasarlı araç satmak",
  },
  {
    slug: "kazali-arac-alimi",
    name: "Kazalı Araç",
    title: "Kazalı Araç Alımı",
    short: "Şehir içi veya D-400'de kaza geçirmiş aracınız için teklif isteyin.",
    image: `${P}/66.png`,
    imageAlt: "Ön ve yan tarafı kaza nedeniyle hasar görmüş siyah sedan",
    icon: "CarFront",
    featured: true,
    metaTitle: "Kazalı Araç Alan | Hızlı Değerlendirme",
    metaDescription:
      "Kazalı araç mı satacaksınız? Akdeniz genelinde kazalı araç alımı: fotoğrafla ücretsiz ön değerlendirme, şeffaf teklif, noterde güvenli devir planı.",
    metaKeywords:
      "kazalı araç alan, kazalı araç alımı, kaza yapmış araç alan, kazalı araç alan adana, kazalı oto satmak",
  },
  {
    slug: "pert-arac-alimi",
    name: "Pert Araç",
    title: "Pert Araç Alımı",
    short: "Pert kayıtlı araçlar belge durumuna göre planlı şekilde alınır.",
    image: `${P}/4.png`,
    imageAlt: "Ön tarafı ağır hasarlı, pert durumundaki sedan",
    icon: "FileWarning",
    featured: true,
    metaTitle: "Pert Araç Alan | Kayıtlı Araç Değerlendirmesi",
    metaDescription:
      "Pert araç alan arıyorsanız doğru yerdesiniz: pert kayıtlı ve ağır hasarlı araçlar Akdeniz genelinde değerlendirilir. Belge süreci şeffaf planlanır.",
    metaKeywords:
      "pert araç alan, pert araç alımı, pert kayıtlı araç, sigorta pertli araç, pert araç alan mersin",
  },
  {
    slug: "agir-hasarli-arac-alimi",
    name: "Ağır Hasarlı Araç",
    title: "Ağır Hasarlı Araç Alımı",
    short: "Sürülemeyecek durumdaki araçlar yerinden değerlendirilir.",
    image: `${P}/2.png`,
    imageAlt: "Ön tarafı ağır hasarlı siyah SUV",
    icon: "AlertOctagon",
    featured: false,
    metaTitle: "Ağır Hasarlı Araç Alan",
    metaDescription:
      "Ağır hasarlı aracınız bulunduğu yerden değerlendirilir; çekici ve taşıma seçenekleri konuma göre planlanır. Akdeniz genelinde ücretsiz teklif talebi.",
    metaKeywords:
      "ağır hasarlı araç alan, ağır hasarlı araç alımı, ağır hasarlı araba alan, pert araç alan",
  },
  {
    slug: "motor-arizali-arac-alimi",
    name: "Motor Arızalı Araç",
    title: "Motor Arızalı Araç Alımı",
    short: "Hararet, motor arızası veya revizyon gereken araçlar için teklif.",
    image: `${P}/5.png`,
    imageAlt: "Motor bölmesi kontrol edilen, motor kaputu açık araç",
    icon: "Wrench",
    featured: true,
    metaTitle: "Motor Arızalı Araç Alan",
    metaDescription:
      "Motor arızalı araç alımı: hararet yapan, yağ yakan veya revizyon bekleyen aracınız için Akdeniz genelinde ücretsiz değerlendirme talebi oluşturun.",
    metaKeywords:
      "motor arızalı araç alan, motor arızalı araç alımı, hararet yapan araç, arızalı araç alan adana",
  },
  {
    slug: "mekanik-arizali-arac-alimi",
    name: "Arızalı Araç",
    title: "Mekanik Arızalı Araç Alımı",
    short: "Şanzıman, elektronik veya çoklu arızası olan araçlar alınır.",
    image: `${P}/6.png`,
    imageAlt: "Lift üzerinde mekanik kontrolü yapılan araç",
    icon: "Settings",
    featured: false,
    metaTitle: "Mekanik Arızalı Araç Alan",
    metaDescription:
      "Şanzıman, elektronik veya çoklu mekanik arızası bulunan aracınız için ücretsiz değerlendirme. Akdeniz Bölgesi genelinde başvuru kabul edilir.",
    metaKeywords:
      "mekanik arızalı araç alan, arızalı araç alan, şanzıman arızalı araç, çalışmayan araç alan",
  },
  {
    slug: "calismayan-arac-alimi",
    name: "Çalışmayan Araç",
    title: "Çalışmayan Araç Alımı",
    short: "Marş almayan, uzun süredir park hâlinde bekleyen araçlar için başvuru.",
    image: `${P}/10.png`,
    imageAlt: "Hareket etmeyen, hasarlı koyu renkli sedan",
    icon: "BatteryWarning",
    featured: false,
    metaTitle: "Çalışmayan Araç Alan",
    metaDescription:
      "Çalışmayan veya marş almayan aracınız için teklif talebi oluşturun. Taşıma seçenekleri konuma göre planlanır; Akdeniz genelinde değerlendirme yapılır.",
    metaKeywords:
      "çalışmayan araç alan, çalışmayan araç alımı, marş almayan araç alan, hareket etmeyen araç alan",
  },
  {
    slug: "yanmis-arac-alimi",
    name: "Yanmış Araç",
    title: "Yanmış Araç Alımı",
    short: "Kısmi veya tam yangın hasarlı araçlar için değerlendirme talebi.",
    image: `${P}/8.png`,
    imageAlt: "Yangın sonucu tamamen yanmış sedan otomobil",
    icon: "Flame",
    featured: true,
    metaTitle: "Yanmış Araç Alan",
    metaDescription:
      "Yanmış araç alımı: motor bölmesi veya kabin yangını geçirmiş araçlar için fotoğrafla ücretsiz değerlendirme. Belge süreci şeffaf biçimde planlanır.",
    metaKeywords:
      "yanmış araç alan, yanmış araç alımı, yangın hasarlı araç alan, yanık araç alan",
  },
  {
    slug: "sel-hasarli-arac-alimi",
    name: "Selde Kalmış Araç",
    title: "Selde Kalmış Araç Alımı",
    short: "Ani su baskınında kalan araçlar için bölgeye özel değerlendirme.",
    image: `${P}/9.png`,
    imageAlt: "Sel ve çamur hasarı görmüş gri sedan",
    icon: "Waves",
    featured: true,
    metaTitle: "Sel Hasarlı Araç Alan | Su Baskını Sonrası Değerlendirme",
    metaDescription:
      "Mersin ve Antalya'da ani sağanaklarda su hasarı alan araçlar için ücretsiz değerlendirme. Sel hasarlı araç alımı Akdeniz genelinde planlı yürütülür.",
    metaKeywords:
      "sel hasarlı araç alan, sel hasarlı araç alımı, su basmış araç alan, selde kalan araç satmak",
  },
  {
    slug: "hurda-arac-alimi",
    name: "Hurda Araç",
    title: "Hurda Araç Alımı",
    short: "Ekonomik ömrünü doldurmuş araçlar belgeli süreçle değerlendirilir.",
    image: `${P}/1010.png`,
    imageAlt: "Hurda durumundaki eski, paslı beyaz araç",
    icon: "Recycle",
    featured: true,
    metaTitle: "Hurda Araç Alan | Belgeli İşlem",
    metaDescription:
      "Hurda araç alımı: ekonomik ömrünü tamamlamış, korozyona uğramış veya atıl bekleyen aracınız için Akdeniz genelinde belgeli ve şeffaf değerlendirme.",
    metaKeywords:
      "hurda araç alan, hurda araç alımı, hurda belgeli araç, hurdaya araç satmak, hurda oto alan",
  },
  {
    slug: "cekme-belgeli-arac-alimi",
    name: "Çekme Belgeli Araç",
    title: "Çekme Belgeli Araç Alımı",
    short: "Trafikten çekilmiş araçlar belge durumuna uygun süreçle alınır.",
    image: `${P}/7.png`,
    imageAlt: "Çekici üzerinde taşınan çekme belgeli araç",
    icon: "FileText",
    featured: true,
    metaTitle: "Çekme Belgeli Araç Alan",
    metaDescription:
      "Çekme belgeli veya trafikten çekilmiş aracınız için teklif talebi oluşturun. Devir adımları belge durumuna göre Akdeniz genelinde planlı yürütülür.",
    metaKeywords:
      "çekme belgeli araç alan, çekme belgeli araç alımı, trafikten çekik araç alan, çekme belgeli oto",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): VehicleService | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Transparent cut-out car image used as the category "icon"
 * (generated from icons-source by scripts/remove_checkerboard.py).
 */
const ICON_IMG: Record<string, string> = {
  "hasarli-arac-alimi": "hasarli-yeni",
  "kazali-arac-alimi": "kazali",
  "pert-arac-alimi": "agir-hasarli",
  "agir-hasarli-arac-alimi": "agir-hasarli",
  "motor-arizali-arac-alimi": "motor-arizali-yeni",
  "mekanik-arizali-arac-alimi": "mekanik-arizali",
  "calismayan-arac-alimi": "calismayan-arac",
  "yanmis-arac-alimi": "yanmis",
  "sel-hasarli-arac-alimi": "sel-hasarli",
  "hurda-arac-alimi": "hurda",
  "cekme-belgeli-arac-alimi": "cekme-belgeli",
};

export function serviceIconImage(slug: string): string {
  return `/images/categories/${ICON_IMG[slug] ?? "hasarli"}.png`;
}
