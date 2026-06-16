import type { Metadata } from "next";
import { Eyebrow, Section, SerifHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Independent, privately held, and patient. Learn what shapes UnityGate Integrated Services.",
};

const values = [
  {
    title: "Independent",
    body: "Privately held by our partners. No outside shareholders, no quarterly sales targets.",
  },
  {
    title: "Transparent",
    body: "Plain-language reporting, plain-English fees, and a written policy you can hold us to.",
  },
  {
    title: "Patient",
    body: "We think in decades. The market gives us many chances to be wrong; patience is one of the few edges left.",
  },
  {
    title: "Concentrated",
    body: "We work with a small number of clients each year. Scale is not our ambition.",
  },
];

const milestones = [
  { year: "2015", title: "Founded", body: "Six partners pool capital and conviction to launch UnityGate." },
  { year: "2018", title: "Wealth practice", body: "Family wealth management expands beyond the founding partners' circle." },
  { year: "2021", title: "First institutional mandate", body: "Endowment selects UnityGate for a long-only equity allocation." },
  { year: "2024", title: "Fund platform", body: "Pooled vehicles formalised for institutional and qualified investors." },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Timeline />
      <Leadership />
      <CtaBand
        heading="Curious whether we are the right firm for you?"
        body="A short conversation is the best way to find out. We will be honest if we are not."
      />
    </>
  );
}

function AboutHero() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <Eyebrow>About UnityGate</Eyebrow>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-brand-green sm:text-5xl lg:text-6xl">
            A privately held investment firm, built to outlast cycles.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-ink/75">
            UnityGate Integrated Services was founded by six partners who shared a belief
            that the most valuable thing an investment firm can offer its clients is
            patience — and the discipline to back it up.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <Section className="bg-brand-mint">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <SerifHeading className="mt-5">
            To steward capital with the care of a custodian and the rigour of an
            institution.
          </SerifHeading>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-brand-ink/80">
          <p>
            We exist to help our clients turn capital into long-term outcomes — funded
            retirements, generational wealth, mission-driven endowments, lasting
            institutions.
          </p>
          <p>
            We do that with a small team, a written investment policy, and a refusal to
            confuse activity with progress. Our partners invest meaningful personal
            capital in every strategy we offer, which is the simplest alignment statement
            we know how to make.
          </p>
          <p className="font-serif text-xl italic text-brand-green">
            Connecting People, Powering Progress.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Values() {
  return (
    <Section className="bg-brand-paper">
      <div className="max-w-2xl">
        <Eyebrow>What we believe</Eyebrow>
        <SerifHeading className="mt-5">Four principles, written down and held to.</SerifHeading>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {values.map((v, i) => (
          <article
            key={v.title}
            className="rounded-xl border border-brand-green/10 bg-white p-8"
          >
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-brand-gold">0{i + 1}</span>
              <h3 className="font-serif text-2xl font-semibold text-brand-green">
                {v.title}
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-brand-ink/75">{v.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Timeline() {
  return (
    <Section className="bg-brand-green text-brand-mint">
      <div className="max-w-2xl">
        <Eyebrow className="text-brand-gold">Our story</Eyebrow>
        <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          A decade of steady, intentional growth.
        </h2>
      </div>
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {milestones.map((m) => (
          <li
            key={m.year}
            className="relative rounded-xl border border-brand-mint/15 bg-brand-green-dark/40 p-6"
          >
            <span className="font-serif text-3xl font-semibold text-brand-gold">
              {m.year}
            </span>
            <h3 className="mt-2 font-serif text-lg font-semibold text-white">
              {m.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-mint/85">{m.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Leadership() {
  return (
    <Section className="bg-brand-paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow>Leadership</Eyebrow>
          <SerifHeading className="mt-5">
            Six partners. One investment policy.
          </SerifHeading>
        </div>
        <p className="text-base leading-relaxed text-brand-ink/75">
          Our partners come from asset management, private banking, and operating
          businesses. Every senior client relationship is owned by a partner, not handed
          off.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <article
            key={i}
            className="overflow-hidden rounded-xl border border-brand-green/10 bg-white"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-mint to-brand-mint/60 flex items-end p-6">
              <span className="font-serif text-5xl font-semibold text-brand-green/30">
                0{i}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-brand-green">
                Partner Name
              </h3>
              <p className="mt-1 text-sm text-brand-gold-dark">Partner, [Practice]</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">
                Short biographical paragraph describing background, prior experience, and
                area of focus at UnityGate.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
