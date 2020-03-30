import mapData from '@highcharts/map-collection/countries/us/us-ca-all.geo.json'
import React from 'react'
import data from './ca.json'
import State from '../State'

function CA() {
  return <State data={data} mapData={mapData} />
}

export default CA
