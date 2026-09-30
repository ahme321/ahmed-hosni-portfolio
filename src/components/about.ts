export function renderAbout(): string {
  return `
    <section id="about" class="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#0B0F19] border-t border-slate-800/60 overflow-hidden">
      <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <header class="text-left">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight mb-3">About Me</h2>
          <p class="text-base sm:text-lg text-cyan-400 font-medium max-w-2xl">Turning Architectural Rigor & Clean Code into Scalable Web Solutions</p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-12">
          <div class="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed text-left">
            <p>
              I am a results-oriented Software Engineer with a rigorous foundation in Software Engineering. Rather than simply writing code, I focus on engineering reliable, end-to-end web applications grounded in clean architecture, robust system design, and database integrity.
            </p>
            <p>
              I bridge the gap between technical excellence and tangible business outcomes. By prioritizing core web performance (LCP/CWV) and SEO-first engineering, I enhance digital platforms to load rapidly, rank higher in search results, and deliver friction-free experiences that directly drive conversion and sustainable business growth.
            </p>
            <p>
              Whether architecting resilient backend services with .NET and optimized relational data pipelines, or crafting zero-bloat, high-performance interfaces, my goal is always the same: shipping maintainable software that scales predictably with business needs.
            </p>
          </div>

          <div class="lg:col-span-5 flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
            <article class="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-md">
              <h3 class="text-slate-100 font-bold text-lg mb-1 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true"></span>Clean Architecture</h3>
              <p class="text-slate-400 text-sm leading-normal">Focus on decoupled, testable, and maintainable software patterns.</p>
            </article>
            <article class="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-md">
              <h3 class="text-slate-100 font-bold text-lg mb-1 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true"></span>SEO &amp; Performance</h3>
              <p class="text-slate-400 text-sm leading-normal">Obsessed with Core Web Vitals, fast initial paint, and organic discoverability.</p>
            </article>
            <article class="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-md">
              <h3 class="text-slate-100 font-bold text-lg mb-1 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true"></span>Business Growth</h3>
              <p class="text-slate-400 text-sm leading-normal">Designing systems that minimize infrastructure cost and maximize user retention.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
}
