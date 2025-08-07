import { fetchWithTimeout } from './api.js';
export async function fetchBus() {
    document.getElementById("bus").textContent = "🚌 Bus : Prochains départs…";
  } catch {
    document.getElementById("bus").textContent = "⚠️ Bus indisponibles";
  }
}