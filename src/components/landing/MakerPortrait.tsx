import Image from "next/image";
import type { Maker } from "@/domain";

type MakerPortraitProps = {
  maker: Maker;
};

export function MakerPortrait({ maker }: MakerPortraitProps) {
  return (
    <figure className="relative mx-auto w-full max-w-[19rem] lg:max-w-none">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <div
          className="pointer-events-none absolute inset-3 z-10 border border-gilt/40"
          aria-hidden="true"
        />
        <Image
          src={maker.photo.src}
          alt={maker.photo.alt}
          fill
          priority
          quality={90}
          sizes="(max-width: 1024px) 19rem, 28rem"
          className="object-cover object-[center_16%] contrast-[1.04] saturate-[0.92] transition-transform duration-[150ms] ease-[var(--enter-ease)] motion-safe:hover:scale-[1.025]"
        />
      </div>
      <figcaption
        className="mt-4 text-center text-[0.7rem] font-medium tracking-[0.22em] uppercase text-ink"
        translate="no"
      >
        {maker.name}
      </figcaption>
    </figure>
  );
}
