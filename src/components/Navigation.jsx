import React from 'react'
import { Map, Route, Bell, ParkingSquare, Home } from 'lucide-react'

const Navigation = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'map', label: 'Traffic Map', icon: Map },
    { id: 'routes', label: 'Routes', icon: Route },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'parking', label: 'Parking', icon: ParkingSquare },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
      <div className="container mx-auto px-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeScreen === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`flex flex-col items-center py-3 px-2 md:px-4 transition-all duration-200 ${
                  isActive 
                    ? 'text-blue-600 border-t-2 border-blue-600 -mt-[2px]' 
                    : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                <Icon size={22} />
                <span className="text-xs mt-1 font-medium hidden sm:block">{item.label}</span>
                <span className="text-[10px] mt-1 font-medium sm:hidden">
                  {item.label === 'Traffic Map' ? 'Map' : 
                   item.label === 'Route Suggestion' ? 'Route' : 
                   item.label === 'Parking Finder' ? 'Park' : 
                   item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation