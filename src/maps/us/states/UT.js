import React from 'react'
import data from '../../../data/us/states/ut.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ut-all.geo.json'

function UT() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default UT
