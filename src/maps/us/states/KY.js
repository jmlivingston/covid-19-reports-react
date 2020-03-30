import mapData from '@highcharts/map-collection/countries/us/us-ky-all.geo.json'
import React from 'react'
import data from './ky.json'
import State from '../State'

function KY() {
  return <State data={data} mapData={mapData} />
}

export default KY
