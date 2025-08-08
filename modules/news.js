import { fetchWithTimeout } from './api.js'
const BASE = import.meta.env.BASE_URL || '/'
export async function getNews() {{
  const el = document.getElementById('news')
  if (!el) return
  try {{
    const data = await fetchWithTimeout(`${{BASE}}news.json`, {{}}, {{ timeout: 10000, retries: 1, fallback: [] }})
    el.innerHTML = (Array.isArray(data.articles)?data.articles:[]).slice(0,5).map(n=>`<div>📰 ${n.title}</div>`).join('') || 'Aucune actu'
  }} catch {{ el.textContent = '⚠️ Actus indisponibles' }}
}}
