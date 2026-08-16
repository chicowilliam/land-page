import type {
  BenefitId,
  CaseId,
  LeadId,
  ObjectionId,
  OfferId,
  ProofId,
} from "./types";

export function asOfferId(value: string): OfferId {
  return value as OfferId;
}

export function asCaseId(value: string): CaseId {
  return value as CaseId;
}

export function asLeadId(value: string): LeadId {
  return value as LeadId;
}

export function asProofId(value: string): ProofId {
  return value as ProofId;
}

export function asObjectionId(value: string): ObjectionId {
  return value as ObjectionId;
}

export function asBenefitId(value: string): BenefitId {
  return value as BenefitId;
}
