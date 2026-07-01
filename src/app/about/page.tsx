import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "UnityGate Integrated Services PLC is a Nigerian-owned investment and business development company operating six subsidiaries across strategic sectors of the economy.",
};

const valueProps = [
  "Real-sector business ownership across strategic industries",
  "Capital recycled between operating subsidiaries",
  "Asset-backed positioning through property and materials",
  "Diversified footing across the Nigerian economy",
  "Long-term, inflation-resilient asset accumulation",
  "Structured governance and transparent reporting",
];

const governancePrinciples = [
  "Structured capital tracking",
  "Defined subsidiary mandates",
  "Clear allocation of funds",
  "Regular internal performance monitoring",
  "Investor communication and reporting structure",
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <ValueAndGovernance />
      <CtaBand
        heading="Want to understand the group in detail?"
        body="We're happy to walk you through the subsidiaries, how capital flows between them, and where your interest — as an investor, partner, or supplier — could fit."
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
            The group operates through six focused subsidiaries — spanning capital
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
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/8 text-brand-gold ring-1 ring-brand-green/10">
            <TargetIcon className="h-8 w-8" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Mission
          </p>
          <p className="mt-3 font-display text-xl font-semibold leading-snug text-brand-green">
            To build structured and sustainable wealth through disciplined operation
            of real-sector businesses and strategic reinvestment into long-term
            assets.
          </p>
        </article>
        <article className="rounded-2xl border border-brand-green/10 bg-white p-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/8 text-brand-gold ring-1 ring-brand-green/10">
            <EyeIcon className="h-8 w-8" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Vision
          </p>
          <p className="mt-3 font-display text-xl font-semibold leading-snug text-brand-green">
            To become a leading integrated investment enterprise recognised for
            delivering structured value across strategic sectors of the Nigerian
            economy.
          </p>
        </article>
        <article className="relative overflow-hidden rounded-2xl bg-brand-green p-8 text-brand-mint">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold ring-1 ring-brand-gold/25">
            <SparkleIcon className="h-8 w-8" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Motto
          </p>
          <p className="mt-3 font-serif text-2xl leading-snug italic text-white">
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

function TargetIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
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
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
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
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M18.5 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
    </svg>
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
            subsidiary.
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
