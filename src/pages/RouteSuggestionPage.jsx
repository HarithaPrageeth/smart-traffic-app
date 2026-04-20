import React from 'react'
import RouteSuggestion from '../components/RouteSuggestion'

const RouteSuggestionPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Route Planner</h1>
        <p className="text-gray-500">Find the best route from Point A to Point B</p>
      </div>
      <RouteSuggestion />
    </div>
  )
}

export default RouteSuggestionPage