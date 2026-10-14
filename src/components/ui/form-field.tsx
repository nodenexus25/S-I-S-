type Props = {
  label: string;
  hint?: string;
  children: React.ReactNode;
};

export function FormField({ label, hint, children }: Props) {
  return (
    <label className="grid gap-2 text-sm text-[var(--color-ink-700)]">
      <span className="font-semibold text-[var(--color-primary-900)]">{label}</span>
      {children}
      {hint ? <span className="text-xs">{hint}</span> : null}
    </label>
  );
}
