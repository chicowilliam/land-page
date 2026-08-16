export type {
  Audience,
  Benefit,
  BenefitId,
  Capacity,
  Case,
  CaseId,
  Contact,
  ContactChannel,
  FormChannel,
  Guarantee,
  HeroVisual,
  Lead,
  LeadCaptureInput,
  LeadCaptureResult,
  LeadFormField,
  LeadId,
  Maker,
  Objection,
  ObjectionId,
  Offer,
  OfferId,
  PageBeat,
  Pain,
  ProcessStep,
  PromiseCopy,
  Proof,
  ProofId,
  WhatsAppChannel,
} from "./types";

export { PAGE_BEATS } from "./types";
export { isOfferOpen, remainingSlots } from "./capacity";
export {
  asBenefitId,
  asCaseId,
  asLeadId,
  asObjectionId,
  asOfferId,
  asProofId,
} from "./ids";
export { validateLeadCapture } from "./lead";
export {
  primaryWhatsApp,
  whatsappHref,
  whatsappHrefWithLeadName,
} from "./whatsapp";
export { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL, FORM_SUCCESS_LABEL } from "./verbs";
