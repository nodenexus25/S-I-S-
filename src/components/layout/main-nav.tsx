"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/content/navigation";

export function MainNav({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-7 lg:flex">
      {items.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <div key={item.href} className="group relative">
            <Link
              href={item.href}
              className={`relative inline-flex pb-2 text-[0.7rem] font-semibold tracking-[0.16em] transition-colors duration-400 [font-variant:all-small-caps] ${isActive ? "text-[var(--forest-deep)]" : "text-[var(--ink-soft)] hover:text-[var(--forest-deep)]"}`}
            >
              {item.title}
              <span
                className={`absolute inset-x-0 -bottom-px h-px origin-left bg-[var(--terracotta)] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>

            {item.children?.length ? (
              <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[28rem] -translate-x-1/2 pt-5 opacity-0 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="border border-[color:rgba(47,74,60,0.15)] bg-[color:rgba(248,247,242,0.99)] p-6 shadow-[0_28px_70px_rgba(30,51,40,0.12)] backdrop-blur">
                  <div className="grid gap-4">
                    {item.children.map((child) => {
                      const isChildActive =
                        pathname === child.href || pathname.startsWith(`${child.href.split("#")[0]}/`);

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/link grid gap-1.5 border-b border-[color:rgba(47,74,60,0.1)] pb-4 last:border-b-0 last:pb-0"
                        >
                          <span
                            className={`font-display text-xl tracking-[-0.01em] transition-colors duration-300 ${isChildActive ? "text-[var(--forest-deep)]" : "text-[var(--forest-deep)] group-hover/link:text-[var(--terracotta)]"}`}
                          >
                            {child.title}
                          </span>
                          <span className="text-[0.82rem] leading-6 text-[var(--ink-soft)]/80">
                            {child.description}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
