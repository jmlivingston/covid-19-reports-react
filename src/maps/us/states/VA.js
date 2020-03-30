import mapData from '@highcharts/map-collection/countries/us/us-va-all.geo.json'
import React from 'react'
import data from './va.json'
import State from '../State'

function VA() {
  return <State data={data} mapData={mapData} />
}

export default VA
