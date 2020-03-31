import mapData from '@highcharts/map-collection/countries/us/us-all.geo.json'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Map from '../Map'
import country from './country.json'
import { getTitle } from './report-service'
import separatorLines from './us-separator-lines.json'

function Country() {
  const history = useHistory()
  // const { reportType = 'deaths' } = useParams()
  const reportType = 'cases'

  const maxValue = country.sort((a, b) => (a[reportType] > b[reportType] ? -1 : 1))[0][reportType]

  return (
    <Map
      colorKey={reportType}
      colorMaxValue={maxValue}
      colorMinValue={0}
      colorValueInterval={Math.round(maxValue / 5)}
      data={country}
      drilldown={(e) => history.push(`/us/${e.point.properties['postal-code'].toLowerCase()}`)}
      hasSeparatorLines={true}
      mapData={mapData}
      separatorLines={separatorLines}
      seriesJoinBy={'fips'}
      title={getTitle({ title: `USA State ${reportType.charAt(0).toUpperCase() + reportType.slice(1)}` })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />"
      tooltipHeader="{point.key}<br />"
      tooltipSuffix=""
    />
  )
}

export default Country
