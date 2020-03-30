import mapData from '@highcharts/map-collection/countries/us/us-dc-all.geo.json'
import React from 'react'
import data from './dc.json'
import State from '../State'

function DC() {
  return <State data={data} mapData={mapData} />
}

export default DC
