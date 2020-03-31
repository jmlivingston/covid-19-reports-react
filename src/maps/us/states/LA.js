import React from 'react'
import data from '../../../data/us/states/la.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-la-all.geo.json'

function LA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default LA
