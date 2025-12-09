"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import {
  FadeIn,
  fadeIn,
  staggerContainer,
  StaggerContainer,
} from "@/components/ui/motion";
import emailjs from "@emailjs/browser";
import useAnalytics from "@/lib/hooks/useAnalytics";

// Initialize EmailJS
if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
) {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/marifdev",
    icon: <Github className="h-5 w-5" />,
    display: "github.com/marifdev",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammet-arif-sarikaya-4a8bbb149/",
    icon: <Linkedin className="h-5 w-5" />,
    display: "Muhammet Arif Sarıkaya",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/marifdev",
    icon: <Twitter className="h-5 w-5" />,
    display: "@marifdev",
  },
  {
    name: "Email",
    href: "mailto:muhammedarif82@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    display: "muhammedarif82@gmail.com",
  },
];

export default function Contact() {
  const { trackEvent } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Muhammet Arif",
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      if (result.status === 200) {
        trackEvent({
          eventName: "form_submit",
          category: "contact",
          label: "contact_form_success",
        });
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I will get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      trackEvent({
        eventName: "form_submit",
        category: "contact",
        label: "contact_form_error",
        error: String(error),
      });
      setSubmitStatus({
        type: "error",
        message: "Sorry, something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialLinkClick = (name: string) => {
    trackEvent({
      eventName: "click_social_link",
      category: "social",
      label: name.toLowerCase(),
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StaggerContainer
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <FadeIn variants={fadeIn("up", 0.2)}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
          </FadeIn>
          <FadeIn variants={fadeIn("up", 0.3)}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <FadeIn variants={fadeIn("right", 0.4)}>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these platforms. I try
                  to respond to all messages within 24 hours.
                </p>
                <div className="space-y-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleSocialLinkClick(link.name)}
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.display}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 mt-4">
                <h4 className="font-semibold mb-2">Availability Status</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Open to new opportunities and freelance projects
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn variants={fadeIn("left", 0.4)}>
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-600 dark:text-green-500"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </StaggerContainer>
  );
}
