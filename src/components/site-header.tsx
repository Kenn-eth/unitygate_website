import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-green/10 bg-brand-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 group" aria-label="UnityGate home">
          <Wordmark className="h-9 w-auto text-brand-green" />
          <span className="sr-only">UnityGate Integrated Services</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide text-brand-green/85">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative py-1 transition-colors hover:text-brand-green after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-brand-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark"
        >
          Schedule a consultation
        </Link>
        <Link
          href="/contact"
          className="md:hidden inline-flex items-center rounded-full bg-brand-green px-4 py-2 text-xs font-medium text-white"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
