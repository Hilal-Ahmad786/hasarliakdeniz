import type { FaqItem } from "./faq";

/** Simple structured content block (avoids a markdown dependency). */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "img"; src: string; alt: string; width?: number; height?: number }
  | { type: "table"; header: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** SEO meta description override (trimmed for SERPs). Falls back to `excerpt`. */
  metaDescription?: string;
  /** Per-post SEO keywords override. Falls back to shared `blogMetaKeywords`. */
  metaKeywords?: string;
  /** SEO `<title>` override. Falls back to `title`. */
  seoTitle?: string;
  /** Canonical URL override. Falls back to the auto-generated route. */
  canonical?: string;
  /** Robots directive override (e.g. "noindex, follow"). */
  robots?: string;
  /** Open Graph image override. Falls back to `image`. */
  ogImage?: string;
  category: string;
  /** ISO date — editable; sample content for development. */
  date: string;
  /** ISO date of the last content edit (CMS updatedAt). Falls back to `date`. */
  modified?: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  body: Block[];
  faqs?: FaqItem[];
  /** Mark sample content so it is clearly non-production. */
  sample: boolean;
}

export const blogCategories = [
  "Hasarlı Araç",
  "Pert ve Ağır Hasar",
  "Araç Değerleme",
  "Noter ve Devir",
  "Hurda ve Çekme Belgeli",
  "Belgeler ve Sorgulama",
  "Sigorta ve Tazminat",
];

/** Shared meta keywords for editorial (blog + guide) pages. */
export const blogMetaKeywords =
  "hasarlı araç, kazalı araç satışı, pert araç, hurda araç, araç satış rehberi";

