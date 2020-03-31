import mapData from '@highcharts/map-collection/countries/us/us-all.geo.json'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ReportContext from '../../core/ReportContext'
import Map from '../Map'
import data from './country.json'
import { getTitle } from './report-service'
import separatorLines from './us-separator-lines.json'

function Country() {
  const history = useHistory()
  const { reportType } = useContext(ReportContext)
  return (
    <Map
      colorKey={reportType}
      colorMaxValue={data.summary[`${reportType}Max`]}
      colorMinValue={0}
      colorValueInterval={Math.round(data.summary[`${reportType}Max`] / 5)}
      data={data.data}
      drilldown={(e) => history.push(`/us/${e.point.properties['postal-code'].toLowerCase()}`)}
      hasSeparatorLines={true}
      mapData={mapData}
      separatorLines={separatorLines}
      seriesJoinBy={'fips'}
      title={getTitle({ ...data.summary, reportType })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />Click for Details"
      tooltipHeader="{point.key}<br />"
      tooltipSuffix=""
    />
  )
}

export default Country
