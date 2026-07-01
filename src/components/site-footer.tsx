import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { LinkedinGlyph } from "@/components/linkedin-glyph";
import { WHATSAPP_NUMBER, whatsappDisplay, whatsappUrl } from "@/lib/whatsapp";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/unitygate-integrated-services/";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-brand-green text-brand-mint">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark variant="light" className="h-12 text-lg" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-mint/80">
              UnityGate Integrated Services PLC is a Nigerian-owned conglomerate
              operating six business subsidiaries across capital, transport, trading,
              properties, building supplies, and new ventures.
            </p>
            <p className="mt-6 font-serif text-lg italic text-brand-gold">
              Connecting People, Powering Progress.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow UnityGate on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-mint/25 text-brand-mint transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-brand-green-dark"
              >
                <LinkedinGlyph className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Our Subsidiaries</Link></li>
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
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <span aria-hidden className="text-brand-gold">●</span>
                  WhatsApp · {whatsappDisplay()}
                </a>
              </li>
              <li>
                <a href="mailto:hello@unitygate.com" className="hover:text-white">
                  hello@unitygate.com
                </a>
              </li>
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-white">
                  {whatsappDisplay()}
                </a>
              </li>
              <li className="text-brand-mint/80">
                Enugu, Nigeria
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
