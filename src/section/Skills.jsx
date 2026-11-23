import { motion } from "framer-motion";
import {
  FiCloud,
  FiCode,
  FiCreditCard,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiLayout,
  FiLink,
  FiList,
  FiSend,
  FiServer,
  FiShare2,
  FiShield,
  FiSliders,
  FiTool,
  FiTriangle,
} from "react-icons/fi";
import {
  SiCss,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import SectionHeading from "../components/SectionHeading";
import StatusBadge from "../components/StatusBadge";
import SkillCategoryCard from "../components/SkillCategoryCard";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <FiLayout className="h-5 w-5" aria-hidden="true" />,
    description:
      "Interfaces that stay fast, accessible and predictable as features grow.",
    skills: [
      {
        label: "HTML5",
        icon: <SiHtml5 className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "CSS3",
        icon: <SiCss className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "JavaScript",
        icon: <SiJavascript className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "React.js",
        icon: <SiReact className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Next.js",
        icon: <SiNextdotjs className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Tailwind CSS",
        icon: <SiTailwindcss className="h-3.5 w-3.5" aria-hidden="true" />,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <FiServer className="h-5 w-5" aria-hidden="true" />,
    description:
      "Service layers designed around clear boundaries, contracts and failure modes.",
    skills: [
      {
        label: "Node.js",
        icon: <SiNodedotjs className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Express.js",
        icon: <SiExpress className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "RESTful APIs",
        icon: <FiShare2 className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Microservices",
        icon: <FiSliders className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "JWT Auth",
        icon: <FiShield className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      // {
      //   label: "RabbitMQ",
      //   icon: <FiLayers className="h-3.5 w-3.5" aria-hidden="true" />,
      // },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: <FiDatabase className="h-5 w-5" aria-hidden="true" />,
    description:
      "Data models that match how the product actually reads and writes.",
    skills: [
      {
        label: "MongoDB",
        icon: <SiMongodb className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Mongoose",
        icon: <FiLink className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Schema design",
        icon: <FiCode className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Indexing",
        icon: <FiList className="h-3.5 w-3.5" aria-hidden="true" />,
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Integrations",
    icon: <FiTool className="h-5 w-5" aria-hidden="true" />,
    description:
      "The day-to-day workflow around writing, shipping and keeping code healthy.",
    skills: [
      {
        label: "Git",
        icon: <FiGitBranch className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "GitHub",
        icon: <SiGithub className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Postman",
        icon: <FiSend className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      {
        label: "Cloudinary",
        icon: <FiCloud className="h-3.5 w-3.5" aria-hidden="true" />,
      },
      // {
      //   label: "Stripe",
      //   icon: <FiCreditCard className="h-3.5 w-3.5" aria-hidden="true" />,
      // },
      {
        label: "Render",
        icon: <FiTriangle className="h-3.5 w-3.5" aria-hidden="true" />,
      },
    ],
  },
];

export default function Skills({ categories = SKILL_CATEGORIES }) {
  return (
    <section
      id="skills"
      className="border-t border-border/40 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        {/* Top Row: Heading + Right Status Pill */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionHeading
              label="SKILLS"
              index="02"
              title="Technical toolkit, organised by layer"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="mt-4 font-sans text-base leading-relaxed text-secondary sm:text-[17px]"
            >
              No ratings, no percentages just the tools I work with and where
              they fit in the stack.
            </motion.p>
          </div>

          <StatusBadge
            status="STACK IN ACTIVE USE"
            message=""
            className="self-start md:self-end"
          />
        </div>

        {/* 2x2 Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category, idx) => (
            <SkillCategoryCard
              key={category.id || category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              skills={category.skills}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
