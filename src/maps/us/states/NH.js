import mapData from '@highcharts/map-collection/countries/us/us-nh-all.geo.json'
import React from 'react'
import data from './nh.json'
import State from '../State'

function NH() {
  return <State data={data} mapData={mapData} />
}

export default NH
