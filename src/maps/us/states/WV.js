import React from 'react'
import data from '../../../data/us/states/wv.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-wv-all.geo.json'

function WV() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WV
