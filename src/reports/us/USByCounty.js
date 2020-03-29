import mapData from '@highcharts/map-collection/countries/us/us-all-all-highres.geo.json'
import React from 'react'
import CountryMap from '../../maps/CountryMap'
import { getTitle } from './report-service'
import borderLines from './us-border-lines-highres.json'
import data from './us-counties-total.json'
import separatorLines from './us-separator-lines.json'

function USByCounty() {
  const key = 'cases'
  const maxValue = data.sort((a, b) => (a[key] > b[key] ? -1 : 1))[0][key]
  return (
    <CountryMap
      baseColor="#FF0000"
      borderLines={borderLines}
      colorKey={key}
      colorMaxValue={maxValue}
      colorMinValue={0}
      colorValueInterval={Math.round(maxValue / 5)}
      data={data}
      hoverColor="#A4EDBA"
      mapData={mapData}
      separatorLines={separatorLines}
      seriesJoinBy={'fips'}
      title={getTitle({ title: 'US By County' })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />"
      tooltipHeader="County: {point.key}<br />"
      tooltipSuffix=""
    />
  )
}

export default USByCounty
