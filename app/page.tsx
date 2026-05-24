"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { awardsAndEducation, experience, featuredProjects, techStack } from "./portfolio-content";
import { getServerThemeSnapshot, getThemeSnapshot, subscribeThemeChange, toggleTheme } from "./theme";

const navigationItems = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const theme = useSyncExternalStore(subscribeThemeChange, getThemeSnapshot, getServerThemeSnapshot);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    closeMenu();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileThemeToggle = () => {
    handleThemeToggle();
    closeMenu();
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(120,120,120,0.12),_transparent_34%),linear-gradient(180deg,var(--surface)_0%,var(--background)_100%)] text-[var(--foreground)] transition-colors duration-300">
      <header className="sticky top-0 z-30 w-full border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-2 sm:px-8 lg:px-10">
          <Link href="/" className="shrink-0" aria-label="Go to homepage" onClick={handleLogoClick}>
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

            <button
              type="button"
              onClick={handleMobileThemeToggle}
              className="inline-flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-sm"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              aria-pressed={theme === "dark"}
            >
              <span>Theme</span>
              <span className="inline-flex items-center gap-2 text-[var(--muted-strong)]">
                <FaSun size={12} />
                <FaMoon size={12} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <section className="grid gap-10 py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:py-16">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]">
              Full Stack Web Developer 
            </p>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:text-lg mb-0">
            Hi, I&apos;m
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Marc Lawrence King
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:text-lg">
                I build scalable full-stack web applications with real-world deployment experience in cloud and on-premise environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5">
                Contact Me
              </a>
            </div>
          </div>

        </section>

        <section id="experience" className="scroll-mt-32 py-10 sm:py-14">
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Experience</h2>
          <div className="mt-6 grid gap-4">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.company}</p>
                  </div>
                  <p className="text-sm font-medium text-[var(--muted-strong)]">{item.period}</p>
                </div>
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted-strong)]">
                  {item.details.map((detail) => (
                    <li key={detail.title}>
                      <span className="font-semibold text-[var(--foreground)]">{detail.title}</span> {detail.text}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-32 py-10 sm:py-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Featured Projects</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                className="group block rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
                aria-label={`Open ${project.name}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  width={300}
                  height={96}
                  className="mb-5 h-24 w-full rounded-2xl border border-[var(--border)] object-cover transition group-hover:opacity-95"
                />
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                      {item}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="tech-stack" className="scroll-mt-32 py-10 sm:py-14">
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Tech Stack</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {techStack.map((group) => (
              <article key={group.category} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="text-lg font-semibold">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-medium text-[var(--foreground)]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-32 py-10 sm:py-14">
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Education & Awards</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {awardsAndEducation.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--muted)]">{item.place}</p>
                <p className="mt-4 text-sm leading-6 text-[var(--muted-strong)]">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <footer id="contact" className="scroll-mt-32 mt-10 border-t border-[var(--border)] py-10 sm:py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Let&apos;s connect.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted-strong)]">
                © 2026 Marc Lawrence King. All rights reserved
              </p>
            </div>
            <div className="flex flex gap-3 text-sm">
              <a className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-medium transition hover:-translate-y-0.5" href="https://www.linkedin.com/in/marclawrenceking" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-medium transition hover:-translate-y-0.5" href="https://github.com/MarcLawrenceKing" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}