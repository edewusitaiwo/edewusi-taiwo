import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import CvDownloadBar from "../components/CvDownloadBar";
import ProfileShowcaseCard from "../components/ProfileShowcaseCard";

export default function About({ cvHref = "" }) {
  return (
    <section id="about" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7">
            <SectionHeading
              label="ABOUT"
              index="01"
              title="A little about me"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="mt-7 space-y-5 font-sans text-base leading-relaxed text-secondary sm:text-[17px]"
            >
              <p>
                I am a full-stack developer drawn to the part of software where
                a vague requirement slowly becomes a system that actually works.
                Most of what I enjoy sits between the interface and the data
                figuring out how a screen should behave when a request fails,
                how a service should be shaped so it can grow, and how to keep
                both understandable six months later.
              </p>

              <p>
                My work spans{" "}
                <span className="font-medium text-white underline decoration-border underline-offset-4">
                  frontend development
                </span>{" "}
                with React and Next.js,{" "}
                <span className="font-medium text-white underline decoration-border underline-offset-4">
                  backend systems
                </span>{" "}
                built on Node.js and Express,{" "}
                <span className="font-medium text-white underline decoration-border underline-offset-4">
                  database design
                </span>{" "}
                with MongoDB and Mongoose, and the integration layer that
                connects everything else payments, media, messaging, calendars
                and third-party APIs.
              </p>

              <p>
                I care about application architecture as much as the code
                itself: clear boundaries between services, predictable API
                contracts, and decisions documented well enough that the next
                person does not have to reverse-engineer them. The goal is
                always the same software that solves a real problem for the
                people who use it.
              </p>
            </motion.div>

            <CvDownloadBar href={cvHref} className="mt-9" />
          </div>

          {/* Right Profile Card Column */}
          <div className="lg:col-span-5 lg:mt-10">
            <ProfileShowcaseCard />
          </div>
        </div>
      </div>
    </section>
  );
}
