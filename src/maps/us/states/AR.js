import mapData from '@highcharts/map-collection/countries/us/us-ar-all.geo.json'
import React from 'react'
import data from './ar.json'
import State from '../State'

function AR() {
  return <State data={data} mapData={mapData} />
}

export default AR
