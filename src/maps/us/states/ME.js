import React from 'react'
import data from '../../../data/us/states/me.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-me-all.geo.json'

function ME() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default ME
