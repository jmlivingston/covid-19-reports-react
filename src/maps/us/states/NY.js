import React from 'react'
import data from '../../../data/us/states/ny.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ny-all.geo.json'

function NY() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default NY
