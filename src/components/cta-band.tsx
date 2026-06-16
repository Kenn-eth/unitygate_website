import Link from "next/link";

type Props = {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBand({
  heading = "Ready to begin a measured conversation?",
  body = "We work with a small, considered group of clients each year. Tell us about your goals and we will be in touch within two business days.",
  ctaLabel = "Schedule a consultation",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-green text-white">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-brand-mint blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-20 sm:py-24 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-mint/90">{body}</p>
        </div>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-green-dark transition-colors hover:bg-brand-gold-dark hover:text-white"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
