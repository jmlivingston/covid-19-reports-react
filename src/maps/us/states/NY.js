import mapData from '@highcharts/map-collection/countries/us/us-ny-all.geo.json'
import React from 'react'
import data from './ny.json'
import State from '../State'

function NY() {
  return <State data={data} mapData={mapData} />
}

export default NY
