"use client";

type Props = {
  open: boolean;
  title: string;
  children: React.ReactNode;
};

export function Modal({ open, title, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[color:rgba(16,35,63,0.45)] p-4">
      <div className="w-full max-w-xl rounded-[var(--radius-lg)] bg-white p-6 shadow-[var(--shadow-elevated)]">
        <h3 className="font-display text-3xl text-[var(--color-primary-900)]">{title}</h3>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
