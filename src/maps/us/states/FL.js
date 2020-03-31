import mapData from '@highcharts/map-collection/countries/us/us-fl-all.geo.json'
import React from 'react'
import data from '../../../data/us/states/fl.json'
import reportService from '../report-service'
import State from '../../State'

function FL() {
  return <State {...data} mapData={mapData} reportService={reportService} />
}

export default FL
