import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiLock,
  FiMail,
  FiSend,
} from "react-icons/fi";
import Button from "./Button";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactFormCard({
  email = "hello@example.com",
  githubUrl = "https://github.com/your-username",
  linkedinUrl = "https://linkedin.com/in/your-username",
  maxMessageLength = 500,
  onSubmit,
  className = "",
}) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'sent' | 'error'
  const [feedback, setFeedback] = useState("");

  const handleChange = (field) => (e) => {
    const value =
      field === "message"
        ? e.target.value.slice(0, maxMessageLength)
        : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === "sent" || status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      setStatus("sent");
      setFeedback("Message sent. I will get back to you soon.");
      setFormData(INITIAL_FORM);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. You can also email directly below.");
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-border bg-background/85 px-4 py-3 font-sans text-sm text-white placeholder:text-muted transition-colors focus:border-primary focus:outline-none";

  return (
    <div className={`flex flex-col gap-4 ${className}`.trim()}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
      >
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
            Send a message
          </h3>
          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted">
            <FiLock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Your details stay private</span>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block font-sans text-xs font-medium text-secondary"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Your name"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block font-sans text-xs font-medium text-secondary"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="you@company.com"
                className={inputClasses}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block font-sans text-xs font-medium text-secondary"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={formData.subject}
              onChange={handleChange("subject")}
              placeholder="Project enquiry, role, collaboration..."
              className={inputClasses}
            />
          </div>

          {/* Message + Character Counter */}
          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <label
                htmlFor="contact-message"
                className="font-sans text-xs font-medium text-secondary"
              >
                Message
              </label>
              <span className="font-mono text-xs text-muted">
                {formData.message.length}/{maxMessageLength}
              </span>
            </div>
            <textarea
              id="contact-message"
              rows={5}
              value={formData.message}
              onChange={handleChange("message")}
              placeholder="What are you building, and what would you like help with?"
              className={`${inputClasses} resize-y`}
            />
          </div>

          {/* Feedback Banner */}
          {feedback && (
            <div
              role="status"
              className={`flex items-center gap-2 rounded-xl border px-4 py-3 font-sans text-xs ${
                status === "sent"
                  ? "border-primary/40 bg-primary/10 text-white"
                  : "border-rose-500/40 bg-rose-500/10 text-rose-200"
              }`}
            >
              {status === "sent" && (
                <FiCheckCircle
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
              )}
              <span>{feedback}</span>
            </div>
          )}

          {/* Submit Row & Direct Email */}
          <div className="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              shape="pill"
              disabled={status === "submitting"}
              icon={<FiSend className="h-4 w-4" aria-hidden="true" />}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>

            <p className="font-sans text-xs text-muted">
              Or email directly at{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-primary transition-colors hover:text-primary-hover hover:underline"
              >
                {email}
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
