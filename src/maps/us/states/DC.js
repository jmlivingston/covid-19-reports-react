import React from 'react'
import data from '../../../data/us/states/dc.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-dc-all.geo.json'

function DC() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default DC
