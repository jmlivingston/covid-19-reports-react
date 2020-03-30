import mapData from '@highcharts/map-collection/countries/us/us-oh-all.geo.json'
import React from 'react'
import data from './oh.json'
import State from '../State'

function OH() {
  return <State data={data} mapData={mapData} />
}

export default OH
