import mapData from '@highcharts/map-collection/countries/us/us-sd-all.geo.json'
import React from 'react'
import data from './sd.json'
import State from '../State'

function SD() {
  return <State data={data} mapData={mapData} />
}

export default SD
