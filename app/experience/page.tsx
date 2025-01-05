"use client";

import { FadeIn, fadeIn, staggerContainer, StaggerContainer } from "@/components/ui/motion";

const experiences = [
  {
    company: "Cell Solutions",
    position: "Full Stack Developer & Team Lead",
    period: "October 2023 - Present",
    description: "Working as a full-stack developer and leading the team as an outsource for a US-based company.",
    technologies: ["React", "MaterialUI", "TailwindCSS", "C#", ".Net", ".Net Framework", "VB.Net", "SQL"],
  },
  {
    company: "Freelance",
    position: "Mobile Developer",
    period: "May 2023 - September 2023",
    description: "Worked as a freelance mobile developer on different projects for 2 different companies.",
    technologies: ["Flutter", "GetX", "MVC", "BLoC", "Firebase", "Firestore"],
  },
  {
    company: "Radity",
    position: "Frontend & Mobile Developer",
    period: "February 2023 - March 2023",
    description: "Worked as a frontend and mobile developer for customer projects.",
    technologies: ["ReactJS", "Flutter"],
  },
  {
    company: "SpaceRunners",
    position: "Mobile & Frontend Developer",
    period: "June 2022 - January 2023",
    description: "Worked on a web3 dating app project with Flutter. Started as a freelance and then joined as a full-time mobile dev. Also worked with ReactJS.",
    technologies: ["Flutter", "ReactJS", "Web3"],
  },
  {
    company: "Radity",
    position: "Full Stack Developer",
    period: "July 2020 - June 2022",
    description: "Worked on multiple projects with different technologies in an international team.",
    technologies: ["Python", "Django", "Dynamics 365", ".Net Core", "JQuery", "Flutter", "SQL"],
  },
  {
    company: "Cell Solutions",
    position: "Full Stack Developer",
    period: "April 2019 - May 2020",
    description: "Worked as a Full-Stack Developer.",
    technologies: [".NET", "SQL", "JavaScript"],
  },
];

export default function Experience() {
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
          </FadeIn>
          <FadeIn variants={fadeIn("up", 0.3)}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My professional journey as a developer, showcasing various roles and technologies.
            </p>
          </FadeIn>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <FadeIn
                key={index}
                variants={fadeIn("up", 0.4 + index * 0.1)}
                className="relative pb-8"
              >
                {index !== experiences.length - 1 && (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-muted"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex gap-x-3">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
                    </span>
                  </div>
                  <div className="flex-auto">
                    <div className="flex justify-between gap-x-4">
                      <div>
                        <h3 className="text-lg font-semibold leading-6">
                          {experience.position} at {experience.company}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {experience.description}
                        </p>
                      </div>
                      <p className="whitespace-nowrap text-sm text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
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
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </StaggerContainer>
  );
} 