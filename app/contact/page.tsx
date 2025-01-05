"use client";

import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { FadeIn, fadeIn, staggerContainer, StaggerContainer } from "@/components/ui/motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/marifdev",
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammet-arif-sarikaya-4a8bbb149/",
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/marifdev",
    icon: <Twitter className="h-6 w-6" />,
  },
  {
    name: "Email",
    href: "mailto:muhammedarif82@gmail.com",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    name: "Phone",
    href: "tel:+905531909380",
    icon: <Phone className="h-6 w-6" />,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can implement the form submission logic
    console.log("Form submitted:", formData);
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
        <div className="mx-auto max-w-2xl lg:text-center">
          <FadeIn variants={fadeIn("up", 0.2)}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
          </FadeIn>
          <FadeIn variants={fadeIn("up", 0.3)}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Feel free to reach out through any of the following channels
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <FadeIn variants={fadeIn("right", 0.4)}>
              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-semibold">Connect with me</h3>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn variants={fadeIn("left", 0.4)}>
              <div>
                <h3 className="text-lg font-semibold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6"
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
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 bg-background text-foreground shadow-sm ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6"
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
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 bg-background text-foreground shadow-sm ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6"
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
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 bg-background text-foreground shadow-sm ring-1 ring-inset ring-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-shadow duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </StaggerContainer>
  );
} 