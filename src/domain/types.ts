/**
 * Contrato da Oferta. Sem React, sem copy solta, sem detalhes de UI.
 * Componentes consomem estes tipos; não os reinventam.
 */

export type OfferId = string & { readonly __brand: "OfferId" };
export type CaseId = string & { readonly __brand: "CaseId" };
export type LeadId = string & { readonly __brand: "LeadId" };
export type ProofId = string & { readonly __brand: "ProofId" };
export type ObjectionId = string & { readonly __brand: "ObjectionId" };
export type BenefitId = string & { readonly __brand: "BenefitId" };

export type Offer = {
  id: OfferId;
  maker: Maker;
  promise: PromiseCopy;
  audience: Audience;
  visual: HeroVisual;
  pain: Pain;
  proofs: Proof[];
  cases: Case[];
  benefits: Benefit[];
  steps: ProcessStep[];
  objections: Objection[];
  guarantee: Guarantee;
  capacity: Capacity;
  contact: Contact;
};

export type Maker = {
  name: string;
  photo: { src: string; alt: string };
};

export type PromiseCopy = {
  result: string;
  howOrForWhom: string;
};

export type Audience = {
  who: string;
  feltPain: string;
};

export type HeroVisual =
  | { type: "PHOTO"; src: string; alt: string }
  | { type: "MOCKUP"; src: string; alt: string; caseId?: CaseId }
  | { type: "VIDEO"; src: string; poster: string; alt: string };

export type Pain = {
  problem: string;
  agitation: string;
  solution: string;
};

export type Proof =
  | {
      id: ProofId;
      type: "TESTIMONIAL";
      quote: string;
      author: string;
      role?: string;
      result?: string;
    }
  | { id: ProofId; type: "METRIC"; value: string; label: string }
  | { id: ProofId; type: "LOGO"; name: string; src: string; alt: string };

export type Case = {
  id: CaseId;
  name: string;
  client: string;
  before: string;
  after: string;
  result: string;
  visual: { src: string; alt: string };
};

export type Benefit = {
  id: BenefitId;
  outcome: string;
  mechanism?: string;
};

export type ProcessStep = {
  order: 1 | 2 | 3 | 4;
  name: string;
  visitorGets: string;
};

export type Objection = {
  id: ObjectionId;
  hesitation: string;
  answer: string;
};

export type Guarantee = {
  commitment: string;
  covers: string;
};

export type Capacity = {
  yearMonth: `${number}-${number}`;
  slotsTotal: number;
  slotsTaken: number;
};

export type Contact = {
  channels: [WhatsAppChannel, ...ContactChannel[]];
};

export type ContactChannel = WhatsAppChannel | FormChannel;

export type WhatsAppChannel = {
  type: "WHATSAPP";
  role: "PRIMARY";
  phoneE164: string;
  prefilledMessage: string;
};

export type FormChannel = {
  type: "FORM";
  role: "SECONDARY";
  fields: LeadFormField[];
};

export type LeadFormField = "name" | "whatsapp";

export type LeadCaptureInput = {
  offerId: OfferId;
  name: string;
  whatsapp: string;
  source?: string;
};

export type Lead = {
  id: LeadId;
  offerId: OfferId;
  capturedAt: string;
  channel: "WHATSAPP" | "FORM";
  name?: string;
  whatsapp?: string;
};

export type LeadCaptureResult =
  | { type: "REDIRECT_WHATSAPP"; href: string }
  | { type: "LEAD_CREATED"; lead: Lead }
  | { type: "VALIDATION_ERROR"; fields: Partial<Record<LeadFormField, string>> }
  | { type: "FAILURE"; message: string };

/** Ordem dos beats de conversão na página. CTA primário vive em HERO, CLOSE e mais um ponto após PROVA ou CASES. */
export type PageBeat =
  | "HERO"
  | "PAIN"
  | "PROOF"
  | "CASES"
  | "BENEFITS"
  | "PROCESS"
  | "OBJECTIONS"
  | "GUARANTEE"
  | "CAPACITY"
  | "CLOSE"
  | "FOOTER";

export const PAGE_BEATS: PageBeat[] = [
  "HERO",
  "PAIN",
  "PROOF",
  "CASES",
  "BENEFITS",
  "PROCESS",
  "OBJECTIONS",
  "GUARANTEE",
  "CAPACITY",
  "CLOSE",
  "FOOTER",
];
