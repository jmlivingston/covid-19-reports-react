import mapData from '@highcharts/map-collection/countries/us/us-hi-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/hi.json'
import reportService from '../report-service'
import State from '../../State'

function HI() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default HI
