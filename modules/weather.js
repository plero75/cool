export async function getWeather() {
  try {
    const res = await fetch("https://api.meteo.example/...");
    const data = await res.json();
    document.getElementById("weather").textContent = `🌤️ ${data.current.temperature_2m} °C`;
  } catch (error) {
    document.getElementById("weather").textContent = "⚠️ Météo indisponible";
  }
}
