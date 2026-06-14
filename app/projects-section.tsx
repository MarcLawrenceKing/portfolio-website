import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "./portfolio-content";

type Project = (typeof featuredProjects)[number];

type ProjectsSectionProps = {
  id?: string;
  title: string;
  projects: Project[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ProjectsSection({
  id = "projects",
  title,
  projects,
  ctaHref,
  ctaLabel,
}: ProjectsSectionProps) {
  return (
    <section id={id} className="scroll-mt-32 py-10 sm:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
        {ctaHref && ctaLabel ? (
          <Link
            href={ctaHref}
            className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
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
  );
}
