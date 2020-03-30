import mapData from '@highcharts/map-collection/countries/us/us-ri-all.geo.json'
import React from 'react'
import data from './ri.json'
import State from '../State'

function RI() {
  return <State data={data} mapData={mapData} />
}

export default RI
