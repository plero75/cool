export async function fetchNews() {
  try {
    document.getElementById("news").textContent = "🗞️ Actus : Chargement…";
  } catch (error) {
    document.getElementById("news").textContent = "⚠️ Actus indisponibles";
  }
}