import mapData from '@highcharts/map-collection/countries/us/us-pa-all.geo.json'
import React from 'react'
import data from './pa.json'
import State from '../State'

function PA() {
  return <State data={data} mapData={mapData} />
}

export default PA
