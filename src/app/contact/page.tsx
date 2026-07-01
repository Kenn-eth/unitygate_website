import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/section";
import { WhatsappGlyph } from "@/components/whatsapp-glyph";
import { LinkedinGlyph } from "@/components/linkedin-glyph";
import { WHATSAPP_NUMBER, whatsappDisplay, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach UnityGate Integrated Services on WhatsApp, LinkedIn, email, or phone.",
};

const LINKEDIN_URL =
  "https://www.linkedin.com/company/unitygate-integrated-services/";

const offices = [
  {
    city: "Head Office",
    lines: ["Enugu, Nigeria"],
  },
];

const channels = [
  { label: "WhatsApp", value: whatsappDisplay(), href: whatsappUrl(), external: true },
  { label: "General enquiries", value: "hello@unitygate.com", href: "mailto:hello@unitygate.com" },
  { label: "Investor onboarding", value: "invest@unitygate.com", href: "mailto:invest@unitygate.com" },
  { label: "Telephone", value: whatsappDisplay(), href: `tel:+${WHATSAPP_NUMBER}` },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <WhatsappBanner />
      <ContactBody />
    </>
  );
}

function WhatsappBanner() {
  return (
    <section className="bg-brand-paper pb-4">
      <div className="mx-auto max-w-6xl px-6">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl bg-brand-green p-6 text-brand-mint shadow-[0_30px_60px_-30px_rgba(0,76,36,0.35)] transition-all hover:bg-brand-green-dark sm:flex-row sm:items-center sm:gap-8 sm:p-8"
        >
          <div className="relative shrink-0">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-brand-gold/50 animate-ping motion-reduce:hidden"
            />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white sm:h-20 sm:w-20">
              <WhatsappGlyph className="h-8 w-8 text-brand-green sm:h-10 sm:w-10" />
            </span>
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Fastest way to reach us
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
              Chat with us on WhatsApp
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-mint/85 sm:text-base">
              Send us a message and we&rsquo;ll reply within minutes.
            </p>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-green-dark transition-colors group-hover:bg-brand-gold-dark group-hover:text-white">
            Start chat
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </span>

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-brand-gold/15 blur-3xl"
          />
        </a>
      </div>
    </section>
  );
}

function ContactHero() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-green sm:text-5xl lg:text-6xl">
            Let&rsquo;s put your capital to work.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-ink/75">
            Whether you&rsquo;re an investor, a supplier, or exploring a partnership
            with one of our subsidiaries — we&rsquo;re a message away.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactBody() {
  return (
    <Section className="bg-brand-mint">
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        <div>
          <Eyebrow>Reach us directly</Eyebrow>
          <ul className="mt-6 space-y-5">
            {channels.map((c) => (
              <li key={c.label}>
                <p className="text-xs uppercase tracking-wider text-brand-ink/60">
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="mt-1 inline-block font-display text-lg text-brand-green underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-green-dark"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow>Offices</Eyebrow>
          <ul className="mt-6 space-y-6">
            {offices.map((o) => (
              <li key={o.city}>
                <p className="font-display text-lg font-semibold text-brand-green">
                  {o.city}
                </p>
                {o.lines.map((line) => (
                  <p key={line} className="text-sm leading-relaxed text-brand-ink/75">
                    {line}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow>Business hours</Eyebrow>
          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-brand-ink/75">
            <li className="flex justify-between border-b border-brand-green/10 pb-2">
              <span>Monday – Friday</span>
              <span className="font-medium text-brand-green">9:00 – 18:00</span>
            </li>
            <li className="flex justify-between border-b border-brand-green/10 pb-2">
              <span>Saturday</span>
              <span className="font-medium text-brand-green">By appointment</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium text-brand-ink/50">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-brand-green/15 pt-12">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow UnityGate on LinkedIn"
          className="group inline-flex items-center gap-4 rounded-2xl border border-brand-green/15 bg-white p-5 pr-7 transition-all hover:border-brand-gold hover:shadow-[0_20px_40px_-20px_rgba(0,76,36,0.25)]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white transition-colors group-hover:bg-brand-gold group-hover:text-brand-green-dark">
            <LinkedinGlyph className="h-6 w-6" />
          </span>
          <span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              On LinkedIn
            </p>
            <p className="mt-1 font-display text-lg text-brand-green">
              Follow UnityGate Integrated Services
              <span
                aria-hidden
                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </p>
          </span>
        </a>
      </div>
    </Section>
  );
}
