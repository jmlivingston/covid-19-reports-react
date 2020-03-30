import mapData from '@highcharts/map-collection/countries/us/us-co-all.geo.json'
import React from 'react'
import data from './co.json'
import State from '../State'

function CO() {
  return <State data={data} mapData={mapData} />
}

export default CO
