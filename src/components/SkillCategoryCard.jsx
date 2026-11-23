import { motion } from "framer-motion";
import TechPill from "./TechPill";

export default function SkillCategoryCard({
  icon,
  title,
  countLabel,
  description,
  skills = [],
  index = 0,
  className = "",
}) {
  const computedCount = countLabel || `${skills.length} TECHNOLOGIES`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className={`flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 sm:p-7 ${className}`.trim()}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                {title}
              </h3>
              <p className="mt-0.5 font-sans text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
                {computedCount}
              </p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
          />
        </div>

        {/* Description */}
        {description && (
          <p className="mt-5 font-sans text-sm leading-relaxed text-secondary">
            {description}
          </p>
        )}
      </div>

      {/* Technology Pills */}
      {skills.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <TechPill key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      )}
    </motion.article>
  );
}
