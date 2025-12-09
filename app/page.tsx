"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  fadeIn,
  staggerContainer,
  StaggerContainer,
} from "@/components/ui/motion";
import useAnalytics from "@/lib/hooks/useAnalytics";

export default function Home() {
  const { trackEvent } = useAnalytics();

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
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20"
      variants={staggerContainer}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <FadeIn variants={fadeIn("up", 0.3)}>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-foreground">Muhammet Arif</span>
              <span className="block text-muted-foreground mt-2">Sarıkaya</span>
            </h1>
          </FadeIn>

          <FadeIn variants={fadeIn("up", 0.4)}>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground max-w-2xl">
              Software Developer crafting seamless digital experiences with
              React, Next.js, React Native, and .NET Technologies. Transforming
              ideas into elegant, high-performance solutions.
            </p>
          </FadeIn>

          <FadeIn variants={fadeIn("up", 0.5)}>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link
                href="/projects"
                className="w-full sm:w-auto rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                onClick={handleContactClick}
                className="w-full sm:w-auto text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors duration-200 flex items-center justify-center gap-2 group"
              >
                Contact Me{" "}
                <span
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <FadeIn
            variants={fadeIn("left", 0.5)}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-muted">
              <Image
                src="/my_photo.png"
                alt="Muhammet Arif Sarıkaya"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </StaggerContainer>
  );
}
