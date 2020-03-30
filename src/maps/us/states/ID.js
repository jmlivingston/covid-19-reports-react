import mapData from '@highcharts/map-collection/countries/us/us-id-all.geo.json'
import React from 'react'
import data from './id.json'
import State from '../State'

function ID() {
  return <State data={data} mapData={mapData} />
}

export default ID
