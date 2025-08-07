import { fetchWithTimeout } from './api.js';
export async function fetchWeather() {
  const data = await fetchWithTimeout("https://api.open-meteo.com/v1/forecast?latitude=48.84&longitude=2.45&current=temperature_2m,weathercode&timezone=Europe%2FParis");
    const data = await res.json();
    document.getElementById("weather").textContent = `🌤️ ${data.current.temperature_2m} °C`;
  } catch {
    document.getElementById("weather").textContent = "⚠️ Météo indisponible";
  }
}