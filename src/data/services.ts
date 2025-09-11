// src/data/services.ts

export type FAQ = {
  q: string;
  a: string;
  id?: string;
  category?: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  bullets: string[];
  faqs: FAQ[];
};

const REGION_LINE =
  "Akdeniz bölgesinde (Antalya, Adana, Mersin, Hatay, Osmaniye, Kahramanmaraş, Isparta, Burdur) ve çevre illerde (Gaziantep, Diyarbakır, Şanlıurfa, Mardin) hizmet veriyoruz.";

// --- Default, reusable FAQ bank (applies to all services) -------------------
const defaultFaqs: FAQ[] = [
  // Süreç & Zamanlama
  {
    category: "Süreç & Zamanlama",
    q: "Ön teklif ne kadar sürede veriliyor?",
    a: "Genelde 2 saat içinde ön teklif iletiyoruz. Fotoğraflar ve temel bilgiler geldikten sonra piyasa verileriyle hızlı bir değerlendirme yapıyoruz.",
  },
  {
    category: "Süreç & Zamanlama",
    q: "Aracı ne kadar sürede alıyorsunuz?",
    a: "Çoğu alım 24 saat içinde tamamlanır. Konumunuza ve evrak durumuna göre aynı gün devir ve ödeme yapabiliyoruz.",
  },
  {
    category: "Süreç & Zamanlama",
    q: "Ekspertiz için aracı getirmeniz gerekiyor mu?",
    a: "Hayır. Ücretsiz çekici veya yerinde ekspertiz ile geliyoruz. Uygun görüldüğünde yetkili servis/ekspertiz noktasında kontrol yapılabilir.",
  },

  // Ödeme
  {
    category: "Ödeme",
    q: "Ödeme nasıl yapılıyor?",
    a: "Ödeme resmî devirle eş zamanlı olarak EFT/havale ile yapılır. Sözleşme ve noter işlemleri tamamlanmadan ödeme yapılmaz; süreç şeffaftır.",
  },
  {
    category: "Ödeme",
    q: "Aynı gün ödeme mümkün mü?",
    a: "Evet. Evraklar hazırsa aynı gün noter devri ve ödeme yapıyoruz.",
  },
  {
    category: "Ödeme",
    q: "Kapora veriyor musunuz?",
    a: "Prensip olarak araç ve evrak doğrulanmadan kapora vermiyoruz. Değerleme ve mutabakat sonrası süreç resmî şekilde ilerler.",
  },

  // Evrak & Hukuk
  {
    category: "Evrak & Hukuk",
    q: "Hangi evraklar gerekiyor?",
    a: "Ruhsat, kimlik, varsa trafik sigortası ve anahtarlar yeterlidir. Şirket aracıysa imza sirküleri ve yetki belgesi de gerekir.",
  },
  {
    category: "Evrak & Hukuk",
    q: "Araçta rehin/haciz/MTV borcu varsa?",
    a: "Rehin/haciz varsa devir yapılamaz; önce kaldırılması gerekir. MTV veya trafik cezası borçları devir öncesi kapatılmalıdır. Süreci birlikte kontrol ediyoruz.",
  },
  {
    category: "Evrak & Hukuk",
    q: "Noter işlemleri nasıl oluyor?",
    a: "Noterde satış sözleşmesi imzalanır, bedel EFT ile ödenir ve tescil devir işlemi tamamlanır. Tüm süreç belgeli ve şeffaftır.",
  },

  // Araç Durumu
  {
    category: "Araç Durumu",
    q: "Pert kayıtlı/çekme belgeli/yanmış araçları alıyor musunuz?",
    a: "Evet. Pert kayıtlı, çekme belgeli, mekanik arızalı veya yanmış araçları durumuna göre değerlendirip satın alıyoruz.",
  },
  {
    category: "Araç Durumu",
    q: "Çalışmayan ya da yürür durumda olmayan aracı alır mısınız?",
    a: "Evet. Ücretsiz çekici ile bulunduğu yerden teslim alıyoruz.",
  },
  {
    category: "Araç Durumu",
    q: "Modifiye/eksik parçalı araçlar için teklif veriyor musunuz?",
    a: "Evet. Eksik veya modifiye parçalar değerlemeyi etkileyebilir; fotoğraflarla birlikte belirtmenizi rica ederiz.",
  },

  // Lojistik & Bölgeler
  {
    category: "Lojistik & Bölgeler",
    q: "Hangi şehirlerde hizmet veriyorsunuz?",
    a: REGION_LINE,
  },
  {
    category: "Lojistik & Bölgeler",
    q: "Çekici ücreti var mı?",
    a: "Hayır. Alım kararı verildiğinde çekici ücretsizdir.",
  },

  // Teklif & Değerleme
  {
    category: "Teklif & Değerleme",
    q: "Değerleme nasıl yapılıyor?",
    a: "Piyasa verileri, hasar durumu, model/yıl, donanım ve yürürlükteki fiyat trendleri dikkate alınır. Şeffaf kalemlerle anlatıyoruz.",
  },
  {
    category: "Teklif & Değerleme",
    q: "Teklifiniz bağlayıcı mı?",
    a: "Ön teklif görsel ve bilgiye göre tahmindir. Yerinde ekspertiz sonrası nihai teklif ile ilerlenir.",
  },
  {
    category: "Teklif & Değerleme",
    q: "Fiyatı nasıl artırabilirim?",
    a: "Temiz iç/dış detay, detaylı fotoğraflar, düzenli bakım kayıtları ve yedek anahtar değeri olumlu etkileyebilir.",
  },

  // Gizlilik & KVKK
  {
    category: "Gizlilik & KVKK",
    q: "Kişisel verilerim nasıl korunuyor?",
    a: "KVKK kapsamında verileriniz yalnızca ön değerlendirme ve iletişim amacıyla işlenir; üçüncü kişilerle paylaşılmaz.",
  },
  {
    category: "Gizlilik & KVKK",
    q: "Fotoğraflar ne amaçla kullanılıyor?",
    a: "Sadece araç durumunu anlamak ve doğru ön teklif verebilmek için kullanılır; izniniz olmadan paylaşılmaz.",
  },
];

