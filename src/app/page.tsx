import { About } from "@/components/site/About";
import { BackgroundPlan } from "@/components/site/BackgroundPlan";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Reveal } from "@/components/site/Reveal";
import { Services } from "@/components/site/Services";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <BackgroundPlan />
      <Header name={site.maker.name} channel={site.whatsapp} />
      <main id="conteudo" className="relative z-10">
        <Hero content={site} />
        <Reveal>
          <Projects content={site.projects} />
        </Reveal>
        <Reveal>
          <Services content={site.services} />
        </Reveal>
        <Reveal>
          <Process content={site.process} />
        </Reveal>
        <Reveal>
          <About
            content={site.about}
            maker={site.maker}
            channel={site.whatsapp}
          />
        </Reveal>
        <Reveal>
          <Faq items={site.faq} />
        </Reveal>
        <Reveal>
          <Contact content={site.contact} channel={site.whatsapp} />
        </Reveal>
      </main>
      <Footer maker={site.maker} />
    </>
  );
}
