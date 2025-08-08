import { fetchWithTimeout } from './api.js'
const BASE = import.meta.env.BASE_URL || '/'
export async function getRaces() {{
  const el = document.getElementById('races')
  if (!el) return
  try {{
    const data = await fetchWithTimeout(`${{BASE}}races.json`, {{}}, {{ timeout: 10000, retries: 1, fallback: { races: [] } }})
    el.innerHTML = (Array.isArray(data.races)?data.races:[]).map(r=>`<div>${r.name} — ${r.date}</div>`).join('') || 'Aucune course'
  }} catch {{ el.textContent = '⚠️ Courses indisponibles' }}
}}
