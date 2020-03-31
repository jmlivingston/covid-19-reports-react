import React from 'react'
import data from '../../../data/us/states/mn.json'
import State from '../../State'
import reportService from '../report-service'
import mapData from './node_modules/@highcharts/map-collection/countries/us/us-mn-all.geo.json'

function MN() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default MN
