import mapData from '@highcharts/map-collection/countries/us/us-nd-all.geo.json'
import React from 'react'
import data from './nd.json'
import State from '../State'

function ND() {
  return <State data={data} mapData={mapData} />
}

export default ND
