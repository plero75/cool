export async function fetchRer() {
  try {
    document.getElementById("rer").textContent = "🚆 RER A : Prochains départs…";
  } catch (error) {
    document.getElementById("rer").textContent = "⚠️ RER A indisponible";
  }
}