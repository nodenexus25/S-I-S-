type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  tone?: "ivory" | "warm" | "sage";
  id?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  tone = "ivory",
  id,
}: Props) {
  const toneClass =
    tone === "warm"
      ? "bg-[var(--ivory-warm)]"
      : tone === "sage"
        ? "bg-[var(--sage-wash)]"
        : "bg-[var(--ivory)]";

  return (
    <section id={id} className={`w-full ${toneClass} ${className}`}>
      <div className="editorial-shell py-[clamp(3.5rem,7vw,6rem)]">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
          <h2 className="text-[var(--type-h2)] text-[var(--forest-deep)]">{title}</h2>
          {description ? (
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.85] text-[var(--ink-soft)]">
              {description}
            </p>
          ) : null}
        </div>
        {children ? (
          <div className="mt-[clamp(2.5rem,5vw,4rem)] border-t border-[color:rgba(47,74,60,0.16)] pt-[clamp(2.5rem,5vw,4rem)]">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
