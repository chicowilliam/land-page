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
      className="relative overflow-x-clip border-b border-border"
    >
      <m.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="shell relative grid grid-cols-1 gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:items-start lg:gap-10 lg:py-24 xl:gap-12"
      >
        <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-7 xl:col-span-5">
          <m.p variants={fadeInUp} className="readout">
            {hero.label}
          </m.p>

          <m.h1
            id="hero-heading"
            variants={fadeInUp}
            className="max-w-[22ch] text-[clamp(2.2rem,4.6vw,4.35rem)] tracking-[-0.035em]"
          >
            {hero.title}
          </m.h1>

          <m.p
            variants={fadeInUp}
            className="max-w-[54ch] text-[1.125rem] leading-relaxed text-muted-foreground"
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

        <m.div
          variants={fadeInUp}
          className="w-full lg:col-span-4 lg:col-start-6"
        >
          <PortraitCard maker={maker} channel={whatsapp} size="hero" />
        </m.div>

        <m.nav
          variants={fadeInUp}
          aria-label="Índice de projetos"
          className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur-sm lg:col-span-3 lg:col-start-10"
        >
          <p className="readout pb-3">índice / projetos</p>
          <ul>
            {projects.items.map((project, index) => (
              <li key={project.id}>
                <a
                  href="#projetos"
                  className="group flex min-h-12 items-baseline gap-3 border-b border-border py-3.5 no-underline last:border-b-0"
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
      </m.div>
    </section>
  );
}
