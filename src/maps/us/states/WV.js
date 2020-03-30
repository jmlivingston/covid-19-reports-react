import mapData from '@highcharts/map-collection/countries/us/us-wv-all.geo.json'
import React from 'react'
import data from './wv.json'
import State from '../State'

function WV() {
  return <State data={data} mapData={mapData} />
}

export default WV
