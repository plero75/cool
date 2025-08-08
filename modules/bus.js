import { fetchWithTimeout } from './api.js'
const BASE = import.meta.env.BASE_URL || '/'
export async function getBusSchedules() {{
  const el = document.getElementById('bus')
  if (!el) return
  try {{
    const data = await fetchWithTimeout(`${{BASE}}bus.json`, {{}}, {{ timeout: 10000, retries: 1, fallback: [] }})
    el.innerHTML = (Array.isArray(data.schedules)?data.schedules:[]).map(b=>`<div>${b.line} — ${b.time}</div>`).join('') || 'Aucune donnée'
  }} catch {{ el.textContent = '⚠️ Bus indisponible' }}
}}
