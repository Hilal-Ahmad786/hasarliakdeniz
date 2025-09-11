import { Phone, Images, ClipboardCheck, Stamp, Truck } from "lucide-react";

// ---- EDIT THESE -------------------------------------------------------------
const PHONE_DISPLAY = "+90 X XXX XX XX";
const PHONE_TEL = "+90XXXXXXXXXX";
const WHATSAPP_URL = "https://wa.me/90XXXXXXXXXX";
// -----------------------------------------------------------------------------

export default function ProcessSteps() {
  const steps = [
    {
      id: 1,
      title: "Hemen Ara",
      desc: "Telefonla 1–2 dakikada yönlendirme. Süreç, ücretler ve gerekli evrakları net anlatıyoruz.",
      icon: <Phone className="h-5 w-5" />,
      meta: "Çağrı merkezi: {phone}",
    },
    {
      id: 2,
      title: "Ön Değerlendirme",
      desc: "WhatsApp’tan foto/konum ile ~2 saatte ballpark bilgi. Gizli ücret yok.",
      icon: <Images className="h-5 w-5" />,
      meta: "~2 saat ön bilgi",
    },
    {
      id: 3,
      title: "Yerinde Ekspertiz",
      desc: "Çekici ücretsiz. Uzmanımız aracı yerinde inceler ve fiyat netleşir.",
      icon: <Truck className="h-5 w-5" />,
      meta: "Çekici ÜCRETSİZ",
    },
    {
      id: 4,
      title: "Noter & Ödeme",
      desc: "Aynı gün / 24 saat içinde devir ve ödeme tamamlanır. Tüm evrak desteği bizden.",
      icon: <Stamp className="h-5 w-5" />,
      meta: "24 saatte alım",
    },
  ];

  return (
    <section id="process" aria-label="Araç alım süreci" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <header className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e3a8a" }}>
            Süreç Nasıl İşliyor?
          </h2>
          <p className="text-slate-600 mt-2">
            Şeffaf, hızlı ve telefon odaklı ilerliyoruz. Aşağıdaki 4 adımda tüm süreci tamamlıyoruz.
          </p>
        </header>

        {/* Timeline / Stepper */}
        <ol
          className="relative mt-8 grid gap-6 md:grid-cols-4"
          role="list"
          aria-label="Dört adımlı süreç"
        >
          {/* connector line (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200"
          />

            {steps.map((s) => (
            <li key={s.id} className="relative">
              {/* connector dots (desktop) */}
              <div
                aria-hidden
                className="hidden md:flex absolute -top-0.5 left-1/2 -translate-x-1/2 items-center justify-center h-3 w-3 rounded-full bg-white border border-slate-300"
              />

              <article className="rounded-2xl border bg-white p-5 shadow-sm/hover transition focus-within:ring-2 focus-within:ring-sky-200">
                {/* number + icon */}
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: "#eef2ff", color: "#1e3a8a" }}
                    aria-label={`Adım ${s.id}`}
                  >
                    {s.id}
                  </span>
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md"
                    style={{ background: "#eef2ff", color: "#1e3a8a" }}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                </div>

                <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>

                <div className="mt-3 inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium text-slate-700">
                  <ClipboardCheck className="mr-1.5 h-3.5 w-3.5 opacity-70" />
                  {s.meta.replace("{phone}", PHONE_DISPLAY)}
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* Call-first CTA bar */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold"
            style={{ background: "#ea580c" }}
            aria-label={`Hemen Ara: ${PHONE_DISPLAY}`}
          >
            <Phone className="h-5 w-5" />
            Hemen Ara
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold border"
            style={{ borderColor: "#1e3a8a", color: "#1e3a8a" }}
            aria-label="WhatsApp ile yazın"
          >
            <Images className="h-5 w-5" />
            WhatsApp’tan Foto Gönder
          </a>
          <span className="text-xs text-slate-500 self-center">
            Gizli ücret yok • Çekici ücretsiz • Tüm evrak desteği
          </span>
        </div>
      </div>
    </section>
  );
}
