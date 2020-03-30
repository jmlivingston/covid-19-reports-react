import mapData from '@highcharts/map-collection/countries/us/us-tx-all.geo.json'
import React from 'react'
import data from './tx.json'
import State from '../State'

function TX() {
  return <State data={data} mapData={mapData} />
}

export default TX
