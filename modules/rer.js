import { fetchWithTimeout } from './api.js'
const BASE = import.meta.env.BASE_URL || '/'
export async function getRerStatus() {{
  const el = document.getElementById('rer')
  if (!el) return
  try {{
    const data = await fetchWithTimeout(`${{BASE}}rer.json`, {{}}, {{ timeout: 10000, retries: 1, fallback: [] }})
    el.innerHTML = (Array.isArray(data.lines)?data.lines:[]).map(l=>`<div>${l.name} — ${l.status}</div>`).join('') || 'Aucune donnée'
  }} catch {{ el.textContent = '⚠️ RER indisponible' }}
}}
