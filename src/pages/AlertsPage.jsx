import React from 'react'
import Alerts from '../components/Alerts'

const AlertsPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Live Alerts</h1>
        <p className="text-gray-500">Real-time traffic incidents and road conditions</p>
      </div>
      <Alerts />
    </div>
  )
}

export default AlertsPage