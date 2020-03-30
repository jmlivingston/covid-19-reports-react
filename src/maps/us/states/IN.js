import mapData from '@highcharts/map-collection/countries/us/us-in-all.geo.json'
import React from 'react'
import data from './in.json'
import State from '../State'

function IN() {
  return <State data={data} mapData={mapData} />
}

export default IN
