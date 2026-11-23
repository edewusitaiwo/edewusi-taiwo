import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import MoreWorkBanner from "../components/MoreWorkBanner";
import ProjectModal from "../components/ProjectModal";

const DEFAULT_PROJECTS = [
  {
    id: "ecommerce-platform",
    number: "01",
    category: "FULL-STACK · MICROSERVICES",
    year: "2025",
    subtitle: "MICROSERVICES COMMERCE PLATFORM",
    title: "Ecommerce Platform",
    description:
      "A scalable ecommerce platform built using microservices architecture, designed to support independent services and efficient communication between different parts of the application.",
    imageSrc: "",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "RabbitMQ",
      "Stripe",
      "JWT Auth",
    ],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      overview:
        "Designed around isolated domain services for catalog, cart, orders, and payments so each service can scale and deploy independently without tight database coupling.",
      highlights: [
        "Asynchronous event-driven order and inventory updates using RabbitMQ queues.",
        "API Gateway routing with centralized JWT authentication and rate limiting.",
        "Stripe webhook handling for idempotent payment confirmation and order fulfillment.",
      ],
    },
  },
  {
    id: "reslot",
    number: "02",
    category: "SAAS · AUTOMATION",
    year: "2025",
    subtitle: "BOOKING RECOVERY AUTOMATION",
    title: "Reslot",
    description:
      "A booking automation SaaS designed to help businesses recover cancelled appointments by automatically notifying waitlisted customers when new slots become available.",
    imageSrc: "",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Third-party integrations",
    ],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      overview:
        "Eliminates lost revenue from last-minute appointment cancellations by watching calendar webhooks and dispatching instant claim links to prioritized waitlists.",
      highlights: [
        "Real-time cancellation detection integrated with external scheduling calendars.",
        "Automated multi-channel notifications with expiring single-claim booking tokens.",
        "Business dashboard tracking recovered revenue, fill rates, and waitlist demand.",
      ],
    },
  },
  {
    id: "taskora",
    number: "03",
    category: "FRONTEND · MARKETPLACE",
    year: "2024",
    subtitle: "LOCAL SERVICE MARKETPLACE",
    title: "Taskora",
    description:
      "A local service marketplace designed to connect customers with service providers.",
    imageSrc: "",
    stack: ["Next.js", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      overview:
        "A fast, responsive marketplace interface focused on intuitive service discovery, transparent provider profiles, and frictionless booking flows.",
      highlights: [
        "Category and location-based service browsing with instant filter states.",
        "Structured provider cards highlighting availability, service scope, and reviews.",
        "Mobile-first responsive layout engineered with Next.js and Tailwind CSS.",
      ],
    },
  },
];

export default function Projects({
  projects = DEFAULT_PROJECTS,
  githubProfileUrl = "https://github.com",
}) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="border-t border-border/40 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        {/* Section Header Row */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionHeading
              label="PROJECTS"
              index="04"
              title="Featured work, end to end"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="mt-4 font-sans text-base leading-relaxed text-secondary sm:text-[17px]"
            >
              Products spanning architecture, backend services and interface
              design. Open any project for the full breakdown.
            </motion.p>
          </div>
        </div>

        {/* Alternating Project Cards */}
        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              index={index}
              reversed={index % 2 === 1}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        {/* Bottom GitHub Callout */}
        <MoreWorkBanner githubUrl={githubProfileUrl} className="mt-10" />
      </div>

      {/* Case Study Breakdown Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
