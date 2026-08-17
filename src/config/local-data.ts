/**
 * Hand-written unique local content per city and district (master prompt:
 * a location page is published only with unique approved content). Replaces
 * the old single-template metadata in lib/seo/local-copy so no two location
 * pages — here or on any sister site — share a meta description or paragraph.
 */

export interface CityContent {
  citySlug: string;
  /** SEO <title> without brand (layout template appends " | <brand>"). */
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  /** Hero lead paragraph. */
  intro: string;
  /** Two unique on-page paragraphs about buying cars in this city. */
  about: string[];
  /** Local logistics bullets specific to this city. */
  localPoints: string[];
  faqs: { q: string; a: string }[];
  /** Hero image index (1–7) so city pages don't all share one image. */
  heroImage: number;
  heroAlt: string;
}

export interface DistrictContent {
  districtSlug: string;
  citySlug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  lead: string;
  /** Two unique paragraphs about this district. */
  body: string[];
  points: string[];
  faqs: { q: string; a: string }[];
}

export const cityContent: CityContent[] = [
  {
    citySlug: "antalya",
    metaTitle: "Antalya Hasarlı Araç Alan — Kazalı ve Pert Araç Alımı",
    metaDescription:
      "Antalya'nın 19 ilçesinde hasarlı, kazalı, pert ve hurda araç alımı. Ücretsiz çekici, 30 dakikada ön değerlendirme, aynı gün nakit ödeme imkânı.",
    heroTitle: "Antalya'da Hasarlı Aracınıza Aynı Gün Nakit Teklif",
    intro:
      "Turizmin başkenti Antalya'da araç sayısı her yıl rekor kırıyor; kazalı, arızalı veya elden çıkarılacak aracınız Kepez'den Alanya'ya kadar nerede olursa olsun ücretsiz çekici ile yerinden alınır.",
    about: [
      "Antalya'nın araç profili Türkiye'nin geri kalanından farklı işler: kiralama sektöründen çıkan yüksek kilometreli otomobiller, yeni yerleşenlerin getirdiği plakası yeni değişmiş araçlar ve D400 sahil yolunun yoğun trafiğinde hasar almış araçlar başvuruların büyük kısmını oluşturur. Ekibimiz bu üç grubun piyasa dinamiklerini yakından bilir ve teklifini buna göre verir.",
      "Yazın 45 dereceyi bulan sıcaklık; lastik, soğutma sistemi ve klima kompresörü arızalarını Antalya'da olağan hâle getirir. Motoru ısınan, yolda kalan veya uzun süre site otoparkında bekleyen araçlar için çekici tarafımızdan ücretsiz gönderilir; ödeme noter devriyle aynı anda nakit yapılır.",
    ],
    localPoints: [
      "19 ilçenin tamamına ücretsiz çekici",
      "Kiralama filosu çıkışlarına toplu teklif",
      "30 dakikada fotoğrafla ön değerlendirme",
      "Devirle eş zamanlı nakit ödeme",
    ],
    faqs: [
      {
        q: "Antalya'da hasarlı aracımı en hızlı nasıl satarım?",
        a: "Aracın fotoğraflarını WhatsApp'tan gönderin; ortalama 30 dakika içinde ön değerlendirme yapılır. Teklifi kabul ederseniz çekici ücretsiz gelir, devir noterde tamamlanır ve ödemenizi aynı gün nakit alırsınız.",
      },
      {
        q: "Alanya veya Manavgat gibi uzak ilçelerden de araç alıyor musunuz?",
        a: "Evet. Alanya, Manavgat, Gazipaşa ve Kaş dahil Antalya'nın tüm ilçelerinden alım yapıyoruz. Uzak ilçelerde çekici ve devir randevusu aynı güne planlanacak şekilde koordine edilir.",
      },
      {
        q: "Kiralama şirketiyim, filodan çıkan araçları satabilir miyim?",
        a: "Satabilirsiniz. Sezon sonu filo yenilemelerinde araç başına ayrı teklif verilir, devirler tek takvimde toplanır ve ödeme şirket hesabınıza devir günü yapılır.",
      },
    ],
    heroImage: 1,
    heroAlt: "Antalya D400 sahil yolunda önü hasarlı bir otomobil",
  },
  {
    citySlug: "adana",
    metaTitle: "Adana Hasarlı ve Kazalı Araç Alımı — Sel Hasarlı Dahil",
    metaDescription:
      "Adana'da hasarlı, kazalı, pert ve sel hasarlı araç alımı. Aşırı sıcak kaynaklı motor arızaları dahil ücretsiz çekici ve aynı gün nakit ödeme.",
    heroTitle: "Adana'da Her Durumdaki Araç Nakit Alınır",
    intro:
      "Çukurova'nın merkezi Adana'da kaza hasarından sel basmış araçlara kadar her durumu değerlendiriyor, aracı bulunduğu yerden ücretsiz çekici ile alıyoruz.",
    about: [
      "Adana'da iki hasar türü öne çıkar: yazın 40 dereceyi aşan sıcakların tetiklediği motor ve şanzıman arızaları ile kış aylarındaki ani sağanaklarda su basan araçlar. Sel hasarlı araç değerlendirmesi ayrı bir uzmanlık ister; elektronik aksamın durumu yerinde incelenir ve gerçekçi bir nakit teklif sunulur.",
      "TAG otoyolu ile E-90'ın kesiştiği Adana, ağır ticari trafiğin de merkezi. Çukurova tarımında çalışan pikaplar, nakliye kamyonetleri ve şehir içi kazalarda hasar almış otomobiller için Seyhan'dan Ceyhan'a kadar tüm ilçelerde aynı gün çekici planlaması yapıyoruz.",
    ],
    localPoints: [
      "Sel ve su hasarlı araçlarda uzman değerlendirme",
      "Sıcaklık kaynaklı motor arızalarına gerçekçi teklif",
      "Tarım ve nakliye araçları alımı",
      "Tüm ilçelere aynı gün ücretsiz çekici",
    ],
    faqs: [
      {
        q: "Adana'da su basan aracımı alır mısınız?",
        a: "Alırız. Sel hasarlı araçlarda elektronik ve motor durumuna göre değerleme yapılır; araç çalışmasa bile çekici ücretsiz gönderilir. Sigorta süreci devam eden araçlarda evrak durumuna göre yol haritası birlikte çizilir.",
      },
      {
        q: "Aracım aşırı sıcaktan motor arızası yaptı, değeri çok düşer mi?",
        a: "Motor arızası değeri etkiler ama aracı değersiz kılmaz. Gövde, kilometre ve parça durumu üzerinden nakit teklif verilir; kabul ederseniz ödeme devir günü eksiksiz yapılır.",
      },
      {
        q: "Ceyhan'dan veya Kozan'dan başvuru yapabilir miyim?",
        a: "Evet. Adana'nın 15 ilçesinin tamamından başvuru alıyoruz; merkez dışı ilçelerde çekici ve noter randevusu tek seferde planlanır.",
      },
    ],
    heroImage: 2,
    heroAlt: "Adana'da sel sonrası hasar görmüş bir otomobil",
  },
  {
    citySlug: "mersin",
    metaTitle: "Mersin Hasarlı Araç Alımı — Kazalı, Pert ve Ticari Araçlar",
    metaDescription:
      "Mersin ve Tarsus'ta hasarlı, kazalı, pert ve ticari araç alımı. Liman lojistiğinin kamyonetleri dahil ücretsiz çekici, aynı gün nakit ödeme.",
    heroTitle: "Mersin'de Hasarlı ve Ticari Araç Alımı",
    intro:
      "Türkiye'nin en büyük limanlarından birine sahip Mersin'de lojistik sektörünün yıpranan ticari araçlarından sahil trafiğinin kazalı otomobillerine kadar her aracı nakit alıyoruz.",
    about: [
      "Mersin Limanı çevresindeki lojistik ve depoculuk faaliyeti, şehirde yoğun bir ticari araç parkı yaratır. Yüksek tonaj ve sürekli kullanımla yıpranan panelvan ve kamyonetler için işletme kapısından alım yapıyor, birden fazla araçta filo indirimi yerine araç başına en yüksek teklifi veriyoruz.",
      "Sahil kesiminde nemli havanın hızlandırdığı korozyon ve Mersin–Adana otoyolundaki yüksek hız kazaları, bireysel başvuruların ana nedenleridir. Erdemli, Silifke ve Anamur gibi batı ilçeleri dahil tüm sahil hattına çekici planlıyoruz; ödeme her durumda devirle eş zamanlı ve nakittir.",
    ],
    localPoints: [
      "Liman lojistiği ticari araçlarına özel alım",
      "Batı sahili ilçelerine çekici organizasyonu",
      "Korozyon ve tuzlu hava etkisinde şeffaf değerleme",
      "Otoyol kazalarında otoparktan teslim alma",
    ],
    faqs: [
      {
        q: "Mersin'de nakliye firmamızın eski araçlarını nasıl satarız?",
        a: "Araç listenizi ve fotoğrafları iletmeniz yeterli; her araca ayrı nakit teklif verilir. Devirler tek noter randevusunda toplanabilir, ödemeler devir anında şirket hesabına yapılır.",
      },
      {
        q: "Anamur'dayım, Mersin merkeze uzağım; yine de gelir misiniz?",
        a: "Geliriz. Anamur, Bozyazı ve Aydıncık dahil en batıdaki ilçelere de çekici gönderiyoruz; randevu, yol süresi dikkate alınarak sizinle birlikte planlanır.",
      },
      {
        q: "Otoyolda kaza yaptım, aracım Mersin'de otoparkta bekliyor; ne yapmalıyım?",
        a: "Fotoğraf ve ruhsat bilgisiyle başvurun; teklif kabul edilirse aracı otoparktan biz teslim alırız, otopark borcu hesaplaşması devirde şeffaf biçimde yapılır.",
      },
    ],
    heroImage: 3,
    heroAlt: "Mersin limanı yakınında hasarlı bir panelvan",
  },
  {
    citySlug: "hatay",
    metaTitle: "Hatay Hasarlı Araç Alan — Antakya ve İskenderun Dahil",
    metaDescription:
      "Hatay, Antakya, İskenderun ve Dörtyol'da hasarlı, kazalı ve pert araç alımı. Ücretsiz çekici ile yerinden alım, noter devrinde nakit ödeme.",
    heroTitle: "Hatay'da Hasarlı Araç Alımı",
    intro:
      "Antakya'dan İskenderun'a yeniden ayağa kalkan Hatay'da, her durumdaki aracınız için hızlı ve saygılı bir satış süreci sunuyoruz.",
    about: [
      "Hatay'ın araç piyasası son yıllarda kendine özgü bir seyir izliyor: şehirde araç parkı hızla yenilenirken, uzun süre kullanılmayan, hasarlı kalmış ya da sahibi şehirden ayrılmış araçların satışı için pratik çözüm ihtiyacı arttı. Şehir dışında yaşayan Hataylılar için uzaktan başvuru ve tek ziyaretli devir sürecini standart hâle getirdik.",
      "İskenderun'daki demir-çelik sanayisi ve liman trafiği ticari araç başvurularını, körfezin nemli havası ise korozyon değerlendirmelerini bölgeye özgü kılar. Antakya, Defne, Samandağ, Dörtyol ve Payas dahil tüm ilçelerde ücretsiz çekici ile aracın bulunduğu noktadan alım yapıyoruz.",
    ],
    localPoints: [
      "Şehir dışındaki araç sahipleri için uzaktan süreç",
      "Uzun süre bekleyen araçlara çekici çözümü",
      "İskenderun sanayi araçları değerlendirmesi",
      "Tüm ilçelerde noter devrinde nakit ödeme",
    ],
    faqs: [
      {
        q: "Hatay dışında yaşıyorum, oradaki aracımı nasıl satarım?",
        a: "Fotoğraf ve evrak bilgileriyle uzaktan başvurursunuz; teklif netleştikten sonra devir için tek bir ziyaret yeterlidir. Talep ederseniz vekâletle sizin gelmenize gerek kalmadan da süreç tamamlanabilir.",
      },
      {
        q: "Uzun süredir çalışmayan bir araç için çekici ücreti alıyor musunuz?",
        a: "Hayır. Teklifi kabul ettiğiniz her araçta çekici tarafımızdan ücretsiz sağlanır; aracın çalışıp çalışmaması ücreti değiştirmez.",
      },
      {
        q: "İskenderun'daki işletmemizin kamyonetlerini de alır mısınız?",
        a: "Alırız. Sanayi ve liman çevresindeki işletmelerden tek seferde birden fazla araç için başvuru kabul ediyor, devirleri tek randevuda topluyoruz.",
      },
    ],
    heroImage: 4,
    heroAlt: "Hatay'da bir cadde kenarında bekleyen hasarlı otomobil",
  },
  {
    citySlug: "osmaniye",
    metaTitle: "Osmaniye Hasarlı ve Kazalı Araç Alımı — Nakit Ödeme",
    metaDescription:
      "Osmaniye'de hasarlı, kazalı, arızalı ve hurda araç alımı. TAG otoyolu kazaları dahil ücretsiz çekici, 30 dakikada değerlendirme, nakit ödeme.",
    heroTitle: "Osmaniye'de Hasarlı Araç Nakit Alınır",
    intro:
      "TAG otoyolunun tam üzerindeki Osmaniye'de uzun yol kazalarından tarım araçlarına kadar her durumu hızla değerlendiriyoruz.",
    about: [
      "Osmaniye, Adana–Gaziantep otoyolunun ortasında yer aldığından şehirler arası trafiğin kazaları bölgedeki başvuruların önemli kısmını oluşturur. Otoyolda kaza yapıp aracı Osmaniye'de kalan şehir dışı sürücüler için otoparktan teslim alma ve uzaktan devir bizim en sık yürüttüğümüz süreçtir.",
      "İl genelinde yer fıstığı tarımında çalışan pikaplar ve küçük işletmelerin ticari araçları da düzenli başvuru gruplarındandır. Kadirli, Düziçi ve Bahçe dahil tüm ilçelerden başvuru alıyor, çekiciyi ücretsiz gönderiyor ve ödemeyi devir anında nakit yapıyoruz.",
    ],
    localPoints: [
      "TAG otoyolu kazalarına hızlı müdahale",
      "Şehir dışı sürücüler için uzaktan devir",
      "Tarım araçları için köyden alım",
      "30 dakikada fotoğrafla ön değerlendirme",
    ],
    faqs: [
      {
        q: "Otoyolda kaza yaptım, Osmaniye'de aracı bırakıp gittim; satışı uzaktan yapabilir miyim?",
        a: "Yapabilirsiniz. Fotoğraflarla teklif netleşir, aracın otoparktan teslim alınması bize aittir; devir işlemini memleketinizdeki noterden vekâlet yoluyla veya tek günlük bir ziyaretle tamamlarsınız.",
      },
      {
        q: "Osmaniye'de değerlendirme gerçekten 30 dakikada oluyor mu?",
        a: "Fotoğraflar ve araç bilgisi eksiksiz geldiğinde ön değerlendirme çoğunlukla 30 dakika içinde iletilir. Kesin teklif, araç yerinde görüldükten sonra aynı gün netleşir.",
      },
      {
        q: "Kadirli'den hurda belgeli bir araç için başvurabilir miyim?",
        a: "Evet. Hurda ve çekme belgeli araçlar dahil tüm ilçelerden başvuru alıyoruz; belge durumuna göre süreç adım adım sizinle paylaşılır.",
      },
    ],
    heroImage: 5,
    heroAlt: "Osmaniye otoyol kenarında hasarlı bir araç",
  },
  {
    citySlug: "kahramanmaras",
    metaTitle: "Kahramanmaraş Hasarlı Araç Alımı — Kazalı ve Arızalı",
    metaDescription:
      "Kahramanmaraş'ta hasarlı, kazalı, arızalı ve hurda araç alımı. Sanayi araçları dahil ücretsiz çekici ile yerinden alım ve nakit ödeme.",
    heroTitle: "Kahramanmaraş'ta Hasarlı Araç Alımı",
    intro:
      "Sanayisiyle büyüyen, araç parkı hızla yenilenen Kahramanmaraş'ta her durumdaki aracınızı yerinden alıyor, ödemeyi devirde nakit yapıyoruz.",
    about: [
      "Tekstil ve mutfak eşyası sanayisinin merkezi Kahramanmaraş'ta işletmelerin servis ve yük araçları yoğun mesai yapar; yüksek kilometre ve ağır kullanım kaynaklı arızalı ticari araçlar başvuruların önemli bölümünü oluşturur. İşletme adresinden alım ve tek randevuda toplu devir bu şehirde standart hizmetimizdir.",
      "Şehrin yüksek kesimlerinde kış koşulları sert geçer; buzlanma kazaları ve soğukta yatan araçların motor sorunları bireysel başvuruların tipik nedenleridir. Elbistan ve Afşin dahil kuzey ilçelerinden gelen taleplerde çekici ve randevu planlaması yol koşullarına göre yapılır.",
    ],
    localPoints: [
      "Sanayi işletmelerinden toplu araç alımı",
      "Elbistan ve Afşin'e çekici planlaması",
      "Kış hasarı ve buzlanma kazası değerlendirmesi",
      "Devir günü eksiksiz nakit ödeme",
    ],
    faqs: [
      {
        q: "Kahramanmaraş'ta işletmemin üç servis aracını birden satabilir miyim?",
        a: "Evet. Araç başına ayrı nakit teklif verilir, kabul ettikleriniz için devir tek noter randevusunda toplanır ve ödemeler devir anında yapılır.",
      },
      {
        q: "Elbistan'dan başvuru yapsam çekici ücreti öder miyim?",
        a: "Ödemezsiniz. Teklif kabul edilen her araçta çekici ücretsizdir; Elbistan ve Afşin gibi uzak ilçelerde yalnızca randevu takvimi yol durumuna göre birlikte belirlenir.",
      },
      {
        q: "Buzlanmada kaza yapan aracımın tramer kaydı yükseldi, satabilir miyim?",
        a: "Satabilirsiniz. Tramer tutarı tek başına belirleyici değildir; teklif aracın bugünkü fiili durumuna göre verilir ve sizi hiçbir şekilde bağlamaz.",
      },
    ],
    heroImage: 6,
    heroAlt: "Kahramanmaraş'ta karlı yolda hasar almış bir otomobil",
  },
  {
    citySlug: "isparta",
    metaTitle: "Isparta Hasarlı Araç Alan — Kazalı ve Çalışmayan Araçlar",
    metaDescription:
      "Isparta'da hasarlı, kazalı ve çalışmayan araç alımı. Göller Bölgesi'nin virajlı yollarında hasar alan araçlar dahil ücretsiz çekici ve nakit ödeme.",
    heroTitle: "Isparta'da Hasarlı Araç Alımı",
    intro:
      "Göller Bölgesi'nin merkezi Isparta'da öğrenci araçlarından tarım pikaplarına kadar her durumu değerlendiriyor, aracı yerinden ücretsiz alıyoruz.",
    about: [
      "Isparta'nın rakımı ve Göller Bölgesi'nin virajlı dağ yolları, özellikle kış aylarında kaza kaynaklı başvuruları artırır. Eğirdir ve Yalvaç yönündeki geçitlerde hasar alan araçlar için çekici organizasyonu deneyimimiz güçlüdür; araç nerede kaldıysa oradan alınır.",
      "Üniversite şehri olması nedeniyle Isparta'da el değiştirme hızı yüksek, bütçe segmentindeki araç sayısı fazladır; gül ve lavanta tarımında çalışan pikaplar da düzenli başvuru grubudur. Değeri ne olursa olsun her araç için aynı şeffaf süreç işler: fotoğrafla hızlı değerlendirme, ücretsiz çekici ve devirde nakit ödeme.",
    ],
    localPoints: [
      "Dağ yolu kazalarına çekici organizasyonu",
      "Öğrenci ve bütçe segmenti araçlarına tam süreç",
      "Tarım pikaplarının köyden alımı",
      "Eğirdir ve Yalvaç dahil tüm ilçeler",
    ],
    faqs: [
      {
        q: "Isparta'da düşük değerli eski bir araç için de çekici gönderir misiniz?",
        a: "Göndeririz. Aracın değeri çekici hizmetini etkilemez; teklif kabul edildiğinde alım her araçta aynı şekilde ücretsiz yapılır.",
      },
      {
        q: "Eğirdir yolunda kaza yaptım, aracım dağda kaldı; alabilir misiniz?",
        a: "Alabiliriz. Yol ve arazi koşullarına uygun çekici planlanır; aracın bulunduğu nokta için konum paylaşmanız yeterlidir.",
      },
      {
        q: "Öğrenciyim, ruhsat babamın üzerine; satış nasıl olur?",
        a: "Ruhsat sahibinin devirde bulunması ya da noterden vekâlet vermesi gerekir. Evrak sürecini başvuru sırasında adım adım anlatıyor, randevuyu buna göre planlıyoruz.",
      },
    ],
    heroImage: 7,
    heroAlt: "Isparta dağ yolunda hasarlı bir otomobil",
  },
  {
    citySlug: "burdur",
    metaTitle: "Burdur Hasarlı ve Kazalı Araç Alımı — Hızlı Nakit Süreç",
    metaDescription:
      "Burdur'da hasarlı, kazalı, arızalı ve hurda araç alımı. Bucak dahil tüm ilçelerde ücretsiz çekici, hızlı değerlendirme ve devirde nakit ödeme.",
    heroTitle: "Burdur'da Hasarlı Araç Alımı",
    intro:
      "Antalya yolunun üzerindeki Burdur'da geçiş trafiği kazalarından mermer sahasının yorgun araçlarına kadar her durumu nakit değerlendiriyoruz.",
    about: [
      "Burdur, Antalya'ya inen ana aksın üzerinde yer alır; özellikle tatil dönemlerinde yoğunlaşan geçiş trafiği, Bucak çevresinde kaza kaynaklı başvuruları artırır. Şehir dışından geçerken kaza yapan sürücülerin araçları için otoparktan alım ve uzaktan devir planlaması yapıyoruz.",
      "İlin mermer ocaklarında ve tarımında çalışan pikap ile kamyonetler, ağır yük altında hızla yıpranır; motor ve şanzıman arızalı bu araçlara parça ve ekonomik değeri üzerinden gerçekçi teklif veriyoruz. Küçük bir il olması işimizi hızlandırır: Burdur'da değerlendirmeden devire süreç çoğu zaman tek güne sığar.",
    ],
    localPoints: [
      "Antalya aksı kazalarına hızlı çözüm",
      "Mermer ve tarım araçları değerlendirmesi",
      "Çoğu başvuruda tek günde devir imkânı",
      "Bucak dahil tüm ilçelere ücretsiz çekici",
    ],
    faqs: [
      {
        q: "Burdur'da süreç gerçekten tek günde biter mi?",
        a: "Evraklar hazırsa çoğu zaman evet: sabah gelen fotoğraflara öğlene kadar teklif verilir, öğleden sonra araç yerinde görülür ve aynı gün noter randevusuyla devir ve nakit ödeme tamamlanabilir.",
      },
      {
        q: "Bucak'ta kaza yapan aracım otoparkta; şehir dışından süreci yürütebilir miyim?",
        a: "Yürütebilirsiniz. Teklif uzaktan netleşir, aracı otoparktan biz teslim alırız; devir için tek ziyaret ya da vekâlet yeterlidir.",
      },
      {
        q: "Mermer ocağında çalışmış eski kamyonetin değeri olur mu?",
        a: "Olur. Ağır işte yıpranmış araçlarda şasi ve gövde esas alınır; çalışmayan araçlar için bile parça değeri üzerinden nakit teklif sunulur.",
      },
    ],
    heroImage: 1,
    heroAlt: "Burdur karayolunda çekici bekleyen kazalı araç",
  },
  {
    citySlug: "gaziantep",
    metaTitle: "Gaziantep Hasarlı Araç Alan — Ticari ve Kazalı Araç Alımı",
    metaDescription:
      "Gaziantep'te hasarlı, kazalı, pert ve ticari araç alımı. Sanayinin yoğun araç parkı dahil ücretsiz çekici, hızlı değerlendirme, nakit ödeme.",
    heroTitle: "Gaziantep'te Hasarlı ve Ticari Araç Alımı",
    intro:
      "Güneydoğu'nun sanayi devi Gaziantep'te işletme filolarından bireysel araçlara kadar her durumdaki aracı nakit alıyoruz.",
    about: [
      "Gaziantep, organize sanayi bölgeleriyle Türkiye'nin en yoğun ticari araç trafiğine sahip şehirlerinden biridir. Üretim ve ihracat tempoundaki işletmelerin yüksek kilometreli panelvan, kamyonet ve servis araçları başvuruların ana grubudur; işletmenin kapısından alım yapıyor, devir ve ödemeyi tek günde topluyoruz.",
      "TAG otoyolu üzerindeki konumu şehirler arası kaza başvurularını, geniş ikinci el pazarı ise pert ve tramer kayıtlı araç hareketliliğini artırır. Nizip ve İslahiye dahil ilçelerden gelen bireysel başvurularda da süreç aynıdır: fotoğrafla hızlı ön değerlendirme, ücretsiz çekici ve noterde nakit ödeme.",
    ],
    localPoints: [
      "OSB işletmelerine yerinde filo değerlendirmesi",
      "Pert ve yüksek tramer kayıtlı araç alımı",
      "Nizip ve İslahiye dahil tüm ilçeler",
      "Devir ve ödemenin tek günde tamamlanması",
    ],
    faqs: [
      {
        q: "Gaziantep'te fabrikamızın servis araçlarını topluca satmak istiyoruz, süreç nasıl?",
        a: "Araç listesi ve fotoğraflarla başvurursunuz; her araca ayrı teklif verilir. Kabul edilen araçların devri tek noter randevusunda yapılır, ödemeler devir anında şirket hesabına geçer.",
      },
      {
        q: "Tramer kaydı 200 bin TL'yi aşan aracımı alır mısınız?",
        a: "Alırız. Kayıt tutarından bağımsız olarak aracın bugünkü durumu değerlendirilir; pert kayıtlı araçlar en sık çalıştığımız gruptadır.",
      },
      {
        q: "Nizip'ten başvursam çekici ne zaman gelir?",
        a: "Teklif kabulünden sonra çekici genellikle aynı gün veya ertesi gün planlanır; saat, sizin uygunluğunuza göre netleştirilir ve ücret alınmaz.",
      },
    ],
    heroImage: 2,
    heroAlt: "Gaziantep organize sanayi bölgesinde hasarlı bir panelvan",
  },
];

