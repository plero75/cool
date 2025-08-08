import { fetchWithTimeout } from './api.js';
export async function getBusSchedules(){
  const el=document.getElementById('bus'); if(!el) return;
  const data = await fetchWithTimeout(`${import.meta.env.BASE_URL}bus.json`,{}, {fallback:{next:'--'}});
  el.textContent = `Bus: ${data?.next ?? '--'}`;
}
