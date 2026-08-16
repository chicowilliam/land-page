import { BenefitsBeat } from "@/components/landing/BenefitsBeat";
import { CapacityBeat } from "@/components/landing/CapacityBeat";
import { CasesBeat } from "@/components/landing/CasesBeat";
import { CloseBeat } from "@/components/landing/CloseBeat";
import { FooterBeat } from "@/components/landing/FooterBeat";
import { GuaranteeBeat } from "@/components/landing/GuaranteeBeat";
import { Hero } from "@/components/landing/Hero";
import { ObjectionsBeat } from "@/components/landing/ObjectionsBeat";
import { PainBeat } from "@/components/landing/PainBeat";
import { ProcessBeat } from "@/components/landing/ProcessBeat";
import { ProofBeat } from "@/components/landing/ProofBeat";
import { offer } from "@/content/offer";
import { primaryWhatsApp } from "@/domain";

export default function HomePage() {
  const channel = primaryWhatsApp(offer.contact);

  return (
    <>
      <Hero offer={offer} channel={channel} />
      <PainBeat pain={offer.pain} />
      <ProofBeat proofs={offer.proofs} />
      <CasesBeat cases={offer.cases} channel={channel} />
      <BenefitsBeat benefits={offer.benefits} />
      <ProcessBeat steps={offer.steps} />
      <ObjectionsBeat objections={offer.objections} />
      <GuaranteeBeat guarantee={offer.guarantee} />
      <CapacityBeat capacity={offer.capacity} />
      <CloseBeat offer={offer} channel={channel} />
      <FooterBeat offer={offer} channel={channel} />
    </>
  );
}
