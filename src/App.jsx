import React from 'react'
import Joinville from './components/Joinville'
import Weather from './components/Weather'
import Velib from './components/Velib'
import News from './components/News'
import Alerts from './components/Alerts'

export default function App() {
  return (
    <div className="dashboard">
      <Joinville />
      <Weather />
      <Velib />
      <News />
      <Alerts />
    </div>
  )
}