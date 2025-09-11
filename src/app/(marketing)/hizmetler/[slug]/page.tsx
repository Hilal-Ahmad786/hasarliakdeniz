const SERVICES: Record<string, {title:string; bullets:string[]}> = {
  "hasarli-arac-alimi": { title:"Hasarlı Araç Alımı", bullets:["Yerinde/çekici ekspertiz","Anında ödeme","Gizli ücret yok"] },
  "kazali-arac-alimi":  { title:"Kazalı Araç Alımı", bullets:["Foto + hızlı değerlendirme","2 saatte ön teklif","24 saatte devir"] },
  "pert-arac-alimi":    { title:"Pert Araç Alımı",   bullets:["Parça/ihracat değerlendirme","Adil fiyatlandırma","Tüm evrak desteği"] },
  "motor-arizali-arac": { title:"Motor Arızalı Araç", bullets:["Motor hasarı kabul","Uzman görüş","Hızlı alım"] },
  "su-sele-hasarli":    { title:"Su/Sele Hasarlı Araç", bullets:["Elektrik/şase kontrol","Şeffaf fiyat","Çekici ücretsiz"] },
};
export async function generateStaticParams(){ return Object.keys(SERVICES).map(slug=>({slug})); }
export default function ServicePage({params}:{params:{slug:string}}){
  const s = SERVICES[params.slug]; if(!s) return <main className="p-6">Bulunamadı</main>;
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold" style={{color:"#1e3a8a"}}>{s.title}</h1>
      <ul className="mt-6 grid md:grid-cols-3 gap-4">
        {s.bullets.map((b,i)=>(<li key={i} className="rounded-2xl border bg-white p-5">{b}</li>))}
      </ul>
      <div className="mt-8">
        <a href="/#quote" className="rounded-xl px-5 py-3 text-white font-semibold" style={{background:"#059669"}}>Hızlı Teklif Al</a>
      </div>
    </main>
  );
}
