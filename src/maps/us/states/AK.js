import React from 'react'
import data from '../../../data/us/states/ak.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ak-all.geo.json'

function AK() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default AK
