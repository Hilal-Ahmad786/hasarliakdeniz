import type { LegalDoc } from "@/components/ui/legal-document";
import { siteConfig } from "./site";
import { routes } from "./navigation";

/**
 * Legal page content — worded specifically for this site (near-duplicate
 * legal text across the group's domains is an SEO liability). All
 * company-specific facts use editable placeholders (master prompt: never
 * invent legal/company information); retention periods, jurisdiction and
 * provider names are completed after legal review.
 */

const controller = siteConfig.legalCompanyName;
const UPDATED = "[TARİH]";

export const privacyDoc: LegalDoc = {
  eyebrow: "Gizlilik ve Veri Güvenliği",
  title: "Gizlilik Politikası",
  intro:
    "hasarliakdeniz.com üzerinden bize ulaştığınızda hangi verilerinizin, ne amaçla ve ne kadar süreyle işlendiğini bu politikada bulabilirsiniz.",
  lastUpdated: UPDATED,
  href: routes.privacy,
  breadcrumbLabel: "Gizlilik Politikası",
  sections: [
    { id: "amac", heading: "Politikanın Amacı", blocks: [{ type: "p", text: "Bu politika; site ziyaretçilerinin ve araç satışı için başvuran kişilerin kişisel verilerini nasıl koruduğumuzu, hangi ilkelerle hareket ettiğimizi anlatır." }] },
    { id: "veri-sorumlusu", heading: "Veri Sorumlusu Kim?", blocks: [{ type: "p", text: `Verileriniz üzerinde veri sorumlusu sıfatını ${controller} taşır. Bize ulaşmak için sayfa sonundaki iletişim bilgilerini kullanabilirsiniz.` }] },
    { id: "toplanan-bilgiler", heading: "İşlenen Veriler", blocks: [
      { type: "p", text: "Değerlendirme ve alım hizmeti kapsamında şunlar işlenebilir:" },
      { type: "ul", items: ["Kimlik ve iletişim bilgileriniz", "Aracınızın bilgileri ile gönderdiğiniz görseller", "Aracın bulunduğu konum (il/ilçe)", "Siteyi kullanırken oluşan teknik kayıtlar"] },
    ] },
    { id: "kullanim-amaclari", heading: "İşleme Amaçları", blocks: [
      { type: "ul", items: ["Teklif hazırlanması ve tarafınıza iletilmesi", "Randevu, çekici ve devir organizasyonu", "Hizmetin geliştirilmesi ve ölçümlenmesi", "Yasal yükümlülüklerin ifası"] },
    ] },
    { id: "toplama-yontemleri", heading: "Verilerin Toplanma Şekli", blocks: [{ type: "p", text: "Veriler; sitedeki başvuru formları, telefon aramaları, WhatsApp mesajları ve e-posta yazışmaları üzerinden toplanır." }] },
    { id: "hukuki-sebepler", heading: "Dayanılan Hukuki Sebepler", blocks: [{ type: "p", text: "İşleme, mevzuatta öngörülen hukuki sebeplere dayanır; kapsamlı açıklama için KVKK Aydınlatma Metni'ni inceleyiniz." }] },
    { id: "paylasim", heading: "Kimlerle Paylaşılır?", blocks: [{ type: "p", text: "Veriler ancak hizmetin gerektirdiği ölçüde, gizlilik yükümlülüğü altındaki taraflarla ([HİZMET SAĞLAYICILARI]) ve yasal zorunluluk hâlinde yetkili mercilerle paylaşılır." }] },
    { id: "cerezler", heading: "Çerez Kullanımı", blocks: [{ type: "p", text: "Sitede çerezlerden yararlanılır; ayrıntılar ve tercih yönetimi Çerez Politikası sayfasında yer alır." }] },
    { id: "reklam-koruma", heading: "Reklam Trafiği ve Tıklama Koruması", blocks: [{ type: "p", text: "Reklam yatırımımızı bot ve sahte tıklamalardan korumak amacıyla, reklam kaynaklı ziyaretlerde IP, tarayıcı/cihaz bilgisi ve etkileşim sinyalleri analiz edilir. Bu kayıtlar yalnızca geçersiz trafik tespitinde kullanılır, üçüncü taraflara pazarlama için aktarılmaz ve 90 günü aşmadan otomatik imha edilir." }] },
    { id: "guvenlik", heading: "Güvenlik Yaklaşımımız", blocks: [{ type: "p", text: "Verilerin yetkisiz erişime karşı korunması için güncel teknik ve idari önlemler uygulanır; riskler düzenli olarak gözden geçirilir." }] },
    { id: "saklama", heading: "Saklama Süreleri", blocks: [{ type: "p", text: "Verileriniz, amacın gerektirdiği ve mevzuatın zorunlu kıldığı süre boyunca tutulur; belirlenen süreler: [SAKLAMA SÜRESİ]." }] },
    { id: "haklar", heading: "Sahip Olduğunuz Haklar", blocks: [{ type: "p", text: "Verilerinize erişme, düzeltme, silme ve işlemeye itiraz hakları dahil mevzuattaki tüm haklarınızı kullanabilirsiniz; başvuru yolu KVKK sayfasında açıklanmıştır." }] },
    { id: "degisiklikler", heading: "Politikanın Güncellenmesi", blocks: [{ type: "p", text: "Değişiklikler bu sayfada yayımlanır ve yayım tarihinden itibaren geçerli olur." }] },
    { id: "iletisim", heading: "Bize Ulaşın", blocks: [{ type: "p", text: `Gizlilik soruları için ${siteConfig.email} adresine e-posta gönderebilirsiniz.` }] },
  ],
};

