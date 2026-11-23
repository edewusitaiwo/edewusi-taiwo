import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import ContactLinkCard from "../components/ContactLinkCard";
import ContactFormCard from "../components/ContactFormCard";

export default function Contact({
  email = "hello@example.com",
  githubUrl = "https://github.com/your-username",
  githubHandle = "github.com/your-username",
  linkedinUrl = "https://linkedin.com/in/your-username",
  linkedinHandle = "linkedin.com/in/your-username",
  onFormSubmit,
}) {
  const contactCards = [
    {
      id: "email",
      label: "EMAIL",
      value: email,
      href: `mailto:${email}`,
      external: false,
      icon: <FiMail className="h-4 w-4" aria-hidden="true" />,
    },
    {
      id: "github",
      label: "GITHUB",
      value: githubHandle,
      href: githubUrl,
      external: true,
      icon: <FiGithub className="h-4 w-4" aria-hidden="true" />,
    },
    {
      id: "linkedin",
      label: "LINKEDIN",
      value: linkedinHandle,
      href: linkedinUrl,
      external: true,
      icon: <FiLinkedin className="h-4 w-4" aria-hidden="true" />,
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-border/40 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Copy & Contact Link Cards */}
          <div className="lg:col-span-5">
            <SectionHeading
              label="CONTACT"
              index="05"
              title="Have a project in mind? Let's build something great."
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="mt-5 font-sans text-base leading-relaxed text-secondary"
            >
              Tell me what you are working on, what stage it is at and what
              success looks like. I will reply with honest thoughts on scope,
              timeline and whether I am the right fit.
            </motion.p>

            <div className="mt-8 space-y-3.5">
              {contactCards.map((card, idx) => (
                <ContactLinkCard
                  key={card.id}
                  icon={card.icon}
                  label={card.label}
                  value={card.value}
                  href={card.href}
                  external={card.external}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <ContactFormCard
              email={email}
              githubUrl={githubUrl}
              linkedinUrl={linkedinUrl}
              onSubmit={onFormSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
