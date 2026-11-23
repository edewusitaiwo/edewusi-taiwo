import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const DEFAULT_SOCIALS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/your-username",
    external: true,
    icon: <FiGithub className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    external: true,
    icon: <FiLinkedin className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@example.com",
    external: false,
    icon: <FiMail className="h-4 w-4" aria-hidden="true" />,
  },
];

export default function SocialIconLinks({
  links = DEFAULT_SOCIALS,
  className = "",
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`.trim()}>
      {links.map((item) => (
        <a
          key={item.id || item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
          aria-label={item.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-secondary transition-colors hover:border-primary/60 hover:bg-surface-light hover:text-white"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
