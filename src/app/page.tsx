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
import { Reveal } from "@/components/landing/Reveal";
import { offer } from "@/content/offer";
import { primaryWhatsApp } from "@/domain";

export default function HomePage() {
  const channel = primaryWhatsApp(offer.contact);

  return (
    <>
      <Hero offer={offer} channel={channel} />
      <Reveal>
        <PainBeat pain={offer.pain} />
      </Reveal>
      <Reveal>
        <ProofBeat proofs={offer.proofs} />
      </Reveal>
      <Reveal>
        <CasesBeat cases={offer.cases} channel={channel} />
      </Reveal>
      <Reveal>
        <BenefitsBeat benefits={offer.benefits} />
      </Reveal>
      <Reveal>
        <ProcessBeat steps={offer.steps} />
      </Reveal>
      <Reveal>
        <ObjectionsBeat objections={offer.objections} />
      </Reveal>
      <Reveal>
        <GuaranteeBeat guarantee={offer.guarantee} />
      </Reveal>
      <Reveal>
        <CapacityBeat capacity={offer.capacity} />
      </Reveal>
      <Reveal>
        <CloseBeat offer={offer} channel={channel} />
      </Reveal>
      <Reveal>
        <FooterBeat offer={offer} channel={channel} />
      </Reveal>
    </>
  );
}
