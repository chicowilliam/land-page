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
        "group/cta inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-[0.9375rem] font-medium no-underline",
        "transition-[transform,background-color,color,filter] duration-[var(--press-dur)] ease-[var(--enter-ease)] active:scale-[0.985]",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:brightness-[1.08]"
          : "border border-foreground/25 bg-transparent text-foreground hover:border-foreground",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "transition-transform duration-[var(--hover-dur)] ease-[var(--enter-ease)]",
          arrow === "→"
            ? "group-hover/cta:translate-x-0.5"
            : "group-hover/cta:translate-y-0.5",
        )}
      >
        {arrow}
      </span>
    </a>
  );
}
