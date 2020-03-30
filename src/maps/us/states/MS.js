import mapData from '@highcharts/map-collection/countries/us/us-ms-all.geo.json'
import React from 'react'
import data from './ms.json'
import State from '../State'

function MS() {
  return <State data={data} mapData={mapData} />
}

export default MS
