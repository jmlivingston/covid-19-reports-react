import mapData from '@highcharts/map-collection/countries/us/us-ks-all.geo.json'
import React from 'react'
import data from './ks.json'
import State from '../State'

function KS() {
  return <State data={data} mapData={mapData} />
}

export default KS
