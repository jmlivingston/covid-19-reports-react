import mapData from '@highcharts/map-collection/countries/us/us-wa-all.geo.json'
import React from 'react'
import data from './wa.json'
import State from '../State'

function WA() {
  return <State data={data} mapData={mapData} />
}

export default WA
