import { fetchWithTimeout } from './api.js';
export async function getRaces(){
  const el=document.getElementById('races'); if(!el) return;
  const data = await fetchWithTimeout(`${import.meta.env.BASE_URL}races.json`,{}, {fallback:{races:[]}});
  if(!Array.isArray(data?.races) || !data.races.length){ el.textContent='Aucune course disponible'; return; }
  el.innerHTML = `<ul>${data.races.map(r=>`<li>${r.name} — ${r.date}</li>`).join('')}</ul>`;
}
