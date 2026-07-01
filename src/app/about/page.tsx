import type { Metadata } from "next";
import { Eyebrow, Section, DisplayHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "UnityGate Integrated Services PLC is a Nigerian-owned investment and business development company operating six divisions across strategic sectors of the economy.",
};

const divisions = [
  {
    name: "UnityGate Capital",
    role: "Investor relations & capital management",
  },
  {
    name: "UnityGate Transport",
    role: "Transportation & fleet operations",
  },
  {
    name: "UnityGate Trading",
    role: "General merchandise",
  },
  {
    name: "UnityGate Properties",
    role: "Land & real estate",
  },
  {
    name: "UnityGate Building Supplies",
    role: "Building materials",
  },
  {
    name: "UnityGate Ventures",
    role: "New business opportunities",
  },
];

const valueProps = [
  "Real-sector business ownership across strategic industries",
  "Capital recycled between operating divisions",
  "Asset-backed positioning through property and materials",
  "Diversified footing across the Nigerian economy",
  "Long-term, inflation-resilient asset accumulation",
  "Structured governance and transparent reporting",
];

const governancePrinciples = [
  "Structured capital tracking",
  "Defined division mandates",
  "Clear allocation of funds",
  "Regular internal performance monitoring",
  "Investor communication and reporting structure",
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Divisions />
      <ValueAndGovernance />
      <CtaBand
        heading="Want to understand the group in detail?"
        body="We're happy to walk you through the divisions, how capital flows between them, and where your interest — as an investor, partner, or supplier — could fit."
        ctaLabel="Talk to us"
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
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-green sm:text-5xl lg:text-6xl">
            A Nigerian-owned conglomerate, built for the real economy.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-ink/75">
            UnityGate Integrated Services PLC is a Nigerian-owned investment and
            business development company established with the objective of
            identifying, financing, and managing commercially viable investment
            opportunities across strategic sectors of the Nigerian economy.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/70">
            The group operates through six focused divisions — spanning capital
            management, transportation, general merchandise, real estate, building
            supplies, and new ventures — each functioning as a distinct business
            with a clear mandate.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <Section className="bg-brand-mint">
      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-brand-green/10 bg-white p-8">
          <Eyebrow>Mission</Eyebrow>
          <p className="mt-5 font-display text-xl font-semibold leading-snug text-brand-green">
            To build structured and sustainable wealth through disciplined operation
            of real-sector businesses and strategic reinvestment into long-term
            assets.
          </p>
        </article>
        <article className="rounded-2xl border border-brand-green/10 bg-white p-8">
          <Eyebrow>Vision</Eyebrow>
          <p className="mt-5 font-display text-xl font-semibold leading-snug text-brand-green">
            To become a leading integrated investment enterprise recognised for
            delivering structured value across strategic sectors of the Nigerian
            economy.
          </p>
        </article>
        <article className="relative overflow-hidden rounded-2xl bg-brand-green p-8 text-brand-mint">
          <Eyebrow className="text-brand-gold">Motto</Eyebrow>
          <p className="mt-5 font-serif text-2xl leading-snug italic text-white">
            &ldquo;Connecting People, Powering Progress.&rdquo;
          </p>
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/15 blur-2xl"
          />
        </article>
      </div>
    </Section>
  );
}

function Divisions() {
  return (
    <Section className="bg-brand-paper">
      <div className="max-w-2xl">
        <Eyebrow>Our six divisions</Eyebrow>
        <DisplayHeading className="mt-5">
          Six businesses. One capital cycle.
        </DisplayHeading>
        <p className="mt-5 text-base leading-relaxed text-brand-ink/75">
          UnityGate Capital sits at the centre of the group, allocating and recycling
          capital between the five operating divisions. Each division stands as its
          own real business.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {divisions.map((d, i) => (
          <article
            key={d.name}
            className="rounded-xl border border-brand-green/10 bg-white p-8"
          >
            <span className="font-display text-sm font-semibold text-brand-gold">
              0{i + 1}
            </span>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/55">
              {d.role}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-brand-green">
              {d.name}
            </h3>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ValueAndGovernance() {
  return (
    <Section className="bg-brand-green text-brand-mint">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow className="text-brand-gold">Value proposition</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            What UnityGate delivers.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-mint/85">
            A diversified conglomerate structure built for durability, with real
            businesses, real assets, and structured governance across the group.
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-brand-mint/90">
            {valueProps.map((v) => (
              <li key={v} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-gold"
                />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow className="text-brand-gold">Governance &amp; transparency</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Accountability is structural.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-mint/85">
            UnityGate operates with a structured governance approach aimed at
            ensuring accountability, clarity, and operational discipline across every
            division.
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-brand-mint/90">
            {governancePrinciples.map((g) => (
              <li key={g} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-gold"
                />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
