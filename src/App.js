import React, { Suspense, useState } from 'react'
import './App.css'
import USByCounty from './reports/us/USByCounty'
import USByState from './reports/us/USByState'

function App() {
  const [isStateView, setIsStateView] = useState(true)
  return (
    <>
      <button className={`toggle-view`} onClick={() => setIsStateView(!isStateView)}>
        <>{`${isStateView ? ' County' : ' State'} View`}</>
      </button>
      <Suspense fallback={<div>Loading...</div>}>{isStateView ? <USByState /> : <USByCounty />}</Suspense>
    </>
  )
}

export default App
