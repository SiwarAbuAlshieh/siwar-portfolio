import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import type { SiteContent } from "@/content/site";
import { Brands } from "./Brands";
import { Button } from "./Button";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Highlights } from "./Highlights";
import { IconList } from "./IconList";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { Eyebrow, Hairline, SectionHeading } from "./SectionHeading";
import { Timeline } from "./Timeline";
import { FlowDiagram, ToolPanel } from "./ToolPanel";
import { Workflow } from "./Workflow";

/** The full single-page portfolio, rendered from one language's content. */
export function HomePage({ c }: { c: SiteContent }) {
  const { site, ui } = c;
  const ChainArrow = c.dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <>
      <Header nav={c.nav} ui={ui} name={site.name} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero hero={c.hero} site={site} />
        <Highlights items={c.highlights} label={ui.atAGlance} />

        {/* 01 — About */}
        <Section id={c.about.meta.id} tone="ivory">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <SectionHeading meta={c.about.meta} className="lg:col-span-5" />
            <div className="space-y-6 text-[17px] text-charcoal/85 lg:col-span-7 lg:pt-14">
              {c.about.paragraphs.map((p, i) => (
                <p key={i} className={`max-w-[65ch] ${i === 0 ? "text-[19px] text-charcoal" : ""}`}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Section>

        {/* 02 — Expertise */}
        <Section id={c.expertise.meta.id} tone="white">
          <SectionHeading meta={c.expertise.meta} />
          <IconList items={c.expertise.items} columns={3} wideLast className="mt-14" />
          <p className="accent-quote mt-10 max-w-[65ch] font-serif text-[1.45rem] leading-snug text-charcoal italic">
            {c.expertise.note}
          </p>
        </Section>

        {/* 03 — CRO & UX */}
        <Section id={c.cro.meta.id} tone="ivory">
          <SectionHeading meta={c.cro.meta} intro={c.cro.intro} />
          <h3 className="mt-14 font-serif text-[1.85rem] font-medium text-charcoal">{c.cro.reviewTitle}</h3>
          <ol className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.cro.items.map((item, i) => (
              <li
                key={item.title}
                className="rounded-[5px] border border-beige bg-white p-6 transition-shadow duration-300 hover:shadow-[0_10px_30px_-18px_rgba(28,28,28,0.18)]"
              >
                <p className="text-[12.5px] font-semibold tracking-[0.14em] text-champagne-ink" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 text-[16px] font-semibold leading-snug text-charcoal">{item.title}</h4>
                <p className="mt-1.5 text-[14.5px] text-grey">{item.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 04 — Brands */}
        <Section id={c.brands.meta.id} tone="white">
          <SectionHeading meta={c.brands.meta} />
          <Brands brands={c.brands} />
        </Section>

        {/* 05 — Client communication (prominent band) */}
        <Section id={c.communication.meta.id} tone="sand">
          <SectionHeading meta={c.communication.meta} />
          <IconList items={c.communication.items} columns={3} className="mt-14" />
        </Section>

        {/* 06 — Project & task management */}
        <Section id={c.taskManagement.meta.id} tone="ivory">
          <SectionHeading meta={c.taskManagement.meta} />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <ToolPanel panel={c.taskManagement.panels[0]} emphasis />
            <ToolPanel panel={c.taskManagement.panels[1]} />
          </div>
          <div className="mt-14">
            <FlowDiagram steps={c.taskManagement.flow} label={ui.flowLabel} />
            <p className="mt-6 text-center text-[15px] text-grey">{c.taskManagement.flowNote}</p>
          </div>
        </Section>

        {/* 07 — Marketing technology */}
        <Section id={c.marketing.meta.id} tone="white">
          <SectionHeading meta={c.marketing.meta} />
          <IconList items={c.marketing.items} columns={3} variant="plain" className="mt-14" />
        </Section>

        {/* 08 — AI */}
        <Section id={c.ai.meta.id} tone="ivory">
          <SectionHeading meta={c.ai.meta} />
          <IconList items={c.ai.items} columns={2} className="mt-14" />
        </Section>

        {/* 09 — Approach */}
        <Section id={c.approach.meta.id} tone="white">
          <SectionHeading meta={c.approach.meta} />
          <div className="mt-16">
            <Workflow steps={c.approach.steps} stepLabel={ui.step} />
          </div>
          <p className="mt-12 text-[14px] text-grey italic">{c.approach.note}</p>

          <Card className="mt-14 bg-ivory md:p-12">
            <h3 className="font-serif text-[1.85rem] leading-tight font-medium text-charcoal">
              {c.approach.croTitle}
            </h3>
            <ol
              aria-label={ui.croSequence}
              className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] font-medium text-charcoal"
            >
              {c.approach.croChain.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span>{step}</span>
                  {i < c.approach.croChain.length - 1 ? (
                    <ChainArrow aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-champagne" />
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-[70ch] text-[16px] text-charcoal/85">{c.approach.croText}</p>
          </Card>
        </Section>

        {/* 10 — Skills */}
        <Section id={c.skills.meta.id} tone="ivory">
          <SectionHeading meta={c.skills.meta} />
          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {c.skills.groups.map((group) => (
              <div key={group.title} className="border-t border-beige pt-6">
                <h3 className="font-sans text-[16px] font-semibold text-charcoal">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-[3px] bg-beige/70 px-3 py-1.5 text-[13.5px] leading-none text-charcoal"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 11 — Experience */}
        <Section id={c.experience.meta.id} tone="white">
          <SectionHeading meta={c.experience.meta} />
          <Timeline entries={c.experience.entries} />
        </Section>

        {/* 12 — Education */}
        <Section id={c.education.meta.id} tone="ivory">
          <SectionHeading meta={c.education.meta} />
          <IconList items={c.education.items} columns={2} variant="plain" className="mt-12" />
        </Section>

        {/* 13 — Contact */}
        <Section id={c.contact.meta.id} tone="charcoal">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow onDark>
                {c.contact.meta.number} — {c.contact.meta.eyebrow}
              </Eyebrow>
              <Hairline className="mt-4" />
              <h2
                id={`${c.contact.meta.id}-title`}
                className="mt-6 text-[2.75rem] leading-[1.05] font-medium tracking-[-0.01em] text-ivory md:text-6xl"
              >
                {c.contact.meta.title}
              </h2>
              <p className="mt-6 max-w-[52ch] text-[17px] text-ivory/85">{c.contact.text}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href={`mailto:${site.email}`} onDark>
                  <Mail aria-hidden="true" strokeWidth={1.5} className="h-[18px] w-[18px]" />
                  {c.contact.emailButton}
                </Button>
                <Button href={site.cvPath} variant="secondary" onDark download>
                  <Download aria-hidden="true" strokeWidth={1.5} className="h-[18px] w-[18px]" />
                  {c.contact.cvButton}
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-6 border-t border-ivory/15 pt-10 lg:col-span-5 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-12">
              <a
                href={`mailto:${site.email}`}
                dir="ltr"
                className="font-latin-serif w-fit text-[1.6rem] leading-tight break-words text-ivory underline decoration-champagne/60 decoration-1 underline-offset-[8px] hover:text-champagne sm:text-[2rem]"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-[16px] text-ivory/90 hover:text-champagne"
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-champagne" />
                <span className="sr-only">{ui.newTab}</span>
              </a>
              <p className="inline-flex items-center gap-2 text-[16px] text-ivory/80">
                <MapPin aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-champagne" />
                {site.location}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer site={site} ui={ui} />
      <Reveal />
    </>
  );
}
