import React from 'react'
import data from '../../../data/us/states/pa.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-pa-all.geo.json'

function PA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default PA
