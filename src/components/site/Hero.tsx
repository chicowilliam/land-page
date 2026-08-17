"use client";

import * as m from "motion/react-client";
import { ActionLink } from "@/components/site/ActionLink";
import { PortraitCard } from "@/components/site/PortraitCard";
import { fadeInUp, stagger } from "@/lib/motion";
import { whatsappHref, type SiteContent } from "@/domain";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  const { hero, maker, whatsapp, projects } = content;

  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <m.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="shell relative grid grid-cols-1 gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-28 lg:min-h-[calc(100svh-4.5rem)]"
      >
        <div className="flex flex-col gap-7 lg:col-span-6 lg:gap-8">
          <m.p variants={fadeInUp} className="readout">
            {hero.label}
          </m.p>

          <m.h1
            id="hero-heading"
            variants={fadeInUp}
            className="max-w-[16ch] text-[clamp(2.25rem,5.2vw,4rem)] tracking-[-0.035em]"
          >
            {hero.title}
          </m.h1>

          <m.p
            variants={fadeInUp}
            className="max-w-[46ch] text-[1.125rem] leading-relaxed text-muted-foreground"
          >
            {hero.text}
          </m.p>

          <m.div
            variants={fadeInUp}
            className="flex w-full flex-col gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-5"
          >
            <ActionLink href={whatsappHref(whatsapp)} external>
              Conversar no WhatsApp
            </ActionLink>
            <ActionLink href="#projetos" variant="outline" arrow="↓">
              Ver projetos
            </ActionLink>
          </m.div>

          <m.p variants={fadeInUp} className="readout">
            {hero.aside}
          </m.p>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
          <m.div variants={fadeInUp} className="mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-[26rem]">
            <PortraitCard maker={maker} channel={whatsapp} size="hero" />
          </m.div>

          <m.nav
            variants={fadeInUp}
            aria-label="Índice de projetos"
            className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm"
          >
            <p className="readout pb-3">índice / projetos</p>
            <ul>
              {projects.items.map((project, index) => (
                <li key={project.id}>
                  <a
                    href="#projetos"
                    className="group flex min-h-12 items-baseline gap-4 border-b border-border py-3.5 no-underline last:border-b-0"
                  >
                    <span className="readout" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.0625rem] font-medium transition-transform duration-[var(--hover-dur)] ease-[var(--enter-ease)] group-hover:translate-x-1">
                      {project.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="readout ml-auto transition-transform duration-[var(--hover-dur)] ease-[var(--enter-ease)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.nav>
        </div>
      </m.div>
    </section>
  );
}
