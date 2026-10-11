interface PortfolioProject {
  title: string;
  label: string;
  description: string;
  demoUrl: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    title: "DentaFlow",
    label: "Healthcare System",
    description:
      "A clinical management and scheduling platform built to eliminate patient double-booking and operational bottlenecks. Leverages transactional logic and an optimized relational schema in .NET and SQL Server to keep multi-doctor timetables synchronized in real time with zero scheduling conflicts.",
    demoUrl: "#",
  },
  {
    title: "NexusElectro",
    label: "E-Commerce Platform",
    description:
      "A responsive tech e-commerce engine designed to solve catalog latency and complex inventory filtering across high-spec hardware. Powered by structured data indexing and efficient caching strategies to provide instant product discovery, streamlined checkout flows, and seamless cart state management.",
    demoUrl: "#",
  },
  {
    title: "AcademiaCore",
    label: "EdTech Platform",
    description:
      "A dedicated learning management engine engineered to streamline lesson delivery and student assessments for high school educators. Implements structured media pipelines and queue-based evaluation workloads to handle high-traffic student exam submissions reliably without server interruptions.",
    demoUrl: "#",
  },
];

function renderProjectCard(project: PortfolioProject): string {
  return `
    <article data-portfolio-card class="group flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 overflow-hidden shadow-lg hover:-translate-y-1.5">
      <div class="aspect-video relative overflow-hidden bg-slate-950 border-b border-slate-800/80">
        <div class="h-7 flex items-center gap-1.5 px-3 bg-slate-900/90 border-b border-slate-800/80" aria-hidden="true">
          <span class="w-2 h-2 rounded-full bg-red-400/60"></span>
          <span class="w-2 h-2 rounded-full bg-yellow-400/60"></span>
          <span class="w-2 h-2 rounded-full bg-green-400/60"></span>
        </div>
        <div class="h-[calc(100%-1.75rem)] flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
          <span class="text-xs uppercase tracking-widest text-slate-500 font-medium">Interface Preview</span>
        </div>
      </div>

      <div class="flex flex-col flex-1 p-6">
        <span class="self-start px-3 py-1 text-xs font-semibold rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">${project.label}</span>
        <h3 class="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mt-3 mb-2">${project.title}</h3>
        <p class="text-sm text-slate-300/80 leading-relaxed line-clamp-4 mb-6">${project.description}</p>
        <div class="mt-auto pt-5 border-t border-slate-800/60 flex items-center justify-between">
          <a href="${project.demoUrl}" class="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors" aria-label="View ${project.title} live demo">
            Live Demo
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </article>`;
}

export function renderPortfolio(): string {
  return `
    <section id="portfolio" class="relative py-20 lg:py-28 bg-[#0B0F19] border-t border-slate-800/60 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-left">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">Featured Projects</h2>
          <p class="text-base sm:text-lg text-cyan-400 font-medium max-w-2xl mt-2 mb-12">
            Web applications engineered for scalability, data integrity, and real-world performance
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${portfolioProjects.map(renderProjectCard).join("")}
        </div>
      </div>
    </section>
  `;
}
