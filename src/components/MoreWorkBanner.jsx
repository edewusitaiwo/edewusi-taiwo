import { motion } from "framer-motion";
import { FiBookOpen, FiGithub } from "react-icons/fi";
import Button from "./Button";

export default function MoreWorkBanner({
  title = "More work in progress",
  description = "Smaller experiments and utilities live on my GitHub profile.",
  buttonLabel = "GitHub profile",
  githubUrl = "https://github.com",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`flex flex-col justify-between gap-5 rounded-2xl border border-dashed border-border bg-surface/60 px-6 py-5 sm:flex-row sm:items-center ${className}`.trim()}
    >
      <div className="flex items-start gap-4 sm:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80 text-primary">
          <FiBookOpen className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading text-base font-bold text-white">
            {title}
          </h3>
          <p className="mt-0.5 font-sans text-sm text-secondary">
            {description}
          </p>
        </div>
      </div>

      <Button
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        variant="secondary"
        size="md"
        shape="pill"
        icon={<FiGithub className="h-4 w-4" aria-hidden="true" />}
        className="self-start sm:self-auto"
      >
        {buttonLabel}
      </Button>
    </motion.div>
  );
}
