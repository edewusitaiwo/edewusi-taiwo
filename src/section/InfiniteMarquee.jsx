const DEFAULT_ITEMS = [
  "JWT",
  "REST APIS",
  "GIT",
  "POSTMAN",
  "CLOUDINARY",
  "RENDER",
  "REACT",
  "NODE.JS",
];

function DefaultMarqueeItem({ item }) {
  return (
    <span className="inline-flex items-center gap-7 font-sans text-xs font-medium tracking-[0.22em] text-secondary uppercase">
      <span>{item}</span>
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-primary/80"
      />
    </span>
  );
}

export default function InfiniteMarquee({
  items = DEFAULT_ITEMS,
  renderItem,
  speed = 28,
  reverse = false,
  pauseOnHover = false,
  gapClass = "gap-7",
  className = "",
}) {
  if (!items.length) return null;

  const renderTrack = (trackKey) => (
    <div
      key={trackKey}
      aria-hidden={trackKey === "clone" ? "true" : undefined}
      className={`flex shrink-0 items-center ${gapClass} pr-7`}
    >
      {items.map((item, index) => (
        <div key={`${trackKey}-${index}`} className="shrink-0">
          {renderItem ? (
            renderItem(item, index)
          ) : (
            <DefaultMarqueeItem item={item} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        "--marquee-duration": `${speed}s`,
      }}
      className={`group relative w-full overflow-hidden border-y border-border/70 bg-surface/60 py-4 ${className}`.trim()}
    >
      <div
        className={`animate-marquee ${reverse ? "[animation-direction:reverse]" : ""} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {renderTrack("primary")}
        {renderTrack("clone")}
      </div>
    </div>
  );
}
