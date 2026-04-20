import React from 'react'
import { Map, Route, Bell, ParkingSquare, Navigation, Clock, TrendingUp, Shield } from 'lucide-react'

const HomePage = ({ setActiveScreen }) => {
  const features = [
    {
      id: 'map',
      title: 'Traffic Map',
      description: 'Live traffic updates with color-coded roads',
      icon: Map,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      buttonColor: 'bg-red-500'
    },
    {
      id: 'routes',
      title: 'Route Planner',
      description: 'Smart route suggestions with shortest path',
      icon: Route,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-500'
    },
    {
      id: 'alerts',
      title: 'Live Alerts',
      description: 'Real-time road closures and incidents',
      icon: Bell,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-500'
    },
    {
      id: 'parking',
      title: 'Parking Finder',
      description: 'Find available parking spots instantly',
      icon: ParkingSquare,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      buttonColor: 'bg-purple-500'
    }
  ]

  const stats = [
    { label: 'Active Users', value: '2.5K+', icon: TrendingUp },
    { label: 'Avg Response', value: '< 30s', icon: Clock },
    { label: 'Safety Rating', value: '98%', icon: Shield }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Navigation size={16} />
          Smart Traffic Management
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Smart Traffic App
          <span className="text-blue-600"> - Pettah</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real-time traffic updates, smart route planning, and instant alerts for Pettah, Colombo
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Icon className="text-blue-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* Features Grid - 4 Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.id}
              className={`${feature.bgColor} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.iconColor} bg-white shadow-md`}>
                    <Icon size={32} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${feature.color}`}>
                    Live
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.id === 'map' && (
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span>Heavy</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span>Clear</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span>Moderate</span>
                      </div>
                    </div>
                  )}
                  
                  {feature.id === 'routes' && (
                    <div className="text-sm text-gray-600">
                      ⚡ Shortest route: 10 minutes
                    </div>
                  )}
                  
                  {feature.id === 'alerts' && (
                    <div className="text-sm text-gray-600">
                      ⚠️ 3 active alerts in your area
                    </div>
                  )}
                  
                  {feature.id === 'parking' && (
                    <div className="text-sm text-gray-600">
                      🅿️ 12 spaces available now
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => setActiveScreen(feature.id)}
                  className={`mt-6 w-full ${feature.buttonColor} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                >
                  Open {feature.title}
                  <Navigation size={18} />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Tips Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="font-bold text-lg mb-1">💡 Pro Tips for Pettah Traffic</h4>
            <p className="text-sm opacity-90">Best time to travel: 10 AM - 3 PM | Avoid Main Street during peak hours</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">🚗 Car</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">🚌 Bus</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">🚶 Walk</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage