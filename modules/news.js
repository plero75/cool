import { fetchWithTimeout } from './api.js';
export async function fetchNews() {
    document.getElementById("news").textContent = "🗞️ Actus : Chargement…";
  } catch {
    document.getElementById("news").textContent = "⚠️ Actus indisponibles";
  }
}