import React from 'react'
import data from '../../../data/us/states/az.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-az-all.geo.json'

function AZ() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default AZ
