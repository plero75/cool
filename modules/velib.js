import { fetchWithTimeout } from './api.js';
export async function getVelibData(){
  const el=document.getElementById('velib'); if(!el) return;
  const data = await fetchWithTimeout(`${import.meta.env.BASE_URL}velib.json`,{}, {fallback:{bikes:'--'}});
  el.textContent = `Vélos: ${data?.bikes ?? '--'}`;
}
