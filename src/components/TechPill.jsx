export default function TechPill({ icon, label, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 font-sans text-xs font-medium text-secondary transition-colors hover:border-primary/50 hover:bg-surface-light hover:text-white ${className}`.trim()}
    >
      {icon && (
        <span className="inline-flex shrink-0 text-primary">{icon}</span>
      )}
      <span>{label}</span>
    </span>
  );
}
