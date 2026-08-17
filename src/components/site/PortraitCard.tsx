"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ActionLink } from "@/components/site/ActionLink";
import { cn } from "@/lib/cn";
import { whatsappHref, type Maker, type WhatsAppChannel } from "@/domain";

type PortraitCardProps = {
  maker: Maker;
  channel?: WhatsAppChannel;
  size?: "hero" | "about";
};

export function PortraitCard({
  maker,
  channel,
  size = "hero",
}: PortraitCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    }
    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "portrait-card group/card w-full text-left",
          size === "about" && "max-w-[22rem]",
        )}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 border-b border-border px-3 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="status-dot" />
          </span>
          <span className="readout truncate">{maker.name}</span>
        </span>

        <span className="relative block aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={maker.photo.src}
            alt={maker.photo.alt}
            fill
            priority={size === "hero"}
            quality={90}
            sizes={
              size === "hero"
                ? "(max-width: 1024px) 100vw, 32rem"
                : "(max-width: 1024px) 22rem, 22rem"
            }
            className="portrait-photo object-cover object-[center_18%]"
          />
        </span>

        <span className="flex items-center justify-between gap-3 px-3 py-3">
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-[0.9375rem] font-medium" translate="no">
              {maker.name}
            </span>
            <span className="readout truncate">{maker.location}</span>
          </span>
          <span className="readout shrink-0 text-primary">abrir</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="portrait-modal mx-auto w-[min(100%-1.5rem,28rem)] rounded-xl border border-border bg-card p-0 text-foreground shadow-none"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            setOpen(false);
          }
        }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <p id={titleId} className="readout">
            retrato
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-lg leading-none text-muted-foreground transition-colors duration-[var(--hover-dur)] hover:text-foreground"
            aria-label="Fechar retrato"
          >
            ×
          </button>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={maker.photo.src}
            alt={maker.photo.alt}
            fill
            quality={90}
            sizes="28rem"
            className="object-cover object-[center_18%]"
          />
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div>
            <p className="text-lg font-semibold" translate="no">
              {maker.name}
            </p>
            <p className="readout mt-1">
              {maker.role} · {maker.location}
            </p>
          </div>
          {channel ? (
            <ActionLink href={whatsappHref(channel)} external className="w-full">
              Conversar no WhatsApp
            </ActionLink>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
