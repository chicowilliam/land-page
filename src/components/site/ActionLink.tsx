import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  arrow?: "→" | "↓";
  external?: boolean;
  className?: string;
};

export function ActionLink({
  href,
  children,
  variant = "solid",
  arrow = "→",
  external = false,
  className,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/cta tag-mono inline-flex min-h-12 items-center justify-center gap-3 px-7 py-3.5 text-[0.78rem] no-underline transition-colors duration-[var(--hover-dur)] ease-[var(--ease-out)]",
        variant === "solid"
          ? "bg-ink text-paper hover:bg-cobalt"
          : "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "transition-transform duration-[var(--hover-dur)] ease-[var(--ease-out)]",
          arrow === "→" ? "group-hover/cta:translate-x-1" : "group-hover/cta:translate-y-0.5",
        )}
      >
        {arrow}
      </span>
    </a>
  );
}
