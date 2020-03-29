import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const path = window.location.pathname
  return (
    <header>
      <Link to="/" className="header-home">
        COVID-19 USA
      </Link>
      <div className="header-buttons">
        <Link to="/" className={`${path === '/' || path === '/state/deaths' ? 'active' : ''}`}>
          State Deaths
        </Link>
        <Link to="/state/cases" className={`${path === '/state/cases' ? 'active' : ''}`}>
          State Cases
        </Link>
        <Link to="/county/deaths" className={`${path === '/county/deaths' ? 'active' : ''}`}>
          County Deaths
        </Link>
        <Link to="/county/cases" className={`${path === '/county/cases' ? 'active' : ''}`}>
          County Cases
        </Link>
      </div>
      <div className="header-mobile-buttons">
        <select onChange={(e) => navigate(e.target.value)} value={path}>
          <option value="/state/deaths">State Deaths</option>
          <option value="/state/cases">State Cases</option>
          <option value="/county/deaths">County Deaths</option>
          <option value="/county/cases">County Cases</option>
        </select>
        <span className="caret">&#x25BE;</span>
      </div>
    </header>
  )
}

export default Header
