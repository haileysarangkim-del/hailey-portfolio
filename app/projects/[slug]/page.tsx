import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { profile, projects } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | ${profile.name}` : "Project",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <header className="case-top">
        <Link href="/" aria-label="Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="hk" className="logo-star" />
        </Link>
      </header>

      <main className="case container">
        <Link href="/#projects" className="case-back">
          ← back to projects
        </Link>

        <div className="case-intro">
          <div>
            <h1 className="case-title">{project.title.toLowerCase()}</h1>
            <p className="case-summary">{project.summary}</p>
          </div>
          <div className="case-meta">
            <p className="case-period">{project.period} ⋆˙⟡</p>
            <div className="case-meta-grid">
              <div>
                <h2>role</h2>
                <p>{project.role}</p>
                <h2>team</h2>
                <p>{project.team}</p>
              </div>
              <div>
                <h2>skills</h2>
                {project.skills.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} className="case-hero" />

        {project.sections.map((sec) => (
          <section key={sec.label} className="case-section">
            <p className="case-label">{sec.label}</p>
            <h2 className="case-heading">{sec.heading}</h2>
            <div className="case-body">
              {sec.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {sec.stats && (
              <div className="case-stats">
                {sec.stats.map((st) => (
                  <div key={st.label}>
                    <span className="case-stat-value">{st.value}</span>
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
            )}
            {sec.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={sec.image} alt="" className="case-img" />
            )}
          </section>
        ))}

        <p className="case-end">that&apos;s it for this project, thanks for reading!</p>
        <p className="text-center">
          <Link href="/#projects" className="case-back">
            ← back to projects
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
