import { fetchWeather } from './modules/weather.js';
import { fetchRer } from './modules/rer.js';
import { fetchBus } from './modules/bus.js';
import { fetchVelib } from './modules/velib.js';
import { fetchNews } from './modules/news.js';
import { fetchRaces } from './modules/races.js';

function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent =
    `🕐 ${now.toLocaleTimeString()} – 📅 ${now.toLocaleDateString("fr-FR")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateDateTime();
  fetchWeather();
  fetchRer();
  fetchBus();
  fetchVelib();
  fetchNews();
  fetchRaces();
  setInterval(updateDateTime, 10000);
});