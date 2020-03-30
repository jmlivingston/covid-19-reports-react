import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './Header.css'

function Header({ location, history }) {
  return (
    <header>
      <Link to="/" className="header-home">
        COVID-19 USA
      </Link>
      <div className="header-buttons">
        <button
          className={`${location.pathname === '/' || location.pathname === '/state/deaths' ? 'active' : ''}`}
          onClick={() => history.push('/state/deaths')}>
          State Deaths
        </button>
        <button
          className={`${location.pathname === '/state/cases' ? 'active' : ''}`}
          onClick={() => history.push('/state/cases')}>
          State Cases
        </button>
        <button
          className={`${location.pathname === '/county/deaths' ? 'active' : ''}`}
          onClick={() => history.push('/county/deaths')}>
          County Deaths
        </button>
        <button
          className={`${location.pathname === '/county/cases' ? 'active' : ''}`}
          onClick={() => history.push('/county/cases')}>
          County Cases
        </button>
      </div>
      <div className="header-mobile-buttons">
        <select onChange={(e) => history.push(e.target.value)} value={location.pathname}>
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

Header.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
}

export default withRouter(Header)
