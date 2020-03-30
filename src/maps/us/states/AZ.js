import mapData from '@highcharts/map-collection/countries/us/us-az-all.geo.json'
import React from 'react'
import data from './az.json'
import State from '../State'

function AZ() {
  return <State data={data} mapData={mapData} />
}

export default AZ
