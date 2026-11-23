import { motion } from "framer-motion";
import { FiCrosshair, FiGlobe, FiLayers, FiSend } from "react-icons/fi";

const DEFAULT_META_ITEMS = [
  {
    id: "focus",
    label: "FOCUS",
    value: "Full-stack web applications",
    icon: <FiCrosshair className="h-4 w-4 text-primary" aria-hidden="true" />,
  },
  {
    id: "location",
    label: "LOCATION",
    value: "Remote · Worldwide",
    icon: <FiGlobe className="h-4 w-4 text-primary" aria-hidden="true" />,
  },
  {
    id: "stack",
    label: "CORE STACK",
    value: "React · Node.js · MongoDB",
    icon: <FiLayers className="h-4 w-4 text-primary" aria-hidden="true" />,
  },
  {
    id: "currently",
    label: "CURRENTLY",
    value: "Open to new opportunities",
    icon: <FiSend className="h-4 w-4 text-primary" aria-hidden="true" />,
  },
];

export default function ProfileShowcaseCard({
  badgeText = "BUILDING SINCE 2024",
  imageSrc = "/images/laptop-2.jpg",
  imageAlt = "Developer workspace with laptop and desk lamp in low light",
  metaItems = DEFAULT_META_ITEMS,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl ${className}`.trim()}
    >
      {/* Top Workspace Banner */}
      <div className="relative h-56 w-full overflow-hidden border-b border-border bg-background sm:h-64">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover object-center opacity-85"
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-[radial-gradient(circle_at_78%_35%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_25%_85%,rgba(37,99,235,0.14),transparent_60%),linear-gradient(180deg,rgba(17,24,39,0.65),rgba(9,13,22,0.95))]"
          />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"
        />

        {badgeText && (
          <div className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
            <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-secondary uppercase">
              {badgeText}
            </span>
          </div>
        )}
      </div>

      {/* Metadata Rows */}
      <div className="divide-y divide-border">
        {metaItems.map((item) => (
          <div
            key={item.id || item.label}
            className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-light/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-sans text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-0.5 truncate font-sans text-sm font-medium text-white">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