// --- Service-specific FAQ helpers -------------------------------------------
function serviceExtras(slug: string): FAQ[] {
  switch (slug) {
    case "hasarli-arac-alan":
      return [
        {
          category: "Hasarlı Araç",
          q: "Kasko hasarı olan araçlar için süreç farklı mı?",
          a: "Kasko dosyası ve hasar evrakları süreci hızlandırır. Onarım/pert durumuna göre değerlendirme yapılır.",
        },
        {
          category: "Hasarlı Araç",
          q: "Mini hasarlar teklifi ne kadar etkiler?",
          a: "Boyasız göçük, lokal çizikler gibi mini hasarlar aracın genel durumuna göre sınırlı etkiler yapar.",
        },
      ];
    case "kazali-arac-alan":
      return [
        {
          category: "Kazalı Araç",
          q: "Şasi işlemi görmüş araçlara teklif veriyor musunuz?",
          a: "Evet; şasi doğrultma/işlem durumu fiyata etki eder fakat alımı engellemez.",
        },
        {
          category: "Kazalı Araç",
          q: "Airbag açmış araç alınır mı?",
          a: "Evet. Airbag açılması hasar boyutunu artırır ancak aracı alabiliriz.",
        },
      ];
    case "hurda-arac-alan":
      return [
        {
          category: "Hurda Araç",
          q: "Hurda belgeli araçları nasıl devrediyoruz?",
          a: "Çekme/hurda tescil durumuna göre noterde veya ilgili kurumlarda gerekli işlemleri birlikte tamamlıyoruz.",
        },
        {
          category: "Hurda Araç",
          q: "Parça amaçlı mı alıyorsunuz?",
          a: "Evet; bazı hurda araçlar parça/geri dönüşüm amaçlı değerlendirilir.",
        },
      ];
    case "pert-arac-alan":
      return [
        {
          category: "Pert Araç",
          q: "Pert kayıtlı araç satışı noter üzerinden mi olur?",
          a: "Evet; pert kayıtlı araçlar da noter satışıyla devredilir. Gerekli evrakları birlikte kontrol ediyoruz.",
        },
        {
          category: "Pert Araç",
          q: "Onarılan pert araçları da alıyor musunuz?",
          a: "Evet; onarım kalitesi ve hasar geçmişi fiyata etki eder.",
        },
      ];
    case "yanmis-arac-alan":
      return [
        {
          category: "Yanmış Araç",
          q: "Kısmi yangın görmüş araç ile komple yanmış araç arasında süreç farkı var mı?",
          a: "Kısmi/komple yanma durumuna göre çekici ve depolama planı değişir; teklif de buna göre belirlenir.",
        },
        {
          category: "Yanmış Araç",
          q: "Sigorta dosyası zorunlu mu?",
          a: "Zorunlu değil ancak dosya ve ekspertiz raporu süreci hızlandırır.",
        },
      ];
    case "motor-arizali-arac-alan":
      return [
        {
          category: "Mekanik Arızalı",
          q: "Motor revizyonlu araçları alıyor musunuz?",
          a: "Evet; revizyon/arıza durumuna göre fiyatlandırma yapılır. Fatura ve servis kayıtları faydalıdır.",
        },
        {
          category: "Mekanik Arızalı",
          q: "Yürür olmayan araç için çekici sağlıyor musunuz?",
          a: "Evet; alım onayı sonrası çekici ücretsizdir.",
        },
      ];
    case "cekme-belgeli-arac-alan":
      return [
        {
          category: "Çekme Belgeli",
          q: "Çekme belgeli aracı nasıl devrederiz?",
          a: "Çekme belgesi mevcutsa tescil işlemleri farklı ilerler; noter ve ilgili kurumlarla koordineli şekilde tamamlarız.",
        },
        {
          category: "Çekme Belgeli",
          q: "Tekrar trafiğe çıkarma mümkün mü?",
          a: "Araç durumu ve mevzuata göre mümkündür; muayene ve uygunluk süreçleri gerekir. Biz alım sürecine odaklanıyoruz.",
        },
      ];
    default:
      return [];
  }
}

