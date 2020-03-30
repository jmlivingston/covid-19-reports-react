import mapData from '@highcharts/map-collection/countries/us/us-nm-all.geo.json'
import React from 'react'
import data from './nm.json'
import State from '../State'

function NM() {
  return <State data={data} mapData={mapData} />
}

export default NM
