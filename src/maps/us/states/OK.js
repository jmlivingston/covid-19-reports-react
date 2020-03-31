import React from 'react'
import data from '../../../data/us/states/ok.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-ok-all.geo.json'

function OK() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default OK
