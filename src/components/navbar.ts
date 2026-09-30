import type { NavItem } from "../types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function renderNavbar(): string {
  const navLinksHtml = navItems
    .map(
      (item) => `
      <li>
        <a 
          href="${item.href}" 
          data-nav-link
          class="transition-colors duration-200 hover:text-cyan-400 font-medium text-sm text-slate-300 relative py-1 group block"
        >
          ${item.label}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>`,
    )
    .join("");

  return `
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between w-full h-20 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          
          <!-- Logo Brand -->
          <a href="#home" class="flex items-center gap-3 group focus:outline-none shrink-0 lg:justify-self-start">
            <span class="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/20">
              A
            </span>
            <span class="font-bold text-slate-100 tracking-tight text-xl">
              Ahmed<span class="text-cyan-400">.</span>
            </span>
          </a>

          <nav aria-label="Main Navigation" class="hidden md:block justify-self-center">
            <ul class="flex items-center space-x-8">
              ${navLinksHtml}
            </ul>
          </nav>

          <!-- Mobile Toggle Button -->
          <div class="md:hidden flex items-center">
            <button 
              id="mobile-menu-btn" 
              aria-label="Toggle menu"
              aria-expanded="false"
              class="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 focus:outline-none transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown -->
      <div id="mobile-menu" class="hidden md:hidden border-b border-slate-800 bg-[#0B0F19]/95 backdrop-blur-xl px-4 pt-2 pb-6">
        <ul class="flex flex-col space-y-2">
          ${navItems
            .map(
              (item) => `
            <li>
              <a 
                href="${item.href}" 
                data-nav-link
                class="mobile-nav-link block py-2 px-3 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400 transition-colors"
              >
                ${item.label}
              </a>
            </li>`,
            )
            .join("")}
        </ul>
      </div>
    </header>
  `;
}

export function setupNavbarEvents(): void {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  btn?.addEventListener("click", () => {
    const isHidden = menu?.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!isHidden));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu?.classList.add("hidden");
      btn?.setAttribute("aria-expanded", "false");
    });
  });
}
