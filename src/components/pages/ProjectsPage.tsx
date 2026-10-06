import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { getFeaturedProjects, getProjects } from "../../api/projects";
import { getUi } from "../../api/ui";
import { localizePath, useLang } from "../../lib/i18n";
import { ProjectCard } from "../layout/ProjectCard";
import { SectionHead } from "../layout/SectionHead";

const ALL = "__all";

/**
 * `featuredOnly` is what separates the landing section from /projects: without
 * it the two rendered the same grid under the same heading, so the hero's
 * "View projects" button led to a page the visitor had just scrolled past.
 * The full page also filters; the landing section deliberately does not.
 */
export const ProjectsPage = ({ featuredOnly }: { featuredOnly?: boolean }) => {
  const lang = useLang();
  const ui = getUi(lang);
  const [active, setActive] = useState(ALL);

  const all = getProjects();
  /* Tags come from the content, so adding a project with a new tag adds a
     filter without touching this file. */
  const tags = [...new Set(all.map((project) => project.tag))];
  const filtered = active === ALL ? all : all.filter((p) => p.tag === active);
  const projects = featuredOnly ? getFeaturedProjects() : filtered;

  const filters = [
    { key: ALL, label: ui.project.filterAll, count: all.length },
    ...tags.map((tag) => ({
      key: tag,
      label: tag,
      count: all.filter((p) => p.tag === tag).length,
    })),
  ];

  return (
    <section className="section-block">
      {/* The eyebrow introduces the block on the landing page, where it sits
          among other sections; on /projects the page is the block. */}
      <SectionHead
        label={featuredOnly ? ui.sections.projectsLabel : undefined}
        title={ui.sections.projectsTitle}
      />

      {!featuredOnly && (
        <div className="filter-bar" role="group">
          {filters.map(({ key, label, count }) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
              className={`filter ${active === key ? "filter--active" : ""}`}
            >
              {label}
              <span className="filter__count">{count}</span>
            </button>
          ))}
        </div>
      )}

      {/* The landing selection is always three cards, so it keeps three
          columns at 2xl instead of leaving the fourth empty. */}
      <div
        className={`section section--flush section--portfolio ${featuredOnly ? "section--portfolio-featured" : ""}`}
      >
        <ProjectCard projects={projects} />
      </div>

      {featuredOnly && (
        <div className="section-block__more">
          <Link
            to={localizePath("/projects", lang)}
            className="btn btn--ghost"
          >
            {ui.project.viewAll}
            <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </section>
  );
};
