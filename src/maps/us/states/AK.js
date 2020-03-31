import mapData from '@highcharts/map-collection/countries/us/us-ak-all.geo.json'
import React from 'react'
import data from './ak.json'
import State from '../State'

function AK() {
  return <State data={data} mapData={mapData} />
}

export default AK
