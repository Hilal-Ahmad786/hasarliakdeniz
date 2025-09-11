"use client";

export default function PrintButton({
  className = "mt-3 inline-flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm",
  label = "Yazdır / PDF",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={className}
      aria-label="Sayfayı yazdır"
    >
      {label}
    </button>
  );
}
