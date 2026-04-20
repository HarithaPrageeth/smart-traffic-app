import React, { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import TrafficMapPage from './pages/TrafficMapPage'
import RouteSuggestionPage from './pages/RouteSuggestionPage'
import AlertsPage from './pages/AlertsPage'
import ParkingPage from './pages/ParkingPage'

function App() {
  const [activeScreen, setActiveScreen] = useState('home')

  const renderScreen = () => {
    switch(activeScreen) {
      case 'map':
        return <TrafficMapPage />
      case 'routes':
        return <RouteSuggestionPage />
      case 'alerts':
        return <AlertsPage />
      case 'parking':
        return <ParkingPage />
      default:
        return <HomePage setActiveScreen={setActiveScreen} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Smart Traffic App</h1>
              <p className="text-xs text-blue-100">Pettah, Colombo</p>
            </div>
            {activeScreen !== 'home' && (
              <button
                onClick={() => setActiveScreen('home')}
                className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition"
              >
                ← Back to Home
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <Navigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  )
}

export default App