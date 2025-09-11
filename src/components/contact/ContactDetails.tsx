// src/components/contact/ContactDetails.tsx
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/data/company";
import { formatPhoneDisplayTR } from "@/lib/links";

export default function ContactDetails() {
  const { phoneTel, phoneDisplay, email, address, hours, serviceArea } = COMPANY;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1e3a8a" }}>
            İletişim Bilgileri
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-[#ea580c] mt-0.5" />
              <div>
                <div className="font-semibold">Telefon</div>
                <a href={`tel:${phoneTel}`} className="text-[#1e3a8a] font-medium">
                  {phoneDisplay || formatPhoneDisplayTR(phoneTel)}
                </a>
              </div>
            </li>
            {email && (
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#1e3a8a] mt-0.5" />
                <div>
                  <div className="font-semibold">E-posta</div>
                  <a href={`mailto:${email}`} className="text-[#1e3a8a] font-medium">
                    {email}
                  </a>
                </div>
              </li>
            )}
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#059669] mt-0.5" />
              <div>
                <div className="font-semibold">Adres</div>
                <div>{address.line1}</div>
                <div className="text-slate-500">{address.line2}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-slate-500 mt-0.5" />
              <div>
                <div className="font-semibold">Çalışma Saatleri</div>
                <ul className="mt-1">
                  {hours.map((h, i) => (
                    <li key={i} className="text-slate-600">
                      {h.day}: {h.open}–{h.close}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <div className="mt-4 rounded-xl border bg-slate-50 p-4 text-xs text-slate-600">
            <div className="font-semibold mb-1">Hizmet Bölgeleri</div>
            <p>{serviceArea.join(", ")}</p>
          </div>
        </div>

        {/* Map (optional) */}
        {address.mapsEmbedSrc ? (
          <div className="rounded-2xl overflow-hidden border">
            <iframe
              src={address.mapsEmbedSrc}
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Harita"
            />
          </div>
        ) : (
          <div className="rounded-2xl border bg-slate-50 p-6 text-sm text-slate-600">
            Harita yakında eklenecek. <span className="text-slate-500">Adres bilgisini üstte bulabilirsiniz.</span>
          </div>
        )}
      </div>
    </section>
  );
}
