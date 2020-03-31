import React from 'react'
import data from '../../../data/us/states/nv.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-nv-all.geo.json'

function NV() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NV
