import mapData from '@highcharts/map-collection/countries/us/us-mi-all.geo.json'
import React from 'react'
import data from './mi.json'
import State from '../State'

function MI() {
  return <State data={data} mapData={mapData} />
}

export default MI
