import Link from "next/link";
import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Brand wordmark — drawn in code (no image asset): a sharp navy anchor badge
 * with a gold corner accent plus the stacked "Hasarlı Akdeniz" wordmark.
 * `surface` adapts text colors to dark or light backgrounds.
 */
export function Logo({
  surface = "dark",
  className,
  brandName = siteConfig.brandName,
}: {
  surface?: "dark" | "light";
  className?: string;
  brandName?: string;
}) {
  const [first, ...rest] = brandName.split(" ");
  const second = rest.join(" ") || "Akdeniz";
  return (
    <Link
      href="/"
      aria-label={`${brandName} ana sayfa`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-brand-800 text-white md:h-11 md:w-11">
        <Anchor size={21} strokeWidth={2.1} />
        <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-[3px] bg-gold-600" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[16px] font-bold uppercase tracking-[0.04em] md:text-[18px]",
            surface === "light" ? "text-white" : "text-ink",
          )}
        >
          {first}{" "}
          <span className={surface === "light" ? "text-gold-600" : "text-brand-700"}>
            {second}
          </span>
        </span>
        <span
          className={cn(
            "mt-1 text-[9.5px] font-semibold uppercase tracking-[0.22em]",
            surface === "light" ? "text-white/60" : "text-ink-muted",
          )}
        >
          Hasarlı Araç Alım Merkezi
        </span>
      </span>
    </Link>
  );
}
