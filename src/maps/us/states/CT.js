import mapData from '@highcharts/map-collection/countries/us/us-ct-all.geo.json'
import React from 'react'
import data from './ct.json'
import State from '../State'

function CT() {
  return <State data={data} mapData={mapData} />
}

export default CT
