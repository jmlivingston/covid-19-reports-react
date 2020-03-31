import React from 'react'
import data from '../../../data/us/states/nc.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-nc-all.geo.json'

function NC() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NC
