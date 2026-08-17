import type { SiteContent } from "@/domain";

type FooterProps = {
  maker: SiteContent["maker"];
};

export function Footer({ maker }: FooterProps) {
  return (
    <footer className="relative z-10 bg-background">
      <div className="shell flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between lg:py-10">
        <p className="readout text-foreground" translate="no">
          {maker.name} — Sites e sistemas
        </p>
        <p className="readout">{maker.location}</p>
        <p className="readout">© 2026</p>
      </div>
    </footer>
  );
}