// --- Services ---------------------------------------------------------------
export const services: Service[] = [
  {
    slug: "hasarli-arac-alan",
    title: "Hasarlı Araç Alan",
    short: "Hasarlı aracınızı şeffaf, hızlı ve adil değerleme ile satın alıyoruz.",
    desc:
      "Fotoğraflarınızı gönderin, 2 saat içinde ön teklif alın. Ücretsiz çekici, aynı gün ödeme ve noter devri ile güvenle teslim edin.",
    bullets: [
      "2 saatte ön teklif",
      "24 saatte alım",
      "Ücretsiz çekici",
      "Aynı gün ödeme",
    ],
    faqs: [...defaultFaqs, ...serviceExtras("hasarli-arac-alan")],
  },
  {
    slug: "kazali-arac-alan",
    title: "Kazalı Araç Alan",
    short: "Kazalı, yürür/yürümez durumdaki araçlarınızı satın alıyoruz.",
    desc:
      "Yerinde ekspertiz, ücretsiz çekici ve adil fiyatlandırma. Tüm işlemler noter ve sözleşme ile şeffaf yürütülür.",
    bullets: [
      "Yerinde ekspertiz",
      "Şeffaf teklif",
      "Noter eşliğinde devir",
      "Aynı gün EFT/Havale",
    ],
    faqs: [...defaultFaqs, ...serviceExtras("kazali-arac-alan")],
  },
  {
    slug: "hurda-arac-alan",
    title: "Hurda Araç Alan",
    short: "Hurda/çekme/hurda belgeli araçlarınızı değerinde satın alıyoruz.",
    desc:
      "Çekici ücretsiz, evraklarda yönlendirme desteği. Parça ve geri dönüşüm odaklı adil fiyatlama.",
    bullets: ["Ücretsiz çekici", "Evrak desteği", "Hızlı ödeme", "Şeffaf süreç"],
    faqs: [...defaultFaqs, ...serviceExtras("hurda-arac-alan")],
  },
  {
    slug: "pert-arac-alan",
    title: "Pert Araç Alan",
    short: "Pert kayıtlı araçlarınızı durumuna göre değerlendirip satın alıyoruz.",
    desc:
      "Yetkili değerleme, noter devri ve aynı gün ödeme. Onarılmış pert araçlarda da alım yapıyoruz.",
    bullets: [
      "Pert kayıtlı alım",
      "Noter devri",
      "Piyasa verisi ile fiyat",
      "Aynı gün ödeme",
    ],
    faqs: [...defaultFaqs, ...serviceExtras("pert-arac-alan")],
  },
  {
    slug: "yanmis-arac-alan",
    title: "Yanmış Araç Alan",
    short: "Kısmi veya komple yanmış araçlarınızı güvenle satın alıyoruz.",
    desc:
      "Çekici ve depolama planı, ekspertiz ve şeffaf teklif. Sigorta dosyası varsa süreç hızlanır.",
    bullets: ["Lojistik planlama", "Ekspertiz", "Şeffaf teklif", "Hızlı ödeme"],
    faqs: [...defaultFaqs, ...serviceExtras("yanmis-arac-alan")],
  },
  {
    slug: "motor-arizali-arac-alan",
    title: "Motor Arızalı Araç Alan",
    short: "Motor arızalı/çalışmayan araçlarınızı değerinde satın alıyoruz.",
    desc:
      "Revizyon/arıza durumu şeffaf analiz edilir, çekici ücretsizdir. Aynı gün ödeme ile süreç tamamlanır.",
    bullets: ["Mekanik analiz", "Ücretsiz çekici", "Aynı gün ödeme", "Şeffaf süreç"],
    faqs: [...defaultFaqs, ...serviceExtras("motor-arizali-arac-alan")],
  },
  {
    slug: "cekme-belgeli-arac-alan",
    title: "Çekme Belgeli Araç Alan",
    short: "Çekme belgeli araçlarınızı mevzuata uygun şekilde satın alıyoruz.",
    desc:
      "Tescil ve ilgili kurum süreçlerinde yönlendirme, güvenli ödeme ve noter devri ile tamamlıyoruz.",
    bullets: ["Mevzuat uyumlu", "Noter devri", "Evrak desteği", "Hızlı süreç"],
    faqs: [...defaultFaqs, ...serviceExtras("cekme-belgeli-arac-alan")],
  },
];

// Access helpers
export const serviceSlugs = services.map((s) => s.slug);
export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
