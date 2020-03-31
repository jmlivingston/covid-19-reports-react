import React from 'react'
import data from '../../../data/us/states/wy.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-wy-all.geo.json'

function WY() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WY
