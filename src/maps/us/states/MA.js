import mapData from '@highcharts/map-collection/countries/us/us-ma-all.geo.json'
import React from 'react'
import data from './ma.json'
import State from '../State'

function MA() {
  return <State data={data} mapData={mapData} />
}

export default MA
