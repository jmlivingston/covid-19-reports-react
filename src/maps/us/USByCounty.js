import mapData from '@highcharts/map-collection/countries/us/us-all-all-highres.geo.json'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../core/Loader'
import CountryMap from '../../maps/CountryMap'
import { getTitle } from './report-service'
import borderLines from './us-border-lines-highres.json'
import separatorLines from './us-separator-lines.json'

function USByCounty() {
  const { reportType = 'deaths' } = useParams()
  const [data, setData] = useState([])
  const [maxValue, setMaxValue] = useState(0)
  useEffect(() => {
    setData([])
    ;(async () => {
      const stateData = await import('./us-counties-total.json')
      setData(stateData.default)
      setMaxValue(stateData.default.sort((a, b) => (a[reportType] > b[reportType] ? -1 : 1))[0][reportType])
    })()
  }, [reportType])
  return data.length ? (
    <CountryMap
      baseColor="#FF0000"
      borderLines={borderLines}
      colorKey={reportType}
      colorMaxValue={maxValue}
      colorMinValue={0}
      colorValueInterval={Math.round(maxValue / 5)}
      data={data}
      hoverColor="#A4EDBA"
      mapData={mapData}
      separatorLines={separatorLines}
      seriesJoinBy={'fips'}
      title={getTitle({ title: `USA County ${reportType.charAt(0).toUpperCase() + reportType.slice(1)}` })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />"
      tooltipHeader="County: {point.key}<br />"
      tooltipSuffix=""
    />
  ) : (
    <Loader />
  )
}

export default USByCounty