export const kvkkDoc: LegalDoc = {
  eyebrow: "Kişisel Verilerin Korunması",
  title: "KVKK Aydınlatma Metni",
  intro:
    "6698 sayılı Kanun'un aydınlatma yükümlülüğüne ilişkin 10. maddesi uyarınca hazırlanan bilgilendirme metnidir.",
  lastUpdated: UPDATED,
  href: routes.kvkk,
  breadcrumbLabel: "KVKK Aydınlatma Metni",
  sections: [
    { id: "veri-sorumlusu", heading: "Veri Sorumlusu", blocks: [{ type: "p", text: `${controller} — adres: ${siteConfig.companyAddress}, KEP: ${siteConfig.kepAddress} — bu metinde açıklanan işleme faaliyetlerinin veri sorumlusudur.` }] },
    { id: "kapsam", heading: "Metnin Kapsamı", blocks: [{ type: "p", text: "hasarliakdeniz.com ziyaretçileri, başvuru sahipleri ve müşteri adayları bu metnin kapsamındadır." }] },
    { id: "kategoriler", heading: "Veri Kategorileri", blocks: [{ type: "ul", items: ["Kimlik ve iletişim verileri", "Araç, işlem ve başvuru verileri", "Araç fotoğrafları (görsel kayıt)", "İşlem güvenliği verileri"] }] },
    { id: "amaclar", heading: "Amaçlar", blocks: [{ type: "ul", items: ["Değerlendirme ve alım sürecinin yürütülmesi", "İletişim ve randevu yönetimi", "Hukuki yükümlülüklerin yerine getirilmesi", "Hizmet kalitesinin ölçülmesi ve geliştirilmesi"] }] },
    { id: "toplama", heading: "Toplama Yöntemleri", blocks: [{ type: "p", text: "Veriler; form, telefon, WhatsApp ve e-posta kanallarından kısmen otomatik yollarla elde edilir." }] },
    { id: "hukuki-sebep", heading: "Hukuki Sebep", blocks: [{ type: "p", text: "İşleme, KVKK md. 5 ve md. 6'daki şartlardan en az birine dayanılarak yürütülür." }] },
    { id: "aktarim", heading: "Verilerin Aktarılması", blocks: [{ type: "p", text: "Veriler; mevzuata uygun şekilde, hizmet için zorunlu olduğu ölçüde iş ortaklarına ([HİZMET SAĞLAYICILARI]) ve talep hâlinde yetkili kamu kurumlarına aktarılabilir." }] },
    { id: "saklama", heading: "Saklama ve Yok Etme", blocks: [{ type: "p", text: "Veriler ilgili sürelerin ([SAKLAMA SÜRESİ]) sonunda; silme, yok etme veya anonimleştirme yöntemlerinden uygun olanıyla imha edilir." }] },
    { id: "guvenlik", heading: "Alınan Tedbirler", blocks: [{ type: "p", text: "Veri güvenliğine ilişkin makul düzeydeki teknik ve idari tedbirler uygulanmakta ve güncel tutulmaktadır." }] },
    { id: "haklar", heading: "Md. 11 Kapsamındaki Haklar", blocks: [{ type: "p", text: "İşlenip işlenmediğini öğrenme, bilgi isteme, düzeltme, silme, aktarılan tarafları öğrenme ve zararın giderilmesini isteme haklarına sahipsiniz." }] },
    { id: "basvuru", heading: "Hak Başvuruları", blocks: [{ type: "p", text: `Başvurularınızı ${siteConfig.email} adresine ya da ${siteConfig.companyAddress} posta adresine yazılı olarak yapabilirsiniz; yalnızca WhatsApp mesajı resmi başvuru yerine geçmez.` }] },
    { id: "guncelleme", heading: "Güncelleme", blocks: [{ type: "p", text: "Metin gerektiğinde revize edilir; geçerli sürüm bu sayfadakidir." }] },
  ],
};

