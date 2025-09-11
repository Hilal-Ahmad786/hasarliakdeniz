// src/components/service/Highlights.tsx
import type { ReactNode } from "react";
import { ShieldCheck, Truck, BadgeCheck, Wallet } from "lucide-react";

type HighlightItem =
  | string
  | {
      text: string;
      icon?: ReactNode;
    };

export default function Highlights({
  items,
  columns = 4,
  title = "Avantajlarımız",
}: {
  items: HighlightItem[];
  columns?: 2 | 3 | 4;
  title?: string;
}) {
  const resolved = items.map((it, i) =>
    typeof it === "string"
      ? { text: it, icon: defaultIcon(i) }
      : { text: it.text, icon: it.icon ?? defaultIcon(i) }
  );

  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-8"
      aria-labelledby="highlights-title"
    >
      <h2
        id="highlights-title"
        className="text-xl md:text-2xl font-bold mb-4"
        style={{ color: "#1e3a8a" }}
      >
        {title}
      </h2>

      <ul className={`grid gap-4 ${gridCols}`} role="list">
        {resolved.map((h, i) => (
          <li key={i}>
            <article
              className="group h-full rounded-2xl border bg-white p-4 hover:shadow-sm transition-shadow"
              aria-label={plainText(h.text)}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border text-slate-700">
                  <span className="group-hover:scale-105 transition-transform">
                    {h.icon}
                  </span>
                </span>
                <p className="text-slate-800 leading-snug">{h.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* helpers */
function defaultIcon(i: number) {
  const icons = [
    <ShieldCheck key="ic1" className="h-[18px] w-[18px]" />,
    <Truck key="ic2" className="h-[18px] w-[18px]" />,
    <BadgeCheck key="ic3" className="h-[18px] w-[18px]" />,
    <Wallet key="ic4" className="h-[18px] w-[18px]" />,
  ];
  return icons[i % icons.length];
}

function plainText(s: string) {
  return s.replace(/<[^>]*>/g, "");
}
