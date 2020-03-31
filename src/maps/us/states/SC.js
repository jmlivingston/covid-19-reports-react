import React from 'react'
import data from '../../../data/us/states/sc.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-sc-all.geo.json'

function SC() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default SC
