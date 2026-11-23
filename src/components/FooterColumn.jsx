export default function FooterColumn({ title, children, className = "" }) {
  return (
    <div className={className}>
      {title && (
        <h3 className="font-sans text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
          {title}
        </h3>
      )}
      <div className="mt-5">{children}</div>
    </div>
  );
}
