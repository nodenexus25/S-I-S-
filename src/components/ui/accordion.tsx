type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.title}
          className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5"
        >
          <summary className="cursor-pointer list-none font-semibold text-[var(--color-primary-900)]">
            {item.title}
          </summary>
          <div className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
