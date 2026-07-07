import Link from "next/link";
import { Eyebrow, Section, DisplayHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { SubsidiaryCarousel } from "@/components/subsidiary-carousel";

const subsidiaries = [
  {
    eyebrow: "UnityGate Capital",
    title: "The capital arm of the group.",
    body: "Investor relations and capital management. UnityGate Capital structures investor participation, manages inflows and outflows, and oversees financial reporting across the wider UnityGate group.",
    initial: "C",
  },
  {
    eyebrow: "UnityGate Transport",
    title: "Fleets that keep the country moving.",
    body: "Transportation and fleet operations — commercial vehicles, urban mobility, last-mile delivery, and intercity cargo movement across Nigeria.",
    imageSrc: "/logistics.jpg",
  },
  {
    eyebrow: "UnityGate Trading",
    title: "Trade at scale, everyday goods.",
    body: "Sourcing, distribution, and wholesale of general merchandise — FMCG, apparel, and consumer goods — through established supply chains and retail networks.",
    imageSrc: "/general-merchandise.jpg",
  },
  {
    eyebrow: "UnityGate Properties",
    title: "Property that anchors long-term value.",
    body: "Land acquisition, property development, and real estate management — from residential communities to commercial holdings — in growth corridors across the country.",
    imageSrc: "/real-estate.jpg",
  },
  {
    eyebrow: "UnityGate Building Supplies",
    title: "Materials that build the country.",
    body: "Supply and distribution of building materials — cement, steel, aggregates, and finishing supplies — to developers, contractors, and end-users nationwide.",
    imageSrc: "/construction.jpg",
  },
  {
    eyebrow: "UnityGate Ventures",
    title: "Where new opportunities become new companies.",
    body: "Incubation, evaluation, and financing of new business opportunities — seeding the next generation of UnityGate operating businesses.",
    initial: "V",
  },
];

// Hero videos in public/: "/hero.mp4" (Pexels naira-bills, gitignored 4K master),
// "/hero-alt.mp4" (Pixabay drone-city), "/hero-bridge.mp4" (Pixabay buildings + bridge).
const HERO_VIDEO = "/hero-bridge.mp4";

const principles = [
  {
    title: "Real economy participation",
    body: "Capital is deployed into active, revenue-generating businesses — not idle financial instruments.",
  },
  {
    title: "Capital recycling",
    body: "Returns from operating subsidiaries are continuously reinvested into higher-value assets across the group.",
  },
  {
    title: "Asset transformation",
    body: "Operational income is progressively converted into tangible assets that appreciate and outpace inflation.",
  },
];

const strengths = [
  {
    title: "Diverse Portfolio",
    body: "Six subsidiaries across capital, transport, trading, properties, building supplies, and new ventures — spreading exposure and stabilising returns across cycles.",
    Icon: GridIcon,
  },
  {
    title: "Experienced Team and Partners",
    body: "A leadership team drawn from finance, operations, and enterprise — working with vetted partners across every sector we operate in.",
    Icon: UsersIcon,
  },
  {
    title: "Solid Reputation",
    body: "Built on transparency, structured governance, and consistent delivery — the currency that keeps investors, partners, and suppliers coming back.",
    Icon: ShieldIcon,
  },
  {
    title: "Local and International Network",
    body: "Rooted in Nigeria with connections that reach diaspora investors, global suppliers, and international partners across our operating sectors.",
    Icon: GlobeIcon,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubsidiaryCarousel subsidiaries={subsidiaries} />
      <Principles />
      <Strengths />
      <CtaBand
        heading="Let's talk about working together."
        body="Whether you're an investor, a partner, or exploring a new opportunity — reach out and a member of the UnityGate team will be in touch within two business days."
        ctaLabel="Get in touch"
      />
    </>
  );
}

function Strengths() {
  return (
    <Section className="bg-brand-paper">
      <div className="max-w-2xl">
        <Eyebrow>Our Strengths</Eyebrow>
        <DisplayHeading className="mt-5">
          Why partners, investors, and suppliers choose UnityGate.
        </DisplayHeading>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {strengths.map(({ title, body, Icon }) => (
          <article
            key={title}
            className="rounded-2xl border border-brand-green/10 bg-white p-8 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(0,76,36,0.25)]"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/8 text-brand-gold ring-1 ring-brand-green/10">
              <Icon className="h-8 w-8" />
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-brand-green">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">
              {body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-green-dark text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_70%_at_20%_40%,rgba(0,53,26,0.65)_0%,rgba(0,76,36,0.22)_55%,transparent_85%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,30,15,0.45)_0%,transparent_30%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_80%,rgba(200,144,32,0.22),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/55 to-transparent"
      />

      <div className="mx-auto max-w-4xl px-6 py-28 sm:py-36 lg:py-44">
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-[68px]">
          A moving money makes{" "}
          <span className="relative inline-block">
            more money.
            <span
              aria-hidden
              className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-brand-gold/85"
            />
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-mint/90">
          UnityGate Integrated Services PLC is a Nigerian-owned conglomerate operating
          businesses across{" "}
          <span className="font-semibold text-brand-gold">capital</span>,{" "}
          <span className="font-semibold text-brand-gold">transport</span>,{" "}
          <span className="font-semibold text-brand-gold">trading</span>,{" "}
          <span className="font-semibold text-brand-gold">properties</span>,{" "}
          <span className="font-semibold text-brand-gold">building supplies</span>,
          and{" "}
          <span className="font-semibold text-brand-gold">new ventures</span> —
          identifying, financing, and managing commercially viable opportunities
          across strategic sectors of the Nigerian economy.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-gold-dark hover:text-white"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-brand-mint/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            Explore our subsidiaries
          </Link>
        </div>
        <p className="mt-12 font-serif text-base italic text-brand-mint/80">
          Connecting People, Powering Progress.
        </p>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <Section className="bg-brand-mint">
      <div className="max-w-2xl">
        <Eyebrow>How we operate</Eyebrow>
        <DisplayHeading className="mt-5">
          A model built on three principles, not three promises.
        </DisplayHeading>
        <p className="mt-5 text-base leading-relaxed text-brand-ink/75">
          Sustainable wealth is not built through speculation. It is built through
          structured participation in real businesses, efficient capital allocation,
          and disciplined reinvestment.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {principles.map((p, i) => (
          <article
            key={p.title}
            className="group relative rounded-xl border border-brand-green/10 bg-white p-8 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(0,76,36,0.25)]"
          >
            <span className="font-display text-sm font-semibold text-brand-gold">0{i + 1}</span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-brand-green">
              {p.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink/75">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
