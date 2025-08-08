import { getWeather } from './modules/weather.js';
import { getRerStatus } from './modules/rer.js';
import { getBusSchedules } from './modules/bus.js';
import { getVelibData } from './modules/velib.js';
import { getNews } from './modules/news.js';
import { getRaces } from './modules/races.js';

const sections = { weather:getWeather, rer:getRerStatus, bus:getBusSchedules, velib:getVelibData, news:getNews, races:getRaces };

async function render() {
  for (const fn of Object.values(sections)) {
    try { await fn(); } catch {}
  }
}

let lastActivity = Date.now();
const INACTIVITY_LIMIT = 10 * 60 * 1000;
['mousemove','keydown','touchstart','scroll'].forEach(e=>document.addEventListener(e,()=>{lastActivity=Date.now()}));

document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('refresh')?.addEventListener('click', render);
  setInterval(()=>{ if(Date.now()-lastActivity<INACTIVITY_LIMIT) render(); }, 5*60*1000);
});
