import mapData from '@highcharts/map-collection/countries/us/us-hi-all.geo.json'
import React from 'react'
import data from './hi.json'
import State from '../State'

function HI() {
  return <State data={data} mapData={mapData} />
}

export default HI
