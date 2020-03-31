import React from 'react'
import data from '../../../data/us/states/wa.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-wa-all.geo.json'

function WA() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default WA
