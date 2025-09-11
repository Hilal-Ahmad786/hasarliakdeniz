type T = { name: string; city: string; text: string; img?: string };
export default function Testimonials() {
  const items: T[] = [
    { name: "Serkan Y.", city: "Antalya", text: "Kaza sonrası günlerce uğraşmadım. Aynı gün noter ve ödeme.", img: "/gallery/t1.jpg" },
    { name: "Selin K.", city: "Adana",  text: "Süreç baştan sona şeffaf. WhatsApp'tan sürekli bilgilendirme.", img: "/gallery/t2.jpg" },
    { name: "M. Emin",  city: "Gaziantep", text: "Gizli ücret yok, çekici ücretsiz. Tavsiye ederim.", img: "/gallery/t3.jpg" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Müşterilerimiz Ne Diyor?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure key={i} className="rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
                {t.img ? <img src={t.img} alt={t.name} className="h-full w-full object-cover" /> : null}
              </div>
              <figcaption className="text-sm">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-slate-600">{t.city}</div>
              </figcaption>
            </div>
            <blockquote className="text-slate-700 mt-4">“{t.text}”</blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
