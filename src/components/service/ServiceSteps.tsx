// src/components/service/ServiceSteps.tsx
import { Phone, FileSearch, FileCheck2, Wallet } from "lucide-react";

type Step = {
  title: string;
  desc?: string;
  icon?: React.ReactNode;
};

export default function ServiceSteps({
  steps = DEFAULT_STEPS,
  title = "Süreç Nasıl İşliyor?",
}: {
  steps?: Step[];
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10" aria-labelledby="steps-title">
      <h2
        id="steps-title"
        className="text-xl md:text-2xl font-bold mb-4"
        style={{ color: "#1e3a8a" }}
      >
        {title}
      </h2>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
        {steps.map((s, i) => (
          <li key={i} className="relative">
            <article className="h-full rounded-2xl border bg-white p-4 hover:shadow-sm transition-shadow">
              {/* Number badge */}
              <span
                aria-hidden
                className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white text-sm font-bold text-[#1e3a8a] shadow"
              >
                {i + 1}
              </span>

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border">
                  {s.icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length]}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 leading-snug">{s.title}</h3>
                  {s.desc && <p className="mt-1 text-sm text-slate-600">{s.desc}</p>}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>

      {/* reassurance microcopy */}
      <p className="mt-3 text-xs text-slate-500">
        Belgeleriniz eksikse sorun değil—süreç boyunca adım adım yönlendiriyoruz.
      </p>
    </section>
  );
}

const DEFAULT_STEPS: Step[] = [
  {
    title: "Telefonla ön bilgi",
    desc: "Araç bilgilerinizi alın, sorularınızı yanıtlayalım.",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: "Yerinde/çekiciyle ekspertiz",
    desc: "Ücretsiz çekici ve hızlı kontrol ile değerlendirme.",
    icon: <FileSearch className="h-5 w-5" />,
  },
  {
    title: "Şeffaf teklif & sözleşme",
    desc: "Piyasa verilerine dayalı adil teklif ve resmi evrak.",
    icon: <FileCheck2 className="h-5 w-5" />,
  },
  {
    title: "Aynı gün ödeme & devir",
    desc: "EFT/havale ile ödeme, yasal devir işlemleri.",
    icon: <Wallet className="h-5 w-5" />,
  },
];

const DEFAULT_ICONS = [
  <Phone key="st1" className="h-5 w-5" />,
  <FileSearch key="st2" className="h-5 w-5" />,
  <FileCheck2 key="st3" className="h-5 w-5" />,
  <Wallet key="st4" className="h-5 w-5" />,
];
