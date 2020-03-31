import React from 'react'
import data from '../../../data/us/states/or.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-or-all.geo.json'

function OR() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default OR
