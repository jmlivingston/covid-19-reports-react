import mapData from '@highcharts/map-collection/countries/us/us-ma-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/ma.json'
import reportService from '../report-service'
import State from '../../State'

function MA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MA
