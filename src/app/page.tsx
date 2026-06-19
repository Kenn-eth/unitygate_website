import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Section, SerifHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

const HERO_IMAGE =
  "https://images.pexels.com/photos/33719774/pexels-photo-33719774.jpeg?auto=compress&cs=tinysrgb&w=2000";

const pillars = [
  {
    title: "Stewardship",
    body: "Capital placed with us is treated as a trust, not a transaction. We invest with patience, transparency, and a long horizon.",
  },
  {
    title: "Discipline",
    body: "A clear investment policy, written in advance, governs every decision. We avoid drift, narrative trades, and shortcuts.",
  },
  {
    title: "Partnership",
    body: "We work with a small, considered client base so every relationship gets a senior point of contact.",
  },
];

const services = [
  {
    title: "Wealth Management",
    body: "Personalised portfolios, financial planning, and ongoing stewardship for individuals, families, and family offices.",
    href: "/services#wealth-management",
  },
  {
    title: "Asset / Fund Management",
    body: "Institutional-grade pooled vehicles and discretionary mandates built around clear strategies and disciplined risk controls.",
    href: "/services#asset-management",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesPreview />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(0,53,26,0.92)_0%,rgba(0,76,36,0.80)_45%,rgba(0,76,36,0.45)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,144,32,0.22),transparent_55%)]"
      />

      <div className="mx-auto max-w-4xl px-6 py-28 sm:py-36 lg:py-44">
        <Eyebrow className="text-brand-gold">UnityGate Integrated Services</Eyebrow>
        <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[68px]">
          Stewarding capital{" "}
          <span className="relative inline-block">
            with discipline.
            <span
              aria-hidden
              className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-brand-gold/85"
            />
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-mint/90">
          A patient investment firm built around two convictions: that thoughtful
          allocation compounds over decades, and that every client deserves the same
          care a family office would give its own capital.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-gold-dark hover:text-white"
          >
            Schedule a consultation
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-brand-mint/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            Explore our services
          </Link>
        </div>
        <p className="mt-12 font-serif text-base italic text-brand-mint/80">
          Connecting People, Powering Progress.
        </p>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <Section className="bg-brand-mint">
      <div className="max-w-2xl">
        <Eyebrow>What guides us</Eyebrow>
        <SerifHeading className="mt-5">
          A measured approach, written down before the market opens.
        </SerifHeading>
        <p className="mt-5 text-base leading-relaxed text-brand-ink/75">
          Our philosophy is not a slogan. It is a written investment policy, reviewed
          quarterly, and shared in full with every client.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className="group relative rounded-xl border border-brand-green/10 bg-white p-8 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(0,76,36,0.25)]"
          >
            <span className="font-serif text-sm text-brand-gold">
              0{i + 1}
            </span>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-brand-green">
              {p.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink/75">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow>Our services</Eyebrow>
          <SerifHeading className="mt-5">
            Two focused practices, one investment philosophy.
          </SerifHeading>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green underline decoration-brand-gold decoration-2 underline-offset-8 hover:decoration-brand-gold-dark"
        >
          View all services →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-green/10 bg-white p-10 transition-all hover:border-brand-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(0,76,36,0.25)]"
          >
            <div>
              <h3 className="font-serif text-3xl font-semibold text-brand-green">
                {s.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-brand-ink/75">{s.body}</p>
            </div>
            <span className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold-dark">
              Learn more
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function AboutTeaser() {
  return (
    <Section className="bg-brand-green text-brand-mint">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow className="text-brand-gold">About UnityGate</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Built to outlast cycles, careers, and headlines.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-brand-mint/85">
          <p>
            UnityGate Integrated Services was founded on a simple idea: that capital deserves a custodian
            with the patience to think in decades and the discipline to act in minutes.
          </p>
          <p>
            We are privately held by our partners. There are no quarterly sales targets, no
            third-party shareholders, and no incentive to chase whatever is fashionable this
            quarter. There is only the client, the policy, and the long view.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-brand-gold underline decoration-brand-gold decoration-2 underline-offset-8 hover:text-white"
          >
            Read our story →
          </Link>
        </div>
      </div>
    </Section>
  );
}
