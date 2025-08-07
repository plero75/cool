// modules/weather.js
import { fetchWithTimeout } from './api.js';

export async function fetchWeather() {
  try {
    const data = await fetchWithTimeout("https://api.meteo.example/current");
    document.getElementById("weather").textContent = `🌤️ ${data.current.temperature_2m} °C`;
  } catch (error) {
    document.getElementById("weather").textContent = "⚠️ Météo indisponible";
  }
}
