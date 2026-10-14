type GalleryItem = {
  title: string;
  category: string;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={`${item.category}-${item.title}`}
          className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-50)] p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-500)]">
            {item.category}
          </p>
          <p className="mt-3 font-display text-3xl text-[var(--color-primary-900)]">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
