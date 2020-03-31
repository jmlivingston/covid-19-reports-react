import React from 'react'
import data from '../../../data/us/states/ky.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ky-all.geo.json'

function KY() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default KY
