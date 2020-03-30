import PropTypes from 'prop-types'
import React from 'react'
import CountryMap from '../CountryMap'
import { getTitle } from './report-service'

function State({ data, mapData }) {
  // const { reportType = 'deaths' } = useParams()
  const reportType = 'cases'

  const mappedData = data

  const maxValue = data.sort((a, b) => (a[reportType] > b[reportType] ? -1 : 1))[0][reportType]
  return (
    <CountryMap
      baseColor="#FF0000"
      colorKey={reportType}
      colorMaxValue={maxValue}
      colorMinValue={0}
      colorValueInterval={Math.round(maxValue / 5)}
      data={mappedData}
      drilldown={(e) => {}}
      hasSeparatorLines={true}
      hoverColor="#A4EDBA"
      mapData={mapData}
      seriesJoinBy={'fips'}
      title={getTitle({ title: `USA State ${reportType.charAt(0).toUpperCase() + reportType.slice(1)}` })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />"
      tooltipHeader="{point.key}<br />"
      tooltipSuffix=""
    />
  )
}

State.propTypes = {
  data: PropTypes.object,
  mapData: PropTypes.object,
}

export default State
