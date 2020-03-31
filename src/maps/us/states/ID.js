import React from 'react'
import data from '../../../data/us/states/id.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-id-all.geo.json'

function ID() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default ID