export const cookieDoc: LegalDoc = {
  eyebrow: "Çerezler ve Dijital Tercihler",
  title: "Çerez Politikası",
  intro:
    "Bu sayfa, hasarliakdeniz.com'daki çerezlerin ne işe yaradığını ve tercihlerin nasıl yönetileceğini açıklar.",
  lastUpdated: UPDATED,
  href: routes.cookies,
  breadcrumbLabel: "Çerez Politikası",
  sections: [
    { id: "cerez-nedir", heading: "Çerez Ne İşe Yarar?", blocks: [{ type: "p", text: "Çerezler, tarayıcınıza kaydedilen küçük dosyalardır; oturumunuzu sürdürmek, tercihlerinizi hatırlamak ve kullanım istatistiği üretmek için kullanılır." }] },
    { id: "kategoriler", heading: "Çerez Grupları", blocks: [
      { type: "ul", items: [
        "Zorunlu — sitenin temel işleyişi için şarttır ve devre dışı bırakılamaz.",
        "İşlevsel — tercihleri hatırlar; onayınıza bağlıdır.",
        "Analitik — ziyaret istatistikleri üretir; onayınıza bağlıdır.",
        "Pazarlama — reklam etkinliğini ölçer; onayınıza bağlıdır.",
      ] },
    ] },
    { id: "yonetim", heading: "Onay ve Ret", blocks: [{ type: "p", text: "İsteğe bağlı çerezler yalnızca onay verdiğinizde çalışır; kararınızı çerez panelinden dilediğiniz an değiştirebilirsiniz." }] },
    { id: "envanter", heading: "Aktif Çerezler", blocks: [{ type: "p", text: "Çerezlerin ad, amaç, sağlayıcı ve süre bilgileri [ÇEREZ ENVANTERİ] tamamlandığında burada listelenecektir." }] },
    { id: "tarayici", heading: "Tarayıcıdan Silme", blocks: [{ type: "p", text: "Tarayıcı ayarları üzerinden çerezleri topluca silebilirsiniz; zorunlu çerezler engellenirse bazı sayfalar düzgün çalışmayabilir." }] },
    { id: "degisiklik", heading: "Güncellemeler", blocks: [{ type: "p", text: "Politikadaki değişiklikler bu sayfada duyurulur." }] },
    { id: "iletisim", heading: "İletişim", blocks: [{ type: "p", text: `Sorularınızı ${siteConfig.email} adresine iletebilirsiniz.` }] },
  ],
};

export const termsDoc: LegalDoc = {
  eyebrow: "İnternet Sitesi ve Hizmet Kullanımı",
  title: "Kullanım Koşulları",
  intro:
    "hasarliakdeniz.com'u kullanan herkes için geçerli olan kurallar ve tarafların sorumlulukları aşağıda düzenlenmiştir.",
  lastUpdated: UPDATED,
  href: routes.terms,
  breadcrumbLabel: "Kullanım Koşulları",
  sections: [
    { id: "kabul", heading: "Kabul Beyanı", blocks: [{ type: "p", text: "Bu siteyi kullanmanız, koşulları okuduğunuz ve kabul ettiğiniz anlamına gelir; kabul etmiyorsanız kullanıma devam etmeyiniz." }] },
    { id: "kapsam", heading: "Sunulan Hizmet", blocks: [{ type: "p", text: "Site, Akdeniz Bölgesi'ndeki hasarlı ve sorunlu araçlar için başvuru toplama ve iletişim aracıdır. Başvuru; bizim için satın alma, sizin için satma zorunluluğu yaratmaz." }] },
    { id: "kullanici-bilgileri", heading: "Beyanların Doğruluğu", blocks: [{ type: "p", text: "Verdiğiniz araç, hasar ve iletişim bilgilerinin doğruluğu size aittir; yanlış beyan teklifin geçersiz kalmasına yol açabilir." }] },
    { id: "fotograf", heading: "Görsel Paylaşımları", blocks: [{ type: "p", text: "Yüklediğiniz fotoğraf ve belgeleri paylaşmaya yetkili olduğunuzu beyan etmiş olursunuz." }] },
    { id: "teklif", heading: "Teklifin Bağlayıcılığı", blocks: [{ type: "p", text: "Fotoğraf üzerinden verilen ön teklif bağlayıcı değildir; kesin rakam aracın yerinde incelenmesi ve belgelerin kontrolüyle netleşir." }] },
    { id: "odeme-devir", heading: "Devir ve Ödeme Düzeni", blocks: [{ type: "p", text: "Devir noterde gerçekleşir; ödeme devir işlemiyle eş zamanlı yapılır. Devirden önce sizden araç teslimi veya ödeme talep edilmez." }] },
    { id: "yasak", heading: "Yasak Fiiller", blocks: [{ type: "p", text: "Siteyi hukuka aykırı amaçlarla, sahte bilgiyle veya sistem güvenliğini zorlayacak şekilde kullanmak yasaktır." }] },
    { id: "fikri-mulkiyet", heading: "İçerik Hakları", blocks: [{ type: "p", text: "Sitedeki metin, görsel ve tasarımların tüm hakları saklıdır; izinsiz çoğaltılamaz." }] },
    { id: "sorumluluk", heading: "Sorumluluğun Sınırlandırılması", blocks: [{ type: "p", text: "İçerik bilgilendirme amaçlıdır; emredici hükümler saklı kalmak kaydıyla dolaylı zararlardan sorumluluk kabul edilmez. Tüketici haklarınız etkilenmez." }] },
    { id: "mucbir", heading: "Mücbir Sebepler", blocks: [{ type: "p", text: "Kontrolümüz dışındaki olaylar hizmetin aksamasına neden olabilir; bu hâllerde sorumluluk doğmaz." }] },
    { id: "degisiklik", heading: "Değişiklik Hakkı", blocks: [{ type: "p", text: "Koşullar güncellenebilir; sitede duyurulan son metin esas alınır." }] },
    { id: "iletisim", heading: "İletişim", blocks: [{ type: "p", text: `Koşullara ilişkin sorular için ${siteConfig.email} adresi kullanılabilir.` }] },
  ],
};

