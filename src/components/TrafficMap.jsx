import React from 'react'
import { MapPin, AlertCircle } from 'lucide-react'

const TrafficMap = () => {
  // Simulated road data with traffic conditions
  const roads = [
    { id: 1, name: 'Main Street', condition: 'heavy', color: 'red', delay: '15 min' },
    { id: 2, name: 'Galle Road', condition: 'clear', color: 'green', delay: '5 min' },
    { id: 3, name: 'Marine Drive', condition: 'moderate', color: 'orange', delay: '10 min' },
    { id: 4, name: 'Borella Road', condition: 'heavy', color: 'red', delay: '20 min' },
    { id: 5, name: 'Colombo - Pettah Link', condition: 'clear', color: 'green', delay: '3 min' },
    { id: 6, name: 'Sea Street', condition: 'moderate', color: 'orange', delay: '12 min' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Live Traffic Update Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-xl mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="animate-pulse" />
            <span className="font-bold">Live Traffic Update</span>
          </div>
          <span className="text-sm">Last updated: Just now</span>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-800 text-white px-4 py-3">
          <h2 className="font-semibold flex items-center gap-2">
            <MapPin size={18} />
            Pettah Traffic Map - Live View
          </h2>
        </div>
        
        {/* Map Visualization */}
        <div className="p-4 bg-gray-50">
          <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl p-4 min-h-[400px]">
            {/* Grid lines for map effect */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full h-px bg-black" style={{ top: `${i * 50}px` }} />
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full w-px bg-black" style={{ left: `${i * 70}px` }} />
              ))}
            </div>
            
            {/* Roads */}
            <div className="relative z-10 space-y-6">
              {roads.map((road) => (
                <div key={road.id} className="flex items-center gap-4">
                  <div className="w-28 font-medium text-sm">{road.name}</div>
                  <div className="flex-1">
                    <div className={`h-10 rounded-lg flex items-center px-3 text-white text-sm font-medium shadow-md`}
                         style={{ backgroundColor: road.color === 'red' ? '#ef4444' : road.color === 'green' ? '#22c55e' : '#f97316' }}>
                      {road.condition === 'heavy' && '🔴 Heavy Traffic'}
                      {road.condition === 'clear' && '🟢 Clear Flow'}
                      {road.condition === 'moderate' && '🟠 Moderate Traffic'}
                      <span className="ml-auto text-xs bg-white bg-opacity-30 px-2 py-0.5 rounded">
                        +{road.delay}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Markers */}
            <div className="absolute top-1/4 right-8 z-20">
              <div className="bg-white rounded-lg shadow-lg p-2 text-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Heavy Traffic</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Clear</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>Moderate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-sm">Red = Heavy Traffic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm">Green = Clear</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="text-sm">Orange = Moderate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrafficMap