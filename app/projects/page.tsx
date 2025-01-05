"use client";

import { ExternalLink, Github } from "lucide-react";
import { FadeIn, fadeIn, staggerContainer, StaggerContainer } from "@/components/ui/motion";
import useAnalytics from "@/lib/hooks/useAnalytics";

const projects = [
  {
    title: "Web3 Dating App",
    description:
      "A dating application built with Flutter and Web3 technologies. The app includes features like user matching, profile management, and blockchain integration.",
    technologies: ["Flutter", "Web3", "Firebase"],
    company: "SpaceRunners",
    links: {
      github: "",
      live: "",
    },
  },
  {
    title: "Personal Website",
    description:
      "A modern, responsive personal website built with Next.js and TailwindCSS. Features include dark mode support, responsive design, and contact form integration.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    company: "Personal",
    links: {
      github: "https://github.com/marifdev/marifdev",
      live: "https://marif.dev",
    },
  },
];

export default function Projects() {
  const { trackEvent } = useAnalytics();

  const handleProjectLinkClick = (projectTitle: string, linkType: 'github' | 'live') => {
    trackEvent({
      eventName: "click_project_link",
      category: "projects",
      label: `${projectTitle}_${linkType}`,
    });
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
              Projects
            </h2>
          </FadeIn>
          <FadeIn variants={fadeIn("up", 0.3)}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A selection of projects I&apos;ve worked on throughout my career
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn
                key={project.title}
                variants={fadeIn("up", 0.4 + index * 0.1)}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        {project.company}
                      </p>
                      <div className="flex space-x-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleProjectLinkClick(project.title, 'github')}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleProjectLinkClick(project.title, 'live')}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 block">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="mt-3 text-base text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </StaggerContainer>
  );
} 