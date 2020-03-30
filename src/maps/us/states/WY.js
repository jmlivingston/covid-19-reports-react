import mapData from '@highcharts/map-collection/countries/us/us-wy-all.geo.json'
import React from 'react'
import data from './wy.json'
import State from '../State'

function WY() {
  return <State data={data} mapData={mapData} />
}

export default WY