export const blogPosts: BlogPost[] = [
  {
    slug: "dolu-hasarli-arac-satisi",
    title: "Dolu Hasarlı Araç Satmak: Antalya'da Dolu Sonrası Yol Haritası",
    excerpt:
      "Antalya'nın ünlü dolu fırtınaları dakikalar içinde yüzlerce aracın kaportasını göçüklerle doldurabiliyor. Dolu hasarlı aracınızı onarmak yerine satmayı düşünüyorsanız izlemeniz gereken adımları anlattık.",
    metaDescription:
      "Dolu hasarlı araç satılır mı, değeri nasıl belirlenir? Antalya ve çevresinde dolu sonrası hasar tespiti, kasko süreci ve satış adımları bu rehberde.",
    metaKeywords:
      "dolu hasarlı araç, dolu hasarı, dolu hasarlı araç satmak, dolu hasarlı araç alan, antalya dolu hasarı",
    category: "Hasarlı Araç",
    date: "2026-07-15",
    readingMinutes: 6,
    image: "/images/blog/az-hasarli-arac.jpg",
    imageAlt: "Kaportası hasar görmüş, satışa hazırlanan beyaz otomobil",
    body: [
      { type: "p", text: "Akdeniz'de dolu, uzak bir ihtimal değil, yaşanmış bir gerçektir. Antalya ve çevresinde zaman zaman görülen şiddetli dolu olayları; açık otoparklarda, site bahçelerinde ve cadde kenarlarında duran araçların kaputunda, tavanında ve bagaj kapağında onlarca göçük bırakabiliyor. Peki dolu hasarlı bir araç ne yapılır: onarılır mı, satılır mı?" },
      { type: "h2", text: "Dolu hasarı aracı nasıl etkiler?" },
      { type: "ul", items: [
        "Göçükler çoğunlukla kaput, tavan ve bagaj gibi yatay yüzeylerde yoğunlaşır.",
        "Boya çatlamamışsa hasar 'boyasız göçük düzeltme' ile giderilebilir; ancak göçük sayısı arttıkça maliyet hızla büyür.",
        "Cam, sunroof ve far kırıkları eşlik ediyorsa onarım kalemi belirgin şekilde kabarır.",
        "Kasko tarafından karşılanan onarımlar hasar kaydına yansıyabilir; bu da ikinci el değerini etkiler.",
      ] },
      { type: "h2", text: "Onarmak mı, olduğu gibi satmak mı?" },
      { type: "p", text: "Bu sorunun tek doğru cevabı yoktur; karar, göçük sayısına, boya durumuna ve aracın yaşına bağlıdır. Yaygın ve boyalı onarım gerektiren dolu hasarında masraf, aracın kazandıracağı değeri aşabilir. Böyle durumlarda aracı mevcut hâliyle, dolu hasarlı olarak satmak çoğu araç sahibi için daha pratik bir yoldur." },
      { type: "h2", text: "Dolu hasarlı aracı satarken izlenecek adımlar" },
      { type: "ol", items: [
        "Hasarı belgeleyin: Göçükleri gösteren fotoğrafları sabah veya ikindi ışığında, hafif açıyla çekin; öğle güneşinin parlaması göçükleri gizler.",
        "Kasko sürecinizi netleştirin: Hasar dosyası açıldıysa sonucunu, açılmadıysa bu durumu alıcıyla açıkça paylaşın.",
        "Değerlendirme talep edin: Fotoğraflar ve araç bilgileriyle ücretsiz bir ön değerlendirme alın; bu sizi bağlamaz.",
        "Teklifi sakin kafayla inceleyin: Fiyatın hangi gerekçelerle belirlendiğini sorun.",
        "Noterde devri tamamlayın: Anlaşma sağlanırsa devir ve ödeme adımları resmi şekilde planlanır.",
      ] },
      { type: "note", text: "Bu içerik genel bilgilendirme amaçlıdır. Kasko kapsamı poliçeden poliçeye değişir; kendi poliçenizi sigorta şirketinizle teyit edin." },
      { type: "h2", text: "Sonuç" },
      { type: "p", text: "Dolu hasarı, aracınızın kaderini belirlemek zorunda değil. Hasarı doğru belgeleyip şeffaf bir değerlendirme aldığınızda, aracınızı onarım masrafına girmeden ve gerçekçi bir bedelle elden çıkarmanız mümkün. Antalya, Isparta, Burdur ve çevresinden dolu hasarlı araç başvuruları bölge genelinde değerlendirilmektedir." },
    ],
    faqs: [
      { q: "Dolu hasarı hasar kaydına girer mi?", a: "Kaskodan ödeme yapıldıysa hasar, sigorta kayıtlarına yansır. Cepten yaptırılan onarımlar genellikle kayda girmez." },
      { q: "Göçükler çok küçük; yine de değer kaybettirir mi?", a: "Göçük sayısı ve konumu değerlendirmede dikkate alınır; ancak nihai değer aracın bütününe göre belirlenir ve gerekçesiyle açıklanır." },
      { q: "Dolu hasarlı aracın satışı normal satıştan farklı mı?", a: "Hayır. Devir yine noterde, standart adımlarla tamamlanır; farklı olan yalnızca değerlendirme aşamasında hasarın doğru anlatılmasıdır." },
    ],
    sample: false,
  },
  {
    slug: "sel-sonrasi-arac-degerlendirmesi",
    title: "Sel Sonrası Araç Değerlendirmesi: Su Hasarı Nasıl Tespit Edilir?",
    excerpt:
      "Mersin ve Antalya'da ani sağanaklar alt geçitleri ve otoparkları dakikalar içinde doldurabiliyor. Aracınız suyla temas ettiyse ilk yapmanız gerekenler ve değerlendirme süreci bu yazıda.",
    metaDescription:
      "Selde kalan araç ne yapılmalı? Su hasarının tespiti, motoru çalıştırmama kuralı, sigorta süreci ve sel hasarlı aracın satışı hakkında pratik rehber.",
    metaKeywords:
      "sel hasarlı araç, su basmış araç, selde kalan araç, sel hasarlı araç satmak, sel hasarlı araç alan",
    category: "Araç Değerleme",
    date: "2026-07-28",
    readingMinutes: 7,
    image: "/images/blog/sel-hasarli-arac-deger-tespiti-kapak.jpg",
    imageAlt: "Su hasarı yönünden incelenen sel hasarlı araç",
    body: [
      { type: "p", text: "Akdeniz'in yağış rejimi kendine özgüdür: aylarca yağmur görmeyen bir şehir, tek bir sonbahar sağanağında sel haberleriyle gündeme gelebilir. Mersin ve Antalya'da ani su baskınları alt geçitlerde, dere yataklarına yakın mahallelerde ve site otoparklarında her yıl araçları etkiliyor. Aracınız suyla temas ettiyse, vereceğiniz ilk kararlar hem güvenliğinizi hem aracın kalan değerini belirler." },
      { type: "h2", text: "İlk kural: motoru çalıştırmayın" },
      { type: "p", text: "Su seviyesi tekerleğin üst hizasını geçtiyse en kritik hata, aracı çalıştırmayı denemektir. Emme sistemine su girmişse marş basmak, motorda ciddi ve kalıcı hasara yol açabilir. Aracı çekiciyle kuru bir alana aldırmak her zaman daha güvenli yoldur." },
      { type: "h2", text: "Su hasarının izleri nerede aranır?" },
      { type: "ul", items: [
        "Halı altı ve taban sacında nem, çamur veya kum kalıntısı",
        "Kapı içlerinde ve bagaj havuzunda su çizgisi",
        "Sigorta kutusu ve kablo soketlerinde oksitlenme",
        "İç mekânda geçmeyen rutubet kokusu",
        "Far ve stop içlerinde buğu veya su birikintisi",
      ] },
      { type: "p", text: "Suyun niteliği de önemlidir: çamurlu sel suyu ve denize yakın bölgelerde tuzlu su, temiz suya göre elektronik aksamda çok daha hızlı korozyon başlatır." },
      { type: "h2", text: "Sigorta ve kayıt süreci" },
      { type: "p", text: "Kaskonuz varsa sel/su baskını teminatının kapsamda olup olmadığını poliçenizden kontrol edin ve hasarı vakit kaybetmeden bildirin. Hasarın boyutuna göre araç onarılabilir ya da pert işlemi görebilir; her iki durumda da belge ve kayıt durumu, aracın sonraki satışında belirleyici olur." },
      { type: "h2", text: "Sel hasarlı aracı satmak mantıklı mı?" },
      { type: "p", text: "Su hasarının en yanıltıcı yanı, aracın ilk günlerde sorunsuz görünebilmesidir. Elektronik arızalar ve korozyon haftalar, hatta aylar sonra ortaya çıkabilir. Bu nedenle birçok araç sahibi, belirsiz bir onarım maratonuna girmek yerine aracı mevcut durumuyla, şeffaf biçimde beyan ederek satmayı tercih eder. Değerlendirme; suyun ulaştığı seviye, temas süresi ve elektronik aksamın durumu dikkate alınarak yapılır." },
      { type: "note", text: "Bu içerik genel bilgilendirme amaçlıdır; sigorta kapsamı ve resmi işlemler için sigorta şirketinize ve ilgili kurumlara danışın." },
    ],
    faqs: [
      { q: "Araç selde kaldı ama çalışıyor; sorun yok diyebilir miyim?", a: "Hayır. Su hasarının etkileri gecikmeli ortaya çıkabilir. Aracın kontrolden geçirilmesi ve durumun satışta açıkça beyan edilmesi önemlidir." },
      { q: "Sel hasarı TRAMER kaydına girer mi?", a: "Sigortadan ödeme yapılmışsa hasar kayıtlara yansır. Kayıt durumu, değerlendirme sırasında belge üzerinden netleştirilir." },
      { q: "Sigorta süreci sonuçlanmadan teklif alabilir miyim?", a: "Evet. Değerlendirme talebi sigorta sürecinden bağımsızdır; nihai adımlar belge durumunuza göre planlanır." },
    ],
    sample: false,
  },
  {
    slug: "hasarli-aracimi-nasil-satarim",
    title: "Akdeniz'de Hasarlı Araç Satmak: Bölgeye Özel Adım Adım Rehber",
    excerpt:
      "Antalya'dan Adana'ya hasarlı aracınızı satarken izleyeceğiniz yol aslında nettir: doğru belgeleme, gerçekçi değerlendirme ve noterde güvenli devir. Bölge koşullarını da hesaba katan pratik rehber.",
    metaDescription:
      "Hasarlı aracınızı Akdeniz'de nasıl satarsınız? Fotoğraf hazırlığı, ücretsiz değerlendirme, çekici planlaması ve noter devri adım adım bu rehberde.",
    metaKeywords:
      "hasarlı araç satmak, hasarlı araç nasıl satılır, hasarlı araç alan, hasarlı araç alan antalya, hasarlı araç değerleme",
    category: "Hasarlı Araç",
    date: "2026-06-26",
    readingMinutes: 7,
    image: "/images/blog/az-hasarli-arac.jpg",
    imageAlt: "Satışa hazırlanan, ön tamponu hafif hasarlı beyaz otomobil",
    body: [
      { type: "p", text: "Hasarlı bir aracı satmak, çoğu araç sahibinin hayatında bir-iki kez karşılaştığı bir iştir; bu yüzden sürecin yabancı gelmesi çok doğal. İyi haber şu: doğru sırayla ilerlediğinizde iş, sanıldığından çok daha kısa sürer. Bu rehberde süreci Akdeniz koşullarını da hesaba katarak anlatıyoruz — çünkü Adana sıcağında bekleyen bir araçla Isparta'da garajda duran bir aracın hikâyesi aynı değildir." },
      { type: "h2", text: "Önce durum tespiti: aracınız hangi kategoride?" },
      { type: "p", text: "Değerlendirmenin sağlıklı olması için hasarın kaynağını net tanımlayın. Bölgemizde karşılaşılan başlıca tablolar şunlardır:" },
      { type: "ul", items: [
        "Kaza hasarı — şehir içi çarpışmalardan D-400'deki yüksek hızlı kazalara kadar geniş bir yelpaze.",
        "Doğal etken hasarı — Antalya çevresinde dolu göçükleri, Mersin'de ani su baskınları.",
        "İklim kaynaklı arızalar — aşırı sıcakta hararet, soğutma sistemi ve elektronik sorunları.",
        "Yıpranma — kıyı şeridinde tuzlu havanın hızlandırdığı korozyon, güneşte solan boya ve döşeme.",
      ] },
      { type: "h2", text: "Satış sürecinin beş adımı" },
      { type: "h3", text: "1. Aracı doğru fotoğraflayın" },
      { type: "p", text: "İlk değerlendirme fotoğraf üzerinden yapılır; fotoğrafın kalitesi teklifin isabetini doğrudan etkiler. Güneyin sert öğle güneşi kaportada parlama yapar ve hasarı gizler — sabah veya ikindi saatlerini, mümkünse gölgeyi tercih edin. Dört yön, hasar bölgeleri, motor bölmesi ve kilometre göstergesi mutlaka kadrajda olsun." },
      { type: "h3", text: "2. Ücretsiz değerlendirme isteyin" },
      { type: "p", text: "Fotoğrafları ve araç bilgilerini ilettiğinizde, bağlayıcı olmayan bir ön değerlendirme yapılır. Bu aşamada aracınızı hiçbir yere götürmeniz gerekmez; araç Kahramanmaraş'ta da olsa Hatay'da da olsa başvuru aynı şekilde ilerler." },
      { type: "h3", text: "3. Teklifi sorgulamaktan çekinmeyin" },
      { type: "p", text: "Şeffaf bir alıcı, rakamın nasıl oluştuğunu anlatır: hasarın kapsamı, kullanılabilir parçalar, kayıt durumu. Aklınıza takılan her kalemi sorun; ikna olmadan ilerlemeyin." },
      { type: "h3", text: "4. Teslim ve taşımayı planlayın" },
      { type: "p", text: "Çalışmayan veya sürülemeyecek durumdaki araçlar için çekici ve taşıma seçenekleri, aracın bulunduğu il ve ilçeye göre planlanır. Şehirler arası mesafelerin uzun olduğu bölgemizde bu planlama, sizi ciddi bir yükten kurtarır." },
      { type: "h3", text: "5. Noter devri ve ödeme" },
      { type: "p", text: "Satışın resmi adresi noterdir. Devir ve ödeme adımları anlaşma sonrasında açıkça planlanır; ödeme almadan aracı, devri tamamlamadan da ödemeyi teslim etmeyin — güvenli işlemde ikisi birlikte yürür." },
      { type: "h2", text: "Bölgeye özel iki pratik uyarı" },
      { type: "ul", items: [
        "Hasarlı aracı açıkta bekletmeyin: yaz güneşi ve tuzlu hava, bekleyen aracın durumunu her ay biraz daha geriletir.",
        "Sezonu hesaba katın: turizm hareketliliğinin yoğun olduğu aylarda trafiğe çıkmayan bir aracı elde tutmanın maliyeti (otopark, sigorta, MTV) birikmeye devam eder.",
      ] },
      { type: "h2", text: "Sonuç" },
      { type: "p", text: "Hasarlı araç satışı; doğru belgeleme, gerçekçi değerlendirme ve resmi devirden ibarettir. Aracınızın durumu ne olursa olsun — kazalı, dolu hasarlı, arızalı veya hurda — bir değerlendirme almadan 'satılmaz' hükmünü vermeyin. Başvuru ücretsizdir ve sizi bağlamaz." },
    ],
    sample: false,
  },
  {
    slug: "pert-arac-nedir",
    title: "Pert Araç Ne Demek? Akdeniz'de Pert Kayıtlı Araç Satışının Yolu",
    excerpt:
      "Sigortanız 'pert' dediyse bu, aracınızın değersiz olduğu anlamına gelmez. Pert kavramını, tam hasar ile ekonomik pert farkını ve pert kayıtlı aracın satış sürecini sade bir dille anlattık.",
    metaDescription:
      "Pert araç nedir, pert kayıtlı araç satılır mı? Pert total ile pert muhtemel farkı, değerleme mantığı ve satış adımları bu yazıda.",
    metaKeywords:
      "pert araç nedir, pert araç satılır mı, pert kayıtlı araç, pert araç alan, pert total pert muhtemel",
    category: "Pert ve Ağır Hasar",
    date: "2026-06-26",
    readingMinutes: 7,
    image: "/images/blog/pert-arac.jpg",
    imageAlt: "Pert kayıtlı, ön tarafı ağır hasarlı otomobil",
    body: [
      { type: "p", text: "Bir kaza ya da doğal afet sonrası sigorta şirketinden 'aracınız pert' cümlesini duymak moral bozucudur. Ancak pert kaydı bir son değil, sürecin yeni bir aşamasıdır. Bu yazıda pert kavramının ne anlama geldiğini ve pert kayıtlı bir aracın bölgemizde nasıl satıldığını adım adım açıklıyoruz." },
      { type: "h2", text: "Pert kararı nasıl verilir?" },
      { type: "p", text: "Sigorta eksperi, onarım maliyetini aracın rayiç değeriyle karşılaştırır. Onarım masrafı rayice yaklaşıyor ya da onu aşıyorsa aracın onarımı 'ekonomik değil' kabul edilir ve pert işlemi başlar. Bölgemizde bu karar yalnızca çarpışma kazalarında değil; sel, yangın ve ağır dolu hasarlarında da karşımıza çıkar." },
      { type: "h2", text: "İki farklı pert: tam hasar ve ekonomik pert" },
      { type: "ul", items: [
        "Tam hasar (pert-total): Onarım teknik olarak mümkün veya güvenli değildir. Araç genellikle hurdaya ayrılır; değeri ağırlıklı olarak parça ve metalden gelir.",
        "Ekonomik pert (pert muhtemel): Onarım teknik olarak mümkündür ama maliyetlidir. Araç, usulüne uygun onarım sonrası tekrar trafiğe çıkabilir; ruhsatına ağır hasar kaydı işlenir.",
      ] },
      { type: "p", text: "Hangi kategoride olduğunuz, hem satış yönteminizi hem de aracın değerini doğrudan belirler." },
      { type: "h2", text: "Pert kaydı değeri sıfırlamaz" },
      { type: "p", text: "Pert kayıtlı bir araçta bile motor, şanzıman, elektronik üniteler, kapılar, jantlar ve iç donanım ciddi değer taşıyabilir. Özellikle yedek parçası aranan modellerde kullanılabilir parça havuzu, aracın toplam değerinin belkemiğidir. Bu yüzden pert aracı 'nasılsa hurda' diye yok pahasına devretmek, çoğu zaman araç sahibinin aleyhine sonuçlanır." },
      { type: "h2", text: "Pert kayıtlı aracın satış adımları" },
      { type: "ol", items: [
        "Kaydın türünü netleştirin: tam hasar mı, onarılabilir ağır hasar mı? Bu bilgi ruhsat ve sigorta evrakında yer alır.",
        "Eksper raporunu ve pert yazışmalarını hazırda tutun; doğru belge, doğru teklif demektir.",
        "Aracın güncel fiziki durumunu (çalışıyor / çalışmıyor, hareket ediyor / etmiyor) olduğu gibi aktarın.",
        "Fotoğraflarla ücretsiz değerlendirme isteyin; ilk değerlendirme bağlayıcı değildir.",
        "Anlaşma sağlanırsa devir, belge durumuna uygun resmi adımlarla noterde tamamlanır.",
      ] },
      { type: "note", text: "Pert kaydını gizlemek hem alıcıyı yanıltır hem hukuki sorumluluk doğurur. Şeffaf beyan, en hızlı ve en sağlıklı satışın ön koşuludur." },
      { type: "h2", text: "Sonuç" },
      { type: "p", text: "Pert aracınız, doğru ele alındığında hâlâ bir değerdir. Kayıt türünü öğrenin, belgelerinizi toplayın ve aracın mevcut durumu üzerinden gerçekçi bir değerlendirme isteyin. Akdeniz genelinde pert kayıtlı araç başvuruları, belge durumuna göre planlanan süreçle değerlendirilmektedir." },
    ],
    sample: false,
  },
  {
    slug: "hasarli-arac-noter-devri-gerekli-belgeler",
    title: "Hasarlı Araç Devri: Noterde Gerekli Belgeler ve Süreç (2026)",
    excerpt:
      "Hasarlı, pert kayıtlı veya çalışmayan bir aracın satışı da noterde tek işlemde tamamlanır. Devir öncesi borç kontrolü, hazırlanacak belgeler ve işlemin sırası bu rehberde.",
    metaDescription:
      "Hasarlı araç noterde nasıl devredilir? MTV ve ceza borcu kontrolü, satıcı ve alıcının hazırlaması gereken belgeler, adım adım devir süreci.",
    category: "Noter ve Devir",
    date: "2026-06-18",
    readingMinutes: 7,
    image: "/images/blog/az-hasarli-arac.jpg",
    imageAlt: "Devir için hazırlanan, ön tamponu hasarlı beyaz Renault",
    body: [
      { type: "p", text: "Türkiye'de araç devri 2019'dan bu yana noterde tek işlemde tamamlanıyor; ayrıca trafik tescil müdürlüğüne gitmek gerekmiyor. Bu kural aracın durumundan bağımsızdır: hasarlı, pert kayıtlı, hatta kendi gücüyle hareket edemeyen bir araç da aynı resmi çatı altında el değiştirir. Farklılaşan tek şey, bazı durumlarda devrin çekme belgesiyle yapılmasıdır." },
      { type: "h2", text: "Randevudan önce: borç ve şerh kontrolü" },
      { type: "p", text: "Noter, devir anında aracın üzerindeki yükümlülükleri sistemden sorgular. Aşağıdaki kalemlerden biri takılırsa işlem tamamlanamaz; randevu öncesi kontrol, boşa gidecek bir yolculuğu önler:" },
      { type: "ul", items: [
        "Ödenmemiş Motorlu Taşıtlar Vergisi (MTV) — Ocak ve Temmuz'da iki taksit hâlinde tahakkuk eder.",
        "Trafik idari para cezaları (hız, muayene gecikmesi vb.).",
        "Geçerli Zorunlu Trafik Sigortası (ZMSS) poliçesi.",
        "Araç üzerinde haciz, rehin veya yakalama şerhi bulunup bulunmadığı.",
      ] },
      { type: "note", text: "MTV ve ceza borçlarınızı e-Devlet üzerinden GİB ve İçişleri Bakanlığı sorgu ekranlarından ücretsiz kontrol edebilirsiniz. Yaz aylarında Antalya gibi yoğun illerde noter randevusunu önceden almak zaman kazandırır." },
      { type: "h2", text: "Satıcının hazırlayacağı belgeler" },
      { type: "ul", items: [
        "Araç Tescil Belgesi (ruhsat) — yeni tip belge tek parçadır.",
        "Geçerli kimlik belgesi.",
        "Geçerli Zorunlu Trafik Sigortası poliçesi.",
        "Araç şirket adına kayıtlıysa imza sirküleri / yetki belgesi.",
      ] },
      { type: "h2", text: "Alıcı tarafında neler gerekir?" },
      { type: "p", text: "Alıcı için geçerli kimlik belgesi yeterlidir; T.C. kimlik numarası vergi numarası işlevini de görür. Devir sonrası trafik sigortasını kendi adına yeniletmek alıcının sorumluluğundadır." },
      { type: "h2", text: "İşlemin sırası" },
      { type: "ol", items: [
        "Taraflar noterde buluşur (çoğu noterde online randevu alınabilir).",
        "Noter, plaka üzerinden aracı ve borç/şerh durumunu sorgular.",
        "Satış bedeli ve araç bilgileri sözleşmeye işlenir; taraflar imzalar.",
        "Devir elektronik tescile kaydedilir, yeni ruhsat düzenlenir.",
        "Ödeme güvenli biçimde (genellikle havale/EFT) tamamlanır.",
      ] },
      { type: "h3", text: "Hasarlı araçta değişen tek nokta" },
      { type: "p", text: "Hasar, devre engel değildir. Ancak araç kendi gücüyle hareket edemiyorsa veya plakaları teslim edilmişse satış çekme belgesiyle yapılır. Ruhsatta pert/ağır hasar kaydı varsa bu kayıt devirde görünür; işlem yine noterde, aynı çatı altında biter." },
      { type: "note", text: "Bu içerik genel bilgilendirme amaçlıdır; hukuki veya mali tavsiye değildir. Güncel ücret ve uygulamayı ilgili noter ve resmi kurumlardan teyit edin." },
    ],
    faqs: [
      { q: "Devirde plakam değişir mi?", a: "Aynı il içindeki devirlerde plaka değişmez; araçla birlikte alıcıya geçer." },
      { q: "MTV borcu varken devir yapılabilir mi?", a: "Hayır. Borç görünen araçta noter devri tamamlayamaz; borcun önceden kapatılması gerekir." },
      { q: "Çalışmayan aracı noterde satabilir miyim?", a: "Evet. Araç hareket edemiyorsa satış çekme belgesiyle yapılır; işlem yine noterde tamamlanır." },
    ],
    sample: false,
  },
  {
    slug: "arac-hasar-kaydi-sorgulama-edevlet-tramer",
    title: "TRAMER Hasar Kaydı Sorgulama: e-Devlet Üzerinden Pratik Rehber",
    excerpt:
      "Aracınızın sigorta hasar geçmişini birkaç dakikada e-Devlet'ten görebilirsiniz. Hasar kaydının neyi gösterip neyi göstermediğini ve sorgu adımlarını açıkladık.",
    metaDescription:
      "Araç hasar kaydı e-Devlet (SBM/TRAMER) üzerinden nasıl sorgulanır? Hasar kaydı ile pert kaydı farkı ve satışa etkisi bu rehberde.",
    category: "Belgeler ve Sorgulama",
    date: "2026-06-05",
    readingMinutes: 6,
    image: "/images/blog/kazali-arac-egea-on.jpg",
    imageAlt: "Ön sol tarafı hasarlı gri sedan otomobil",
    body: [
      { type: "p", text: "Hasarlı bir aracı satmaya hazırlanıyorsanız ilk yapmanız gereken işlerden biri, aracın resmi hasar geçmişine kendinizin bakmasıdır. Bu kayıtlar Sigorta Bilgi ve Gözetim Merkezi (SBM) bünyesindeki TRAMER sisteminde tutulur ve sigortadan ödeme yapılmış her olayı tarih ve tutarıyla listeler." },
      { type: "h2", text: "Kayıt neyi gösterir, neyi göstermez?" },
      { type: "ul", items: [
        "Gösterir: Sigortadan (kasko/trafik) ödeme yapılmış hasarları, tarihlerini ve tutarlarını. Kaza kadar dolu ve sel gibi doğal afet hasarları da, ödeme yapılmışsa kayda girer.",
        "Göstermez: Cepten yaptırılan onarımlar genellikle sisteme yansımaz.",
        "Yanıltmasın: Yüksek hasar tutarı her zaman ağır hasar demek değildir; cam ve far değişimi gibi kalemler de kayıtta yer alır.",
        "Ayrı tutun: Pert/ağır hasar kaydı, hasar tutarından farklı ve daha kritik bir bilgidir; ruhsata işlenir.",
      ] },
      { type: "h2", text: "e-Devlet'te sorgu adımları" },
      { type: "ol", items: [
        "turkiye.gov.tr adresine T.C. kimlik numaranız ve şifrenizle giriş yapın.",
        "Arama kutusuna 'SBM' veya 'Hasar' yazın; Sigorta Bilgi ve Gözetim Merkezi hizmetlerini seçin.",
        "'Araç Hasar Geçmişi / Hasar Bilgisi Sorgulama' hizmetini açın.",
        "Kendi adınıza kayıtlı araçları doğrudan sorgulayabilirsiniz; başkasına ait araçta sahibinin paylaşımı gerekebilir.",
        "Sonuç ekranında tarih, hasar tipi ve ödenen tutarı görüntüleyin.",
      ] },
      { type: "note", text: "e-Devlet hizmet adları zaman zaman güncellenir; hizmeti bulamazsanız 'SBM' anahtar kelimesiyle aramak en kısa yoldur." },
      { type: "h2", text: "Kaydınızı bilmek pazarlıkta elinizi güçlendirir" },
      { type: "p", text: "Hasar geçmişini satıştan önce kendiniz görmek; alıcıya doğru bilgi vermenizi, sürpriz sorularla karşılaşmamanızı ve değerlendirmenin hızlanmasını sağlar. Kayıtları gizlemeye çalışmak ise hem güveni zedeler hem de süreci uzatır. Şeffaflık, hasarlı araç satışının en kestirme yoludur." },
      { type: "note", text: "Bu içerik genel bilgilendirme amaçlıdır. Sorgu sonuçlarının resmi yorumu için SBM ve sigorta kuruluşlarına başvurun." },
    ],
    faqs: [
      { q: "Başkasının aracının hasar kaydına bakabilir miyim?", a: "Kişisel verilerin korunması nedeniyle kayıtlar genellikle araç sahibine açıktır. Satıcıdan kendi e-Devlet hesabından alınmış güncel bir çıktı istemek en güvenli yoldur." },
      { q: "Hasar kaydı sildirilebilir mi?", a: "Sigortadan ödenmiş gerçek kayıtlar silinmez. 'Kayıt temizleme' vaadiyle gelen tekliflere itibar etmeyin." },
      { q: "Dolu hasarı da TRAMER'de görünür mü?", a: "Kaskodan ödeme yapıldıysa evet, doğal afet hasarları da kayda girer. Cepten karşılanan onarımlar genellikle görünmez." },
    ],
    sample: false,
  },
  {
    slug: "pert-kayitli-arac-nasil-satilir",
    title: "Ağır Hasar Kayıtlı Araç Satışı: Bilmeniz Gereken Her Şey",
    excerpt:
      "Ruhsata işlenen ağır hasar kaydı silinmez; ama doğru yönetilen bir satışa da engel değildir. Kayıt türleri, trafiğe dönüş koşulları ve satış adımlarını derledik.",
    metaDescription:
      "Ağır hasar (pert) kayıtlı araç nasıl satılır? Tam hasar ile onarılabilir pert farkı, kaydın kalıcılığı ve güvenli satış adımları bu yazıda.",
    category: "Pert ve Ağır Hasar",
    date: "2026-05-22",
    readingMinutes: 7,
    image: "/images/blog/kazali-arac-agir-hasar.jpg",
    imageAlt: "Ön tarafı ağır hasarlı beyaz sedan otomobil",
    body: [
      { type: "p", text: "'Pert oldu' cümlesi günlük dilde tek bir durumu anlatıyormuş gibi kullanılır; oysa sigorta tekniğinde iki ayrı sonuç vardır ve hangisine tabi olduğunuz, aracın kaderini belirler. Satışa geçmeden önce bu ayrımı netleştirmek, atacağınız her adımı kolaylaştırır." },
      { type: "h2", text: "Önce teşhis: hangi kayıt?" },
      { type: "ul", items: [
        "Tam hasar (pert-total): Onarım teknik olarak mümkün veya güvenli değildir. Araç hurdaya ayrılır, yeniden trafiğe çıkamaz; değeri parça ve metalden gelir.",
        "Onarılabilir ağır hasar: Onarım maliyetli ama mümkündür. Araç, usulüne uygun onarım ve denetim sonrası trafiğe dönebilir; ruhsatına ağır hasar kaydı işlenir.",
      ] },
      { type: "h2", text: "Kayıt kalıcıdır — ve bu kötü bir şey olmak zorunda değil" },
      { type: "p", text: "Ağır hasar kaydı bir kez işlendiğinde, araç onarılsa bile silinmez; her alıcı bu geçmişi görebilir. Bunu bir engel gibi değil, bir çerçeve gibi düşünün: kayıt ortada olduğuna göre en güçlü stratejiniz şeffaflıktır. Geçmişi net anlatan satıcı, pazarlık masasına güvenle oturur." },
      { type: "h2", text: "Satışa hazırlık kontrol listesi" },
      { type: "ol", items: [
        "Ruhsattaki kaydın türünü doğrulayın (tam hasar mı, onarılabilir mi).",
        "Sigorta eksper raporunu ve pert yazışmalarını dosyalayın.",
        "Aracın bugünkü fiziki durumunu dürüstçe tanımlayın: çalışıyor mu, hareket edebiliyor mu?",
        "Hareket edemeyen araçta devrin çekme belgesiyle yapılacağını bilin.",
        "Değerlendirmeyi aracın bütünü, çalışan parçaları ve parça değeri üzerinden isteyin.",
      ] },
      { type: "note", text: "Kayıtlı bir aracı 'kayıtsız' gibi pazarlamak alıcıyı yanıltır ve hukuki sorumluluk doğurur. Doğru beyan, sizi de korur." },
      { type: "h2", text: "Değer kaybı ne kadar olur?" },
      { type: "p", text: "Peşinen bir yüzde vermek yanıltıcı olur. Sonucu; marka-model, yaş, hasarın kapsamı, onarımın niteliği ve parçaların kullanılabilirliği birlikte belirler. Onarılabilir ağır hasarlı araçlarda kayıp, hurdaya ayrılan araçlara göre genellikle daha sınırlıdır. Gerçekçi rakam, ancak aracın incelenmesiyle ortaya çıkar — bu yüzden ilk değerlendirme her zaman bağlayıcısızdır." },
    ],
    faqs: [
      { q: "Ağır hasar kayıtlı araç tekrar trafiğe çıkabilir mi?", a: "Onarılabilir kayıtlı araçlar, usulüne uygun onarım ve denetim sonrası çıkabilir. Tam hasarlı (pert-total) araçlar çıkamaz." },
      { q: "Kayıt zamanla düşer mi?", a: "Hayır. Ağır hasar kaydı araçla birlikte kalıcıdır; onarım sonrası da görünmeye devam eder." },
      { q: "Aracı parça parça satmak daha mı kârlı?", a: "Nadiren. Sökme, depolama ve tek tek satış uğraşı çoğu araç sahibi için pratik değildir; bütün hâlde kurumsal satış genellikle daha güvenli ve hızlıdır." },
    ],
    sample: false,
  },
  {
    slug: "cekme-belgesi-nedir-nasil-alinir",
    title: "Çekme Belgesi Rehberi: Trafikten Çekilen Araç Nasıl Satılır?",
    excerpt:
      "Trafiğe çıkamayacak durumdaki bir aracı yasal zeminde tutmanın veya satmanın yolu çekme belgesinden geçer. Belgenin ne olduğunu, hurdaya ayırmadan farkını ve satış sürecini özetledik.",
    category: "Hurda ve Çekme Belgeli",
    date: "2026-05-08",
    readingMinutes: 6,
    image: "/images/blog/cekici-citroen-c4.jpg",
    imageAlt: "Çekici üzerine yüklenmiş, ön tarafı hasarlı kırmızı otomobil",
    body: [
      { type: "p", text: "Ağır hasar, büyük bir mekanik arıza ya da uzun süreli kullanım dışı kalma… Sonuç aynıysa — araç kendi gücüyle güvenle trafiğe çıkamıyorsa — devreye çekme belgesi girer. Bu belge, aracın yalnızca çekiciyle taşınabileceğini gösteren resmi bir statüdür ve aracı yasal zeminde elde tutmanın ya da satmanın kapısını açar." },
      { type: "h2", text: "Çekme belgesi size ne sağlar?" },
      { type: "ul", items: [
        "Trafiğe çıkamayan aracı yasal olarak bekletme veya satma imkânı.",
        "Plakalar tescil birimine iade edilir; araç trafikten çekilmiş sayılır.",
        "Araç trafikte kullanılmadığından bazı yükümlülükler bu dönemde farklılaşır.",
      ] },
      { type: "h2", text: "Çekme ile hurdaya ayırma aynı şey değildir" },
      { type: "ul", items: [
        "Trafikten çekme (çekme belgesi): Araç fiziken durur; onarılıp yeniden tescil edilmesi mümkün olabilir.",
        "Hurdaya ayırma: Tescil kaydı kalıcı olarak kapanır; araç bir daha trafiğe çıkamaz ve genellikle yetkili hurda tesisine teslim edilir.",
      ] },
      { type: "p", text: "Geleceğe dönük bir onarım ihtimali görüyorsanız çekme, araç gerçekten ömrünü doldurmuşsa hurda işlemi mantıklıdır. Kararsızsanız iki işlemin sonuçlarını mutlaka karşılaştırın." },
      { type: "h2", text: "İşlem adımları" },
      { type: "ol", items: [
        "Aracın durumunu netleştirin: çalışmıyor mu, hareket edemiyor mu?",
        "Ruhsat ve kimlik gibi belgeleri hazırlayın.",
        "Bazı adımlar e-Devlet üzerinden başlatılabilir; güncel yöntemi kontrol edin.",
        "Plakaları teslim edin ve çekme belgesini alın.",
        "Satış yapacaksanız devri çekme belgesiyle noterde tamamlayın.",
      ] },
      { type: "note", text: "İstenen belgeler ve adımlar dönemsel olarak değişebilir; işleme başlamadan önce ilgili vergi dairesi veya trafik tescil biriminden güncel bilgiyi teyit edin." },
      { type: "h2", text: "Çekme belgeli aracın satışı" },
      { type: "p", text: "Çekme belgeli araçlar çoğunlukla kurumsal alıcılar tarafından bütün hâlde değerlendirilir; taşıma genellikle alıcı tarafından organize edilir. Şehirler arası mesafelerin uzun olduğu Akdeniz'de bu, satıcı için önemli bir kolaylıktır: aracınız Burdur'da da dursa Osmaniye'de de, önce belge ve durum netleştirilir, sonra taşıma planlanır." },
    ],
    faqs: [
      { q: "Çekme belgeli araç yeniden trafiğe çıkabilir mi?", a: "Çoğu durumda, onarım ve gerekli denetimlerin ardından yeniden tescil mümkündür. Hurdaya ayrılan araçlar için bu söz konusu değildir." },
      { q: "Çekme döneminde MTV ödenir mi?", a: "Trafikten çekme işlemi vergi yükümlülüklerini etkileyebilir; güncel durumu ilgili vergi dairesinden teyit etmeniz önerilir." },
      { q: "Plakaları teslim etmek şart mı?", a: "Evet. Plakaların tescil birimine iadesi, trafikten çekme işleminin doğal bir parçasıdır." },
    ],
    sample: false,
  },
  {
    slug: "hasarli-arac-degerleme-faktorleri",
    title: "Akdeniz'de Hasarlı Araç Değerini Belirleyen 7 Etken",
    excerpt:
      "Hasarlı aracın değeri tek bir formülle hesaplanmaz. Marka ve hasar kapsamının yanında iklim yıpranması ve tuzlu hava gibi bölgesel etkenlerin teklife nasıl yansıdığını açıkladık.",
    metaDescription:
      "Hasarlı araç değeri neye göre belirlenir? Marka-model, hasar kapsamı, pert kaydı, parça değeri ve Akdeniz iklim koşulları dahil 7 etken bu yazıda.",
    category: "Araç Değerleme",
    date: "2026-04-19",
    readingMinutes: 6,
    image: "/images/blog/hasarli-arac-on-hasar.jpg",
    imageAlt: "Ön tamponu ve farı hasarlı beyaz otomobil",
    body: [
      { type: "p", text: "Hasarlı araç değerlemesi, sağlam araç fiyatından hasar bedelini düşmekten ibaret değildir. Değerlendirme; aracın bütününe, onarım ekonomisine ve kullanılabilir parça havuzuna birlikte bakar. Bölgemizde buna bir katman daha eklenir: Akdeniz ikliminin araç üzerinde bıraktığı izler. İşte teklifi şekillendiren yedi ana etken." },
      { type: "h2", text: "1. Marka, model ve jenerasyon" },
      { type: "p", text: "Yedek parçası bol, ikinci el talebi canlı modeller hasarlı hâlde bile hızlı değer bulur. Aracın jenerasyonu, parça uyumluluğu açısından belirleyicidir." },
      { type: "h2", text: "2. Kilometre ve mekanik sağlamlık" },
      { type: "p", text: "Hasar gövdedeyse ve motor-şanzıman sağlamsa, düşük kilometre teklifin en güçlü destekçisidir." },
      { type: "h2", text: "3. Hasarın türü, yeri ve kapsamı" },
      { type: "ul", items: [
        "Tampon, kaput ve çamurluk gibi dış panel hasarları görece sınırlı etki yapar.",
        "Şasi, airbag ve motor bölmesi hasarları değeri belirgin düşürür.",
        "Dolu göçükleri, boya durumuna göre ayrı bir kalem olarak ele alınır.",
        "Su/sel teması, gecikmeli arıza riski nedeniyle kendi başına bir kategori oluşturur.",
      ] },
      { type: "h2", text: "4. Çalışır ve hareket eder durumda olması" },
      { type: "p", text: "Kendi gücüyle yürüyen araç, çekici gerektirene göre lojistik açıdan avantajlıdır; şehirler arası mesafelerin uzun olduğu bölgemizde bu fark değerlendirmeye yansır." },
      { type: "h2", text: "5. Pert / ağır hasar kaydı" },
      { type: "p", text: "Ruhsata işlenmiş kayıt, aracın gelecekteki satılabilirliğini etkiler. Kaydın türü — tam hasar mı, onarılabilir mi — sonucu doğrudan değiştirir." },
      { type: "h2", text: "6. İklim yıpranması: güneş, sıcak ve tuzlu hava" },
      { type: "p", text: "Bölgeye özgü etkendir. Yıllarca sert güneş altında kalan boya ve iç döşemedeki solma, aşırı sıcağın yıprattığı soğutma sistemi, kıyı şeridinde tuzlu havanın başlattığı yüzey korozyonu — bunların tümü aracın genel kondisyon puanına işler. Kapalı otoparkta korunmuş bir araç, aynı yaştaki açıkta yaşamış eşdeğerinden ayrışır." },
      { type: "h2", text: "7. Belgeler, kullanılabilir parça değeri ve piyasa" },
      { type: "p", text: "Ruhsat, anahtarlar, varsa eksper raporu ve borçsuzluk süreci hızlandırır. Ağır hasarlı araçlarda değerin asıl kaynağı çoğu zaman sağlam kalan parçalardır; ikinci el ve yedek parça piyasasının o günkü seyri de teklife yansır." },
      { type: "note", text: "Bu içerik genel bilgilendirme amaçlıdır. Aracınıza özel rakam, ancak fotoğraf ve belgelerin incelenmesiyle netleşir; ilk değerlendirme bağlayıcı değildir." },
    ],
    faqs: [
      { q: "Fotoğrafla verilen ilk değer kesin mi?", a: "Hayır. İlk değerlendirme bir ön tahmindir; nihai teklif, aracın ve belgelerin kontrolünden sonra netleşir." },
      { q: "Satmadan önce boya veya kaporta yaptırmalı mıyım?", a: "Çoğu durumda gerekmez. Onarım masrafı, sağlayacağı değer artışını aşabilir; aracı mevcut hâliyle değerlendirmeye sunmak genellikle daha mantıklıdır." },
    ],
    sample: false,
  },
  {
    slug: "trafik-kazasi-deger-kaybi-tazminati",
    title: "Kusursuz Olduğunuz Kazada Değer Kaybı Tazminatı: Süreç Rehberi",
    excerpt:
      "Aracınız onarıldı ama ikinci el değeri düştü mü? Kusurlu olmadığınız kazalarda bu kaybı karşı tarafın trafik sigortasından talep edebilirsiniz. Koşulları ve başvuru yolunu anlattık.",
    metaDescription:
      "Araç değer kaybı tazminatı kimden istenir, koşulları nelerdir? Başvuru adımları, Sigorta Tahkim Komisyonu yolu ve hesaplama mantığı bu yazıda.",
    category: "Sigorta ve Tazminat",
    date: "2026-03-27",
    readingMinutes: 7,
    image: "/images/blog/yan-kaza-egea.jpg",
    imageAlt: "Yan tarafı kaza geçirmiş gri sedan otomobil yol kenarında",
    body: [
      { type: "p", text: "Trafiği yoğun bir bölgede yaşıyorsanız — hele yaz aylarında araç sayısının katlandığı Antalya ve çevresinde — kusurunuz olmayan bir kazaya karışma ihtimali maalesef düşük değildir. Aracınız onarılsa bile kaza geçmişi ikinci el değerini düşürür; işte bu farka 'değer kaybı' denir ve kusurlu tarafın Zorunlu Trafik Sigortası'ndan (ZMSS) talep edilebilir." },
      { type: "h2", text: "Talebin temel koşulları" },
      { type: "ul", items: [
        "Kazada kusursuz veya kısmen kusurlu olmanız — tazminat, karşı tarafın kusur oranına göre belirlenir.",
        "Aracın onarılmış ya da onarılabilir durumda olması.",
        "Aracın yaşı ve kilometresi gibi sigortacılık ölçütlerinin sağlanması.",
      ] },
      { type: "h2", text: "Başvuru nasıl yapılır?" },
      { type: "ol", items: [
        "Kaza tespit tutanağı, olay yeri fotoğrafları, onarım faturaları ve ruhsatı bir dosyada toplayın.",
        "Kusurlu tarafın sigorta şirketine yazılı başvuru yapın.",
        "Yanıt süresinde gelmez veya teklif yetersiz kalırsa Sigorta Tahkim Komisyonu'na başvurun.",
        "Gerekirse bağımsız eksper raporuyla kayıp tutarını belgelendirin.",
      ] },
      { type: "note", text: "Tazminat taleplerinde zamanaşımı süreleri vardır; başvuruyu geciktirmeyin. Süreler ve uygulama için hukuk danışmanına veya Sigorta Tahkim Komisyonu'na danışmanız önerilir." },
      { type: "h2", text: "Tutar nasıl hesaplanır?" },
      { type: "p", text: "Tek bir standart formül yoktur. Aracın kaza öncesi değeri, yaşı, kilometresi, hasarın ağırlığı ve onarımın niteliği birlikte değerlendirilir. Yeni ve az kilometreli araçlarda ağır onarım sonrası kayıp tutarı genellikle daha yüksek çıkar." },
      { type: "h2", text: "Ya aracı satmak isterseniz?" },
      { type: "p", text: "Onarım sonrası araca güveniniz kalmadıysa, değer kaybı başvurusu ile satışı iki ayrı süreç olarak yürütebilirsiniz. Hasar kayıtlı bir aracı satarken geçmişi şeffaf paylaşmak, en hızlı ve sağlıklı sonucu veren yaklaşımdır; değerlendirme talebi oluşturmak ücretsizdir." },
    ],
    faqs: [
      { q: "Tam kusurluysam değer kaybı alabilir miyim?", a: "Genellikle hayır. Kısmen kusurluysanız tazminat, karşı tarafın kusur oranıyla orantılı olarak değerlendirilir." },
      { q: "Değer kaybını kendi kaskom mu öder?", a: "Hayır. Değer kaybı, kusurlu tarafın Zorunlu Trafik Sigortası'ndan talep edilir." },
      { q: "Sigorta şirketi reddederse yolun sonu mu?", a: "Değil. Sigorta Tahkim Komisyonu'na başvurabilirsiniz; bağımsız eksper raporu talebinizi güçlendirir." },
    ],
    sample: false,
  },
  {
    slug: "hasarli-arac-satarken-dikkat-edilmesi-gerekenler",
    title: "Turizm Sezonu Öncesi Hasarlı Araç Satmak: Zamanlama ve Hazırlık",
    excerpt:
      "Akdeniz'de yaz yaklaşırken trafik, otopark maliyeti ve araç yoğunluğu birlikte artar. Hasarlı aracınızı sezon öncesi satmayı düşünüyorsanız dikkat etmeniz gerekenleri derledik.",
    category: "Hasarlı Araç",
    date: "2026-05-12",
    readingMinutes: 6,
    image: "/images/blog/cekme-belgeli-arac.jpg",
    imageAlt: "Ön sol tarafı hasarlı gri otomobil",
    body: [
      { type: "p", text: "Akdeniz'de takvim, araç sahipleri için de bir şeyler söyler. Yaz sezonu yaklaştıkça Antalya ve kıyı ilçelerinde trafik yoğunlaşır, kiralık araç filoları yollara döner, otopark bulmak zorlaşır. Kullanmadığınız [hasarlı bir araç](/arac-alimi/hasarli-arac-alimi) bu tabloda yalnızca yer kaplamakla kalmaz; sigorta, MTV ve otopark gibi kalemlerle sessizce masraf üretmeye devam eder." },
      { type: "h2", text: "1. Bekletmenin görünmez maliyetini hesaplayın" },
      { type: "ul", items: [
        "Açıkta duran araçta güneş ve tuzlu hava yıpranmayı her ay biraz daha ilerletir.",
        "MTV, sigorta ve otopark giderleri araç kullanılmasa da işler.",
        "Su baskını veya dolu gibi mevsimsel riskler, bekleyen aracın durumunu daha da geriletebilir.",
      ] },
      { type: "h2", text: "2. Aracın durumunu netleştirin" },
      { type: "p", text: "Hasarın kapsamını, aracın çalışıp çalışmadığını ve varsa hasar/pert kayıtlarını satıştan önce kendiniz netleştirin. e-Devlet üzerinden hasar geçmişinizi görmek birkaç dakika sürer ve sizi pazarlıkta güçlü kılar." },
      { type: "h2", text: "3. Fotoğrafları sezon güneşine karşı akıllı çekin" },
      { type: "ul", items: [
        "Sabah veya ikindi ışığını tercih edin; öğle parlaması hasarı gizler.",
        "Dört yönden genel görünüm ve hasar bölgelerinin yakın çekimi",
        "Motor bölmesi, iç mekân ve kilometre göstergesi",
        "Ruhsat bilgileri",
      ] },
      { type: "h2", text: "4. İlk değerlendirme ile nihai teklifi ayırt edin" },
      { type: "p", text: "Fotoğraf ve bilgilere dayanan ilk değerlendirme bağlayıcı değildir; nihai teklif, aracın ve belgelerin kontrolünden sonra netleşir. Bu ayrımı bilen satıcı, süreci gerçekçi beklentilerle yönetir." },
      { type: "h2", text: "5. Devri resmi zeminde tamamlayın" },
      { type: "p", text: "Anlaşma sağlandığında noter devri ve ödeme adımları açıkça planlanmalı, ödeme ile devir eş zamanlı yürümelidir. Yoğun aylarda noter randevusunu önceden almak işinizi kolaylaştırır." },
      { type: "note", text: "Bu içerik genel bilgilendirme amaçlıdır; hukuki veya mali tavsiye niteliği taşımaz." },
    ],
    faqs: [
      { q: "Sezon içinde mi, sezon öncesi mi satmak daha iyi?", a: "Kesin bir kural yoktur; ancak aracı bekletmenin masrafı ve yıpranma etkisi zamanla arttığından, karar verdiyseniz süreci uzatmamak genellikle satıcının lehinedir." },
      { q: "Ekspertiz raporu olmadan satış yapabilir miyim?", a: "Evet. Ekspertiz zorunlu değildir; varsa değerlendirmeyi hızlandırır." },
    ],
    sample: true,
  },
  {
    slug: "pert-arac-nedir-nasil-degerlenir",
    title: "Pert Araçta Değer Nereden Gelir? Parça Havuzunun Önemi",
    excerpt:
      "Pert kayıtlı bir aracın değeri çoğu zaman bütününden değil, sağlam kalan parçalarından gelir. Parça değerinin nasıl hesaba katıldığını kısaca açıkladık.",
    category: "Pert ve Ağır Hasar",
    date: "2026-04-28",
    readingMinutes: 5,
    image: "/images/blog/pert-arac.jpg",
    imageAlt: "Lastikler arasında bekleyen, ön tarafı ağır hasarlı pert araç",
    body: [
      { type: "p", text: "[Pert araç](/arac-alimi/pert-arac-alimi), onarım maliyeti piyasa değerine yaklaştığı için ekonomik onarımı uygun görülmeyen araçtır. Peki onarılmayacaksa değeri nereden gelir? Cevap çoğu zaman tek kelimedir: parçalar." },
      { type: "h2", text: "Değer taşıyan parça grupları" },
      { type: "ul", items: [
        "Motor ve şanzıman — hasar gövdedeyse en değerli kalemlerdir.",
        "Elektronik üniteler, farlar ve göstergeler",
        "Kapılar, kaput, tampon gibi sağlam kalan paneller",
        "Jantlar, koltuklar ve iç donanım",
      ] },
      { type: "p", text: "Yedek parçası aranan bir modelde sağlam parça havuzu genişse, pert kayıtlı araç şaşırtıcı derecede iyi değer bulabilir. Bu nedenle değerlendirme, aracın bütünüyle birlikte parça potansiyeline de bakar." },
      { type: "h2", text: "Belge süreci unutulmasın" },
      { type: "p", text: "Pert kaydının türüne göre devir adımları değişebilir. Doğru ve resmi sürecin nasıl ilerleyeceği, belge durumunuza göre değerlendirme sırasında açıklanır." },
    ],
    sample: true,
  },
  {
    slug: "calismayan-araci-satmanin-yollari",
    title: "Sıcak İklim Araçları Nasıl Yıpratır? Çalışmayan Aracı Satma Rehberi",
    excerpt:
      "Akdeniz yazı akülerin, contaların ve soğutma sistemlerinin sessiz düşmanıdır. Uzun süredir çalışmayan aracınızı değerlendirmek için izleyeceğiniz yolu özetledik.",
    category: "Araç Değerleme",
    date: "2026-04-10",
    readingMinutes: 4,
    image: "/images/blog/motor-arizali-arac.jpg",
    imageAlt: "Motor arızası nedeniyle çalışmayan beyaz otomobil",
    body: [
      { type: "p", text: "Adana veya Mersin'de bir yaz geçirmiş her araç sahibi bilir: aşırı sıcak, aracın gizli yıpratıcısıdır. Yüksek sıcaklık akü ömrünü kısaltır, contaları kurutur, soğutma sistemini zorlar. Uzun süre park hâlinde bekleyen araçlarda bu etkiler birleşir ve araç bir gün marş almamaya başlar. İyi haber: [çalışmayan araçlar](/arac-alimi/calismayan-arac-alimi) da değerlendirilebilir." },
      { type: "h2", text: "Arıza kaynağını bilmiyorsanız da başvurabilirsiniz" },
      { type: "p", text: "Aracınızın neden çalışmadığını bilmeniz gerekmez; fotoğraflar ve kısa bir açıklama değerlendirme için yeterlidir. Akü mü, motor mu, elektronik mi — teşhis, sürecin ilerleyen adımlarında netleşir." },
      { type: "h2", text: "Taşımayı dert etmeyin" },
      { type: "p", text: "Çalışmayan araç için çekici ve taşıma seçenekleri, aracın bulunduğu il ve ilçeye göre planlanır. Aracınızı bir yere götürmeniz beklenmez; süreç bulunduğunuz yerden başlar." },
    ],
    sample: true,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
