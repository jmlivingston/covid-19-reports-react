import mapData from '@highcharts/map-collection/countries/us/us-or-all.geo.json'
import React from 'react'
import data from './or.json'
import State from '../State'

function OR() {
  return <State data={data} mapData={mapData} />
}

export default OR
