import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Section, DisplayHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Our Subsidiaries",
  description:
    "UnityGate Integrated Services PLC operates six business subsidiaries — Capital, Transport, Trading, Properties, Building Supplies, and Ventures — across strategic sectors of the Nigerian economy.",
};

type Subsidiary = {
  id: string;
  name: string;
  role: string;
  headline: string;
  description: string;
  focus: string[];
};

const subsidiaries: Subsidiary[] = [
  {
    id: "capital",
    name: "UnityGate Capital",
    role: "Investor relations & capital management",
    headline: "The capital arm of the conglomerate.",
    description:
      "UnityGate Capital structures investor participation, manages the flow of capital between the group's operating subsidiaries, and oversees financial reporting and stewardship on behalf of the wider UnityGate group.",
    focus: [
      "Investor onboarding and relations",
      "Capital allocation across subsidiaries",
      "Financial reporting and stewardship",
      "Treasury and liquidity management",
    ],
  },
  {
    id: "transport",
    name: "UnityGate Transport",
    role: "Transportation & fleet operations",
    headline: "Fleets that keep the country moving.",
    description:
      "Transportation and fleet operations across Nigeria — commercial vehicles, urban mobility, last-mile delivery, and intercity cargo movement. A working, income-generating asset base built for daily cash flow.",
    focus: [
      "Commercial vehicle fleets",
      "Urban and intercity mobility",
      "Last-mile delivery and logistics",
      "Fleet maintenance and operations",
    ],
  },
  {
    id: "trading",
    name: "UnityGate Trading",
    role: "General merchandise",
    headline: "Trade at scale, everyday goods.",
    description:
      "Sourcing, distribution, and wholesale of general merchandise. UnityGate Trading operates through established supply chains and retail networks, moving FMCG, apparel, and consumer goods at scale.",
    focus: [
      "FMCG and consumer goods",
      "Apparel and general merchandise",
      "Wholesale and distribution networks",
      "Established retail partnerships",
    ],
  },
  {
    id: "properties",
    name: "UnityGate Properties",
    role: "Land & real estate",
    headline: "Property that anchors long-term value.",
    description:
      "Land acquisition, property development, and real estate management — from residential communities to commercial holdings — concentrated in growth corridors across the country.",
    focus: [
      "Land acquisition in growth corridors",
      "Residential development",
      "Commercial property holdings",
      "Long-term land banking",
    ],
  },
  {
    id: "building-supplies",
    name: "UnityGate Building Supplies",
    role: "Building materials",
    headline: "Materials that build the country.",
    description:
      "Supply and distribution of building materials to developers, contractors, and end-users. UnityGate Building Supplies serves the construction economy that Nigeria is growing into.",
    focus: [
      "Cement, steel, and structural materials",
      "Aggregates and foundation supplies",
      "Finishing and interior materials",
      "Nationwide contractor supply",
    ],
  },
  {
    id: "ventures",
    name: "UnityGate Ventures",
    role: "New business opportunities",
    headline: "Where new opportunities become new companies.",
    description:
      "Incubation, evaluation, and financing of new business opportunities. UnityGate Ventures is where the group tests, seeds, and stands up the next generation of operating businesses.",
    focus: [
      "Opportunity evaluation and diligence",
      "Seed capital and incubation",
      "Partnership structuring",
      "Path-to-subsidiary for viable ventures",
    ],
  },
];

export default function SubsidiariesPage() {
  return (
    <>
      <SubsidiariesHero />
      {subsidiaries.map((d, i) => (
        <SubsidiaryBlock key={d.id} subsidiary={d} bg={i % 2 === 0 ? "paper" : "mint"} />
      ))}
      <GroupOverview />
      <CtaBand
        heading="Want to work with UnityGate?"
        body="Whether as an investor, a supplier, or a partner across one of our subsidiaries — we welcome the conversation."
        ctaLabel="Get in touch"
      />
    </>
  );
}

function SubsidiariesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-green text-brand-mint">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_right,#C89020,transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Eyebrow className="text-brand-gold">Our Subsidiaries</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Six operating subsidiaries, one integrated group.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-mint/85">
          UnityGate Integrated Services PLC operates across strategic sectors of the
          Nigerian economy — identifying, financing, and managing commercially viable
          businesses through a family of focused subsidiaries.
        </p>
      </div>
    </section>
  );
}

function SubsidiaryBlock({
  subsidiary,
  bg,
}: {
  subsidiary: Subsidiary;
  bg: "paper" | "mint";
}) {
  const bgClass = bg === "paper" ? "bg-brand-paper" : "bg-brand-mint";
  return (
    <Section id={subsidiary.id} className={bgClass}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{subsidiary.role}</Eyebrow>
          <DisplayHeading className="mt-5">{subsidiary.name}</DisplayHeading>
          <p className="mt-5 font-display text-lg font-semibold text-brand-green">
            {subsidiary.headline}
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-ink/75">
            {subsidiary.description}
          </p>
        </div>
        <article className="rounded-xl border border-brand-green/10 bg-white p-8">
          <h3 className="font-display text-lg font-semibold text-brand-green">
            What we do
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-ink/80">
            {subsidiary.focus.map((f) => (
              <li key={f} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-gold"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}

function GroupOverview() {
  return (
    <Section className="bg-brand-green text-brand-mint">
      <div className="max-w-2xl">
        <Eyebrow className="text-brand-gold">Group overview</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          One capital arm. Five operating businesses.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-brand-mint/85">
          UnityGate Capital sits at the centre of the group — allocating and recycling
          capital between the operating subsidiaries. Each subsidiary stands on its own as
          a real business, and together they form a diversified footing across the
          Nigerian economy.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subsidiaries.map((d) => (
          <div
            key={d.id}
            className="rounded-xl border border-brand-mint/15 bg-brand-green-dark/40 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              {d.role}
            </p>
            <p className="mt-1 font-display text-base font-semibold text-white">
              {d.name}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-xs text-brand-mint/60">
        Interested in a specific subsidiary?{" "}
        <Link
          href="/contact"
          className="underline decoration-brand-gold underline-offset-4"
        >
          Reach out to us
        </Link>
        .
      </p>
    </Section>
  );
}
