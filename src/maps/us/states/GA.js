import React from 'react'
import data from '../../../data/us/states/ga.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ga-all.geo.json'

function GA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default GA
