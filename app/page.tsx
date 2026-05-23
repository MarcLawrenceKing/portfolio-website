"use client";

import { awardsAndEducation, buildSystems, experience, featuredProjects, techStack } from "./portfolio-content";
import { toggleTheme } from "./theme";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(120,120,120,0.12),_transparent_34%),linear-gradient(180deg,var(--surface)_0%,var(--background)_100%)] text-[var(--foreground)] transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 mb-8 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur">
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">Portfolio</p>
              <p className="text-lg font-semibold">Your Name</p>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              Toggle theme
            </button>
          </div>
        </header>

        <section className="grid gap-10 py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:py-16">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]">
              Available for freelance, full-time, and product collaborations
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Simple portfolio sites that make projects, process, and experience easy to scan.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted-strong)] sm:text-lg">
                This is a clean starter layout with filler content for a personal portfolio. It includes the sections you asked for, with a light and dark theme switch and a restrained visual style.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Currently</p>
              <p className="mt-2 text-lg font-medium">Building calm, useful interfaces.</p>
            </div>
            <div className="grid gap-3 text-sm text-[var(--muted-strong)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <span>Focus</span>
                <span className="font-medium text-[var(--foreground)]">Product design + front-end</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <span>Location</span>
                <span className="font-medium text-[var(--foreground)]">Remote</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Response</span>
                <span className="font-medium text-[var(--foreground)]">Within 24 hours</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="py-10 sm:py-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Featured Projects</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Selected work and placeholder examples</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.name} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
                <div className="mb-5 h-24 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--accent-soft)]" />
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Experience</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Where the work has happened</h2>
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
                <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--muted-strong)]">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Tech Stack</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Tools and platforms</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--foreground)]">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">How I Build Systems</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">A simple approach to products and interfaces</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {buildSystems.map((item, index) => (
              <article key={item} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm font-medium text-[var(--muted)]">0{index + 1}</p>
                <p className="mt-3 text-base leading-7 text-[var(--muted-strong)]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Awards & Education</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">A few filler highlights</h2>
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

        <footer id="contact" className="mt-10 border-t border-[var(--border)] py-10 sm:py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Let&apos;s build something simple and useful.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted-strong)]">
                Replace these placeholder details with your real email, socials, and preferred contact path.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-medium transition hover:-translate-y-0.5" href="mailto:hello@example.com">
                hello@example.com
              </a>
              <a className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-medium transition hover:-translate-y-0.5" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