export const districtContent: DistrictContent[] = [
  // Antalya
  {
    districtSlug: "kepez",
    citySlug: "antalya",
    metaTitle: "Kepez Hasarlı Araç Alan — Antalya Kepez Araç Alımı",
    metaDescription:
      "Antalya'nın en kalabalık ilçesi Kepez'de hasarlı, kazalı ve arızalı araç alımı. Sanayi sitesi çevresinden ücretsiz çekici, aynı gün nakit ödeme.",
    heroTitle: "Kepez'de Hasarlı Aracınız Yerinden Alınır",
    lead: "Antalya'nın en kalabalık ilçesi Kepez'de sanayi sitelerinden konut mahallelerine kadar her noktadan hasarlı araç alıyoruz.",
    body: [
      "Yarım milyonu aşan nüfusuyla Kepez, Antalya'daki başvuruların en yoğun geldiği ilçedir. Yeni oto sanayi sitesine yakınlığımız, ekspertiz ve yerinde görüş randevularının çoğunlukla aynı gün verilmesini sağlar; tamiri masraflı çıkan araçların servis kapısından alınması bu bölgede sık yürüttüğümüz bir süreçtir.",
      "İlçenin yoğun konut dokusunda site otoparklarında bekleyen, akü ve mekanik sorunlar yaşayan araçlar da tipik başvurulardandır. Çekici Kepez'in her mahallesine ücretsiz gelir; devir, size en yakın noterde aynı gün tamamlanabilir.",
    ],
    points: [
      "Oto sanayi çevresinde aynı gün ekspertiz",
      "Servis kapısından araç alımı",
      "Site otoparklarından ücretsiz çekici",
      "Aynı gün noter ve nakit ödeme imkânı",
    ],
    faqs: [
      {
        q: "Kepez'de tamircide duran aracımı oradan alır mısınız?",
        a: "Alırız. Tamir masrafı araç değerini aşan araçların servisten teslim alınması en sık yaptığımız işlemlerdendir; usta ile hesaplaşmanız sonrası çekici ücretsiz gelir.",
      },
      {
        q: "Kepez'den başvursam teklif ne kadar sürede gelir?",
        a: "Fotoğraflar geldikten sonra ön değerlendirme genellikle 30 dakika içinde iletilir; yerinde görüş çoğunlukla aynı gün planlanır.",
      },
    ],
  },
  {
    districtSlug: "konyaalti",
    citySlug: "antalya",
    metaTitle: "Konyaaltı Hasarlı Araç Alımı — Sahil Bölgesi Araç Alan",
    metaDescription:
      "Konyaaltı'nda hasarlı, kazalı ve az kullanılmış araç alımı. Sahil neminin etkilediği ve site otoparklarında bekleyen araçlara nakit teklif.",
    heroTitle: "Konyaaltı'nda Hasarlı Araç Alımı",
    lead: "Sahil şeridinin sitelerinden Boğaçayı'na kadar Konyaaltı'nın her noktasında araç değerlendirme ve yerinden alım hizmeti veriyoruz.",
    body: [
      "Konyaaltı'nın araç profili sahil yaşamını yansıtır: az kullanılan ikinci araçlar, uzun süre kapalı otoparkta bekleyen otomobiller ve deniz neminin boyasını etkilediği araçlar başvuruların çoğunu oluşturur. Yerleşik yabancı sakinlerin araç satışlarında evrak ve tercüme ihtiyaçları için de yönlendirme sağlıyoruz.",
      "Sahil paralelindeki bulvar trafiğinde yaşanan çarpışmalar ve site içi park hasarları da düzenli başvuru nedenlerindendir. Görüş, aracın bulunduğu site veya otoparkta yapılır; ödeme noterde devirle aynı anda nakit gerçekleşir.",
    ],
    points: [
      "Site ve kapalı otoparklardan alım",
      "Yabancı uyruklu satıcılara evrak yönlendirmesi",
      "Nem ve tuz etkisinde şeffaf değerleme",
      "Sahil bulvarı kazalarına hızlı teklif",
    ],
    faqs: [
      {
        q: "Yabancı uyrukluyum, Konyaaltı'ndaki aracımı satabilir miyim?",
        a: "Satabilirsiniz. İkamet izni veya pasaportla noter devri mümkündür; gereken belgeleri başvuru sırasında listeler, gerekirse yeminli tercüman planlamasında yardımcı oluruz.",
      },
      {
        q: "Aracım aylardır kapalı otoparkta, çalışmıyor; nasıl bakacaksınız?",
        a: "Önce fotoğrafla ön değerlendirme yapılır; gerekirse ekibimiz otoparka gelir. Çalışmayan aracın çıkarılması ve taşınması ücretsiz olarak bize aittir.",
      },
    ],
  },
  {
    districtSlug: "alanya",
    citySlug: "antalya",
    metaTitle: "Alanya Hasarlı Araç Alan — Kazalı ve Kiralık Filo Araçları",
    metaDescription:
      "Alanya'da hasarlı, kazalı ve kiralama filosundan çıkan araç alımı. Yabancı sahipli araçlar dahil ücretsiz çekici ve devirde nakit ödeme.",
    heroTitle: "Alanya'da Hasarlı ve Filo Araç Alımı",
    lead: "Turizmin yoğun temposundaki Alanya'da kiralama araçlarından yerleşik yabancıların otomobillerine kadar geniş bir alım hizmeti sunuyoruz.",
    body: [
      "Alanya'nın araç piyasasını iki dinamik şekillendirir: her sezon yenilenen kiralama filoları ve Avrupa'dan yerleşen sakinlerin araçları. Filo çıkışı yüksek kilometreli otomobillere araç başına gerçekçi nakit teklif veriyor, yabancı uyruklu satıcıların devir işlemlerinde evrak sürecini uçtan uca yönetiyoruz.",
      "D400'ün ilçe içinden geçmesi ve yazın katlanan trafik, kaza kaynaklı başvuruları artırır. Mahmutlar'dan Okurcalar'a kadar tüm mahallelerde aracın bulunduğu noktadan ücretsiz çekici ile alım yapıyor, devri Alanya'daki noterlerde tamamlıyoruz.",
    ],
    points: [
      "Kiralama filosu çıkışlarına toplu teklif",
      "Yabancı sahipli araç devrine tam destek",
      "Mahmutlar–Okurcalar hattında yerinde görüş",
      "Alanya noterlerinde aynı gün devir",
    ],
    faqs: [
      {
        q: "Alanya'daki rent a car firmamızın sezon sonu araçlarını alır mısınız?",
        a: "Alırız. Filo listesiyle başvurmanız yeterli; her araca ayrı teklif verilir, devirler tek takvime toplanır ve ödemeler devir günü şirket hesabına yapılır.",
      },
      {
        q: "Almanya'ya dönüyorum, Alanya'daki aracımı hızlıca satabilir miyim?",
        a: "Evet. Yola çıkmadan önce fotoğrafla teklif alır, tek noter ziyaretiyle devri tamamlarsınız; ödeme devir anında nakit veya hesabınıza transferle yapılır.",
      },
    ],
  },
  {
    districtSlug: "manavgat",
    citySlug: "antalya",
    metaTitle: "Manavgat Hasarlı Araç Alımı — Side Bölgesi Araç Alan",
    metaDescription:
      "Manavgat ve Side'de hasarlı, kazalı ve arızalı araç alımı. Turizm ve tarım araçları dahil ücretsiz çekici ile yerinden alım, nakit ödeme.",
    heroTitle: "Manavgat'ta Hasarlı Araç Alımı",
    lead: "Side'nin turizm yoğunluğu ile ovanın tarım trafiğini birlikte yaşayan Manavgat'ta her tür aracı yerinden alıyoruz.",
    body: [
      "Manavgat'ta yaz sezonu araç yoğunluğunu ikiye katlar; D400 üzerindeki kavşak kazaları ve otel bölgesindeki park hasarları bu dönemde başvuruların ana kaynağıdır. Sezonluk çalışanların dönüş öncesi hızlı satış ihtiyacı için aynı gün teklif ve devir planlaması yapıyoruz.",
      "İlçenin iç kesimlerinde sera ve narenciye tarımında çalışan pikaplar yoğun kullanılır; arızalı veya yaşlı tarım araçlarına parça değeri üzerinden nakit teklif veriyoruz. Çekici, Side'den Taşağıl'a kadar tüm mahalle ve beldelere ücretsiz gönderilir.",
    ],
    points: [
      "Sezon sonu hızlı satış süreci",
      "Otel bölgesi park hasarlarına teklif",
      "Sera ve narenciye araçları değerlendirmesi",
      "Tüm beldelere ücretsiz çekici",
    ],
    faqs: [
      {
        q: "Sezon bitti, memlekete dönmeden Manavgat'ta aracımı satabilir miyim?",
        a: "Satabilirsiniz. Fotoğrafla başvurun; teklif aynı gün netleşir ve noter randevusu dönüş tarihinizden önceye planlanır, ödemeyi devirde nakit alırsınız.",
      },
      {
        q: "Serada kullandığım eski pikap çalışmıyor, değeri var mı?",
        a: "Vardır. Çalışmayan tarım araçlarında gövde ve parça değeri üzerinden teklif verilir; araç tarladan veya seradan ücretsiz çekiciyle alınır.",
      },
    ],
  },
  {
    districtSlug: "serik",
    citySlug: "antalya",
    metaTitle: "Serik Hasarlı Araç Alan — Belek Bölgesi Araç Alımı",
    metaDescription:
      "Serik ve Belek'te hasarlı, kazalı ve ticari araç alımı. Turizm tesisleri ve tarım bölgesinden ücretsiz çekici ile alım, nakit ödeme.",
    heroTitle: "Serik'te Hasarlı Araç Alımı",
    lead: "Belek'in turizm tesisleri ile ovanın tarım üretimi arasındaki Serik'te bireysel ve ticari tüm araçları değerlendiriyoruz.",
    body: [
      "Serik'in ekonomisi iki koldan yürür ve araç başvuruları da bunu yansıtır: Belek'teki otel ve golf tesislerinin servis araçları ile ovada pamuk ve sebze tarımında çalışan pikaplar. Tesis işletmelerine filo değerlendirmesi, çiftçilere ise köyden ücretsiz çekici hizmeti sunuyoruz.",
      "D400 ile otoyol bağlantısının kesiştiği ilçede geçiş trafiği kazaları da sık görülür. Kaza sonrası Serik'te kalan araçlar için otoparktan alım yapılır; devir Serik veya Antalya merkezdeki noterlerde, ödeme devirle eş zamanlı nakit tamamlanır.",
    ],
    points: [
      "Otel servis araçlarına filo teklifi",
      "Tarım pikaplarının köyden alımı",
      "Otoyol kavşağı kazalarına çözüm",
      "Serik noterinde aynı gün devir",
    ],
    faqs: [
      {
        q: "Belek'teki otelimizin eski servis araçlarını nasıl satarız?",
        a: "Araç listesi ve fotoğraflarla başvurursunuz; her araca ayrı teklif verilir, devirler tek randevuda toplanır ve ödeme devir günü şirket hesabına yapılır.",
      },
      {
        q: "Serik'te tarladaki arızalı pikabı almaya gelir misiniz?",
        a: "Geliriz. Konum paylaşmanız yeterli; araziye uygun çekici planlanır ve alım ücretsiz yapılır.",
      },
    ],
  },
  // Adana
  {
    districtSlug: "ceyhan",
    citySlug: "adana",
    metaTitle: "Ceyhan Hasarlı Araç Alımı — Kazalı ve Tarım Araçları",
    metaDescription:
      "Ceyhan'da hasarlı, kazalı ve tarım kullanımlı araç alımı. E-90 kazaları ve ova tarımının pikapları dahil ücretsiz çekici, nakit ödeme.",
    heroTitle: "Ceyhan'da Hasarlı Araç Alımı",
    lead: "Adana'nın doğu merkezi Ceyhan'da enerji hattı trafiğinden ova tarımına kadar her ortamda çalışan araçları değerlendiriyoruz.",
    body: [
      "Ceyhan, E-90 karayolu ile enerji tesislerine akan ağır trafiğin kesişiminde yer alır; tır ve kamyon yoğunluğunun yüksek olduğu bu akslarda binek araç kazaları sık yaşanır. Kaza sonrası Ceyhan'da kalan araçlar için otoparktan teslim alma ve uzaktan devir süreci yürütüyoruz.",
      "Ovada buğday ve mısır tarımında çalışan pikaplar ile römork çeken araçlar ilçenin ikinci büyük başvuru grubudur. Köy adreslerinden ücretsiz çekiciyle alım yapıyor, devri Ceyhan noterinde tamamlıyor ve ödemeyi devir anında nakit veriyoruz.",
    ],
    points: [
      "E-90 kazalarına otoparktan çözüm",
      "Ova tarımı araçlarının köyden alımı",
      "Ceyhan noterinde devir imkânı",
      "Devirle eş zamanlı nakit ödeme",
    ],
    faqs: [
      {
        q: "Ceyhan'a bağlı köydeyim, çekici gerçekten ücretsiz mi geliyor?",
        a: "Evet. Teklifi kabul ettiğinizde çekici köy adresinize ücretsiz gönderilir; erişim koşulları sadece randevu planlanırken netleştirilir.",
      },
      {
        q: "E-90'da kaza yaptım, şehir dışındanım; aracı Ceyhan'da satabilir miyim?",
        a: "Satabilirsiniz. Teklif fotoğraflarla uzaktan netleşir, aracı otoparktan biz alırız; devir tek ziyaretle veya vekâletle tamamlanır.",
      },
    ],
  },
  // Mersin
  {
    districtSlug: "tarsus",
    citySlug: "mersin",
    metaTitle: "Tarsus Hasarlı Araç Alan — Kazalı ve Ticari Araç Alımı",
    metaDescription:
      "Tarsus'ta hasarlı, kazalı ve ticari araç alımı. Adana–Mersin otoyol aksındaki kazalar dahil ücretsiz çekici ile yerinden alım, nakit ödeme.",
    heroTitle: "Tarsus'ta Hasarlı Araç Alımı",
    lead: "İki büyükşehrin tam ortasındaki Tarsus'ta otoyol kazalarından ova tarımının araçlarına kadar her durumu nakit değerlendiriyoruz.",
    body: [
      "Tarsus, Adana ve Mersin arasındaki otoyol ile D400'ün kesiştiği noktada yer alır; bu koridor Türkiye'nin en yoğun araç akslarından biridir ve kaza kaynaklı başvurular ilçede ilk sıradadır. İki şehre de eşit uzaklıkta olmamız randevu ve çekici planlamasını hızlandırır — görüş çoğunlukla aynı gün yapılır.",
      "Berdan Ovası'nın tarım araçları ve ilçe sanayisindeki işletme kamyonetleri de düzenli başvuru gruplarıdır. Değerlendirme fotoğrafla başlar, araç yerinde görülür, devir Tarsus noterinde yapılır ve ödeme devir anında nakit teslim edilir.",
    ],
    points: [
      "Otoyol koridoru kazalarına hızlı müdahale",
      "İki büyükşehre eşit mesafede hızlı randevu",
      "Berdan Ovası tarım araçları değerlendirmesi",
      "Tarsus noterinde aynı gün devir",
    ],
    faqs: [
      {
        q: "Tarsus'ta aracıma ne kadar hızlı bakılır?",
        a: "Konumumuz gereği Tarsus randevuları çok hızlıdır: fotoğrafla ön değerlendirme yarım saat içinde, yerinde görüş ise çoğunlukla aynı gün planlanır.",
      },
      {
        q: "Otoyolda kaza yaptım, aracım Tarsus otoparkında; masraflar kimde?",
        a: "Teklif kabul edilirse çekici ve taşıma bize aittir; otopark ücreti devir hesaplaşmasında şeffaf biçimde netleştirilir, sürpriz kesinti olmaz.",
      },
    ],
  },
  // Hatay
  {
    districtSlug: "antakya",
    citySlug: "hatay",
    metaTitle: "Antakya Hasarlı Araç Alımı — Yerinden Alım ve Nakit Ödeme",
    metaDescription:
      "Antakya'da hasarlı, kazalı ve uzun süredir bekleyen araç alımı. Şehir dışındaki sahipler için uzaktan devir, ücretsiz çekici, nakit ödeme.",
    heroTitle: "Antakya'da Hasarlı Araç Alımı",
    lead: "Yeniden kurulan Antakya'da uzun süre bekleyen, hasarlı kalan veya elden çıkarılacak araçlar için saygılı ve pratik bir süreç yürütüyoruz.",
    body: [
      "Antakya'da araç satışlarının önemli bölümü şehir dışına taşınmış sahiplerden gelir: uzun süre kullanılmayan, hasarı gidilmemiş ya da adresi değişmiş araçların satışı için uzaktan başvuru ve vekâletli devir sürecini bu bölgeye özel olarak sadeleştirdik. Aracın yerini bildirmeniz yeterli; durum tespiti ve çekici bizden.",
      "Şehirde süren yapım çalışmalarının ağır araç trafiği, binek araçlarda küçük çaplı hasarları da artırıyor. Defne ve Samandağ çevresi dahil merkez bölgede yerinde görüş yapıyor, devri Hatay'daki noterlerde tamamlıyor ve ödemeyi devirle aynı anda nakit veriyoruz.",
    ],
    points: [
      "Şehir dışındaki sahipler için uzaktan süreç",
      "Uzun süre bekleyen araçlara çekici çözümü",
      "Defne ve Samandağ'dan da başvuru",
      "Vekâletle devir imkânı",
    ],
    faqs: [
      {
        q: "Antakya'daki aracım iki yıldır kullanılmıyor; satışı buradan, İstanbul'dan yürütebilir miyim?",
        a: "Yürütebilirsiniz. Fotoğraf ve konumla başvurursunuz, aracı yerinde biz inceleriz; devir vekâletle veya tek günlük ziyaretinizle tamamlanır, ödeme devir anında yapılır.",
      },
      {
        q: "Aracın bazı evrakları kayıp; satış yine de mümkün mü?",
        a: "Çoğu durumda evet. Kayıp ruhsat ve plaka gibi eksikler noterlik ve emniyet süreçleriyle tamamlanabilir; başvuruda durumu belirtin, adımları birlikte planlayalım.",
      },
    ],
  },
  {
    districtSlug: "iskenderun",
    citySlug: "hatay",
    metaTitle: "İskenderun Hasarlı Araç Alan — Liman Kenti Araç Alımı",
    metaDescription:
      "İskenderun'da hasarlı, kazalı ve ticari araç alımı. Sanayi ve liman araçları dahil körfez neminde şeffaf değerleme, ücretsiz çekici.",
    heroTitle: "İskenderun'da Hasarlı Araç Alımı",
    lead: "Demir-çelik sanayisi ve limanıyla İskenderun'da ticari araçlardan körfez neminin etkilediği otomobillere kadar her durumu değerlendiriyoruz.",
    body: [
      "İskenderun'un sanayi kimliği araç parkına doğrudan yansır: fabrika servisleri, liman lojistiğinin kamyonetleri ve yük taşıyan ticari araçlar başvuruların ana grubudur. İşletmelere mesai saatine uygun yerinde görüş planlıyor, birden fazla aracın devrini tek randevuda topluyoruz.",
      "Körfezin nemli ve tuzlu havası, açıkta park edilen araçlarda korozyonu belirgin hızlandırır; değerlendirmede bu etken şeffaf biçimde raporlanır ve teklif aracın gerçek durumuna göre verilir. Arsuz ve Payas hattından gelen bireysel başvurular da İskenderun üzerinden yönetilir.",
    ],
    points: [
      "Fabrika ve liman araçlarına yerinde görüş",
      "Körfez nemi korozyonunda şeffaf raporlama",
      "Arsuz ve Payas'tan başvuru imkânı",
      "Toplu devirlerin tek randevuda toplanması",
    ],
    faqs: [
      {
        q: "İskenderun'da fabrikamızın mesaisini bölmeden görüş yapabilir misiniz?",
        a: "Yapabiliriz. Yerinde görüş, vardiya ve mesai düzeninize göre planlanır; devir evrakları önceden hazırlanarak işlem tek seferde kısa sürede tamamlanır.",
      },
      {
        q: "Deniz kenarında park ettiğim araçta paslanma başladı; fiyatı çok mu düşer?",
        a: "Korozyon teklifi etkiler ancak belirleyici olan yaygınlığıdır; yüzeysel paslanmada etki sınırlıdır. Araç yerinde incelenir ve indirimin gerekçesi size açıkça gösterilir.",
      },
    ],
  },
  {
    districtSlug: "dortyol",
    citySlug: "hatay",
    metaTitle: "Dörtyol Hasarlı Araç Alımı — Kazalı ve Tarım Araçları",
    metaDescription:
      "Dörtyol'da hasarlı, kazalı ve tarım kullanımlı araç alımı. TAG otoyolu bağlantısındaki kazalar dahil ücretsiz çekici ve nakit ödeme.",
    heroTitle: "Dörtyol'da Hasarlı Araç Alımı",
    lead: "Narenciye bahçelerinin ve otoyol bağlantısının ilçesi Dörtyol'da bireysel, ticari ve tarım araçlarının tamamını değerlendiriyoruz.",
    body: [
      "Dörtyol, TAG otoyolunun Hatay'a bağlandığı kavşakta yer alır; İskenderun körfezine inen ağır trafik ilçe çevresinde kaza kaynaklı başvuruları artırır. Kaza sonrası bölgede kalan araçlar için otoparktan alım ve şehir dışı sahiplere uzaktan devir süreci uyguluyoruz.",
      "İlçe ekonomisinin bel kemiği narenciyede çalışan pikaplar ve bahçe traktörlerini çeken araçlar, yoğun sezonlarda hızla yıpranır. Payas ve Erzin aksından gelen başvurular dahil tüm bölgede ücretsiz çekiciyle alım yapıyor, ödemeyi devirde nakit teslim ediyoruz.",
    ],
    points: [
      "Otoyol kavşağı kazalarına çözüm",
      "Narenciye araçlarının bahçeden alımı",
      "Payas ve Erzin'den başvuru imkânı",
      "Devirde eksiksiz nakit ödeme",
    ],
    faqs: [
      {
        q: "Dörtyol'da bahçede duran eski pikabı satmak istiyorum; nasıl ilerlenir?",
        a: "Fotoğraflarla başvurun; teklif netleşirse çekici bahçe adresinize ücretsiz gelir. Devir Dörtyol veya İskenderun noterinde yapılır, ödeme devir anında nakittir.",
      },
      {
        q: "Otoyol bağlantısında kaza yaptım, memleketim başka şehirde; süreç nasıl işler?",
        a: "Aracın otoparktan alınması bize aittir; teklif uzaktan netleşir ve devir tek ziyaretle ya da noterden vereceğiniz vekâletle tamamlanır.",
      },
    ],
  },
];

export function getCityContent(citySlug: string): CityContent | undefined {
  return cityContent.find((c) => c.citySlug === citySlug);
}

export function getDistrictContent(
  citySlug: string,
  districtSlug: string,
): DistrictContent | undefined {
  return districtContent.find(
    (d) => d.citySlug === citySlug && d.districtSlug === districtSlug,
  );
}
