import mapData from '@highcharts/map-collection/countries/us/us-ak-all.geo.json'
import React from 'react'
import State from '../State'
import data from './ak.json'

function AK() {
  return <State data={data} mapData={mapData} />
}

export default AK
