import React from 'react'

function TabOptions({activeTab, setActiveTab}) {
  return (
    <div>
      <button onClick={() => setActiveTab("Nightlife")}>ON Click</button>
      This is tab options
    </div>
  )
}

export default TabOptions
