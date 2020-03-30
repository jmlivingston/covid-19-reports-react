import mapData from '@highcharts/map-collection/countries/us/us-ia-all.geo.json'
import React from 'react'
import data from './ia.json'
import State from '../State'

function IA() {
  return <State data={data} mapData={mapData} />
}

export default IA
