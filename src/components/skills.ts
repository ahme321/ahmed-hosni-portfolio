import { skillCategories } from "../data/skills";
import type { SkillCategory, SkillIcon } from "../types";

function renderSkillIcon(icon: SkillIcon): string {
  switch (icon) {
    case "html":
      return '<i class="devicon-html5-plain colored text-xl" aria-hidden="true"></i>';
    case "css":
      return '<i class="devicon-css3-plain colored text-xl" aria-hidden="true"></i>';
    case "javascript":
      return '<i class="devicon-javascript-plain colored text-xl" aria-hidden="true"></i>';
    case "typescript":
      return '<i class="devicon-typescript-plain colored text-xl" aria-hidden="true"></i>';
    case "tailwind":
      return '<i class="devicon-tailwindcss-original colored text-xl" aria-hidden="true"></i>';
    case "csharp":
      return '<i class="devicon-csharp-plain colored text-xl" aria-hidden="true"></i>';
    case "dotnet":
      return '<i class="devicon-dotnetcore-plain colored text-xl" aria-hidden="true"></i>';
    case "entity-framework":
      return '<i class="devicon-dot-net-plain colored text-xl" aria-hidden="true"></i>';
    case "sql-server":
      return '<i class="devicon-microsoftsqlserver-plain colored text-xl" aria-hidden="true"></i>';
    case "docker":
      return '<i class="devicon-docker-plain colored text-xl" aria-hidden="true"></i>';
    case "git":
      return '<i class="devicon-git-plain colored text-xl" aria-hidden="true"></i>';
    case "github":
      return '<i class="devicon-github-original text-xl text-white" aria-hidden="true"></i>';
    case "nginx":
      return '<i class="devicon-nginx-original colored text-xl" aria-hidden="true"></i>';
    case "architecture":
      return `
        <svg class="w-5 h-5 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <path d="M7 3v6M17 9v6M7 15v6" />
        </svg>`;
    case "rest":
      return `
        <svg class="w-5 h-5 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="6" r="2.5" />
        <circle cx="19" cy="18" r="2.5" />
        <path d="m7.3 11 9.4-4M7.3 13l9.4 4" />
        </svg>`;
  }
}

function renderSkillCard(category: SkillCategory): string {
  const skills = category.skills
    .map(
      (skill) => `
        <div class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:scale-[1.02] transition-all duration-200 group">
        ${renderSkillIcon(skill.icon)}
        <span class="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">${skill.name}</span>
        </div>`,
    )
    .join("");

  return `
    <article class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-md hover:border-cyan-500/40 transition-all duration-300">
    <h3 class="text-xl font-bold text-slate-100 flex items-center gap-2.5">
        <span class="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" aria-hidden="true"></span>
        ${category.title}
    </h3>
    <div class="flex flex-wrap gap-2.5 mt-6">
        ${skills}
    </div>
    </article>
`;
}

export function renderSkills(): string {
  return `
    <section id="skills" class="relative py-20 lg:py-28 bg-[#0B0F19] border-t border-slate-800/60 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-left">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">Technical Skills</h2>
        <p class="text-base sm:text-lg text-cyan-400 font-medium max-w-2xl mt-2 mb-12">Core technologies and architectural tooling I leverage to build scalable, resilient systems</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        ${skillCategories.map(renderSkillCard).join("")}
        </div>
    </div>
    </section>
`;
}
