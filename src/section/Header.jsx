import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Button from "../components/Button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setActiveNav(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="group flex items-center gap-3.5"
        >
          {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface font-heading text-sm font-bold tracking-wider text-primary transition-colors group-hover:border-primary/60 group-hover:bg-surface-light">
            AM
          </div> */}
          <div className="flex flex-col">
            <span className="font-heading text-base font-bold leading-tight text-white">
              Edewusi Taiwo
            </span>
            <span className="mt-0.5 font-sans text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative py-2 font-sans text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-secondary hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-primary"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            shape="pill"
            icon={
              <FiArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            }
            className="group hidden sm:inline-flex"
            onClick={() => handleNavClick("#contact")}
          >
            Let&apos;s Talk
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors hover:bg-surface-light hover:text-white md:hidden"
          >
            {mobileMenuOpen ? (
              <FiX className="h-5 w-5" aria-hidden="true" />
            ) : (
              <FiMenu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-surface px-4 pb-6 pt-4 md:hidden">
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-lg px-3 py-2.5 font-sans text-sm font-medium transition-colors ${
                    isActive
                      ? "border-l-2 border-primary bg-surface-light text-white"
                      : "text-secondary hover:bg-surface-light/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                shape="pill"
                icon={
                  <FiArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                }
                className="group w-full"
                onClick={() => handleNavClick("#contact")}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
