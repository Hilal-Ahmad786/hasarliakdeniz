export function buildWhatsAppLink(phoneE164: string, message: string) {
    const digits = phoneE164.replace(/[^\d]/g, ""); // keep digits only
    const base = `https://wa.me/${digits}`;
    const text = encodeURIComponent(message);
    return `${base}?text=${text}`;
  }
  
  export function formatPhoneDisplayTR(phoneE164: string) {
    // accepts 0 (536) 929 86 06XX -> +90 XXX XXX XX XX (best-effort)
    const d = phoneE164.replace(/[^\d+]/g, "");
    if (!d.startsWith("+90")) return phoneE164;
    const rest = d.slice(3);
    if (rest.length < 10) return phoneE164;
    return `+90 ${rest.slice(0,3)} ${rest.slice(3,6)} ${rest.slice(6,8)} ${rest.slice(8,10)}`;
  }
  