import React from 'react'
import data from '../../../data/us/states/nd.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-nd-all.geo.json'

function ND() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default ND
