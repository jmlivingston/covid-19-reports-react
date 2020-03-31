import React from 'react'
import data from '../../../data/us/states/ca.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ca-all.geo.json'

function CA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default CA
