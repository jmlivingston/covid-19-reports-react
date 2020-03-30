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
        <Link
          className={`${location.pathname === '/' || location.pathname === '/state/deaths' ? 'active' : ''}`}
          to="/state/deaths">
          State Deaths
        </Link>
        <Link className={`${location.pathname === '/state/cases' ? 'active' : ''}`} to="/state/cases">
          State Cases
        </Link>
        <Link className={`${location.pathname === '/county/deaths' ? 'active' : ''}`} to="/county/deaths">
          County Deaths
        </Link>
        <Link className={`${location.pathname === '/county/cases' ? 'active' : ''}`} to="/county/cases">
          County Cases
        </Link>
      </div>
      <div className="header-mobile-buttons">
        <select onChange={(e) => history.push(e.target.value)} value={location.pathname}>
          <option value={`#/state/deaths`}>State Deaths</option>
          <option value={`#/state/cases`}>State Cases</option>
          <option value={`#/county/deaths`}>County Deaths</option>
          <option value={`#/county/cases`}>County Cases</option>
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
