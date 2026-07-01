import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold ${className}`}
    >
      <span aria-hidden className="h-px w-8 bg-brand-gold" />
      {children}
    </p>
  );
}

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function DisplayHeading({ children, className = "", as = "h2" }: HeadingProps) {
  const Tag = as;
  const sizes =
    as === "h1"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : as === "h2"
      ? "text-3xl sm:text-4xl lg:text-5xl"
      : "text-2xl sm:text-3xl";
  return (
    <Tag
      className={`font-display font-semibold leading-[1.1] tracking-tight text-brand-green ${sizes} ${className}`}
    >
      {children}
    </Tag>
  );
}
