type ToastProps = {
  title: string;
  description: string;
};

export function Toast({ title, description }: ToastProps) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-soft)]">
      <p className="font-semibold text-[var(--color-primary-900)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--color-ink-700)]">{description}</p>
    </div>
  );
}
