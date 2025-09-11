// src/app/(marketing)/kvkk/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/service/Breadcrumbs";
import StructuredData from "@/components/service/StructuredData";
import PrintButton from "@/components/common/PrintButton";
import { COMPANY } from "@/data/company";

const UPDATED = "11 Eylül 2025";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı KVKK kapsamında kişisel verilerin işlenmesi, saklanması, aktarımı ve haklarınız hakkında aydınlatma metni.",
  alternates: {
    canonical: COMPANY.siteUrl ? `${COMPANY.siteUrl}/kvkk` : undefined,
  },
  openGraph: {
    title: "KVKK Aydınlatma Metni — Hasarlı Akdeniz",
    description:
      "Kişisel verilerin işlenmesi, saklanması ve haklarınız hakkında şeffaf bilgilendirme.",
    url: COMPANY.siteUrl ? `${COMPANY.siteUrl}/kvkk` : undefined,
    siteName: "Hasarlı Akdeniz",
    type: "article",
  },
};

export default function KvkkPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "KVKK Aydınlatma Metni",
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: COMPANY.name },
    publisher: { "@type": "Organization", name: COMPANY.name },
  };

  const street = [COMPANY.address.line1, COMPANY.address.line2].filter(Boolean).join(", ");

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <Breadcrumbs items={[{ label: "Anasayfa", href: "/" }, { label: "KVKK Aydınlatma Metni" }]} />
      </div>

      <StructuredData id="ld-kvkk" data={orgLd} />

      <article className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
        <header className="not-prose border-b pb-4 mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: "#1e3a8a" }}>
            KVKK Aydınlatma Metni
          </h1>
          <p className="mt-2 text-sm text-slate-600">Son güncelleme: {UPDATED}</p>
          {/* Client-only print button */}
          <PrintButton />
        </header>

        <nav className="not-prose rounded-2xl border bg-slate-50 p-4 text-sm mb-8">
          <div className="font-semibold mb-2">İçindekiler</div>
          <ul className="grid sm:grid-cols-2 gap-1 list-disc pl-5">
            <li><a href="#veri-sorumlusu">1. Veri Sorumlusu</a></li>
            <li><a href="#isleme-amaclari">2. İşleme Amaçları</a></li>
            <li><a href="#kategori-hukuki-sebep">3. Veri Kategorileri & Hukuki Sebepler</a></li>
            <li><a href="#toplama-yontemleri">4. Toplama Yöntemleri</a></li>
            <li><a href="#aktarim">5. Aktarım</a></li>
            <li><a href="#saklama-sureleri">6. Saklama Süreleri</a></li>
            <li><a href="#haklariniz">7. Haklarınız</a></li>
            <li><a href="#basvuru-iletisim">8. Başvuru & İletişim</a></li>
          </ul>
        </nav>

        <section id="veri-sorumlusu">
          <h2>1. Veri Sorumlusu</h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“<strong>KVKK</strong>”) uyarınca kişisel verileriniz,
            veri sorumlusu <strong>{COMPANY.name}</strong> tarafından işlenmektedir.
          </p>
          <p>
            Adres: {street || "—"}<br />
            Telefon: {COMPANY.phoneDisplay || COMPANY.phoneTel}<br />
            E-posta: {COMPANY.email || "—"}
          </p>
        </section>

        <section id="isleme-amaclari">
          <h2>2. Kişisel Verilerin İşlenme Amaçları</h2>
          <ul>
            <li>Ön değerleme ve <strong>ön teklif</strong> çalışması yapmak, iletişime geçmek</li>
            <li>Satın alma sürecinde <strong>randevu/ekspertiz/çekici</strong> organizasyonu yapmak</li>
            <li>Satış/devre konu resmi işlemleri (<strong>noter işlemleri, ödeme</strong>) yürütmek</li>
            <li>Hukuki yükümlülüklerimizi yerine getirmek (muhasebe, denetim vb.)</li>
            <li>Olası uyuşmazlıklarda <strong>ispat ve talep/itiraz</strong> yönetimi</li>
            <li>Operasyonel kalite ve güvenliği sağlamak (sahtecilik, kötüye kullanım önleme)</li>
          </ul>
        </section>

        <section id="kategori-hukuki-sebep">
          <h2>3. Veri Kategorileri ve Hukuki Sebepler</h2>
          <table>
            <thead>
              <tr>
                <th>Veri Kategorisi</th>
                <th>Örnek Veriler</th>
                <th>Hukuki Sebep (KVKK m.5)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kimlik & İletişim</td>
                <td>Ad-soyad, telefon, şehir</td>
                <td>m.5/2-c (sözleşmenin kurulması/ifası), m.5/2-f (meşru menfaat)</td>
              </tr>
              <tr>
                <td>Araç Bilgisi</td>
                <td>Marka, model, yıl, hasar açıklaması</td>
                <td>m.5/2-c, m.5/2-f</td>
              </tr>
              <tr>
                <td>Görseller</td>
                <td>Araç fotoğrafları</td>
                <td>m.5/2-f; pazarlama yayınlarında <strong>açık rıza</strong></td>
              </tr>
              <tr>
                <td>Finansal</td>
                <td>Ödeme/IBAN (satış aşamasında)</td>
                <td>m.5/2-ç (hukuki yükümlülük), m.5/2-c</td>
              </tr>
              <tr>
                <td>İşlem Güvenliği</td>
                <td>IP, log, tarih/saati</td>
                <td>m.5/2-f (meşru menfaat)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-sm text-slate-600">
            Açık rıza yalnızca <strong>tanıtım/örnek vaka paylaşımı</strong> gibi zorunlu olmayan amaçlar için talep edilir.
          </p>
        </section>

        <section id="toplama-yontemleri">
          <h2>4. Toplama Yöntemleri</h2>
          <ul>
            <li>Web sitemizdeki formlar ve WhatsApp/telefon üzerinden ilettiğiniz bilgiler</li>
            <li>Ekspertiz/çekici sürecinde paylaşılan evrak ve görseller</li>
            <li>Noter ve ödeme sürecinde zorunlu belgeler</li>
          </ul>
        </section>

        <section id="aktarim">
          <h2>5. Aktarım</h2>
          <p>
            Kişisel verileriniz; <strong>noterler, bankalar/ödeme kuruluşları, lojistik/çekici firmaları,
            hukuk/muhasebe danışmanları</strong> ve bilgi teknolojileri hizmet sağlayıcılarına,
            <strong>işin gereği ve hukuki yükümlülükler</strong> kapsamında aktarılabilir.
          </p>
          <p>
            Sunucu/iletişim altyapısı sağlayıcılarımız yurt içi/yurt dışında bulunabilir. Yurt dışına aktarım gereken durumlarda,
            KVKK’ya uygun güvenlik ve sözleşmesel tedbirler uygulanır.
          </p>
        </section>

        <section id="saklama-sureleri">
          <h2>6. Saklama Süreleri</h2>
          <ul>
            <li>Ön teklif/iletişim kayıtları: <strong>2 yıl</strong></li>
            <li>Satış/noter/ödeme ve muhasebe evrakları: <strong>10 yıl</strong> (ilgili mevzuat gereği)</li>
            <li>Uyuşmazlık halinde dava/itiraz süreleri boyunca saklanabilir.</li>
          </ul>
        </section>

        <section id="haklariniz">
          <h2>7. KVKK m.11 Kapsamındaki Haklarınız</h2>
          <ul>
            <li>İşlenip işlenmediğini öğrenme, bilgi talep etme</li>
            <li>Amaç ve süreye uygun işlenip işlenmediğini öğrenme</li>
            <li>Yurt içi/yurt dışı aktarılan üçüncü kişileri öğrenme</li>
            <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
            <li>KVKK ve ilgili mevzuata aykırı işlenmişse silinmesini/yok edilmesini isteme</li>
            <li>Aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
            <li>Otomatik sistemler ile analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Zararın giderilmesini talep etme</li>
          </ul>
        </section>

        <section id="basvuru-iletisim">
          <h2>8. Başvuru & İletişim</h2>
          <p>
            Başvurularınızı; kimlik teyidinizi sağlayacak belgelerle birlikte
            <strong> {COMPANY.email || "—"} </strong> adresine e-posta ile veya posta yoluyla iletebilirsiniz.
            Başvurularınız KVKK’da öngörülen sürelerde sonuçlandırılır.
          </p>
          <p className="text-sm text-slate-600">
            Metin değişikliklerinde güncel sürüm web sitemizde yayınlanır.
          </p>
        </section>
      </article>
    </main>
  );
}
