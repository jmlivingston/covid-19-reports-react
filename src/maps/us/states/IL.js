import React from 'react'
import data from '../../../data/us/states/il.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-il-all.geo.json'

function IL() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default IL
