import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "./Button";
import TechPill from "./TechPill";

export default function ProjectCard({
  project,
  index = 0,
  reversed = false,
  maxVisibleTags = 5,
  onOpenCaseStudy,
  className = "",
}) {
  const numberLabel = project.number || String(index + 1).padStart(2, "0");
  const visibleTags = project.stack?.slice(0, maxVisibleTags) || [];
  const remainingCount = Math.max(
    0,
    (project.stack?.length || 0) - maxVisibleTags,
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40 ${className}`.trim()}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Preview Column */}
        <div
          className={`relative min-h-[260px] overflow-hidden border-b border-border bg-background sm:min-h-[320px] lg:col-span-6 lg:border-b-0 ${
            reversed ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r"
          }`}
        >
          {project.imageSrc ? (
            <img
              src={project.imageSrc}
              alt={project.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="h-full w-full bg-[radial-gradient(circle_at_50%_55%,rgba(59,130,246,0.24),transparent_60%),linear-gradient(to_right,rgba(38,50,68,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,50,68,0.22)_1px,transparent_1px)] bg-[length:100%_100%,44px_44px,44px_44px]"
            />
          )}

          {/* Top Overlay Row: Category Pill + Project Number */}
          <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
            {project.category && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/85 px-3.5 py-1.5 font-sans text-[11px] font-medium tracking-[0.18em] text-secondary uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                {project.category}
              </span>
            )}

            <span className="font-mono text-xs font-medium text-muted">
              {numberLabel}
            </span>
          </div>
        </div>

        {/* Content Column */}
        <div
          className={`flex flex-col justify-center p-6 sm:p-8 lg:col-span-6 lg:p-10 ${
            reversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Year + Role/Type Label */}
          <div className="flex flex-wrap items-center gap-3">
            {project.year && (
              <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                {project.year}
              </span>
            )}
            {project.subtitle && (
              <>
                <span aria-hidden="true" className="h-[1px] w-6 bg-border" />
                <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
                  {project.subtitle}
                </span>
              </>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3.5 font-sans text-sm leading-relaxed text-secondary sm:text-[15px]">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          {visibleTags.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {visibleTags.map((tech) => (
                <TechPill key={tech} label={tech} className="px-2.5 py-1.5" />
              ))}
              {remainingCount > 0 && (
                <span className="inline-flex items-center rounded-lg border border-border bg-background/80 px-2.5 py-1.5 font-sans text-xs font-medium text-muted">
                  +{remainingCount}
                </span>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={() => onOpenCaseStudy?.(project)}
              variant="secondary"
              size="md"
              shape="pill"
              icon={
                <FiArrowRight
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
              }
              className="!border-primary/40 !bg-primary/10 hover:!bg-primary/20"
            >
              Case study
            </Button>

            <Button
              href={project.liveUrl || "#projects"}
              target={project.liveUrl ? "_blank" : undefined}
              rel={project.liveUrl ? "noreferrer" : undefined}
              variant="secondary"
              size="md"
              shape="pill"
              icon={
                <FiExternalLink
                  className="h-3.5 w-3.5 text-secondary"
                  aria-hidden="true"
                />
              }
            >
              Live Demo
            </Button>

            <Button
              href={project.githubUrl || "#projects"}
              target={project.githubUrl ? "_blank" : undefined}
              rel={project.githubUrl ? "noreferrer" : undefined}
              variant="secondary"
              size="md"
              shape="pill"
              icon={
                <FiGithub
                  className="h-3.5 w-3.5 text-secondary"
                  aria-hidden="true"
                />
              }
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
