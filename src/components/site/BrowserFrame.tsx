import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BrowserFrameProps = {
  address: string;
  alt: string;
  shadow?: "ink" | "cobalt" | "none";
  badge?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Moldura de navegador construída em HTML/CSS para apresentar prévias
 * ilustrativas de projetos que ainda não têm material público.
 */
export function BrowserFrame({
  address,
  alt,
  shadow = "ink",
  badge = true,
  className,
  children,
}: BrowserFrameProps) {
  return (
    <figure
      className={cn(
        "border-2 border-ink bg-paper",
        shadow === "ink" && "hard-shadow",
        shadow === "cobalt" && "hard-shadow-cobalt",
        className,
      )}
    >
      <div
        className="flex items-center gap-2 border-b-2 border-ink bg-sand px-2.5 py-1.5"
        aria-hidden="true"
      >
        <span className="flex gap-1">
          <span className="size-2 border border-ink bg-paper" />
          <span className="size-2 border border-ink bg-paper" />
          <span className="size-2 border border-ink bg-cobalt" />
        </span>
        <span className="tag-mono min-w-0 flex-1 truncate border border-ink/60 bg-paper px-2 py-0.5 text-[0.58rem] normal-case tracking-[0.06em] text-ink-soft">
          {address}
        </span>
      </div>
      <div className="relative" aria-hidden="true">
        {children}
        {badge ? (
          <span className="tag-mono absolute right-2 top-2 bg-ink px-1.5 py-1 text-[0.55rem] text-paper">
            Em desenvolvimento
          </span>
        ) : null}
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
