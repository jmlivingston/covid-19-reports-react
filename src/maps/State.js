import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import ReportContext from '../core/ReportContext'
import Map from './Map'

function State({ data, mapData, reportService, summary }) {
  const { reportType } = useContext(ReportContext)

  return (
    <Map
      colorKey={reportType}
      colorMaxValue={summary[`${reportType}Max`]}
      colorMinValue={0}
      colorValueInterval={Math.round(summary[`${reportType}Max`] / 5)}
      data={data}
      mapData={mapData}
      seriesJoinBy={'fips'}
      title={reportService.getTitle({ ...summary, reportType })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}"
      tooltipHeader="{point.key}<br />"
    />
  )
}

State.propTypes = {
  data: PropTypes.array,
  mapData: PropTypes.object,
  reportService: PropTypes.object,
  summary: PropTypes.object,
}

export default State
