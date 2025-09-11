import { Clock, Stamp, Car, Star } from "lucide-react";

export default function StatBar() {
  const stats = [
    {
      icon: <Clock className="h-5 w-5" aria-hidden />,
      k: "~2 saat",
      v: "Ön Bilgi",
      sub: "Yoğunluğa göre",
      title: "Telefon & foto ile hızlı ön bilgilendirme",
    },
    {
      icon: <Stamp className="h-5 w-5" aria-hidden />,
      k: "24 saat",
      v: "Alım & Noter",
      sub: "Aynı gün ödeme",
      title: "Yerinde/çekici ekspertiz sonrası noter işlemleri",
    },
    {
      icon: <Car className="h-5 w-5" aria-hidden />,
      k: "2.400+",
      v: "Satın Alma",
      sub: "Bölge geneli",
      title: "Akdeniz odaklı geçmiş işlemler",
    },
    {
      icon: <Star className="h-5 w-5" aria-hidden />,
      k: "4.9/5",
      v: "Memnuniyet",
      sub: "Google",
      title: "Gerçek müşteri yorumları",
    },
  ];

  return (
    <section aria-label="Hız & güven istatistikleri" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s) => (
            <div
              key={s.v}
              className="group rounded-2xl border bg-white p-4 md:p-5 shadow-sm/hover transition"
              title={s.title}
            >
              <div className="flex items-center gap-2 text-slate-700">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-md"
                  style={{ background: "#eef2ff", color: "#1e3a8a" }}
                  aria-hidden
                >
                  {s.icon}
                </div>
                <div className="text-xs text-slate-500">{s.sub}</div>
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <div
                  className="text-2xl md:text-3xl font-extrabold tracking-tight tabular-nums"
                  style={{ color: "#3b82f6" }}
                  aria-label={s.k}
                >
                  {s.k}
                </div>
                <div className="font-semibold text-slate-900">{s.v}</div>
              </div>

              {/* subtle underline accent on hover for polish */}
              <div className="mt-3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
