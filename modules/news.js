import { fetchWithTimeout } from './api.js';
export async function getNews(){
  const el=document.getElementById('news'); if(!el) return;
  const data = await fetchWithTimeout(`${import.meta.env.BASE_URL}news.json`,{}, {fallback:{items:[]}});
  if(!Array.isArray(data?.items) || !data.items.length){ el.textContent='Aucune news'; return; }
  el.innerHTML = `<ul>${data.items.slice(0,5).map(n=>`<li>${n.title}</li>`).join('')}</ul>`;
}
