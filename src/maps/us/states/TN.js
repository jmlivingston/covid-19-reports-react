import React from 'react'
import data from '../../../data/us/states/tn.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-tn-all.geo.json'

function TN() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default TN
