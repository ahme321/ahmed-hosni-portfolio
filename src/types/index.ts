export interface NavItem {
label: string;
href: string;
}

export interface HeroData {
badge: string;
titlePrefix: string;
titleHighlight: string;
description: string;
imageSrc: string;
}

export type SkillIcon =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "tailwind"
  | "csharp"
  | "dotnet"
  | "entity-framework"
  | "architecture"
  | "rest"
  | "sql-server"
  | "docker"
  | "git"
  | "github"
  | "nginx";

export interface SkillItem {
  name: string;
  icon: SkillIcon;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  title: string;
  label: string;
  description: string;
  demoUrl: string;
}