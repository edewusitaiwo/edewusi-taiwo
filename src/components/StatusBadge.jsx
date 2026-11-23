export default function StatusBadge({
  status = "AVAILABLE FOR NEW PROJECTS",
  message = "Open to full-time roles and freelance work",
  className = "",
}) {
  return (
    <div
      className={`inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border border-border bg-surface/90 px-4 py-2 text-xs ${className}`.trim()}
    >
      <span className="inline-flex items-center gap-2 font-medium tracking-[0.14em] text-primary uppercase">
        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
        {status}
      </span>
      {message && (
        <>
          <span className="text-border" aria-hidden="true">
            |
          </span>
          <span className="text-secondary">{message}</span>
        </>
      )}
    </div>
  );
}
