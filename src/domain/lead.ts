import type { LeadCaptureInput, LeadFormField } from "./types";

const WHATSAPP_DIGITS = /^\d{10,13}$/;

export function validateLeadCapture(
  input: LeadCaptureInput,
): Partial<Record<LeadFormField, string>> {
  const fields: Partial<Record<LeadFormField, string>> = {};

  if (input.name.trim().length < 2) {
    fields.name = "Escreva seu nome para eu saber com quem estou falando.";
  }

  const digits = input.whatsapp.replace(/\D/g, "");
  if (!WHATSAPP_DIGITS.test(digits)) {
    fields.whatsapp =
      "Digite um WhatsApp com DDD, só números. Exemplo: 11999998888.";
  }

  return fields;
}
