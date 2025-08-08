import { fetchWithTimeout } from './api.js'
const BASE = import.meta.env.BASE_URL || '/'
export async function getVelibData() {{
  const el = document.getElementById('velib')
  if (!el) return
  try {{
    const data = await fetchWithTimeout(`${{BASE}}velib.json`, {{}}, {{ timeout: 10000, retries: 1, fallback: {} }})
    el.textContent = `🚲 ${data.stations?.[0]?.available_bikes ?? 0} vélos`
  }} catch {{ el.textContent = '⚠️ Vélib indisponible' }}
}}
