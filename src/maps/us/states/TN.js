import mapData from '@highcharts/map-collection/countries/us/us-tn-all.geo.json'
import React from 'react'
import data from './tn.json'
import State from '../State'

function TN() {
  return <State data={data} mapData={mapData} />
}

export default TN
