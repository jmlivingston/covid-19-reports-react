import mapData from '@highcharts/map-collection/countries/us/us-all.geo.json'
import React from 'react'
import CountryMap from '../../maps/CountryMap'
import { getTitle } from './report-service'
import separatorLines from './us-separator-lines.json'
import data from './us-states-total.json'

function USByState() {
  const key = 'cases'
  const maxValue = data.sort((a, b) => (a[key] > b[key] ? -1 : 1))[0][key]
  return (
    <CountryMap
      baseColor="#FF0000"
      colorKey={key}
      colorMinValue={0}
      colorMaxValue={maxValue}
      colorValueInterval={Math.round(maxValue / 5)}
      data={data}
      hoverColor="#A4EDBA"
      hasSeparatorLines={true}
      mapData={mapData}
      separatorLines={separatorLines}
      seriesJoinBy={'fips'}
      title={getTitle({ title: 'US By State' })}
      tooltipFormat="Deaths: {point.deaths}<br />Cases: {point.cases}<br />"
      tooltipSuffix=""
      tooltipHeader="{point.key}<br />"
    />
  )
}

export default USByState
