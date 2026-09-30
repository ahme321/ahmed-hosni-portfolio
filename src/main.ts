import './style.css';
import { renderNavbar, setupNavbarEvents } from './components/navbar';
import renderHero from './components/hero';
import { renderAbout } from './components/about';

function initApp(): void {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  appContainer.innerHTML = `
    ${renderNavbar()}
    <main class="grow">
      ${renderHero()}
      ${renderAbout()}
    </main>
  `;

  setupNavbarEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}