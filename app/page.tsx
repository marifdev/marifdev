"use client";

import Link from "next/link";
import { FadeIn, fadeIn, staggerContainer, StaggerContainer } from "@/components/ui/motion";
import useAnalytics from "@/lib/hooks/useAnalytics";

export default function Home() {
  const { trackEvent } = useAnalytics();

  const handleAboutClick = () => {
    trackEvent({
      eventName: "click_about",
      category: "navigation",
      label: "about_from_home",
    });
  };

  const handleContactClick = () => {
    trackEvent({
      eventName: "click_contact",
      category: "navigation",
      label: "contact_from_home",
    });
  };

  return (
    <StaggerContainer
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 sm:px-6 lg:px-8"
      variants={staggerContainer}
    >
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn variants={fadeIn("up", 0.3)}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Muhammet Arif Sarıkaya
          </h1>
        </FadeIn>
        <FadeIn variants={fadeIn("up", 0.5)}>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Full Stack Developer specializing in React, Next.js, and .NET technologies
          </p>
        </FadeIn>
        <FadeIn variants={fadeIn("up", 0.7)}>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/about"
              onClick={handleAboutClick}
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              onClick={handleContactClick}
              className="text-sm font-semibold leading-6 hover:text-primary transition-colors duration-200"
            >
              Contact <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </StaggerContainer>
  );
}
