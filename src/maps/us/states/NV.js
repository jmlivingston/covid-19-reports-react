import mapData from '@highcharts/map-collection/countries/us/us-nv-all.geo.json'
import React from 'react'
import data from './nv.json'
import State from '../State'

function NV() {
  return <State data={data} mapData={mapData} />
}

export default NV
