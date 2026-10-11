import "./style.css";
import { renderNavbar, setupNavbarEvents } from "./components/navbar";
import renderHero from "./components/hero";
import { renderAbout } from "./components/about";
import { renderSkills } from "./components/skills";
import { renderPortfolio } from "./components/portfolio";

const scrollSpySectionIds = ["home", "about", "skills", "portfolio", "contact"];

function updateActiveNavLink(sectionId: string): void {
  const targetHref = `#${sectionId === "hero" ? "home" : sectionId}`;
  const navLinks =
    document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

  navLinks.forEach((link) => {
    link.classList.remove(
      "text-cyan-400",
      "border-b-2",
      "border-cyan-400",
      "font-semibold",
    );
    link.classList.add("text-slate-300");

    const indicator = link.querySelector<HTMLSpanElement>("span");
    indicator?.classList.remove("w-full");
    indicator?.classList.add("w-0");
    link.removeAttribute("aria-current");
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href") !== targetHref) return;

    link.classList.remove("text-slate-300");
    link.classList.add(
      "text-cyan-400",
      "border-b-2",
      "border-cyan-400",
      "font-semibold",
    );
    link
      .querySelector<HTMLSpanElement>("span")
      ?.classList.replace("w-0", "w-full");
    link.setAttribute("aria-current", "location");
  });
}

function getActiveSectionId(): string {
  if (window.scrollY <= 0) return "home";

  const viewportCenter = window.innerHeight / 2;
  const sections = scrollSpySectionIds
    .map(
      (sectionId) =>
        document.getElementById(sectionId) ??
        (sectionId === "home" ? document.getElementById("hero") : null),
    )
    .filter((section): section is HTMLElement => section !== null);
  const centeredSection = sections.find((section) => {
    const bounds = section.getBoundingClientRect();
    return bounds.top <= viewportCenter && bounds.bottom >= viewportCenter;
  });

  return centeredSection?.id === "hero"
    ? "home"
    : (centeredSection?.id ?? "home");
}

function setupScrollSpy(): void {
  let frameRequested = false;

  const update = (): void => {
    frameRequested = false;
    updateActiveNavLink(getActiveSectionId());
  };

  const onScroll = (): void => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(update);
  };

  updateActiveNavLink("home");
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
}

function setupScrollAnimations(): void {
  const animatedElements = document.querySelectorAll<HTMLElement>(
    "#about header, #about p, #about article, #skills header, #skills article, #portfolio, #portfolio [data-portfolio-card]",
  );
  const revealClasses = [
    "opacity-0",
    "translate-y-8",
    "transition-all",
    "duration-700",
    "ease-out",
  ];

  animatedElements.forEach((element) =>
    element.classList.add(...revealClasses),
  );

  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach((element) => {
      element.classList.add("opacity-100", "translate-y-0");
      element.classList.remove("opacity-0", "translate-y-8");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          element.classList.add("opacity-100", "translate-y-0");
          element.classList.remove("opacity-0", "translate-y-8");
        } else {
          element.classList.add("opacity-0", "translate-y-8");
          element.classList.remove("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  animatedElements.forEach((element) => observer.observe(element));
}

function initApp(): void {
  const appContainer = document.getElementById("app");
  if (!appContainer) return;

  appContainer.innerHTML = `
    ${renderNavbar()}
    <main class="grow">
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderPortfolio()}
    </main>
  `;

  setupNavbarEvents();
  setupScrollAnimations();
  setupScrollSpy();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
