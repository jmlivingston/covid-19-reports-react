import React from 'react'
import data from '../../../data/us/states/de.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-de-all.geo.json'

function DE() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default DE
