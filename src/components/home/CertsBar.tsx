export default function CertsBar() {
  const items = [
    { t: "MERSİS", d: "XXXXXXXXXXXXXX", icon: "🏢" },
    { t: "Vergi No", d: "XXXXXXXXXX", icon: "🧾" },
    { t: "Google Reviews", d: "⭐ 4.9 / 5", icon: "⭐" },
    { t: "TSE (varsa)", d: "Hizmet Yeterlilik", icon: "✅" },
  ];
  return (
    <section aria-label="Kurumsal doğrulamalar" className="bg-slate-50 border-y">
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((x) => (
          <div key={x.t} className="flex items-center gap-3">
            <div className="text-xl">{x.icon}</div>
            <div className="text-sm">
              <div className="font-semibold text-slate-900">{x.t}</div>
              <div className="text-slate-600">{x.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
