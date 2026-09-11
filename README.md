# Ahmed Hosni Portfolio

A lightweight, high-performance personal portfolio built with Vanilla TypeScript, Vite, and Tailwind CSS v4. The project emphasizes zero-framework runtime overhead, strict typing, and a modular architecture.

---

## Architectural Decisions

- **Vanilla TypeScript over Frameworks:** Avoids framework bundle overhead such as virtual DOM diffing and runtime libraries, delivering near-instant First Contentful Paint and near-zero Total Blocking Time.
  
- **Vite Build Pipeline:** Leverages native ES modules during development and optimized Rollup bundling for production.
  
- **Tailwind CSS v4:** Utilizes the Rust-based Lightning CSS engine for efficient utility extraction and rapid compilation without external configuration overhead.
  
- **Modular Component Architecture:** Enforces separation of concerns by isolating raw data schemas, typed contracts, and DOM rendering logic.

---

## Tech Stack

- **Core:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Build Tool:** Vite
- **Package Manager:** npm

---

## Project Structure

```text
ahmed-hosni-portfolio/
├── public/                  # Static assets served as-is (favicons, CV pdf)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Processed media (hero illustration, vectors)
│   │   ├── hero.png
│   │   └── typescript.svg
│   ├── components/          # Modular UI renderers (Pure Functions)
│   │   ├── navbar.ts        # Sticky blurred navigation bar
│   │   ├── hero.ts          # Hero banner with CTA and socials
│   │   ├── about.ts         # Professional bio and core engineering pillars
│   │   ├── skills.ts        # Dynamic categorized skills grid
│   │   ├── projects.ts      # Project showcase with external links
│   │   ├── contact.ts       # Interactive form and direct contact channels
│   │   └── footer.ts        # Minimal footer and copyright notes
│   ├── data/                # Strongly typed datasets (Single Source of Truth)
│   │   ├── skills.ts        # Skills registry and tech stack badges
│   │   └── projects.ts      # Projects catalog and metadata
│   ├── types/               # Domain models and strict TypeScript contracts
│   │   └── index.ts         # Centralized interfaces (Project, Skill, NavItem)
│   ├── utils/               # Shared DOM helpers and validators
│   │   └── dom.ts
│   ├── style.css            # Tailwind CSS v4 directives and design tokens
│   └── main.ts              # App entry point and DOM orchestrator
├── index.html               # Single-page semantic HTML5 entry
├── package.json             # Project dependencies and script runner
├── tsconfig.json            # Strict TypeScript compiler options
└── vite.config.ts           # Vite bundling and Tailwind plugin configuration
```
---

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Local Development

1. Clone the repository:
```bash
git clone [https://github.com/ahmed-hosni/ahmed-hosni-portfolio.git](https://github.com/ahmed-hosni/ahmed-hosni-portfolio.git)
```
2. Navigate to the project directory:
```bash
cd ahmed-hosni-portfolio
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Build for production:
```bash
npm run build
```
6. Preview the production build:
```bash
npm run preview
```
---

## Performance & Standards

- **Semantic HTML5:** Built with accessibility (ARIA compliance) and SEO best practices.  
- **Type Safety:** 100% type-checked codebase without implicit `any` types. 
- **Responsive Layout:** Mobile-first layout system designed for high-density displays.

---

## License & Copyright

&copy; 2026 Ahmed Hosni. All rights reserved.

This repository and its contents are exclusively for portfolio demonstration and code review purposes. No part of this project may be copied, reproduced, modified, redistributed, or used for commercial purposes without prior written permission from the author.








