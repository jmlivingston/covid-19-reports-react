import mapData from '@highcharts/map-collection/countries/us/us-nc-all.geo.json'
import React from 'react'
import data from './nc.json'
import State from '../State'

function NC() {
  return <State data={data} mapData={mapData} />
}

export default NC
