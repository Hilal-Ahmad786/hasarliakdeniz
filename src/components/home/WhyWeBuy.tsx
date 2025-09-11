export default function WhyWeBuy() {
  const reasons = [
    { t: "Parça", d: "Hasarlı araçlarınız kullanılabilir parçalara ayrılır, böylece değer oluşturur." },
    { t: "İhracat", d: "Bazı araçlar yurt dışı pazarlarda değerlendirilebilir." },
    { t: "Eğitim", d: "Ekspertiz/mesleki eğitim için araçlar kullanılabilir." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="rounded-2xl border bg-white p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Neden Hasarlı Araç Satın Alıyoruz?</h2>
        <p className="text-slate-600 mt-2 max-w-3xl">
          Model/yıl/hasar durumunuza göre değer yaratmanın üç yolu var. Bu şeffaflık sayesinde, teklifimizin mantığını anlayabilirsiniz.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {reasons.map((r) => (
            <div key={r.t} className="rounded-xl border p-4 bg-white">
              <div className="font-semibold text-slate-900">{r.t}</div>
              <p className="text-slate-600 text-sm mt-1">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-slate-700">
          <strong>Sonuç:</strong> Oluşan gerçek değer nedeniyle gizli ücret olmadan adil teklif.
        </div>
      </div>
    </section>
  );
}
