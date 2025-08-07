// modules/api.js

const TIMEOUT = 7000;

export async function fetchWithTimeout(url, options = {}, fallback = 'Erreur') {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur API :', error);
    return fallback;
  } finally {
    clearTimeout(timeoutId);
  }
}
