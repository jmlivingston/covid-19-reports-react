import mapData from '@highcharts/map-collection/countries/us/us-me-all.geo.json'
import React from 'react'
import data from './me.json'
import State from '../State'

function ME() {
  return <State data={data} mapData={mapData} />
}

export default ME
