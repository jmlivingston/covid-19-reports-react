import React from 'react'
import data from '../../../data/us/states/sd.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-sd-all.geo.json'

function SD() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default SD
