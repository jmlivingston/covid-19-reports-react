import mapData from '@highcharts/map-collection/countries/us/us-vt-all.geo.json'
import React from 'react'
import data from './vt.json'
import State from '../State'

function VT() {
  return <State data={data} mapData={mapData} />
}

export default VT
