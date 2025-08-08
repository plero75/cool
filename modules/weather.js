import { fetchWithTimeout } from './api.js'
const BASE = import.meta.env.BASE_URL || '/'
export async function getWeather() {{
  const el = document.getElementById('weather')
  if (!el) return
  try {{
    const data = await fetchWithTimeout(`${{BASE}}weather.json`, {{}}, {{ timeout: 10000, retries: 1, fallback: '--' }})
    el.textContent = `🌤️ ${data.current?.temperature_2m ?? '--'} °C`
  }} catch {{ el.textContent = '⚠️ Météo indisponible' }}
}}
