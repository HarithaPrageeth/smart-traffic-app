import React from 'react'
import Parking from '../components/Parking'

const ParkingPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Parking Finder</h1>
        <p className="text-gray-500">Find available parking spots near you</p>
      </div>
      <Parking />
    </div>
  )
}

export default ParkingPage