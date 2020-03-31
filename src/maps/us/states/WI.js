import React from 'react'
import data from '../../../data/us/states/wi.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-wi-all.geo.json'

function WI() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WI
