export function renderHero(): string {
  return `
    <section id="home" class="relative min-h-[calc(100vh-5rem)] flex items-center py-24 overflow-hidden">
      <div class="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          <div class="flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full lg:w-[42%]">
            <div class="relative aspect-square w-72 h-72 lg:w-80 lg:h-80 max-w-full rounded-full group">
              <div class="absolute -inset-3 rounded-full bg-linear-to-tr from-blue-600 via-cyan-400 to-blue-500 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div class="relative w-full h-full rounded-full border-2 border-cyan-400/70 bg-slate-950 p-1.5 shadow-2xl shadow-cyan-500/20">
                <img src="/profile.webp" alt="Ahmed Hosni" loading="eager" fetchpriority="high" class="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>

          <div class="flex flex-col items-start text-left space-y-0 order-2 lg:order-1 w-full lg:w-[58%] min-w-0">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight whitespace-nowrap">
              Hi, I'm <span class="font-black text-white">Ahmed Hosni</span>
            </h1>
            <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 tracking-tight mt-1.5 sm:mt-2">
              Software Engineer
            </h2>
            <p class="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mt-5">
              Engineering high-performance, SEO-optimized web applications with robust backend foundations—translating clean code and system performance into sustainable business growth.
            </p>

            <div class="flex items-center gap-4 mt-5 pt-2">
              <a 
                href="https://github.com/ahme321" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile" 
                class="w-11 h-11 rounded-full flex items-center justify-center bg-slate-900 border border-cyan-400/60 text-cyan-400 hover:border-cyan-300 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </a>

              <a 
                href="www.linkedin.com/in/ahmed-hosni70" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile" 
                class="w-11 h-11 rounded-full flex items-center justify-center bg-slate-900 border border-cyan-400/60 text-cyan-400 hover:border-cyan-300 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
              <a href="/cv.pdf" download class="rounded-full px-6 py-2.5 bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 transition-all text-sm">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export default renderHero;