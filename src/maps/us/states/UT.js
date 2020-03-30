import mapData from '@highcharts/map-collection/countries/us/us-ut-all.geo.json'
import React from 'react'
import data from './ut.json'
import State from '../State'

function UT() {
  return <State data={data} mapData={mapData} />
}

export default UT
