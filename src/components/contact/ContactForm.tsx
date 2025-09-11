// src/components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Ad Soyad gerekli"),
  phone: z.string().min(10, "Telefon gerekli"),
  city: z.string().min(2, "Şehir gerekli"),
  message: z.string().max(600).optional().or(z.literal("")),
  consent: z.boolean().refine((v) => v === true, { message: "KVKK onayı gerekli" }),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormValues>({ resolver: zodResolver(schema) });
  const [ok, setOk] = useState<string | null>(null);

  async function onSubmit(values: FormValues) {
    const data = new FormData();
    data.set("name", values.name);
    data.set("phone", values.phone);
    data.set("city", values.city);
    data.set("desc", values.message || "");
    data.set("source", "contact-page");

    // Reuse existing /api/quote endpoint (handles generic leads)
    const res = await fetch("/api/quote", { method: "POST", body: data });
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      throw new Error(json?.error || "Gönderilemedi");
    }
    setOk("Bilgileriniz alındı. Kısa süre içinde dönüş yapacağız.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border bg-white p-6">
      <h2 className="text-xl font-bold mb-4" style={{ color: "#1e3a8a" }}>
        Hızlı İletişim Formu
      </h2>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <input
            {...register("name")}
            placeholder="Ad Soyad"
            className={`w-full rounded-xl border px-3 py-2 ${errors.name ? "border-red-400" : ""}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register("phone")}
            placeholder="Telefon"
            inputMode="tel"
            className={`w-full rounded-xl border px-3 py-2 ${errors.phone ? "border-red-400" : ""}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div className="md:col-span-2">
          <input
            {...register("city")}
            placeholder="Şehir"
            className={`w-full rounded-xl border px-3 py-2 ${errors.city ? "border-red-400" : ""}`}
          />
          {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
        </div>
        <div className="md:col-span-2">
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Kısaca notunuz (opsiyonel)…"
            className="w-full rounded-xl border px-3 py-2"
          />
        </div>
      </div>

      <label className="mt-3 flex items-start gap-2 text-sm text-slate-700">
  <input type="checkbox" {...register("consent")} className="mt-1" />
  <span>
    <a href="/kvkk" className="text-[#1e3a8a] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
      KVKK Aydınlatma Metni
    </a>
    ’ni okudum ve kişisel verilerimin ön değerlendirme için işlenmesine onay veriyorum.
  </span>
</label>


      <div className="mt-4 flex gap-3">
        <button
          disabled={isSubmitting}
          className="rounded-xl px-5 py-3 text-white font-semibold"
          style={{ background: "#1e3a8a" }}
        >
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </button>
        {ok && <p className="text-sm text-emerald-600 self-center">{ok}</p>}
      </div>
    </form>
  );
}
