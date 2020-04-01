import { ReactComponent as BarChart } from 'bootstrap-icons/icons/bar-chart.svg'
import { ReactComponent as Map } from 'bootstrap-icons/icons/geo-alt.svg'
import { ReactComponent as Heart } from 'bootstrap-icons/icons/heart-fill.svg'
import { ReactComponent as Home } from 'bootstrap-icons/icons/house-door-fill.svg'
import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from './Button'
import './Header.css'
import ReportContext from './ReportContext'

function Header() {
  const { reportType, setReportType } = useContext(ReportContext)
  const history = useHistory()

  return (
    <header>
      <div className="header-home">
        <Link to="/" className="header-home-icon" title="Home">
          <Home />
        </Link>
        <Link to="/" className="header-title">
          C<span className="covid-abbr">ovid</span>-19 <span className="sub-title">Maps &amp; Charts</span>
        </Link>
      </div>
      <div className="header-buttons">
        <Button
          isActive={reportType.category === 'cases'}
          isCheckable={true}
          onClick={() => setReportType({ ...reportType, category: 'cases' })}>
          CASES
        </Button>
        <Button
          isActive={reportType.category === 'deaths'}
          isCheckable={true}
          onClick={() => setReportType({ ...reportType, category: 'deaths' })}>
          DEATHS
        </Button>
        <Button isActive={reportType.type === 'map'} onClick={() => setReportType({ ...reportType, type: 'map' })}>
          <Map />
        </Button>
        <Button isActive={reportType.type === 'chart'} onClick={() => setReportType({ ...reportType, type: 'chart' })}>
          <BarChart />
        </Button>
        <Button isActive={true} onClick={() => history.push('/about')} className="about">
          <Heart />
        </Button>
      </div>
    </header>
  )
}

export default Header
