import type { FaqItem } from "./faq";

/**
 * Long-form, UNIQUE content per service page. The master prompt forbids
 * duplicate/thin copy across service pages, so each service has its own
 * definition, conditions, who-it-suits and FAQ. Shared, genuinely-common
 * sections (what data is evaluated, required photos, useful documents) use
 * parameterized defaults to avoid keyword-stuffed duplication.
 *
 * This is seed content; the CMS owns it later.
 */
export interface ServiceContent {
  /** Value proposition shown under the H1. */
  heroLead: string;
  /** 1–2 paragraphs: what this vehicle category means. */
  definition: string[];
  /** Who the service suits. */
  whoFor: string[];
  /** Typical vehicle conditions for this category. */
  conditions: string[];
  /** Service-specific FAQ. */
  faqs: FaqItem[];
  /** Related service slugs. */
  related: string[];
}

export const DEFAULT_EVALUATED = [
  "Aracın markası, modeli ve yaşı",
  "Güncel kilometre ve kullanım yoğunluğu",
  "Hasarın yeri, türü ve büyüklüğü",
  "Motorun çalışma durumu",
  "Tramer kaydı ve belge eksikleri",
  "Orijinal olmayan veya eksik parçalar",
  "Akdeniz içindeki konumu (il/ilçe)",
];

export const DEFAULT_PHOTOS = [
  "Ön, arka ve iki yan cepheden genel kareler",
  "Hasarın yakın plan detay çekimleri",
  "Motor bölmesinin kaput açık fotoğrafı",
  "Gösterge panelinde kilometre görünür bir kare",
  "Ruhsatın ve şase numarasının net görüntüsü",
];

export const DEFAULT_DOCUMENTS = [
  "Araç tescil belgesi (ruhsat)",
  "Devir randevusunda kimlik",
  "Bakım ve ekspertiz raporları (elinizdeyse)",
  "Tramer dökümü veya çekme belgesi (varsa)",
];

const RELATED_FALLBACK = [
  "hasarli-arac-alimi",
  "kazali-arac-alimi",
  "pert-arac-alimi",
];

