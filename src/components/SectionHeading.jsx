import { motion } from "framer-motion";

export default function SectionHeading({
  label = "ABOUT",
  index = "01",
  title = "A little about me",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      <div className="flex items-center gap-3 font-sans text-xs font-medium tracking-[0.22em] text-primary uppercase">
        <span aria-hidden="true" className="h-[1.5px] w-7 bg-primary" />
        <span>{label}</span>
        {index && (
          <>
            <span className="text-muted">/</span>
            <span className="text-muted">{index}</span>
          </>
        )}
      </div>

      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
    </motion.div>
  );
}
