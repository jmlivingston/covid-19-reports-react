import React from 'react'
import data from '../../../data/us/states/in.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-in-all.geo.json'

function IN() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default IN
