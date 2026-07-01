import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsappGlyph } from "@/components/whatsapp-glyph";

export function WhatsappFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UnityGate on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-brand-gold/60 animate-ping motion-reduce:hidden"
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-brand-green/40 animate-ping [animation-delay:600ms] motion-reduce:hidden"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-green ring-2 ring-brand-gold/70 shadow-[0_15px_30px_-8px_rgba(0,76,36,0.55)] transition-transform group-hover:scale-105 group-active:scale-95 sm:h-16 sm:w-16">
        <WhatsappGlyph className="h-7 w-7 text-white sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
