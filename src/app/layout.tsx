import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import { CrestMark } from "@/components/brand/crest-mark";
import { MainNav } from "@/components/layout/main-nav";
import { navigationItems, utilityNavigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const fontDisplay = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} · ${siteConfig.location}`,
    template: `%s | ${siteConfig.name}, ${siteConfig.location}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerColumns = [
    {
      title: "About SIS",
      links: navigationItems.find((item) => item.title === "About SIS")?.children ?? [],
    },
    {
      title: "Academics",
      links: navigationItems.find((item) => item.title === "Academics")?.children?.slice(0, 6) ?? [],
    },
    {
      title: "Admissions",
      links: navigationItems.find((item) => item.title === "Admissions")?.children ?? [],
    },
    {
      title: "Life @ SIS",
      links: navigationItems.find((item) => item.title === "Life @ SIS")?.children ?? [],
    },
  ];

  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="min-h-screen bg-[var(--ivory)] font-sans text-[var(--ink)] antialiased">
        <header className="sticky top-0 z-40 border-b border-[color:rgba(47,74,60,0.16)] bg-[color:rgba(248,247,242,0.96)] backdrop-blur">
          <div className="border-b border-[color:rgba(47,74,60,0.1)] bg-[var(--ivory-warm)]">
            <div className="editorial-shell flex items-center justify-between gap-4 py-2.5">
              <p className="hidden text-[0.7rem] tracking-[0.16em] text-[var(--ink-soft)] [font-variant:all-small-caps] md:block">
                Academic Session {siteConfig.academicYear.current} · Operated by {siteConfig.governance.operator}
              </p>
              <div className="ml-auto flex items-center gap-5 text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--forest-deep)] [font-variant:all-small-caps]">
                {utilityNavigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors duration-300 hover:text-[var(--terracotta)]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="editorial-shell flex items-center justify-between gap-6 py-4">
            <Link href="/" className="flex min-w-0 items-center gap-4">
              <div className="flex h-[56px] w-[54px] shrink-0 items-center justify-center border border-[color:rgba(47,74,60,0.25)] bg-[var(--forest-deep)] text-[var(--ivory)]">
                <CrestMark className="h-11 w-10" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-[2.2rem] leading-none tracking-[-0.015em] text-[var(--forest-deep)]">
                  {siteConfig.shortName}
                </p>
                <p className="mt-1.5 text-[0.68rem] tracking-[0.22em] text-[var(--terracotta)] [font-variant:all-small-caps]">
                  International School · {siteConfig.location}
                </p>
              </div>
            </Link>
            <MainNav items={navigationItems} />
            <Link
              href="/admissions"
              className="hidden border border-[var(--terracotta)] bg-[var(--terracotta)] px-5 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--ivory)] transition-colors duration-400 hover:bg-transparent hover:text-[var(--terracotta)] [font-variant:all-small-caps] lg:inline-flex"
            >
              Enquire · Apply
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-24 bg-[var(--forest-deep)] text-[var(--ivory)]">
          <div className="editorial-shell border-t border-[color:rgba(184,89,62,0.25)] py-16">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr_1fr]">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-14 items-center justify-center border border-[color:rgba(184,89,62,0.35)] bg-[var(--ivory)] text-[var(--forest-deep)]">
                    <CrestMark className="h-12 w-10" />
                  </div>
                  <div>
                    <p className="font-display text-[2.4rem] leading-none tracking-[-0.015em]">
                      {siteConfig.shortName}
                    </p>
                    <p className="mt-1.5 text-[0.68rem] tracking-[0.22em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                      {siteConfig.location} · Maharashtra
                    </p>
                  </div>
                </div>
                <p className="mt-7 max-w-md text-sm leading-8 text-[var(--ivory)]/76">
                  {siteConfig.motto}.
                </p>
                <p className="mt-3 max-w-md text-sm leading-8 text-[var(--ivory)]/68">
                  {siteConfig.philosophy}
                </p>
                <div className="mt-7 grid gap-2 text-[0.72rem] tracking-[0.18em] text-[var(--sage)] [font-variant:all-small-caps]">
                  <p>CBSE Affiliation Number · {siteConfig.trustMarkers.cbseAffiliationNumber}</p>
                  <p>School Code · {siteConfig.trustMarkers.schoolCode}</p>
                </div>
              </div>
              <div>
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                  {footerColumns.map((column) => (
                    <div key={column.title}>
                      <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                        {column.title}
                      </p>
                      <div className="mt-4 grid gap-3 border-t border-[color:rgba(248,247,242,0.12)] pt-4 text-sm">
                        {column.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="w-fit border-b border-transparent pb-1 text-[var(--ivory)]/74 leading-6 transition-colors duration-300 hover:border-[var(--terracotta-soft)] hover:text-[var(--ivory)]"
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[var(--terracotta-soft)] [font-variant:all-small-caps]">
                  Contact
                </p>
                <div className="mt-4 grid gap-3 border-t border-[color:rgba(248,247,242,0.12)] pt-4 text-sm leading-7 text-[var(--ivory)]/78">
                  <p>{siteConfig.contact.address}</p>
                  <p>{siteConfig.contact.phone}</p>
                  <p>{siteConfig.contact.email}</p>
                  <p>Admissions · {siteConfig.contact.admissionsEmail}</p>
                  <p>{siteConfig.contact.officeHours}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-[0.7rem] font-semibold tracking-[0.16em] text-[var(--sage)] [font-variant:all-small-caps]">
                  {siteConfig.socialLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="transition-colors duration-300 hover:text-[var(--terracotta-soft)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14 border-t border-[color:rgba(248,247,242,0.1)] pt-6 text-xs text-[var(--ivory)]/55">
              <p>
                &copy; Copyright {new Date().getFullYear()} · {siteConfig.name}, {siteConfig.location} · All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
