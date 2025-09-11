"use client";
import { useEffect, useState } from "react";
export default function StickyCallBar() {
  const [show, setShow] = useState(false);
  useEffect(() => { const on = () => setShow(window.scrollY > 300); on(); window.addEventListener("scroll", on); return () => window.removeEventListener("scroll", on); }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="mx-auto max-w-7xl px-4 pb-4">
        <div className="rounded-2xl bg-white shadow-card border flex items-center justify-between p-3">
          <div>
            <div className="text-slate-900 font-semibold">Hemen Bizi Arayın</div>
            <div className="text-slate-600 text-xs">Telefonla hızlı yönlendirme</div>
          </div>
          <a href="tel:+90XXXXXXXXXX" className="rounded-xl px-4 py-2 text-white font-semibold" style={{ background: "#ea580c" }}>
            Ara
          </a>
        </div>
      </div>
    </div>
  );
}
