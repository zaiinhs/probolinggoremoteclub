"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="theme-header sticky top-0 z-50 border-b-2 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--ink)] bg-[var(--prc-gold)] text-sm font-extrabold tracking-[0.04em] text-[#15110c] shadow-[3px_3px_0_var(--shadow-color)] transition group-hover:-rotate-6">
            PRC
          </div>
          <div className="leading-tight">
            <div className="theme-heading text-[0.82rem] font-extrabold uppercase leading-none tracking-[0.12em] sm:text-sm">
              Probolinggo
            </div>
            <div className="theme-copy mt-1 flex items-center gap-1.5 whitespace-nowrap text-[0.8rem] sm:text-sm">
              Remote Club
              <span className="hidden rounded-full border-2 border-[var(--ink)] bg-[var(--prc-leaf)] px-2 py-0.5 text-[0.58rem] font-extrabold uppercase leading-none tracking-[0.1em] text-[#15110c] sm:inline-flex">
                Gratis
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex">
          <div className="theme-nav-shell flex items-center gap-0.5">
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

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <div className="hidden lg:block">
            <Link href="/gabung" className="btn-primary header-cta whitespace-nowrap">
              Gabung →
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="theme-icon-button inline-flex"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.4} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t-2 border-[var(--ink)] lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="theme-mobile-panel flex flex-col gap-3">
              <div className="theme-mobile-heading-row">
                <div>
                  <p className="theme-heading text-sm font-extrabold">Navigasi</p>
                  <p className="theme-muted text-xs">Pilih halaman yang mau kamu buka</p>
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
                Gabung Komunitas →
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
