import mapData from '@highcharts/map-collection/countries/us/us-md-all.geo.json'
import React from 'react'
import data from './md.json'
import State from '../State'

function MD() {
  return <State data={data} mapData={mapData} />
}

export default MD
