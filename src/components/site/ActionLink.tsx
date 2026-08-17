import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "cobalt" | "outline";
  external?: boolean;
  className?: string;
};

export function ActionLink({
  href,
  children,
  variant = "cobalt",
  external = false,
  className,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "btn-press tag-mono hard-shadow inline-flex min-h-11 items-center justify-center gap-3 border-2 border-ink px-6 py-3 text-[0.78rem] no-underline",
        variant === "cobalt" ? "bg-cobalt text-paper" : "bg-paper text-ink",
        className,
      )}
    >
      {children}
    </a>
  );
}
