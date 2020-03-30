import mapData from '@highcharts/map-collection/countries/us/us-al-all.geo.json'
import React from 'react'
import data from './al.json'
import State from '../State'

function AL() {
  return <State data={data} mapData={mapData} />
}

export default AL
