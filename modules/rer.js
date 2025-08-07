import { fetchWithTimeout } from './api.js';
export async function fetchRer() {
    document.getElementById("rer").textContent = "🚆 RER A : Prochains départs…";
  } catch {
    document.getElementById("rer").textContent = "⚠️ RER A indisponible";
  }
}