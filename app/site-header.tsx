"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { getServerThemeSnapshot, getThemeSnapshot, subscribeThemeChange, toggleTheme } from "./theme";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navigationItems: NavigationItem[];
  logoHref?: string;
  onLogoClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function SiteHeader({ navigationItems, logoHref = "/", onLogoClick }: SiteHeaderProps) {
  const theme = useSyncExternalStore(subscribeThemeChange, getThemeSnapshot, getServerThemeSnapshot);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-2 sm:px-8 lg:px-10">
        <Link href={logoHref} className="shrink-0" aria-label="Go to homepage" onClick={onLogoClick}>
          <Image
            src={theme === "dark" ? "/mk-logos/light.jpg" : "/mk-logos/dark.jpg"}
            alt="MK logo"
            width={40}
            height={40}
            className="h-10 w-auto rounded-lg border border-[var(--border)] object-cover"
            priority
          />
        </Link>

        <nav aria-label="Section navigation" className="hidden items-center gap-2 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={handleThemeToggle}
          className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] p-2 text-[var(--foreground)] transition hover:shadow-sm md:hidden"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleThemeToggle}
            className="hidden items-center rounded-full border border-[var(--border)] bg-[var(--card)] p-1 text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-sm md:inline-flex"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "dark"}
          >
            <span className="relative inline-flex h-8 w-20 items-center rounded-full bg-[var(--accent-soft)] p-2">
              <span
                className={`absolute h-6 w-8 rounded-full bg-[var(--foreground)] shadow-sm transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-8" : "translate-x-0"
                }`}
              />
              <span className="relative z-10 grid h-full w-full grid-cols-2 text-[var(--background)]">
                <span className="flex items-center justify-center">
                  <FaSun size={10} />
                </span>
                <span className="flex items-center justify-center">
                  <FaMoon size={10} />
                </span>
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] p-3 text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-sm md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_96%,transparent)] md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 sm:px-8 lg:px-10">
          <nav aria-label="Mobile section navigation" className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
