import { Link, navigate } from '@reach/router'
import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [path, setPath] = useState(window.location.pathname)
  const navigatePath = (newPath) => {
    setPath(newPath)
    setTimeout(() => {
      // ugly hack
      navigate(newPath)
    }, 0)
  }
  return (
    <header>
      <Link to="/" className="header-home">
        COVID-19 USA
      </Link>
      <div className="header-buttons">
        <button
          className={`${path === '/' || path === '/state/deaths' ? 'active' : ''}`}
          onClick={() => navigatePath('/state/deaths')}>
          State Deaths
        </button>
        <button className={`${path === '/state/cases' ? 'active' : ''}`} onClick={() => navigatePath('/state/cases')}>
          State Cases
        </button>
        <button
          className={`${path === '/county/deaths' ? 'active' : ''}`}
          onClick={() => navigatePath('/county/deaths')}>
          County Deaths
        </button>
        <button className={`${path === '/county/cases' ? 'active' : ''}`} onClick={() => navigatePath('/county/cases')}>
          County Cases
        </button>
      </div>
      <div className="header-mobile-buttons">
        <select onChange={(e) => navigatePath(e.target.value)} value={path}>
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
