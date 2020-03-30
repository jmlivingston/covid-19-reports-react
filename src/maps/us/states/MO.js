import mapData from '@highcharts/map-collection/countries/us/us-mo-all.geo.json'
import React from 'react'
import data from './mo.json'
import State from '../State'

function MO() {
  return <State data={data} mapData={mapData} />
}

export default MO
