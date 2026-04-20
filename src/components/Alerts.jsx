import React, { useState, useEffect } from 'react'
import { AlertTriangle, Clock, MapPin, XCircle, Car, Wrench, Bell } from 'lucide-react'

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'road_closed', title: 'Road Closed', description: 'Main Street closed for construction', location: 'Main Street, Pettah', time: '5 mins ago', severity: 'high', icon: XCircle },
    { id: 2, type: 'accident', title: 'Accident', description: 'Multi-vehicle collision reported', location: 'Galle Road near Liberty Plaza', time: '12 mins ago', severity: 'high', icon: Car },
    { id: 3, type: 'heavy_traffic', title: 'Heavy Traffic', description: 'Severe congestion expected', location: 'Borella Junction', time: '25 mins ago', severity: 'medium', icon: AlertTriangle },
    { id: 4, type: 'construction', title: 'Road Work', description: 'Lane closure ahead', location: 'Sea Street', time: '1 hour ago', severity: 'low', icon: Wrench },
  ])

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high': return 'border-l-4 border-red-500 bg-red-50'
      case 'medium': return 'border-l-4 border-orange-500 bg-orange-50'
      default: return 'border-l-4 border-yellow-500 bg-yellow-50'
    }
  }

  const getIconColor = (severity) => {
    switch(severity) {
      case 'high': return 'text-red-500'
      case 'medium': return 'text-orange-500'
      default: return 'text-yellow-600'
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header with count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Bell className="text-red-500" />
          Live Alerts
          <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{alerts.length} active</span>
        </h2>
        <button className="text-sm text-blue-500 hover:text-blue-600">Mark all as read</button>
      </div>

      {/* Alert List */}
      <div className="space-y-3">
        {alerts.map((alert) => {
          const IconComponent = alert.icon
          return (
            <div key={alert.id} className={`bg-white rounded-xl shadow-md p-4 transition-all hover:shadow-lg ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-start gap-3">
                <div className={`mt-1 ${getIconColor(alert.severity)}`}>
                  <IconComponent size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="font-bold text-gray-800">{alert.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      <Clock size={12} />
                      {alert.time}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{alert.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                    <MapPin size={12} />
                    {alert.location}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-8 bg-blue-50 rounded-xl p-4 border border-blue-200">
        <div className="flex items-center gap-2 text-blue-700">
          <AlertTriangle size={18} />
          <span className="font-semibold">Alert System Active</span>
        </div>
        <p className="text-sm text-blue-600 mt-1">Alerts update every 2 minutes. Stay safe on the road!</p>
      </div>
    </div>
  )
}

export default Alerts