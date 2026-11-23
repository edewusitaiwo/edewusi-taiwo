import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiRadio,
} from "react-icons/fi";
import Button from "../components/Button";
import SocialIconLinks from "../components/SocialIconLinks";
import FooterColumn from "../components/FooterColumn";

const DEFAULT_NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer({
  monogram = "AM",
  name = "Alex Morgan",
  bio = "Full-stack developer building scalable web applications from database schema and service architecture to the interface people actually use.",
  email = "hello@example.com",
  location = "Remote · Worldwide",
  availability = "Available for new projects",
  githubUrl = "https://github.com/your-username",
  linkedinUrl = "https://linkedin.com/in/your-username",
  navLinks = DEFAULT_NAV_LINKS,
  techNote = "BUILT WITH REACT · VITE · TAILWIND CSS",
}) {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      id: "github",
      label: "GitHub",
      href: githubUrl,
      external: true,
      icon: <FiGithub className="h-4 w-4" aria-hidden="true" />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: linkedinUrl,
      external: true,
      icon: <FiLinkedin className="h-4 w-4" aria-hidden="true" />,
    },
    {
      id: "email",
      label: "Email",
      href: `mailto:${email}`,
      external: false,
      icon: <FiMail className="h-4 w-4" aria-hidden="true" />,
    },
  ];

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-page py-16 sm:py-20">
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5">
            <a href="#home" className="group inline-flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface font-heading text-sm font-bold tracking-wider text-primary transition-colors group-hover:border-primary/60 group-hover:bg-surface-light">
                {monogram}
              </div>
              <span className="font-heading text-base font-bold text-white">
                {name}
              </span>
            </a>

            <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-secondary">
              {bio}
            </p>

            <SocialIconLinks links={socialLinks} className="mt-6" />
          </div>

          {/* Column 2: Navigate */}
          <FooterColumn title="NAVIGATE" className="md:col-span-3">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-secondary transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 3: Get In Touch */}
          <FooterColumn title="GET IN TOUCH" className="md:col-span-4">
            <ul className="space-y-3.5 font-sans text-sm text-secondary">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <FiMail
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMapPin
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiRadio
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{availability}</span>
              </li>
            </ul>

            <div className="mt-6">
              <Button
                href="#contact"
                variant="secondary"
                size="md"
                shape="pill"
                icon={
                  <FiArrowRight
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                }
              >
                Start a conversation
              </Button>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-sans text-xs text-muted">
            &copy; {year} {name}. All rights reserved.
          </p>
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
            {techNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
