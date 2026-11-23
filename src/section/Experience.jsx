import { motion } from "framer-motion";
import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiGitCommit,
  FiLayout,
  FiLink2,
  FiSend,
  FiServer,
  FiShield,
  FiSun,
  FiTerminal,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import PrincipleCard from "../components/PrincipleCard";
import ProcessStepCard from "../components/ProcessStepCard";

const DEFAULT_PRINCIPLES = [
  {
    id: "clarity",
    title: "Clarity over cleverness",
    description:
      "Code should be obvious to the next person reading it, including future me.",
    icon: <FiSun className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "ship",
    title: "Ship, then refine",
    description:
      "A working version in front of users teaches more than a perfect plan.",
    icon: <FiSend className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "failure",
    title: "Design for failure",
    description:
      "Networks drop, payments fail. Systems should degrade gracefully, not collapse.",
    icon: <FiShield className="h-4 w-4" aria-hidden="true" />,
  },
];

const DEFAULT_STEPS = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "I start with the outcome the product needs to deliver, the constraints around it and who actually uses it — before choosing any technology.",
    icon: <FiTerminal className="h-4 w-4" aria-hidden="true" />,
  },
  {
    number: "02",
    title: "Design the architecture",
    description:
      "Services, data boundaries and integration points get sketched early, so the system stays understandable as features accumulate.",
    icon: <FiGitCommit className="h-4 w-4" aria-hidden="true" />,
  },
  {
    number: "03",
    title: "Build the interface",
    description:
      "Responsive, accessible frontends assembled from reusable components with predictable state and clear loading and error states.",
    icon: <FiLayout className="h-4 w-4" aria-hidden="true" />,
  },
  {
    number: "04",
    title: "Develop services and APIs",
    description:
      "Backend endpoints with validation, authorization and consistent response shapes, documented well enough to be used by anyone.",
    icon: <FiServer className="h-4 w-4" aria-hidden="true" />,
  },
  {
    number: "05",
    title: "Design the data layer",
    description:
      "Schemas, relationships and indexes chosen from real read and write patterns rather than guessed up front.",
    icon: <FiDatabase className="h-4 w-4" aria-hidden="true" />,
  },
  {
    number: "06",
    title: "Integrate third parties",
    description:
      "Payments, media, messaging and calendar providers wrapped behind small adapters so they can be replaced without touching product logic.",
    icon: <FiLink2 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    number: "07",
    title: "Test and debug",
    description:
      "Edge cases, empty states and failure paths are the interesting part — that is where most production issues actually come from.",
    icon: <FiCpu className="h-4 w-4" aria-hidden="true" />,
  },
  {
    number: "08",
    title: "Deploy and maintain",
    description:
      "Environment configuration, monitored releases and incremental improvements based on how the application is really used.",
    icon: <FiActivity className="h-4 w-4" aria-hidden="true" />,
  },
];

export default function Experience({
  principles = DEFAULT_PRINCIPLES,
  steps = DEFAULT_STEPS,
}) {
  return (
    <section
      id="experience"
      className="border-t border-border/40 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Column: Heading + Principles */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <SectionHeading
              label="EXPERIENCE"
              index="03"
              title="How I build software"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="mt-4 font-sans text-base leading-relaxed text-secondary sm:text-[17px]"
            >
              A repeatable process rather than a list of job titles from the
              first conversation about a problem to maintaining the thing after
              release.
            </motion.p>

            <div className="mt-8 space-y-4">
              {principles.map((principle, idx) => (
                <PrincipleCard
                  key={principle.id || principle.title}
                  icon={principle.icon}
                  title={principle.title}
                  description={principle.description}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Numbered Process Steps */}
          <div className="space-y-4 lg:col-span-7">
            {steps.map((step, idx) => (
              <ProcessStepCard
                key={step.number || step.title}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