export const serviceContent: Record<string, ServiceContent> = {
  "hasarli-arac-alimi": {
    heroLead:
      "Park hâlinde alınan bir darbeden dolu göçüğüne kadar, hasarlı aracınız Akdeniz genelinde yerinden değerlendirilir.",
    definition: [
      "Hasarlı araç; kaza, darbe, doğal etken veya yoğun kullanım sonucu gövdesinde, mekanik aksamında ya da iç donanımında zarar oluşmuş aracı ifade eder. Akdeniz'de bu tabloya bölgeye özgü kalemler de eklenir: Antalya'da zaman zaman görülen dolu olaylarının bıraktığı kaporta göçükleri, kıyı şeridinde tuzlu havanın hızlandırdığı korozyon ve sert güneşin soldurduğu boya ile iç döşeme.",
      "Hasarın kaynağı ve seviyesi ne olursa olsun, paylaştığınız bilgi ve fotoğraflara göre gerçekçi bir değerlendirme yapılır. Onarımı ekonomik görünmeyen araçlar için de süreç birlikte planlanır; teklif almak sizi bağlamaz.",
    ],
    whoFor: [
      "Onarım maliyeti aracın değerine yaklaşan araç sahipleri",
      "Dolu hasarı sonrası kaportayı yaptırmak istemeyenler",
      "Sigorta sürecini beklemeden değerlendirme isteyenler",
      "Hasar kaydı bulunan aracını satmak isteyenler",
    ],
    conditions: [
      "Çarpma veya darbe sonucu gövde hasarı",
      "Dolu kaynaklı kaput, tavan ve kaporta göçükleri",
      "Boya solması ve kıyı kaynaklı yüzey korozyonu",
      "Cam, far veya stop hasarı",
      "Onarımı ekonomik görünmeyen, hasar kayıtlı araçlar",
    ],
    faqs: [
      {
        q: "Dolu hasarı kaskodan karşılanmadıysa aracımı satabilir miyim?",
        a: "Evet. Sigorta süreci nasıl sonuçlanmış olursa olsun, aracınızın mevcut durumu üzerinden değerlendirme talebi oluşturabilirsiniz.",
      },
      {
        q: "Hasar kaydı olan araç değer kaybeder mi?",
        a: "Hasar kaydı değerlemeyi etkileyebilir; ancak nihai değerlendirme aracın bütününe göre yapılır ve gerekçeleriyle açıklanır.",
      },
    ],
    related: ["kazali-arac-alimi", "agir-hasarli-arac-alimi", "pert-arac-alimi"],
  },

  "kazali-arac-alimi": {
    heroLead:
      "İster şehir içinde ister D-400'de olsun, kaza geçirmiş aracınız için hızlı ve şeffaf bir değerlendirme alın.",
    definition: [
      "Kazalı araç; trafik kazası sonucu ön, arka, yan veya birden fazla bölgede hasar almış aracı ifade eder. Akdeniz'de şehirler arası mesafelerin uzunluğu ve D-400 sahil yolundaki yoğun trafik, yüksek hızlı çarpışma hasarlarını; turizm sezonunda artan araç yoğunluğu ise şehir içi kazaları beraberinde getirir.",
      "Hava yastığı açılmış, şasisi deformasyona uğramış veya sürüş güvenliği etkilenmiş araçlar da bu kapsamdadır. Onarım yerine satışı tercih ediyorsanız, aracınız mevcut durumuyla değerlendirilir ve devir güvenle planlanır.",
    ],
    whoFor: [
      "Kaza sonrası onarım sürecine girmek istemeyenler",
      "Hava yastığı açılmış araç sahipleri",
      "Yüksek hızlı çarpışma sonrası ağır hasar oluşan araçlar",
      "Sigortayla anlaşamayan araç sahipleri",
    ],
    conditions: [
      "Ön veya arka çarpışma hasarı",
      "Yan darbe ve kapı hasarı",
      "Hava yastığı açılmış araçlar",
      "Şase / karoser deformasyonu",
      "Çoklu bölge hasarı",
    ],
    faqs: [
      {
        q: "Kaza şehir dışında oldu; araç otoparkta bekliyor. Ne yapmalıyım?",
        a: "Aracın bulunduğu konumu ve fotoğraflarını iletmeniz yeterli. Değerlendirme yerinden yapılır; taşıma seçenekleri konuma göre planlanır.",
      },
      {
        q: "Hava yastığı açılan aracı alıyor musunuz?",
        a: "Evet. Hava yastığı açılmış araçlar da değerlendirilir; durum fotoğraflarla netleştiğinde süreç hızlanır.",
      },
    ],
    related: ["hasarli-arac-alimi", "agir-hasarli-arac-alimi", "pert-arac-alimi"],
  },

  "pert-arac-alimi": {
    heroLead:
      "Pert kayıtlı veya pert olması muhtemel aracınız için belge durumuna uygun, planlı bir değerlendirme isteyin.",
    definition: [
      "Pert araç; onarım maliyetinin aracın piyasa değerine yaklaşması veya onu aşması nedeniyle ekonomik onarımı uygun görülmeyen araçtır. Sigorta tarafından pert (tam hasar) kaydı oluşturulan araçlar bu kapsamda değerlendirilir.",
      "Pert kayıtlı bir aracı satarken en kritik konu belge durumunun doğru ele alınmasıdır. Kaydın türüne göre devir adımları değişebilir; süreç Akdeniz genelinde, kayıt durumunuza göre şeffaf biçimde planlanır.",
    ],
    whoFor: [
      "Sigortaca pert işlemi yapılmış araç sahipleri",
      "Onarımı ekonomik olmayan araç sahipleri",
      "Pert belgeli aracını bekletmeden satmak isteyenler",
      "Hurdaya ayırmak yerine değerlendirmek isteyenler",
    ],
    conditions: [
      "Sigorta pert (tam hasar) kaydı bulunan araçlar",
      "Onarım maliyeti yüksek araçlar",
      "Ağır gövde ve mekanik hasar",
      "Pert belgeli araçlar",
      "Sel veya yangın sonrası pert işlemi görmüş araçlar",
    ],
    faqs: [
      {
        q: "Pert belgeli aracın devri nasıl yapılır?",
        a: "Pert kaydının türüne göre devir adımları değişebilir. Doğru ve resmi sürecin nasıl ilerleyeceği değerlendirme sırasında açıklanır.",
      },
      {
        q: "Pert aracın değeri neye göre belirlenir?",
        a: "Marka, model, hasarın kapsamı ve kullanılabilir parçalar birlikte ele alınır; gerekçeleri açıklanan gerçekçi bir değerlendirme yapılır.",
      },
    ],
    related: ["agir-hasarli-arac-alimi", "kazali-arac-alimi", "hurda-arac-alimi"],
  },

  "agir-hasarli-arac-alimi": {
    heroLead:
      "Sürülemeyecek durumdaki aracınız, Antalya'dan Hatay'a bulunduğu yerden değerlendirilir.",
    definition: [
      "Ağır hasarlı araç; gövdesinde, şasisinde veya ana mekanik aksamında ciddi zarar oluşmuş, çoğu zaman kendi gücüyle hareket edemeyen araçtır. Uzun şehirler arası yollarda yüksek hızda yaşanan kazalar, bu kategorideki hasarların başlıca kaynağıdır.",
      "Aracınız çekiciyle taşınması gereken durumda olsa bile başvuru oluşturabilirsiniz. Değerlendirme fotoğraflar üzerinden yapılır; taşıma ve teslim seçenekleri, aracın bulunduğu il ve ilçeye göre planlanır.",
    ],
    whoFor: [
      "Sürülemeyecek durumda ağır hasarlı araç sahipleri",
      "Şase / karoser hasarı olan araçlar",
      "Çoklu ve yaygın hasarlı araçlar",
      "Aracı otoparkta veya serviste bekleyenler",
    ],
    conditions: [
      "Yaygın gövde ve şase hasarı",
      "Sürülemeyen, hareket etmeyen araçlar",
      "Yüksek hızlı çarpışma sonucu büyük çaplı hasar",
      "Ana mekanik aksamı zarar görmüş araçlar",
      "Parça bütünlüğü bozulmuş araçlar",
    ],
    faqs: [
      {
        q: "Sürülemeyen aracımı nasıl teslim ederim?",
        a: "Taşıma seçenekleri, aracın bulunduğu konuma göre planlanır ve değerlendirme sırasında sizinle netleştirilir; aracı bir yere götürmeniz gerekmez.",
      },
    ],
    related: ["pert-arac-alimi", "kazali-arac-alimi", "calismayan-arac-alimi"],
  },

  "motor-arizali-arac-alimi": {
    heroLead:
      "Hararet mi yaptı, motor mu bitti? Aracınızı onarım masrafına girmeden değerlendirin.",
    definition: [
      "Motor arızalı araç; motor bloğu, silindir kapağı, turbo, enjeksiyon veya yağlama sistemi gibi ana bileşenlerde sorun bulunan araçtır. Akdeniz'in aşırı sıcak yazları bu tablonun bilinen bir nedenidir: Adana ve Mersin'de kırkı bulan sıcaklıklarda zorlanan soğutma sistemleri, hararet ve conta yanmasıyla sonuçlanabilir.",
      "Revizyon maliyeti çoğu zaman beklenenin üzerine çıkar. Onarım yerine satışı düşünüyorsanız, aracınız mevcut durumu ve arızanın kapsamı üzerinden gerçekçi biçimde değerlendirilir.",
    ],
    whoFor: [
      "Hararet veya conta yanması yaşayan araç sahipleri",
      "Yüksek motor revizyon maliyetiyle karşılaşanlar",
      "Motoru çalışmayan veya tutuk çalışan araçlar",
      "Onarım yerine satışı tercih edenler",
    ],
    conditions: [
      "Aşırı ısınma (hararet) ve soğutma sistemi arızası",
      "Çalışmayan veya zor çalışan motor",
      "Yağ kaçağı veya yağ yakma sorunu",
      "Turbo, enjeksiyon veya yağlama arızası",
      "Motor revizyonu gereken araçlar",
    ],
    faqs: [
      {
        q: "Sıcaktan hararet yapıp yolda kalan aracımı değerlendiriyor musunuz?",
        a: "Evet. Hararet sonrası çalışmayan veya güç kaybı yaşayan araçlar için de değerlendirme talebi oluşturabilirsiniz.",
      },
    ],
    related: ["mekanik-arizali-arac-alimi", "calismayan-arac-alimi", "hasarli-arac-alimi"],
  },

  "mekanik-arizali-arac-alimi": {
    heroLead:
      "Şanzımandan klimaya, onarımı ekonomik olmayan arızalı araçlar için değerlendirme alın.",
    definition: [
      "Mekanik arızalı araç; şanzıman, debriyaj, aktarma organları, fren, direksiyon veya elektronik sistemlerinde arıza bulunan araçtır. Sıcak iklimde elektronik aksam ve klima sistemi daha fazla zorlanır; birden fazla arızanın aynı araçta birikmesi bölgemizde az rastlanan bir durum değildir.",
      "Biriken arızaların onarım maliyeti aracın değerini aşmaya başladıysa, aracınız mevcut hâliyle değerlendirilir ve süreç sizi yormadan planlanır.",
    ],
    whoFor: [
      "Şanzıman veya aktarma arızası olan araç sahipleri",
      "Elektronik ve klima sorunları biriken araçlar",
      "Onarım maliyeti değerine yaklaşan araçlar",
      "Çoklu mekanik arızası bulunan araçlar",
    ],
    conditions: [
      "Şanzıman veya debriyaj arızası",
      "Aktarma organlarında sorun",
      "Fren veya direksiyon sistemi arızası",
      "Elektronik ve klima sistemi arızaları",
      "Çoklu mekanik sorun",
    ],
    faqs: [
      {
        q: "Birden fazla arızası olan aracı alıyor musunuz?",
        a: "Evet. Çoklu mekanik arızası olan araçlar da değerlendirilir; arızaları kısaca listelemeniz süreci hızlandırır.",
      },
    ],
    related: ["motor-arizali-arac-alimi", "calismayan-arac-alimi", "hasarli-arac-alimi"],
  },

  "calismayan-arac-alimi": {
    heroLead:
      "Marş almayan ya da aylardır park hâlinde bekleyen aracınız için teklif talebi oluşturun.",
    definition: [
      "Çalışmayan araç; motoru çalışmayan, marş almayan veya uzun süredir kullanılmadığı için hareket etmeyen araçtır. Bölgemizde yazlık konutlarda ve site otoparklarında sezonluk bekleyen araçlar az değildir; sıcakta yıpranan aküler ve kuruyan contalar, bu araçların bir daha çalışmamasının sık nedenlerindendir.",
      "Arızanın kaynağını bilmeseniz bile başvuru oluşturabilirsiniz. Araç yerinden değerlendirilir; gerekli durumlarda taşıma seçenekleri konuma göre planlanır.",
    ],
    whoFor: [
      "Marş almayan araç sahipleri",
      "Otoparkta veya bahçede uzun süredir bekleyen araçlar",
      "Hareket etmeyen araç sahipleri",
      "Arıza kaynağı belirsiz araçlar",
    ],
    conditions: [
      "Marş almayan araçlar",
      "Uzun süre kullanılmadığı için çalışmayan araçlar",
      "Akü / elektrik kaynaklı çalışmama",
      "Motor kaynaklı çalışmama",
      "Hareket etmeyen araçlar",
    ],
    faqs: [
      {
        q: "Aracımın neden çalışmadığını bilmiyorum, sorun olur mu?",
        a: "Olmaz. Arıza kaynağını bilmeseniz de değerlendirme talebi oluşturabilirsiniz; fotoğraflar ve kısa bir açıklama yeterlidir.",
      },
    ],
    related: ["motor-arizali-arac-alimi", "mekanik-arizali-arac-alimi", "agir-hasarli-arac-alimi"],
  },

  "yanmis-arac-alimi": {
    heroLead:
      "Kısmi veya tam yangın hasarı görmüş aracınız için değerlendirme talebi oluşturun.",
    definition: [
      "Yanmış araç; kısmi veya tam yangın sonucu gövdesi, iç donanımı veya motoru zarar görmüş araçtır. Kuru ve sıcak yaz aylarında elektrik tesisatı ile motor bölmesi kaynaklı araç yangınları bölgemizde de yaşanabilmektedir; yangının boyutuna göre aracın kullanılabilir parçaları değişir.",
      "Yanmış araçlarda belge ve kayıt durumu sürecin belirleyici parçasıdır. Değerlendirme, aracın mevcut hâli ve belgeleri üzerinden şeffaf biçimde planlanır.",
    ],
    whoFor: [
      "Kısmi veya tam yanmış araç sahipleri",
      "Yangın sonrası pert işlemi yapılmış araçlar",
      "Motor bölmesi yangını geçiren araçlar",
      "Yanmış aracını bekletmeden değerlendirmek isteyenler",
    ],
    conditions: [
      "Motor bölmesi yangını",
      "İç mekân / kabin yangını",
      "Kısmi yanmış araçlar",
      "Tam yanmış (kullanılamaz) araçlar",
      "Yangın sonrası pert kayıtlı araçlar",
    ],
    faqs: [
      {
        q: "Tamamen yanmış aracı da değerlendiriyor musunuz?",
        a: "Evet. Tam veya kısmi yanmış araçlar için değerlendirme talebi oluşturabilirsiniz; belge durumu süreçle birlikte netleştirilir.",
      },
    ],
    related: ["pert-arac-alimi", "hurda-arac-alimi", "agir-hasarli-arac-alimi"],
  },

  "sel-hasarli-arac-alimi": {
    heroLead:
      "Ani sağanakta su basan aracınızı bekletmeyin; su hasarı zamanla büyür, değerlendirme talebi ücretsizdir.",
    definition: [
      "Sel hasarlı araç; sel, su baskını veya yoğun su teması sonucu motoru, elektroniği veya iç donanımı zarar görmüş araçtır. Akdeniz'de bu gerçek bir bölgesel kategoridir: Mersin ve Antalya'da kısa sürede düşen şiddetli yağışlar alt geçitleri ve site otoparklarını doldurabilir, dakikalar içinde araçlar suyla temas edebilir.",
      "Su hasarının sinsi yanı, etkilerinin zamanla ortaya çıkmasıdır; nem, korozyon ve elektronik arızalar haftalar sonra baş gösterebilir. Bu nedenle değerlendirme, aracın mevcut durumu kadar olası etkiler de göz önünde tutularak yapılır.",
    ],
    whoFor: [
      "Sel veya su baskınından etkilenen araç sahipleri",
      "Alt geçit veya otoparkta aracı su alan sürücüler",
      "Elektroniği su nedeniyle arızalanan araçlar",
      "Su hasarı sonrası pert işlemi yapılmış araçlar",
    ],
    conditions: [
      "İç mekân ve döşeme su hasarı",
      "Elektronik sistem arızaları",
      "Motor / şanzımana su girmesi",
      "Nem ve korozyon oluşmuş araçlar",
      "Su baskını sonrası çalışmayan araçlar",
    ],
    faqs: [
      {
        q: "Araç su bastıktan sonra çalıştı; yine de satmalı mıyım?",
        a: "Karar sizindir; ancak su hasarı sonradan elektronik ve mekanik sorunlara yol açabilir. Değerlendirme talebi oluşturmak ücretsizdir ve sizi bağlamaz.",
      },
      {
        q: "Selde kalan aracın sigorta süreci bitmeden başvurabilir miyim?",
        a: "Evet. Değerlendirme talebi sigorta sürecinden bağımsızdır; belge durumunuza göre adımlar birlikte planlanır.",
      },
    ],
    related: ["pert-arac-alimi", "motor-arizali-arac-alimi", "hasarli-arac-alimi"],
  },

  "hurda-arac-alimi": {
    heroLead:
      "Ekonomik ömrünü doldurmuş aracınız için belgeli ve şeffaf bir süreç planlayın.",
    definition: [
      "Hurda araç; ekonomik ömrünü tamamlamış, onarımı mümkün veya mantıklı olmayan, çoğunlukla parça ve metal değeriyle ele alınan araçtır. Kıyı şeridinde tuzlu havanın hızlandırdığı korozyon, bölgemizde araçların hurda sınıfına daha erken girmesine neden olabilir.",
      "Hurdaya ayırma ve trafikten çıkış işlemleri belgeli şekilde yürütülmesi gereken resmi adımlardır. Aracınızın belge durumuna göre doğru sıralama, değerlendirme sırasında açıkça anlatılır.",
    ],
    whoFor: [
      "Ekonomik ömrünü tamamlamış araç sahipleri",
      "Ağır korozyona uğramış araçlar",
      "Uzun süredir atıl bekleyen araçlar",
      "Hurdaya ayırmak isteyen araç sahipleri",
    ],
    conditions: [
      "Çok eski ve yıpranmış araçlar",
      "Onarımı ekonomik olmayan araçlar",
      "Tuzlu hava kaynaklı ağır korozyon / paslanma",
      "Parçalanmış veya eksik araçlar",
      "Atıl durumda bekleyen araçlar",
    ],
    faqs: [
      {
        q: "Hurda aracın trafikten çıkışı yapılıyor mu?",
        a: "Hurda ve trafikten çıkış işlemlerinin resmi süreci, aracın durumuna ve belgelerine göre değerlendirme sırasında açıklanır.",
      },
    ],
    related: ["pert-arac-alimi", "cekme-belgeli-arac-alimi", "yanmis-arac-alimi"],
  },

  "cekme-belgeli-arac-alimi": {
    heroLead:
      "Çekme belgeli veya trafikten çekilmiş aracınız için belge durumuna uygun bir teklif isteyin.",
    definition: [
      "Çekme belgeli araç; trafikten çekilmiş ve çekme belgesi düzenlenmiş, normal şartlarda trafiğe çıkışı uygun olmayan araçtır. Bu araçlar genellikle ağır hasarlı, arızalı veya uzun süre kullanılmayacağı için trafikten çekilmiş araçlardır.",
      "Çekme belgeli araçlarda devir, standart satıştan farklı adımlar içerir ve belge durumuna göre özel olarak ele alınır. Akdeniz genelinde başvuru kabul edilir; taşıma gereksinimi konuma göre planlanır.",
    ],
    whoFor: [
      "Çekme belgeli araç sahipleri",
      "Trafikten çekilmiş araçlar",
      "Kaydı kapatılmış araç sahipleri",
      "Çekme belgeli aracını değerlendirmek isteyenler",
    ],
    conditions: [
      "Çekme belgesi düzenlenmiş araçlar",
      "Trafikten çekilmiş araçlar",
      "Ağır hasarlı çekme belgeli araçlar",
      "Uzun süredir kullanılmayan çekme belgeli araçlar",
      "Belge / kayıt durumu özel araçlar",
    ],
    faqs: [
      {
        q: "Çekme belgeli aracın devri nasıl yapılır?",
        a: "Devir adımları belge durumuna göre değişir. Doğru ve resmi sürecin nasıl ilerleyeceği değerlendirme sırasında size açıklanır.",
      },
    ],
    related: ["hurda-arac-alimi", "pert-arac-alimi", "agir-hasarli-arac-alimi"],
  },
};

export function getServiceContent(slug: string): ServiceContent {
  return (
    serviceContent[slug] ?? {
      heroLead: "Aracınız için değerlendirme talebi oluşturun.",
      definition: [],
      whoFor: [],
      conditions: [],
      faqs: [],
      related: RELATED_FALLBACK,
    }
  );
}
