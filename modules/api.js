export async function fetchWithTimeout(
  url,
  options = {},
  { timeout = 7000, retries = 0, fallback = 'Erreur' } = {}
) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt === retries) {
        console.error('Erreur API :', error);
        return fallback;
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }
  return fallback;
}
