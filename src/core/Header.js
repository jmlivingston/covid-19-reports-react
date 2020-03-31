import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ReportContext from './ReportContext'

function Header() {
  const { reportType, setReportType } = useContext(ReportContext)

  return (
    <header>
      <div className="header-home">
        <Link to="/" className="header-home-icon">
          &#8962;
        </Link>
        <Link to="/">COVID-19</Link>
      </div>
      <div className="header-buttons">
        <button
          className={`${reportType === '/' || reportType === 'deaths' ? 'active' : ''}`}
          onClick={() => setReportType('deaths')}>
          Deaths
        </button>
        <button className={`${reportType === 'cases' ? 'active' : ''}`} onClick={() => setReportType('cases')}>
          Cases
        </button>
      </div>
      <div className="header-mobile-buttons">
        <select onChange={(e) => setReportType(e.target.value)} value={reportType}>
          <option value={`deaths`}>Deaths</option>
          <option value={`cases`}>Cases</option>
        </select>
        <span className="caret">&#x25BE;</span>
      </div>
    </header>
  )
}

export default Header
