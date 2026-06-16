import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-brand-green text-brand-mint">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark className="h-10 w-auto text-brand-mint" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-mint/80">
              UnityGate Integrated Services stewards capital for families, founders, and
              institutions through disciplined wealth and asset management.
            </p>
            <p className="mt-6 font-serif text-lg italic text-brand-gold">
              Connecting People, Powering Progress.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>
                <a href="mailto:hello@unitygate.com" className="hover:text-white">
                  hello@unitygate.com
                </a>
              </li>
              <li>
                <a href="tel:+10000000000" className="hover:text-white">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="text-brand-mint/80">
                Office address line 1<br />City, State 00000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-brand-mint/15 pt-6 text-xs text-brand-mint/70 md:flex-row md:items-center md:justify-between">
          <p>© {year} UnityGate Integrated Services. All rights reserved.</p>
          <p>Investment services are subject to terms, conditions, and applicable regulation.</p>
        </div>
      </div>
    </footer>
  );
}
