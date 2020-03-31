import PropTypes from 'prop-types'
import React from 'react'
import Map from '../Map'
import { getTitle } from './report-service'

function State({ data, mapData }) {
  // const { reportType = 'deaths' } = useParams()
  const reportType = 'cases'

  const maxValue = data.sort((a, b) => (a[reportType] > b[reportType] ? -1 : 1))[0][reportType]
  return (
    <Map
      colorKey={reportType}
      colorMaxValue={maxValue}
      colorMinValue={0}
      colorValueInterval={Math.round(maxValue / 5)}
      data={data}
      hasSeparatorLines={true}
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
