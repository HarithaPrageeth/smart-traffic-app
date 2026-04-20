import React, { useState } from 'react'
import { ParkingSquare, Car, TrendingUp, MapPin, Clock, CheckCircle } from 'lucide-react'

const Parking = () => {
  const [availableSpaces] = useState(12)
  const [totalSpaces] = useState(45)
  
  const parkingLots = [
    { id: 1, name: 'Central Parking - Pettah', available: 5, total: 20, price: 'LKR 50/hr', distance: '200m' },
    { id: 2, name: 'Main Street Lot', available: 3, total: 15, price: 'LKR 40/hr', distance: '350m' },
    { id: 3, name: 'Sea View Parking', available: 4, total: 10, price: 'LKR 60/hr', distance: '500m', recommended: true },
  ]

  const getAvailabilityColor = (available, total) => {
    const percentage = (available / total) * 100
    if (percentage > 30) return 'text-green-600 bg-green-100'
    if (percentage > 10) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with available spaces */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-6 text-white shadow-xl">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Parking Availability</h2>
            <p className="text-blue-100">Pettah Area</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{availableSpaces}</div>
            <div className="text-sm text-blue-100">Available Spaces</div>
            <div className="text-xs text-blue-200">out of {totalSpaces} total</div>
          </div>
        </div>
        <div className="mt-4 bg-white/20 rounded-full h-2">
          <div 
            className="bg-green-400 rounded-full h-2 transition-all duration-500"
            style={{ width: `${(availableSpaces / totalSpaces) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Parking Slots Visualization */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <ParkingSquare size={18} />
          Parking Slots Overview
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {[...Array(availableSpaces)].map((_, i) => (
            <div key={`available-${i}`} className="bg-green-100 border-2 border-green-400 rounded-lg p-3 text-center">
              <CheckCircle size={20} className="text-green-600 mx-auto" />
              <div className="text-xs text-green-700 mt-1">Slot {i + 1}</div>
            </div>
          ))}
          {[...Array(totalSpaces - availableSpaces)].map((_, i) => (
            <div key={`taken-${i}`} className="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 text-center opacity-60">
              <Car size={20} className="text-gray-500 mx-auto" />
              <div className="text-xs text-gray-500 mt-1">Occupied</div>
            </div>
          ))}
        </div>
      </div>

      {/* Parking Lots List */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-700 ml-1">Nearby Parking Lots</h3>
        {parkingLots.map((lot) => (
          <div key={lot.id} className={`bg-white rounded-xl shadow-md p-4 ${lot.recommended ? 'border-2 border-green-400' : ''}`}>
            {lot.recommended && (
              <div className="text-xs text-green-600 font-semibold mb-1 flex items-center gap-1">
                <TrendingUp size={12} />
                Recommended
              </div>
            )}
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-800">{lot.name}</h4>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    {lot.distance}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {lot.price}
                  </div>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getAvailabilityColor(lot.available, lot.total)}`}>
                {lot.available} / {lot.total} spots
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-6 text-center text-xs text-gray-400">
        <p>🅿️ Prices are estimates. Actual rates may vary.</p>
      </div>
    </div>
  )
}

export default Parking