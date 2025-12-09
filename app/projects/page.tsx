"use client";

import { ExternalLink, Github } from "lucide-react";
import {
  FadeIn,
  fadeIn,
  staggerContainer,
  StaggerContainer,
} from "@/components/ui/motion";
import useAnalytics from "@/lib/hooks/useAnalytics";

const projects = [
  {
    title: "MyCursorRules",
    description:
      "A platform for developers to share and discover Cursor AI customization rules. Users can list their own cursorrules file contents and make them available for other developers to enhance their Cursor AI experience.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    company: "Personal",
    links: {
      github: "",
      live: "https://mycursorrules.com",
    },
    liveDate: "2025-01-10",
  },
  {
    title: "App Icon Designer",
    description:
      "A tool to design app icons for mobile apps. It uses AI to generate app icons based on the app name, description, keywords and color.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "AI"],
    company: "Personal",
    links: {
      github: "",
      live: "https://appicondesigner.com/",
    },
    liveDate: "2025-09-15",
  },
  {
    title: "VibeCoded Directory",
    description: "A directory of websites and apps created by VibeCoded",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    company: "Personal",
    links: {
      github: "",
      live: "https://vibecoded.directory/",
    },
    liveDate: "2025-10-01",
  },
  {
    title: "JustMRR",
    description: "The database of verified mobile app revenues",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    company: "Personal",
    links: {
      github: "",
      live: "http://justmrr.com/",
    },
    liveDate: "2025-11-19",
  },
  {
    title: "SeeReviews",
    description:
      "A tool to get app store reviews for any app and analyze the reviews with AI",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    company: "Personal",
    links: {
      github: "",
      live: "http://seereviews.app/",
    },
    liveDate: "2025-11-23",
  },
  {
    title: "CitiScene",
    description:
      "A mobile weather app but visualizing the weather in a city like a scene",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    company: "Personal",
    links: {
      github: "",
      live: "https://citiscene.app/",
    },
    liveDate: "2025-11-23",
  },
];

export default function Projects() {
  const { trackEvent } = useAnalytics();

  const handleProjectLinkClick = (
    projectTitle: string,
    linkType: "github" | "live"
  ) => {
    trackEvent({
      eventName: "click_project_link",
      category: "projects",
      label: `${projectTitle}_${linkType}`,
    });
  };

  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.liveDate).getTime() - new Date(a.liveDate).getTime();
  });

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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {sortedProjects.map((project, index) => (
              <FadeIn
                key={project.title}
                variants={fadeIn("up", 0.4 + index * 0.1)}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-primary/80 bg-primary/5 px-2 py-1 rounded">
                          {new Date(project.liveDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex space-x-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              handleProjectLinkClick(project.title, "github")
                            }
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            aria-label="View Source"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              handleProjectLinkClick(project.title, "live")
                            }
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            aria-label="Visit Site"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
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
