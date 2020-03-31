import React from 'react'
import data from '../../../data/us/states/ms.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ms-all.geo.json'

function MS() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MS
