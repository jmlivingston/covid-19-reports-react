import React from 'react'
import data from '../../../data/us/states/mt.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-mt-all.geo.json'

function MT() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MT
