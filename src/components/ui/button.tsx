import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "terracotta" | "forest";
  className?: string;
  target?: string;
  rel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: Props) {
  const base =
    "inline-flex items-center justify-center px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] [font-variant:all-small-caps]";

  let variantClass = "";
  switch (variant) {
    case "terracotta":
      variantClass =
        "border border-[var(--terracotta)] bg-[var(--terracotta)] text-[var(--ivory)] hover:bg-transparent hover:text-[var(--terracotta)]";
      break;
    case "forest":
      variantClass =
        "border border-[var(--forest-deep)] bg-[var(--forest-deep)] text-[var(--ivory)] hover:bg-transparent hover:text-[var(--forest-deep)]";
      break;
    case "secondary":
      variantClass =
        "border border-[var(--forest-deep)] bg-transparent text-[var(--forest-deep)] hover:bg-[var(--forest-deep)] hover:text-[var(--ivory)]";
      break;
    case "ghost":
      variantClass =
        "border border-transparent bg-transparent text-[var(--forest-deep)] hover:text-[var(--terracotta)] pl-0 pr-2";
      break;
    default:
      variantClass =
        "border border-[var(--terracotta)] bg-[var(--terracotta)] text-[var(--ivory)] hover:bg-transparent hover:text-[var(--terracotta)]";
  }

  const buttonClassName = `${base} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClassName} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} type="button">
      {children}
    </button>
  );
}
