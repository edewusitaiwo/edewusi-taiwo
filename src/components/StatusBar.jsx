export default function StatsBar({ stats = [], className = "" }) {
  if (!stats.length) return null;

  return (
    <div
      className={`grid grid-cols-1 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/85 sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${className}`.trim()}
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="flex flex-col justify-between px-5 py-4"
        >
          <span className="font-sans text-xs text-secondary">{item.label}</span>
          <span className="mt-1.5 font-heading text-2xl font-bold text-white">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
