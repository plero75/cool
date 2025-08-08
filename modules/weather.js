import { fetchWithTimeout } from './api.js';
export async function getWeather(){
  const el=document.getElementById('weather'); if(!el) return;
  const data = await fetchWithTimeout(`${import.meta.env.BASE_URL}weather.json`,{}, {fallback:{current:{temperature_2m:'--'}}});
  el.textContent = `🌤️ ${data?.current?.temperature_2m ?? '--'} °C`;
}
