import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <>
      <div className="ball-scale-multiple">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading-text">Loading...</div>
    </>
  )
}

export default Loader
