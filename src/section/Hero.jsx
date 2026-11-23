import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
} from "react-icons/fi";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import StatsBar from "../components/StatusBar";
import CodePreviewCard from "../components/CodePreviewCard";

const HERO_STATS = [
  { label: "Production projects", value: "4+" },
  { label: "Years building end to end", value: "2" },
  { label: "Frontend + backend", value: "Full" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-hero-grid border-b border-border/40 py-12 sm:py-16 lg:py-20"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-7">
            <StatusBadge />

            <p className="mt-6 font-sans text-base text-secondary sm:text-lg">
              Hi, I&apos;m a{" "}
              <strong className="font-semibold text-white">
                Full-Stack Software Developer
              </strong>
              .
            </p>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              I build digital
              <br />
              products and
              <br />
              <span className="inline-block border-b-2 border-primary pb-1 text-primary">
                scalable applications
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-secondary sm:text-lg">
              I transform ideas into functional, scalable and user-friendly
              applications by combining modern frontend technologies with
              powerful backend engineering.
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                shape="pill"
                icon={<FiArrowRight className="h-4 w-4" aria-hidden="true" />}
              >
                View My Projects
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                shape="pill"
                icon={
                  <FiMessageSquare
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                }
              >
                Contact Me
              </Button>

              <div className="flex items-center gap-2.5 pl-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-secondary transition-colors hover:border-primary/60 hover:bg-surface-light hover:text-white"
                >
                  <FiGithub className="h-4 w-4" aria-hidden="true" />
                </a>
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-secondary transition-colors hover:border-primary/60 hover:bg-surface-light hover:text-white"
                >
                  <FiLinkedin className="h-4 w-4" aria-hidden="true" />
                </a> */}
              </div>
            </div>

            {/* Bottom Stats */}
            <StatsBar stats={HERO_STATS} className="mt-9 w-full max-w-xl" />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <CodePreviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}
