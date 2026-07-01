import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Section, DisplayHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "UnityGate Integrated Services PLC operates six business divisions — Capital, Transport, Trading, Properties, Building Supplies, and Ventures — across strategic sectors of the Nigerian economy.",
};

type Division = {
  id: string;
  name: string;
  role: string;
  headline: string;
  description: string;
  focus: string[];
};

const divisions: Division[] = [
  {
    id: "capital",
    name: "UnityGate Capital",
    role: "Investor relations & capital management",
    headline: "The capital arm of the conglomerate.",
    description:
      "UnityGate Capital structures investor participation, manages the flow of capital between the group's operating divisions, and oversees financial reporting and stewardship on behalf of the wider UnityGate group.",
    focus: [
      "Investor onboarding and relations",
      "Capital allocation across divisions",
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
      "Path-to-division for viable ventures",
    ],
  },
];

export default function DivisionsPage() {
  return (
    <>
      <DivisionsHero />
      {divisions.map((d, i) => (
        <DivisionBlock key={d.id} division={d} bg={i % 2 === 0 ? "paper" : "mint"} />
      ))}
      <GroupOverview />
      <CtaBand
        heading="Want to work with UnityGate?"
        body="Whether as an investor, a supplier, or a partner across one of our divisions — we welcome the conversation."
        ctaLabel="Get in touch"
      />
    </>
  );
}

function DivisionsHero() {
  return (
    <section className="relative overflow-hidden bg-brand-green text-brand-mint">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_right,#C89020,transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Eyebrow className="text-brand-gold">Divisions</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Six operating divisions, one integrated group.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-mint/85">
          UnityGate Integrated Services PLC operates across strategic sectors of the
          Nigerian economy — identifying, financing, and managing commercially viable
          businesses through a family of focused divisions.
        </p>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <DivisionJump key={d.id} division={d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DivisionJump({ division }: { division: Division }) {
  return (
    <a
      href={`#${division.id}`}
      className="group flex items-center justify-between rounded-xl border border-brand-mint/15 bg-brand-green-dark/40 p-4 transition-colors hover:border-brand-gold hover:bg-brand-green-dark"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
          {division.role}
        </p>
        <p className="mt-1 font-display text-base font-semibold text-white">
          {division.name}
        </p>
      </div>
      <span
        aria-hidden
        className="text-brand-gold transition-transform group-hover:translate-y-1"
      >
        ↓
      </span>
    </a>
  );
}

function DivisionBlock({
  division,
  bg,
}: {
  division: Division;
  bg: "paper" | "mint";
}) {
  const bgClass = bg === "paper" ? "bg-brand-paper" : "bg-brand-mint";
  return (
    <Section id={division.id} className={bgClass}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{division.role}</Eyebrow>
          <DisplayHeading className="mt-5">{division.name}</DisplayHeading>
          <p className="mt-5 font-display text-lg font-semibold text-brand-green">
            {division.headline}
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-ink/75">
            {division.description}
          </p>
        </div>
        <article className="rounded-xl border border-brand-green/10 bg-white p-8">
          <h3 className="font-display text-lg font-semibold text-brand-green">
            What we do
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-ink/80">
            {division.focus.map((f) => (
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
          capital between the operating divisions. Each division stands on its own as
          a real business, and together they form a diversified footing across the
          Nigerian economy.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {divisions.map((d) => (
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
        Interested in a specific division?{" "}
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
