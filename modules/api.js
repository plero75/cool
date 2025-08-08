// modules/api.js
export async function fetchWithTimeout(url, options = {}, { timeout = 8000, retries = 0, fallback = null } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeout);
    try {
      const res = await fetch(url, { ...options, signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const ct = res.headers.get('content-type') || '';
      const body = ct.includes('application/json') ? await res.json() : await res.text();
      return body;
    } catch (e) {
      lastErr = e;
      if (attempt === retries) {
        console.error('Erreur API :', e);
        return fallback;
      }
    } finally {
      clearTimeout(t);
    }
  }
  return fallback;
}
