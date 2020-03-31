import React from 'react'
import data from '../../../data/us/states/oh.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-oh-all.geo.json'

function OH() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default OH
