import { fetchWithTimeout } from './api.js';
export async function fetchVelib() {
    document.getElementById("velib").textContent = "🚲 Vélib' : Stations disponibles…";
  } catch {
    document.getElementById("velib").textContent = "⚠️ Vélib' indisponibles";
  }
}