"use client";

import {
  FadeIn,
  fadeIn,
  staggerContainer,
  StaggerContainer,
} from "@/components/ui/motion";

const experiences = [
  {
    company: "Branchsight",
    position: "Senior Mobile Developer",
    period: "September 2025 - Present",
    description: "Working as a senior mobile developer.",
    technologies: ["React Native", "TailwindCSS", "OneSignal"],
  },
  {
    company: "Cell Solutions",
    position: "Full Stack Developer & Team Lead",
    period: "October 2023 - September 2025",
    description:
      "Working as a full-stack developer and leading the team as an outsource for a US-based company. Responsible for architectural decisions, code reviews, and mentoring junior developers.",
    technologies: [
      "React",
      "MaterialUI",
      "TailwindCSS",
      "C#",
      ".Net",
      ".Net Framework",
      "VB.Net",
      "SQL",
    ],
  },
  {
    company: "Freelance",
    position: "Mobile Developer",
    period: "May 2023 - September 2023",
    description:
      "Delivered high-quality mobile solutions for diverse clients. Specialized in cross-platform development using Flutter, ensuring consistent performance on both iOS and Android.",
    technologies: ["Flutter", "GetX", "MVC", "BLoC", "Firebase", "Firestore"],
  },
  {
    company: "Radity",
    position: "Frontend & Mobile Developer",
    period: "February 2023 - March 2023",
    description:
      "Contributed to frontend and mobile projects, focusing on responsive design and user experience optimization.",
    technologies: ["ReactJS", "Flutter"],
  },
  {
    company: "SpaceRunners",
    position: "Mobile & Frontend Developer",
    period: "June 2022 - January 2023",
    description:
      "Developed a Web3 dating app, integrating blockchain features with a smooth mobile interface. Transitioned from freelance to full-time role due to performance.",
    technologies: ["Flutter", "ReactJS", "Web3"],
  },
  {
    company: "Radity",
    position: "Full Stack Developer",
    period: "July 2020 - June 2022",
    description:
      "Collaborated in an international team environment. Worked on diverse projects involving backend logic, frontend interfaces, and database management.",
    technologies: [
      "Python",
      "Django",
      "Dynamics 365",
      ".Net Core",
      "JQuery",
      "Flutter",
      "SQL",
    ],
  },
  {
    company: "Cell Solutions",
    position: "Full Stack Developer",
    period: "April 2019 - May 2020",
    description:
      "Started career as a Full-Stack Developer, building foundational skills in .NET ecosystem and web technologies.",
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
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <FadeIn variants={fadeIn("up", 0.2)}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experience
            </h2>
          </FadeIn>
          <FadeIn variants={fadeIn("up", 0.3)}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My professional journey as a developer, showcasing various roles
              and technologies.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
            {experiences.map((experience, index) => (
              <FadeIn
                key={index}
                variants={fadeIn("up", 0.4 + index * 0.1)}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-2 mb-2">
                  <h3 className="text-xl font-semibold leading-none tracking-tight">
                    {experience.position}
                    <span className="block sm:inline text-muted-foreground sm:ml-2 font-normal text-base">
                      at {experience.company}
                    </span>
                  </h3>
                  <time className="text-sm text-muted-foreground font-medium shrink-0">
                    {experience.period}
                  </time>
                </div>

                <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </StaggerContainer>
  );
}
