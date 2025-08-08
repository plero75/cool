// modules/weather.js
import { fetchWithTimeout } from './api.js';

const BASE = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/';

export async function getWeather() {
  const el = document.getElementById('weather');
  if (!el) return;

  try {
    // En prod GH Pages, ceci lit public/weather.json
    const data = await fetchWithTimeout(
      `${BASE}weather.json`,
      {},
      { timeout: 10000, retries: 1, fallback: { current: { temperature_2m: '—' } } }
    );

    const temp = (data && data.current && data.current.temperature_2m) ?? '—';
    el.textContent = `🌤️ ${temp} °C`;
  } catch (e) {
    el.textContent = '⚠️ Météo indisponible';
  }
}
