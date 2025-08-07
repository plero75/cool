import { fetchWithTimeout } from './api.js';
export async function fetchRaces() {
  const data = await fetchWithTimeout("races.json");
    const data = await res.json();
    document.getElementById("races").textContent = `🏇 Prochaines courses : ${data.length}`;
  } catch {
    document.getElementById("races").textContent = "⚠️ Courses indisponibles";
  }
}