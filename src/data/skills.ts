import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Systems",
    skills: [
      { name: "C#", icon: "csharp" },
      { name: ".NET", icon: "dotnet" },
      { name: "Entity Framework Core", icon: "entity-framework" },
      { name: "Clean Architecture", icon: "architecture" },
      { name: "REST APIs", icon: "rest" },
    ],
  },
  {
    title: "Frontend & Performance",
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "Databases & DevOps",
    skills: [
      { name: "SQL Server", icon: "sql-server" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
];