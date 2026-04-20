import React, { useState } from 'react'
import { MapPin, Clock, Navigation, TrendingDown, Star } from 'lucide-react'

const RouteSuggestion = () => {
  const [selectedRoute, setSelectedRoute] = useState('route2')
  
  const routes = [
    { id: 'route1', name: 'Via Main Street', duration: 20, distance: '4.2 km', traffic: 'Heavy', delay: '+12 min', color: 'red' },
    { id: 'route2', name: 'Via Marine Drive', duration: 10, distance: '3.8 km', traffic: 'Light', delay: '+2 min', color: 'green', isBest: true },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Point A to Point B Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <MapPin size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">From</div>
                <div className="font-semibold">Point A</div>
                <div className="text-xs text-gray-400">Pettah Main Station</div>
              </div>
            </div>
            <Navigation size={20} className="text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <MapPin size={18} className="text-red-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">To</div>
                <div className="font-semibold">Point B</div>
                <div className="text-xs text-gray-400">Fort Railway Station</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
            Departure: Now • Arrival by {new Date(Date.now() + 10 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Route Options */}
      <div className="space-y-4">
        {routes.map((route) => (
          <div
            key={route.id}
            onClick={() => setSelectedRoute(route.id)}
            className={`bg-white rounded-2xl shadow-lg p-5 cursor-pointer transition-all duration-200 border-2 ${
              selectedRoute === route.id 
                ? 'border-blue-500 shadow-xl' 
                : 'border-transparent hover:shadow-xl'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-lg">{route.name}</span>
                  {route.isBest && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      Best Route
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={16} />
                    <span className={`font-semibold ${route.duration === 10 ? 'text-green-600 text-lg' : ''}`}>
                      {route.duration} min
                    </span>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="text-gray-600">{route.distance}</div>
                  <div className="text-gray-400">•</div>
                  <div className={`flex items-center gap-1 ${route.traffic === 'Heavy' ? 'text-red-500' : 'text-green-500'}`}>
                    <TrendingDown size={14} />
                    {route.traffic} Traffic
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="text-gray-500 text-xs">Est. delay: {route.delay}</div>
                </div>
              </div>
              <div className={`px-5 py-2 rounded-full text-white font-semibold text-center min-w-[100px] ${
                route.duration === 10 ? 'bg-green-500' : 'bg-gray-400'
              }`}>
                {route.duration === 10 ? 'Recommended ✓' : 'Alternative'}
              </div>
            </div>
            
            {/* Route visualization */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className={`h-1 flex-1 rounded-full ${route.color === 'green' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="ml-2">Via {route.name === 'Via Main Street' ? 'Main St → Borella → Town Hall' : 'Marine Dr → Galle Rd → Fort'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shortest Route Highlight */}
      <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            <Star size={20} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-green-800">✨ Shortest Route: Marine Drive (10 min)</div>
            <div className="text-sm text-green-600">Save 10 minutes compared to alternative route</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouteSuggestion