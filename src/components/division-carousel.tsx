"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Section } from "@/components/section";

type Division = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc?: string;
  initial?: string;
};

type Props = {
  divisions: Division[];
  ctaHref?: string;
  ctaLabel?: string;
  intervalMs?: number;
};

export function DivisionCarousel({
  divisions,
  ctaHref = "/about",
  ctaLabel = "Learn more",
  intervalMs = 4000,
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || divisions.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % divisions.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, divisions.length, intervalMs]);

  return (
    <Section className="bg-brand-green text-brand-mint">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="overflow-x-clip"
          aria-roledescription="carousel"
          aria-label="UnityGate business divisions"
        >
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {divisions.map((division, i) => (
              <div
                key={division.title}
                className="w-full shrink-0 overflow-x-clip"
                aria-hidden={i !== active}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${divisions.length}: ${division.title}`}
              >
                <Slide
                  division={division}
                  ctaHref={ctaHref}
                  ctaLabel={ctaLabel}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-12 flex items-center justify-center gap-3"
          role="tablist"
          aria-label="Choose division"
        >
          {divisions.map((division, i) => (
            <button
              key={division.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${division.title}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-10 bg-brand-gold"
                  : "w-3 bg-brand-mint/30 hover:bg-brand-mint/55"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

type SlideProps = {
  division: Division;
  ctaHref: string;
  ctaLabel: string;
  priority: boolean;
};

function Slide({ division, ctaHref, ctaLabel, priority }: SlideProps) {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-[5fr_6fr] lg:gap-20">
      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)]">
          {division.imageSrc ? (
            <Image
              src={division.imageSrc}
              alt=""
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-mint/15 via-brand-green-dark/45 to-brand-gold/20">
              {division.initial && (
                <span className="font-display text-[10rem] font-bold leading-none text-brand-mint/15 sm:text-[12rem]">
                  {division.initial}
                </span>
              )}
            </div>
          )}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 rounded-br-2xl border-b-2 border-r-2 border-brand-gold"
        />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
          {division.eyebrow}
        </p>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          {division.title}
        </h2>
        <p className="mt-8 text-base leading-relaxed text-brand-mint/85">
          {division.body}
        </p>
        <Link
          href={ctaHref}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold underline decoration-brand-gold decoration-2 underline-offset-8 hover:text-white"
        >
          {ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
