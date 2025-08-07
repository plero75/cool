export async function fetchBus() {
  try {
    document.getElementById("bus").textContent = "🚌 Bus : Prochains départs…";
  } catch (error) {
    document.getElementById("bus").textContent = "⚠️ Bus indisponibles";
  }
}