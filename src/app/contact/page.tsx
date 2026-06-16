import type { Metadata } from "next";
import { Eyebrow, Section, SerifHeading } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach UnityGate Integrated Services. Schedule a consultation or send us a note.",
};

const offices = [
  {
    city: "Head Office",
    lines: ["Office address line 1", "City, State 00000"],
  },
  {
    city: "Regional Office",
    lines: ["Office address line 1", "City, State 00000"],
  },
];

const channels = [
  { label: "General enquiries", value: "hello@unitygate.com", href: "mailto:hello@unitygate.com" },
  { label: "Client services", value: "clients@unitygate.com", href: "mailto:clients@unitygate.com" },
  { label: "Telephone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
    </>
  );
}

function ContactHero() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-brand-green sm:text-5xl lg:text-6xl">
            Start a measured conversation.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-brand-ink/75">
            Whether you are considering a new advisor, evaluating UnityGate for an
            institutional mandate, or simply curious about our approach — we welcome the
            note. We respond to every enquiry within two business days.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactBody() {
  return (
    <Section className="bg-brand-mint">
      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-[0_30px_60px_-30px_rgba(0,76,36,0.18)]">
          <SerifHeading as="h2" className="text-3xl">
            Send us a note
          </SerifHeading>
          <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
            Required fields are marked with an asterisk.
          </p>
          <ContactForm />
        </div>

        <aside className="space-y-12">
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
                    className="mt-1 inline-block font-serif text-xl text-brand-green underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-green-dark"
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
                  <p className="font-serif text-lg font-semibold text-brand-green">
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
        </aside>
      </div>
    </Section>
  );
}
