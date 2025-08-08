import { fetchWithTimeout } from './api.js';
export async function getRerStatus(){
  const el=document.getElementById('rer'); if(!el) return;
  const data = await fetchWithTimeout(`${import.meta.env.BASE_URL}rer.json`,{}, {fallback:{status:'--'}});
  el.textContent = `RER: ${data?.status ?? '--'}`;
}
