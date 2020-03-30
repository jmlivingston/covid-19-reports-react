import mapData from '@highcharts/map-collection/countries/us/us-la-all.geo.json'
import React from 'react'
import data from './la.json'
import State from '../State'

function LA() {
  return <State data={data} mapData={mapData} />
}

export default LA
