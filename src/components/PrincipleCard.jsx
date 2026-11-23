import { motion } from "framer-motion";

export default function PrincipleCard({
  icon,
  title,
  description,
  index = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className={`flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40 ${className}`.trim()}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-base font-bold text-white">{title}</h3>
        <p className="mt-1 font-sans text-xs leading-relaxed text-secondary sm:text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
