import { MapPin, BadgeCheck, ShieldCheck, Landmark } from "lucide-react";

const items = [
  { icon: MapPin, label: "Akdeniz Bölgesi geneli hizmet", sub: "Bulunduğunuz yerden başvuru" },
  { icon: BadgeCheck, label: "Ücretsiz değerlendirme", sub: "Teklif almak bağlayıcı değil" },
  { icon: ShieldCheck, label: "Güvenli ödeme", sub: "Şeffaf ve kayıtlı süreç" },
  { icon: Landmark, label: "Noter destekli işlem", sub: "Resmi devir planlaması" },
];

/** Structural navy assurance band directly under the dark hero. */
export function TrustStrip() {
  return (
    <div className="border-y border-brand-800 bg-brand-900 text-white">
      <div className="container-page grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 px-2 py-5 lg:px-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[6px] bg-white/8 text-gold-600">
              <Icon size={22} strokeWidth={1.9} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold">{label}</span>
              <span className="text-xs text-white/55">{sub}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
