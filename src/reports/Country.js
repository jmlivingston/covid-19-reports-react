import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ReportContext from '../core/ReportContext'
import Bar from './Bar'
import './Country.css'
import Map from './Map'

function Country({ data, mapData, reportService, separatorLines, summary }) {
  const history = useHistory()
  const { reportType } = useContext(ReportContext)

  return (
    <>
      {reportType.type === 'map' && (
        <div className="map-wrapper">
          <Map
            colorKey={reportType.category}
            colorMaxValue={summary[`${reportType.category}Max`]}
            colorMinValue={0}
            colorValueInterval={Math.round(summary[`${reportType.category}Max`] / 5)}
            data={data}
            drilldown={({ point }) => history.push(`/us/${point.properties['postal-code'].toLowerCase()}`)}
            mapData={mapData}
            separatorLines={separatorLines}
            seriesJoinBy={'fips'}
            title={reportService.getTitle({ ...summary, reportType: reportType.category })}
            tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />Click for Details"
            tooltipHeader="{point.key}<br />"
          />
        </div>
      )}
      {reportType.type === 'chart' && (
        <Bar
          colorKey={reportType.category}
          colorMaxValue={summary[`${reportType.category}Max`]}
          colorMinValue={0}
          colorValueInterval={Math.round(summary[`${reportType.category}Max`] / 5)}
          data={data}
          drilldown={({ point }) => history.push(`/us/${point.properties['postal-code'].toLowerCase()}`)}
          seriesJoinBy={'fips'}
          title={reportService.getTitle({ ...summary, reportType: reportType.category })}
          tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />Click for Details"
          tooltipHeader="{point.key}<br />"
        />
      )}
    </>
  )
}

Country.propTypes = {
  data: PropTypes.array,
  mapData: PropTypes.object,
  reportService: PropTypes.object,
  separatorLines: PropTypes.array,
  summary: PropTypes.object,
}

export default Country
