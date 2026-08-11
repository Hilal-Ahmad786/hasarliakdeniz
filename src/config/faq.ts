export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

/** Full categorized FAQ for the /sss page. */
export const faqCategories: FaqCategory[] = [
  {
    id: "teklif-degerlendirme",
    label: "Teklif ve Değerleme",
    items: [
      { q: "Aracımın değerini öğrenmek için ne yapmam gerekiyor?", a: "Araç bilgilerinizi ve birkaç net fotoğrafı form ya da WhatsApp üzerinden iletmeniz yeterli. Başvuru ücretsizdir ve sizi hiçbir şekilde bağlamaz." },
      { q: "Fotoğrafla yapılan değerlendirme kesin fiyat mıdır?", a: "Hayır. Fotoğraf ve bilgilere dayanan ilk değerlendirme bir ön fikirdir; nihai teklif, araç ve belgeler kontrol edildikten sonra netleşir." },
      { q: "Teklifi beğenmezsem ne olur?", a: "Hiçbir şey. Teklif almak sizi satışa zorlamaz; düşünmek için süre isteyebilir veya süreci istediğiniz an sonlandırabilirsiniz." },
    ],
  },
  {
    id: "bolgesel-hasarlar",
    label: "Akdeniz'e Özgü Hasarlar",
    items: [
      { q: "Dolu hasarı almış aracımı değerlendiriyor musunuz?", a: "Evet. Antalya ve çevresinde zaman zaman yaşanan dolu olayları sonrası kaportasında göçük oluşan araçlar için değerlendirme talebi oluşturabilirsiniz." },
      { q: "Sel veya su baskınında kalan araç satılabilir mi?", a: "Satılabilir. Mersin ve Antalya'da ani sağanaklar sonrası su hasarı alan araçlar mevcut durumlarına göre değerlendirilir; varsa kayıt durumu şeffaf biçimde ele alınır." },
      { q: "Aşırı sıcaktan motoru arızalanan aracım için teklif alabilir miyim?", a: "Evet. Adana ve Mersin yazlarında hararet yapan, soğutma sistemi ya da elektroniği arızalanan araçlar da değerlendirme kapsamındadır." },
      { q: "Sahilde kullanılan aracımda paslanma var; bu değeri düşürür mü?", a: "Tuzlu havaya bağlı korozyon değerlemede dikkate alınan etkenlerden biridir; ancak nihai değerlendirme aracın bütününe göre yapılır ve size açıkça anlatılır." },
    ],
  },
  {
    id: "arac-turleri",
    label: "Hangi Araçlar Alınır?",
    items: [
      { q: "Pikap veya ticari aracımı da satabilir miyim?", a: "Evet. Adana ve Hatay'da yoğun kullanılan pikaplar dâhil, hasarlı ya da arızalı ticari araçlar için de başvuru oluşturabilirsiniz." },
      { q: "Pert kayıtlı ya da çekme belgeli araç başvurusu yapabilir miyim?", a: "Evet. Pert kayıtlı, ağır hasarlı ve çekme belgeli araçlar, belge durumuna göre planlanan bir süreçle değerlendirilir." },
      { q: "Yanmış veya hurda durumundaki araçlar kapsam dışında mı?", a: "Hayır. Yanmış, hurda ve ekonomik ömrünü tamamlamış araçlar da değerlendirme talebine konu olabilir." },
    ],
  },
  {
    id: "fotograf-belge",
    label: "Fotoğraf ve Belgeler",
    items: [
      { q: "Değerlendirme için hangi fotoğraflar gerekli?", a: "Dört yönden genel görünüm, hasarlı bölgelerin yakın çekimi, motor bölmesi ve kilometre görünecek şekilde gösterge paneli yeterlidir. Güçlü öğle güneşinde parlamayı önlemek için gölgede çekim yapmanızı öneririz." },
      { q: "Ekspertiz raporum yok; başvuru için şart mı?", a: "Şart değil. Ruhsat bilgileri genellikle yeterlidir; ekspertiz veya servis kaydı varsa süreci hızlandırır." },
    ],
  },
  {
    id: "noter-odeme",
    label: "Noter ve Ödeme",
    items: [
      { q: "Anlaşırsak noter işlemi nerede ve nasıl yapılır?", a: "Devir, bulunduğunuz ile göre planlanan bir noter randevusuyla resmi şekilde tamamlanır. Adımlar önceden açık biçimde paylaşılır." },
      { q: "Ödememi ne zaman ve nasıl alırım?", a: "Ödeme yöntemi ve zamanlaması devir planıyla birlikte netleştirilir; süreç kayıtlı ve şeffaf biçimde yürütülür." },
    ],
  },
  {
    id: "teslim-cekici",
    label: "Teslim ve Çekici",
    items: [
      { q: "Aracım çalışmıyor; bulunduğu yerden alınması mümkün mü?", a: "Konuma ve aracın durumuna göre çekici ve taşıma seçenekleri planlanır. D-400 üzeri veya şehir merkezleri dışındaki konumlar için de süreç birlikte netleştirilir." },
      { q: "Isparta veya Burdur gibi iç kesimlerden başvuru yapabilir miyim?", a: "Evet. Antalya, Mersin ve Adana gibi sahil illerinin yanı sıra Isparta, Burdur, Osmaniye ve Kahramanmaraş'tan da başvuru kabul edilir." },
    ],
  },
  {
    id: "gizlilik",
    label: "Gizlilik ve İletişim",
    items: [
      { q: "Numaramı bırakırsam ısrarla aranır mıyım?", a: "Hayır. Sizinle yalnızca talebinizle ilgili iletişim kurulur; süreç boyunca satış baskısı uygulanmaz." },
      { q: "Paylaştığım bilgiler başka bir amaçla kullanılır mı?", a: "Kullanılmaz. Bilgileriniz yalnızca aracınızın değerlendirilmesi ve sizinle iletişim için işlenir; ayrıntılar KVKK Aydınlatma Metni'nde yer alır." },
    ],
  },
];

