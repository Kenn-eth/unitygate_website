type Props = {
  className?: string;
};

export function Wordmark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 36"
      role="img"
      aria-label="UnityGate"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="2" y="6" width="22" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8 18 L13 23 L20 12" stroke="#C89020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text
        x="34"
        y="25"
        fill="currentColor"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="0.5"
      >
        UnityGate
      </text>
    </svg>
  );
}
