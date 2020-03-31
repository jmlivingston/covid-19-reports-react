import React from 'react'
import data from '../../../data/us/states/ne.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ne-all.geo.json'

function NE() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NE
