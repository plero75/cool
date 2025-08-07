export async function fetchVelib() {
  try {
    document.getElementById("velib").textContent = "🚲 Vélib' : Stations disponibles…";
  } catch (error) {
    document.getElementById("velib").textContent = "⚠️ Vélib' indisponibles";
  }
}