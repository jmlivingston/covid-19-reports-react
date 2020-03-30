import mapData from '@highcharts/map-collection/countries/us/us-ga-all.geo.json'
import React from 'react'
import data from './ga.json'
import State from '../State'

function GA() {
  return <State data={data} mapData={mapData} />
}

export default GA
