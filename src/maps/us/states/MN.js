import mapData from '@highcharts/map-collection/countries/us/us-mn-all.geo.json'
import React from 'react'
import data from './mn.json'
import State from '../State'

function MN() {
  return <State data={data} mapData={mapData} />
}

export default MN
