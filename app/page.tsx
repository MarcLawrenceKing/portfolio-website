"use client";

import HeroPicture from "./HeroPicture";
import { awardsAndEducation, experience, featuredProjects, techStack } from "./portfolio-content";
import ProjectsSection from "./projects-section";
import { defaultNavigationItems } from "./navigation";
import SiteHeader from "./site-header";

export default function Home() {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(120,120,120,0.12),_transparent_34%),linear-gradient(180deg,var(--surface)_0%,var(--background)_100%)] text-[var(--foreground)] transition-colors duration-300">
      <SiteHeader navigationItems={defaultNavigationItems} onLogoClick={handleLogoClick} />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <section className="grid gap-10 lg:gap-15 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
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
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
              >
                View Resume
              </a>
              <a href="#contact" className="rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5">
                Contact Me
              </a>
            </div>
          </div>
          <div className="xl:scale-90 origin-top">
            <HeroPicture />
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

        <ProjectsSection
          title="Featured Projects"
          projects={featuredProjects.slice(0, 3)}
          ctaHref="/projects"
          ctaLabel="VIEW ALL PROJECTS"
        />

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
