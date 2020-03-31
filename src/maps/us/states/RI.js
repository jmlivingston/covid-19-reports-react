import React from 'react'
import data from '../../../data/us/states/ri.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ri-all.geo.json'

function RI() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default RI
