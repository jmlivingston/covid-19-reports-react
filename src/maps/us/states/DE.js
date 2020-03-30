import mapData from '@highcharts/map-collection/countries/us/us-de-all.geo.json'
import React from 'react'
import data from './de.json'
import State from '../State'

function DE() {
  return <State data={data} mapData={mapData} />
}

export default DE
