import mapData from '@highcharts/map-collection/countries/us/us-mt-all.geo.json'
import React from 'react'
import data from './mt.json'
import State from '../State'

function MT() {
  return <State data={data} mapData={mapData} />
}

export default MT
