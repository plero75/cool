import { fetchWithTimeout } from './api.js';

export async function getRaces() {
  const el = document.getElementById('races');
  if (!el) return;

  try {
    const data = await fetchWithTimeout(
      `${import.meta.env.BASE_URL}races.json`,
      {},
      { timeout: 5000, retries: 1, fallback: { races: [] } }
    );

    if (!Array.isArray(data.races) || data.races.length === 0) {
      el.textContent = 'Aucune course disponible';
      return;
    }

    el.innerHTML = `<ul>${data.races
      .map((r) => `<li>${r.name} — ${r.date}</li>`)
      .join('')}</ul>`;
  } catch (error) {
    el.textContent = '⚠️ Courses indisponibles';
  }
}
