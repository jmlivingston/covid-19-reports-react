import mapData from '@highcharts/map-collection/countries/us/us-fl-all.geo.json'
import React from 'react'
import data from './fl.json'
import State from '../State'

function FL() {
  return <State data={data} mapData={mapData} />
}

export default FL
