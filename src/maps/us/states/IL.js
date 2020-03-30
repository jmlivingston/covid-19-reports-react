import mapData from '@highcharts/map-collection/countries/us/us-il-all.geo.json'
import React from 'react'
import data from './il.json'
import State from '../State'

function IL() {
  return <State data={data} mapData={mapData} />
}

export default IL
