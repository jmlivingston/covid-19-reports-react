import mapData from '@highcharts/map-collection/countries/us/us-ne-all.geo.json'
import React from 'react'
import data from './ne.json'
import State from '../State'

function NE() {
  return <State data={data} mapData={mapData} />
}

export default NE
