"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  FORM_SUCCESS_LABEL,
  SECONDARY_CTA_LABEL,
  validateLeadCapture,
  whatsappHrefWithLeadName,
  type LeadFormField,
  type OfferId,
  type WhatsAppChannel,
} from "@/domain";
import { cn } from "@/lib/cn";

type LeadFormProps = {
  offerId: OfferId;
  channel: WhatsAppChannel;
};

type Status = "idle" | "submitting" | "success" | "failure";

export function LeadForm({ offerId, channel }: LeadFormProps) {
  const [errors, setErrors] = useState<Partial<Record<LeadFormField, string>>>(
    {},
  );
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);

  const busy = status === "submitting";
  const done = status === "success";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const whatsapp = String(data.get("whatsapp") ?? "");

    const nextErrors = validateLeadCapture({ offerId, name, whatsapp });
    setErrors(nextErrors);
    setFailure(null);

    if (nextErrors.name) {
      nameRef.current?.focus();
      return;
    }
    if (nextErrors.whatsapp) {
      whatsappRef.current?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const href = whatsappHrefWithLeadName(channel, name);
      setStatus("success");
      window.location.assign(href);
    } catch {
      setStatus("failure");
      setFailure(
        "Não abri o WhatsApp. Confira o número e tente de novo, ou chame pelo botão da página.",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4"
      noValidate
      aria-describedby={failure ? "lead-failure" : undefined}
    >
      <div className="flex flex-col gap-1.5" data-invalid={Boolean(errors.name)}>
        <label htmlFor="lead-name" className="text-sm font-medium">
          Nome
        </label>
        <input
          ref={nameRef}
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          spellCheck={false}
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "lead-name-error" : undefined}
          placeholder="Ana Souza…"
          className={cn(
            "min-h-11 rounded-md border border-border bg-card px-3 text-base text-foreground",
            errors.name && "border-destructive",
          )}
        />
        {errors.name ? (
          <p id="lead-name-error" className="text-sm text-destructive" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div
        className="flex flex-col gap-1.5"
        data-invalid={Boolean(errors.whatsapp)}
      >
        <label htmlFor="lead-whatsapp" className="text-sm font-medium">
          WhatsApp
        </label>
        <input
          ref={whatsappRef}
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          spellCheck={false}
          required
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : undefined}
          placeholder="11999998888…"
          className={cn(
            "min-h-11 rounded-md border border-border bg-card px-3 text-base text-foreground",
            errors.whatsapp && "border-destructive",
          )}
        />
        {errors.whatsapp ? (
          <p
            id="lead-whatsapp-error"
            className="text-sm text-destructive"
            role="alert"
          >
            {errors.whatsapp}
          </p>
        ) : null}
      </div>

      {failure ? (
        <p id="lead-failure" className="text-sm text-destructive" role="alert">
          {failure}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={busy || done}
        aria-busy={busy}
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-secondary px-5 py-3 text-base font-semibold text-secondary-foreground transition-transform duration-[var(--press-dur)] ease-[var(--enter-ease)] hover:bg-accent active:scale-[0.98] disabled:opacity-70"
      >
        {done ? FORM_SUCCESS_LABEL : SECONDARY_CTA_LABEL}
      </button>
    </form>
  );
}
