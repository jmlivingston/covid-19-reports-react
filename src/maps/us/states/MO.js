import React from 'react'
import data from '../../../data/us/states/mo.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-mo-all.geo.json'

function MO() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MO
