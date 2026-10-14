"use client";

type Tab = { id: string; label: string; content: React.ReactNode };

export function Tabs({ tabs, activeId }: { tabs: Tab[]; activeId: string }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            className={`rounded-full px-4 py-2 text-sm ${tab.id === activeId ? "bg-[var(--color-primary-900)] text-white" : "bg-[var(--color-surface-50)] text-[var(--color-primary-900)]"}`}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.id === activeId)?.content}</div>
    </div>
  );
}
