import mapData from '@highcharts/map-collection/countries/us/us-sc-all.geo.json'
import React from 'react'
import data from './sc.json'
import State from '../State'

function SC() {
  return <State data={data} mapData={mapData} />
}

export default SC
