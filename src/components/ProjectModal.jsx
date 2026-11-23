import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import Button from "./Button";
import TechPill from "./TechPill";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-sans text-xs font-medium text-primary">
                    {project.year}
                  </span>
                  <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
                    {project.subtitle}
                  </span>
                </div>
                <h3
                  id="project-modal-title"
                  className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl"
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-background/80 text-secondary transition-colors hover:bg-surface-light hover:text-white"
              >
                <FiX className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Overview */}
            <p className="mt-4 font-sans text-sm leading-relaxed text-secondary sm:text-base">
              {project.caseStudy?.overview || project.description}
            </p>

            {/* Architecture & Highlights */}
            {project.caseStudy?.highlights?.length > 0 && (
              <div className="mt-6 rounded-xl border border-border bg-background/60 p-5">
                <h4 className="font-sans text-xs font-medium tracking-[0.2em] text-primary uppercase">
                  Architecture & Key Decisions
                </h4>
                <ul className="mt-3.5 space-y-2.5">
                  {project.caseStudy.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 font-sans text-sm text-secondary"
                    >
                      <FiCheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Stack Tags */}
            {project.stack?.length > 0 && (
              <div className="mt-6">
                <p className="font-sans text-xs font-medium tracking-[0.2em] text-muted uppercase">
                  Technologies Used
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechPill key={tech} label={tech} />
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <Button
                href={project.liveUrl || "#projects"}
                target={project.liveUrl ? "_blank" : undefined}
                rel={project.liveUrl ? "noreferrer" : undefined}
                variant="primary"
                size="md"
                shape="pill"
                icon={<FiExternalLink className="h-4 w-4" aria-hidden="true" />}
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
                icon={<FiGithub className="h-4 w-4" aria-hidden="true" />}
              >
                GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
