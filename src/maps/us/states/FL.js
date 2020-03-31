import React from 'react'
import data from '../../../data/us/states/fl.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-fl-all.geo.json'

function FL() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default FL
