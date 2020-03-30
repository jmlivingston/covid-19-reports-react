import mapData from '@highcharts/map-collection/countries/us/us-all.geo.json'
import { useParams } from '@reach/router'
import React, { useEffect, useState } from 'react'
import Loader from '../../core/Loader'
import CountryMap from '../../maps/CountryMap'
import { getTitle } from './report-service'
import separatorLines from './us-separator-lines.json'

function USByState() {
  const { reportType = 'deaths' } = useParams()
  const [data, setData] = useState([])
  const [maxValue, setMaxValue] = useState(0)
  useEffect(() => {
    ;(async () => {
      const stateData = await import('./us-states-total.json')
      setData(stateData.default)
      setMaxValue(stateData.default.sort((a, b) => (a[reportType] > b[reportType] ? -1 : 1))[0][reportType])
    })()
  }, [reportType])
  return data.length ? (
    <CountryMap
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
  ) : (
    <Loader />
  )
}

export default USByState
