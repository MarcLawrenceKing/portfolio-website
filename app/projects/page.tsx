import ProjectsSection from "../projects-section";
import { defaultNavigationItems } from "../navigation";
import { featuredProjects } from "../portfolio-content";
import SiteHeader from "../site-header";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(120,120,120,0.12),_transparent_34%),linear-gradient(180deg,var(--surface)_0%,var(--background)_100%)] text-[var(--foreground)] transition-colors duration-300">
      <SiteHeader navigationItems={defaultNavigationItems} />
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <ProjectsSection
          title="All Projects"
          projects={featuredProjects}
          ctaHref="/"
          ctaLabel="BACK TO HOME"
        />
      </div>
    </main>
  );
}
