import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({
  items,
  collapseMobile = true,
  homeLabel = "Anasayfa",
}: {
  items: Crumb[];
  collapseMobile?: boolean;
  homeLabel?: string;
}) {
  // Guard empty
  if (!items?.length) return null;

  // If the first crumb isn’t home, make it look like one
  const normalized: Crumb[] = items.map((c, i) =>
    i === 0 && c.label.toLowerCase() === "anasayfa" ? { ...c, label: homeLabel } : c
  );

  // Collapse on small screens if long
  const shouldCollapse = collapseMobile && normalized.length > 3;
  const mobileView: (Crumb | "ellipsis")[] = shouldCollapse
    ? [normalized[0], "ellipsis", normalized[normalized.length - 1]]
    : normalized;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol
        className="flex flex-wrap items-center gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {mobileView.map((item, i) => {
          if (item === "ellipsis") {
            return (
              <li key="ellipsis" aria-hidden className="mx-1 text-slate-400 select-none">
                …
              </li>
            );
          }

          // Position for SEO: if collapsed, we only mark visible ListItems (1 and n)
          const position =
            shouldCollapse
              ? i === 0
                ? 1
                : normalized.length // last visible is the actual last position
              : i + 1;

          const isLast =
            (!shouldCollapse && i === normalized.length - 1) ||
            (shouldCollapse && i === mobileView.length - 1);

          return (
            <li
              key={`${item.label}-${i}`}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-slate-900"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-slate-900" itemProp="name">
                  {item.label}
                </span>
              )}

              {/* meta position for SEO */}
              <meta itemProp="position" content={String(position)} />

              {!isLast && (
                <ChevronRight
                  aria-hidden
                  className="h-4 w-4 text-slate-300 mx-0.5"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
