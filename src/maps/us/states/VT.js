import React from 'react'
import data from '../../../data/us/states/vt.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-vt-all.geo.json'

function VT() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default VT