export const legalNoticeDoc: LegalDoc = {
  eyebrow: "İnternet Sitesi Bilgilendirmesi",
  title: "Yasal Uyarı",
  intro:
    "hasarliakdeniz.com'daki bilgilerin niteliği ve kullanımına dair genel uyarılar bu sayfada toplanmıştır.",
  lastUpdated: UPDATED,
  href: routes.legalNotice,
  breadcrumbLabel: "Yasal Uyarı",
  sections: [
    { id: "genel", heading: "Site İşleticisi", blocks: [{ type: "p", text: `Bu internet sitesi ${controller} tarafından işletilir ve buradaki uyarılar çerçevesinde kullanılır.` }] },
    { id: "icerik", heading: "Bilgilerin Niteliği", blocks: [{ type: "p", text: "Sitedeki içerikler genel bilgi verir; hukuki, mali ya da teknik danışmanlık niteliği taşımaz." }] },
    { id: "deger", heading: "Değerleme İfadeleri", blocks: [{ type: "p", text: "Sitede geçen fiyat ve değerleme ifadeleri tahminîdir; bağlayıcı teklif ancak aracın fiilen incelenmesiyle oluşur." }] },
    { id: "blog", heading: "Rehber İçerikler", blocks: [{ type: "p", text: "Blog ve rehber yazıları genel deneyim aktarımıdır; aracınıza özel karar almadan önce bizimle görüşmenizi öneririz." }] },
    { id: "gorseller", heading: "Görseller", blocks: [{ type: "p", text: "Sitede kullanılan kimi görseller temsilîdir; gerçek araç ve işlemleri birebir yansıtmayabilir." }] },
    { id: "dis-baglantilar", heading: "Dış Bağlantılar", blocks: [{ type: "p", text: "Yönlendirilen üçüncü taraf sitelerin içeriklerinden ilgili site sahipleri sorumludur." }] },
    { id: "dolandiricilik", heading: "Dolandırıcılığa Karşı Uyarı", blocks: [{ type: "p", text: "Bizim adımıza kapora, havale veya ön ödeme isteyen kişilere itibar etmeyin; devir tamamlanmadan sizden hiçbir ödeme talep etmeyiz. Yalnızca bu sitede yayımlanan iletişim kanalları resmîdir." }] },
    { id: "sorumluluk", heading: "Sorumluluk Sınırı", blocks: [{ type: "p", text: "Mevzuatın izin verdiği ölçüde, sitenin kullanımından doğabilecek dolaylı zararlar için sorumluluk üstlenilmez." }] },
    { id: "tuketici", heading: "Tüketicinin Korunması", blocks: [{ type: "p", text: "İlgili tüketici mevzuatından doğan haklarınız her koşulda saklıdır." }] },
    { id: "iletisim", heading: "İletişim", blocks: [{ type: "p", text: `Bu sayfayla ilgili sorular için ${siteConfig.email} adresine yazınız.` }] },
  ],
};
