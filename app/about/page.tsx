import { Briefcase, Code2, Database, Layout } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS/TailwindCSS", "MaterialUI"],
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    technologies: ["C#", ".NET Core", ".NET Framework", "Python", "Django", "SQL"],
  },
  {
    category: "Mobile",
    icon: <Code2 className="h-6 w-6" />,
    technologies: ["Flutter", "React Native", "GetX", "BLoC", "MVC"],
  },
  {
    category: "Other",
    icon: <Briefcase className="h-6 w-6" />,
    technologies: ["Git", "Agile", "Scrum", "Web3", "Firebase", "Firestore"],
  },
];

export default function About() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I am a Full Stack Developer with experience in various technologies and frameworks.
            I have worked with international teams and quickly adapt to different technologies
            and environments. My expertise spans across frontend, backend, and mobile development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.category} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  {skill.icon}
                  {skill.category}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <ul className="mt-1 list-inside list-disc space-y-2">
                    {skill.technologies.map((tech) => (
                      <li key={tech} className="text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 