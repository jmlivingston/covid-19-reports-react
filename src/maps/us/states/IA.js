import React from 'react'
import data from '../../../data/us/states/ia.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ia-all.geo.json'

function IA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default IA
