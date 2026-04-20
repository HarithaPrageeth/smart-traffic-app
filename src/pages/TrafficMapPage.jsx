import React from 'react'
import TrafficMap from '../components/TrafficMap'

const TrafficMapPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Traffic Map</h1>
        <p className="text-gray-500">Live traffic conditions in Pettah area</p>
      </div>
      <TrafficMap />
    </div>
  )
}

export default TrafficMapPage