import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import ReportContext from '../../core/ReportContext'
import Map from '../Map'
import { getTitle } from './report-service'

function State({ data, mapData }) {
  const { reportType } = useContext(ReportContext)

  let details = ''
  switch (data.summary.name) {
    case 'New York':
      details = 'NYC split between boroughs.'
      break
    case 'Missouri':
      details = 'KC split between counties.'
      break
    default:
      break
  }

  return (
    <Map
      colorKey={reportType}
      colorMaxValue={data.summary[`${reportType}Max`]}
      colorMinValue={0}
      colorValueInterval={Math.round(data.summary[`${reportType}Max`] / 5)}
      data={data.data}
      hasSeparatorLines={true}
      mapData={mapData}
      seriesJoinBy={'fips'}
      title={getTitle({
        ...data.summary,
        reportType,
        details,
      })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}"
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
