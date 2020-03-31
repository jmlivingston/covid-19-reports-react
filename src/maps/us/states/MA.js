import React from 'react'
import data from '../../../data/us/states/ma.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ma-all.geo.json'

function MA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MA
