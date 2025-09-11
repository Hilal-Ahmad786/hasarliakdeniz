"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DamageDiagram, { DamageArea } from "./DamageDiagram";
import QuoteEstimator from "./QuoteEstimator";

const currentYear = new Date().getFullYear();
const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  city: z.string().min(2),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.coerce.number().int().gte(1980).lte(currentYear),
  market: z.coerce.number().positive().optional().or(z.literal(NaN)).transform(v => (Number.isNaN(v) ? undefined : v)),
  desc: z.string().max(600).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "KVKK onayı gerekli" }) }),
});

type FormValues = z.infer<typeof schema>;

export default function QuoteForm() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema) });

  const year = watch("year");
  const market = watch("market") as number | undefined;

  const [areas, setAreas] = useState<DamageArea[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [fileErr, setFileErr] = useState<string | null>(null);

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files || []);
    const all = [...files, ...picked].slice(0, 6);
    const bad = all.find(f => !f.type.startsWith("image/") || f.size > 10 * 1024 * 1024);
    setFileErr(bad ? "Yalnızca 10MB altı görüntü dosyaları (en fazla 6)" : null);
    setFiles(all);
  }
  function removeAt(i: number) { setFiles(prev => prev.filter((_, idx) => idx !== i)); }

  async function onSubmit(values: FormValues) {
    if (files.length > 6) { setFileErr("En fazla 6 fotoğraf."); return; }
    const data = new FormData();
    Object.entries(values).forEach(([k, v]) => v != null && data.append(k, String(v)));
    data.set("desc", values.desc || "");
    data.append("areas", JSON.stringify(areas));
    files.forEach(f => data.append("photos", f, f.name));

    const res = await fetch("/api/quote", { method: "POST", body: data });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(json?.error || "Gönderilemedi");
    alert("Bilgileriniz alındı. ~2 saat içinde ön teklif ile döneceğiz.");
    setFiles([]); setAreas([]);
  }

  const previews = useMemo(() => files.map(f => URL.createObjectURL(f)), [files]);
  useEffect(() => () => previews.forEach(u => URL.revokeObjectURL(u)), [previews]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="quote">
      <div className="grid md:grid-cols-3 gap-3">
        <input {...register("name")} placeholder="Ad Soyad" className={`input ${errors.name?"border-red-400":""}`} />
        <input {...register("phone")} placeholder="Telefon" inputMode="tel" className={`input ${errors.phone?"border-red-400":""}`} />
        <input {...register("city")} placeholder="Şehir" className={`input ${errors.city?"border-red-400":""}`} />
        <input {...register("make")} placeholder="Marka" className={`input ${errors.make?"border-red-400":""}`} />
        <input {...register("model")} placeholder="Model" className={`input ${errors.model?"border-red-400":""}`} />
        <input {...register("year", { valueAsNumber: true })} placeholder="Yıl" type="number" min={1980} max={currentYear} className={`input ${errors.year?"border-red-400":""}`} />
      </div>

      <div className="grid gap-3">
        <label className="text-sm font-medium text-slate-700">Hasarlı bölgeler</label>
        <DamageDiagram value={areas} onChange={setAreas} />
      </div>

      <textarea {...register("desc")} rows={3} placeholder="Hasarı kısaca anlatın..." className="input" />

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Fotoğraflar (en fazla 6)</label>
          <input onChange={onPick} type="file" accept="image/*" multiple className="block w-full text-sm" />
          {fileErr && <p className="text-xs text-red-600 mt-1">{fileErr}</p>}
          {files.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {previews.map((src, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden border">
                  <img src={src} alt={`upload-${i}`} className="h-24 w-full object-cover" />
                  <button type="button" onClick={() => removeAt(i)} className="absolute top-1 right-1 text-xs bg-white/90 rounded px-2 py-0.5 border">
                    Sil
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Piyasa Değeri (opsiyonel)</label>
          <input {...register("market", { valueAsNumber: true })} placeholder="Örn: 550000" inputMode="numeric" className="input" />
          <QuoteEstimator year={year} areas={areas} market={market} />
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-700">
        <input type="checkbox" {...register("consent")} className="mt-1" />
        <span>KVKK Aydınlatma Metnini okudum ve kişisel verilerimin ön değerlendirme için işlenmesine onay veriyorum.</span>
      </label>

      <div className="flex flex-wrap gap-3">
        <button disabled={isSubmitting} className="rounded-xl px-5 py-3 text-white font-semibold" style={{background:"#059669"}}>
          {isSubmitting ? "Gönderiliyor..." : "Hızlı Teklif Al"}
        </button>
        <a href="https://wa.me/90XXXXXXXXXX" className="rounded-xl px-5 py-3 font-semibold text-white" style={{background:"#ea580c"}}>
          WhatsApp’tan Sor
        </a>
      </div>
    </form>
  );
}
