import { getWeather } from './modules/weather.js'
import { getRerStatus } from './modules/rer.js'
import { getBusSchedules } from './modules/bus.js'
import { getVelibData } from './modules/velib.js'
import { getNews } from './modules/news.js'
import { getRaces } from './modules/races.js'

const tasks = [getWeather, getRerStatus, getBusSchedules, getVelibData, getNews, getRaces]

async function renderAll(){
  for (const t of tasks){ try{ await t() } catch{} }
}

let lastActivity = Date.now()
const INACTIVITY_LIMIT = 10 * 60 * 1000
addEventListener('mousemove', ()=> lastActivity = Date.now())
addEventListener('keydown', ()=> lastActivity = Date.now())

addEventListener('DOMContentLoaded', ()=>{
  renderAll()
  setInterval(()=>{ if (Date.now() - lastActivity < INACTIVITY_LIMIT) renderAll() }, 5*60*1000)
})
