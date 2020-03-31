import React from 'react'
import data from '../../../data/us/states/co.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-co-all.geo.json'

function CO() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default CO
