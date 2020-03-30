import mapData from '@highcharts/map-collection/countries/us/us-wi-all.geo.json'
import React from 'react'
import data from './wi.json'
import State from '../State'

function WI() {
  return <State data={data} mapData={mapData} />
}

export default WI
