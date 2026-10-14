type CrestMarkProps = {
  className?: string;
  title?: string;
  variant?: "default" | "reversed";
};

export function CrestMark({
  className,
  title = "Sanjivani crest",
  variant = "default",
}: CrestMarkProps) {
  const shield = variant === "reversed" ? "var(--parchment)" : "var(--ink)";
  const stroke = variant === "reversed" ? "rgba(246, 242, 231, 0.7)" : "rgba(11, 35, 64, 0.18)";
  const monogram = variant === "reversed" ? "var(--ink)" : "var(--parchment)";

  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      viewBox="0 0 72 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 4L61 12.5V39C61 58.3 49.8 71.9 36 81C22.2 71.9 11 58.3 11 39V12.5L36 4Z"
        fill={shield}
        stroke={stroke}
      />
      <path
        d="M23 24.5H49"
        stroke="var(--brass)"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <path
        d="M25 60.5H47"
        stroke="var(--brass)"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <text
        x="36"
        y="53"
        fill={monogram}
        fontFamily="var(--font-display)"
        fontSize="33"
        fontWeight="700"
        letterSpacing="-0.06em"
        textAnchor="middle"
      >
        S
      </text>
    </svg>
  );
}
