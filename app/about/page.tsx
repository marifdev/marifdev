"use client";

import { Briefcase, Code2, Database, Layout } from "lucide-react";
import { FadeIn, fadeIn, staggerContainer, StaggerContainer } from "@/components/ui/motion";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS/TailwindCSS", "MaterialUI"],
    description: "Building responsive, accessible, and performant user interfaces."
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    technologies: ["C#", ".NET Core", ".NET Framework", "Python", "Django", "SQL"],
    description: "Designing robust APIs and database architectures."
  },
  {
    category: "Mobile",
    icon: <Code2 className="h-6 w-6" />,
    technologies: ["Flutter", "React Native", "GetX", "BLoC", "MVC"],
    description: "Creating native-like experiences for iOS and Android."
  },
  {
    category: "Other",
    icon: <Briefcase className="h-6 w-6" />,
    technologies: ["Git", "Agile", "Scrum", "Web3", "Firebase", "Firestore"],
    description: "Tools and methodologies for efficient development workflows."
  },
];

export default function About() {
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          </FadeIn>
          <FadeIn variants={fadeIn("up", 0.3)}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I am a Full Stack Developer with a passion for building scalable solutions.
              My expertise spans across the entire development lifecycle, from concept to deployment.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <FadeIn
                key={skill.category}
                variants={fadeIn("up", 0.4 + index * 0.1)}
                className="relative group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                <h3 className="text-lg font-semibold leading-7 tracking-tight text-foreground">
                  {skill.category}
                </h3>
                
                <p className="mt-2 text-sm text-muted-foreground leading-6 mb-4">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
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
