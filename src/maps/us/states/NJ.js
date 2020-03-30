import mapData from '@highcharts/map-collection/countries/us/us-nj-all.geo.json'
import React from 'react'
import data from './nj.json'
import State from '../State'

function NJ() {
  return <State data={data} mapData={mapData} />
}

export default NJ
