import React from 'react'
import Map from '../Map'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-all.geo.json'
import { getTitle } from './report-service'
import separatorLines from './us-separator-lines.json'
import data from './us-states-total.json'

function USByState() {
  // const { reportType = 'deaths' } = useParams()
  const reportType = 'cases'

  const maxValue = data.sort((a, b) => (a[reportType] > b[reportType] ? -1 : 1))[0][reportType]
  return (
    <Map
      baseColor="#FF0000"
      colorKey={reportType}
      colorMaxValue={maxValue}
      colorMinValue={0}
      colorValueInterval={Math.round(maxValue / 5)}
      data={data}
      hasSeparatorLines={true}
      hoverColor="#A4EDBA"
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

export default USByState
