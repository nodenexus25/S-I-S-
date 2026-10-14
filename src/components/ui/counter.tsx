type CounterItem = {
  value: string;
  label: string;
};

export function Counter({ items }: { items: CounterItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6">
          <p className="font-display text-4xl text-[var(--color-primary-900)]">{item.value}</p>
          <p className="mt-2 text-sm text-[var(--color-ink-700)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
