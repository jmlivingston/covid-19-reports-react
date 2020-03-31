import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import ReportContext from '../../core/ReportContext'
import Map from '../Map'
import { getTitle } from './report-service'

function State({ data, mapData }) {
  const { reportType } = useContext(ReportContext)

  return (
    <Map
      colorKey={reportType}
      colorMaxValue={data.summary[reportType]}
      colorMinValue={0}
      colorValueInterval={Math.round(data.summary[reportType] / 5)}
      data={data.data}
      hasSeparatorLines={true}
      mapData={mapData}
      seriesJoinBy={'fips'}
      title={getTitle({ ...data.summary, reportType })}
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
