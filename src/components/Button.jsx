export default function Button({
  variant = "primary",
  size = "md",
  shape = "pill",
  href,
  icon,
  children,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-sans font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 select-none";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]",
    secondary:
      "bg-surface text-white border border-border hover:bg-surface-light",
    ghost: "text-secondary hover:text-white hover:bg-surface-light",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const shapeStyles = {
    pill: "rounded-full",
    rounded: "rounded-lg",
  };

  const classes =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`.trim();

  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...props}>
        <span>{children}</span>
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
}
