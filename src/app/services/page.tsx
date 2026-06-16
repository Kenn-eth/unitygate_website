import type { Metadata } from "next";
import { Eyebrow, Section, SerifHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "UnityGate offers wealth management and asset / fund management built on a disciplined, written investment policy.",
};

const wealthFeatures = [
  {
    title: "Discovery & investment policy",
    body: "We begin with a written policy that captures your goals, time horizon, liquidity needs, and risk tolerance.",
  },
  {
    title: "Portfolio construction",
    body: "Diversified across asset classes, geographies, and managers. Built once, rebalanced with discipline.",
  },
  {
    title: "Financial planning",
    body: "Tax, retirement, estate, and philanthropic planning coordinated with your other advisors.",
  },
  {
    title: "Ongoing stewardship",
    body: "Quarterly reviews, annual policy refresh, and a senior point of contact who answers the phone.",
  },
];

const assetFeatures = [
  {
    title: "Defined strategies",
    body: "Each vehicle has a written mandate, a stated benchmark, and a risk budget. No style drift.",
  },
  {
    title: "Independent risk oversight",
    body: "Risk is monitored by a function independent of the investment team and reported to clients monthly.",
  },
  {
    title: "Institutional reporting",
    body: "Audited statements, GIPS-aligned performance reporting, and transparent fee structures.",
  },
  {
    title: "Aligned incentives",
    body: "Partners invest meaningful personal capital alongside clients in every strategy we offer.",
  },
];

const approach = [
  { step: "01", title: "Listen", body: "We start with questions. Goals, constraints, prior experiences." },
  { step: "02", title: "Document", body: "Everything we agree to is captured in a written investment policy." },
  { step: "03", title: "Build", body: "Portfolios are constructed against the policy, not against the headlines." },
  { step: "04", title: "Review", body: "We meet quarterly. We refresh the policy annually. We never go silent." },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WealthManagement />
      <AssetManagement />
      <Approach />
      <CtaBand
        heading="Considering a new advisor?"
        body="A short, exploratory conversation is the best way to decide whether we are the right fit for your goals."
      />
    </>
  );
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-green text-brand-mint">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_right,#C89020,transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Eyebrow className="text-brand-gold">Services</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Two focused practices, governed by one investment philosophy.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-mint/85">
          Whether you are an individual seeking a long-term steward of family wealth or an
          institution looking for a disciplined manager of a specific mandate, our work
          begins the same way — with a written investment policy.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <ServiceJump href="#wealth-management" label="Wealth Management" />
          <ServiceJump href="#asset-management" label="Asset / Fund Management" />
        </div>
      </div>
    </section>
  );
}

function ServiceJump({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between rounded-xl border border-brand-mint/15 bg-brand-green-dark/40 p-5 transition-colors hover:border-brand-gold hover:bg-brand-green-dark"
    >
      <span className="font-serif text-xl text-white">{label}</span>
      <span
        aria-hidden
        className="text-brand-gold transition-transform group-hover:translate-y-1"
      >
        ↓
      </span>
    </a>
  );
}

function WealthManagement() {
  return (
    <Section id="wealth-management" className="bg-brand-paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>01 — Wealth Management</Eyebrow>
          <SerifHeading className="mt-5">
            A family-office level of care, made accessible.
          </SerifHeading>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/75">
            For individuals, families, and family offices who want their capital managed
            with the same care, transparency, and long view they would give it themselves.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-mint px-5 py-2 text-sm font-medium text-brand-green">
            Typical engagement: $1M+ in investable assets
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {wealthFeatures.map((f) => (
            <article
              key={f.title}
              className="rounded-xl border border-brand-green/10 bg-white p-7"
            >
              <h3 className="font-serif text-lg font-semibold text-brand-green">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function AssetManagement() {
  return (
    <Section id="asset-management" className="bg-brand-mint">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>02 — Asset / Fund Management</Eyebrow>
          <SerifHeading className="mt-5">
            Institutional mandates, run with founder-grade attention.
          </SerifHeading>
          <p className="mt-5 text-base leading-relaxed text-brand-ink/75">
            Discretionary mandates and pooled vehicles for institutions, endowments, and
            sophisticated allocators who want a clear strategy, a clear benchmark, and a
            clear conversation.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-green px-5 py-2 text-sm font-medium text-white">
            Built for institutional allocators
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {assetFeatures.map((f) => (
            <article
              key={f.title}
              className="rounded-xl border border-brand-green/10 bg-white p-7"
            >
              <h3 className="font-serif text-lg font-semibold text-brand-green">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Approach() {
  return (
    <Section className="bg-brand-paper">
      <div className="max-w-2xl">
        <Eyebrow>Our approach</Eyebrow>
        <SerifHeading className="mt-5">
          A four-step rhythm we have repeated for a decade.
        </SerifHeading>
      </div>
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {approach.map((s) => (
          <li
            key={s.step}
            className="relative rounded-xl border border-brand-green/10 bg-white p-7"
          >
            <span className="font-serif text-3xl font-semibold text-brand-gold">
              {s.step}
            </span>
            <h3 className="mt-3 font-serif text-xl font-semibold text-brand-green">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