/** Homepage FAQ (design.md §19.8). Calm, non-committal, accurate copy. */
export const homepageFaqs: FaqItem[] = [
  {
    q: "Dolu veya sel hasarı almış aracımı satabilir miyim?",
    a: "Evet. Antalya'da dolu, Mersin ve Antalya'da ani su baskını sonrası hasar alan araçlar Akdeniz'de sık karşılaşılan bir kategoridir. Aracınızın mevcut durumu fotoğraflar üzerinden değerlendirilir ve süreç şeffaf biçimde planlanır.",
  },
  {
    q: "Hangi şehirlerden başvuru kabul ediyorsunuz?",
    a: "Antalya, Mersin, Adana, Hatay, Osmaniye, Kahramanmaraş, Isparta ve Burdur başta olmak üzere Akdeniz Bölgesi genelinden başvuru alıyoruz. Konumunuza göre teslim ve taşıma seçenekleri birlikte planlanır.",
  },
  {
    q: "Teklif almak için ne göndermem gerekiyor?",
    a: "Aracın marka, model ve yıl bilgisiyle birlikte dört yönden çekilmiş net fotoğraflar yeterlidir. Başvuru ücretsizdir; teklifi kabul edip etmemek tamamen size bağlıdır.",
  },
  {
    q: "Aşırı sıcaktan arızalanan araçlar da alınıyor mu?",
    a: "Alınıyor. Adana ve Mersin yazlarında hararet, soğutma sistemi arızası veya elektronik sorun yaşayan araçlar için de değerlendirme talebi oluşturabilirsiniz.",
  },
  {
    q: "İlk değerlendirme ile nihai teklif arasındaki fark nedir?",
    a: "İlk değerlendirme, paylaştığınız bilgi ve fotoğraflara dayanan bağlayıcı olmayan bir ön görüştür. Nihai teklif, aracın ve belgelerin kontrolünün ardından netleşir.",
  },
  {
    q: "Aracım çalışmıyor ya da çekme belgeli; süreç değişir mi?",
    a: "Süreç değişmez, yalnızca planlama farklılaşır. Çalışmayan araçlar için taşıma seçenekleri, çekme belgeli araçlar için belge durumuna uygun devir adımları sizinle netleştirilir.",
  },
  {
    q: "Noter ve ödeme güvenliği nasıl sağlanıyor?",
    a: "Anlaşma sağlandığında devir noterde resmi olarak tamamlanır; ödeme adımları devir planıyla birlikte açıkça belirlenir ve kayıtlı biçimde yürütülür.",
  },
  {
    q: "Ticari aracım veya pikabım için de başvuru yapabilir miyim?",
    a: "Evet. Adana ve Hatay'da tarım ve nakliyede yoğun kullanılan pikaplar ile hasarlı veya arızalı ticari araçlar da değerlendirme kapsamındadır.",
  },
];
