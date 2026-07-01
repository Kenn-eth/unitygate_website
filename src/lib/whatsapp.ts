// Phone in international format without spaces, dashes, or leading "+".
// Override at deploy time via NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local.
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2347076323825";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello UnityGate, I'd like to learn more about your business subsidiaries.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
}

export function whatsappDisplay(): string {
  const n = WHATSAPP_NUMBER;
  if (n.startsWith("234")) {
    const subscriber = n.slice(3);
    if (subscriber.length === 10 || subscriber.length === 9) {
      return `+234 ${subscriber.slice(0, 3)} ${subscriber.slice(3, 6)} ${subscriber.slice(6)}`;
    }
  }
  return `+${n}`;
}
