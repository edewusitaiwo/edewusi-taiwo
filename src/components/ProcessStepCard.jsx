import { motion } from "framer-motion";

export default function ProcessStepCard({
  number,
  icon,
  title,
  description,
  index = 0,
  className = "",
}) {
  const stepNumber = number || String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.25),
        ease: "easeOut",
      }}
      className={`group flex items-start gap-4 sm:gap-5 ${className}`.trim()}
    >
      {/* Left Step Number Badge */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface font-mono text-xs font-medium text-muted transition-colors group-hover:border-primary/50 group-hover:text-primary">
        {stepNumber}
      </div>

      {/* Main Step Card */}
      <div className="flex-1 rounded-2xl border border-border bg-surface p-5 transition-colors group-hover:border-primary/40 sm:p-6">
        <div className="flex items-center gap-2.5">
          {icon && (
            <span className="inline-flex shrink-0 text-primary">{icon}</span>
          )}
          <h3 className="font-heading text-base font-bold text-white sm:text-lg">
            {title}
          </h3>
        </div>

        <p className="mt-2.5 font-sans text-sm leading-relaxed text-secondary">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
