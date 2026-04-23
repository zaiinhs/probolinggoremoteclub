"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="theme-header sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1.15rem] bg-[linear-gradient(135deg,var(--prc-sky),var(--prc-leaf),var(--prc-grape))] text-sm font-black tracking-[0.18em] text-slate-950 shadow-[0_10px_30px_rgba(47,109,166,0.28)]">
            PRC
          </div>
          <div className="min-w-0">
            <div className="theme-heading truncate text-[0.78rem] font-black uppercase tracking-[0.24em] sm:text-sm">
              Probolinggo
            </div>
            <div className="theme-copy flex items-center gap-2 truncate text-sm transition group-hover:text-[var(--foreground)]">
              Remote Club
              <span className="hidden rounded-full border border-[var(--border)] px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:inline-flex">
                Free
              </span>
            </div>
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end lg:justify-between lg:pl-8">
          <nav className="hidden items-center lg:flex">
            <div className="theme-nav-shell flex items-center gap-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`theme-nav-link ${
                    pathname === item.href ? "theme-nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <Link href="/gabung" className="btn-primary header-cta hidden lg:inline-flex">
              Gabung Komunitas
            </Link>
            <button
              type="button"
              className="theme-icon-button inline-flex lg:hidden"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setMobileMenuOpen((value) => !value)}
            >
              {mobileMenuOpen ? "Tutup" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-[var(--border)] lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="theme-mobile-panel flex flex-col gap-3">
              <div className="theme-mobile-heading-row">
                <div>
                  <p className="theme-heading text-sm font-semibold">Navigasi</p>
                  <p className="theme-muted text-xs">Pilih halaman yang ingin kamu buka</p>
                </div>
              </div>
              <nav className="grid gap-2">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`theme-mobile-link ${
                      pathname === item.href ? "theme-mobile-link-active" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link href="/gabung" className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
                Gabung Komunitas
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
