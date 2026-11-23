import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactLinkCard({
  icon,
  label,
  value,
  href,
  external = false,
  index = 0,
  className = "",
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className={`group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/50 hover:bg-surface-light/50 sm:p-5 ${className}`.trim()}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80 text-secondary transition-colors group-hover:border-primary/40 group-hover:text-primary">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="font-sans text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
            {label}
          </p>
          <p className="mt-0.5 truncate font-sans text-sm font-medium text-white">
            {value}
          </p>
        </div>
      </div>

      <FiArrowUpRight
        className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
        aria-hidden="true"
      />
    </motion.a>
  );
}
