import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <div class="min-h-screen bg-[#0B0F19] text-slate-100 flex items-center justify-center">
      <h1 class="text-3xl font-bold text-blue-500">Ahmed Hosni | Portfolio Architecture Ready</h1>
    </div>
  `;
}