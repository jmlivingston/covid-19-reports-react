import mapData from '@highcharts/map-collection/countries/us/us-ok-all.geo.json'
import React from 'react'
import data from './ok.json'
import State from '../State'

function OK() {
  return <State data={data} mapData={mapData} />
}

export default OK
