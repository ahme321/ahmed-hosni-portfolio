export function renderFooter(): string {
  return `
    <footer class="border-t border-slate-800/80 bg-[#0B0F19]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-center text-center">
        <p class="text-sm text-slate-400">
          © ${new Date().getFullYear()} Ahmed Hosni. All rights reserved.
        </p>
      </div>
    </footer>
  `;
}